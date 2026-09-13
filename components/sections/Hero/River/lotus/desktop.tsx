"use client";

import { memo } from "react";
import { Z_HERO, POS_LOTUS, SIZE_LOTUS } from "@/components/constants";
import { FloatingLotus } from "./FloatingLotus";

/**
 * Desktop lotus flowers - shown only on sm+ (>= 640px)
 * Uses sm positions and sizes from constants
 */
export const LotusesDesktop = memo(function LotusesDesktop() {
  return (
    <>
      {/* Lotus 1 - Left side */}
      <div
      // display: hidden 
        className="pointer-events-none hidden sm:block sm:absolute"
        style={{
          zIndex: Z_HERO.LOTUS_1,
          bottom: POS_LOTUS.LOTUS_1.sm.bottom,
          left: POS_LOTUS.LOTUS_1.sm.left,
          animation: "lotusFloat 5s ease-in-out infinite",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_1.sm.width,
            height: SIZE_LOTUS.LOTUS_1.sm.height,
          }}
        />
      </div>

      {/* Lotus 2 - Center */}
      <div
         className="pointer-events-none hidden sm:block sm:absolute"
        style={{
          zIndex: Z_HERO.LOTUS_2,
          bottom: POS_LOTUS.LOTUS_2.sm.bottom,
          left: POS_LOTUS.LOTUS_2.sm.left,
          animation: "lotusFloat 6s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_2.sm.width,
            height: SIZE_LOTUS.LOTUS_2.sm.height,
          }}
        />
      </div>

      {/* Lotus 3 - Right side */}
      <div
         className="pointer-events-none hidden sm:block sm:absolute"
        style={{
          zIndex: Z_HERO.LOTUS_3,
          bottom: POS_LOTUS.LOTUS_3.sm.bottom,
          left: POS_LOTUS.LOTUS_3.sm.left,
          animation: "lotusFloat 5.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_3.sm.width,
            height: SIZE_LOTUS.LOTUS_3.sm.height,
          }}
        />
      </div>

      {/* Lotus 4 - Desktop only extra */}
      <div
         className="pointer-events-none hidden sm:block sm:absolute"
        style={{
          zIndex: Z_HERO.LOTUS_4,
          bottom: POS_LOTUS.LOTUS_4.sm.bottom,
          left: POS_LOTUS.LOTUS_4.sm.left,
          animation: "lotusFloat 4.5s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_4.sm.width,
            height: SIZE_LOTUS.LOTUS_4.sm.height,
          }}
        />
      </div>
    </>
  );
});
