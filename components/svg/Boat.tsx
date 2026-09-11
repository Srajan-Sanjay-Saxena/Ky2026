"use client";

export default function Boat({ className = "", variant = "default" }: { className?: string; variant?: "default" | "small" | "large" }) {
  const scale = variant === "small" ? 0.7 : variant === "large" ? 1.3 : 1;
  
  return (
    <svg
      viewBox="0 0 220 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${scale})` }}
    >
      <defs>
        <linearGradient id="boatWoodDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#6B3410" />
          <stop offset="100%" stopColor="#4A2508" />
        </linearGradient>
        
        <linearGradient id="boatWoodLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>

        <linearGradient id="clothGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="100%" stopColor="#CC5500" />
        </linearGradient>
      </defs>

      {/* Boat shadow/reflection */}
      <ellipse cx="110" cy="115" rx="90" ry="8" fill="rgba(0,0,0,0.2)" />

      {/* Main boat body */}
      <path 
        d="M15 60 Q5 60 10 85 L35 100 L185 100 L210 85 Q215 60 205 60 Z" 
        fill="url(#boatWoodDark)"
        stroke="#3D2314"
        strokeWidth="2"
      />
      
      {/* Boat inner */}
      <path 
        d="M25 65 Q18 65 22 82 L42 92 L178 92 L198 82 Q202 65 195 65 Z" 
        fill="url(#boatWoodLight)"
      />
      
      {/* Boat ribs/planks */}
      <g stroke="#5D3A1A" strokeWidth="2">
        <line x1="55" y1="65" x2="50" y2="92" />
        <line x1="90" y1="65" x2="90" y2="92" />
        <line x1="130" y1="65" x2="130" y2="92" />
        <line x1="165" y1="65" x2="170" y2="92" />
      </g>

      {/* Decorative boat front (curved prow) */}
      <path d="M10 60 Q0 55 5 45 Q12 38 18 50 Q15 55 15 60" fill="#6B3410" />
      <circle cx="8" cy="48" r="3" fill="#FFD700" />

      {/* Boat back decoration */}
      <path d="M205 60 Q210 55 208 50 Q205 45 200 50 Q202 55 205 60" fill="#6B3410" />

      {/* Boatman */}
      <g id="boatman" transform="translate(175, 25)">
        {/* Body */}
        <ellipse cx="0" cy="25" rx="12" ry="18" fill="url(#clothGradient)" />
        
        {/* Head */}
        <circle cx="0" cy="5" r="10" fill="#C49A6C" />
        
        {/* Turban */}
        <ellipse cx="0" cy="-2" rx="12" ry="8" fill="#FF6B00" />
        <path d="M-8 -5 Q0 -12 8 -5" fill="#CC5500" />
        
        {/* Face details */}
        <circle cx="-3" cy="3" r="1.5" fill="#3D2314" />
        <circle cx="3" cy="3" r="1.5" fill="#3D2314" />
        <path d="M-2 8 Q0 10 2 8" fill="none" stroke="#8B5A3C" strokeWidth="1" />

        {/* Arms */}
        <path d="M-10 20 Q-20 25 -15 35" fill="none" stroke="#C49A6C" strokeWidth="6" strokeLinecap="round" />
        <path d="M10 20 Q25 15 30 30" fill="none" stroke="#C49A6C" strokeWidth="6" strokeLinecap="round" />
        
        {/* Oar */}
        <g>
          <line x1="25" y1="25" x2="45" y2="75" stroke="#5D3A1A" strokeWidth="4" strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 25;12 25 25;0 25 25"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <ellipse cx="47" cy="80" rx="12" ry="5" fill="#4A2508" transform="rotate(25 47 80)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 25;12 25 25;0 25 25"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </g>

      {/* Passengers (silhouettes) */}
      <g fill="#8B5A3C">
        <ellipse cx="60" cy="50" rx="8" ry="12" />
        <circle cx="60" cy="35" r="6" />
        
        <ellipse cx="90" cy="52" rx="7" ry="10" />
        <circle cx="90" cy="38" r="5" />
        
        <ellipse cx="115" cy="50" rx="8" ry="12" />
        <circle cx="115" cy="35" r="6" />
      </g>

      {/* Cloth/covering in boat */}
      <path d="M45 55 Q70 45 95 55 Q120 45 145 55" fill="none" stroke="#8B1538" strokeWidth="3" />

      {/* Decorative elements */}
      <circle cx="20" cy="65" r="4" fill="#FFD700" />
      <circle cx="200" cy="65" r="4" fill="#FFD700" />

      {/* Flowers/offerings in boat */}
      <g>
        <circle cx="75" cy="70" r="3" fill="#FF6B00" />
        <circle cx="82" cy="72" r="2" fill="#FFD700" />
        <circle cx="78" cy="75" r="2.5" fill="#FF6B00" />
      </g>
    </svg>
  );
}
