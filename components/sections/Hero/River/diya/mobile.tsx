"use client";

import { memo } from "react";
import { Z_HERO, POS_DIYA, SIZE_DIYA } from "@/components/constants";
import { DiyaSvg } from "./DiyaSvg";

/**
 * Mobile diyas - shown only on mobile (< 640px)
 * Uses mobile positions and sizes from constants
 */
export const DiyasMobile = memo(function DiyasMobile() {
  return (
    <>
      {/* Diya 1 - Far left */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_1,
          bottom: POS_DIYA.DIYA_1.mobile.bottom,
          left: POS_DIYA.DIYA_1.mobile.left,
          animation: "diyaFloat 4s ease-in-out infinite",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_1.mobile.width,
            height: SIZE_DIYA.DIYA_1.mobile.height,
          }}
        />
      </div>

      {/* Diya 2 - Left */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_2,
          bottom: POS_DIYA.DIYA_2.mobile.bottom,
          left: POS_DIYA.DIYA_2.mobile.left,
          animation: "diyaFloat 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_2.mobile.width,
            height: SIZE_DIYA.DIYA_2.mobile.height,
          }}
        />
      </div>

      {/* Diya 3 - Center-right */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_3,
          bottom: POS_DIYA.DIYA_3.mobile.bottom,
          left: POS_DIYA.DIYA_3.mobile.left,
          animation: "diyaFloat 3.8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_3.mobile.width,
            height: SIZE_DIYA.DIYA_3.mobile.height,
          }}
        />
      </div>

      {/* Diya 5 - Far right */}
      <div
        className="absolute pointer-events-none sm:opacity-0 sm:pointer-events-none"
        style={{
          zIndex: Z_HERO.DIYA_5,
          bottom: POS_DIYA.DIYA_5.mobile.bottom,
          left: POS_DIYA.DIYA_5.mobile.left,
          animation: "diyaFloat 4.2s ease-in-out infinite",
          animationDelay: "0.7s",
        }}
      >
        <DiyaSvg
          style={{
            width: SIZE_DIYA.DIYA_5.mobile.width,
            height: SIZE_DIYA.DIYA_5.mobile.height,
          }}
        />
      </div>
    </>
  );
});
