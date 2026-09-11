"use client";

export default function Steamer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 140" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="steamerHull" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A3728" />
          <stop offset="100%" stopColor="#2D1F14" />
        </linearGradient>
        <linearGradient id="steamerCabin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        <linearGradient id="steamerRoof" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B1538" />
          <stop offset="100%" stopColor="#5C0D24" />
        </linearGradient>
      </defs>

      {/* Water reflection */}
      <ellipse cx="140" cy="135" rx="120" ry="8" fill="rgba(0,0,0,0.15)" />

      {/* Hull */}
      <path d="M10 85 Q0 85 5 105 L30 120 L250 120 L275 105 Q280 85 270 85 Z" fill="url(#steamerHull)" stroke="#1A0F0A" strokeWidth="2" />
      
      {/* Hull stripe */}
      <path d="M20 95 L260 95" stroke="#FFD700" strokeWidth="2" />

      {/* Main deck */}
      <rect x="25" y="70" width="230" height="18" fill="#5D4037" rx="2" />

      {/* Cabin */}
      <rect x="60" y="35" width="160" height="38" fill="url(#steamerCabin)" rx="3" />
      
      {/* Cabin windows */}
      <g fill="#1A1A2E">
        <rect x="75" y="45" width="18" height="18" rx="2" />
        <rect x="105" y="45" width="18" height="18" rx="2" />
        <rect x="135" y="45" width="18" height="18" rx="2" />
        <rect x="165" y="45" width="18" height="18" rx="2" />
        <rect x="195" y="45" width="18" height="18" rx="2" />
      </g>
      
      {/* Window glow */}
      <g fill="#FFD700" opacity="0.4">
        <rect x="77" y="47" width="14" height="14" rx="1">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="137" y="47" width="14" height="14" rx="1">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="197" y="47" width="14" height="14" rx="1">
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="1.8s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Roof */}
      <path d="M55 35 L65 20 L215 20 L225 35 Z" fill="url(#steamerRoof)" />
      <rect x="65" y="18" width="150" height="5" fill="#5C0D24" />

      {/* Chimney */}
      <rect x="170" y="-5" width="20" height="28" fill="#2D1F14" />
      <ellipse cx="180" cy="-5" rx="12" ry="4" fill="#1A0F0A" />
      
      {/* Smoke */}
      <g fill="#666" opacity="0.5">
        <circle cx="180" cy="-15" r="6">
          <animate attributeName="cy" values="-15;-40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="6;12" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="183" cy="-12" r="5">
          <animate attributeName="cy" values="-12;-35" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="r" values="5;10" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </g>

      {/* Front decoration */}
      <path d="M10 85 Q-5 80 0 70 Q10 60 20 75 L15 85" fill="#4A3728" />
      <circle cx="5" cy="72" r="4" fill="#FFD700" />

      {/* Railing */}
      <g stroke="#8B7355" strokeWidth="1.5" fill="none">
        <path d="M30 70 L30 60 M50 70 L50 60 M230 70 L230 60 M250 70 L250 60" />
        <path d="M28 62 L252 62" />
      </g>

      {/* People on deck */}
      <g>
        <circle cx="40" cy="58" r="4" fill="#C49A6C" />
        <ellipse cx="40" cy="66" rx="5" ry="6" fill="#FF6B00" />
        
        <circle cx="245" cy="58" r="4" fill="#C49A6C" />
        <ellipse cx="245" cy="66" rx="5" ry="6" fill="#8B1538" />
      </g>

      {/* Flag */}
      <line x1="140" y1="20" x2="140" y2="-5" stroke="#5D4037" strokeWidth="2" />
      <path d="M140 -5 L160 0 L140 5 Z" fill="#FF6B00">
        <animateTransform attributeName="transform" type="rotate" values="0 140 0;5 140 0;0 140 0;-3 140 0;0 140 0" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
