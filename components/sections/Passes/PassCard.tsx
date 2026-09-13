"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "./passes.config";
import { ANIMATION } from "./passes.config";
import {
  CARD_CONTAINER,
  CARD_BORDER_GRADIENT,
  CARD_SHADOW,
  CARD_SHADOW_HOVER,
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
        height: "480px",
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
        whileHover={{ scale: 1.03 }}
      >
        {/* ===== FRONT SIDE ===== */}
        <div
          className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Ornate gold border */}
          <div
            className="absolute inset-0 rounded-[20px] p-[3px]"
            style={{ background: CARD_BORDER_GRADIENT }}
          >
            {/* Inner container */}
            <div
              className="relative w-full h-full rounded-[17px] overflow-hidden flex flex-col"
              style={{
                ...CARD_CONTAINER,
                boxShadow: CARD_SHADOW,
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4A853] rounded-tl-lg opacity-60" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4A853] rounded-tr-lg opacity-60" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4A853] rounded-bl-lg opacity-60" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4A853] rounded-br-lg opacity-60" />

              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 20%, ${pass.glowColor} 0%, transparent 50%)`,
                }}
              />

              {/* Pass image area */}
              <div className="relative flex-1 flex items-center justify-center p-3">
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
                    height={320}
                    className="object-contain max-h-[300px] w-auto"
                    style={{ filter: PASS_IMAGE_SHADOW }}
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              {/* Bottom info */}
              <div className="relative z-10 px-4 pb-4 text-center">
                {/* Price */}
                <div className="mb-2">
                  <span className="text-sm text-gray-400">Price: </span>
                  <span
                    className="text-2xl font-bold"
                    style={PRICE_GRADIENT}
                  >
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
          </div>
        </div>

        {/* ===== BACK SIDE ===== */}
        <div
          className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Ornate gold border */}
          <div
            className="absolute inset-0 rounded-[20px] p-[3px]"
            style={{ background: CARD_BORDER_GRADIENT }}
          >
            {/* Inner container */}
            <div
              className="relative w-full h-full rounded-[17px] overflow-hidden flex flex-col"
              style={{
                ...CARD_BACK_BG,
                boxShadow: CARD_SHADOW,
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4A853] rounded-tl-lg opacity-60" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4A853] rounded-tr-lg opacity-60" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4A853] rounded-bl-lg opacity-60" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4A853] rounded-br-lg opacity-60" />

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
                <div className="text-center mb-3">
                  <h3
                    className="text-xl font-bold mb-1 uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-ethereal), serif",
                      color: pass.accentColor,
                    }}
                  >
                    {pass.name.split(" ")[0]} Benefits:
                  </h3>
                </div>

                {/* Benefits */}
                <div className="flex-1 mb-4">
                  <ul className="space-y-2">
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
                <div className="flex justify-center mb-4">
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "2px solid rgba(212, 168, 83, 0.3)",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
