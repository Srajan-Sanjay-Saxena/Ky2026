"use client";

import { memo } from "react";
import { FloatingParticles } from "./FloatingParticles";
import { MandalaRing } from "./MandalaRing";
import {
  GeometricPattern,
  BanarasiPatternAnimated,
  VignetteOverlay,
} from "./BackgroundDecor";
import { COLORS } from "@/components/pages/home/constants/palette";
import { Z_INDEX } from "../constants/theme";

interface PassesDesktopProps {
  isMobile: boolean;
  isInView: boolean;
  mandalaLeftRef?: React.Ref<HTMLDivElement>;
  mandalaRightRef?: React.Ref<HTMLDivElement>;
  mandalaCenterRef?: React.Ref<HTMLDivElement>;
}

/**
 * Desktop-only elements for Passes section
 * Shows: Geometric Patterns, Mandala Rings, Floating Particles, Vignette
 * Hidden/reduced on mobile
 */
export const PassesDesktop = memo(function PassesDesktop({
  isMobile,
  isInView,
  mandalaLeftRef,
  mandalaRightRef,
  mandalaCenterRef,
}: PassesDesktopProps) {
  return (
    <>
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
          style={{
            zIndex: Z_INDEX.mandala,
            opacity: 0.06,
            color: COLORS.BRIGHT_GOLD,
          }}
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
    </>
  );
});