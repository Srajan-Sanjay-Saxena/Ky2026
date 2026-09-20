"use client";

import { memo } from "react";

/**
 * Mobile-only tagline for BanarasiVibes section
 * Sits in the band between the diya and the gate
 */
export const MobileTagline = memo(function MobileTagline() {
  return (
    <div
      className="sm:hidden absolute left-1/2 -translate-x-1/2 top-[44%] w-[86%] text-center pointer-events-none"
      style={{ zIndex: 12 }}
    >
      <p
        className="text-[15px] leading-relaxed font-semibold"
        style={{
          fontFamily: "var(--font-ethereal), 'Noto Sans Devanagari', serif",
          color: "#FDF6E3",
          textShadow: "0 1px 6px rgba(0,0,0,0.6)",
        }}
      >
        Where the ghats hum with aarti bells and the streets breathe
        centuries of culture —
        <span style={{ color: "#FFD700" }}> the eternal spirit of Banaras</span>.
      </p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #FFD700)" }} />
        <span className="text-[10px]" style={{ color: "#FFD700" }}>◆</span>
        <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #FFD700, transparent)" }} />
      </div>
    </div>
  );
});
