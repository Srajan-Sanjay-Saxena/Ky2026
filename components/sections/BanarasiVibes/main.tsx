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

      {/* TABLA & SITAR - Top Right - NO white bg, 4x bigger, moved left */}
      <div
        ref={tablaRef}
        className="absolute top-[-2%] right-[2%] sm:right-[5%] md:right-[7%] z-20"
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

      {/* BHU Gate - positioned lower with bottom cut off */}
      <div
        ref={gateRef}
        className="absolute left-1/2 -translate-x-1/2 w-[75%] sm:w-[65%] md:w-[55%] lg:w-[48%] relative"
        style={{ bottom: "-150px", zIndex: 10 }}
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

      {/* Lamp Post - ON the road, left side */}
      <div
        className="absolute left-[3%] sm:left-[5%] w-16 h-64 sm:w-20 sm:h-80 md:w-24 md:h-96 lg:w-28 lg:h-[420px]"
        style={{ bottom: "100px", zIndex: 28 }}
      >
        <LampPost className="w-full h-full" />
      </div>

      {/* RICKSHAW - moving on road */}
      <div
        ref={rickshawRef}
        className="absolute"
        style={{
          left: "-600px",
          bottom: "5px",
          zIndex: 40,
          width: "600px",
          height: "400px",
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
