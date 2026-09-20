"use client";

import { memo } from "react";

// ═══════════════════════════════════════════════════════════════════
// FAINT DRIFTING CLOUDS — Desktop only, decorative
// ═══════════════════════════════════════════════════════════════════
export const DriftingClouds = memo(function DriftingClouds() {
  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden z-3">
      {[...Array(4)].map((_, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute opacity-[0.08]"
          style={{
            top: `${5 + i * 8}%`,
            left: i % 2 === 0 ? "-20%" : "100%",
            width: `${150 + i * 30}px`,
            height: `${40 + i * 10}px`,
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: `cloudDrift${i % 2 === 0 ? "Right" : "Left"} ${40 + i * 10}s linear infinite`,
            animationDelay: `${i * 8}s`,
          }}
        />
      ))}
    </div>
  );
});
