"use client";

import { useEffect, useState, useRef, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // If true, stops observing after first intersection
}

/**
 * Hook to detect if an element is in the viewport.
 * Use this to pause animations when elements are off-screen.
 * 
 * @param options - IntersectionObserver options
 * @returns [ref, isInView] - Attach ref to element, isInView is true when visible
 * 
 * @example
 * const [ref, isInView] = useInView({ threshold: 0.1 });
 * return <div ref={ref} style={{ animationPlayState: isInView ? 'running' : 'paused' }} />
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "50px", once = false } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip on server
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true); // Fallback: assume visible
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        // Stop observing if `once` is true and element is in view
        if (once && inView) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}

/**
 * CSS class helper for pausing animations when off-screen
 */
export const getAnimationClass = (isInView: boolean, baseClass: string = "") => {
  return `${baseClass} ${isInView ? "" : "[animation-play-state:paused]"}`;
};

/**
 * Style helper for pausing animations when off-screen
 */
export const getAnimationStyle = (isInView: boolean, style: React.CSSProperties = {}): React.CSSProperties => {
  return {
    ...style,
    animationPlayState: isInView ? "running" : "paused",
  };
};
