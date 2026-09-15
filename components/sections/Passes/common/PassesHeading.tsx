"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  COLORS,
  GRADIENT_TEXT_GOLD,
  GRADIENT_LINE_GOLD_LEFT,
  GRADIENT_LINE_GOLD_RIGHT,
} from "@/components/constants/palette";

// ============================================
// Heading Animation Variants
// ============================================
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ============================================
// Passes Heading
// ============================================
export const PassesHeading = memo(function PassesHeading({ isMobile }: { isMobile: boolean }) {
  return (
    <motion.div className="text-center mb-8 md:mb-12" variants={headingVariants}>
      {/* Decorative top element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-16 h-[1px]" style={{ background: GRADIENT_LINE_GOLD_LEFT }} />
        {isMobile ? (
          <span className="text-2xl" style={{ color: COLORS.BRIGHT_GOLD }}>✦</span>
        ) : (
          <motion.span
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
            style={{ color: COLORS.BRIGHT_GOLD }}
          >
            ✦
          </motion.span>
        )}
        <span className="w-16 h-[1px]" style={{ background: GRADIENT_LINE_GOLD_RIGHT }} />
      </div>

      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
        style={{
          fontFamily: "var(--font-ethereal), serif",
          ...GRADIENT_TEXT_GOLD,
          textShadow: `0 0 40px rgba(212, 168, 83, 0.3)`,
        }}
      >
        KASHIYATRA&apos;26 - Pass Selection
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: COLORS.LAVENDER }}>
        Choose your journey to the cultural extravaganza
      </p>

      {/* Decorative bottom element */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="w-6 h-6 rotate-45 opacity-40" style={{ border: `1px solid ${COLORS.GOLD}` }} />
        <span className="w-3 h-3 rotate-45 opacity-60" style={{ background: COLORS.GOLD }} />
        <span className="w-6 h-6 rotate-45 opacity-40" style={{ border: `1px solid ${COLORS.GOLD}` }} />
      </div>
    </motion.div>
  );
});
