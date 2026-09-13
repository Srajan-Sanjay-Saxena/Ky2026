/**
 * Upload images to ImageKit
 * Run with: npx tsx scripts/upload-to-imagekit.ts
 */

import ImageKit from "imagekit";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

interface UploadResult {
  name: string;
  url: string;
  fileId: string;
}

async function uploadImage(
  filePath: string,
  fileName: string,
  folder: string = "/passes"
): Promise<UploadResult> {
  const fileBuffer = fs.readFileSync(filePath);
  const base64File = fileBuffer.toString("base64");

  const response = await imagekit.upload({
    file: base64File,
    fileName: fileName,
    folder: folder,
    useUniqueFileName: false, // Keep original name
  });

  return {
    name: fileName,
    url: response.url,
    fileId: response.fileId,
  };
}

async function main() {
  const publicDir = path.join(process.cwd(), "public");

  const passImages = [
    { file: "YatriPass_nobg.png", name: "yatri-pass.png" },
    { file: "darbarPass_nobg.png", name: "darbar-pass.png" },
    { file: "swarnimPass_nobg.png", name: "swarnim-pass.png" },
  ];

  console.log("🚀 Uploading images to ImageKit...\n");

  const results: UploadResult[] = [];

  for (const img of passImages) {
    const filePath = path.join(publicDir, img.file);

    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${img.file}`);
      continue;
    }

    try {
      console.log(`📤 Uploading ${img.file}...`);
      const result = await uploadImage(filePath, img.name);
      results.push(result);
      console.log(`✅ Uploaded: ${result.url}\n`);
    } catch (error) {
      console.error(`❌ Failed to upload ${img.file}:`, error);
    }
  }

  console.log("\n📋 Summary:");
  console.log("─".repeat(60));
  results.forEach((r) => {
    console.log(`${r.name}: ${r.url}`);
  });

  console.log("\n💡 Update your passes.config.ts with these URLs:");
  console.log("─".repeat(60));
  console.log(`
export const PASSES = [
  {
    id: "yatri",
    image: "${results.find((r) => r.name.includes("yatri"))?.url || ""}",
    // ...
  },
  {
    id: "darbar",
    image: "${results.find((r) => r.name.includes("darbar"))?.url || ""}",
    // ...
  },
  {
    id: "swarnim",
    image: "${results.find((r) => r.name.includes("swarnim"))?.url || ""}",
    // ...
  },
];
  `);
}

main().catch(console.error);
