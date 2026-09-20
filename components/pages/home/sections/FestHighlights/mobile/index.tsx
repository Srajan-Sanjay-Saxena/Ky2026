"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
/**
 * Mobile-only elements for FestHighlights section
 * Shows: Mobile Temple
 * Hidden on desktop (>= 1024px)
 */
export const FestHighlightsMobile = memo(function FestHighlightsMobile() {
  return (
    <div className="lg:hidden w-full px-4 pt-16 sm:pt-20 mb-6 sm:mb-8">
      <Image
        src={IMAGES.highlights.durgaTemple}
        alt="Kashi Yatra Festival Venue"
        width={800}
        height={500}
        className="w-full h-auto"
        style={{
          filter: "drop-shadow(0 0 20px rgba(176,63,35,0.4))",
        }}
        priority
      />
    </div>
  );
});

