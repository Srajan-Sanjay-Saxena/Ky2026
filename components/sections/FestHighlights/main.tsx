"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { LampSVG } from "./Lamp";
import { BellSVG } from "./Bell";
import { LotusSVG } from "./Lotus";
import { Trishul } from "./Trishul";
import { MandalaRing } from "./MandlaRing";
import { FestSparkles } from "./Sparkles";



const highlights = [
  {
    icon: "🎭",
    title: "Cultural Nights",
    desc: "Classical dance & music performances",
  },
  { icon: "🎪", title: "Grand Stage", desc: "State-of-the-art sound & lights" },
  { icon: "🏆", title: "Competitions", desc: "Win from ₹10L+ prize pool" },
  {
    icon: "🎤",
    title: "Pro Shows",
    desc: "Celebrity performances & DJ nights",
  },
];


export function FestHighlightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const templeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Temple reveal
      gsap.fromTo(
        templeRef.current,
        { x: -150, opacity: 0, scale: 0.85 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Decorative elements float
      const decorItems = decorRef.current?.querySelectorAll(".decor-item");
      decorItems?.forEach((item, i) => {
        gsap.to(item, {
          y: -15 + Math.random() * 30,
          rotation: -5 + Math.random() * 10,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });

      // Temple glow pulse
      gsap.to(templeRef.current, {
        filter: "drop-shadow(0 0 60px rgba(176,63,35,0.7))",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Highlight cards stagger
      const cards = contentRef.current?.querySelectorAll(".highlight-card");
      gsap.fromTo(
        cards || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-10 sm:py-12 md:py-16 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          #1A1A2E 0%, 
          #2D1810 30%,
          #4A1A10 50%,
          #2D1810 70%,
          #1A1A2E 100%
        )`,
      }}
    >
      {/* Background Mandala - smaller on mobile */}
      <div
        className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] pointer-events-none opacity-15"
        style={{ animation: "spin 60s linear infinite" }}
      >
        <MandalaRing className="w-full h-full text-[#FF6B00]" />
      </div>

      {/* Floating Decorative Elements - hidden on mobile */}
      <div
        ref={decorRef}
        className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden z-30"
      >
        {/* Trishuls - hidden on small mobile */}
        <div className="decor-item hidden sm:block absolute top-[10%] left-[5%] w-8 sm:w-10 md:w-12 h-16 sm:h-20 md:h-24 text-[#FFD700] opacity-30">
          <Trishul className="w-full h-full" />
        </div>
        <div className="decor-item hidden md:block absolute top-[15%] right-[5%] w-8 md:w-10 h-16 md:h-20 text-[#FF6B00] opacity-25">
          <Trishul className="w-full h-full" />
        </div>

        {/* Diyas */}
        <div className="decor-item absolute bottom-[20%] left-[3%] w-10 sm:w-12 md:w-14 h-12 sm:h-14 md:h-16">
          <LampSVG className="w-full h-full" />
        </div>
        <div className="decor-item hidden sm:block absolute top-[25%] right-[3%] w-10 md:w-12 h-12 md:h-14">
          <LampSVG className="w-full h-full" />
        </div>
        <div className="decor-item hidden md:block absolute bottom-[10%] right-[8%] w-8 md:w-10 h-10 md:h-12">
          <LampSVG className="w-full h-full" />
        </div>

        {/* Bells - hidden on mobile */}
        <div className="decor-item hidden md:block absolute top-[8%] left-[12%] w-8 md:w-10 h-12 md:h-14 text-[#DAA520] opacity-40">
          <BellSVG className="w-full h-full" />
        </div>
        <div className="decor-item hidden lg:block absolute bottom-[25%] right-[5%] w-6 md:w-8 h-10 md:h-12 text-[#B8860B] opacity-35">
          <BellSVG className="w-full h-full" />
        </div>

        {/* Lotus - hidden on small mobile */}
        <div className="decor-item hidden sm:block absolute bottom-[5%] left-[15%] w-14 sm:w-16 md:w-20 h-8 sm:h-10 md:h-12 opacity-50">
          <LotusSVG className="w-full h-full" />
        </div>
        <div className="decor-item hidden md:block absolute top-[5%] right-[15%] w-12 md:w-16 h-8 md:h-10 opacity-40">
          <LotusSVG className="w-full h-full" />
        </div>
      </div>

      {/* Floating particles - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#FF6B00" : "#FFD700",
              opacity: 0.3 + Math.random() * 0.3,
              animation: `floatParticle ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* GODDESS DURGA - Divine presence */}
      <div className="absolute right-0 bottom-0 w-[35%] sm:w-[30%] md:w-[28%] lg:w-[25%] xl:w-[22%] pointer-events-none z-20">
        {/* Divine aura behind Durga */}
        <div
          className="absolute inset-[-30%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.15) 0%, rgba(176,63,35,0.08) 40%, transparent 70%)",
            animation: "durgaAura 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-[-15%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.12) 0%, rgba(255,140,0,0.06) 40%, transparent 70%)",
            animation: "durgaAura 3s ease-in-out infinite reverse",
          }}
        />

        {/* Rotating sacred ring */}
        <div
          className="absolute inset-[-20%] rounded-full pointer-events-none"
          style={{
            border: "1px solid rgba(255,215,0,0.1)",
            animation: "rotateDurga 25s linear infinite",
          }}
        />

        {/* Divine particles around Durga */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`durga-particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 30}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, #FFD700 0%, transparent 70%)"
                  : "radial-gradient(circle, #FF4500 0%, transparent 70%)",
              animation: `floatParticle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: "0 0 8px rgba(255,215,0,0.6)",
            }}
          />
        ))}

        <Image
          src="/durga.svg"
          alt="Goddess Durga"
          width={800}
          height={1000}
          className="w-full h-auto relative"
          style={{
            filter:
              "drop-shadow(0 0 30px rgba(255,69,0,0.5)) drop-shadow(0 0 60px rgba(255,215,0,0.3))",
            animation: "durgaShimmer 4s ease-in-out infinite",
          }}
          priority
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[15%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(255,140,0,0.4) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* TEMPLE - Absolute positioned, large, on left */}
      <div
        ref={templeRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[55%] lg:w-[52%] xl:w-[50%] pointer-events-none hidden lg:block"
        style={{ zIndex: 1 }}
      >
        {/* Glow behind temple */}
        <div
          className="absolute inset-0 blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle at center, #B03F23 0%, transparent 60%)",
          }}
        />

        {/* Energy rings behind temple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: 500 + i * 150,
                height: 500 + i * 150,
                left: -(250 + i * 75),
                top: -(250 + i * 75),
                borderColor: `rgba(255,107,0,${0.25 - i * 0.06})`,
                animation: `pulseRing ${3 + i}s ease-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Temple Image - LARGE */}
        <Image
          src="/durga_temple.svg"
          alt="Kashi Yatra Festival Venue"
          width={1400}
          height={850}
          className="w-full h-auto relative"
          style={{
            filter: "drop-shadow(0 0 40px rgba(176,63,35,0.5))",
          }}
          priority
        />
      </div>

      {/* Mobile Temple - Shows only on mobile/tablet */}
      <div className="lg:hidden w-full px-4 pt-16 sm:pt-20 mb-6 sm:mb-8">
        <Image
          src="/durga_temple.svg"
          alt="Kashi Yatra Festival Venue"
          width={800}
          height={500}
          className="w-full h-auto"
          style={{
            filter: "drop-shadow(0 0 20px rgba(176,63,35,0.4))",
          }}
          priority
        />
      </div>

      {/* CONTENT - Right side on desktop, full width on mobile */}
      <div className="relative z-10 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[85vh] flex items-start sm:items-center pt-4 sm:pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center lg:justify-end">
            <div
              ref={contentRef}
              className="w-full lg:w-[42%] xl:w-[38%] lg:pr-8 text-center lg:text-left"
            >
              <span
                className="inline-block text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full"
                style={{
                  color: "#FF6B00",
                  background: "rgba(255,107,0,0.15)",
                  border: "1px solid rgba(255,107,0,0.4)",
                }}
              >
                March 15-17, 2026
              </span>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4"
                style={{
                  color: "#FFD700",
                  textShadow: "0 0 30px rgba(255,215,0,0.5)",
                }}
              >
                The Grand
                <br />
                <span style={{ color: "#FF4500" }}>Cultural Fest</span>
              </h2>

              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-4 opacity-90"
                style={{ color: "#FDF6E3" }}
              >
                Step into a world where ancient traditions meet modern
                celebrations. Three electrifying days of music, dance, and unforgettable experiences.
              </p>

              <p
                className="hidden sm:block text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 opacity-70"
                style={{ color: "#FDF6E3" }}
              >
                From soul-stirring classical performances to heart-pounding DJ
                nights, from intense hackathons to creative showcases —
                there&apos;s something for everyone at the biggest fest of the
                year.
              </p>

              {/* Highlight Cards - 2 on mobile, 4 on desktop */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {highlights.slice(0, 2).map((item, i) => (
                  <div
                    key={i}
                    className="sm:hidden highlight-card p-3 rounded-lg transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(176,63,35,0.4), rgba(45,24,16,0.6))",
                      border: "1px solid rgba(255,107,0,0.4)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                    }}
                  >
                    <span className="text-2xl mb-1 block">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-[#FFD700] text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#FDF6E3] opacity-70">
                      {item.desc}
                    </p>
                  </div>
                ))}
                {/* All 4 cards on sm+ */}
                {highlights.map((item, i) => (
                  <div
                    key={`desktop-${i}`}
                    className="hidden sm:block highlight-card p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(176,63,35,0.4), rgba(45,24,16,0.6))",
                      border: "1px solid rgba(255,107,0,0.4)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <span className="text-xl sm:text-2xl mb-1 block">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-[#FFD700] text-xs sm:text-sm mb-0.5 sm:mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#FDF6E3] opacity-70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Hidden on mobile */}
              <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <button
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #FF4500, #B03F23)",
                    color: "#FDF6E3",
                    boxShadow: "0 4px 20px rgba(255,69,0,0.5)",
                  }}
                >
                  Register Now
                </button>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    color: "#FFD700",
                    border: "2px solid #FFD700",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #B03F23, #FF4500, #B03F23, transparent)",
        }}
      />

      {/* FEST VIBES - Colorful sparkles and confetti */}
      <FestSparkles />

      {/* Animated fest banners on sides */}
      <div className="absolute top-[15%] left-[2%] z-30 hidden lg:block">
        <div
          className="px-3 py-2 rounded-lg transform -rotate-12"
          style={{
            background: "linear-gradient(135deg, #FF1493, #FF6B00)",
            boxShadow: "0 4px 20px rgba(255,20,147,0.5)",
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          <span className="text-white font-bold text-sm">🎉 3 DAYS</span>
        </div>
      </div>

      <div className="absolute top-[25%] right-[3%] z-30 hidden lg:block">
        <div
          className="px-3 py-2 rounded-lg transform rotate-12"
          style={{
            background: "linear-gradient(135deg, #00CED1, #4169E1)",
            boxShadow: "0 4px 20px rgba(0,206,209,0.5)",
            animation: "bounce 2.5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          <span className="text-white font-bold text-sm">🎵 LIVE MUSIC</span>
        </div>
      </div>

      <div className="absolute bottom-[30%] left-[3%] z-30 hidden lg:block">
        <div
          className="px-3 py-2 rounded-lg transform rotate-6"
          style={{
            background: "linear-gradient(135deg, #FFD700, #FF8C00)",
            boxShadow: "0 4px 20px rgba(255,215,0,0.5)",
            animation: "bounce 2.2s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <span className="text-[#5C0A1F] font-bold text-sm">
            🏆 ₹10L+ PRIZES
          </span>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes sparkleFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotate, 0deg));
          }
        }
      `}</style>
    </section>
  );
}
