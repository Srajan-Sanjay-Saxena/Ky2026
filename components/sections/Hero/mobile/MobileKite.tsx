"use client";

import Image from "next/image";
import { memo } from "react";
import { IMAGES } from "@/lib/images";

// ═══════════════════════════════════════════════════════════════════
// KITES — Mobile only, floating animation (static-positioned, no GSAP ref)
// The `timeOfDay !== "night"` guard is kept in main.tsx.
// ═══════════════════════════════════════════════════════════════════
export const MobileKite = memo(function MobileKite() {
  return (
    <div
      className="sm:hidden absolute top-[8%] left-[5%] w-[34vw] pointer-events-none z-50"
      style={{ transform: "rotate(-10deg)" }}
    >
      <Image
        src={IMAGES.misc.kites}
        alt="Flying Kites"
        width={350}
        height={300}
        className="w-full h-auto"
        style={{
          animation: "kitesFloat 4s ease-in-out infinite",
          filter: "drop-shadow(0 6px 15px rgba(0,0,0,0.25))",
        }}
      />
    </div>
  );
});
