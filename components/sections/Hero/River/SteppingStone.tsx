"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

interface SteppingStoneProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  /** width in px — mobile size */
  size?: number;
  /** width in px for sm+ screens (desktop size) - if not provided, uses size */
  sizeDesktop?: number;
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
  sizeDesktop,
  phase = 0,
  className = "",
  style,
}: SteppingStoneProps) {
  // Use mobile size, desktop handled via CSS variable
  const s = size;
  const deskS = sizeDesktop || size;

  const animStyle: CSSProperties = {
    animation: `stoneHarmonicBob 3.6s ease-in-out infinite`,
    animationDelay: `${phase}s`,
    display: "inline-block",
    cursor: href || onClick ? "pointer" : "default",
    // CSS custom properties for responsive sizing
    "--stone-size-mobile": `${s}px`,
    "--stone-size-desktop": `${deskS}px`,
    ...style,
  } as CSSProperties;

  const stone = (
    <span style={animStyle} className={`stone-responsive ${className}`}>
      <span
        className="stone-interactive relative inline-block"
      >
        {/* Ripple rings */}
        <span
          aria-hidden
          className="stone-ripple absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none"
        />
        <span
          aria-hidden
          className="stone-ripple stone-ripple-2 absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none"
        />
        {/* Water-contact glow */}
        <span
          aria-hidden
          className="stone-waterglow absolute left-1/2 -translate-x-1/2 rounded-[50%] pointer-events-none"
        />
        {/* Reflection */}
        <span
          aria-hidden
          className="stone-reflection absolute left-1/2 pointer-events-none overflow-hidden"
        >
          <Image
            src="/stone.png"
            alt=""
            fill
            className="object-contain object-top select-none"
          />
        </span>
        {/* Stone image */}
        <Image
          src="/stone.png"
          alt={label ? `${label} stone` : "stepping stone"}
          fill
          className="stone-img object-contain select-none pointer-events-none relative"
          style={{ filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.55))" }}
        />
        {/* Label */}
        {label && (
          <span className="stone-label absolute inset-0 flex items-center justify-center text-center font-bold text-amber-100 uppercase">
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
