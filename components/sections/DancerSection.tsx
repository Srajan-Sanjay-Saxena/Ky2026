"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AartiFlames } from "../svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DancerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shivaRef = useRef<HTMLDivElement>(null);
  const aartiRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shiva divine entrance
      gsap.fromTo(
        shivaRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Aarti entrance from left
      gsap.fromTo(
        aartiRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Text fade in
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-12 sm:py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #1a1a40 30%, #2D1810 60%, #1A1A2E 100%)",
      }}
    >
      {/* Sacred geometry background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='80' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='20' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Divine light rays from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] pointer-events-none"
        style={{
          background: "conic-gradient(from 90deg at 50% 0%, transparent 0deg, rgba(255,215,0,0.03) 10deg, transparent 20deg, rgba(255,215,0,0.02) 30deg, transparent 40deg, rgba(255,215,0,0.03) 50deg, transparent 60deg)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]">
          {/* Left side - Aarti and text */}
          <div className="order-2 md:order-1">
            <div ref={aartiRef} className="w-32 sm:w-40 md:w-56 lg:w-64 mx-auto md:mx-0 mb-4 sm:mb-6 md:mb-8">
              <AartiFlames className="w-full h-auto" />
            </div>
            
            <div ref={textRef} className="text-center md:text-left">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6"
                style={{
                  color: "#FFD700",
                  textShadow: "0 0 20px rgba(255,215,0,0.3)",
                }}
              >
                The Spirit of Kashi
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FDF6E3] opacity-90 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
                Where ancient traditions dance with modern celebrations. 
                Experience the mystical energy of Varanasi through art, 
                music, and cultural extravaganza.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8B1538] text-[#FFD700] rounded-full text-xs sm:text-sm">
                  🎭 50+ Events
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8B1538] text-[#FFD700] rounded-full text-xs sm:text-sm">
                  🎵 Pro Nights
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8B1538] text-[#FFD700] rounded-full text-xs sm:text-sm">
                  🏆 ₹10L+ Prizes
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Lord Shiva */}
          <div className="order-1 md:order-2 flex justify-center">
            <div
              ref={shivaRef}
              className="w-72 sm:w-80 md:w-[400px] lg:w-[480px] xl:w-[550px] relative"
            >
              {/* Massive outer cosmic aura */}
              <div
                className="absolute inset-[-80%] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,215,0,0.06) 0%, rgba(255,140,0,0.03) 30%, rgba(138,43,226,0.02) 50%, transparent 70%)",
                  animation: "divineAuraPulse 5s ease-in-out infinite",
                }}
              />

              {/* Outermost divine aura - pulsing */}
              <div
                className="absolute inset-[-50%] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,140,0,0.05) 30%, transparent 70%)",
                  animation: "divineAuraPulse 4s ease-in-out infinite",
                }}
              />
              
              {/* Secondary aura ring */}
              <div
                className="absolute inset-[-30%] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,180,100,0.12) 0%, rgba(255,100,50,0.06) 40%, transparent 70%)",
                  animation: "divineAuraPulse 3s ease-in-out infinite reverse",
                }}
              />

              {/* Inner glow */}
              <div
                className="absolute inset-[-15%] rounded-full pointer-events-none blur-xl"
                style={{
                  background: "radial-gradient(circle, rgba(255,200,150,0.25) 0%, transparent 60%)",
                  animation: "innerGlow 2.5s ease-in-out infinite",
                }}
              />

              {/* Third eye glow effect */}
              <div
                className="absolute top-[15%] left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,100,0,0.8) 0%, rgba(255,50,0,0.4) 30%, transparent 70%)",
                  animation: "thirdEyePulse 2s ease-in-out infinite",
                  boxShadow: "0 0 30px rgba(255,100,0,0.6), 0 0 60px rgba(255,50,0,0.3)",
                }}
              />

              {/* Rotating sacred rings */}
              <div
                className="absolute inset-[-20%] rounded-full pointer-events-none"
                style={{
                  border: "2px solid rgba(255,215,0,0.15)",
                  animation: "rotateRing 20s linear infinite",
                }}
              />
              <div
                className="absolute inset-[-30%] rounded-full pointer-events-none"
                style={{
                  border: "1px dashed rgba(255,215,0,0.1)",
                  animation: "rotateRing 30s linear infinite reverse",
                }}
              />
              <div
                className="absolute inset-[-40%] rounded-full pointer-events-none"
                style={{
                  border: "1px dotted rgba(255,215,0,0.08)",
                  animation: "rotateRing 40s linear infinite",
                }}
              />

              {/* Divine particles */}
              {[...Array(30)].map((_, i) => (
                <div
                  key={`divine-particle-${i}`}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full pointer-events-none"
                  style={{
                    left: `${5 + (i % 6) * 18}%`,
                    top: `${-10 + Math.floor(i / 6) * 25}%`,
                    background: i % 3 === 0 
                      ? "radial-gradient(circle, #FFD700 0%, transparent 70%)" 
                      : i % 3 === 1 
                        ? "radial-gradient(circle, #FFA500 0%, transparent 70%)"
                        : "radial-gradient(circle, #FF6B00 0%, transparent 70%)",
                    animation: `floatParticle ${2 + (i % 4)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.12}s`,
                    boxShadow: "0 0 10px rgba(255,215,0,0.7)",
                  }}
                />
              ))}

              {/* Rising energy particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`energy-${i}`}
                  className="absolute w-0.5 h-4 sm:h-6 rounded-full pointer-events-none opacity-70"
                  style={{
                    left: `${10 + i * 7}%`,
                    bottom: "5%",
                    background: "linear-gradient(to top, transparent, rgba(255,215,0,0.9), transparent)",
                    animation: `riseEnergy ${2 + (i % 3) * 0.5}s ease-out infinite`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                />
              ))}

              {/* Trishul energy lines */}
              <div
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-1 h-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, transparent, rgba(255,215,0,0.6), rgba(255,215,0,0.8), transparent)",
                  animation: "trishulGlow 2s ease-in-out infinite",
                }}
              />

              {/* Lord Shiva Image */}
              <Image
                src="/lord_shiva.png"
                alt="Lord Shiva - The Divine"
                width={800}
                height={1000}
                className="w-full h-auto relative z-10"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255,215,0,0.4)) drop-shadow(0 0 60px rgba(255,140,0,0.2))",
                  animation: "divineShimmer 4s ease-in-out infinite",
                }}
                priority
              />

              {/* Bottom glow reflection */}
              <div
                className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[30%] pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,180,100,0.4) 0%, transparent 70%)",
                  filter: "blur(15px)",
                  animation: "bottomGlow 3s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Om symbols floating in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <div className="absolute top-[10%] left-[5%] text-6xl sm:text-7xl md:text-8xl text-[#FFD700]" style={{ animation: "floatOm 8s ease-in-out infinite" }}>ॐ</div>
        <div className="absolute top-[30%] right-[8%] text-5xl sm:text-6xl md:text-7xl text-[#FFD700]" style={{ animation: "floatOm 10s ease-in-out infinite", animationDelay: "2s" }}>ॐ</div>
        <div className="absolute bottom-[25%] left-[10%] text-4xl sm:text-5xl md:text-6xl text-[#FFD700]" style={{ animation: "floatOm 9s ease-in-out infinite", animationDelay: "4s" }}>ॐ</div>
        <div className="absolute top-[60%] right-[15%] text-5xl sm:text-6xl text-[#FFD700]" style={{ animation: "floatOm 7s ease-in-out infinite", animationDelay: "1s" }}>ॐ</div>
      </div>

      {/* Trishul silhouettes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <svg className="absolute top-[5%] left-[2%] w-16 sm:w-20 md:w-24 h-auto" viewBox="0 0 50 100" fill="#FFD700" style={{ animation: "floatOm 12s ease-in-out infinite" }}>
          <path d="M25 100 L25 30 M25 30 L15 10 L25 20 L35 10 L25 30 M20 25 L30 25" stroke="#FFD700" strokeWidth="2" fill="none"/>
        </svg>
        <svg className="absolute bottom-[15%] right-[5%] w-14 sm:w-18 md:w-20 h-auto" viewBox="0 0 50 100" fill="#FFD700" style={{ animation: "floatOm 11s ease-in-out infinite", animationDelay: "3s" }}>
          <path d="M25 100 L25 30 M25 30 L15 10 L25 20 L35 10 L25 30 M20 25 L30 25" stroke="#FFD700" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Damru symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <svg className="absolute top-[40%] left-[3%] w-12 sm:w-14 md:w-16 h-auto" viewBox="0 0 40 50" fill="none" style={{ animation: "floatOm 9s ease-in-out infinite", animationDelay: "2s" }}>
          <ellipse cx="20" cy="10" rx="15" ry="8" stroke="#FFD700" strokeWidth="2"/>
          <ellipse cx="20" cy="40" rx="15" ry="8" stroke="#FFD700" strokeWidth="2"/>
          <line x1="10" y1="15" x2="10" y2="35" stroke="#FFD700" strokeWidth="2"/>
          <line x1="30" y1="15" x2="30" y2="35" stroke="#FFD700" strokeWidth="2"/>
        </svg>
      </div>

      {/* Ganga waves at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(26,95,122,0.4) 0%, transparent 100%)",
        }}
      />
      <svg className="absolute bottom-0 left-0 w-full h-12 sm:h-16 opacity-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="#1A5F7A" d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z">
          <animate attributeName="d" values="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z;M0,50 C360,0 720,100 1080,50 C1260,25 1350,75 1440,50 L1440,100 L0,100 Z;M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z" dur="8s" repeatCount="indefinite"/>
        </path>
      </svg>

      {/* Decorative border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 md:h-2"
        style={{
          background: "linear-gradient(90deg, #8B1538, #FFD700, #8B1538)",
        }}
      />


    </section>
  );
}
