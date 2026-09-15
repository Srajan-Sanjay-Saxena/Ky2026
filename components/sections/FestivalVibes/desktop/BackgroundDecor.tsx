"use client";

import { memo } from "react";
import { JAZZ_COLORS } from "@/components/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// BACKGROUND DECOR — art deco pattern overlay
// (rendered before the main content, matching original DOM order)
// ═══════════════════════════════════════════════════════════════════

export const BackgroundDecor = memo(function BackgroundDecor() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }}
    />
  );
});

// ═══════════════════════════════════════════════════════════════════
// BOTTOM BORDER — bottom decorative border SVG
// (rendered after the main content, matching original DOM order)
// ═══════════════════════════════════════════════════════════════════

export const BottomBorder = memo(function BottomBorder() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        className="w-full h-8"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32 Q300 0 600 16 T1200 32"
          fill={JAZZ_COLORS.GOLD}
          opacity="0.1"
        />
      </svg>
    </div>
  );
});
