"use client";

export default function GangaWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1400 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Deep night water gradient */}
        <linearGradient id="gangaNightWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a3a5c" />
          <stop offset="25%" stopColor="#15304a" />
          <stop offset="50%" stopColor="#122840" />
          <stop offset="75%" stopColor="#0f2035" />
          <stop offset="100%" stopColor="#0a1525" />
        </linearGradient>
        
        {/* Moonlight reflection on water */}
        <radialGradient id="moonReflection" cx="50%" cy="0%" r="60%" fx="50%" fy="0%">
          <stop offset="0%" stopColor="rgba(220,230,255,0.25)" />
          <stop offset="30%" stopColor="rgba(180,200,240,0.12)" />
          <stop offset="60%" stopColor="rgba(150,180,220,0.05)" />
          <stop offset="100%" stopColor="rgba(100,150,200,0)" />
        </radialGradient>

        {/* Subtle wave highlight */}
        <linearGradient id="waveHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.08)" />
          <stop offset="100%" stopColor="rgba(200,220,255,0)" />
        </linearGradient>

        {/* Diya reflection glow */}
        <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,180,80,0.4)" />
          <stop offset="50%" stopColor="rgba(255,150,50,0.15)" />
          <stop offset="100%" stopColor="rgba(255,120,30,0)" />
        </radialGradient>
      </defs>

      {/* Base water */}
      <rect x="0" y="0" width="1400" height="300" fill="url(#gangaNightWater)" />

      {/* Moonlight reflection path */}
      <ellipse cx="700" cy="30" rx="500" ry="100" fill="url(#moonReflection)">
        <animate attributeName="rx" values="480;520;480" dur="8s" repeatCount="indefinite" />
      </ellipse>

      {/* Gentle wave ripples - very subtle */}
      <g opacity="0.6">
        <path fill="url(#waveHighlight)">
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0,20 C100,15 200,25 300,20 C400,15 500,25 600,20 C700,15 800,25 900,20 C1000,15 1100,25 1200,20 C1300,15 1400,25 1400,20 L1400,40 L0,40 Z;
              M0,20 C100,25 200,15 300,20 C400,25 500,15 600,20 C700,25 800,15 900,20 C1000,25 1100,15 1200,20 C1300,25 1400,15 1400,20 L1400,40 L0,40 Z;
              M0,20 C100,15 200,25 300,20 C400,15 500,25 600,20 C700,15 800,25 900,20 C1000,15 1100,25 1200,20 C1300,15 1400,25 1400,20 L1400,40 L0,40 Z
            "
          />
        </path>

        <path fill="url(#waveHighlight)" opacity="0.7">
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,50 C150,45 300,55 450,50 C600,45 750,55 900,50 C1050,45 1200,55 1350,50 L1400,50 L1400,70 L0,70 Z;
              M0,50 C150,55 300,45 450,50 C600,55 750,45 900,50 C1050,55 1200,45 1350,50 L1400,50 L1400,70 L0,70 Z;
              M0,50 C150,45 300,55 450,50 C600,45 750,55 900,50 C1050,45 1200,55 1350,50 L1400,50 L1400,70 L0,70 Z
            "
          />
        </path>

        <path fill="url(#waveHighlight)" opacity="0.5">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,90 C200,85 400,95 600,90 C800,85 1000,95 1200,90 L1400,90 L1400,110 L0,110 Z;
              M0,90 C200,95 400,85 600,90 C800,95 1000,85 1200,90 L1400,90 L1400,110 L0,110 Z;
              M0,90 C200,85 400,95 600,90 C800,85 1000,95 1200,90 L1400,90 L1400,110 L0,110 Z
            "
          />
        </path>
      </g>

      {/* Horizontal water lines - calm river effect */}
      <g stroke="rgba(200,220,255,0.06)" strokeWidth="1" fill="none">
        <line x1="0" y1="60" x2="1400" y2="60" />
        <line x1="0" y1="100" x2="1400" y2="100" />
        <line x1="0" y1="150" x2="1400" y2="150" />
        <line x1="0" y1="200" x2="1400" y2="200" />
        <line x1="0" y1="250" x2="1400" y2="250" />
      </g>

      {/* Diya reflections on water */}
      <g>
        <ellipse cx="250" cy="80" rx="30" ry="15" fill="url(#diyaGlow)">
          <animate attributeName="rx" values="28;32;28" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="450" cy="100" rx="25" ry="12" fill="url(#diyaGlow)">
          <animate attributeName="rx" values="23;27;23" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="650" cy="70" rx="28" ry="14" fill="url(#diyaGlow)">
          <animate attributeName="rx" values="26;30;26" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.85;0.6" dur="2.2s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="900" cy="90" rx="22" ry="11" fill="url(#diyaGlow)">
          <animate attributeName="rx" values="20;24;20" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.75;0.5" dur="2.8s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Subtle moonlight sparkles */}
      <g fill="rgba(220,235,255,0.8)">
        <circle cx="300" cy="40" r="1.5">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="550" cy="35" r="1.2">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="750" cy="45" r="1.8">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="950" cy="38" r="1.3">
          <animate attributeName="opacity" values="0.3;0.85;0.3" dur="2.8s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="1150" cy="50" r="1.5">
          <animate attributeName="opacity" values="0.2;0.75;0.2" dur="3.2s" repeatCount="indefinite" begin="0.8s" />
        </circle>
      </g>

      {/* Floating diya lights on water */}
      <g>
        <circle cx="200" cy="120" r="3" fill="#FFB040">
          <animate attributeName="cy" values="120;115;120" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="140" r="2.5" fill="#FFA030">
          <animate attributeName="cy" values="140;135;140" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.95;0.6" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="130" r="3" fill="#FFB040">
          <animate attributeName="cy" values="130;125;130" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.9s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="150" r="2.5" fill="#FFA030">
          <animate attributeName="cy" values="150;145;150" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}
