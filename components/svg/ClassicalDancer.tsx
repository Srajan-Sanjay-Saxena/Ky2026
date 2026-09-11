"use client";

export default function ClassicalDancer({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sareeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B1538" />
          <stop offset="50%" stopColor="#A91B4D" />
          <stop offset="100%" stopColor="#8B1538" />
        </linearGradient>
        
        <linearGradient id="blouseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        
        <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#C49A6C" />
        </linearGradient>
      </defs>

      {/* Ghungroo (ankle bells) glow */}
      <g opacity="0.5">
        <circle cx="100" cy="470" r="15" fill="#FFD700">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="450" r="15" fill="#FFD700">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Left leg */}
      <path d="M90 380 Q85 420 100 470" fill="none" stroke="url(#skinTone)" strokeWidth="20" strokeLinecap="round" />
      
      {/* Right leg - bent in dance pose */}
      <path d="M160 350 Q200 380 200 450" fill="none" stroke="url(#skinTone)" strokeWidth="20" strokeLinecap="round" />
      
      {/* Ghungroo bands */}
      <ellipse cx="100" cy="465" rx="15" ry="8" fill="#FFD700" />
      <ellipse cx="200" cy="445" rx="15" ry="8" fill="#FFD700" />
      
      {/* Feet */}
      <ellipse cx="100" cy="480" rx="20" ry="10" fill="url(#skinTone)" />
      <ellipse cx="200" cy="460" rx="20" ry="10" fill="url(#skinTone)" transform="rotate(-20 200 460)" />

      {/* Saree lower part */}
      <path 
        d="M70 280 Q60 350 90 380 Q120 400 160 350 Q180 320 200 350 L220 280 Q150 300 70 280" 
        fill="url(#sareeGradient)"
      />
      
      {/* Saree pleats */}
      <path d="M100 300 Q95 340 100 380" fill="none" stroke="#6B0F2A" strokeWidth="1" opacity="0.5" />
      <path d="M120 295 Q115 340 125 375" fill="none" stroke="#6B0F2A" strokeWidth="1" opacity="0.5" />
      <path d="M140 290 Q138 335 145 365" fill="none" stroke="#6B0F2A" strokeWidth="1" opacity="0.5" />

      {/* Torso/Blouse */}
      <path 
        d="M100 180 Q90 220 95 280 L175 280 Q180 220 170 180 Z" 
        fill="url(#blouseGradient)"
      />
      
      {/* Saree pallu (drape) */}
      <path 
        d="M95 200 Q60 220 40 300 Q35 350 50 380" 
        fill="url(#sareeGradient)"
        opacity="0.9"
      />
      <path 
        d="M95 200 Q70 215 50 280" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="5,5"
      />

      {/* Left arm - extended in mudra */}
      <path d="M95 200 Q50 180 30 220" fill="none" stroke="url(#skinTone)" strokeWidth="15" strokeLinecap="round" />
      
      {/* Left hand - Alapadma mudra */}
      <g transform="translate(20, 220)">
        <circle cx="0" cy="0" r="12" fill="url(#skinTone)" />
        {/* Fingers spread */}
        <line x1="-5" y1="0" x2="-20" y2="-10" stroke="url(#skinTone)" strokeWidth="4" strokeLinecap="round" />
        <line x1="-3" y1="-5" x2="-15" y2="-20" stroke="url(#skinTone)" strokeWidth="4" strokeLinecap="round" />
        <line x1="2" y1="-8" x2="5" y2="-25" stroke="url(#skinTone)" strokeWidth="4" strokeLinecap="round" />
        <line x1="7" y1="-5" x2="20" y2="-15" stroke="url(#skinTone)" strokeWidth="4" strokeLinecap="round" />
        <line x1="10" y1="0" x2="22" y2="5" stroke="url(#skinTone)" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Right arm - bent near face */}
      <path d="M175 200 Q220 180 240 140" fill="none" stroke="url(#skinTone)" strokeWidth="15" strokeLinecap="round" />
      
      {/* Right hand - Katakamukha mudra */}
      <g transform="translate(245, 130)">
        <circle cx="0" cy="0" r="10" fill="url(#skinTone)" />
        <path d="M-5 -5 Q0 -15 5 -5" fill="none" stroke="url(#skinTone)" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="-8" x2="0" y2="-18" stroke="url(#skinTone)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Neck */}
      <rect x="120" y="150" width="30" height="35" fill="url(#skinTone)" />
      
      {/* Head */}
      <ellipse cx="135" cy="120" rx="40" ry="50" fill="url(#skinTone)" />
      
      {/* Hair */}
      <ellipse cx="135" cy="90" rx="45" ry="40" fill="#1A1A1A" />
      <path d="M90 100 Q135 60 180 100" fill="#1A1A1A" />
      
      {/* Hair bun with flowers */}
      <circle cx="135" cy="55" r="25" fill="#1A1A1A" />
      <g transform="translate(135, 55)">
        {/* Gajra (flower garland) */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={25 * Math.cos(i * 45 * Math.PI / 180)}
            cy={25 * Math.sin(i * 45 * Math.PI / 180)}
            r="6"
            fill="white"
          />
        ))}
        <circle cx="0" cy="-30" r="8" fill="#FF6B00" /> {/* Center flower */}
      </g>

      {/* Face details */}
      {/* Eyes */}
      <ellipse cx="120" cy="115" rx="8" ry="5" fill="white" />
      <ellipse cx="150" cy="115" rx="8" ry="5" fill="white" />
      <circle cx="120" cy="115" r="3" fill="#2D1810" />
      <circle cx="150" cy="115" r="3" fill="#2D1810" />
      
      {/* Eyebrows */}
      <path d="M108 105 Q120 100 132 105" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M138 105 Q150 100 162 105" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      
      {/* Bindi */}
      <circle cx="135" cy="95" r="5" fill="#8B1538" />
      
      {/* Nose */}
      <path d="M135 115 Q140 125 135 130" fill="none" stroke="#B8956C" strokeWidth="2" />
      {/* Nose ring */}
      <circle cx="138" cy="128" r="4" fill="none" stroke="#FFD700" strokeWidth="2" />
      
      {/* Lips */}
      <path d="M125 140 Q135 145 145 140" fill="#C44569" />
      
      {/* Earrings */}
      <circle cx="95" cy="125" r="8" fill="#FFD700" />
      <circle cx="95" cy="140" r="6" fill="#8B1538" />
      <circle cx="175" cy="125" r="8" fill="#FFD700" />
      <circle cx="175" cy="140" r="6" fill="#8B1538" />
      
      {/* Necklace */}
      <path d="M105 165 Q135 185 165 165" fill="none" stroke="#FFD700" strokeWidth="4" />
      <circle cx="135" cy="180" r="8" fill="#8B1538" stroke="#FFD700" strokeWidth="2" />
      
      {/* Maang tikka */}
      <line x1="135" y1="70" x2="135" y2="90" stroke="#FFD700" strokeWidth="2" />
      <circle cx="135" cy="90" r="4" fill="#FFD700" />

      {/* Bangles on left arm */}
      <g transform="translate(35, 210)">
        <ellipse cx="0" cy="0" rx="12" ry="6" fill="none" stroke="#FFD700" strokeWidth="3" />
        <ellipse cx="0" cy="8" rx="12" ry="6" fill="none" stroke="#8B1538" strokeWidth="3" />
        <ellipse cx="0" cy="16" rx="12" ry="6" fill="none" stroke="#FFD700" strokeWidth="3" />
      </g>

      {/* Bangles on right arm */}
      <g transform="translate(235, 145) rotate(-30)">
        <ellipse cx="0" cy="0" rx="10" ry="5" fill="none" stroke="#FFD700" strokeWidth="3" />
        <ellipse cx="0" cy="7" rx="10" ry="5" fill="none" stroke="#8B1538" strokeWidth="3" />
        <ellipse cx="0" cy="14" rx="10" ry="5" fill="none" stroke="#FFD700" strokeWidth="3" />
      </g>
    </svg>
  );
}
