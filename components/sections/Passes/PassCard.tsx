"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "./passes.config";
import { ANIMATION } from "./passes.config";
import {
  CARD_GLASS,
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
      width="16"
      height="16"
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

// Flip hint icon
function FlipHintIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

export const PassCard = memo(function PassCard({
  pass,
  index,
  onSelect,
}: PassCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Offset float animation phase based on card index
  const floatDelay = index * 0.5;

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Card dimensions for consistent sizing
  const cardStyle = {
    width: "100%",
    maxWidth: "320px",
    height: "480px",
  };

  return (
    <motion.div
      variants={ANIMATION.card}
      className={`relative ${pass.popular ? "md:-mt-4 lg:-mt-6" : ""}`}
      style={{
        ...cardStyle,
        perspective: "1000px",
      }}
    >
      {/* Popular badge - stays in front */}
      {pass.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          style={{
            background: POPULAR_BADGE_BG,
            color: "#1A1A2E",
            boxShadow: "0 4px 15px rgba(212, 168, 83, 0.5)",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Flip container */}
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        onClick={handleFlip}
      >
        {/* ===== FRONT SIDE - Pass Image ===== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Background with glass effect */}
          <div
            className="absolute inset-0"
            style={{
              ...CARD_GLASS,
              background: `
                linear-gradient(180deg, 
                  rgba(255,255,255,0.05) 0%, 
                  rgba(${pass.id === "yatri" ? "26,95,122" : pass.id === "darbar" ? "212,168,83" : "255,215,0"},0.1) 50%,
                  rgba(0,0,0,0.2) 100%
                )
              `,
            }}
          />

          {/* Glow effect */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, ${pass.glowColor} 0%, transparent 60%)`,
            }}
          />

          {/* Floating pass image */}
          <motion.div
            className="relative z-10 h-full flex items-center justify-center p-6"
            animate={{ y: [0, -10, 0] }}
            transition={{
              ...ANIMATION.float,
              delay: floatDelay,
            }}
          >
            <Image
              src={pass.image}
              alt={pass.name}
              width={280}
              height={400}
              className="object-contain max-h-[90%] w-auto"
              style={{ filter: PASS_IMAGE_SHADOW }}
              priority={index === 0}
            />
          </motion.div>

          {/* Price tag at bottom */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span
              className="text-2xl font-bold px-4 py-1 rounded-full"
              style={{
                ...PRICE_GRADIENT,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(4px)",
                ...PRICE_GRADIENT,
              }}
            >
              ₹{pass.price.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Flip hint */}
          <div className="absolute top-4 right-4 text-gray-400 opacity-60 flex items-center gap-1.5 text-xs">
            <FlipHintIcon />
            <span className="hidden sm:inline">Tap for details</span>
          </div>
        </div>

        {/* ===== BACK SIDE - Details ===== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              ...CARD_GLASS,
              background: `
                linear-gradient(180deg, 
                  rgba(26, 26, 46, 0.95) 0%, 
                  rgba(15, 15, 30, 0.98) 100%
                )
              `,
              border: `1px solid ${pass.accentColor}40`,
            }}
          />

          {/* Decorative accent line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${pass.accentColor}, transparent)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col p-6">
            {/* Header */}
            <div className="text-center mb-4 pt-2">
              <h3
                className="text-2xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-ethereal), serif",
                  color: pass.accentColor,
                }}
              >
                {pass.name}
              </h3>
              <p className="text-sm text-gray-400">{pass.tagline}</p>
            </div>

            {/* Price */}
            <div className="text-center mb-5">
              <span className="text-3xl font-bold" style={PRICE_GRADIENT}>
                ₹{pass.price.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Benefits list */}
            <ul className="flex-1 space-y-3 mb-6 overflow-y-auto">
              {pass.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 text-sm ${
                    benefit.highlight ? "text-yellow-200" : "text-gray-300"
                  }`}
                >
                  <CheckIcon highlight={benefit.highlight} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent flip
                onSelect?.(pass.id);
              }}
              className="relative w-full py-3.5 rounded-xl text-base font-bold uppercase tracking-wide overflow-hidden"
              style={BUTTON_BASE}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0"
                animate={{ x: ["-100%", "100%"] }}
                transition={ANIMATION.shimmer}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
              <span className="relative z-10">Get This Pass</span>
            </motion.button>

            {/* Flip back hint */}
            <p className="text-center text-gray-500 text-xs mt-3 flex items-center justify-center gap-1">
              <FlipHintIcon />
              Tap to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
