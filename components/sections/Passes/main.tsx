"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { PassCard } from "./PassCard";
import { PASSES, ANIMATION } from "./passes.config";
import {
  SECTION_BG,
  PATTERN_OVERLAY,
  HEADING_GRADIENT,
  Z_INDEX,
} from "./passes.styles";

/**
 * Container animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ...ANIMATION.stagger,
      when: "beforeChildren",
    },
  },
};

/**
 * Heading animation variants
 */
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/**
 * Decorative floating particles
 */
function FloatingParticles() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: Z_INDEX.particles }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `rgba(212, 168, 83, ${Math.random() * 0.3 + 0.1})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/**
 * Decorative mandala elements
 */
function MandalaDecor() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{ zIndex: Z_INDEX.pattern }}
    >
      <div
        className="absolute -left-[15%] top-[20%] w-[400px] h-[400px] rounded-full"
        style={{
          border: "1px solid rgba(212, 168, 83, 0.5)",
        }}
      />
      <div
        className="absolute -right-[10%] bottom-[10%] w-[350px] h-[350px] rounded-full"
        style={{
          border: "1px solid rgba(255, 107, 0, 0.5)",
        }}
      />
    </div>
  );
}

export function PassesSection() {
  const handleSelect = useCallback((passId: string) => {
    // TODO: Integrate with payment flow
    console.log(`Selected pass: ${passId}`);
    // window.location.href = `/checkout?pass=${passId}`;
  }, []);

  return (
    <section
      className="relative min-h-screen py-16 md:py-24 overflow-hidden"
      style={SECTION_BG}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ ...PATTERN_OVERLAY, zIndex: Z_INDEX.background }}
      />

      {/* Decorations */}
      <MandalaDecor />
      <FloatingParticles />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ zIndex: Z_INDEX.cards }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={headingVariants}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-ethereal), serif",
              ...HEADING_GRADIENT,
            }}
          >
            Choose Your Yatra
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Select the perfect pass for your Kashiyatra&apos;26 experience.
            Each journey offers unique access to the cultural extravaganza.
          </p>
        </motion.div>

        {/* Pass cards - 3 col desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 justify-items-center items-end">
          {PASSES.map((pass, index) => (
            <PassCard
              key={pass.id}
              pass={pass}
              index={index}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8 } },
          }}
        >
          * All passes include entry to the 3-day festival. Prices inclusive of
          all taxes.
        </motion.p>
      </motion.div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.3), transparent)",
          }}
        />
      </div>
    </section>
  );
}
