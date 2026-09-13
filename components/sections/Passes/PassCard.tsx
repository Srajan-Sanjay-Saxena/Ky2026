"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "./passes.config";
import { ANIMATION } from "./passes.config";
import { CARD_SHADOW, POPULAR_BADGE_BG, CHECK_ICON_HIGHLIGHT } from "./passes.styles";

interface PassCardProps {
  pass: PassConfig;
  index: number;
  onSelect?: (passId: string) => void;
}

// ============================================
// Task 1: PassIcon Component with Animation
// ============================================
function PassIcon({ passId }: { passId: string }) {
  const icons: Record<string, React.ReactNode> = {
    yatri: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
      </svg>
    ),
    darbar: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V18H19V19Z" />
      </svg>
    ),
    swarnim: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 1Z" />
      </svg>
    ),
  };

  return (
    <motion.span
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      {icons[passId] || icons.yatri}
    </motion.span>
  );
}

// ============================================
// Task 2: RoyalPrice Component
// ============================================
function RoyalPrice({ price }: { price: number }) {
  return (
    <div className="relative inline-flex items-center">
      {/* Left decorative line */}
      <span
        className="w-8 h-[1px] mr-2"
        style={{
          background: "linear-gradient(90deg, transparent, #D4A853)",
        }}
      />

      {/* Price container */}
      <div
        className="px-4 py-2 rounded-lg"
        style={{
          background: "linear-gradient(180deg, rgba(212, 168, 83, 0.15) 0%, rgba(184, 134, 11, 0.08) 100%)",
          border: "1px solid rgba(212, 168, 83, 0.4)",
          boxShadow: "0 2px 10px rgba(212, 168, 83, 0.2)",
        }}
      >
        <span className="text-[#D4A853] text-sm font-semibold tracking-wide">Price</span>
        <span className="mx-2 text-[#FFD700] font-light">:</span>
        <span
          className="text-2xl font-bold"
          style={{
            background: "linear-gradient(180deg, #FFD700 0%, #D4A853 50%, #FFD700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Right decorative line */}
      <span
        className="w-8 h-[1px] ml-2"
        style={{
          background: "linear-gradient(90deg, #D4A853, transparent)",
        }}
      />
    </div>
  );
}

// ============================================
// Task 3: RoyalButton Component
// ============================================
function RoyalButton({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative w-full py-3 px-4 font-bold uppercase tracking-wider text-sm overflow-hidden rounded-lg"
      style={{
        background: "linear-gradient(180deg, #D4A853 0%, #B8860B 50%, #8B6914 100%)",
        border: "2px solid #FFD700",
        color: "#1A0A1A",
        boxShadow: "0 4px 15px rgba(212, 168, 83, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
      }}
    >
      {/* Shimmer animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
        }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon}
        {children}
      </span>
    </motion.button>
  );
}

// ============================================
// Existing Components (kept from before)
// ============================================
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
      className={`absolute ${positions[position]} w-10 h-10 pointer-events-none`}
      style={{ transform: `rotate(${rotations[position]}deg)` }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <path d="M5 5 Q5 25 25 25 Q15 15 5 5" fill="none" stroke="url(#goldGradCorner)" strokeWidth="1.5" opacity="0.6" />
        <path d="M2 2 Q2 28 28 28" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.4" />
        <ellipse cx="10" cy="10" rx="3" ry="5" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.5" transform="rotate(-45 10 10)" />
        <circle cx="6" cy="6" r="2" fill="#D4A853" opacity="0.6" />
        <defs>
          <linearGradient id="goldGradCorner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[7px]">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            rgba(35, 18, 45, 0.98) 0%,
            rgba(28, 14, 38, 0.99) 30%,
            rgba(22, 10, 32, 1) 60%,
            rgba(18, 8, 28, 1) 100%
          )`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a853' fill-rule='evenodd'%3E%3Cpath d='M20 20c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zm0-2c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function RoyalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
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
        <div
          className="w-full h-full rounded-[11px]"
          style={{
            background: `linear-gradient(180deg, #1a0d10 0%, #2a1a18 50%, #1a0d10 100%)`,
            padding: "2px",
          }}
        >
          <div
            className="w-full h-full rounded-[9px]"
            style={{
              background: `linear-gradient(180deg, 
                #8B6914 0%, #D4A853 30%, #FFD700 50%, #D4A853 70%, #8B6914 100%
              )`,
              padding: "2px",
            }}
          >
            <div className="relative w-full h-full rounded-[7px] overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Task 4, 5, 6: Main PassCard Component
// ============================================
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
        height: "520px",
      }}
    >
      {/* Popular badge */}
      {pass.popular && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: POPULAR_BADGE_BG,
            color: "#1A0A1A",
            boxShadow: "0 4px 20px rgba(212, 168, 83, 0.6)",
          }}
        >
          ✦ Most Popular ✦
        </motion.div>
      )}

      {/* Static card frame (doesn't flip) */}
      <RoyalFrame>
        <div className="relative w-full h-full flex flex-col" style={{ boxShadow: CARD_SHADOW }}>
          {/* Background */}
          <CardBackground />

          {/* Corner ornaments (always visible) */}
          <CornerOrnament position="tl" />
          <CornerOrnament position="tr" />
          <CornerOrnament position="bl" />
          <CornerOrnament position="br" />

          {/* ===== INTERNAL FLIP CONTAINER (only this flips) ===== */}
          <div
            className="relative flex-1 flex items-center justify-center p-3 cursor-pointer z-10"
            style={{ perspective: "800px" }}
            onClick={handleFlip}
          >
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* ===== FRONT: Pass Image with Glow ===== */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    ...ANIMATION.float,
                    delay: floatDelay,
                  }}
                  className="relative"
                >
                  {/* Task 5: Blur glow behind image */}
                  <div
                    className="absolute inset-0 blur-2xl"
                    style={{
                      background: `radial-gradient(ellipse, ${pass.glowColor} 0%, transparent 70%)`,
                      transform: "scale(1.3)",
                      opacity: 0.6,
                    }}
                  />

                  {/* Task 5: Animated drop-shadow on image */}
                  <motion.div
                    animate={{
                      filter: [
                        `drop-shadow(0 0 20px ${pass.glowColor})`,
                        `drop-shadow(0 0 35px ${pass.glowColor})`,
                        `drop-shadow(0 0 20px ${pass.glowColor})`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={pass.image}
                      alt={pass.name}
                      width={220}
                      height={280}
                      className="object-contain max-h-[260px] w-auto relative z-10"
                      priority={index === 0}
                    />
                  </motion.div>
                </motion.div>

                {/* Flip hint */}
                <p className="absolute bottom-1 text-gray-500 text-xs flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  {isMobile ? "Tap for details" : "Click for details"}
                </p>
              </div>

              {/* ===== BACK: Benefits ===== */}
              <div
                className="absolute inset-0 flex flex-col p-4 rounded-lg"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "linear-gradient(180deg, rgba(35, 18, 45, 0.98) 0%, rgba(22, 10, 32, 1) 100%)",
                  border: "1px solid rgba(212, 168, 83, 0.25)",
                }}
              >
                {/* Header */}
                <h3
                  className="text-lg font-bold text-center mb-3 uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-ethereal), serif",
                    color: pass.accentColor,
                  }}
                >
                  {pass.name.split(" ")[0]} Benefits
                </h3>

                {/* Benefits list */}
                <ul className="flex-1 space-y-2 overflow-y-auto">
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

                {/* QR placeholder */}
                <div className="flex justify-center my-3">
                  <div
                    className="w-14 h-14 rounded flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(212, 168, 83, 0.3)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1">
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

                {/* Flip back hint */}
                <p className="text-center text-gray-500 text-xs flex items-center justify-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  {isMobile ? "Tap to flip back" : "Click to flip back"}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ===== BOTTOM SECTION (always visible, moved up) ===== */}
          <div className="relative z-10 px-4 pb-4 pt-1">
            {/* Royal Price */}
            <div className="flex justify-center mb-3">
              <RoyalPrice price={pass.price} />
            </div>

            {/* Royal Button with Icon */}
            <RoyalButton
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(pass.id);
              }}
              icon={<PassIcon passId={pass.id} />}
            >
              Get {pass.name.split(" ")[0]} Pass
            </RoyalButton>
          </div>
        </div>
      </RoyalFrame>
    </motion.div>
  );
});
