"use client";

import Image from "next/image";
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

export function SteppingStone({
  label,
  href,
  onClick,
  size = 120,
  phase = 0,
  className = "",
  style,
}: SteppingStoneProps) {
  const animStyle: CSSProperties = {
    animation: `stoneHarmonicBob 3.6s ease-in-out infinite`,
    animationDelay: `${phase}s`,
    display: "inline-block",
    cursor: href || onClick ? "pointer" : "default",
    ...style,
  };

  const stone = (
    <span style={animStyle} className={className}>
      {/* Stone + its water-contact effects, stacked vertically */}
      <span
        className="stone-interactive relative inline-block"
        style={{ width: size, height: size }}
      >
        {/* ── Water effects BELOW the stone (sit behind it) ── */}
        {/* Expanding ripple rings around the water-line */}
        <span
          aria-hidden
          className="stone-ripple absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none"
          style={{
            bottom: size * 0.14,
            width: size * 0.86,
            height: size * 0.22,
            border: "1px solid rgba(180,225,255,0.35)",
          }}
        />
        <span
          aria-hidden
          className="stone-ripple stone-ripple-2 absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none"
          style={{
            bottom: size * 0.15,
            width: size * 0.66,
            height: size * 0.17,
            border: "1px solid rgba(150,210,245,0.3)",
          }}
        />
        {/* Soft water-contact glow where the stone meets the river */}
        <span
          aria-hidden
          className="stone-waterglow absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none"
          style={{
            bottom: size * 0.1,
            width: size * 0.82,
            height: size * 0.2,
            background:
              "radial-gradient(ellipse at center, rgba(126,200,227,0.55) 0%, rgba(74,154,186,0.28) 45%, rgba(26,74,110,0) 75%)",
            filter: "blur(3px)",
          }}
        />
        {/* Faint shimmering reflection of the stone below the water-line */}
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden"
          style={{
            bottom: -size * 0.02,
            width: size * 0.7,
            height: size * 0.22,
            opacity: 0.28,
            transform: "translateX(-50%) scaleY(-1)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 90%)",
            filter: "blur(2px)",
          }}
        >
          <Image
            src="/stone.png"
            alt=""
            fill
            sizes={`${size}px`}
            className="object-contain object-top select-none"
          />
        </span>

        {/* ── The stone itself ── */}
        <Image
          src="/stone.png"
          alt={label ? `${label} stone` : "stepping stone"}
          fill
          sizes={`${size}px`}
          className="stone-img object-contain select-none pointer-events-none relative"
          style={{ filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.55))" }}
        />

        {label && (
          <span
            className="stone-label absolute inset-0 flex items-center justify-center text-center"
            style={{
              fontFamily: "var(--font-ethereal), serif",
              fontWeight: 700,
              fontSize: size * 0.13,
              letterSpacing: "0.5px",
              color: "#f0e8c8",
              textShadow:
                "0 1px 4px rgba(0,0,0,0.95), 0 0 2px rgba(0,0,0,0.9)",
              paddingBottom: size * 0.04,
            }}
          >
            {label}
          </span>
        )}
      </span>
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

