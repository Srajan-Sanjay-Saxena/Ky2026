"use client";

export default function KashiVishwanathTemple({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Rich golden gradients */}
        <linearGradient id="goldRich" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0A0">
            <animate attributeName="stop-color" values="#FFF0A0;#FFFACD;#FFF0A0" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="75%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>

        <linearGradient id="goldBright" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="15%" stopColor="#FFE55C" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        <linearGradient id="goldDome" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="20%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="80%" stopColor="#CD9B1D" />
          <stop offset="100%" stopColor="#8B7500" />
        </linearGradient>

        <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700">
            <animate attributeName="stop-color" values="#FFD700;#FFFACD;#FFD700" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#FFFACD">
            <animate attributeName="stop-color" values="#FFFACD;#FFD700;#FFFACD" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        {/* Stone colors */}
        <linearGradient id="stoneBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4B896" />
          <stop offset="50%" stopColor="#C4A882" />
          <stop offset="100%" stopColor="#A08060" />
        </linearGradient>

        <linearGradient id="stonePillar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B89B7A" />
          <stop offset="50%" stopColor="#D4B896" />
          <stop offset="100%" stopColor="#B89B7A" />
        </linearGradient>

        <linearGradient id="stoneRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4846C" />
          <stop offset="100%" stopColor="#A06850" />
        </linearGradient>

        {/* Glow effects */}
        <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Shimmer sweep */}
        <linearGradient id="shimmerSweep" x1="-100%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          <animateTransform attributeName="gradientTransform" type="translate" values="-1 0;2 0" dur="4s" repeatCount="indefinite" />
        </linearGradient>
      </defs>

      {/* ===== TEMPLE BASE STRUCTURE ===== */}
      <g id="templeBase">
        {/* Main platform */}
        <rect x="20" y="480" width="460" height="120" fill="url(#stoneBase)" />
        
        {/* Red-orange decorative band */}
        <rect x="20" y="470" width="460" height="15" fill="url(#stoneRed)" />
        <rect x="20" y="540" width="460" height="8" fill="url(#stoneRed)" />
        
        {/* Arched colonnade */}
        <g fill="url(#stonePillar)">
          {/* Pillars */}
          <rect x="40" y="485" width="12" height="55" />
          <rect x="95" y="485" width="12" height="55" />
          <rect x="150" y="485" width="12" height="55" />
          <rect x="205" y="485" width="12" height="55" />
          <rect x="283" y="485" width="12" height="55" />
          <rect x="338" y="485" width="12" height="55" />
          <rect x="393" y="485" width="12" height="55" />
          <rect x="448" y="485" width="12" height="55" />
        </g>
        
        {/* Arches */}
        <g fill="none" stroke="#8B7355" strokeWidth="3">
          <path d="M46 485 Q73 455 100 485" />
          <path d="M101 485 Q128 455 155 485" />
          <path d="M156 485 Q183 455 210 485" />
          <path d="M289 485 Q316 455 343 485" />
          <path d="M344 485 Q371 455 398 485" />
          <path d="M399 485 Q426 455 453 485" />
        </g>
        
        {/* Dark arch interiors */}
        <g fill="#3D2817" opacity="0.7">
          <path d="M52 485 Q73 462 94 485 L94 540 L52 540 Z" />
          <path d="M107 485 Q128 462 149 485 L149 540 L107 540 Z" />
          <path d="M162 485 Q183 462 204 485 L204 540 L162 540 Z" />
          <path d="M295 485 Q316 462 337 485 L337 540 L295 540 Z" />
          <path d="M350 485 Q371 462 392 485 L392 540 L350 540 Z" />
          <path d="M405 485 Q426 462 447 485 L447 540 L405 540 Z" />
        </g>
      </g>

      {/* ===== CENTRAL GOLDEN DOME ===== */}
      <g id="centralDome" filter="url(#goldGlow)">
        {/* Dome base */}
        <rect x="190" y="380" width="120" height="90" fill="url(#stoneBase)" />
        <rect x="190" y="370" width="120" height="15" fill="url(#stoneRed)" />
        
        {/* Main dome */}
        <ellipse cx="250" cy="340" rx="55" ry="45" fill="url(#goldDome)" />
        <ellipse cx="250" cy="330" rx="45" ry="35" fill="url(#goldBright)" opacity="0.6" />
        
        {/* Dome ridges */}
        <g stroke="#B8860B" strokeWidth="1.5" fill="none" opacity="0.6">
          <path d="M200 350 Q250 300 300 350" />
          <path d="M210 355 Q250 315 290 355" />
          <path d="M220 358 Q250 325 280 358" />
        </g>
        
        {/* Dome top finial */}
        <ellipse cx="250" cy="298" rx="12" ry="8" fill="url(#goldShimmer)" />
        <path d="M245 298 Q242 288 246 278 L254 278 Q258 288 255 298" fill="url(#goldRich)" />
        <circle cx="250" cy="275" r="6" fill="#FFD700" />
        <line x1="250" y1="275" x2="250" y2="258" stroke="#FFD700" strokeWidth="3" />
        
        {/* Shimmer */}
        <ellipse cx="250" cy="340" rx="55" ry="45" fill="url(#shimmerSweep)" opacity="0.5" />
      </g>

      {/* ===== MAIN GOLDEN SHIKHARA (Tallest Spire) ===== */}
      <g id="mainShikhara" filter="url(#goldGlow)">
        {/* Spire base */}
        <rect x="85" y="350" width="80" height="120" fill="url(#stoneBase)" />
        <rect x="85" y="340" width="80" height="15" fill="url(#stoneRed)" />
        
        {/* Main spire */}
        <path 
          d="M90 340 
             Q80 280 88 220 
             Q95 160 108 100 
             Q118 50 125 15
             Q132 50 142 100
             Q155 160 162 220
             Q170 280 160 340
             Z" 
          fill="url(#goldBright)"
        />
        
        {/* Spire ridges */}
        <g stroke="#B8860B" strokeWidth="2" fill="none">
          <path d="M92 310 Q125 302 158 310" />
          <path d="M94 280 Q125 272 156 280" />
          <path d="M96 250 Q125 242 154 250" />
          <path d="M99 220 Q125 212 151 220" />
          <path d="M102 190 Q125 182 148 190" />
          <path d="M106 160 Q125 152 144 160" />
          <path d="M110 130 Q125 123 140 130" />
          <path d="M114 100 Q125 94 136 100" />
          <path d="M117 70 Q125 65 133 70" />
          <path d="M120 45 Q125 41 130 45" />
        </g>
        
        {/* Amalaka */}
        <ellipse cx="125" cy="20" rx="15" ry="8" fill="url(#goldShimmer)" />
        
        {/* Kalash */}
        <path d="M120 20 Q115 12 118 5 L132 5 Q135 12 130 20" fill="url(#goldRich)" />
        
        {/* Trishul */}
        <g stroke="#FFD700" strokeWidth="2.5" fill="none">
          <line x1="125" y1="5" x2="125" y2="-20" />
          <path d="M115 -12 L125 -25 L135 -12" />
          <line x1="115" y1="-12" x2="115" y2="-5" />
          <line x1="135" y1="-12" x2="135" y2="-5" />
        </g>
        
        {/* Flag */}
        <line x1="125" y1="-20" x2="125" y2="-45" stroke="#8B4513" strokeWidth="2" />
        <path fill="#FF6B00">
          <animate attributeName="d" values="M125 -45 Q145 -38 125 -28;M125 -45 Q150 -35 125 -28;M125 -45 Q145 -38 125 -28" dur="2s" repeatCount="indefinite" />
        </path>
        
        {/* Shimmer */}
        <path d="M90 340 Q80 280 88 220 Q95 160 108 100 Q118 50 125 15 Q132 50 142 100 Q155 160 162 220 Q170 280 160 340 Z" fill="url(#shimmerSweep)" opacity="0.4" />
      </g>

      {/* ===== RIGHT GOLDEN SHIKHARA ===== */}
      <g id="rightShikhara" filter="url(#goldGlow)">
        {/* Spire base */}
        <rect x="335" y="360" width="70" height="110" fill="url(#stoneBase)" />
        <rect x="335" y="350" width="70" height="15" fill="url(#stoneRed)" />
        
        {/* Spire */}
        <path 
          d="M340 350 
             Q332 300 338 240 
             Q345 180 355 130
             Q363 85 370 55
             Q377 85 385 130
             Q395 180 402 240
             Q408 300 400 350
             Z" 
          fill="url(#goldBright)"
        />
        
        {/* Ridges */}
        <g stroke="#B8860B" strokeWidth="1.5" fill="none">
          <path d="M342 320 Q370 314 398 320" />
          <path d="M344 290 Q370 284 396 290" />
          <path d="M347 260 Q370 254 393 260" />
          <path d="M350 230 Q370 224 390 230" />
          <path d="M354 200 Q370 194 386 200" />
          <path d="M358 170 Q370 165 382 170" />
          <path d="M362 140 Q370 135 378 140" />
          <path d="M365 110 Q370 106 375 110" />
        </g>
        
        {/* Top */}
        <ellipse cx="370" cy="58" rx="12" ry="6" fill="url(#goldShimmer)" />
        <path d="M366 58 Q362 50 365 42 L375 42 Q378 50 374 58" fill="url(#goldRich)" />
        <line x1="370" y1="42" x2="370" y2="25" stroke="#FFD700" strokeWidth="2" />
        
        {/* Shimmer */}
        <path d="M340 350 Q332 300 338 240 Q345 180 355 130 Q363 85 370 55 Q377 85 385 130 Q395 180 402 240 Q408 300 400 350 Z" fill="url(#shimmerSweep)" opacity="0.4" />
      </g>

      {/* ===== SMALL STONE SPIRE (Left) ===== */}
      <g id="stoneSpireLeft">
        <rect x="20" y="400" width="55" height="70" fill="url(#stoneBase)" />
        <path 
          d="M25 400 
             Q20 360 26 310 
             Q32 260 42 220
             Q48 190 52 165
             Q56 190 62 220
             Q72 260 78 310
             Q84 360 79 400
             Z" 
          fill="url(#stoneBase)"
        />
        <g stroke="#A08060" strokeWidth="1.5" fill="none">
          <path d="M28 370 Q52 365 76 370" />
          <path d="M30 340 Q52 335 74 340" />
          <path d="M33 310 Q52 305 71 310" />
          <path d="M36 280 Q52 275 68 280" />
          <path d="M40 250 Q52 246 64 250" />
          <path d="M44 220 Q52 216 60 220" />
        </g>
        <ellipse cx="52" cy="168" rx="10" ry="5" fill="url(#goldShimmer)" filter="url(#softGlow)" />
        <path d="M48 168 Q45 162 47 155 L57 155 Q59 162 56 168" fill="url(#goldRich)" />
      </g>

      {/* ===== SMALL STONE SPIRE (Right) ===== */}
      <g id="stoneSpireRight">
        <rect x="425" y="400" width="55" height="70" fill="url(#stoneBase)" />
        <path 
          d="M430 400 
             Q425 360 431 310 
             Q437 260 447 220
             Q453 190 457 165
             Q461 190 467 220
             Q477 260 483 310
             Q489 360 484 400
             Z" 
          fill="url(#stoneBase)"
        />
        <g stroke="#A08060" strokeWidth="1.5" fill="none">
          <path d="M433 370 Q457 365 481 370" />
          <path d="M435 340 Q457 335 479 340" />
          <path d="M438 310 Q457 305 476 310" />
          <path d="M441 280 Q457 275 473 280" />
          <path d="M445 250 Q457 246 469 250" />
          <path d="M449 220 Q457 216 465 220" />
        </g>
        <ellipse cx="457" cy="168" rx="10" ry="5" fill="url(#goldShimmer)" filter="url(#softGlow)" />
        <path d="M453 168 Q450 162 452 155 L462 155 Q464 162 461 168" fill="url(#goldRich)" />
      </g>

      {/* ===== DECORATIVE ELEMENTS ===== */}
      
      {/* Diyas/lights on temple */}
      <g>
        <circle cx="60" cy="465" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="125" cy="465" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="465" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="0.7s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="465" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="0.55s" repeatCount="indefinite" />
        </circle>
        <circle cx="440" cy="465" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.65s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bells */}
      <g fill="#D4A853">
        <ellipse cx="100" cy="445" rx="6" ry="10">
          <animate attributeName="transform" values="rotate(0 100 440);rotate(3 100 440);rotate(-3 100 440);rotate(0 100 440)" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="400" cy="445" rx="6" ry="10">
          <animate attributeName="transform" values="rotate(0 400 440);rotate(-3 400 440);rotate(3 400 440);rotate(0 400 440)" dur="2.2s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Om symbol */}
      <text x="250" y="430" textAnchor="middle" fill="#FFD700" fontSize="22" fontFamily="serif">ॐ</text>
    </svg>
  );
}
