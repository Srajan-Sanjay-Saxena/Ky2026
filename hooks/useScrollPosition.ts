"use client";

import { useState, useEffect, useRef } from "react";

/**
 * This whole custom hook is being created for the purpose of customised navbar rendering based on mouse scroll.
 */


// Config for mouse scrolls.
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
  /** Only update state when progress changes by this amount (default: 0.5% = 0.005) */
  progressThreshold?: number;
}

// Helper to get initial values (safe for SSR)
function getInitialPosition(): ScrollPosition {
  if (typeof window === "undefined") {
    return { scrollY: 0, viewportHeight: 0, documentHeight: 0, progress: 0 };
  }
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const maxScroll = documentHeight - viewportHeight;
  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
  return { scrollY, viewportHeight, documentHeight, progress };
}

function getInitialVisibility(showAfterPercent: number, hideBeforeBottomPercent: number): boolean {
  if (typeof window === "undefined") return false;
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const showThreshold = viewportHeight * showAfterPercent;
  const hideThreshold = documentHeight - viewportHeight * hideBeforeBottomPercent;
  return scrollY > showThreshold && scrollY < hideThreshold;
}

/**
 * Hook to track scroll position and compute visibility state.
 * Uses percentage-based throttling - only updates when scroll changes meaningfully.
 */
export function useScrollPosition(config?: ScrollVisibilityConfig) {
  const { 
    showAfterPercent = 0.85, 
    hideBeforeBottomPercent = 1.5,
    progressThreshold = 0.005,
  } = config || {};

  // Lazy initial state - runs only once, no useEffect needed
  const [position, setPosition] = useState<ScrollPosition>(getInitialPosition);
  const [visible, setVisible] = useState(() => getInitialVisibility(showAfterPercent, hideBeforeBottomPercent));
  
  const lastProgressRef = useRef(position.progress);
  const lastVisibleRef = useRef(visible);

  // Scroll listener only
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - viewportHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

      const showThreshold = viewportHeight * showAfterPercent;
      const hideThreshold = documentHeight - viewportHeight * hideBeforeBottomPercent;
      const shouldBeVisible = scrollY > showThreshold && scrollY < hideThreshold;

      const progressChanged = Math.abs(progress - lastProgressRef.current) >= progressThreshold;
      const visibilityChanged = shouldBeVisible !== lastVisibleRef.current;

      // If there is only a significant change (Throttling the setState call)
      if (progressChanged || visibilityChanged) {
        lastProgressRef.current = progress;
        lastVisibleRef.current = shouldBeVisible;
        
        setPosition({ scrollY, viewportHeight, documentHeight, progress });
        setVisible(shouldBeVisible);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [showAfterPercent, hideBeforeBottomPercent, progressThreshold]);

  return { ...position, visible };
}
