"use client";

import { memo } from "react";
import { COLORS, JAZZ_COLORS } from "@/components/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// STATS SECTION
// ═══════════════════════════════════════════════════════════════════
const stats = [
  { value: "15+", label: "Years of Legacy", icon: "🏛️" },
  { value: "15K+", label: "Expected Footfall", icon: "👥" },
  { value: "50+", label: "Events", icon: "🎭" },
  { value: "100+", label: "Colleges", icon: "🎓" },
];

export const StatsSection = memo(function StatsSection() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative text-center p-4 sm:p-6 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${JAZZ_COLORS.BG_ROYAL}80 0%, ${JAZZ_COLORS.BG_WINE}60 100%)`,
                border: `1px solid ${COLORS.BRIGHT_GOLD}30`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">{stat.icon}</span>
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-black"
                style={{ color: COLORS.BRIGHT_GOLD }}
              >
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
