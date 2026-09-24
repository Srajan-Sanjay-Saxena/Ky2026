"use client";

import { memo, RefObject } from "react";
import { IMAGES } from "@/lib/images";

interface RickshawProps {
  ref?: RefObject<HTMLDivElement | null>;
}

export const Rickshaw = memo(function Rickshaw({ ref }: RickshawProps) {
  return (
    <div
      ref={ref}
      className="pointer-events-none hidden sm:block sm:absolute sm:w-[500px] sm:h-[300px]"
      style={{
        left: "-200px",
        bottom: "5px",
        zIndex: 40,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGES.vibes.rickshaw}
        alt="Auto Rickshaw"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: "drop-shadow(5px 5px 20px rgba(0,0,0,0.7))",
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
});
