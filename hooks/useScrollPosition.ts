"use client";

import { useState, useEffect, useCallback } from "react";

export interface ScrollPosition {
  scrollY: number;
  viewportHeight: number;
  documentHeight: number;
  /** Progress through page (0-1) */
  progress: number;
}

export interface ScrollVisibilityConfig {
  /** Show when scrollY > this (default: 85% of viewport) */
  showAfterPercent?: number;
  /** Hide when within this distance from bottom (default: 150% of viewport from bottom) */
  hideBeforeBottomPercent?: number;
}

/**
 * Hook to track scroll position and compute visibility state.
 * 
 * @param config - Optional thresholds for visibility calculation
 * @returns Object with scroll data and visibility state
 * 
 * @example
 * // Basic scroll tracking
 * const { scrollY, progress } = useScrollPosition();
 * 
 * @example
 * // Navbar visibility (show after hero, hide at footer)
 * const { visible } = useScrollPosition({ 
 *   showAfterPercent: 0.85,
 *   hideBeforeBottomPercent: 1.5 
 * });
 */
export function useScrollPosition(config?: ScrollVisibilityConfig) {
  const { showAfterPercent = 0.85, hideBeforeBottomPercent = 1.5 } = config || {};

  const [position, setPosition] = useState<ScrollPosition>({
    scrollY: 0,
    viewportHeight: 0,
    documentHeight: 0,
    progress: 0,
  });

  const [visible, setVisible] = useState(false);

  const updatePosition = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - viewportHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    setPosition({ scrollY, viewportHeight, documentHeight, progress });

    // Calculate visibility based on thresholds
    const showThreshold = viewportHeight * showAfterPercent;
    const hideThreshold = documentHeight - viewportHeight * hideBeforeBottomPercent;
    const shouldShow = scrollY > showThreshold && scrollY < hideThreshold;
    setVisible(shouldShow);
  }, [showAfterPercent, hideBeforeBottomPercent]);

  useEffect(() => {
    // Initial calculation
    updatePosition();

    // Listen for scroll and resize
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [updatePosition]);

  return { ...position, visible };
}
