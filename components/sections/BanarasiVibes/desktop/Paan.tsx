"use client";

import { memo } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IMAGES } from "@/lib/images";

/**
 * Banarasi Paan image with sway animation
 * Desktop only - positioned top left
 */
export const Paan = memo(function Paan() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none opacity-0 sm:opacity-100 top-[3%] left-[5%] z-20"
    >
      <Image
        src={IMAGES.vibes.paan}
        alt="Banarasi Paan"
        width={1200}
        height={1200}
        className="w-28 h-28 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] object-contain"
        style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
});
