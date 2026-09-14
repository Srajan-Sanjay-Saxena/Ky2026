"use client";

import { memo } from "react";

/**
 * SpotlightBeams - Animated stage lights (Desktop only)
 * Hidden on mobile for performance
 */
export const SpotlightBeams = memo(function SpotlightBeams() {
  return (
    <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left spotlight - subtle blue */}
      <div
        className="absolute top-0 left-[10%] w-[200px] h-[600px] origin-top"
        style={{
          background: `linear-gradient(180deg, rgba(60,60,140,0.15) 0%, rgba(40,40,100,0.05) 50%, transparent 100%)`,
          transform: "rotate(-20deg)",
          animation: "spotlightSweep 10s ease-in-out infinite",
          filter: "blur(30px)",
        }}
      />
      
      {/* Right spotlight - subtle cyan-blue */}
      <div
        className="absolute top-0 right-[10%] w-[200px] h-[600px] origin-top"
        style={{
          background: `linear-gradient(180deg, rgba(40,80,120,0.15) 0%, rgba(30,60,100,0.05) 50%, transparent 100%)`,
          transform: "rotate(20deg)",
          animation: "spotlightSweep 10s ease-in-out infinite reverse",
          filter: "blur(30px)",
        }}
      />
      
      {/* Center spotlight - subtle dark blue */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[500px]"
        style={{
          background: `linear-gradient(180deg, rgba(50,50,120,0.12) 0%, transparent 100%)`,
          filter: "blur(40px)",
          animation: "pulseSlow 4s ease-in-out infinite",
        }}
      />
    </div>
  );
});
