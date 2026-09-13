"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "./passes.config";
import { ANIMATION } from "./passes.config";
import {
  CARD_SHADOW,
  POPULAR_BADGE_BG,
  BUTTON_BASE,
  PRICE_GRADIENT,
  CHECK_ICON_HIGHLIGHT,
  PASS_IMAGE_SHADOW,
} from "./passes.styles";

interface PassCardProps {
  pass: PassConfig;
  index: number;
  onSelect?: (passId: string) => void;
}

/**
 * Royal corner ornament - floral/paisley inspired
 */
function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotations = { tl: 0, tr: 90, bl: -90, br: 180 };
  const positions = {
    tl: "top-2 left-2",
    tr: "top-2 right-2",
    bl: "bottom-2 left-2",
    br: "bottom-2 right-2",
  };

  return (
    <div
      className={`absolute ${positions[position]} w-12 h-12 pointer-events-none`}
      style={{ transform: `rotate(${rotations[position]}deg)` }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        {/* Main corner flourish */}
        <path
          d="M5 5 Q5 25 25 25 Q15 15 5 5"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          opacity="0.7"
        />
        {/* Outer curve */}
        <path
          d="M2 2 Q2 30 30 30"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Inner decorative curl */}
        <path
          d="M8 8 C12 8 15 12 15 18 C15 12 18 8 24 8"
          fill="none"
          stroke="#D4A853"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Small leaf/paisley */}
        <ellipse
          cx="12"
          cy="12"
          rx="4"
          ry="6"
          fill="none"
          stroke="#FFD700"
          strokeWidth="0.8"
          opacity="0.5"
          transform="rotate(-45 12 12)"
        />
        {/* Center dot */}
        <circle cx="8" cy="8" r="2" fill="#D4A853" opacity="0.7" />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#D4A853" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Card background pattern - subtle damask/royal textile
 */
function CardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[7px]">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(35, 18, 45, 0.98) 0%,
              rgba(28, 14, 38, 0.99) 30%,
              rgba(22, 10, 32, 1) 60%,
              rgba(18, 8, 28, 1) 100%
            )
          `,
        }}
      />
      
      {/* Damask pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a853' fill-rule='evenodd'%3E%3Cpath d='M20 20c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zm0-2c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z'/%3E%3Cpath d='M20 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vertical gradient lines - like fabric texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(212, 168, 83, 0.5) 2px,
            rgba(212, 168, 83, 0.5) 3px
          )`,
          backgroundSize: "20px 100%",
        }}
      />

      {/* Center vignette glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, rgba(212, 168, 83, 0.08) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}

/**
 * Royal ornate frame
 */
function RoyalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      {/* Outer gold frame */}
      <div
        className="absolute inset-0 rounded-[14px]"
        style={{
          background: `linear-gradient(180deg, 
            #4a3510 0%, #8B6914 10%, #D4A853 25%, 
            #FFD700 50%, #D4A853 75%, #8B6914 90%, #4a3510 100%
          )`,
          padding: "3px",
        }}
      >
        {/* Dark inset */}
        <div
          className="w-full h-full rounded-[11px]"
          style={{
            background: `linear-gradient(180deg, 
              #1a0d10 0%, #2a1a18 50%, #1a0d10 100%
            )`,
            padding: "2px",
          }}
        >
          {/* Inner gold line */}
          <div
            className="w-full h-full rounded-[9px]"
            style={{
              background: `linear-gradient(180deg, 
                #8B6914 0%, #D4A853 30%, #FFD700 50%, #D4A853 70%, #8B6914 100%
              )`,
              padding: "2px",
            }}
          >
            {/* Content area */}
            <div className="relative w-full h-full rounded-[7px] overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const PassCard = memo(function PassCard({
  pass,
  index,
  onSelect,
}: PassCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFlip = () => setIsFlipped((prev) => !prev);
  const floatDelay = index * 0.4;

  return (
    <motion.div
      variants={ANIMATION.card}
      className={`relative ${pass.popular ? "md:-mt-6 lg:-mt-8" : ""}`}
      style={{
        width: "100%",
        maxWidth: "300px",
        height: "500px",
        perspective: "1200px",
      }}
    >
      {/* Popular badge */}
      {pass.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          style={{
            background: POPULAR_BADGE_BG,
            color: "#1A0A1A",
            boxShadow: "0 4px 20px rgba(212, 168, 83, 0.6)",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Flip container */}
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        onClick={handleFlip}
        whileHover={{ scale: 1.02 }}
      >
        {/* ===== FRONT SIDE ===== */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <RoyalFrame>
            <div
              className="relative w-full h-full flex flex-col"
              style={{ boxShadow: CARD_SHADOW }}
            >
              {/* Textured background */}
              <CardBackground />

              {/* Corner ornaments */}
              <CornerOrnament position="tl" />
              <CornerOrnament position="tr" />
              <CornerOrnament position="bl" />
              <CornerOrnament position="br" />

              {/* Accent glow based on pass type */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 30%, ${pass.glowColor} 0%, transparent 50%)`,
                }}
              />

              {/* Pass image area */}
              <div className="relative flex-1 flex items-center justify-center p-2 z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    ...ANIMATION.float,
                    delay: floatDelay,
                  }}
                >
                  <Image
                    src={pass.image}
                    alt={pass.name}
                    width={250}
                    height={340}
                    className="object-contain max-h-[320px] w-auto"
                    style={{ filter: PASS_IMAGE_SHADOW }}
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              {/* Bottom info */}
              <div className="relative z-10 px-4 pb-4 text-center">
                <div className="mb-3">
                  <span className="text-sm text-gray-400">Price: </span>
                  <span className="text-2xl font-bold" style={PRICE_GRADIENT}>
                    ₹{pass.price.toLocaleString("en-IN")}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect?.(pass.id);
                  }}
                  className="w-full py-2.5 text-sm font-bold uppercase tracking-wide"
                  style={BUTTON_BASE}
                >
                  Get {pass.name.split(" ")[0]} Pass
                </motion.button>
              </div>
            </div>
          </RoyalFrame>
        </div>

        {/* ===== BACK SIDE ===== */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <RoyalFrame>
            <div
              className="relative w-full h-full flex flex-col"
              style={{ boxShadow: CARD_SHADOW }}
            >
              {/* Textured background */}
              <CardBackground />

              {/* Corner ornaments */}
              <CornerOrnament position="tl" />
              <CornerOrnament position="tr" />
              <CornerOrnament position="bl" />
              <CornerOrnament position="br" />

              {/* Accent line at top */}
              <div
                className="relative z-10 h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pass.accentColor}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col p-4 pt-3">
                {/* Header */}
                <div className="text-center mb-3">
                  <h3
                    className="text-lg font-bold mb-1 uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-ethereal), serif",
                      color: pass.accentColor,
                    }}
                  >
                    {pass.name.split(" ")[0]} Benefits:
                  </h3>
                </div>

                {/* Benefits */}
                <div className="flex-1 mb-3">
                  <ul className="space-y-1.5">
                    {pass.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          benefit.highlight ? "text-yellow-200" : "text-gray-300"
                        }`}
                      >
                        <span style={{ color: CHECK_ICON_HIGHLIGHT }}>✦</span>
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* QR placeholder */}
                <div className="flex justify-center mb-3">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(212, 168, 83, 0.3)",
                      boxShadow: "inset 0 0 20px rgba(212, 168, 83, 0.1)",
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4A853"
                      strokeWidth="1"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="3" height="3" />
                      <rect x="18" y="14" width="3" height="3" />
                      <rect x="14" y="18" width="3" height="3" />
                      <rect x="18" y="18" width="3" height="3" />
                    </svg>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-3">
                  <span className="text-sm text-gray-400">Price: </span>
                  <span className="text-xl font-bold" style={PRICE_GRADIENT}>
                    ₹{pass.price.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect?.(pass.id);
                  }}
                  className="w-full py-2 text-sm font-bold uppercase tracking-wide"
                  style={BUTTON_BASE}
                >
                  Get {pass.name.split(" ")[0]} Pass
                </motion.button>
              </div>
            </div>
          </RoyalFrame>
        </div>
      </motion.div>
    </motion.div>
  );
});
