"use client";

import { Z_HERO, POS_DIYA, SIZE_DIYA } from "@/components/constants";
import { DiyaSvg } from "./DiyaSvg";

/**
 * Desktop diyas - shown only on sm+ (>= 640px)
 * Uses sm positions and sizes from constants
 */
export function DiyasDesktop() {
  return (
    <>
      {/* Diya 1 - Far left */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-100"
        style={{
          zIndex: Z_HERO.DIYA_1,
          bottom: POS_DIYA.DIYA_1.sm.bottom,
          left: POS_DIYA.DIYA_1.sm.left,
          animation: "diyaFloat 4s ease-in-out infinite",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_1.sm.width,
            height: SIZE_DIYA.DIYA_1.sm.height,
          }}
        />
      </div>

      {/* Diya 2 - Left */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-100"
        style={{
          zIndex: Z_HERO.DIYA_2,
          bottom: POS_DIYA.DIYA_2.sm.bottom,
          left: POS_DIYA.DIYA_2.sm.left,
          animation: "diyaFloat 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_2.sm.width,
            height: SIZE_DIYA.DIYA_2.sm.height,
          }}
        />
      </div>

      {/* Diya 3 - Center-right */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-100"
        style={{
          zIndex: Z_HERO.DIYA_3,
          bottom: POS_DIYA.DIYA_3.sm.bottom,
          left: POS_DIYA.DIYA_3.sm.left,
          animation: "diyaFloat 3.8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_3.sm.width,
            height: SIZE_DIYA.DIYA_3.sm.height,
          }}
        />
      </div>

      {/* Diya 4 - Right (desktop only) */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-100"
        style={{
          zIndex: Z_HERO.DIYA_4,
          bottom: POS_DIYA.DIYA_4.sm.bottom,
          left: POS_DIYA.DIYA_4.sm.left,
          animation: "diyaFloat 5s ease-in-out infinite",
          animationDelay: "0.3s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_4.sm.width,
            height: SIZE_DIYA.DIYA_4.sm.height,
          }}
        />
      </div>

      {/* Diya 5 - Far right */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-100"
        style={{
          zIndex: Z_HERO.DIYA_5,
          bottom: POS_DIYA.DIYA_5.sm.bottom,
          left: POS_DIYA.DIYA_5.sm.left,
          animation: "diyaFloat 4.2s ease-in-out infinite",
          animationDelay: "0.7s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_5.sm.width,
            height: SIZE_DIYA.DIYA_5.sm.height,
          }}
        />
      </div>

      {/* Diya 6 - Center (desktop only) */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-100"
        style={{
          zIndex: Z_HERO.DIYA_6,
          bottom: POS_DIYA.DIYA_6.sm.bottom,
          left: POS_DIYA.DIYA_6.sm.left,
          animation: "diyaFloat 3.5s ease-in-out infinite",
          animationDelay: "1.2s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_6.sm.width,
            height: SIZE_DIYA.DIYA_6.sm.height,
          }}
        />
      </div>
    </>
  );
}
