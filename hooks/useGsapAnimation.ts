"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GsapEntryAnimation {
  /** Initial state before animation */
  from: gsap.TweenVars;
  /** Target state */
  to: gsap.TweenVars;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

export interface GsapContinuousAnimation {
  /** Animation properties */
  to: gsap.TweenVars;
  /** Duration in seconds */
  duration?: number;
  /** Repeat count (-1 for infinite) */
  repeat?: number;
  /** Yoyo back and forth */
  yoyo?: boolean;
  /** Easing function */
  ease?: string;
}

export interface GsapParallaxConfig {
  /** Multiplier for Y movement (positive = move up on scroll) */
  yMultiplier?: number;
  /** Multiplier for X movement */
  xMultiplier?: number;
  /** ScrollTrigger start position */
  start?: string;
  /** ScrollTrigger end position */
  end?: string;
}

/**
 * Hook for GSAP entry animations with automatic cleanup.
 * 
 * @param containerRef - Parent container ref for gsap.context scoping
 * @param targetRef - Element to animate
 * @param animation - Entry animation config
 * 
 * @example
 * const containerRef = useRef(null);
 * const moonRef = useRef(null);
 * 
 * useGsapEntry(containerRef, moonRef, {
 *   from: { scale: 0.5, opacity: 0 },
 *   to: { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
 * });
 */
export function useGsapEntry<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  targetRef: RefObject<HTMLElement | null>,
  animation: GsapEntryAnimation
) {
  useEffect(() => {
    if (!containerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(targetRef.current, animation.from);
      gsap.to(targetRef.current, {
        ...animation.to,
        delay: animation.delay || 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, targetRef, animation]);
}

/**
 * Hook for continuous GSAP animations (glows, pulses, etc).
 * 
 * @example
 * useGsapContinuous(containerRef, glowRef, {
 *   to: { filter: "drop-shadow(0 0 40px gold)" },
 *   duration: 2,
 *   repeat: -1,
 *   yoyo: true,
 *   ease: "sine.inOut"
 * });
 */
export function useGsapContinuous<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  targetRef: RefObject<HTMLElement | null>,
  animation: GsapContinuousAnimation
) {
  useEffect(() => {
    if (!containerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        ...animation.to,
        duration: animation.duration || 2,
        repeat: animation.repeat ?? -1,
        yoyo: animation.yoyo ?? true,
        ease: animation.ease || "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, targetRef, animation]);
}

/**
 * Hook for scroll-based parallax animations.
 * 
 * @example
 * useGsapParallax(containerRef, moonRef, { yMultiplier: -200 });
 * useGsapParallax(containerRef, templeRef, { yMultiplier: 60 });
 */
export function useGsapParallax<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  targetRef: RefObject<HTMLElement | null>,
  config: GsapParallaxConfig
) {
  const {
    yMultiplier = 0,
    xMultiplier = 0,
    start = "top top",
    end = "bottom top",
  } = config;

  useEffect(() => {
    if (!containerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        end,
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.to(targetRef.current, {
            y: yMultiplier ? p * yMultiplier : undefined,
            x: xMultiplier ? p * xMultiplier : undefined,
            duration: 0.1,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, targetRef, yMultiplier, xMultiplier, start, end]);
}

/**
 * Combined hook for common animation patterns.
 * Re-exports individual hooks for convenience.
 */
export const useGsapAnimation = {
  entry: useGsapEntry,
  continuous: useGsapContinuous,
  parallax: useGsapParallax,
};
