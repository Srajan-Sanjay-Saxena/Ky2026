"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Custom Road Component
const Road = () => (
  <div className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[140px] md:h-[160px]" style={{ zIndex: 25 }}>
    {/* Footpath/Sidewalk */}
    <div 
      className="absolute top-0 left-0 right-0 h-[25px]"
      style={{ background: 'linear-gradient(180deg, #8B7355 0%, #A0826D 50%, #6B5344 100%)' }}
    />
    {/* Curb */}
    <div 
      className="absolute top-[25px] left-0 right-0 h-[8px]"
      style={{ background: 'linear-gradient(180deg, #D4D4D4 0%, #9E9E9E 100%)' }}
    />
    {/* Main Road */}
    <div 
      className="absolute top-[33px] left-0 right-0 bottom-0"
      style={{ background: 'linear-gradient(180deg, #2C2C2C 0%, #1A1A1A 30%, #252525 70%, #1F1F1F 100%)' }}
    >
      {/* Road texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      {/* Center line - dashed yellow */}
      <div className="absolute top-1/2 left-0 right-0 h-[4px] -translate-y-1/2" style={{
        background: 'repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 40px, transparent 40px, transparent 60px)',
      }} />
      {/* Side white lines */}
      <div className="absolute top-[10px] left-[5%] right-[5%] h-[3px]" style={{ background: '#FFFFFF', opacity: 0.7 }} />
      <div className="absolute bottom-[10px] left-[5%] right-[5%] h-[3px]" style={{ background: '#FFFFFF', opacity: 0.7 }} />
    </div>
  </div>
);

// Lamp Post SVG - Made bigger
const LampPost = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 300" className={className} fill="none">
    <defs>
      <linearGradient id="lampMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5A5A5A" />
        <stop offset="50%" stopColor="#3D3D3D" />
        <stop offset="100%" stopColor="#2A2A2A" />
      </linearGradient>
      <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
        <stop offset="40%" stopColor="#FFA500" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Lamp glow - bigger */}
    <ellipse cx="40" cy="35" rx="40" ry="35" fill="url(#lampGlow)">
      <animate attributeName="rx" values="40;50;40" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
    </ellipse>
    {/* Lamp head */}
    <path d="M25 20 L55 20 L62 50 L18 50 Z" fill="url(#lampMetal)" />
    <rect x="28" y="25" width="24" height="20" fill="#FFD700" opacity="0.9" />
    <path d="M18 50 L25 58 L55 58 L62 50 Z" fill="url(#lampMetal)" />
    {/* Pole */}
    <rect x="35" y="58" width="10" height="220" fill="url(#lampMetal)" />
    {/* Decorative elements on pole */}
    <rect x="32" y="80" width="16" height="6" fill="url(#lampMetal)" />
    <rect x="32" y="150" width="16" height="6" fill="url(#lampMetal)" />
    {/* Base */}
    <ellipse cx="40" cy="280" rx="25" ry="8" fill="url(#lampMetal)" />
    <rect x="25" y="270" width="30" height="15" fill="url(#lampMetal)" />
  </svg>
);

export default function KashiVibesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);
  const rickshawRef = useRef<HTMLDivElement>(null);
  const tablaRef = useRef<HTMLDivElement>(null);
  const paanRef = useRef<HTMLDivElement>(null);
  const lassiRef = useRef<HTMLDivElement>(null);
  const malaiyoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // BHU Gate rising from bottom
      gsap.fromTo(
        gateRef.current,
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );

      // Rickshaw continuous movement - using translateX for smooth animation
      const rickshawAnim = gsap.to(rickshawRef.current, {
        x: '120vw',
        duration: 14,
        ease: 'linear',
        repeat: -1,
        onRepeat: () => {
          gsap.set(rickshawRef.current, { x: 0 });
        },
      });

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
        background: "linear-gradient(180deg, #6B0F1A 0%, #8B1538 30%, #7A1430 60%, #5C0A1F 100%)",
        borderRadius: "24px 24px 0 0",
        boxShadow: "0 -20px 60px rgba(0,0,0,0.8)",
      }}
    >
      {/* Banarasi Saree Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(75,75)'%3E%3Cpath d='M75 0 Q120 20 130 75 Q125 130 75 150 Q25 130 20 75 Q30 20 75 0' fill='none' stroke='%23FFD700' stroke-width='2'/%3E%3Cpath d='M75 20 Q100 35 105 75 Q100 115 75 125 Q50 115 45 75 Q50 35 75 20' fill='none' stroke='%23FFD700' stroke-width='1.5'/%3E%3Cpath d='M75 40 Q90 50 92 75 Q90 100 75 105 Q60 100 58 75 Q60 50 75 40' fill='none' stroke='%23FFD700' stroke-width='1'/%3E%3Ccircle cx='75' cy='75' r='10' fill='none' stroke='%23FFD700' stroke-width='1'/%3E%3Ccircle cx='75' cy='75' r='4' fill='%23FFD700' fill-opacity='0.5'/%3E%3C/g%3E%3Ccircle cx='30' cy='30' r='15' fill='none' stroke='%23FFD700' stroke-width='1'/%3E%3Ccircle cx='270' cy='30' r='15' fill='none' stroke='%23FFD700' stroke-width='1'/%3E%3Ccircle cx='30' cy='270' r='15' fill='none' stroke='%23FFD700' stroke-width='1'/%3E%3Ccircle cx='270' cy='270' r='15' fill='none' stroke='%23FFD700' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Golden border top */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 sm:h-5 z-50"
        style={{
          background: "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 10px, #B8860B 10px, #B8860B 12px, #FFD700 12px, #FFD700 22px, #5C0A1F 22px, #5C0A1F 25px)",
          boxShadow: "0 2px 10px rgba(255,215,0,0.3)",
        }}
      />

      {/* TABLA & SITAR - Top Right - NO white bg, 4x bigger, moved left */}
      <div
        ref={tablaRef}
        className="absolute top-[2%] right-[5%] sm:right-[8%] md:right-[10%] z-20"
      >
        <Image
          src="/tabla_sitar_nobg.png"
          alt="Tabla & Sitar"
          width={1600}
          height={1600}
          className="w-80 h-80 sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* PAAN - Left Side - moved right, 3x bigger */}
      <div
        ref={paanRef}
        className="absolute top-[3%] left-[3%] sm:left-[5%] z-20"
      >
        <Image
          src="/paan_nobg.png"
          alt="Banarasi Paan"
          width={1200}
          height={1200}
          className="w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* LASSI - Right Side - MUCH BIGGER, lower position, NO LABEL */}
      <div
        ref={lassiRef}
        className="absolute top-[35%] right-[0%] sm:right-[1%] z-20"
      >
        <Image
          src="/lassi_nobg.png"
          alt="Banarasi Lassi"
          width={1000}
          height={1300}
          className="w-56 h-72 sm:w-72 sm:h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* MALAIYO - Left side - moved up, 2x bigger */}
      <div
        ref={malaiyoRef}
        className="absolute top-[28%] left-[0%] sm:left-[1%] z-20"
      >
        <Image
          src="/malaiyo_nobg.png"
          alt="Banarasi Malaiyo"
          width={800}
          height={800}
          className="w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain"
          style={{ filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.6))" }}
        />
      </div>



      {/* Content - Improved text styling */}
      <div className="absolute top-6 left-0 right-0 z-40 container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
            <span className="text-[#FFD700] text-2xl animate-pulse">✦</span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          </div>

          {/* Main Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide mb-1"
            style={{
              color: "#FFF",
              textShadow: "0 0 10px rgba(255,215,0,0.5), 2px 2px 0px #8B1538, 4px 4px 0px #5C0A1F",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.05em",
            }}
          >
            The Spirit of
          </h2>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider mb-3"
            style={{
              background: "linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(255,215,0,0.6))",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.1em",
            }}
          >
            KASHI
          </h2>

          {/* Subtitle with decorative border */}
          <div 
            className="inline-block px-6 py-2 mb-4 rounded-full"
            style={{
              background: "rgba(139,21,56,0.6)",
              border: "1px solid rgba(255,215,0,0.4)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span 
              className="text-sm sm:text-base md:text-lg tracking-[0.2em] font-semibold"
              style={{ 
                color: "#FFD700",
                textShadow: "0 0 10px rgba(255,215,0,0.5)",
              }}
            >
              काशी यात्रा २०२६
            </span>
          </div>

          {/* Tagline */}
          <p 
            className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 max-w-md mx-auto font-medium"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            Where ancient traditions dance with modern celebrations
          </p>

          {/* Event badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            <span 
              className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold cursor-pointer hover:scale-110 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                color: "#5C0A1F",
                boxShadow: "0 4px 20px rgba(255,215,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              🎭 50+ Events
            </span>
            <span 
              className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold cursor-pointer hover:scale-110 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
                color: "#FFF",
                boxShadow: "0 4px 20px rgba(255,107,107,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              🎵 Pro Nights
            </span>
            <span 
              className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold cursor-pointer hover:scale-110 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #4ECDC4, #44A08D)",
                color: "#FFF",
                boxShadow: "0 4px 20px rgba(78,205,196,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              🏆 ₹10L+ Prizes
            </span>
          </div>
        </div>
      </div>

      {/* BHU Gate - positioned lower with bottom cut off */}
      <div
        ref={gateRef}
        className="absolute left-1/2 -translate-x-1/2 w-[75%] sm:w-[65%] md:w-[55%] lg:w-[48%]"
        style={{ bottom: '-50px', zIndex: 10 }}
      >
        <Image
          src="/bhuGate.png"
          alt="IIT BHU Gate"
          width={1400}
          height={900}
          className="w-full h-auto"
          style={{
            filter: "drop-shadow(0 0 40px rgba(255,215,0,0.3)) drop-shadow(0 15px 30px rgba(0,0,0,0.5))",
          }}
          priority
        />
      </div>

      {/* Custom Road */}
      <Road />

      {/* Lamp Post - ON the road, left side */}
      <div 
        className="absolute left-[3%] sm:left-[5%] w-16 h-64 sm:w-20 sm:h-80 md:w-24 md:h-96 lg:w-28 lg:h-[420px]"
        style={{ bottom: '100px', zIndex: 28 }}
      >
        <LampPost className="w-full h-full" />
      </div>

      {/* RICKSHAW - moving on road */}
      <div
        ref={rickshawRef}
        className="absolute"
        style={{ 
          left: '-600px', 
          bottom: '5px',
          zIndex: 40,
          width: '600px',
          height: '400px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rickshaw_nobg.png"
          alt="Auto Rickshaw"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(5px 5px 20px rgba(0,0,0,0.7))',
            transform: 'scaleX(-1)',
          }}
        />
      </div>

      {/* Bottom golden border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 z-[60]"
        style={{
          background: "linear-gradient(90deg, #FFD700, #B8860B, #FFD700, #B8860B, #FFD700)",
        }}
      />
    </section>
  );
}
