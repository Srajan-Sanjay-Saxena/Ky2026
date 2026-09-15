"use client";

import { memo } from "react";

export const LampPost = memo(function LampPost({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 450"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Metal gradients */}
        <linearGradient id="ironDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="25%" stopColor="#2d2d2d" />
          <stop offset="50%" stopColor="#3d3d3d" />
          <stop offset="75%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        <linearGradient id="ironShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#252525" />
          <stop offset="30%" stopColor="#454545" />
          <stop offset="50%" stopColor="#555555" />
          <stop offset="70%" stopColor="#454545" />
          <stop offset="100%" stopColor="#252525" />
        </linearGradient>

        <linearGradient id="brassTrim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A853" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Glass gradient */}
        <linearGradient id="glassPane" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFD699" stopOpacity="0.9" />
        </linearGradient>

        {/* Warm light glow */}
        <radialGradient id="warmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF5E0" stopOpacity="1" />
          <stop offset="20%" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#FFA500" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FF8C00" stopOpacity="0.3" />
          <stop offset="80%" stopColor="#FF6B00" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
        </radialGradient>

        {/* Outer ambient glow */}
        <radialGradient id="ambientGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#FFA500" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>

        {/* Flame gradient */}
        <linearGradient id="flameCore" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="30%" stopColor="#FF6B00" />
          <stop offset="60%" stopColor="#FFA500" />
          <stop offset="85%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFACD" />
        </linearGradient>

        {/* Filters */}
        <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" result="shadow" />
          <feComposite in="SourceGraphic" in2="shadow" operator="over" />
        </filter>
      </defs>

      {/* ===== OUTER GLOW ===== */}
      <ellipse cx="60" cy="85" rx="80" ry="70" fill="url(#ambientGlow)">
        <animate
          attributeName="rx"
          values="75;85;75"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="65;75;65"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* ===== LAMP HEAD ===== */}
      <g filter="url(#innerShadow)">
        {/* Top finial */}
        <ellipse cx="60" cy="18" rx="6" ry="3" fill="url(#brassTrim)" />
        <path
          d="M57 18 Q55 12 58 6 L62 6 Q65 12 63 18"
          fill="url(#brassTrim)"
        />
        <circle cx="60" cy="5" r="4" fill="url(#brassTrim)" />

        {/* Lamp roof */}
        <path
          d="M30 35 L40 20 L80 20 L90 35 Z"
          fill="url(#ironDark)"
          stroke="#1a1a1a"
          strokeWidth="1"
        />
        <path
          d="M35 35 L43 23 L77 23 L85 35"
          fill="none"
          stroke="#4a4a4a"
          strokeWidth="0.5"
        />

        {/* Decorative roof edge */}
        <rect x="28" y="35" width="64" height="5" fill="url(#ironShine)" rx="1" />
        <rect x="30" y="38" width="60" height="2" fill="url(#brassTrim)" />

        {/* Glass housing frame */}
        <rect x="32" y="40" width="56" height="70" fill="url(#ironDark)" rx="2" />

        {/* Glass panes with glow */}
        <g filter="url(#softGlow)">
          {/* Main warm glow behind glass */}
          <ellipse cx="60" cy="75" rx="35" ry="40" fill="url(#warmGlow)">
            <animate
              attributeName="rx"
              values="33;37;33"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        {/* Glass panels */}
        <rect x="36" y="44" width="22" height="62" fill="url(#glassPane)" rx="1" />
        <rect x="62" y="44" width="22" height="62" fill="url(#glassPane)" rx="1" />

        {/* Glass frame dividers */}
        <rect x="58" y="44" width="4" height="62" fill="url(#ironDark)" />
        <rect x="36" y="72" width="48" height="3" fill="url(#ironDark)" />

        {/* Inner flame */}
        <g filter="url(#softGlow)">
          <path fill="url(#flameCore)">
            <animate
              attributeName="d"
              values="
                M60 55 Q65 65 63 80 Q60 88 57 80 Q55 65 60 55;
                M60 52 Q67 63 64 80 Q60 90 56 80 Q53 63 60 52;
                M60 57 Q64 67 62 80 Q60 86 58 80 Q56 67 60 57;
                M60 55 Q65 65 63 80 Q60 88 57 80 Q55 65 60 55
              "
              dur="0.4s"
              repeatCount="indefinite"
            />
          </path>
          {/* Flame core (brightest) */}
          <path fill="#FFFACD" opacity="0.9">
            <animate
              attributeName="d"
              values="
                M60 65 Q62 72 61 80 Q60 83 59 80 Q58 72 60 65;
                M60 63 Q63 71 61 80 Q60 84 59 80 Q57 71 60 63;
                M60 67 Q61 73 60 80 Q60 82 60 80 Q59 73 60 67;
                M60 65 Q62 72 61 80 Q60 83 59 80 Q58 72 60 65
              "
              dur="0.3s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Bottom frame */}
        <rect x="30" y="110" width="60" height="6" fill="url(#ironShine)" rx="1" />
        <rect x="32" y="114" width="56" height="3" fill="url(#brassTrim)" />
      </g>

      {/* ===== DECORATIVE BRACKET ===== */}
      <g fill="url(#ironDark)">
        {/* Curved brackets */}
        <path
          d="M38 117 Q30 130 35 145 Q40 150 45 145"
          fill="none"
          stroke="url(#ironShine)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M82 117 Q90 130 85 145 Q80 150 75 145"
          fill="none"
          stroke="url(#ironShine)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center connector */}
        <ellipse cx="60" cy="145" rx="18" ry="8" fill="url(#ironShine)" />
        <ellipse cx="60" cy="145" rx="12" ry="5" fill="url(#ironDark)" />
      </g>

      {/* ===== MAIN POLE ===== */}
      <g>
        {/* Upper decorative section */}
        <rect x="52" y="150" width="16" height="20" fill="url(#ironShine)" rx="2" />
        <ellipse cx="60" cy="155" rx="10" ry="4" fill="url(#brassTrim)" />

        {/* Main shaft */}
        <rect x="54" y="170" width="12" height="220" fill="url(#ironShine)" />

        {/* Decorative rings */}
        <ellipse cx="60" cy="200" rx="9" ry="4" fill="url(#ironDark)" />
        <ellipse cx="60" cy="202" rx="8" ry="3" fill="url(#brassTrim)" />

        <ellipse cx="60" cy="270" rx="9" ry="4" fill="url(#ironDark)" />
        <ellipse cx="60" cy="272" rx="8" ry="3" fill="url(#brassTrim)" />

        <ellipse cx="60" cy="340" rx="9" ry="4" fill="url(#ironDark)" />
        <ellipse cx="60" cy="342" rx="8" ry="3" fill="url(#brassTrim)" />

        {/* Fluted details on shaft */}
        <line x1="56" y1="175" x2="56" y2="385" stroke="#2a2a2a" strokeWidth="1" />
        <line x1="60" y1="175" x2="60" y2="385" stroke="#4a4a4a" strokeWidth="1" />
        <line x1="64" y1="175" x2="64" y2="385" stroke="#2a2a2a" strokeWidth="1" />
      </g>

      {/* ===== BASE ===== */}
      <g>
        {/* Upper base */}
        <ellipse cx="60" cy="390" rx="14" ry="6" fill="url(#ironShine)" />
        <rect x="46" y="390" width="28" height="15" fill="url(#ironShine)" />

        {/* Middle base */}
        <ellipse cx="60" cy="405" rx="20" ry="8" fill="url(#ironDark)" />
        <rect x="40" y="405" width="40" height="12" fill="url(#ironDark)" />

        {/* Bottom base */}
        <ellipse cx="60" cy="417" rx="28" ry="10" fill="url(#ironShine)" />
        <ellipse cx="60" cy="425" rx="35" ry="12" fill="url(#ironDark)" />

        {/* Ground shadow */}
        <ellipse cx="60" cy="438" rx="40" ry="8" fill="#000" opacity="0.3" />

        {/* Base decorative details */}
        <ellipse cx="60" cy="420" rx="22" ry="6" fill="none" stroke="url(#brassTrim)" strokeWidth="1.5" />
      </g>

      {/* ===== LIGHT RAYS ===== */}
      <g opacity="0.15">
        <line x1="60" y1="85" x2="60" y2="150" stroke="#FFD700" strokeWidth="2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="85" x2="30" y2="140" stroke="#FFD700" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="85" x2="90" y2="140" stroke="#FFD700" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.3s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  );
});
