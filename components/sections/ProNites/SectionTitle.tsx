"use client";

import { memo } from "react";
import { CONCERT_COLORS } from "./constants";
import { EqualizerBars } from "./EqualizerBars";

export const SectionTitle = memo(function SectionTitle() {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <EqualizerBars className="opacity-80" color={CONCERT_COLORS.NEON_PINK} />
        <span
          className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold"
          style={{
            color: CONCERT_COLORS.NEON_PINK,
            textShadow: `0 0 20px ${CONCERT_COLORS.NEON_PINK}`,
          }}
        >
          Pro Nites 2026
        </span>
        <EqualizerBars className="opacity-80" color={CONCERT_COLORS.NEON_PINK} />
      </div>
      
      {/* Main title */}
      <h2 className="relative inline-block">
        <span
          className="text-4xl sm:text-6xl font-black uppercase tracking-tight"
          style={{
            background: `linear-gradient(180deg, 
              #FFFFFF 0%, 
              ${CONCERT_COLORS.NEON_PINK} 40%,
              ${CONCERT_COLORS.NEON_PURPLE} 60%,
              ${CONCERT_COLORS.NEON_CYAN} 100%
            )`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Lineup
        </span>
        
        {/* Reflection - desktop only */}
        <span
          className="hidden sm:block absolute left-0 top-full w-full text-4xl sm:text-6xl font-black uppercase tracking-tight opacity-20 scale-y-[-1] origin-top"
          style={{
            background: `linear-gradient(180deg, ${CONCERT_COLORS.NEON_CYAN} 0%, transparent 60%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 50%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 50%)",
          }}
          aria-hidden="true"
        >
          The Lineup
        </span>
      </h2>
      
      {/* Subtitle */}
      <p className="mt-6 text-sm sm:text-base max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
        Three nights. Unlimited energy. The biggest artists hit the stage.
      </p>
    </div>
  );
});
