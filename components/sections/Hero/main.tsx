"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Moon as CinematicMoon } from "@/components/sections/Hero/Sky/Moon";
import { CinematicSky } from "@/components/sections/Hero/Sky/CinematicSky";
import { FlyingBirds } from "@/components/sections/Hero/Sky/Birds";
import { River } from "@/components/sections/Hero/River";
import { EveningGradient } from "./palette/hero.bg.pallete";
import { Z_HERO } from "@/components/constants";
import { IMAGES } from "@/config/images";

// Register plugin at module level (runs once when file is imported)
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const templeRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const riverRef = useRef<HTMLDivElement>(null);
  const ghatsRef = useRef<HTMLDivElement>(null);

  // Entry animation: Moon
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(moonRef.current, { scale: 0.5, opacity: 0 });
      gsap.to(moonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Entry animation: Title
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { y: -50, opacity: 0 });
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Entry animation: Temple & Ghats (related - both are buildings)
  useEffect(() => {
    /**
     * gsap.context() --> Creates a scope for animations that makes cleanup easy. All animations created inside it are tracked and can be reverted with a single call.
     * Why use it?
      React re-renders can create duplicate animations
      Without context, you'd manually track and kill each animation
      Essential for React's useEffect cleanup
     */

    const ctx = gsap.context(() => {
      gsap.set(templeRef.current, { y: 250, opacity: 0 });
      gsap.set(ghatsRef.current, { x: -250, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.8 });

      /*
        Symbol	Meaning
        "<"	Same start as previous
        ">"	Same end as previous
        "<0.2"	0.2s after previous starts
        ">-0.2"	0.2s before previous ends
        (none)	After previous ends	Sequential
        "-=0.3"	0.3s before previous ends	Overlap
        "+=0.3"	0.3s after previous ends	Gap
        2	At exactly 2 seconds	Absolute
        "<"	Same start as previous	Simultaneous
        "<0.2"	0.2s after previous starts	Slight delay from same start
       */

      tl.to(templeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "none",
      }).to(
        ghatsRef.current,
        { x: -40, opacity: 1, duration: 0.5, ease: "none" },
        "<",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Continuous glow: Temple & Ghats (related visual effect)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(templeRef.current, {
        filter:
          "drop-shadow(0 0 40px rgba(255,215,0,0.5)) drop-shadow(0 0 70px rgba(255,140,0,0.3))",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(ghatsRef.current, {
        filter:
          "drop-shadow(0 0 30px rgba(255,100,100,0.5)) drop-shadow(0 0 50px rgba(255,150,150,0.3))",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Parallax scroll: Moon & Temple (related scroll behavior)
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.to(moonRef.current, { y: p * -200, duration: 0.1 });
          gsap.to(templeRef.current, { y: p * 60, duration: 0.1 });
          gsap.to(ghatsRef.current, { x: p * -100, duration: 0.1 });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden max-w-[100vw]"
      style={{
        background: EveningGradient,
      }}
    >
      {/* Cinematic Sky with stars, clouds, shooting stars */}
      <CinematicSky className="z-1" />

      {/* Varanasi Background - Mobile optimized */}
      <div
        className="absolute bottom-[26%] sm:bottom-[27%] md:bottom-[26%] left-0 right-0 h-[25%] sm:h-[28%] md:h-[30%] z-6 pointer-events-none"
        style={{
          backgroundImage: `url('${IMAGES.hero.varanasiBack}')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          filter: "brightness(0.3) saturate(0.5)",
          mixBlendMode: "luminosity",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      {/* Enhanced Moon glow spreading into sky */}
      <div
        className="absolute inset-0 pointer-events-none z-2"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 12%, rgba(220,230,255,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 50% 10%, rgba(255,255,250,0.08) 0%, transparent 40%)
          `,
        }}
      />

      {/* Moon reflection on river hint */}
      <div
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[20%] h-[25%] pointer-events-none z-14"
        style={{
          background:
            "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(255,255,250,0.06) 0%, transparent 60%)",
          animation: "moonReflectionShimmer 4s ease-in-out infinite",
        }}
      />

      {/* Faint drifting clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute opacity-[0.08]"
            style={{
              top: `${5 + i * 8}%`,
              left: i % 2 === 0 ? "-20%" : "100%",
              width: `${150 + i * 30}px`,
              height: `${40 + i * 10}px`,
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: `cloudDrift${i % 2 === 0 ? "Right" : "Left"} ${40 + i * 10}s linear infinite`,
              animationDelay: `${i * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Kandeels (Sky Lanterns) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-4">
        {/* Kandeels scattered across - left side origin */}
        <div
          className="absolute"
          style={{
            left: "5%",
            top: "80%",
            animation: "kandeelFloatLeft 35s linear infinite",
            animationDelay: "0s",
          }}
        >
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            className="w-4 h-6 sm:w-5 sm:h-7"
          >
            <defs>
              <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="body1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF5E0" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFD699" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <ellipse
              cx="10"
              cy="14"
              rx="12"
              ry="16"
              fill="url(#glow1)"
              opacity="0.5"
            />
            <path
              d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
              fill="url(#body1)"
              stroke="#E8C07D"
              strokeWidth="0.3"
            />
            <ellipse
              cx="10"
              cy="6"
              rx="6"
              ry="2"
              fill="#4A3728"
              opacity="0.6"
            />
            <ellipse cx="10" cy="14" rx="4" ry="6" fill="#FF8C00" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.5;0.7;0.5"
                dur="1s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="10" cy="13" rx="2" ry="3" fill="#FFD700" opacity="0.8">
              <animate
                attributeName="ry"
                values="3;4;3"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>

        <div
          className="absolute"
          style={{
            left: "15%",
            top: "65%",
            animation: "kandeelFloatLeft 40s linear infinite",
            animationDelay: "4s",
          }}
        >
          <svg
            width="16"
            height="22"
            viewBox="0 0 20 28"
            className="w-3 h-5 sm:w-4 sm:h-6"
          >
            <defs>
              <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="body2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF8EC" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FFE8CC" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFDAB0" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <ellipse
              cx="10"
              cy="14"
              rx="11"
              ry="15"
              fill="url(#glow2)"
              opacity="0.4"
            />
            <path
              d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
              fill="url(#body2)"
              stroke="#D4A86A"
              strokeWidth="0.3"
            />
            <ellipse
              cx="10"
              cy="6"
              rx="6"
              ry="2"
              fill="#3D2E1F"
              opacity="0.5"
            />
            <ellipse
              cx="10"
              cy="14"
              rx="3.5"
              ry="5"
              fill="#FFA040"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.4;0.6;0.4"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="10"
              cy="13"
              rx="1.5"
              ry="2.5"
              fill="#FFD700"
              opacity="0.7"
            >
              <animate
                attributeName="ry"
                values="2.5;3.5;2.5"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>

        {/* Kandeels from right side origin */}
        <div
          className="absolute"
          style={{
            right: "8%",
            top: "75%",
            animation: "kandeelFloatRight 38s linear infinite",
            animationDelay: "2s",
          }}
        >
          <svg
            width="18"
            height="25"
            viewBox="0 0 20 28"
            className="w-3.5 h-5 sm:w-4 sm:h-6"
          >
            <defs>
              <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="body3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF5E0" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFD699" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <ellipse
              cx="10"
              cy="14"
              rx="11"
              ry="15"
              fill="url(#glow3)"
              opacity="0.45"
            />
            <path
              d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
              fill="url(#body3)"
              stroke="#E8C07D"
              strokeWidth="0.3"
            />
            <ellipse
              cx="10"
              cy="6"
              rx="6"
              ry="2"
              fill="#4A3728"
              opacity="0.55"
            />
            <ellipse
              cx="10"
              cy="14"
              rx="4"
              ry="5.5"
              fill="#FF8C00"
              opacity="0.55"
            >
              <animate
                attributeName="opacity"
                values="0.45;0.65;0.45"
                dur="1.1s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="10"
              cy="13"
              rx="2"
              ry="2.8"
              fill="#FFD700"
              opacity="0.75"
            >
              <animate
                attributeName="ry"
                values="2.8;3.8;2.8"
                dur="0.85s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>

        <div
          className="absolute"
          style={{
            right: "20%",
            top: "85%",
            animation: "kandeelFloatRight 45s linear infinite",
            animationDelay: "8s",
          }}
        >
          <svg
            width="14"
            height="20"
            viewBox="0 0 20 28"
            className="w-2.5 h-4 sm:w-3 sm:h-5"
          >
            <defs>
              <radialGradient id="glow4" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="body4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF8EC" stopOpacity="0.88" />
                <stop offset="50%" stopColor="#FFE8CC" stopOpacity="0.83" />
                <stop offset="100%" stopColor="#FFDAB0" stopOpacity="0.78" />
              </linearGradient>
            </defs>
            <ellipse
              cx="10"
              cy="14"
              rx="10"
              ry="14"
              fill="url(#glow4)"
              opacity="0.35"
            />
            <path
              d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
              fill="url(#body4)"
              stroke="#D4A86A"
              strokeWidth="0.3"
            />
            <ellipse
              cx="10"
              cy="6"
              rx="6"
              ry="2"
              fill="#3D2E1F"
              opacity="0.45"
            />
            <ellipse
              cx="10"
              cy="14"
              rx="3"
              ry="4.5"
              fill="#FFA040"
              opacity="0.45"
            >
              <animate
                attributeName="opacity"
                values="0.35;0.55;0.35"
                dur="1.3s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="10"
              cy="13"
              rx="1.2"
              ry="2"
              fill="#FFD700"
              opacity="0.65"
            >
              <animate
                attributeName="ry"
                values="2;3;2"
                dur="1s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>

        {/* One more from center-left */}
        <div
          className="absolute"
          style={{
            left: "25%",
            top: "70%",
            animation: "kandeelFloatLeft 42s linear infinite",
            animationDelay: "6s",
          }}
        >
          <svg
            width="15"
            height="21"
            viewBox="0 0 20 28"
            className="w-3 h-4 sm:w-3.5 sm:h-5"
          >
            <defs>
              <radialGradient id="glow5" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="body5" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF5E0" stopOpacity="0.88" />
                <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.83" />
                <stop offset="100%" stopColor="#FFD699" stopOpacity="0.78" />
              </linearGradient>
            </defs>
            <ellipse
              cx="10"
              cy="14"
              rx="10"
              ry="14"
              fill="url(#glow5)"
              opacity="0.4"
            />
            <path
              d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
              fill="url(#body5)"
              stroke="#E8C07D"
              strokeWidth="0.3"
            />
            <ellipse
              cx="10"
              cy="6"
              rx="6"
              ry="2"
              fill="#4A3728"
              opacity="0.5"
            />
            <ellipse
              cx="10"
              cy="14"
              rx="3.5"
              ry="5"
              fill="#FF8C00"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.4;0.6;0.4"
                dur="1.15s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="10"
              cy="13"
              rx="1.5"
              ry="2.5"
              fill="#FFD700"
              opacity="0.7"
            >
              <animate
                attributeName="ry"
                values="2.5;3.5;2.5"
                dur="0.95s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>
      </div>

      {/* Flying Birds - Mobile optimized */}
      <div className="absolute top-[6%] sm:top-[8%] left-0 w-full h-10 sm:h-14 md:h-18 z-30 overflow-hidden">
        <FlyingBirds className="w-full h-full" />
      </div>

      {/* Second flock - hidden on mobile for performance */}
      <div
        className="hidden sm:block absolute top-[12%] sm:top-[15%] left-0 w-full h-10 sm:h-12 md:h-16 z-30 overflow-hidden opacity-60"
        style={{ animationDelay: "10s" }}
      >
        <FlyingBirds className="w-full h-full" />
      </div>

      {/* Cinematic Moon - Mobile optimized */}
      <div
        ref={moonRef}
        className="absolute top-[2%] sm:top-[3%] md:top-[4%] left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 z-5"
      >
        <CinematicMoon className="w-full h-full" />
      </div>

      {/* Title - Mobile optimized */}
      <h1
        ref={titleRef}
        className="absolute top-[12%] sm:top-[14%] md:top-[18%] left-1/2 -translate-x-1/2 text-center z-20 w-full px-4"
      >
        <Image
          src={IMAGES.hero.logo}
          alt="काशी यात्रा"
          width={500}
          height={150}
          className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] h-auto mx-auto"
          style={{
            filter:
              "drop-shadow(0 0 30px rgba(255,215,0,0.7)) drop-shadow(0 0 15px rgba(255,165,0,0.5))",
          }}
          priority
        />

        {/* 2026 Ethereal Badge */}
        <div className="relative mt-4 sm:mt-5 md:mt-6 inline-block">
          {/* Outer divine glow rings */}
          <div
            className="absolute inset-0 -m-4 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,215,0,0.15) 0%, transparent 70%)",
              animation: "yearAura 3s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 -m-8 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,165,0,0.1) 0%, transparent 60%)",
              animation: "yearAura 3.5s ease-in-out infinite reverse",
            }}
          />

          {/* Main container */}
          <div
            className="relative px-8 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,140,0,0.08) 50%, rgba(255,215,0,0.15) 100%)",
              border: "1px solid rgba(255,215,0,0.4)",
              boxShadow:
                "0 0 30px rgba(255,215,0,0.3), 0 0 60px rgba(255,165,0,0.15), inset 0 0 20px rgba(255,215,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  animation: "shimmerSlide 3s ease-in-out infinite",
                }}
              />
            </div>

            {/* Hindi Year */}
            <span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider"
              style={{
                fontFamily: "serif",
                color: "#FFD700",
                textShadow:
                  "0 0 20px rgba(255,215,0,0.9), 0 0 40px rgba(255,165,0,0.6), 0 0 60px rgba(255,140,0,0.4)",
                animation: "textGlow 2s ease-in-out infinite",
              }}
            >
              २०२६
            </span>
          </div>

          {/* Floating sparkles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${10 + i * 16}%`,
                top: `${i % 2 === 0 ? -20 : 120}%`,
                background: "#FFD700",
                boxShadow: "0 0 6px #FFD700, 0 0 12px rgba(255,215,0,0.5)",
                animation: `sparkleFloat ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </h1>

      {/* GHAT PNG - Aligned with temple */}
      <div
        ref={ghatsRef}
        className="absolute bottom-[29%] sm:bottom-[28%] md:bottom-[25.5%] left-[-5%] sm:left-[-3%] md:left-[-2%] w-[52%] sm:w-[55%] md:w-[50%]"
        style={{
          zIndex: Z_HERO.GHATS,
          filter: "drop-shadow(0 0 20px rgba(255,100,100,0.4))",
        }}
      >
        {/* Soft divine glow behind ghats */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,150,150,0.15) 0%, transparent 70%)",
            animation: "ghatsAura 3s ease-in-out infinite",
          }}
        />

        {/* Subtle floating light particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`ghat-particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              left: `${25 + (i % 3) * 25}%`,
              top: `${30 + Math.floor(i / 3) * 20}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, #FFB6C1 0%, transparent 70%)"
                  : "radial-gradient(circle, #FF6B6B 0%, transparent 70%)",
              animation: `floatParticle ${2.5 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              boxShadow: "0 0 8px rgba(255,150,150,0.6)",
            }}
          />
        ))}

        <Image
          src={IMAGES.hero.ghats}
          alt="Varanasi Ghats"
          width={1000}
          height={600}
          className="w-full h-auto max-h-[26vh] sm:max-h-[35vh] md:max-h-[40vh] object-contain"
          style={{ animation: "ghatsShimmer 4s ease-in-out infinite" }}
          priority
        />
      </div>

      {/* TEMPLE PNG - Highest z-index, aligned with ghats */}
      <div
        ref={templeRef}
        className="absolute bottom-[31%] sm:bottom-[31%] md:bottom-[28%] right-[-9%] sm:right-[-6%] md:right-[-7%] w-[55%] sm:w-[62%] md:w-[56%] lg:w-[48%]"
        style={{
          zIndex: Z_HERO.TEMPLE,
          filter: "drop-shadow(0 0 25px rgba(255,215,0,0.5))",
        }}
      >
        {/* Divine aura rings */}
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,215,0,0.15) 0%, transparent 70%)",
            animation: "divineAura 2s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90%] h-[70%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,140,0,0.1) 0%, transparent 60%)",
            animation: "divineAura 2.5s ease-in-out infinite reverse",
          }}
        />

        {/* Floating divine particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${15 + Math.floor(i / 4) * 25}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, #FFD700 0%, transparent 70%)"
                  : "radial-gradient(circle, #FFA500 0%, transparent 70%)",
              animation: `floatParticle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: "0 0 6px rgba(255,215,0,0.5)",
            }}
          />
        ))}

        <Image
          src={IMAGES.hero.temple}
          alt="Kashi Vishwanath Temple"
          width={1000}
          height={1100}
          className="w-full h-auto"
          style={{ animation: "templeShimmer 4s ease-in-out infinite" }}
          priority
        />
      </div>

      {/* RIVER - Contains water, lotus, diyas, boats, and stepping stones */}
      <River ref={riverRef} />

      {/* Floating embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${35 + Math.random() * 35}%`,
              animation: `ember ${5 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>
    </section>
  );
}
