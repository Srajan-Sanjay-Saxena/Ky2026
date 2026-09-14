"use client";

import { memo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks";

/**
 * Banarasi Paan image with sway animation
 * Desktop only - positioned top left
 */
export const Paan = memo(function Paan() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -15,
        rotation: -3,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="pointer-events-none hidden sm:block sm:absolute  top-[40%] left-[9%] z-20"
    >
      <Image
        src={IMAGES.vibes.paan}
        alt="Banarasi Paan"
        width={1200}
        height={1200}
        className="sm:w-[250px] sm:h-[250px] object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
