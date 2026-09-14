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
import { usePrefersReducedMotion } from "@/hooks";

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
  const prefersReducedMotion = usePrefersReducedMotion();

  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (prefersReducedMotion) return;

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
  }, [prefersReducedMotion]);

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

      {/* Floating Stars/Particles - Desktop only */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-[5]">
        {/* Top-left cluster */}
        <div className="absolute w-1 h-1 rounded-full bg-white/60 top-[5%] left-[5%]" style={{ boxShadow: "0 0 6px rgba(200,200,255,0.8)", animation: "floatParticle 8s ease-in-out infinite" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-200/50 top-[8%] left-[12%]" style={{ boxShadow: "0 0 8px rgba(150,180,255,0.6)", animation: "floatParticle 10s ease-in-out infinite 1s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/50 top-[12%] left-[8%]" style={{ boxShadow: "0 0 5px rgba(200,200,255,0.7)", animation: "floatParticle 7s ease-in-out infinite 2s" }} />
        <div className="absolute w-2 h-2 rounded-full bg-blue-100/40 top-[15%] left-[18%]" style={{ boxShadow: "0 0 10px rgba(180,200,255,0.5)", animation: "floatParticle 12s ease-in-out infinite 0.5s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/70 top-[18%] left-[6%]" style={{ boxShadow: "0 0 6px rgba(220,220,255,0.8)", animation: "floatParticle 9s ease-in-out infinite 3s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-200/60 top-[22%] left-[15%]" style={{ boxShadow: "0 0 7px rgba(160,190,255,0.6)", animation: "floatParticle 11s ease-in-out infinite 1.5s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/50 top-[10%] left-[22%]" style={{ boxShadow: "0 0 5px rgba(200,200,255,0.6)", animation: "floatParticle 8s ease-in-out infinite 4s" }} />
        <div className="absolute w-0.5 h-0.5 rounded-full bg-white/80 top-[25%] left-[10%]" style={{ boxShadow: "0 0 4px rgba(220,220,255,0.9)", animation: "floatParticle 6s ease-in-out infinite 0.3s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-blue-100/50 top-[6%] left-[25%]" style={{ boxShadow: "0 0 6px rgba(170,190,255,0.5)", animation: "floatParticle 9s ease-in-out infinite 2.5s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 top-[20%] left-[3%]" style={{ boxShadow: "0 0 8px rgba(200,200,255,0.5)", animation: "floatParticle 13s ease-in-out infinite 1.8s" }} />
        
        {/* Middle scattered */}
        <div className="absolute w-1 h-1 rounded-full bg-white/50 top-[40%] left-[25%]" style={{ boxShadow: "0 0 5px rgba(200,200,255,0.6)", animation: "floatParticle 8s ease-in-out infinite 4s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/60 top-[35%] left-[45%]" style={{ boxShadow: "0 0 6px rgba(210,210,255,0.7)", animation: "floatParticle 7s ease-in-out infinite 0.8s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-200/50 top-[50%] left-[55%]" style={{ boxShadow: "0 0 8px rgba(150,180,255,0.5)", animation: "floatParticle 10s ease-in-out infinite 3.5s" }} />
        
        {/* Bottom-right cluster */}
        <div className="absolute w-1 h-1 rounded-full bg-white/60 top-[70%] left-[75%]" style={{ boxShadow: "0 0 6px rgba(200,200,255,0.8)", animation: "floatParticle 8s ease-in-out infinite 0.5s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-200/50 top-[75%] left-[82%]" style={{ boxShadow: "0 0 8px rgba(150,180,255,0.6)", animation: "floatParticle 10s ease-in-out infinite 2s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/50 top-[80%] left-[78%]" style={{ boxShadow: "0 0 5px rgba(200,200,255,0.7)", animation: "floatParticle 7s ease-in-out infinite 1s" }} />
        <div className="absolute w-2 h-2 rounded-full bg-blue-100/40 top-[85%] left-[88%]" style={{ boxShadow: "0 0 10px rgba(180,200,255,0.5)", animation: "floatParticle 12s ease-in-out infinite 3s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/70 top-[88%] left-[72%]" style={{ boxShadow: "0 0 6px rgba(220,220,255,0.8)", animation: "floatParticle 9s ease-in-out infinite 0.2s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-200/60 top-[78%] left-[92%]" style={{ boxShadow: "0 0 7px rgba(160,190,255,0.6)", animation: "floatParticle 11s ease-in-out infinite 2.5s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-white/50 top-[90%] left-[85%]" style={{ boxShadow: "0 0 5px rgba(200,200,255,0.6)", animation: "floatParticle 8s ease-in-out infinite 1.5s" }} />
        <div className="absolute w-0.5 h-0.5 rounded-full bg-white/80 top-[82%] left-[95%]" style={{ boxShadow: "0 0 4px rgba(220,220,255,0.9)", animation: "floatParticle 6s ease-in-out infinite 3.3s" }} />
        <div className="absolute w-1 h-1 rounded-full bg-blue-100/50 top-[92%] left-[80%]" style={{ boxShadow: "0 0 6px rgba(170,190,255,0.5)", animation: "floatParticle 9s ease-in-out infinite 0.8s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 top-[72%] left-[90%]" style={{ boxShadow: "0 0 8px rgba(200,200,255,0.5)", animation: "floatParticle 13s ease-in-out infinite 2.2s" }} />
      </div>

      {/* Subtle nebula clouds - Desktop only */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-[2]">
        <div
          className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(40,50,100,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,40,80,0.15) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-[60%] left-[60%] w-[250px] h-[250px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(50,60,120,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

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
            filter: `drop-shadow(0 0 30px rgba(40,40,100,0.5))`,
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
