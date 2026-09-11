"use client";

export default function AartiFlames({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="aartiFlame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="40%" stopColor="#FF6B00" />
          <stop offset="70%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        
        <filter id="aartiGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Aarti plate base */}
      <ellipse cx="150" cy="180" rx="80" ry="15" fill="#B8860B" />
      <ellipse cx="150" cy="175" rx="70" ry="12" fill="#D4A853" />
      
      {/* Multiple flames on aarti plate */}
      <g filter="url(#aartiGlow)">
        {/* Center flame - largest */}
        <path fill="url(#aartiFlame)">
          <animate
            attributeName="d"
            dur="0.3s"
            repeatCount="indefinite"
            values="
              M150,60 Q160,100 155,140 Q150,150 145,140 Q140,100 150,60;
              M150,55 Q165,95 157,140 Q150,152 143,140 Q135,95 150,55;
              M150,65 Q158,105 153,140 Q150,148 147,140 Q142,105 150,65;
              M150,60 Q160,100 155,140 Q150,150 145,140 Q140,100 150,60
            "
          />
        </path>
        
        {/* Left flame 1 */}
        <path fill="url(#aartiFlame)">
          <animate
            attributeName="d"
            dur="0.35s"
            repeatCount="indefinite"
            values="
              M100,90 Q108,120 105,155 Q100,162 95,155 Q92,120 100,90;
              M100,85 Q112,118 107,155 Q100,165 93,155 Q88,118 100,85;
              M100,95 Q106,122 103,155 Q100,160 97,155 Q94,122 100,95;
              M100,90 Q108,120 105,155 Q100,162 95,155 Q92,120 100,90
            "
          />
        </path>
        
        {/* Right flame 1 */}
        <path fill="url(#aartiFlame)">
          <animate
            attributeName="d"
            dur="0.32s"
            repeatCount="indefinite"
            values="
              M200,90 Q208,120 205,155 Q200,162 195,155 Q192,120 200,90;
              M200,85 Q212,118 207,155 Q200,165 193,155 Q188,118 200,85;
              M200,95 Q206,122 203,155 Q200,160 197,155 Q194,122 200,95;
              M200,90 Q208,120 205,155 Q200,162 195,155 Q192,120 200,90
            "
          />
        </path>
        
        {/* Left flame 2 - smaller */}
        <path fill="url(#aartiFlame)">
          <animate
            attributeName="d"
            dur="0.28s"
            repeatCount="indefinite"
            values="
              M125,100 Q130,125 128,155 Q125,160 122,155 Q120,125 125,100;
              M125,95 Q133,123 129,155 Q125,162 121,155 Q117,123 125,95;
              M125,105 Q128,127 126,155 Q125,158 124,155 Q122,127 125,105;
              M125,100 Q130,125 128,155 Q125,160 122,155 Q120,125 125,100
            "
          />
        </path>
        
        {/* Right flame 2 - smaller */}
        <path fill="url(#aartiFlame)">
          <animate
            attributeName="d"
            dur="0.26s"
            repeatCount="indefinite"
            values="
              M175,100 Q180,125 178,155 Q175,160 172,155 Q170,125 175,100;
              M175,95 Q183,123 179,155 Q175,162 171,155 Q167,123 175,95;
              M175,105 Q178,127 176,155 Q175,158 174,155 Q172,127 175,105;
              M175,100 Q180,125 178,155 Q175,160 172,155 Q170,125 175,100
            "
          />
        </path>
      </g>

      {/* Wicks */}
      <rect x="148" y="145" width="4" height="15" fill="#2D1810" />
      <rect x="98" y="158" width="4" height="12" fill="#2D1810" />
      <rect x="198" y="158" width="4" height="12" fill="#2D1810" />
      <rect x="123" y="158" width="3" height="10" fill="#2D1810" />
      <rect x="173" y="158" width="3" height="10" fill="#2D1810" />
      
      {/* Decorative bells on plate */}
      <circle cx="80" cy="175" r="8" fill="#D4A853" stroke="#B8860B" strokeWidth="1" />
      <circle cx="220" cy="175" r="8" fill="#D4A853" stroke="#B8860B" strokeWidth="1" />
    </svg>
  );
}
