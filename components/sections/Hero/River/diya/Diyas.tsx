"use client";

import { Z_HERO, POS_DIYA } from "@/components/constants";
import { Diya } from "./Diya";

/**
 * All floating diyas in the river
 * Each diya has its own z-index for proper layering
 */
export function Diyas() {
  return (
    <>
      {/* Diya 1 - Far left */}
      <div
        className="absolute w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_1,
          bottom: POS_DIYA.DIYA_1.mobile.bottom,
          left: POS_DIYA.DIYA_1.mobile.left,
          animation: "diyaFloat 4s ease-in-out infinite",
        }}
      >
        <Diya className="w-full h-full" />
      </div>

      {/* Diya 2 - Left */}
      <div
        className="absolute w-5 h-7 sm:w-7 sm:h-9 md:w-9 md:h-11 pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_2,
          bottom: POS_DIYA.DIYA_2.mobile.bottom,
          left: POS_DIYA.DIYA_2.mobile.left,
          animation: "diyaFloat 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <Diya className="w-full h-full" />
      </div>

      {/* Diya 3 - Center-right */}
      <div
        className="absolute w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_3,
          bottom: POS_DIYA.DIYA_3.mobile.bottom,
          left: POS_DIYA.DIYA_3.mobile.left,
          animation: "diyaFloat 3.8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <Diya className="w-full h-full" />
      </div>

      {/* Diya 4 - Right (desktop only) */}
      <div
        className="hidden sm:block absolute w-5 h-7 sm:w-6 sm:h-8 md:w-8 md:h-10 pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_4,
          bottom: POS_DIYA.DIYA_4.sm.bottom,
          left: POS_DIYA.DIYA_4.sm.left,
          animation: "diyaFloat 5s ease-in-out infinite",
          animationDelay: "0.3s",
        }}
      >
        <Diya className="w-full h-full" />
      </div>

      {/* Diya 5 - Far right */}
      <div
        className="absolute w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_5,
          bottom: POS_DIYA.DIYA_5.mobile.bottom,
          left: POS_DIYA.DIYA_5.mobile.left,
          animation: "diyaFloat 4.2s ease-in-out infinite",
          animationDelay: "0.7s",
        }}
      >
        <Diya className="w-full h-full" />
      </div>

      {/* Diya 6 - Center (desktop only) */}
      <div
        className="hidden sm:block absolute w-5 h-7 sm:w-7 sm:h-9 md:w-9 md:h-11 pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_6,
          bottom: POS_DIYA.DIYA_6.sm.bottom,
          left: POS_DIYA.DIYA_6.sm.left,
          animation: "diyaFloat 3.5s ease-in-out infinite",
          animationDelay: "1.2s",
        }}
      >
        <Diya className="w-full h-full" />
      </div>
    </>
  );
}
