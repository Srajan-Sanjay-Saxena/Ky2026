"use client";

import { memo, CSSProperties, useId } from "react";

interface DiyaProps {
  className?: string;
  style?: CSSProperties;
}

export const DiyaSvg = memo(function Diya({ className = "", style }: DiyaProps) {
  // Generate unique IDs for gradients/filters to avoid conflicts when multiple diyas render
  const uid = useId().replace(/:/g, "");
  
  return (
    <svg
      viewBox="0 0 60 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`diyaBrass-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A853" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        
        <linearGradient id={`flameOuter-${uid}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        
        <linearGradient id={`flameInner-${uid}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFACD" />
        </linearGradient>
        
        <linearGradient id={`leafGradient-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D8B37" />
          <stop offset="50%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        
        <filter id={`flameGlow-${uid}`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <radialGradient id={`glowEffect-${uid}`} cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="rgba(255,165,0,0.6)" />
          <stop offset="100%" stopColor="rgba(255,165,0,0)" />
        </radialGradient>
        
        <radialGradient id={`diyaReflection-${uid}`}>
          <stop offset="0%" stopColor="rgba(255,165,0,0.3)" />
          <stop offset="100%" stopColor="rgba(255,165,0,0)" />
        </radialGradient>

        {/* === NEW: Water glow effects === */}
        
        {/* Warm golden aura beneath the diya - the "life" glow */}
        <radialGradient id={`waterGlow-${uid}`} cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="rgba(255,180,50,0.7)" />
          <stop offset="40%" stopColor="rgba(255,140,0,0.4)" />
          <stop offset="70%" stopColor="rgba(255,100,0,0.15)" />
          <stop offset="100%" stopColor="rgba(255,80,0,0)" />
        </radialGradient>

        {/* Soft orange halo for water surface interaction */}
        <radialGradient id={`waterHalo-${uid}`} cx="50%" cy="20%" r="80%">
          <stop offset="0%" stopColor="rgba(255,200,100,0.5)" />
          <stop offset="50%" stopColor="rgba(255,150,50,0.2)" />
          <stop offset="100%" stopColor="rgba(255,100,0,0)" />
        </radialGradient>

        {/* Shimmering light caustics on water */}
        <radialGradient id={`caustics-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,200,0.6)" />
          <stop offset="100%" stopColor="rgba(255,220,150,0)" />
        </radialGradient>

        {/* Filter for soft underwater glow blur */}
        <filter id={`waterGlowBlur-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Glow around flame */}
      <ellipse cx="30" cy="30" rx="25" ry="30" fill={`url(#glowEffect-${uid})`}>
        <animate
          attributeName="rx"
          values="25;28;25"
          dur="0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="30;33;30"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Flame outer */}
      <g filter={`url(#flameGlow-${uid})`}>
        <path fill={`url(#flameOuter-${uid})`}>
          <animate
            attributeName="d"
            dur="0.3s"
            repeatCount="indefinite"
            values="
              M30,10 Q35,25 32,40 Q30,45 28,40 Q25,25 30,10;
              M30,8 Q37,23 33,40 Q30,46 27,40 Q23,23 30,8;
              M30,12 Q34,26 31,40 Q30,44 29,40 Q26,26 30,12;
              M30,10 Q35,25 32,40 Q30,45 28,40 Q25,25 30,10
            "
          />
        </path>
        
        {/* Flame inner (white-yellow core) */}
        <path fill={`url(#flameInner-${uid})`}>
          <animate
            attributeName="d"
            dur="0.25s"
            repeatCount="indefinite"
            values="
              M30,25 Q32,32 31,40 Q30,42 29,40 Q28,32 30,25;
              M30,23 Q33,31 31,40 Q30,43 29,40 Q27,31 30,23;
              M30,27 Q31,33 30,40 Q30,41 30,40 Q29,33 30,27;
              M30,25 Q32,32 31,40 Q30,42 29,40 Q28,32 30,25
            "
          />
        </path>
      </g>

      {/* Diya base (brass lamp) */}
      <ellipse cx="30" cy="55" rx="20" ry="8" fill={`url(#diyaBrass-${uid})`} />
      <ellipse cx="30" cy="52" rx="15" ry="5" fill="#8B6914" />
      
      {/* Oil in diya */}
      <ellipse cx="30" cy="50" rx="12" ry="4" fill="#4A3000" />
      
      {/* Wick */}
      <rect x="28" y="42" width="4" height="10" fill="#2D1810" />
      
      {/* Diya edge decoration */}
      <ellipse cx="30" cy="55" rx="22" ry="9" fill="none" stroke="#FFD700" strokeWidth="1" />
      
      {/* Floating leaf base */}
      <ellipse cx="30" cy="68" rx="26" ry="8" fill={`url(#leafGradient-${uid})`} />
      {/* Leaf veins */}
      <path d="M30 60 Q30 68 30 76" stroke="#2D5A27" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M30 68 Q18 66 6 70" stroke="#2D5A27" strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M30 68 Q42 66 54 70" stroke="#2D5A27" strokeWidth="0.3" fill="none" opacity="0.4" />
      {/* Leaf highlight */}
      <ellipse cx="30" cy="66" rx="20" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* ============================================= */}
      {/* === WATER GLOW EFFECTS - BRINGING TO LIFE === */}
      {/* ============================================= */}

      {/* Layer 1: Large ambient water glow - the divine aura spreading on water */}
      <ellipse 
        cx="30" 
        cy="82" 
        rx="35" 
        ry="12" 
        fill={`url(#waterGlow-${uid})`}
        filter={`url(#waterGlowBlur-${uid})`}
      >
        <animate
          attributeName="rx"
          values="35;40;35"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="12;15;12"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Layer 2: Inner warm halo - concentrated light pool */}
      <ellipse 
        cx="30" 
        cy="78" 
        rx="22" 
        ry="7" 
        fill={`url(#waterHalo-${uid})`}
      >
        <animate
          attributeName="rx"
          values="22;26;22"
          dur="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="7;9;7"
          dur="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Layer 3: Dancing light caustics - shimmer spots on water */}
      <g filter={`url(#waterGlowBlur-${uid})`}>
        {/* Caustic spot 1 */}
        <ellipse cx="20" cy="80" rx="4" ry="2" fill={`url(#caustics-${uid})`} opacity="0.6">
          <animate attributeName="cx" values="20;24;18;20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.3;0.4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="rx" values="4;5;3;4" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Caustic spot 2 */}
        <ellipse cx="40" cy="81" rx="3" ry="1.5" fill={`url(#caustics-${uid})`} opacity="0.5">
          <animate attributeName="cx" values="40;36;42;40" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.4;0.3" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="rx" values="3;4;2.5;3" dur="2.2s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Caustic spot 3 - center */}
        <ellipse cx="30" cy="79" rx="5" ry="2" fill={`url(#caustics-${uid})`} opacity="0.7">
          <animate attributeName="ry" values="2;3;2" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Layer 4: Breathing golden ring - pulsing life energy */}
      <ellipse 
        cx="30" 
        cy="76" 
        rx="28" 
        ry="6" 
        fill="none" 
        stroke="rgba(255,180,80,0.5)" 
        strokeWidth="1.5"
      >
        <animate attributeName="rx" values="28;32;28" dur="2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="6;8;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0.8;0.5" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-width" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Layer 5: Soft flame reflection - mirrored glow in water */}
      <ellipse 
        cx="30" 
        cy="85" 
        rx="12" 
        ry="4" 
        fill={`url(#diyaReflection-${uid})`} 
        opacity="0.6"
      >
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="rx" values="12;14;12" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="ry" values="4;5;4" dur="0.8s" repeatCount="indefinite" />
      </ellipse>

      {/* Layer 6: Tiny sparkle particles floating up from the glow */}
      <circle cx="22" cy="82" r="1" fill="rgba(255,220,150,0.8)">
        <animate attributeName="cy" values="82;75;82" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="0.5;1.5;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="38" cy="83" r="0.8" fill="rgba(255,200,100,0.7)">
        <animate attributeName="cy" values="83;74;83" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="r" values="0.4;1.2;0.4" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="30" cy="84" r="1.2" fill="rgba(255,240,180,0.9)">
        <animate attributeName="cy" values="84;72;84" dur="3.5s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="r" values="0.6;1.8;0.6" dur="3.5s" repeatCount="indefinite" begin="1s" />
      </circle>

      {/* Water ripple rings - animated harmonic motion */}
      <ellipse cx="30" cy="88" rx="28" ry="5" fill="none" stroke="rgba(255,200,150,0.25)" strokeWidth="0.8">
        <animate attributeName="rx" values="26;38;26" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="30" cy="88" rx="20" ry="3.5" fill="none" stroke="rgba(255,180,100,0.2)" strokeWidth="0.6">
        <animate attributeName="rx" values="20;32;20" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
        <animate attributeName="ry" values="3.5;7;3.5" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
      </ellipse>
      <ellipse cx="30" cy="88" rx="14" ry="2.5" fill="none" stroke="rgba(255,160,80,0.15)" strokeWidth="0.5">
        <animate attributeName="rx" values="14;26;14" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
        <animate attributeName="ry" values="2.5;5;2.5" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
      </ellipse>
    </svg>
  );
});
