"use client";

import { Z_HERO, SIZE_STONES } from "@/components/constants";
import { SteppingStone } from "./SteppingStone";

/**
 * All stepping stones in the river
 * Each stone has its own z-index for proper layering with boats/diyas/lotus
 * 
 * Note: Positions are defined in globals.css as .stone-pos-* classes
 * because inline styles don't support media queries for sm: breakpoints
 */
export function Stones() {
  return (
    <>
      {/* Schedule - left side */}
      <div
        className="absolute pointer-events-auto stone-pos-schedule"
        style={{ zIndex: Z_HERO.STONE_SCHEDULE }}
      >
        <SteppingStone 
          label="Schedule" 
          href="/schedule" 
          size={SIZE_STONES.SCHEDULE.mobile} 
          sizeDesktop={SIZE_STONES.SCHEDULE.desktop} 
          phase={0} 
        />
      </div>

      {/* Events - left-center */}
      <div
        className="absolute pointer-events-auto stone-pos-events"
        style={{ zIndex: Z_HERO.STONE_EVENTS }}
      >
        <SteppingStone 
          label="Events" 
          href="/events" 
          size={SIZE_STONES.EVENTS.mobile} 
          sizeDesktop={SIZE_STONES.EVENTS.desktop} 
          phase={-0.8} 
        />
      </div>

      {/* Register - center (main CTA) */}
      <div
        className="absolute pointer-events-auto stone-pos-register"
        style={{ zIndex: Z_HERO.STONE_REGISTER }}
      >
        <SteppingStone 
          label="Register" 
          href="/register" 
          size={SIZE_STONES.REGISTER.mobile} 
          sizeDesktop={SIZE_STONES.REGISTER.desktop} 
          phase={-1.6} 
        />
      </div>

      {/* Gallery - right-center */}
      <div
        className="absolute pointer-events-auto stone-pos-gallery"
        style={{ zIndex: Z_HERO.STONE_GALLERY }}
      >
        <SteppingStone 
          label="Gallery" 
          href="/gallery" 
          size={SIZE_STONES.GALLERY.mobile} 
          sizeDesktop={SIZE_STONES.GALLERY.desktop} 
          phase={-0.4} 
        />
      </div>

      {/* About - right side */}
      <div
        className="absolute pointer-events-auto stone-pos-about"
        style={{ zIndex: Z_HERO.STONE_ABOUT }}
      >
        <SteppingStone 
          label="About" 
          href="/about" 
          size={SIZE_STONES.ABOUT.mobile} 
          sizeDesktop={SIZE_STONES.ABOUT.desktop} 
          phase={-1.2} 
        />
      </div>
    </>
  );
}
