"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if viewport is below a breakpoint (mobile).
 * 
 * @param breakpoint - Width threshold in pixels (default: 768 = md breakpoint)
 * @returns boolean - true if viewport width < breakpoint
 * 
 * @example
 * const isMobile = useIsMobile(); // < 768px
 * const isSmall = useIsMobile(640); // < 640px (sm breakpoint)
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check immediately on mount
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
