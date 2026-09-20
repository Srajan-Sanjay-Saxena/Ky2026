"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export const BharatnatyamDancer = memo(function BharatnatyamDancer() {
  return (
    <div className="pointer-events-none hidden sm:block absolute sm:right-[-8%] sm:bottom-[100px] sm:w-[690px] sm:h-[800px] sm:z-[35]">
      <Image
        src={IMAGES.vibes.bharatnatyamDancer}
        alt="Classical Bharatnatyam dancer"
        fill
        className="object-contain object-bottom"
        style={{ transform: "scaleX(-1)", filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
