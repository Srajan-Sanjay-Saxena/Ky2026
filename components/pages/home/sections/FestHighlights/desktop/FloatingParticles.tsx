"use client";

import { memo } from "react";

// ═══════════════════════════════════════════════════════════════════
// FLOATING PARTICLES — 15 drifting glow particles (desktop only)
// ═══════════════════════════════════════════════════════════════════
export const FloatingParticles = memo(function FloatingParticles() {
  return (
    /* Floating particles - Desktop only */
    <div className="hidden sm:block absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "#FF6B00" : "#FFD700",
            opacity: 0.3 + Math.random() * 0.3,
            animation: `floatParticle ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
});
