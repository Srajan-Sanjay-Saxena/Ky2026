"use client";

import { memo } from "react";
import { RotatingMandala } from "./RotatingMandala";
import { GangaAartiSaint } from "./GangaAartiSaint";
import { BharatnatyamDancer } from "./BharatnatyamDancer";
import { Rickshaw } from "./Rickshaw";

interface BanarasiVibesDesktopProps {
  isAnimating: boolean;
  prefersReducedMotion: boolean;
  rickshawRef?: React.Ref<HTMLDivElement>;
}

/**
 * Desktop-only elements for BanarasiVibes section
 * Shows: Rotating Mandala, Ganga Aarti Saint, Bharatnatyam Dancer, Rickshaw
 * Hidden on mobile (< 640px)
 */
export const BanarasiVibesDesktop = memo(function BanarasiVibesDesktop({
  isAnimating,
  prefersReducedMotion,
  rickshawRef,
}: BanarasiVibesDesktopProps) {
  return (
    <>
      {/* Rotating Mandala backdrop */}
      <RotatingMandala isAnimating={isAnimating} prefersReducedMotion={prefersReducedMotion} />

      {/* Ganga Aarti Saint - left side */}
      <GangaAartiSaint />

      {/* Bharatnatyam Dancer - right side */}
      <BharatnatyamDancer />

      {/* Rickshaw - animated */}
      <Rickshaw ref={rickshawRef} />
    </>
  );
});
