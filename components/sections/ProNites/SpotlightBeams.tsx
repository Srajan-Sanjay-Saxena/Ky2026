"use client";

import { memo } from "react";
import { CONCERT_COLORS } from "./constants";

/**
 * SpotlightBeams - Animated stage lights (Desktop only)
 * Hidden on mobile for performance
 */
export const SpotlightBeams = memo(function SpotlightBeams() {
  return (
    <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left spotlight */}
      <div
        className="absolute top-0 left-[10%] w-[200px] h-[600px] origin-top"
        style={{
          background: `linear-gradient(180deg, ${CONCERT_COLORS.NEON_PINK}20 0%, ${CONCERT_COLORS.NEON_PINK}05 50%, transparent 100%)`,
          transform: "rotate(-20deg)",
          animation: "spotlightSweep 10s ease-in-out infinite",
          filter: "blur(30px)",
        }}
      />
      
      {/* Right spotlight */}
      <div
        className="absolute top-0 right-[10%] w-[200px] h-[600px] origin-top"
        style={{
          background: `linear-gradient(180deg, ${CONCERT_COLORS.NEON_CYAN}20 0%, ${CONCERT_COLORS.NEON_CYAN}05 50%, transparent 100%)`,
          transform: "rotate(20deg)",
          animation: "spotlightSweep 10s ease-in-out infinite reverse",
          filter: "blur(30px)",
        }}
      />
      
      {/* Center spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[500px]"
        style={{
          background: `linear-gradient(180deg, ${CONCERT_COLORS.NEON_PURPLE}15 0%, transparent 100%)`,
          filter: "blur(40px)",
          animation: "pulseSlow 4s ease-in-out infinite",
        }}
      />
    </div>
  );
});
