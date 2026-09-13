"use client";

import { memo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/images";

/**
 * Banarasi Malaiyo image with sway animation
 * Desktop only - positioned left side
 */
export const Malaiyo = memo(function Malaiyo() {
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
      className="pointer-events-none hidden sm:block sm:absolute top-[8%] left-[15%] z-20"
    >
      <Image
        src={IMAGES.vibes.malaiyo}
        alt="Banarasi Malaiyo"
        width={800}
        height={800}
        className="sm:w-72 sm:h-72 object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
