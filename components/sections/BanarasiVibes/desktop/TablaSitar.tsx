"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Tabla & Sitar image with sway animation
 * Desktop only - positioned top right
 */
export function TablaSitar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none opacity-0 sm:opacity-100 top-[-2%] right-[5%] md:right-[7%] z-20"
    >
      <Image
        src="/tabla_sitar_nobg.png"
        alt="Tabla & Sitar"
        width={1600}
        height={1600}
        className="w-32 h-32 sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
}
