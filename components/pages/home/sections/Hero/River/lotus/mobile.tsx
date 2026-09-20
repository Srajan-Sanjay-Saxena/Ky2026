"use client";

import { memo } from "react";
import {
  Z_HERO,
  POS_LOTUS,
  SIZE_LOTUS,
} from "@/components/pages/home/constants";
import { FloatingLotus } from "./FloatingLotus";

/**
 * Mobile lotus flowers - shown only on mobile (< 640px)
 * Uses mobile positions and sizes from constants
 */
export const LotusesMobile = memo(function LotusesMobile() {
  return (
    <>
      {/* Lotus 1 - Left side */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_1,
          bottom: POS_LOTUS.LOTUS_1.mobile.bottom,
          left: POS_LOTUS.LOTUS_1.mobile.left,
          animation: "lotusFloat 5s ease-in-out infinite",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_1.mobile.width,
            height: SIZE_LOTUS.LOTUS_1.mobile.height,
          }}
        />
      </div>

      {/* Lotus 2 - Center */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_2,
          bottom: POS_LOTUS.LOTUS_2.mobile.bottom,
          left: POS_LOTUS.LOTUS_2.mobile.left,
          animation: "lotusFloat 6s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_2.mobile.width,
            height: SIZE_LOTUS.LOTUS_2.mobile.height,
          }}
        />
      </div>

      {/* Lotus 3 - Right side */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.LOTUS_3,
          bottom: POS_LOTUS.LOTUS_3.mobile.bottom,
          left: POS_LOTUS.LOTUS_3.mobile.left,
          animation: "lotusFloat 5.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <FloatingLotus
          style={{
            width: SIZE_LOTUS.LOTUS_3.mobile.width,
            height: SIZE_LOTUS.LOTUS_3.mobile.height,
          }}
        />
      </div>
    </>
  );
});
