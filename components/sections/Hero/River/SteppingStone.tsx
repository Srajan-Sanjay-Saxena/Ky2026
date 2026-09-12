"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

interface SteppingStoneProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  /** width in px — stone scales proportionally */
  size?: number;
  /** phase offset so multiple stones bob out of sync */
  phase?: number;
  className?: string;
  style?: CSSProperties;
}

const STONE_ID_PREFIX = "stone";

export function SteppingStone({
  label,
  href,
  onClick,
  size = 120,
  phase = 0,
  className = "",
  style,
}: SteppingStoneProps) {
  const height = size * 0.42;
  const animStyle: CSSProperties = {
    animation: `stoneHarmonicBob 3.6s ease-in-out infinite`,
    animationDelay: `${phase}s`,
    display: "inline-block",
    cursor: href || onClick ? "pointer" : "default",
    ...style,
  };

  const stone = (
    <span style={animStyle} className={className}>
      <svg
        width={size}
        height={height + size * 0.18}
        viewBox={`0 0 120 62`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          {/* Dark basalt/granite — wet Ganga stone */}
          <radialGradient id={`${STONE_ID_PREFIX}Base`} cx="38%" cy="32%" r="62%">
            <stop offset="0%" stopColor="#6e6e6e" />
            <stop offset="30%" stopColor="#4a4a4a" />
            <stop offset="65%" stopColor="#2e2e2e" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </radialGradient>

          {/* Side/thickness — darker underside */}
          <linearGradient id={`${STONE_ID_PREFIX}Edge`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" stopOpacity="1" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="1" />
          </linearGradient>

          {/* Wet sheen — specular highlight */}
          <radialGradient id={`${STONE_ID_PREFIX}Wet`} cx="36%" cy="28%" r="38%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#aaccdd" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#aaccdd" stopOpacity="0" />
          </radialGradient>

          {/* Water-line shimmer at base */}
          <linearGradient id={`${STONE_ID_PREFIX}Water`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a4a6e" stopOpacity="0" />
            <stop offset="30%" stopColor="#4a9aba" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#7ec8e3" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#4a9aba" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1a4a6e" stopOpacity="0" />
          </linearGradient>

          {/* Algae/moss tint — subtle green on lower half */}
          <radialGradient id={`${STONE_ID_PREFIX}Moss`} cx="55%" cy="75%" r="55%">
            <stop offset="0%" stopColor="#3a5c30" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3a5c30" stopOpacity="0" />
          </radialGradient>

          <filter id={`${STONE_ID_PREFIX}Shadow`} x="-20%" y="-20%" width="140%" height="170%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* ── Stone side/thickness ── */}
        <ellipse cx="60" cy="53" rx="52" ry="11" fill="url(#stoneEdge)" />

        {/* ── Main stone top face ── */}
        <ellipse
          cx="60" cy="33"
          rx="52" ry="19"
          fill="url(#stoneBase)"
          filter={`url(#${STONE_ID_PREFIX}Shadow)`}
        />

        {/* ── Moss/algae overlay ── */}
        <ellipse cx="60" cy="33" rx="52" ry="19" fill="url(#stoneMoss)" />

        {/* ── Wet specular sheen ── */}
        <ellipse cx="60" cy="33" rx="52" ry="19" fill="url(#stoneWet)" />

        {/* ── Crack lines — sharp, realistic ── */}
        <path d="M34 28 Q42 31 48 29 Q54 27 60 31" stroke="#111" strokeWidth="0.9" strokeOpacity="0.7" fill="none" />
        <path d="M60 31 Q65 34 72 32" stroke="#111" strokeWidth="0.7" strokeOpacity="0.5" fill="none" />
        <path d="M72 26 Q80 29 88 27 Q93 26 98 29" stroke="#111" strokeWidth="0.7" strokeOpacity="0.45" fill="none" />
        <path d="M44 37 Q52 39 58 37 Q64 35 70 38" stroke="#222" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
        {/* tiny pore dots */}
        <circle cx="38" cy="30" r="0.8" fill="#111" opacity="0.5" />
        <circle cx="82" cy="28" r="0.7" fill="#111" opacity="0.4" />
        <circle cx="55" cy="40" r="0.6" fill="#111" opacity="0.35" />

        {/* ── Water shimmer at base ── */}
        <ellipse cx="60" cy="53" rx="52" ry="5" fill="url(#stoneWater)" opacity="0.75">
          <animate attributeName="opacity" values="0.55;0.85;0.55" dur="2.4s" repeatCount="indefinite" />
        </ellipse>

        {/* ── Label text ── */}
        {label && (
          <text
            x="60"
            y="37"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fontFamily="serif"
            fontWeight="600"
            fill="#f0e8c8"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)", letterSpacing: "0.5px" }}
            paintOrder="stroke"
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          >
            {label}
          </text>
        )}
      </svg>
    </span>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {stone}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} style={{ background: "none", border: "none", padding: 0 }}>
        {stone}
      </button>
    );
  }

  return stone;
}
