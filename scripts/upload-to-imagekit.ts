/**
 * Upload ALL images to ImageKit
 * 
 * Usage:
 *   npx tsx scripts/upload-to-imagekit.ts          # skip existing files
 *   npx tsx scripts/upload-to-imagekit.ts --force  # overwrite all files
 */

import ImageKit from "imagekit";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env" });

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

// Parse CLI args
const forceUpload = process.argv.includes("--force");

interface ImageToUpload {
  localFile: string;
  remoteName: string;
  folder: string;
}

// Define all images to upload with their target folders
const IMAGES_TO_UPLOAD: ImageToUpload[] = [
  // Passes
  // { localFile: "YatriPass_nobg.png", remoteName: "yatri-pass.png", folder: "/passes" },
  // { localFile: "darbarPass_nobg.png", remoteName: "darbar-pass.png", folder: "/passes" },
  // { localFile: "swarnimPass_nobg.png", remoteName: "swarnim-pass.png", folder: "/passes" },
  
  // // Hero section
  // { localFile: "kashiyatra.png", remoteName: "kashiyatra-logo.png", folder: "/hero" },
  // { localFile: "ghats.png", remoteName: "ghats.png", folder: "/hero" },
  // { localFile: "kashivishwanath.png", remoteName: "kashivishwanath-temple.png", folder: "/hero" },
  // { localFile: "varanasiBack.png", remoteName: "varanasi-back.png", folder: "/hero" },
  // { localFile: "stone.png", remoteName: "stepping-stone.png", folder: "/hero" },
  
  // // Navbar
  // { localFile: "Nav.png", remoteName: "nav-bg.png", folder: "/navbar" },
  // { localFile: "NavBadge.png", remoteName: "nav-badge.png", folder: "/navbar" },
  
  // // Banarasi Vibes
  // { localFile: "mahamana.png", remoteName: "mahamana.png", folder: "/vibes" },
  // { localFile: "bhuGate.png", remoteName: "bhu-gate.png", folder: "/vibes" },
  // { localFile: "rickshaw_nobg.png", remoteName: "rickshaw.png", folder: "/vibes" },
  // { localFile: "lassi_nobg.png", remoteName: "lassi.png", folder: "/vibes" },
  // { localFile: "malaiyo_nobg.png", remoteName: "malaiyo.png", folder: "/vibes" },
  // { localFile: "paan_nobg.png", remoteName: "paan.png", folder: "/vibes" },
  // { localFile: "tabla_sitar_nobg.png", remoteName: "tabla-sitar.png", folder: "/vibes" },
  // { localFile: "vibesBG.png", remoteName: "vibes-bg.png", folder: "/vibes" },
  // { localFile: "roads.png", remoteName: "roads.png", folder: "/vibes" },
  
  // // Fest Highlights
  // { localFile: "durga.svg", remoteName: "durga.svg", folder: "/highlights" },
  // { localFile: "durga_temple.svg", remoteName: "durga-temple.svg", folder: "/highlights" },
  
  // // Misc
  // { localFile: "lord_shiva.png", remoteName: "lord-shiva.png", folder: "/misc" },
  // { localFile: "MoonBG.png", remoteName: "moon-bg.png", folder: "/misc" },
  // { localFile: "DJ.png", remoteName: "dj.png", folder: "/misc" },
  // { localFile: "silhoutte.png", remoteName: "concert-crowd.png", folder: "/misc" },
  // { localFile: "SareeDrape.png", remoteName: "saree-drape.png", folder: "/misc" },
  // { localFile: "welcomeFlag.png", remoteName: "welcome-flag.png", folder: "/misc" },
  // { localFile: "kites.png", remoteName: "kites.png", folder: "/misc" },
  { localFile: "rockstar.png", remoteName: "rockstar.png", folder: "/misc" },

  // About page
  // { localFile: "about/mandlaOrnament.png", remoteName: "mandala-ornament.png", folder: "/about" },
  // { localFile: "about/peacock_nobg.png", remoteName: "peacock.png", folder: "/about" },
  // { localFile: "about/omLotus.png", remoteName: "om-lotus.png", folder: "/about" },
  // { localFile: "about/mysticDivider.png", remoteName: "mystic-divider.png", folder: "/about" },
  // { localFile: "about/diyaCluster.png", remoteName: "diya-cluster.png", folder: "/about" },
  // { localFile: "about/cornerOrnament.png", remoteName: "corner-ornament.png", folder: "/about" },
  // { localFile: "about/bhuRoyalGate.png", remoteName: "bhu-royal-gate.png", folder: "/about" },
  // { localFile: "about/ghatSaloutte.png", remoteName: "ghats-silhouette.png", folder: "/about" },
];

async function checkIfExists(folder: string, fileName: string): Promise<boolean> {
  try {
    const files = await imagekit.listFiles({
      path: folder,
      name: fileName,
    });
    return files.length > 0;
  } catch {
    return false;
  }
}

async function uploadImage(img: ImageToUpload, publicDir: string): Promise<{ name: string; url: string; skipped?: boolean } | null> {
  const filePath = path.join(publicDir, img.localFile);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping (not found): ${img.localFile}`);
    return null;
  }

  // Check if file already exists on ImageKit (unless --force)
  if (!forceUpload) {
    const exists = await checkIfExists(img.folder, img.remoteName);
    if (exists) {
      console.log(`⏭️  Skipping (exists): ${img.folder}/${img.remoteName}`);
      return { name: `${img.folder}/${img.remoteName}`, url: "", skipped: true };
    }
  }

  const fileBuffer = fs.readFileSync(filePath);
  const base64File = fileBuffer.toString("base64");

  const response = await imagekit.upload({
    file: base64File,
    fileName: img.remoteName,
    folder: img.folder,
    useUniqueFileName: false,
  });

  return { name: `${img.folder}/${img.remoteName}`, url: response.url };
}

async function main() {
  const publicDir = path.join(process.cwd(), "public");

  console.log(`🚀 Uploading images to ImageKit... ${forceUpload ? "(FORCE MODE - overwriting all)" : "(skip existing)"}\n`);

  const results: { name: string; url: string }[] = [];
  const skipped: string[] = [];
  const failed: string[] = [];

  for (const img of IMAGES_TO_UPLOAD) {
    try {
      console.log(`📤 Uploading ${img.localFile} → ${img.folder}/${img.remoteName}...`);
      const result = await uploadImage(img, publicDir);
      if (result) {
        if (result.skipped) {
          skipped.push(result.name);
        } else {
          results.push(result);
          console.log(`   ✅ ${result.url}\n`);
        }
      }
    } catch (error) {
      console.error(`   ❌ Failed: ${error}\n`);
      failed.push(img.localFile);
    }
  }

  console.log("\n" + "═".repeat(60));
  console.log("📋 UPLOAD SUMMARY");
  console.log("═".repeat(60));
  console.log(`✅ Uploaded: ${results.length}`);
  console.log(`⏭️  Skipped:  ${skipped.length}`);
  console.log(`❌ Failed:   ${failed.length}`);
  
  if (failed.length > 0) {
    console.log("\nFailed files:", failed.join(", "));
  }

  console.log("\n" + "═".repeat(60));
  console.log("📝 IMAGES CONFIG (copy to config/images.ts)");
  console.log("═".repeat(60));
  
  // Group by folder
  const grouped: Record<string, string[]> = {};
  for (const r of results) {
    const folder = r.name.split("/")[1]; // e.g., "passes" from "/passes/yatri-pass.png"
    if (!grouped[folder]) grouped[folder] = [];
    const key = r.name.split("/").pop()!.replace(/[-.]([a-z])/g, (_, c) => c.toUpperCase()).replace(/\.(png|jpg|svg|webp)$/, "");
    grouped[folder].push(`    ${key}: \`\${IMAGEKIT_BASE}${r.name}\`,`);
  }

  console.log(`
const IMAGEKIT_BASE = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/bi3ktgt58";

export const IMAGES = {`);
  
  for (const [folder, lines] of Object.entries(grouped)) {
    console.log(`  ${folder}: {`);
    lines.forEach(line => console.log(line));
    console.log(`  },`);
  }
  
  console.log(`} as const;`);
}

main().catch(console.error);
