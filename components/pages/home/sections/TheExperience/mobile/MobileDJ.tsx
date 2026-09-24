"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { JAZZ_COLORS } from "@/components/pages/home/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// DJ CHARACTER — Mobile only, static, lower z-index (no animation)
// ═══════════════════════════════════════════════════════════════════

export const MobileDJ = memo(function MobileDJ() {
  return (
    <div
      className="sm:hidden absolute -bottom-[6%] -right-[22%] w-[85vw] pointer-events-none"
      style={{ zIndex: 1, opacity: 0.85 }}
    >
      <Image
        src={IMAGES.festivalVibes.dj}
        alt="DJ"
        width={1200}
        height={1400}
        className="relative w-full h-auto"
        style={{
          filter: `drop-shadow(0 0 30px ${JAZZ_COLORS.HOT_PINK}50)`,
        }}
      />
    </div>
  );
});
