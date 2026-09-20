"use client";

import { memo, CSSProperties } from "react";

interface FloatingLotusProps {
  className?: string;
  style?: CSSProperties;
}

export const FloatingLotus = memo(function FloatingLotus({ className = "", style }: FloatingLotusProps) {
  return (
    <svg viewBox="0 0 60 50" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Green lily pad / leaf base */}
      <ellipse cx="30" cy="42" rx="26" ry="7" fill="url(#lilyPadGradient)" />
      {/* Leaf vein lines */}
      <path d="M30 35 Q30 42 30 48" stroke="#2D5A27" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M30 42 Q20 40 8 44" stroke="#2D5A27" strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M30 42 Q40 40 52 44" stroke="#2D5A27" strokeWidth="0.3" fill="none" opacity="0.4" />
      {/* Leaf notch */}
      <path d="M30 35 L27 42 L30 48 L33 42 Z" fill="#1a4a6e" opacity="0.3" />
      
      {/* Water ripple rings - animated */}
      <ellipse cx="30" cy="46" rx="28" ry="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
        <animate attributeName="rx" values="26;32;26" dur="2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="4;6;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="30" cy="46" rx="22" ry="3" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5">
        <animate attributeName="rx" values="22;28;22" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="ry" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.15;0;0.15" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </ellipse>
      
      {/* Center petal */}
      <ellipse cx="30" cy="18" rx="6" ry="14" fill="url(#lotusPink)" />
      
      {/* Left petals */}
      <ellipse cx="22" cy="20" rx="5" ry="12" fill="url(#lotusPink)" transform="rotate(-25 22 20)" />
      <ellipse cx="16" cy="23" rx="4" ry="10" fill="url(#lotusLight)" transform="rotate(-45 16 23)" />
      
      {/* Right petals */}
      <ellipse cx="38" cy="20" rx="5" ry="12" fill="url(#lotusPink)" transform="rotate(25 38 20)" />
      <ellipse cx="44" cy="23" rx="4" ry="10" fill="url(#lotusLight)" transform="rotate(45 44 23)" />
      
      {/* Outer petals */}
      <ellipse cx="12" cy="26" rx="3" ry="8" fill="url(#lotusOuter)" transform="rotate(-60 12 26)" />
      <ellipse cx="48" cy="26" rx="3" ry="8" fill="url(#lotusOuter)" transform="rotate(60 48 26)" />
      
      {/* Center */}
      <circle cx="30" cy="22" r="4" fill="#FFD700" />
      <circle cx="30" cy="22" r="2" fill="#FFA500" />
      
      {/* Water reflection of flower */}
      <ellipse cx="30" cy="46" rx="12" ry="2" fill="url(#lotusReflection)" opacity="0.25" />
      
      <defs>
        <linearGradient id="lilyPadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D8B37" />
          <stop offset="50%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="lotusPink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB7093" />
        </linearGradient>
        <linearGradient id="lotusLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC0CB" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
        <linearGradient id="lotusOuter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
        <radialGradient id="lotusReflection">
          <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF69B4" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
});
