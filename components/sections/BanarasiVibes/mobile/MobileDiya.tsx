import { memo } from "react";

/**
 * Realistic Diya SVG with flame animation
 * Mobile only - central decorative element
 */
export const MobileDiya = memo(function MobileDiya() {
  return (
    <div className="relative w-20 h-24">
      <svg viewBox="0 0 80 96" className="w-full h-full">
        <defs>
          {/* Diya bowl gradient - terracotta/clay look */}
          <linearGradient id="mobileDiyaClay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CD853F" />
            <stop offset="30%" stopColor="#A0522D" />
            <stop offset="70%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>
          {/* Inner shadow for depth */}
          <radialGradient id="mobileDiyaInner" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#654321" />
            <stop offset="100%" stopColor="#3d2610" />
          </radialGradient>
          {/* Oil gradient */}
          <linearGradient id="mobileOilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DAA520" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.9" />
          </linearGradient>
          {/* Flame gradients */}
          <linearGradient id="mobileFlameOut" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FF4500" />
            <stop offset="40%" stopColor="#FF8C00" />
            <stop offset="70%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFFACD" />
          </linearGradient>
          <linearGradient id="mobileFlameMid" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="60%" stopColor="#FFBB00" />
            <stop offset="100%" stopColor="#FFFEF5" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="mobileFlameGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Diya base/foot */}
        <ellipse cx="40" cy="88" rx="18" ry="5" fill="#8B4513" />
        <ellipse cx="40" cy="86" rx="14" ry="4" fill="#A0522D" />
        
        {/* Diya bowl - traditional shape */}
        <path 
          d="M15 72 Q12 65 18 58 Q22 54 28 52 L52 52 Q58 54 62 58 Q68 65 65 72 Q62 78 40 80 Q18 78 15 72 Z" 
          fill="url(#mobileDiyaClay)"
        />
        {/* Bowl rim highlight */}
        <path 
          d="M18 58 Q22 54 28 52 L52 52 Q58 54 62 58" 
          fill="none" 
          stroke="#D2691E" 
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Inner bowl shadow */}
        <ellipse cx="40" cy="60" rx="18" ry="8" fill="url(#mobileDiyaInner)" />
        {/* Oil surface */}
        <ellipse cx="40" cy="58" rx="14" ry="5" fill="url(#mobileOilGrad)" />
        
        {/* Wick */}
        <path d="M38 58 L38 44 Q40 42 42 44 L42 58" fill="#2d1608" />
        
        {/* Flame group with animation */}
        <g className="vibes-flame" filter="url(#mobileFlameGlow)">
          {/* Outer flame */}
          <path 
            d="M40 42 Q32 32 35 20 Q38 10 40 8 Q42 10 45 20 Q48 32 40 42 Z" 
            fill="url(#mobileFlameOut)"
            opacity="0.9"
          />
          {/* Middle flame */}
          <path 
            d="M40 42 Q35 34 37 24 Q39 16 40 14 Q41 16 43 24 Q45 34 40 42 Z" 
            fill="url(#mobileFlameMid)"
          />
          {/* Inner bright core */}
          <path 
            d="M40 40 Q38 35 39 28 Q40 22 40 20 Q40 22 41 28 Q42 35 40 40 Z" 
            fill="#FFFEF8"
          />
        </g>
      </svg>
    </div>
  );
});
