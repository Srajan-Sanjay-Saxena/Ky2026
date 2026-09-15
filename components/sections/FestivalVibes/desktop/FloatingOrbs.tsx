"use client";

import { memo } from "react";
import { JAZZ_COLORS } from "@/components/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// FLOATING ORBS — Desktop only, static ambient glow
// ═══════════════════════════════════════════════════════════════════

export const FloatingOrbs = memo(function FloatingOrbs() {
  return (
    <>
      <div
        className="hidden sm:block absolute top-[10%] left-[5%] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${JAZZ_COLORS.HOT_PINK}15 0%, transparent 60%)`,
          filter: "blur(60px)",
          animation: "pulseSlow 6s ease-in-out infinite",
        }}
      />
      <div
        className="hidden sm:block absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${JAZZ_COLORS.GOLD}10 0%, transparent 60%)`,
          filter: "blur(80px)",
          animation: "pulseSlow 8s ease-in-out infinite 2s",
        }}
      />
      <div
        className="hidden sm:block absolute top-[40%] right-[5%] w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${JAZZ_COLORS.ELECTRIC_BLUE}12 0%, transparent 60%)`,
          filter: "blur(50px)",
          animation: "pulseSlow 5s ease-in-out infinite 1s",
        }}
      />
    </>
  );
});
