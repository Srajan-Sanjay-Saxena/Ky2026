"use client";

import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * It's an accessibility feature that detects if the user has enabled "reduce motion" in their device settings.

 *  Why people use it
   - Motion sickness / vestibular disorders (animations make them dizzy/nauseous)
   - Epilepsy (some animations can trigger seizures)
   - ADHD / focus issues (animations are distracting)
   - Just personal preference

 * Hook to detect user's reduced motion preference.
 * 
 * Returns true if user has enabled "Reduce Motion" in their OS settings.
 * Use this to disable or simplify animations for accessibility.
 * 
 * @example
 * const prefersReducedMotion = usePrefersReducedMotion();
 * 
 * // Skip GSAP animation
 * useEffect(() => {
 *   if (prefersReducedMotion) return;
 *   gsap.to(ref.current, { rotation: 360, repeat: -1 });
 * }, [prefersReducedMotion]);
 * 
 * <motion.div animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }} />
 */
export function usePrefersReducedMotion(): boolean {
  // Default to false on server, will update on client
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes (user might toggle setting while on page)
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}
