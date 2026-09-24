"use client";

import { memo } from "react";
import Image from "next/image";
import { OuterMandala } from "./OuterMandala";
import { InnerMandala } from "./InnerMandala";
import { KashiYatraText } from "./KashiYatraText";
import { MobileTagline } from "./MobileTagline";
import { IMAGES } from "@/lib/images";

/**
 * Mobile-only elements for BanarasiVibes section
 * Shows: Rangoli Background, Decorative elements (trishul, lotus, diyas, conch, dancer),
 *        Varanasi silhouette, Mandala, Diya with text, Tagline, Auto
 * Hidden on sm+ (>= 640px)
 */
export const BanarasiVibesMobile = memo(function BanarasiVibesMobile() {
  return (
    <>
      {/* Rangoli Background Pattern - behind everything */}
      <div className="sm:hidden absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <Image
          src={IMAGES.vibes.mobile.rangoliBg}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </div>

      {/* Varanasi Silhouette - Removed, BHU Gate is now visible */}

      {/* Ethereal Dancer - Removed, BHU Gate takes this space */}

      {/* Trishul - Top Left */}
      <div
        className="sm:hidden absolute pointer-events-none z-[10]"
        style={{
          top: "8%",
          left: "-5%",
          width: "90px",
          height: "140px",
          transform: "rotate(-15deg)",
        }}
      >
        <Image
          src={IMAGES.vibes.mobile.trishul}
          alt=""
          fill
          className="object-contain"
          style={{
            opacity: 0.7,
            filter: "drop-shadow(0 0 15px rgba(255,180,50,0.4))",
          }}
        />
      </div>

      {/* Conch Shell - Top Right */}
      <div
        className="sm:hidden absolute pointer-events-none z-[10]"
        style={{
          top: "5%",
          right: "-2%",
          width: "80px",
          height: "100px",
          transform: "rotate(15deg)",
        }}
      >
        <Image
          src={IMAGES.vibes.mobile.conchShell}
          alt=""
          fill
          className="object-contain"
          style={{
            opacity: 0.7,
            filter: "drop-shadow(0 0 15px rgba(255,180,50,0.4))",
          }}
        />
      </div>

      {/* Lotus Pairs - Left side middle */}
      <div
        className="sm:hidden absolute pointer-events-none z-[10]"
        style={{
          top: "42%",
          left: "-8%",
          width: "100px",
          height: "80px",
        }}
      >
        <Image
          src={IMAGES.vibes.mobile.lotusPairs}
          alt=""
          fill
          className="object-contain"
          style={{
            opacity: 0.6,
            filter: "drop-shadow(0 0 12px rgba(255,100,150,0.4))",
          }}
        />
      </div>

      {/* Diya Pairs - Right side middle */}
      <div
        className="sm:hidden absolute pointer-events-none z-[10]"
        style={{
          top: "45%",
          right: "-5%",
          width: "90px",
          height: "70px",
        }}
      >
        <Image
          src={IMAGES.vibes.mobile.diyaPairs}
          alt=""
          fill
          className="object-contain"
          style={{
            opacity: 0.75,
            filter: "drop-shadow(0 0 15px rgba(255,150,50,0.5))",
          }}
        />
      </div>

      {/* Ethereal Dancer - Left side, above the gate */}
      <div
        className="sm:hidden absolute pointer-events-none z-[8]"
        style={{
          top: "52%",
          left: "-15%",
          width: "160px",
          height: "200px",
        }}
      >
        <Image
          src={IMAGES.vibes.mobile.etherealDancer}
          alt=""
          fill
          className="object-contain"
          style={{
            opacity: 0.45,
            filter: "drop-shadow(0 0 20px rgba(255,180,50,0.3))",
          }}
        />
      </div>

      {/* Animated Mandala Rangoli */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:opacity-0 sm:pointer-events-none">
        <OuterMandala />
      </div>

      {/* Glowing Diya with Text */}
      <div className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center sm:opacity-0 sm:pointer-events-none">
        <InnerMandala />

        {/* Golden glow aura behind diya */}
        <div
          className="absolute w-28 h-28 rounded-full vibes-diya-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255,180,50,0.5) 0%, rgba(255,140,20,0.25) 45%, transparent 70%)",
            filter: "blur(12px)",
            top: "-10px",
          }}
        />

        <KashiYatraText />
      </div>

      {/* Tagline */}
      <MobileTagline />

      {/* Static Auto Rickshaw - Mobile only */}
      <div
        className="sm:hidden absolute w-[130px] h-[90px] pointer-events-none"
        style={{
          right: "5%",
          bottom: "30px",
          zIndex: 35,
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
            filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.5))",
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </>
  );
});
