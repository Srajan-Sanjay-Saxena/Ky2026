"use client";

import { Z_HERO, POS_DIYA, SIZE_DIYA } from "@/components/constants";
import { Diya } from "./Diya";

/**
 * All floating diyas in the river
 * Each diya has its own z-index for proper layering
 * Positions from POS_DIYA, sizes from SIZE_DIYA
 */
export function Diyas() {
  return (
    <>
      {/* Diya 1 - Far left */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_1,
          bottom: POS_DIYA.DIYA_1.mobile.bottom,
          left: POS_DIYA.DIYA_1.mobile.left,
          animation: "diyaFloat 4s ease-in-out infinite",
        }}
      >
        <Diya 
          style={{
            width: SIZE_DIYA.DIYA_1.mobile.width,
            height: SIZE_DIYA.DIYA_1.mobile.height,
          }}
        />
      </div>

      {/* Diya 2 - Left */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_2,
          bottom: POS_DIYA.DIYA_2.mobile.bottom,
          left: POS_DIYA.DIYA_2.mobile.left,
          animation: "diyaFloat 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <Diya 
          style={{
            width: SIZE_DIYA.DIYA_2.mobile.width,
            height: SIZE_DIYA.DIYA_2.mobile.height,
          }}
        />
      </div>

      {/* Diya 3 - Center-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_3,
          bottom: POS_DIYA.DIYA_3.mobile.bottom,
          left: POS_DIYA.DIYA_3.mobile.left,
          animation: "diyaFloat 3.8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <Diya 
          style={{
            width: SIZE_DIYA.DIYA_3.mobile.width,
            height: SIZE_DIYA.DIYA_3.mobile.height,
          }}
        />
      </div>

      {/* Diya 4 - Right (desktop only) */}
      <div
        className="hidden sm:block absolute pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_4,
          bottom: POS_DIYA.DIYA_4.sm.bottom,
          left: POS_DIYA.DIYA_4.sm.left,
          animation: "diyaFloat 5s ease-in-out infinite",
          animationDelay: "0.3s",
        }}
      >
        <Diya 
          style={{
            width: SIZE_DIYA.DIYA_4.sm.width,
            height: SIZE_DIYA.DIYA_4.sm.height,
          }}
        />
      </div>

      {/* Diya 5 - Far right */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_5,
          bottom: POS_DIYA.DIYA_5.mobile.bottom,
          left: POS_DIYA.DIYA_5.mobile.left,
          animation: "diyaFloat 4.2s ease-in-out infinite",
          animationDelay: "0.7s",
        }}
      >
        <Diya 
          style={{
            width: SIZE_DIYA.DIYA_5.mobile.width,
            height: SIZE_DIYA.DIYA_5.mobile.height,
          }}
        />
      </div>

      {/* Diya 6 - Center (desktop only) */}
      <div
        className="hidden sm:block absolute pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_6,
          bottom: POS_DIYA.DIYA_6.sm.bottom,
          left: POS_DIYA.DIYA_6.sm.left,
          animation: "diyaFloat 3.5s ease-in-out infinite",
          animationDelay: "1.2s",
        }}
      >
        <Diya 
          style={{
            width: SIZE_DIYA.DIYA_6.sm.width,
            height: SIZE_DIYA.DIYA_6.sm.height,
          }}
        />
      </div>
    </>
  );
}
