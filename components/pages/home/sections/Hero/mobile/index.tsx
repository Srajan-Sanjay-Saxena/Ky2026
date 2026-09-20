"use client";

import { memo } from "react";
import { MobileKite } from "./MobileKite";

interface HeroMobileProps {
  showKite: boolean;
}

/**
 * Mobile-only elements for Hero section
 * Shows: Mobile Kite (when not night/dawn)
 * Hidden on desktop (>= 640px)
 */
export const HeroMobile = memo(function HeroMobile({ showKite }: HeroMobileProps) {
  return (
    <>
      {/* Kites - Mobile only, floating animation, hidden at night/dawn */}
      {showKite && <MobileKite />}
    </>
  );
});

// Re-export for backward compatibility
export { MobileKite } from "./MobileKite";
