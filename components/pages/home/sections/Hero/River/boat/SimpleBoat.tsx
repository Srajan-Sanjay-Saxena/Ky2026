"use client";

import { memo } from "react";

export const SimpleBoat = memo(function SimpleBoat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rowBoatWood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#4A2F17" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="80" cy="85" rx="65" ry="6" fill="rgba(0,0,0,0.2)" />

      {/* Hull */}
      <path d="M10 50 Q2 50 5 68 L25 78 L135 78 L155 68 Q158 50 150 50 Z" fill="url(#rowBoatWood)" stroke="#2D1810" strokeWidth="2" />
      
      {/* Inner */}
      <path d="M18 54 Q12 54 15 66 L32 74 L128 74 L145 66 Q148 54 142 54 Z" fill="#8B5A2B" />

      {/* Planks */}
      <g stroke="#3D2314" strokeWidth="1">
        <line x1="50" y1="54" x2="48" y2="74" />
        <line x1="80" y1="54" x2="80" y2="74" />
        <line x1="110" y1="54" x2="112" y2="74" />
      </g>

      {/* Rower */}
      <g transform="translate(115, 25)">
        <circle cx="0" cy="8" r="7" fill="#C49A6C" />
        <ellipse cx="0" cy="0" rx="8" ry="5" fill="#5D3A1A" />
        <ellipse cx="0" cy="22" rx="8" ry="12" fill="#8B4513" />
        
        {/* Oars */}
        <g>
          <line x1="-8" y1="18" x2="-35" y2="55" stroke="#4A2508" strokeWidth="3" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 -8 18;-20 -8 18;0 -8 18" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="8" y1="18" x2="35" y2="55" stroke="#4A2508" strokeWidth="3" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 8 18;20 8 18;0 8 18" dur="1.2s" repeatCount="indefinite" />
          </line>
        </g>
      </g>

      {/* Passenger */}
      <g transform="translate(55, 30)">
        <circle cx="0" cy="8" r="6" fill="#D2B48C" />
        <ellipse cx="0" cy="22" rx="7" ry="10" fill="#FF6B00" />
      </g>

      {/* Prow */}
      <path d="M10 50 Q0 45 3 38 Q10 32 15 42 L12 50" fill="#4A2F17" />
      <circle cx="5" cy="40" r="3" fill="#FFD700" />
    </svg>
  );
});
