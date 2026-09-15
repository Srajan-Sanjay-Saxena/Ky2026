"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { CONCERT_COLORS } from "../constants";

/**
 * DancingGirlFestiveVibes - Top-left corner (static image)
 * Shown on all screens; lower z-index on mobile.
 */
export const DancingGirlFestiveVibes = memo(function DancingGirlFestiveVibes() {
  return (
    <div className="absolute top-[15%] -left-[15%] w-[58vw] max-w-[1150px] pointer-events-none z-[40]">
      {/* Glow behind DancingGirlFestiveVibes - subtle dark blue */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(30,30,80,0.4) 0%, rgba(20,20,60,0.2) 40%, transparent 70%)`,
          filter: "blur(30px)",
          transform: "scale(1.3)",
        }}
      />

      {/* DancingGirlFestiveVibes image - Static */}
      <Image
        src={IMAGES.misc.DancingGirlFestiveVibes}
        alt="DancingGirlFestiveVibes"
        width={400}
        height={500}
        className="relative w-full h-auto"
        style={{
          filter: `drop-shadow(0 0 25px rgba(50,50,120,0.5)) drop-shadow(0 0 50px rgba(30,30,80,0.3))`,
        }}
      />
    </div>
  );
});

/**
 * GlowingMoon - Large moon in top-right corner
 * Positioned so only ~half is visible (3/4 moon feel)
 * Desktop only for performance
 */
export const GlowingMoon = memo(function GlowingMoon() {
  return (
    <div className="absolute -top-[36vh] -right-[100vw] w-[180vw] aspect-square sm:-top-[50%] sm:left-auto sm:-right-[55%] sm:w-[110vw] pointer-events-none z-[1]">
      {/* Radiance rings - white glow rings around moon */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, 
            transparent 35%, 
            rgba(255,255,255,0.03) 40%, 
            transparent 45%,
            rgba(255,255,255,0.02) 50%,
            transparent 55%,
            rgba(255,255,255,0.015) 60%,
            transparent 65%
          )`,
          transform: "scale(1.5)",
        }}
      />

      {/* Inner white glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(220,220,255,0.08) 20%, transparent 50%)`,
          filter: "blur(40px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Soft outer white radiance */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(200,210,255,0.03) 30%, transparent 60%)`,
          filter: "blur(80px)",
          transform: "scale(1.4)",
        }}
      />

      {/* Moon image - static on mobile, slow rotation on desktop (via CSS class) */}
      <Image
        src={IMAGES.misc.moonBg}
        alt=""
        fill
        className="object-contain pronites-moon-rotate"
        style={{
          filter: `drop-shadow(0 0 40px rgba(255,255,255,0.25)) drop-shadow(0 0 80px rgba(220,220,255,0.15)) drop-shadow(0 0 120px rgba(180,180,220,0.1))`,
        }}
        priority
      />
    </div>
  );
});


/**
 * NeonBorders - Top and bottom neon line borders
 */
export const TopBorder = memo(function TopBorder() {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div
        className="h-[1px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(30, 30, 74, 0.6) 20%,
            rgba(100, 100, 180, 0.4) 50%,
            rgba(30, 30, 74, 0.6) 80%,
            transparent 100%
          )`,
        }}
      />
      <div
        className="hidden sm:block h-8 opacity-30"
        style={{
          background: `linear-gradient(180deg, rgba(30, 30, 80, 0.5) 0%, transparent 100%)`,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
});

export const BottomBorder = memo(function BottomBorder() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div
        className="hidden sm:block h-8 opacity-30"
        style={{
          background: `linear-gradient(0deg, rgba(30, 30, 80, 0.5) 0%, transparent 100%)`,
          filter: "blur(10px)",
        }}
      />
      <div
        className="h-[1px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(30, 30, 74, 0.6) 20%,
            rgba(100, 100, 180, 0.4) 50%,
            rgba(30, 30, 74, 0.6) 80%,
            transparent 100%
          )`,
        }}
      />
    </div>
  );
});

/**
 * GridOverlay - Subtle grid pattern
 */
export const GridOverlay = memo(function GridOverlay() {
  return (
    <div
      className="hidden sm:block absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(${CONCERT_COLORS.NEON_PURPLE}50 1px, transparent 1px),
          linear-gradient(90deg, ${CONCERT_COLORS.NEON_PURPLE}50 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
});
