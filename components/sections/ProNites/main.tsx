"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GRADIENT_STAGE, CONCERT_COLORS, ARTISTS } from "./constants";
import { HeadlinerCard, FeaturingCard } from "./ArtistCard";
import { SpotlightBeams } from "./SpotlightBeams";
import { SectionTitle } from "./SectionTitle";
import { GlowingMoon, Rockstar, TopBorder, BottomBorder, GridOverlay } from "./DecorativeElements";
import { IMAGES } from "@/lib/images";
import { MotionZone } from "@/components/motion";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// MAIN PRONITES SECTION
// Clean composition of all sub-components
// ═══════════════════════════════════════════════════════════════════
export const ProNitesSection = memo(function ProNitesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const headlinersRef = useRef<HTMLDivElement>(null);
  const featuringRef = useRef<HTMLDivElement>(null);
  const crowdRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title fade in and slide up
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
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
        }
      );

      // Headliner cards stagger in
      gsap.fromTo(
        headlinersRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headlinersRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );

      // Featuring cards stagger in
      gsap.fromTo(
        featuringRef.current?.children || [],
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuringRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // Concert crowd rises from bottom
      gsap.fromTo(
        crowdRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headliners = ARTISTS.filter(a => a.isHeadliner);
  const supporting = ARTISTS.filter(a => !a.isHeadliner);

  return (
    <MotionZone>
      <section
        ref={sectionRef}
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: GRADIENT_STAGE }}
      >
      {/* ═══ Background Elements ═══ */}
      <SpotlightBeams />
      <GlowingMoon />
      <Rockstar />
      <GridOverlay />
      <TopBorder />

      {/* Concert Crowd Silhouette - Bottom Left (Desktop only) */}
      <div 
        ref={crowdRef}
        className="hidden sm:block absolute -bottom-20 -left-30 w-[90vw] max-w-[1300px] pointer-events-none"
        style={{ 
          zIndex: 100,
          maskImage: "linear-gradient(to right, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 50%, transparent 100%)",
        }}
      >
        <Image
          src={IMAGES.misc.concertCrowd}
          alt=""
          width={1600}
          height={800}
          className="w-full h-auto"
          style={{
            filter: `drop-shadow(0 0 30px ${CONCERT_COLORS.NEON_PINK}50)`,
          }}
        />
      </div>

      {/* ═══ Main Content ═══ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={titleRef}>
          <SectionTitle />
        </div>

        {/* Headliners */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold"
              style={{ color: CONCERT_COLORS.NEON_GOLD, textShadow: `0 0 15px ${CONCERT_COLORS.NEON_GOLD}80` }}
            >
              ★ Headliners ★
            </span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          
          <div ref={headlinersRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {headliners.map((artist, i) => (
              <HeadlinerCard key={artist.id} artist={artist} index={i} />
            ))}
          </div>
        </div>

        {/* Featuring */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              Featuring
            </span>
            <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>
          
          <div ref={featuringRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {supporting.map((artist, i) => (
              <FeaturingCard key={artist.id} artist={artist} index={i} />
            ))}
          </div>
        </div>
      </div>

      <BottomBorder />
    </section>
    </MotionZone>
  );
});
