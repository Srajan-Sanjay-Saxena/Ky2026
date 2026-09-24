"use client";

import { memo } from "react";
import { BackgroundDecor } from "./BackgroundDecor";
import { DesktopDJ } from "./DesktopDJ";
import { FloatingOrbs } from "./FloatingOrbs";
import { SareeDrape } from "./SareeDrape";

interface FestivalVibesDesktopProps {
  djRef?: React.Ref<HTMLDivElement>;
}

/**
 * Desktop-only elements for FestivalVibes section
 * Shows: Background Decor, Floating Orbs, Saree Drape, Desktop DJ
 * Hidden on mobile (< 640px)
 */
export const FestivalVibesDesktop = memo(function FestivalVibesDesktop({
  djRef,
}: FestivalVibesDesktopProps) {
  return (
    <>
      {/* Art deco pattern overlay */}
      <BackgroundDecor />

      {/* Floating orbs */}
      <FloatingOrbs />

      {/* Banarasi Saree Drape - Top Right Corner */}
      <SareeDrape />

      {/* DJ Character - scroll-revealed via GSAP */}
      <DesktopDJ ref={djRef} />
    </>
  );
});