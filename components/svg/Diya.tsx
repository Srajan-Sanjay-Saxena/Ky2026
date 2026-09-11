"use client";

export default function Diya({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="diyaBrass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A853" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        
        <linearGradient id="flameOuter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        
        <linearGradient id="flameInner" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFACD" />
        </linearGradient>
        
        <filter id="flameGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <radialGradient id="glowEffect" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="rgba(255,165,0,0.6)" />
          <stop offset="100%" stopColor="rgba(255,165,0,0)" />
        </radialGradient>
      </defs>

      {/* Glow around flame */}
      <ellipse cx="30" cy="30" rx="25" ry="30" fill="url(#glowEffect)">
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
      <g filter="url(#flameGlow)">
        <path fill="url(#flameOuter)">
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
        <path fill="url(#flameInner)">
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
      <ellipse cx="30" cy="55" rx="20" ry="8" fill="url(#diyaBrass)" />
      <ellipse cx="30" cy="52" rx="15" ry="5" fill="#8B6914" />
      
      {/* Oil in diya */}
      <ellipse cx="30" cy="50" rx="12" ry="4" fill="#4A3000" />
      
      {/* Wick */}
      <rect x="28" y="42" width="4" height="10" fill="#2D1810" />
      
      {/* Diya edge decoration */}
      <ellipse cx="30" cy="55" rx="22" ry="9" fill="none" stroke="#FFD700" strokeWidth="1" />
      
      {/* Floating leaf base (for floating diyas) */}
      <ellipse cx="30" cy="65" rx="25" ry="10" fill="#228B22" opacity="0.8" />
      <path d="M10 65 Q30 55 50 65" fill="none" stroke="#006400" strokeWidth="1" />
    </svg>
  );
}
