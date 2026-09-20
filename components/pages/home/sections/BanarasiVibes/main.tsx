"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Road, LampPost, BHUGate } from "./common";
import { BanarasiVibesMobile } from "./mobile";
import { BanarasiVibesDesktop } from "./desktop";
import { IMAGES } from "@/lib/images";
import { MotionZone, useMotionZone } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks";

// Inner component that can access MotionZone context
function BanarasiVibesContent() {
  const { isAnimating } = useMotionZone();
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);
  const rickshawRef = useRef<HTMLDivElement>(null);
  const rickshawAnimRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // BHU Gate rising from bottom
      gsap.fromTo(
        gateRef.current,
        { y: 600, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            end: "top 20%",
            scrub: 1.5,
          },
        },
      );

      // Rickshaw continuous movement
      rickshawAnimRef.current = gsap.to(rickshawRef.current, {
        x: "120vw",
        duration: 14,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(rickshawRef.current, { x: 0 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Pause/resume rickshaw animation based on MotionZone context
  useEffect(() => {
    if (rickshawAnimRef.current) {
      if (isAnimating) {
        rickshawAnimRef.current.resume();
      } else {
        rickshawAnimRef.current.pause();
      }
    }
  }, [isAnimating]);

  return (
    <section
      ref={sectionRef}
      data-section="banarasi-vibes"
      className="relative min-h-screen overflow-hidden"
      style={{
        borderRadius: "24px 24px 0 0",
        boxShadow: "0 -20px 60px rgba(0,0,0,0.8)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${IMAGES.vibes.background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop-only elements */}
      <BanarasiVibesDesktop
        isAnimating={isAnimating}
        prefersReducedMotion={prefersReducedMotion}
        rickshawRef={rickshawRef}
      />

      {/* Mobile-only elements */}
      <BanarasiVibesMobile />

      {/* Common: BHU Gate with Mahamana */}
      <BHUGate ref={gateRef} />

      {/* Common: Road */}
      <Road />

      {/* Common: Lamp Post */}
      <MotionZone
        className="absolute left-[2%] sm:left-[20%] w-10 h-32 sm:w-30 sm:h-80"
        style={{ bottom: "70px", zIndex: 28 }}
      >
        <LampPost className="w-full h-full" />
      </MotionZone>

      {/* Bottom golden border */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[60] pointer-events-none"
        style={{ height: "6px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #8B6914, #FFD700, #E8B820, #FFD700, #C8960C, #FFD700, #8B6914)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "1px", background: "rgba(255,255,255,0.3)" }}
        />
      </div>
    </section>
  );
}

// Exported component wraps content with MotionZone
export function BanarasiVibesSection() {
  return (
    <MotionZone threshold={0.05} rootMargin="100px">
      <BanarasiVibesContent />
    </MotionZone>
  );
}
