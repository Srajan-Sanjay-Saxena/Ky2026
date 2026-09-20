"use client";

import { memo } from "react";

// ═══════════════════════════════════════════════════════════════════
// FLOATING EMBERS — Desktop only, decorative (randomized positions)
// ═══════════════════════════════════════════════════════════════════
export const EmberField = memo(function EmberField() {
  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-yellow-400"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${35 + Math.random() * 35}%`,
            animation: `ember ${5 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
});
