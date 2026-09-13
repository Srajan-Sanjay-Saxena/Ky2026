"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/config/images";

/**
 * Banarasi Malaiyo image with sway animation
 * Desktop only - positioned left side
 */
export function Malaiyo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -8,
        rotation: -2,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none opacity-0 sm:opacity-100 top-[28%] left-[1%] z-20"
    >
      <Image
        src={IMAGES.vibes.malaiyo}
        alt="Banarasi Malaiyo"
        width={800}
        height={800}
        className="w-20 h-20 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
}
