"use client";

import { memo } from "react";

export const PilgrimBoat = memo(function PilgrimBoat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 130" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pilgrimWood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        <linearGradient id="canopyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#CC5500" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="130" cy="125" rx="110" ry="8" fill="rgba(0,0,0,0.2)" />

      {/* Main hull */}
      <path d="M10 70 Q0 70 5 95 L30 110 L230 110 L255 95 Q260 70 250 70 Z" fill="url(#pilgrimWood)" stroke="#3D2314" strokeWidth="2" />
      
      {/* Inner boat */}
      <path d="M22 75 Q15 75 18 90 L38 102 L222 102 L242 90 Q245 75 238 75 Z" fill="#A0522D" />

      {/* Boat planks */}
      <g stroke="#4A2508" strokeWidth="1.5">
        <line x1="60" y1="75" x2="55" y2="102" />
        <line x1="100" y1="75" x2="100" y2="102" />
        <line x1="140" y1="75" x2="140" y2="102" />
        <line x1="180" y1="75" x2="180" y2="102" />
        <line x1="220" y1="75" x2="225" y2="102" />
      </g>

      {/* Canopy frame */}
      <g stroke="#5D3A1A" strokeWidth="3">
        <line x1="50" y1="70" x2="50" y2="30" />
        <line x1="130" y1="70" x2="130" y2="25" />
        <line x1="210" y1="70" x2="210" y2="30" />
      </g>

      {/* Canopy */}
      <path d="M40 32 Q90 15 130 25 Q170 15 220 32 L220 38 Q170 22 130 32 Q90 22 40 38 Z" fill="url(#canopyGrad)" />
      <path d="M40 38 Q90 22 130 32 Q170 22 220 38" fill="none" stroke="#8B1538" strokeWidth="2" />
      
      {/* Canopy decorative edge */}
      <path d="M38 38 L42 45 L48 38 L54 45 L60 38 L66 45 L72 38 L78 45 L84 38 L90 45 L96 38 L102 45 L108 38 L114 45 L120 38 L126 45 L132 38 L138 45 L144 38 L150 45 L156 38 L162 45 L168 38 L174 45 L180 38 L186 45 L192 38 L198 45 L204 38 L210 45 L216 38 L222 45" fill="none" stroke="#FFD700" strokeWidth="1.5" />

      {/* Boatman at back */}
      <g transform="translate(235, 35)">
        <circle cx="0" cy="8" r="8" fill="#C49A6C" />
        <ellipse cx="0" cy="0" rx="10" ry="6" fill="#FF6B00" />
        <ellipse cx="0" cy="25" rx="10" ry="14" fill="#8B4513" />
        {/* Oar */}
        <line x1="8" y1="20" x2="35" y2="70" stroke="#5D3A1A" strokeWidth="4" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" values="0 8 20;15 8 20;0 8 20" dur="1.5s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Pilgrims - Row 1 */}
      <g>
        {/* Person 1 */}
        <circle cx="55" cy="48" r="7" fill="#D2B48C" />
        <ellipse cx="55" cy="62" rx="9" ry="12" fill="#FF6B00" />
        
        {/* Person 2 */}
        <circle cx="80" cy="50" r="6" fill="#C49A6C" />
        <ellipse cx="80" cy="63" rx="8" ry="11" fill="#8B1538" />
        
        {/* Person 3 */}
        <circle cx="105" cy="48" r="7" fill="#D2B48C" />
        <ellipse cx="105" cy="62" rx="9" ry="12" fill="#FFD700" />
        
        {/* Person 4 */}
        <circle cx="130" cy="50" r="6" fill="#C49A6C" />
        <ellipse cx="130" cy="63" rx="8" ry="11" fill="#FF6B00" />
        
        {/* Person 5 */}
        <circle cx="155" cy="48" r="7" fill="#D2B48C" />
        <ellipse cx="155" cy="62" rx="9" ry="12" fill="#8B1538" />
        
        {/* Person 6 */}
        <circle cx="180" cy="50" r="6" fill="#C49A6C" />
        <ellipse cx="180" cy="63" rx="8" ry="11" fill="#FFD700" />
        
        {/* Person 7 */}
        <circle cx="205" cy="48" r="7" fill="#D2B48C" />
        <ellipse cx="205" cy="62" rx="9" ry="12" fill="#FF6B00" />
      </g>

      {/* Offerings/flowers */}
      <g>
        <circle cx="70" cy="80" r="3" fill="#FF6B00" />
        <circle cx="120" cy="82" r="2.5" fill="#FFD700" />
        <circle cx="160" cy="80" r="3" fill="#FF69B4" />
      </g>

      {/* Decorative prow */}
      <path d="M10 70 Q-5 65 0 50 Q10 40 18 55 L15 70" fill="#5D3A1A" />
      <circle cx="5" cy="52" r="5" fill="#FFD700" />
      
      {/* Back decoration */}
      <circle cx="250" cy="72" r="4" fill="#FFD700" />
    </svg>
  );
});
