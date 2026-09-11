"use client";

export default function LampPost({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lampPostMetal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2D2D2D" />
          <stop offset="30%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#5A5A5A" />
          <stop offset="70%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#2D2D2D" />
        </linearGradient>

        <linearGradient id="lampGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="50%" stopColor="#FFE4B5" />
          <stop offset="100%" stopColor="#DEB887" />
        </linearGradient>

        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,200,100,0.9)" />
          <stop offset="50%" stopColor="rgba(255,165,0,0.4)" />
          <stop offset="100%" stopColor="rgba(255,165,0,0)" />
        </radialGradient>

        <filter id="lampLight" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Lamp glow */}
      <ellipse cx="50" cy="60" rx="40" ry="50" fill="url(#lampGlow)" filter="url(#lampLight)">
        <animate attributeName="rx" values="38;42;38" dur="2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="48;52;48" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Lamp housing top */}
      <path d="M30 30 L35 15 L65 15 L70 30" fill="url(#lampPostMetal)" />
      <rect x="33" y="10" width="34" height="8" fill="url(#lampPostMetal)" />
      
      {/* Decorative top */}
      <path d="M45 10 L50 0 L55 10" fill="url(#lampPostMetal)" />

      {/* Lamp glass housing */}
      <path 
        d="M32 30 Q30 50 35 70 L65 70 Q70 50 68 30 Z" 
        fill="url(#lampGlass)"
        opacity="0.9"
      />
      
      {/* Flame inside */}
      <g filter="url(#lampLight)">
        <path fill="#FF6B00">
          <animate
            attributeName="d"
            values="M50 40 Q55 50 52 60 Q50 65 48 60 Q45 50 50 40;M50 38 Q57 48 53 60 Q50 67 47 60 Q43 48 50 38;M50 42 Q54 52 51 60 Q50 63 49 60 Q46 52 50 42;M50 40 Q55 50 52 60 Q50 65 48 60 Q45 50 50 40"
            dur="0.4s"
            repeatCount="indefinite"
          />
        </path>
        <path fill="#FFD700" opacity="0.8">
          <animate
            attributeName="d"
            values="M50 48 Q52 54 51 60 Q50 62 49 60 Q48 54 50 48;M50 46 Q53 53 51 60 Q50 63 49 60 Q47 53 50 46;M50 50 Q51 55 50 60 Q50 61 50 60 Q49 55 50 50;M50 48 Q52 54 51 60 Q50 62 49 60 Q48 54 50 48"
            dur="0.35s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Lamp housing bottom */}
      <rect x="30" y="70" width="40" height="8" fill="url(#lampPostMetal)" rx="2" />
      
      {/* Decorative bracket */}
      <path d="M45 78 Q50 85 50 95" fill="none" stroke="url(#lampPostMetal)" strokeWidth="6" />
      
      {/* Main post */}
      <rect x="45" y="95" width="10" height="280" fill="url(#lampPostMetal)" />
      
      {/* Decorative rings on post */}
      <ellipse cx="50" cy="120" rx="8" ry="3" fill="#3D3D3D" />
      <ellipse cx="50" cy="200" rx="8" ry="3" fill="#3D3D3D" />
      <ellipse cx="50" cy="280" rx="8" ry="3" fill="#3D3D3D" />
      
      {/* Base */}
      <ellipse cx="50" cy="375" rx="20" ry="8" fill="url(#lampPostMetal)" />
      <ellipse cx="50" cy="385" rx="25" ry="10" fill="#2D2D2D" />
      <ellipse cx="50" cy="395" rx="30" ry="12" fill="#1A1A1A" />
    </svg>
  );
}
