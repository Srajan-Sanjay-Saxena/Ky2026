"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export const GangaAartiSaint = memo(function GangaAartiSaint() {
  return (
    <div className="pointer-events-none hidden sm:block absolute sm:left-[-9%] sm:bottom-[160px] sm:w-[620px] sm:h-[900px] sm:z-0">
      <Image
        src={IMAGES.vibes.gangaAartiSaint}
        alt="Priest performing Ganga Aarti"
        fill
        className="object-contain object-bottom"
        style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
