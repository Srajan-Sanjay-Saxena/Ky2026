"use client";

import { memo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks";

/**
 * Banarasi Lassi image with sway animation
 * Desktop only - positioned right side
 */
export const Lassi = memo(function Lassi() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

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
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="pointer-events-none hidden sm:block sm:absolute  top-[45%] right-[9%] z-20"
    >
      <Image
        src={IMAGES.vibes.lassi}
        alt="Banarasi Lassi"
        width={1000}
        height={1300}
        className="sm:w-72 sm:h-96 object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
