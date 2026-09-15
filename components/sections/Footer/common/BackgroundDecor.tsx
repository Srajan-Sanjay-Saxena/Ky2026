import { memo } from "react";
import { MandalaRing } from "@/components/sections/FestHighlights/common/MandlaRing";
import { DiyaSvg } from "@/components/sections/Hero/River/diya/DiyaSvg";
import { MotionZone } from "@/components/motion";
import {
  GRADIENT_BORDER_ROYAL,
  GRADIENT_FOOTER_GLOW,
  GRADIENT_FOOTER_AMBIENT,
} from "@/components/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// BACKGROUND DECOR — mandala, royal borders, gold glow, corner diyas
// (rendered before the main content, matching original DOM order)
// ═══════════════════════════════════════════════════════════════════
export const BackgroundDecor = memo(function BackgroundDecor() {
  return (
    <>
      {/* ═══ Animated Background Mandala ═══ */}

      {/* Single large mandala - slow clockwise rotation */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[52vw] sm:h-[52vw] max-w-[720px] max-h-[720px] pointer-events-none footer-mandala-slow"
        style={{ opacity: 0.12 }}
      >
        <MandalaRing className="w-full h-full text-[#FFD700]" />
      </div>

      {/* ═══ Top Royal Border ═══ */}
      <div
        className="absolute top-0 left-0 right-0 h-1 sm:h-1.5"
        style={{ background: GRADIENT_BORDER_ROYAL }}
      />

      {/* Secondary decorative line */}
      <div
        className="absolute top-2 sm:top-3 left-[10%] right-[10%] h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.3) 50%, transparent 100%)`,
        }}
      />

      {/* ═══ Gold Glow Overlay ═══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: GRADIENT_FOOTER_GLOW }}
      />

      {/* ═══ Corner Diyas ═══ */}
      {/* Wrapped in MotionZone to pause SMIL animations when off-screen */}
      <MotionZone className="absolute inset-0 pointer-events-none">
        <div className="absolute top-14 sm:top-16 left-[5%] sm:left-[8%] w-8 h-10 sm:w-10 sm:h-12 opacity-70">
          <DiyaSvg className="w-full h-full" />
        </div>
        <div className="absolute top-16 sm:top-18 right-[5%] sm:right-[8%] w-6 h-8 sm:w-8 sm:h-10 opacity-50">
          <DiyaSvg className="w-full h-full" />
        </div>
        <div className="hidden sm:block absolute top-24 left-[20%] w-5 h-7 opacity-40">
          <DiyaSvg className="w-full h-full" />
        </div>
        <div className="hidden sm:block absolute top-20 right-[22%] w-6 h-8 opacity-45">
          <DiyaSvg className="w-full h-full" />
        </div>
      </MotionZone>
    </>
  );
});

// ═══════════════════════════════════════════════════════════════════
// AMBIENT GLOW — bottom ambient glow + side vignettes
// (rendered after the main content, matching original DOM order)
// ═══════════════════════════════════════════════════════════════════
export const AmbientGlow = memo(function AmbientGlow() {
  return (
    <>
      {/* ═══ Bottom Ambient Glow ═══ */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] h-24 sm:h-40 pointer-events-none"
        style={{ background: GRADIENT_FOOTER_AMBIENT }}
      />

      {/* Side vignettes */}
      <div
        className="absolute top-0 left-0 w-1/4 h-full pointer-events-none"
        style={{
          background: `linear-gradient(90deg, rgba(26,5,8,0.6) 0%, transparent 100%)`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/4 h-full pointer-events-none"
        style={{
          background: `linear-gradient(-90deg, rgba(26,5,8,0.6) 0%, transparent 100%)`,
        }}
      />
    </>
  );
});
