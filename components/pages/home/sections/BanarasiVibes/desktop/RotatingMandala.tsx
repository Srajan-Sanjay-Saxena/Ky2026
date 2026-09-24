"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

interface RotatingMandalaProps {
  isAnimating: boolean;
  prefersReducedMotion: boolean;
}

export const RotatingMandala = memo(function RotatingMandala({
  isAnimating,
  prefersReducedMotion,
}: RotatingMandalaProps) {
  return (
    <div
      className="pointer-events-none hidden sm:block absolute left-1/2 -translate-x-1/2 top-[12%] w-[380px] h-[380px] md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px] opacity-35"
      style={{ zIndex: 5 }}
    >
      <Image
        src={IMAGES.vibes.mandala}
        alt=""
        fill
        className="object-contain"
        style={{
          animation: "spin 40s linear infinite",
          animationPlayState: prefersReducedMotion || !isAnimating ? "paused" : "running",
          filter: "drop-shadow(0 0 30px rgba(255,180,50,0.35))",
        }}
      />
    </div>
  );
});
