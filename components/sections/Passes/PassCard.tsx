"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "./passes.config";
import { ANIMATION } from "./passes.config";
import {
  CONTAINER_BASE,
  CONTAINER_BORDER_GRADIENT,
  CONTAINER_SHADOW,
  CONTAINER_SHADOW_HOVER,
  CONTAINER_TEXTURE,
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

export const PassCard = memo(function PassCard({
  pass,
  index,
  onSelect,
}: PassCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for hint text
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  // Float animation delay based on index
  const floatDelay = index * 0.4;

  return (
    <motion.div
      variants={ANIMATION.card}
      className={`relative ${pass.popular ? "md:-mt-4 lg:-mt-6" : ""}`}
      style={{
        width: "100%",
        maxWidth: "320px",
        height: "520px",
        perspective: "1200px",
      }}
    >
      {/* Popular badge */}
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
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        onClick={handleFlip}
        whileHover={{ scale: 1.02 }}
      >
        {/* ===== FRONT SIDE ===== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Gold border wrapper */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px]"
            style={{ background: CONTAINER_BORDER_GRADIENT }}
          >
            {/* Inner container with texture */}
            <div
              className="relative w-full h-full rounded-[14px] overflow-hidden flex flex-col"
              style={{
                ...CONTAINER_BASE,
                boxShadow: CONTAINER_SHADOW,
              }}
            >
              {/* Texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{ background: CONTAINER_TEXTURE }}
              />

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 30%, ${pass.glowColor} 0%, transparent 60%)`,
                }}
              />

              {/* Pass image area */}
              <div className="relative flex-1 flex items-center justify-center p-4">
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
                    width={280}
                    height={360}
                    className="object-contain max-h-[340px] w-auto"
                    style={{ filter: PASS_IMAGE_SHADOW }}
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              {/* Bottom info area */}
              <div className="relative z-10 px-5 pb-5 pt-2 text-center">
                {/* Price */}
                <div className="mb-2">
                  <span
                    className="text-2xl font-bold"
                    style={PRICE_GRADIENT}
                  >
                    ₹{pass.price.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Short description */}
                <p className="text-gray-400 text-sm mb-3">
                  {pass.tagline}
                </p>

                {/* Flip hint */}
                <p className="text-gray-500 text-xs flex items-center justify-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  {isMobile ? "Tap for Benefits" : "Hover & Click for Benefits"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BACK SIDE ===== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Gold border wrapper */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px]"
            style={{ background: CONTAINER_BORDER_GRADIENT }}
          >
            {/* Inner container */}
            <div
              className="relative w-full h-full rounded-[14px] overflow-hidden flex flex-col"
              style={{
                ...CARD_BACK_BG,
                boxShadow: CONTAINER_SHADOW,
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
              <div className="flex-1 flex flex-col p-5 pt-4">
                {/* Header */}
                <div className="text-center mb-4">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-ethereal), serif",
                      color: pass.accentColor,
                    }}
                  >
                    {pass.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{pass.tagline}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold" style={PRICE_GRADIENT}>
                    ₹{pass.price.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Benefits */}
                <div className="flex-1 mb-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Benefits
                  </p>
                  <ul className="space-y-2">
                    {pass.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          benefit.highlight ? "text-yellow-200" : "text-gray-300"
                        }`}
                      >
                        <CheckIcon highlight={benefit.highlight} />
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect?.(pass.id);
                  }}
                  className="relative w-full py-3 rounded-xl text-base font-bold uppercase tracking-wide overflow-hidden"
                  style={BUTTON_BASE}
                >
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={ANIMATION.shimmer}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                  />
                  <span className="relative z-10">Get Pass</span>
                </motion.button>

                {/* Flip back hint */}
                <p className="text-center text-gray-500 text-xs mt-3 flex items-center justify-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  {isMobile ? "Tap to flip back" : "Click to flip back"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
