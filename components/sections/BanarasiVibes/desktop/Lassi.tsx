"use client";

import { memo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/images";

/**
 * Banarasi Lassi image with sway animation
 * Desktop only - positioned right side
 */
export const Lassi = memo(function Lassi() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -10,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none opacity-0 sm:opacity-100 top-[35%] right-[1%] z-20"
    >
      <Image
        src={IMAGES.vibes.lassi}
        alt="Banarasi Lassi"
        width={1000}
        height={1300}
        className="w-20 h-28 sm:w-72 sm:h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
