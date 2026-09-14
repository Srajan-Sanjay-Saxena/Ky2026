"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { PassCard } from "./PassCard";
import { PASSES, ANIMATION } from "./passes.config";
import { Z_INDEX } from "./passes.theme";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks";
import {
  COLORS,
  GRADIENT_TEXT_GOLD,
  GRADIENT_LINE_GOLD_LEFT,
  GRADIENT_LINE_GOLD_RIGHT,
  GRADIENT_BORDER_ORNATE,
} from "@/components/constants/palette";

// ============================================
// Animation Variants
// ============================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...ANIMATION.stagger, when: "beforeChildren" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ============================================
// Mandala Ring Component
// ============================================
function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {[...Array(12)].map((_, i) => (
        <line key={`line-${i}`} x1="100" y1="5" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" transform={`rotate(${i * 30} 100 100)`} />
      ))}
      {[...Array(24)].map((_, i) => (
        <circle key={`dot-${i}`} cx="100" cy="12" r="2" fill="currentColor" opacity="0.4" transform={`rotate(${i * 15} 100 100)`} />
      ))}
      {[...Array(8)].map((_, i) => (
        <ellipse key={`petal-${i}`} cx="100" cy="60" rx="8" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" transform={`rotate(${i * 45} 100 100)`} />
      ))}
    </svg>
  );
}

// ============================================
// Floating Particles with Glow
// Pre-generated values to avoid hydration mismatch
// ============================================
const PARTICLE_CONFIG = {
  desktop: 30,
  mobile: 10,
};

// Pre-generate particle properties (deterministic, no hydration issues)
const PARTICLES = Array.from({ length: PARTICLE_CONFIG.desktop }, (_, i) => ({
  id: i,
  width: (i * 7 % 5) + 2,           // 2-6px
  height: (i * 7 % 5) + 2,
  opacity: 0.2 + (i % 6) * 0.1,     // 0.2-0.7
  left: (i * 37 % 100),             // 0-99%
  top: (i * 41 % 100),              // 0-99%
  shadowSize: 5 + (i % 10),         // 5-14px
  yOffset: -50 - (i % 30),          // -50 to -79
  xOffset: (i % 20) - 10,           // -10 to 9
  duration: 6 + (i % 5),            // 6-10s
  delay: (i % 4),                   // 0-3s
}));

function FloatingParticles({ isMobile, isInView }: { isMobile: boolean; isInView: boolean }) {
  // Disable animated particles on mobile for better performance
  if (isMobile) return null;
  
  const particles = PARTICLES;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: Z_INDEX.particles }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            background: `radial-gradient(circle, rgba(212, 168, 83, ${p.opacity}) 0%, transparent 70%)`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            boxShadow: `0 0 ${p.shadowSize}px rgba(212, 168, 83, 0.3)`,
          }}
          animate={isInView ? {
            y: [0, p.yOffset, 0],
            x: [0, p.xOffset, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          } : undefined}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// Animated Geometric Pattern
// ============================================
function GeometricPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="60" stroke={COLORS.GOLD} strokeWidth="1" />
          </pattern>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40">
            <circle cx="20" cy="20" r="1.5" fill={COLORS.GOLD} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
      </svg>
    </div>
  );
}

// ============================================
// Animated Paisley/Banarasi Pattern
// ============================================
function BanarasiPatternAnimated({ isMobile }: { isMobile: boolean }) {
  // Static on mobile
  if (isMobile) {
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4a853' stroke-width='0.5'%3E%3Cpath d='M40 10c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15zm0 5c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z' opacity='0.15'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%23d4a853' opacity='0.1'/%3E%3Cpath d='M20 60c0-11 9-20 20-20s20 9 20 20' opacity='0.08'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />
    );
  }

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4a853' stroke-width='0.5'%3E%3Cpath d='M40 10c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15zm0 5c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z' opacity='0.15'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%23d4a853' opacity='0.1'/%3E%3Cpath d='M20 60c0-11 9-20 20-20s20 9 20 20' opacity='0.08'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
        opacity: 0.5,
      }}
    />
  );
}

// ============================================
// Vignette Overlay
// ============================================
function VignetteOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10, 5, 15, 0.6) 100%),
          radial-gradient(ellipse at 50% 0%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 100%, rgba(139, 69, 19, 0.15) 0%, transparent 50%)
        `,
      }}
    />
  );
}

// ============================================
// Main PassesSection Component
// ============================================
export function PassesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mandalaLeftRef = useRef<HTMLDivElement>(null);
  const mandalaRightRef = useRef<HTMLDivElement>(null);
  const mandalaCenterRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  useEffect(() => {
    // Skip GSAP animations if user prefers reduced motion
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Only run mandala animations when in view
      if (isInView) {
        gsap.to(mandalaLeftRef.current, { rotation: 360, duration: 80, repeat: -1, ease: "none" });
        gsap.to(mandalaRightRef.current, { rotation: -360, duration: 100, repeat: -1, ease: "none" });
        gsap.to(mandalaCenterRef.current, { rotation: 360, duration: 120, repeat: -1, ease: "none" });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView, prefersReducedMotion]);

  const handleSelect = useCallback((passId: string) => {
    console.log(`Selected pass: ${passId}`);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-8 md:py-16 overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg,
            #0a0510 0%,
            #120818 10%,
            #1a0c22 25%,
            #22102c 40%,
            #2a1435 50%,
            #22102c 60%,
            #1a0c22 75%,
            #120818 90%,
            #0a0510 100%
          )
        `,
      }}
    >
      {/* Top ornate border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "80px",
          background: `linear-gradient(180deg, rgba(212, 168, 83, 0.12) 0%, transparent 100%)`,
          borderTop: "3px solid transparent",
          borderImage: `${GRADIENT_BORDER_ORNATE} 1`,
          zIndex: Z_INDEX.topBorder,
        }}
      />

      {/* Animated patterns */}
      <GeometricPattern />
      <BanarasiPatternAnimated isMobile={isMobile} />

      {/* Left Mandala - hidden on mobile */}
      {!isMobile && (
        <div
          ref={mandalaLeftRef}
          className="absolute -left-[15%] top-[15%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none"
          style={{ zIndex: Z_INDEX.mandala, opacity: 0.08, color: COLORS.GOLD }}
        >
          <MandalaRing className="w-full h-full" />
        </div>
      )}

      {/* Right Mandala - hidden on mobile */}
      {!isMobile && (
        <div
          ref={mandalaRightRef}
          className="absolute -right-[15%] bottom-[10%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] pointer-events-none"
          style={{ zIndex: Z_INDEX.mandala, opacity: 0.06, color: COLORS.BRIGHT_GOLD }}
        >
          <MandalaRing className="w-full h-full" />
        </div>
      )}

      {/* Center Mandala (behind cards) - hidden on mobile */}
      {!isMobile && (
        <div
          ref={mandalaCenterRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none"
          style={{ zIndex: 1, opacity: 0.03, color: COLORS.GOLD }}
        >
          <MandalaRing className="w-full h-full" />
        </div>
      )}

      {/* Floating particles */}
      <FloatingParticles isMobile={isMobile} isInView={isInView} />

      {/* Vignette */}
      <VignetteOverlay />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
        style={{ zIndex: Z_INDEX.cards }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
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

        {/* Hover instruction */}
        <motion.p
          className="text-center text-gray-500 text-sm mb-8 hidden sm:block"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5 } } }}
        >
          [ HOVER TO SEE BENEFITS ]
        </motion.p>

        {/* Pass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 justify-items-center items-end">
          {PASSES.map((pass, index) => (
            <PassCard key={pass.id} pass={pass} index={index} onSelect={handleSelect} />
          ))}
        </div>

        {/* Mobile tap instruction */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-8 sm:hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5 } } }}
        >
          [ TAP TO SEE BENEFITS ]
        </motion.p>

        {/* Footer note */}
        <motion.p
          className="text-center text-gray-600 text-sm mt-12"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.8 } } }}
        >
          * All passes include entry to the 3-day festival. Prices inclusive of all taxes.
        </motion.p>
      </motion.div>

      {/* Bottom ornate border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: GRADIENT_BORDER_ORNATE }}
      />
    </section>
  );
}
