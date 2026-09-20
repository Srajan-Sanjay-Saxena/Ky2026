"use client";

import { memo } from "react";
import { CONCERT_COLORS } from "../constants";
import { EqualizerBars } from "./EqualizerBars";

export const SectionTitle = memo(function SectionTitle() {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <EqualizerBars
          className="hidden sm:flex opacity-80"
          color={CONCERT_COLORS.NEON_PINK}
        />
        <span
          className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-[#FFD700] sm:text-[#FF1493] [text-shadow:0_1px_8px_rgba(0,0,0,0.95)] sm:[text-shadow:0_0_20px_#FF1493]"
        >
          Pro Nites 2027
        </span>
        <EqualizerBars
          className="hidden sm:flex opacity-80"
          color={CONCERT_COLORS.NEON_PINK}
        />
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
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 50%)",
          }}
          aria-hidden="true"
        >
          The Lineup
        </span>
      </h2>

      {/* Subtitle */}
      <p
        className="mt-6 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-semibold sm:font-normal text-stone-300 sm:text-white/50 [text-shadow:0_1px_8px_rgba(0,0,0,0.95)] sm:[text-shadow:none]"
      >
        Three nights. Unlimited energy. The biggest artists hit the stage.
      </p>
    </div>
  );
});
