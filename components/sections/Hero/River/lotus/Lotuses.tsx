"use client";

import { Z_HERO, POS_LOTUS } from "@/components/constants";
import { FloatingLotus } from "./FloatingLotus";

/**
 * All floating lotus flowers in the river
 * Each lotus has its own z-index for proper layering
 */
export function Lotuses() {
  return (
    <>
      {/* Lotus 1 - Left side */}
      <div
        className="absolute w-10 h-8 sm:w-12 sm:h-10 md:w-14 md:h-12 pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_1,
          bottom: POS_LOTUS.LOTUS_1.mobile.bottom,
          left: POS_LOTUS.LOTUS_1.mobile.left,
          animation: "lotusFloat 5s ease-in-out infinite",
        }}
      >
        <FloatingLotus className="w-full h-full" />
      </div>

      {/* Lotus 2 - Center */}
      <div
        className="absolute w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10 pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_2,
          bottom: POS_LOTUS.LOTUS_2.mobile.bottom,
          left: POS_LOTUS.LOTUS_2.mobile.left,
          animation: "lotusFloat 6s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <FloatingLotus className="w-full h-full" />
      </div>

      {/* Lotus 3 - Right side */}
      <div
        className="absolute w-9 h-7 sm:w-11 sm:h-9 md:w-[3.25rem] md:h-[2.75rem] pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_3,
          bottom: POS_LOTUS.LOTUS_3.mobile.bottom,
          left: POS_LOTUS.LOTUS_3.mobile.left,
          animation: "lotusFloat 5.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <FloatingLotus className="w-full h-full" />
      </div>

      {/* Lotus 4 - Desktop only */}
      <div
        className="hidden sm:block absolute w-7 h-5 sm:w-9 sm:h-7 md:w-11 md:h-9 pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_4,
          bottom: POS_LOTUS.LOTUS_4.sm.bottom,
          left: POS_LOTUS.LOTUS_4.sm.left,
          animation: "lotusFloat 4.5s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      >
        <FloatingLotus className="w-full h-full" />
      </div>
    </>
  );
}
