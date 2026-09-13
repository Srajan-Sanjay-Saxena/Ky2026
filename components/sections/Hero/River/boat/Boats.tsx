"use client";

import { memo } from "react";
import { Z_HERO, POS_BOATS } from "@/components/constants";
import { PilgrimBoat } from "./PilgrimBoat";
import { SimpleBoat } from "./SimpleBoat";
import { Steamer } from "./Steamer";

/**
 * All boats in the river (desktop only)
 * Each boat has its own z-index for proper layering
 */
export const Boats = memo(function Boats() {
  return (
    <>
      {/* Pilgrim Boat - going right */}
      <div
        className="hidden sm:block absolute w-32 sm:w-40 md:w-52 lg:w-60 pointer-events-none"
        style={{
          left: POS_BOATS.PILGRIM.startLeft,
          bottom: POS_BOATS.PILGRIM.bottom.sm,
          zIndex: Z_HERO.BOAT_PILGRIM,
          animation: "boatMoveRight 55s linear infinite",
          filter: "drop-shadow(0 0 8px rgba(255,200,100,0.3))",
        }}
      >
        <PilgrimBoat className="w-full h-auto" />
      </div>

      {/* Steamer - going left */}
      <div
        className="hidden sm:block absolute w-36 sm:w-44 md:w-56 lg:w-64 pointer-events-none"
        style={{
          left: POS_BOATS.STEAMER.startLeft,
          bottom: POS_BOATS.STEAMER.bottom.sm,
          zIndex: Z_HERO.BOAT_STEAMER,
          animation: "boatMoveLeft 60s linear infinite",
          filter: "drop-shadow(0 0 10px rgba(255,200,100,0.4))",
        }}
      >
        <Steamer className="w-full h-auto transform scale-x-[-1]" />
      </div>

      {/* Simple Row Boat - going right from mid */}
      <div
        className="hidden sm:block absolute w-20 sm:w-24 md:w-28 lg:w-32 pointer-events-none"
        style={{
          left: POS_BOATS.SIMPLE.startLeft,
          bottom: POS_BOATS.SIMPLE.bottom.sm,
          zIndex: Z_HERO.BOAT_SIMPLE,
          animation: "boatMoveRightFromMid 38s linear infinite",
          filter: "drop-shadow(0 0 6px rgba(255,200,100,0.3))",
        }}
      >
        <SimpleBoat className="w-full h-auto" />
      </div>
    </>
  );
});
