"use client";

import { memo } from "react";
import { OuterMandala } from "./OuterMandala";
import { InnerMandala } from "./InnerMandala";
import { KashiYatraText } from "./KashiYatraText";
import { MobileTagline } from "./MobileTagline";
import { IMAGES } from "@/lib/images";

/**
 * Mobile-only elements for BanarasiVibes section
 * Shows: Mandala Rangoli, Glowing Diya with Kashi Yatra text, Tagline, Static Auto
 * Hidden on sm+ (>= 640px)
 */
export const BanarasiVibesMobile = memo(function BanarasiVibesMobile() {
  return (
    <>
      {/* Animated Mandala Rangoli */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:opacity-0 sm:pointer-events-none">
        <OuterMandala />
      </div>

      {/* Glowing Diya with Text */}
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center sm:opacity-0 sm:pointer-events-none">
        <InnerMandala />

        {/* Golden glow aura behind diya */}
        <div
          className="absolute w-28 h-28 rounded-full vibes-diya-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255,180,50,0.5) 0%, rgba(255,140,20,0.25) 45%, transparent 70%)",
            filter: "blur(12px)",
            top: "-10px",
          }}
        />

        <KashiYatraText />
      </div>

      {/* Tagline */}
      <MobileTagline />

      {/* Static Auto Rickshaw - Mobile only */}
      <div
        className="sm:hidden absolute w-[70px] h-[50px] pointer-events-none"
        style={{
          right: "15%",
          bottom: "58px",
          zIndex: 35,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.vibes.rickshaw}
          alt="Auto Rickshaw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.5))",
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </>
  );
});
