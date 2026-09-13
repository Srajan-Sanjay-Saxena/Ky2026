"use client";

import { OuterMandala } from "./OuterMandala";
import { InnerMandala } from "./InnerMandala";
import { MobileDiya } from "./MobileDiya";
import { KashiYatraText } from "./KashiYatraText";

/**
 * Mobile-only elements for BanarasiVibes section
 * Shows: Mandala Rangoli, Glowing Diya with Kashi Yatra text
 * Hidden on sm+ (>= 640px)
 */
export function BanarasiVibesMobile() {
  return (
    <>
      {/* Animated Mandala Rangoli - Mobile Only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:opacity-0 sm:pointer-events-none">
        <OuterMandala />
      </div>

      {/* Glowing Diya with Text - Mobile Only */}
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center sm:opacity-0 sm:pointer-events-none">
        <InnerMandala />
        
        {/* Golden glow aura behind diya */}
        <div
          className="absolute w-28 h-28 rounded-full vibes-diya-glow"
          style={{
            background: "radial-gradient(circle, rgba(255,180,50,0.5) 0%, rgba(255,140,20,0.25) 45%, transparent 70%)",
            filter: "blur(12px)",
            top: "-10px",
          }}
        />
        
        <MobileDiya />
        <KashiYatraText />
      </div>
    </>
  );
}
