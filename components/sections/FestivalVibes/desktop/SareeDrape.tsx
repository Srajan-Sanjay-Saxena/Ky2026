"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { JAZZ_COLORS } from "@/components/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// BANARASI SAREE DRAPE — Top Right Corner, static (all screens)
// ═══════════════════════════════════════════════════════════════════

export const SareeDrape = memo(function SareeDrape() {
  return (
    <div
      className="absolute -top-[2%] -right-[15%] w-[80vw] max-w-[1000px] pointer-events-none"
      style={{
        zIndex: 1,
        opacity: 0.7,
        maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 40%, transparent 95%)",
      }}
    >
      <Image
        src={IMAGES.misc.sareeDrape}
        alt=""
        width={1200}
        height={1600}
        className="w-full h-auto"
        style={{
          filter: `drop-shadow(0 0 40px ${JAZZ_COLORS.DEEP_MAGENTA}40)`,
        }}
      />
    </div>
  );
});
