"use client";

import { memo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks";

/**
 * Tabla & Sitar image with sway animation
 * Desktop only - positioned top right
 */
export const TablaSitar = memo(function TablaSitar() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -12,
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="pointer-events-none hidden sm:block sm:absolute top-[5%] right-[3%] z-20"
      >
      <Image
        src={IMAGES.vibes.tablaSitar}
        alt="Tabla & Sitar"
        width={1000}
        height={1000}
        className="sm:w-[450px] sm:h-[450px] object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
