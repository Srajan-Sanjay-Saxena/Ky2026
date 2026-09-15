"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Road, LampPost } from "./common";
import { BanarasiVibesMobile } from "./mobile";
import { IMAGES } from "@/lib/images";
import { MotionZone, useMotionZone } from "@/components/motion";
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
      // BHU Gate rising from bottom - slower with delay and longer travel
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

      // Rickshaw continuous movement - using translateX for smooth animation
      rickshawAnimRef.current = gsap.to(rickshawRef.current, {
        x: "120vw",
        duration: 14,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(rickshawRef.current, { x: 0 });
        },
      });

      return () => {
        rickshawAnimRef.current?.kill();
      };
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

      {/* Rotating dancer Mandala — DESKTOP ONLY, continuous 360° spin.
          Sits behind the gate as a spiritual backdrop. Rotation pauses when
          the section scrolls off-screen (MotionZone) or when the user prefers
          reduced motion. */}
      <div
        className="pointer-events-none hidden sm:block absolute left-1/2 -translate-x-1/2 top-[4%] w-[420px] h-[420px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] opacity-40"
        style={{ zIndex: 5 }}
      >
        <Image
          src={IMAGES.vibes.mandala}
          alt=""
          fill
          className="object-contain"
          style={{
            animation: "spin 40s linear infinite",
            animationPlayState: prefersReducedMotion || !isAnimating ? "paused" : "running",
            filter: "drop-shadow(0 0 30px rgba(255,180,50,0.35))",
          }}
        />
      </div>

      {/* Mobile-only elements: Mandala, Diya with text */}
      <BanarasiVibesMobile />

      {/* Mobile-only tagline — sits in the band between the diya and the gate */}
      <div
        className="sm:hidden absolute left-1/2 -translate-x-1/2 top-[44%] w-[86%] text-center pointer-events-none"
        style={{ zIndex: 12 }}
      >
        <p
          className="text-[15px] leading-relaxed font-semibold"
          style={{
            fontFamily: "var(--font-ethereal), 'Noto Sans Devanagari', serif",
            color: "#FDF6E3",
            textShadow: "0 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          Where the ghats hum with aarti bells and the streets breathe
          centuries of culture —
          <span style={{ color: "#FFD700" }}> the eternal spirit of Banaras</span>.
        </p>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #FFD700)" }} />
          <span className="text-[10px]" style={{ color: "#FFD700" }}>◆</span>
          <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #FFD700, transparent)" }} />
        </div>
      </div>

      {/* BHU Gate - both mobile and desktop */}
      <div
        ref={gateRef}
        className="absolute left-1/2 -translate-x-1/2 w-[85%] sm:w-[65%] md:w-[55%] lg:w-[48%] bottom-[60px] sm:bottom-[-150px]"
        style={{ zIndex: 10 }}
      >
        {/* Mahamana statue - positioned in center archway */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[58%] sm:w-[45%] z-[5] bottom-[50px] sm:bottom-[280px]"
        >
          <Image
            src={IMAGES.vibes.mahamana}
            alt="Mahamana Malviya"
            width={500}
            height={600}
            className="w-full h-auto"
            style={{
              filter: "drop-shadow(0 0 15px rgba(255,215,0,0.3))",
            }}
          />
        </div>

        {/* Gate image on top */}
        <Image
          src={IMAGES.vibes.bhuGate}
          alt="IIT BHU Gate"
          width={1400}
          height={900}
          className="sm:bottom-62 bottom-7 absolute z-10"
          style={{
            filter:
              "drop-shadow(0 0 40px rgba(255,215,0,0.3)) drop-shadow(0 15px 30px rgba(0,0,0,0.5))",
          }}
          priority
        />
      </div>

      {/* Custom Road */}
      <Road />

      {/* Ganga Aarti Saint — Desktop only, left side facing inward toward the gate */}
      <div
        className="pointer-events-none hidden sm:block absolute sm:left-[-9%] sm:bottom-[160px] sm:w-[620px] sm:h-[900px] sm:z-0"
      >
        <Image
          src={IMAGES.vibes.gangaAartiSaint}
          alt="Priest performing Ganga Aarti"
          fill
          className="object-contain object-bottom"
          style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* Bharatnatyam Dancer — Desktop only, right side, mirrored to face inward */}
      <div
        className="pointer-events-none hidden sm:block absolute sm:right-[-8%] sm:bottom-[100px] sm:w-[690px] sm:h-[800px] sm:z-[35]"
      >
        <Image
          src={IMAGES.vibes.bharatnatyamDancer}
          alt="Classical Bharatnatyam dancer"
          fill
          className="object-contain object-bottom"
          style={{ transform: "scaleX(-1)", filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* Lamp Post - ON the road, smaller on mobile */}
      {/* Wrapped in MotionZone to pause SMIL animations when off-screen */}
      <MotionZone
        className="absolute left-[2%] sm:left-[20%] w-10 h-32 sm:w-30 sm:h-80"
        style={{ bottom: "70px", zIndex: 28 }}
      >
        <LampPost className="w-full h-full" />
      </MotionZone>

      {/* RICKSHAW - moving on road, smaller on mobile, starts closer */}
      <div
        ref={rickshawRef}
        className="pointer-events-none hidden sm:block sm:absolute  sm:w-[500px] sm:h-[300px]"
        style={{
          left: "-200px",
          bottom: "5px",
          zIndex: 40,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.vibes.rickshaw}
          alt="Auto Rickshaw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(5px 5px 20px rgba(0,0,0,0.7))",
            transform: "scaleX(-1)",
          }}
        />
      </div>

      {/* Bottom golden border — thick saree zari border */}
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
