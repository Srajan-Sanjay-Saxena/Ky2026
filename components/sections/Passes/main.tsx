"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { PassCard } from "./PassCard";
import { PASSES, ANIMATION } from "./passes.config";
import {
  SECTION_BG,
  BANARASI_PATTERN,
  TOP_BORDER_PATTERN,
  HEADING_GRADIENT,
  SUBHEADING_COLOR,
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
 * Mandala Ring SVG Component
 */
function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="65"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.6"
      />
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* Radial lines */}
      {[...Array(12)].map((_, i) => (
        <line
          key={`line-${i}`}
          x1="100"
          y1="5"
          x2="100"
          y2="30"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      {/* Outer dots */}
      {[...Array(24)].map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx="100"
          cy="12"
          r="2"
          fill="currentColor"
          opacity="0.4"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
      {/* Inner decorative petals */}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={`petal-${i}`}
          cx="100"
          cy="60"
          rx="8"
          ry="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
    </svg>
  );
}

/**
 * Animated floating particles
 */
function FloatingParticles() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: Z_INDEX.particles }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `rgba(212, 168, 83, ${Math.random() * 0.4 + 0.1})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function PassesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mandalaLeftRef = useRef<HTMLDivElement>(null);
  const mandalaRightRef = useRef<HTMLDivElement>(null);

  // GSAP animations for mandalas
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left mandala - slow clockwise rotation
      gsap.to(mandalaLeftRef.current, {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: "none",
      });

      // Right mandala - slow counter-clockwise rotation
      gsap.to(mandalaRightRef.current, {
        rotation: -360,
        duration: 100,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelect = useCallback((passId: string) => {
    console.log(`Selected pass: ${passId}`);
    // window.location.href = `/checkout?pass=${passId}`;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-8 md:py-16 overflow-hidden"
      style={SECTION_BG}
    >
      {/* Top Banarasi border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ ...TOP_BORDER_PATTERN, zIndex: Z_INDEX.topBorder }}
      />

      {/* Banarasi pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: BANARASI_PATTERN,
          backgroundRepeat: "repeat",
          zIndex: Z_INDEX.pattern,
        }}
      />

      {/* Left Mandala */}
      <div
        ref={mandalaLeftRef}
        className="absolute -left-[10%] top-[20%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] pointer-events-none"
        style={{ zIndex: Z_INDEX.mandala, opacity: 0.15 }}
      >
        <MandalaRing className="w-full h-full text-[#D4A853]" />
      </div>

      {/* Right Mandala */}
      <div
        ref={mandalaRightRef}
        className="absolute -right-[10%] bottom-[10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none"
        style={{ zIndex: Z_INDEX.mandala, opacity: 0.12 }}
      >
        <MandalaRing className="w-full h-full text-[#FFD700]" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20"
        style={{ zIndex: Z_INDEX.cards }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={headingVariants}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-ethereal), serif",
              ...HEADING_GRADIENT,
            }}
          >
            KASHIYATRA&apos;26 - Pass Selection
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: SUBHEADING_COLOR }}
          >
            Choose your journey to the cultural extravaganza
          </p>
        </motion.div>

        {/* Hover instruction */}
        <motion.p
          className="text-center text-gray-400 text-sm mb-8 hidden md:block"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
        >
          [ HOVER TO SEE BENEFITS ]
        </motion.p>

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

        {/* Mobile tap instruction */}
        <motion.p
          className="text-center text-gray-400 text-sm mt-8 md:hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
        >
          [ TAP TO SEE BENEFITS ]
        </motion.p>

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

      {/* Bottom decorative border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%,
            #8B6914 15%,
            #D4A853 30%, 
            #FFD700 50%,
            #D4A853 70%,
            #8B6914 85%,
            transparent 100%
          )`,
        }}
      />
    </section>
  );
}
