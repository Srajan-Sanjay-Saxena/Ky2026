"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "@/lib/images";
import { JAZZ_COLORS } from "@/components/constants/palette";
import { EXPERIENCES } from "./experiences.config";
import { JazzTile } from "./tiles";
import { SectionTitle } from "./decorations";
import { MotionZone } from "@/components/motion";
import { usePrefersReducedMotion } from "@/hooks";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// MAIN FESTIVAL VIBES SECTION
// ═══════════════════════════════════════════════════════════════════

export const FestivalVibesSection = memo(function FestivalVibesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement>(null);
  const djRef = useRef<HTMLDivElement>(null);
  const sareeDrapeRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Title fade in and slide up
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      // Tiles stagger in from bottom
      gsap.fromTo(
        tilesRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tilesRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      // DJ slides in from right
      gsap.fromTo(
        djRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1.5,
          },
        },
      );

      // Saree drape slides in from top-right
      gsap.fromTo(
        sareeDrapeRef.current,
        { y: -100, x: 100, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 0.7,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        },
      );

      // Tagline fades in
      gsap.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: taglineRef.current,
            start: "top 95%",
            end: "top 75%",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <MotionZone>
      <section
        ref={sectionRef}
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 20% 0%, ${JAZZ_COLORS.ROYAL_PURPLE}20 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, ${JAZZ_COLORS.DEEP_MAGENTA}15 0%, transparent 50%),
            linear-gradient(180deg, ${JAZZ_COLORS.BG_DEEP} 0%, ${JAZZ_COLORS.BG_ROYAL} 30%, ${JAZZ_COLORS.BG_WINE} 70%, ${JAZZ_COLORS.BG_DEEP} 100%)
          `,
        }}
      >
        {/* Art deco pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs - Desktop only */}
        <div
          className="hidden sm:block absolute top-[10%] left-[5%] w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${JAZZ_COLORS.HOT_PINK}15 0%, transparent 60%)`,
            filter: "blur(60px)",
            animation: "pulseSlow 6s ease-in-out infinite",
          }}
        />
        <div
          className="hidden sm:block absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${JAZZ_COLORS.GOLD}10 0%, transparent 60%)`,
            filter: "blur(80px)",
            animation: "pulseSlow 8s ease-in-out infinite 2s",
          }}
        />
        <div
          className="hidden sm:block absolute top-[40%] right-[5%] w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${JAZZ_COLORS.ELECTRIC_BLUE}12 0%, transparent 60%)`,
            filter: "blur(50px)",
            animation: "pulseSlow 5s ease-in-out infinite 1s",
          }}
        />

        {/* Banarasi Saree Drape - Top Right Corner (Desktop only) */}
        <div
          ref={sareeDrapeRef}
          className="hidden lg:block absolute -top-[10%] -right-[15%] w-[80vw] max-w-[1000px] pointer-events-none"
          style={{
            zIndex: 1,
            opacity: 0,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 95%)",
          }}
        >
          <Image
            src={IMAGES.misc.sareeDrape}
            alt=""
            width={1200}
            height={1600}
            className="w-full h-auto"
            style={{
              filter: `drop-shadow(0 0 40px ${JAZZ_COLORS.DEEP_MAGENTA}40)`,
            }}
          />
        </div>

        {/* DJ Character - Bottom Right Corner - MASSIVE (Desktop only) with yo-yo animation */}
        <div
          ref={djRef}
          className="hidden sm:block absolute -bottom-[10%] -right-[13%] w-[70vw] max-w-[1300px] pointer-events-none"
          style={{
            zIndex: 2,
            opacity: 0,
            animation: "djBounce 2s ease-in-out infinite",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 70%, ${JAZZ_COLORS.HOT_PINK}50 0%, ${JAZZ_COLORS.ROYAL_PURPLE}30 40%, transparent 70%)`,
              filter: "blur(80px)",
              transform: "scale(1.5)",
            }}
          />
          <Image
            src={IMAGES.misc.dj}
            alt="DJ"
            width={1200}
            height={1400}
            className="relative w-full h-auto"
            style={{
              filter: `drop-shadow(0 0 60px ${JAZZ_COLORS.HOT_PINK}70) drop-shadow(0 0 120px ${JAZZ_COLORS.GOLD}40)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div ref={titleRef}>
            <SectionTitle />
          </div>

          {/* Bento Grid */}
          <div
            ref={tilesRef}
            className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[160px] gap-4 sm:gap-5 md:gap-6 lg:pr-[15%]"
          >
            {EXPERIENCES.map((tile, i) => (
              <JazzTile key={tile.id} tile={tile} index={i} />
            ))}
          </div>

          {/* Bottom tagline */}
          <div ref={taglineRef} className="mt-10 sm:mt-14 text-center">
            <div
              className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${JAZZ_COLORS.BG_ROYAL}90 0%, ${JAZZ_COLORS.BG_WINE}90 100%)`,
                border: `1px solid ${JAZZ_COLORS.GOLD}30`,
                boxShadow: `0 0 30px ${JAZZ_COLORS.GOLD}10`,
              }}
            >
              <span
                className="text-sm sm:text-base font-bold tracking-wider"
                style={{
                  color: JAZZ_COLORS.GOLD,
                  textShadow: `0 0 10px ${JAZZ_COLORS.GOLD}50`,
                }}
              >
                FEBRUARY 2027
              </span>
              <span style={{ color: JAZZ_COLORS.CREAM, opacity: 0.3 }}>•</span>
              <span
                className="text-sm sm:text-base font-medium tracking-wide"
                style={{ color: JAZZ_COLORS.CREAM, opacity: 0.7 }}
              >
                IIT (BHU) Varanasi
              </span>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-8"
            viewBox="0 0 1200 32"
            preserveAspectRatio="none"
          >
            <path
              d="M0 32 Q300 0 600 16 T1200 32"
              fill={JAZZ_COLORS.GOLD}
              opacity="0.1"
            />
          </svg>
        </div>
      </section>
    </MotionZone>
  );
});
