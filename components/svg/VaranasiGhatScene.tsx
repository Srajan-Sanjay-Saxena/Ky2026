"use client";

export default function VaranasiGhatScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        {/* Golden temple gradients - vibrant */}
        <linearGradient id="goldVibrant" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8B0">
            <animate attributeName="stop-color" values="#FFF8B0;#FFFACD;#FFF8B0" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="60%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        <linearGradient id="goldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#CD853F" />
        </linearGradient>

        <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700">
            <animate attributeName="stop-color" values="#FFD700;#FFFACD;#FFD700" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#FFFACD">
            <animate attributeName="stop-color" values="#FFFACD;#FFD700;#FFFACD" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        {/* Building colors - warm Varanasi palette */}
        <linearGradient id="buildingPink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8B4A8" />
          <stop offset="100%" stopColor="#D49888" />
        </linearGradient>

        <linearGradient id="buildingOrange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C4A0" />
          <stop offset="100%" stopColor="#D4A878" />
        </linearGradient>

        <linearGradient id="buildingCream" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#E8D4B8" />
        </linearGradient>

        <linearGradient id="buildingRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C85A4A" />
          <stop offset="100%" stopColor="#A84838" />
        </linearGradient>

        <linearGradient id="stoneStep" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="100%" stopColor="#C4A882" />
        </linearGradient>

        <linearGradient id="stoneShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4A882" />
          <stop offset="100%" stopColor="#A08060" />
        </linearGradient>

        {/* Glow filters */}
        <filter id="templeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="12" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Shimmer effect */}
        <linearGradient id="shimmer" x1="-100%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          <animateTransform attributeName="gradientTransform" type="translate" values="-1 0;2 0" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>

      {/* ========== LEFT SIDE BUILDINGS ========== */}
      
      {/* Far left tall building */}
      <g id="building1">
        <rect x="0" y="120" width="100" height="280" fill="url(#buildingPink)" />
        <rect x="10" y="140" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="40" y="140" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="70" y="140" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="10" y="190" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="40" y="190" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="70" y="190" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="10" y="240" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="40" y="240" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="70" y="240" width="20" height="30" fill="#5D4037" rx="2" />
      </g>

      {/* Second building - cream with small dome */}
      <g id="building2">
        <rect x="105" y="100" width="90" height="300" fill="url(#buildingCream)" />
        <ellipse cx="150" cy="100" rx="25" ry="12" fill="#DAA520" />
        <rect x="115" y="130" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="140" y="130" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="165" y="130" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="115" y="175" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="140" y="175" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="165" y="175" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="0" y="225" width="195" height="8" fill="#C4A882" />
      </g>

      {/* Third building - orange/terracotta */}
      <g id="building3">
        <rect x="200" y="130" width="85" height="270" fill="url(#buildingOrange)" />
        <rect x="210" y="150" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="235" y="150" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="260" y="150" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="210" y="195" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="235" y="195" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="260" y="195" width="16" height="24" fill="#5D4037" rx="2" />
      </g>

      {/* Small red temple structure */}
      <g id="smallTemple1">
        <rect x="290" y="180" width="70" height="220" fill="url(#buildingRed)" />
        <path d="M290 180 L325 130 L360 180" fill="#8B3A3A" />
        <ellipse cx="325" cy="132" rx="12" ry="6" fill="#FFD700" filter="url(#templeGlow)" />
        <rect x="305" y="280" width="30" height="120" fill="#3D2817" />
      </g>

      {/* ========== MAIN KASHI VISHWANATH TEMPLE (CENTER-RIGHT) ========== */}
      
      {/* Temple base platform */}
      <g id="templeBase">
        <rect x="365" y="320" width="350" height="80" fill="url(#buildingCream)" />
        <rect x="375" y="310" width="330" height="15" fill="#D4A878" />
        
        {/* Decorative arches on base */}
        <g fill="none" stroke="#8B7355" strokeWidth="2">
          <path d="M390 400 Q420 370 450 400" />
          <path d="M450 400 Q480 370 510 400" />
          <path d="M510 400 Q540 370 570 400" />
          <path d="M570 400 Q600 370 630 400" />
          <path d="M630 400 Q660 370 690 400" />
        </g>
      </g>

      {/* Main Golden Shikhara (Central Spire) */}
      <g id="mainShikhara" filter="url(#strongGlow)">
        <path 
          d="M480 310 
             Q465 260 470 200 
             Q478 140 490 90 
             Q500 50 510 20
             Q520 50 530 90
             Q542 140 550 200
             Q555 260 540 310
             Z" 
          fill="url(#goldGlow)"
        />
        
        {/* Horizontal ridges */}
        <g stroke="#B8860B" strokeWidth="2" fill="none">
          <path d="M472 280 Q510 272 548 280" />
          <path d="M475 250 Q510 242 545 250" />
          <path d="M478 220 Q510 212 542 220" />
          <path d="M482 190 Q510 182 538 190" />
          <path d="M486 160 Q510 152 534 160" />
          <path d="M490 130 Q510 122 530 130" />
          <path d="M495 100 Q510 94 525 100" />
          <path d="M500 70 Q510 65 520 70" />
        </g>

        {/* Amalaka */}
        <ellipse cx="510" cy="25" rx="18" ry="9" fill="url(#goldShine)" />
        
        {/* Kalash */}
        <path d="M504 25 Q498 18 502 8 L518 8 Q522 18 516 25" fill="url(#goldVibrant)" />
        
        {/* Trishul */}
        <g stroke="#FFD700" strokeWidth="3" fill="none">
          <line x1="510" y1="8" x2="510" y2="-20" />
          <path d="M498 -12 L510 -25 L522 -12" />
        </g>

        {/* Shimmer overlay */}
        <path d="M480 310 Q465 260 470 200 Q478 140 490 90 Q500 50 510 20 Q520 50 530 90 Q542 140 550 200 Q555 260 540 310 Z" fill="url(#shimmer)" />
      </g>

      {/* Left Golden Spire */}
      <g id="leftSpire" filter="url(#templeGlow)">
        <path 
          d="M400 310 
             Q388 270 392 220 
             Q398 170 408 130
             Q415 100 422 75
             Q429 100 436 130
             Q446 170 452 220
             Q456 270 444 310
             Z" 
          fill="url(#goldGlow)"
        />
        <g stroke="#B8860B" strokeWidth="1.5" fill="none">
          <path d="M394 280 Q422 274 450 280" />
          <path d="M397 250 Q422 244 447 250" />
          <path d="M400 220 Q422 214 444 220" />
          <path d="M404 190 Q422 184 440 190" />
          <path d="M408 160 Q422 154 436 160" />
          <path d="M412 130 Q422 125 432 130" />
        </g>
        <ellipse cx="422" cy="78" rx="12" ry="6" fill="url(#goldShine)" />
        <path d="M418 78 Q414 72 416 65 L428 65 Q430 72 426 78" fill="url(#goldVibrant)" />
      </g>

      {/* Right Golden Spire */}
      <g id="rightSpire" filter="url(#templeGlow)">
        <path 
          d="M576 310 
             Q564 270 568 220 
             Q574 170 584 130
             Q591 100 598 75
             Q605 100 612 130
             Q622 170 628 220
             Q632 270 620 310
             Z" 
          fill="url(#goldGlow)"
        />
        <g stroke="#B8860B" strokeWidth="1.5" fill="none">
          <path d="M570 280 Q598 274 626 280" />
          <path d="M573 250 Q598 244 623 250" />
          <path d="M576 220 Q598 214 620 220" />
          <path d="M580 190 Q598 184 616 190" />
          <path d="M584 160 Q598 154 612 160" />
          <path d="M588 130 Q598 125 608 130" />
        </g>
        <ellipse cx="598" cy="78" rx="12" ry="6" fill="url(#goldShine)" />
        <path d="M594 78 Q590 72 592 65 L604 65 Q606 72 602 78" fill="url(#goldVibrant)" />
      </g>

      {/* Golden Dome (between spires) */}
      <g id="goldenDome" filter="url(#templeGlow)">
        <ellipse cx="510" cy="300" rx="35" ry="25" fill="url(#goldVibrant)" />
        <ellipse cx="510" cy="295" rx="28" ry="18" fill="url(#goldShine)" />
        <circle cx="510" cy="275" r="8" fill="#FFD700" />
      </g>

      {/* Small side domes */}
      <ellipse cx="390" cy="305" rx="18" ry="12" fill="url(#goldVibrant)" filter="url(#templeGlow)" />
      <ellipse cx="630" cy="305" rx="18" ry="12" fill="url(#goldVibrant)" filter="url(#templeGlow)" />

      {/* ========== RIGHT SIDE BUILDINGS ========== */}
      
      <g id="building4">
        <rect x="720" y="150" width="100" height="250" fill="url(#buildingPink)" />
        <rect x="730" y="170" width="20" height="28" fill="#5D4037" rx="2" />
        <rect x="760" y="170" width="20" height="28" fill="#5D4037" rx="2" />
        <rect x="790" y="170" width="20" height="28" fill="#5D4037" rx="2" />
        <rect x="730" y="215" width="20" height="28" fill="#5D4037" rx="2" />
        <rect x="760" y="215" width="20" height="28" fill="#5D4037" rx="2" />
        <rect x="790" y="215" width="20" height="28" fill="#5D4037" rx="2" />
      </g>

      <g id="building5">
        <rect x="825" y="130" width="90" height="270" fill="url(#buildingOrange)" />
        <rect x="835" y="150" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="860" y="150" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="885" y="150" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="835" y="195" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="860" y="195" width="18" height="25" fill="#5D4037" rx="2" />
        <rect x="885" y="195" width="18" height="25" fill="#5D4037" rx="2" />
      </g>

      <g id="building6">
        <rect x="920" y="140" width="85" height="260" fill="url(#buildingCream)" />
        <rect x="930" y="160" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="955" y="160" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="980" y="160" width="16" height="24" fill="#5D4037" rx="2" />
      </g>

      <g id="building7">
        <rect x="1010" y="120" width="100" height="280" fill="url(#buildingPink)" />
        <rect x="1020" y="140" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="1050" y="140" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="1080" y="140" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="1020" y="190" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="1050" y="190" width="20" height="30" fill="#5D4037" rx="2" />
        <rect x="1080" y="190" width="20" height="30" fill="#5D4037" rx="2" />
      </g>

      <g id="building8">
        <rect x="1115" y="135" width="85" height="265" fill="url(#buildingOrange)" />
        <rect x="1125" y="155" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="1150" y="155" width="16" height="24" fill="#5D4037" rx="2" />
        <rect x="1175" y="155" width="16" height="24" fill="#5D4037" rx="2" />
      </g>

      {/* ========== GHAT STEPS ========== */}
      <g id="ghatSteps">
        <rect x="0" y="400" width="1200" height="25" fill="url(#stoneStep)" />
        <rect x="0" y="425" width="1200" height="25" fill="url(#stoneShadow)" />
        <rect x="0" y="450" width="1200" height="25" fill="url(#stoneStep)" />
        <rect x="0" y="475" width="1200" height="25" fill="url(#stoneShadow)" />
        <rect x="0" y="500" width="1200" height="25" fill="url(#stoneStep)" />
        <rect x="0" y="525" width="1200" height="25" fill="url(#stoneShadow)" />
        <rect x="0" y="550" width="1200" height="50" fill="url(#stoneStep)" />
        
        {/* Step lines */}
        <g stroke="#8B7355" strokeWidth="1" opacity="0.5">
          <line x1="0" y1="425" x2="1200" y2="425" />
          <line x1="0" y1="475" x2="1200" y2="475" />
          <line x1="0" y1="525" x2="1200" y2="525" />
        </g>
      </g>

      {/* ========== UMBRELLAS ========== */}
      <g id="umbrellas">
        <g transform="translate(150, 380)">
          <line x1="0" y1="0" x2="0" y2="30" stroke="#5D4037" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="30" ry="10" fill="#FF6B00" />
        </g>
        <g transform="translate(850, 385)">
          <line x1="0" y1="0" x2="0" y2="28" stroke="#5D4037" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="28" ry="9" fill="#8B1538" />
        </g>
        <g transform="translate(1050, 382)">
          <line x1="0" y1="0" x2="0" y2="30" stroke="#5D4037" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="32" ry="11" fill="#DAA520" />
        </g>
      </g>

      {/* ========== FLAGS ========== */}
      <g id="flags">
        <g transform="translate(100, 100)">
          <line x1="0" y1="0" x2="0" y2="50" stroke="#5D4037" strokeWidth="3" />
          <path fill="#FF6B00">
            <animate attributeName="d" values="M0 0 Q20 10 0 25;M0 0 Q25 12 0 25;M0 0 Q20 10 0 25" dur="2s" repeatCount="indefinite" />
          </path>
        </g>
        <g transform="translate(950, 120)">
          <line x1="0" y1="0" x2="0" y2="45" stroke="#5D4037" strokeWidth="3" />
          <path fill="#FF6B00">
            <animate attributeName="d" values="M0 0 Q18 8 0 22;M0 0 Q22 10 0 22;M0 0 Q18 8 0 22" dur="1.8s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      {/* ========== DIYAS ON STEPS ========== */}
      <g id="diyas">
        <circle cx="200" cy="490" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="515" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="490" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="515" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="0.55s" repeatCount="indefinite" />
        </circle>
        <circle cx="1000" cy="490" r="4" fill="#FF6B00">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.45s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ========== PEOPLE SILHOUETTES ========== */}
      <g id="people" fill="#5D4037" opacity="0.6">
        <ellipse cx="180" cy="480" rx="5" ry="10" />
        <ellipse cx="195" cy="482" rx="4" ry="8" />
        <ellipse cx="500" cy="485" rx="5" ry="10" />
        <ellipse cx="520" cy="487" rx="4" ry="9" />
        <ellipse cx="750" cy="480" rx="5" ry="10" />
        <ellipse cx="900" cy="485" rx="4" ry="9" />
        <ellipse cx="920" cy="483" rx="5" ry="10" />
      </g>
    </svg>
  );
}
