import { memo } from "react";
import { COLORS } from "@/components/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// BRAND HEADER — centered brand title / 2027 / tagline
// ═══════════════════════════════════════════════════════════════════
export const BrandHeader = memo(function BrandHeader() {
  return (
    <div className="text-center mb-12 sm:mb-14 md:mb-16">
      <h3
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-5"
        style={{
          color: COLORS.BRIGHT_GOLD,
          textShadow:
            "0 0 30px rgba(255,215,0,0.5), 0 2px 4px rgba(0,0,0,0.4)",
          fontFamily: "'Cinzel Decorative', serif",
        }}
      >
        काशी यात्रा
      </h3>
      <p
        className="text-xl sm:text-2xl md:text-3xl tracking-[0.4em] uppercase"
        style={{
          color: COLORS.BRIGHT_GOLD,
          opacity: 0.85,
          fontFamily: "'Cinzel', serif",
          textShadow: "0 0 15px rgba(255,215,0,0.3)",
        }}
      >
        2027
      </p>
      <p
        className="mt-5 text-base sm:text-lg max-w-lg mx-auto"
        style={{
          color: COLORS.CREAM,
          opacity: 0.8,
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.05em",
        }}
      >
        The annual cultural festival celebrating the eternal spirit of Kashi
      </p>
    </div>
  );
});
