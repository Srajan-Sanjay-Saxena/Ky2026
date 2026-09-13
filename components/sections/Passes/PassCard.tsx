"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "./passes.config";
import { ANIMATION } from "./passes.config";
import {
  CARD_CONTAINER,
  CARD_FRAME_OUTER,
  CARD_FRAME_INNER,
  CARD_SHADOW,
  CARD_BACK_BG,
  POPULAR_BADGE_BG,
  BUTTON_BASE,
  PRICE_GRADIENT,
  CHECK_ICON_COLOR,
  CHECK_ICON_HIGHLIGHT,
  PASS_IMAGE_SHADOW,
} from "./passes.styles";

interface PassCardProps {
  pass: PassConfig;
  index: number;
  onSelect?: (passId: string) => void;
}

// Check icon component
function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke={highlight ? CHECK_ICON_HIGHLIGHT : CHECK_ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Royal ornate frame component - creates the thick decorative border
 */
function RoyalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      {/* Outer gold frame */}
      <div
        className="absolute inset-0 rounded-[16px]"
        style={{
          background: CARD_FRAME_OUTER,
          padding: "4px",
        }}
      >
        {/* Dark inset line */}
        <div
          className="absolute inset-[4px] rounded-[12px]"
          style={{
            background: CARD_FRAME_INNER,
            padding: "3px",
          }}
        >
          {/* Inner gold line */}
          <div
            className="absolute inset-[3px] rounded-[9px]"
            style={{
              background: CARD_FRAME_OUTER,
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

      {/* Corner ornaments - top left */}
      <div className="absolute top-0 left-0 w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <path
            d="M0 8 L0 0 L8 0"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
          <circle cx="4" cy="4" r="3" fill="#D4A853" />
        </svg>
      </div>

      {/* Corner ornaments - top right */}
      <div className="absolute top-0 right-0 w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <path
            d="M32 8 L32 0 L24 0"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
          <circle cx="28" cy="4" r="3" fill="#D4A853" />
        </svg>
      </div>

      {/* Corner ornaments - bottom left */}
      <div className="absolute bottom-0 left-0 w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <path
            d="M0 24 L0 32 L8 32"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
          <circle cx="4" cy="28" r="3" fill="#D4A853" />
        </svg>
      </div>

      {/* Corner ornaments - bottom right */}
      <div className="absolute bottom-0 right-0 w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <path
            d="M32 24 L32 32 L24 32"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
          <circle cx="28" cy="28" r="3" fill="#D4A853" />
        </svg>
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
              style={{
                ...CARD_CONTAINER,
                boxShadow: CARD_SHADOW,
              }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 30%, ${pass.glowColor} 0%, transparent 60%)`,
                }}
              />

              {/* Pass image area */}
              <div className="relative flex-1 flex items-center justify-center p-2">
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
                {/* Price */}
                <div className="mb-3">
                  <span className="text-sm text-gray-400">Price: </span>
                  <span className="text-2xl font-bold" style={PRICE_GRADIENT}>
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
              style={{
                ...CARD_BACK_BG,
                boxShadow: CARD_SHADOW,
              }}
            >
              {/* Accent line at top */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pass.accentColor}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="flex-1 flex flex-col p-4 pt-3">
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
                        <span className="text-[#D4A853]">•</span>
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
                      background: "rgba(255,255,255,0.05)",
                      border: "2px solid rgba(212, 168, 83, 0.4)",
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
