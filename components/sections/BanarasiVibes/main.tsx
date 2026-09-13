"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Road } from "./Road";
import { LampPost } from "./LampPost";



export function BanarasiVibesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);
  const rickshawRef = useRef<HTMLDivElement>(null);
  const tablaRef = useRef<HTMLDivElement>(null);
  const paanRef = useRef<HTMLDivElement>(null);
  const lassiRef = useRef<HTMLDivElement>(null);
  const malaiyoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on mobile (below sm breakpoint)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

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
      const rickshawAnim = gsap.to(rickshawRef.current, {
        x: "120vw",
        duration: 14,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(rickshawRef.current, { x: 0 });
        },
      });

      // Only animate food items on desktop (sm and above)
      if (!isMobile) {
        // Tabla gentle sway
        gsap.to(tablaRef.current, {
          y: -12,
          rotation: 2,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Paan sway
        gsap.to(paanRef.current, {
          y: -15,
          rotation: -3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5,
        });

        // Lassi sway
        gsap.to(lassiRef.current, {
          y: -10,
          rotation: 2,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });

        // Malaiyo sway
        gsap.to(malaiyoRef.current, {
          y: -8,
          rotation: -2,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }

      return () => {
        rickshawAnim.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
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
          backgroundImage: "url('/vibesBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Animated Mandala Rangoli - Mobile Only */}
      <div className="sm:hidden absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large outer mandala - slow rotation */}
        <div
          className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] opacity-[0.25] vibes-mandala-slow"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='1'%3E%3Ccircle cx='200' cy='200' r='195'/%3E%3Ccircle cx='200' cy='200' r='170'/%3E%3Ccircle cx='200' cy='200' r='145'/%3E%3Ccircle cx='200' cy='200' r='120'/%3E%3Ccircle cx='200' cy='200' r='95'/%3E%3Ccircle cx='200' cy='200' r='70'/%3E%3Ccircle cx='200' cy='200' r='45'/%3E%3Ccircle cx='200' cy='200' r='20'/%3E%3C!-- 8-point star petals --%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(45 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(90 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(135 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(180 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(225 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(270 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(315 200 200)'/%3E%3C!-- Inner decorative arcs --%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none'/%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none' transform='rotate(90 200 200)'/%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none' transform='rotate(180 200 200)'/%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none' transform='rotate(270 200 200)'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        {/* Inner mandala - opposite rotation */}
        <div
          className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] opacity-[0.30] vibes-mandala-reverse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23B8860B' stroke-width='1.5'%3E%3Ccircle cx='100' cy='100' r='95'/%3E%3Ccircle cx='100' cy='100' r='75'/%3E%3Ccircle cx='100' cy='100' r='55'/%3E%3Ccircle cx='100' cy='100' r='35'/%3E%3Ccircle cx='100' cy='100' r='15'/%3E%3C!-- 12-point lotus petals --%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(30 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(60 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(90 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(120 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(150 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(180 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(210 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(240 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(270 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(300 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='8' ry='18' fill='%23B8860B' opacity='0.25' transform='rotate(330 100 100)'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Glowing Diya with Text - Mobile Only */}
      <div className="sm:hidden absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
        {/* Golden glow aura behind diya */}
        <div
          className="absolute w-28 h-28 rounded-full vibes-diya-glow"
          style={{
            background: "radial-gradient(circle, rgba(255,180,50,0.5) 0%, rgba(255,140,20,0.25) 45%, transparent 70%)",
            filter: "blur(12px)",
            top: "-10px",
          }}
        />
        
        {/* Realistic Diya SVG */}
        <div className="relative w-20 h-24">
          <svg viewBox="0 0 80 96" className="w-full h-full">
            <defs>
              {/* Diya bowl gradient - terracotta/clay look */}
              <linearGradient id="diyaClay" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CD853F" />
                <stop offset="30%" stopColor="#A0522D" />
                <stop offset="70%" stopColor="#8B4513" />
                <stop offset="100%" stopColor="#654321" />
              </linearGradient>
              {/* Inner shadow for depth */}
              <radialGradient id="diyaInner" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#654321" />
                <stop offset="100%" stopColor="#3d2610" />
              </radialGradient>
              {/* Oil gradient */}
              <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DAA520" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8B6914" stopOpacity="0.9" />
              </linearGradient>
              {/* Flame gradients */}
              <linearGradient id="flameOut" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#FF4500" />
                <stop offset="40%" stopColor="#FF8C00" />
                <stop offset="70%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFFACD" />
              </linearGradient>
              <linearGradient id="flameMid" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#FF6B00" />
                <stop offset="60%" stopColor="#FFBB00" />
                <stop offset="100%" stopColor="#FFFEF5" />
              </linearGradient>
              {/* Glow filter */}
              <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Diya base/foot */}
            <ellipse cx="40" cy="88" rx="18" ry="5" fill="#8B4513" />
            <ellipse cx="40" cy="86" rx="14" ry="4" fill="#A0522D" />
            
            {/* Diya bowl - traditional shape */}
            <path 
              d="M15 72 Q12 65 18 58 Q22 54 28 52 L52 52 Q58 54 62 58 Q68 65 65 72 Q62 78 40 80 Q18 78 15 72 Z" 
              fill="url(#diyaClay)"
            />
            {/* Bowl rim highlight */}
            <path 
              d="M18 58 Q22 54 28 52 L52 52 Q58 54 62 58" 
              fill="none" 
              stroke="#D2691E" 
              strokeWidth="1.5"
              opacity="0.6"
            />
            {/* Inner bowl shadow */}
            <ellipse cx="40" cy="60" rx="18" ry="8" fill="url(#diyaInner)" />
            {/* Oil surface */}
            <ellipse cx="40" cy="58" rx="14" ry="5" fill="url(#oilGrad)" />
            
            {/* Wick */}
            <path d="M38 58 L38 44 Q40 42 42 44 L42 58" fill="#2d1608" />
            
            {/* Flame group with animation */}
            <g className="vibes-flame" filter="url(#flameGlow)">
              {/* Outer flame */}
              <path 
                d="M40 42 Q32 32 35 20 Q38 10 40 8 Q42 10 45 20 Q48 32 40 42 Z" 
                fill="url(#flameOut)"
                opacity="0.9"
              />
              {/* Middle flame */}
              <path 
                d="M40 42 Q35 34 37 24 Q39 16 40 14 Q41 16 43 24 Q45 34 40 42 Z" 
                fill="url(#flameMid)"
              />
              {/* Inner bright core */}
              <path 
                d="M40 40 Q38 35 39 28 Q40 22 40 20 Q40 22 41 28 Q42 35 40 40 Z" 
                fill="#FFFEF8"
              />
            </g>
          </svg>
        </div>

        {/* Text below diya - using proper Hindi text rendering */}
        <div className="mt-4 flex flex-col items-center">
          <span
            className="text-[24px] font-black tracking-wide"
            style={{
              fontFamily: "var(--font-ethereal), 'Noto Sans Devanagari', serif",
              color: "#FFD700",
              textShadow: "0 0 20px rgba(255,200,50,0.8), 0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            काशी यात्रा
          </span>
          <span
            className="text-[16px] font-bold tracking-[0.3em] mt-1"
            style={{
              fontFamily: "var(--font-ethereal), 'Noto Sans Devanagari', serif",
              color: "#DAA520",
              textShadow: "0 0 15px rgba(218,165,32,0.7), 0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            २०२६
          </span>
        </div>
      </div>

      {/* TABLA & SITAR - Top Right - hidden on mobile */}
      <div
        ref={tablaRef}
        className="hidden sm:block absolute top-[-2%] right-[5%] md:right-[7%] z-20"
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

      {/* PAAN - Left Side - hidden on mobile */}
      <div
        ref={paanRef}
        className="hidden sm:block absolute top-[3%] left-[5%] z-20"
      >
        <Image
          src="/paan_nobg.png"
          alt="Banarasi Paan"
          width={1200}
          height={1200}
          className="w-28 h-28 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* LASSI - Right Side - hidden on mobile */}
      <div
        ref={lassiRef}
        className="hidden sm:block absolute top-[35%] right-[1%] z-20"
      >
        <Image
          src="/lassi_nobg.png"
          alt="Banarasi Lassi"
          width={1000}
          height={1300}
          className="w-20 h-28 sm:w-72 sm:h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* MALAIYO - Left side - hidden on mobile */}
      <div
        ref={malaiyoRef}
        className="hidden sm:block absolute top-[28%] left-[1%] z-20"
      >
        <Image
          src="/malaiyo_nobg.png"
          alt="Banarasi Malaiyo"
          width={800}
          height={800}
          className="w-20 h-20 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* BHU Gate - mobile: above road, desktop: extends below viewport */}
      <div
        ref={gateRef}
        className="absolute left-1/2 -translate-x-1/2 w-[85%] sm:w-[65%] md:w-[55%] lg:w-[48%] bhu-gate-position"
        style={{ zIndex: 10 }}
      >
        {/* Mahamana statue - positioned in center archway */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[58%] sm:w-[30%] md:w-[53%] z-[5]"
          style={{
            bottom: "8%",
          }}
        >
          <Image
            src="/mahamana.png"
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
          src="/bhuGate.png"
          alt="IIT BHU Gate"
          width={1400}
          height={900}
          className="w-full h-auto relative z-10"
          style={{
            filter:
              "drop-shadow(0 0 40px rgba(255,215,0,0.3)) drop-shadow(0 15px 30px rgba(0,0,0,0.5))",
          }}
          priority
        />
      </div>

      {/* Custom Road */}
      <Road />

      {/* Lamp Post - ON the road, smaller on mobile */}
      <div
        className="absolute left-[2%] sm:left-[5%] w-10 h-32 sm:w-20 sm:h-80 md:w-24 md:h-96 lg:w-28 lg:h-[420px]"
        style={{ bottom: "70px", zIndex: 28 }}
      >
        <LampPost className="w-full h-full" />
      </div>

      {/* RICKSHAW - moving on road, smaller on mobile, starts closer */}
      <div
        ref={rickshawRef}
        className="absolute w-[180px] h-[120px] sm:w-[600px] sm:h-[400px]"
        style={{
          left: "-200px",
          bottom: "5px",
          zIndex: 40,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rickshaw_nobg.png"
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #8B6914, #FFD700, #E8B820, #FFD700, #C8960C, #FFD700, #8B6914)" }} />
        <div className="absolute top-0 left-0 right-0" style={{ height: "1px", background: "rgba(255,255,255,0.3)" }} />
      </div>
    </section>
  );
}
