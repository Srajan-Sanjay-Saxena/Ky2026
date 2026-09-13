"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Road } from "./Road";
import { LampPost } from "./LampPost";
import { BanarasiVibesMobile } from "./mobile";
import { BanarasiVibesDesktop } from "./desktop";
import { IMAGES } from "@/config/images";

export function BanarasiVibesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);
  const rickshawRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          backgroundImage: `url('${IMAGES.vibes.background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile-only elements: Mandala, Diya with text */}
      <BanarasiVibesMobile />

      {/* Desktop-only elements: Food items (Tabla, Paan, Lassi, Malaiyo) */}
      <BanarasiVibesDesktop />

      {/* BHU Gate - both mobile and desktop */}
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #8B6914, #FFD700, #E8B820, #FFD700, #C8960C, #FFD700, #8B6914)" }} />
        <div className="absolute top-0 left-0 right-0" style={{ height: "1px", background: "rgba(255,255,255,0.3)" }} />
      </div>
    </section>
  );
}
