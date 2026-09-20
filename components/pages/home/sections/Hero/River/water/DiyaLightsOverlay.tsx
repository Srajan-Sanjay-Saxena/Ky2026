import { memo } from "react";

export const DiyaLightsOverlay = memo(function DiyaLightsOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1400 300"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="diyaGlowNew" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,180,80,0.6)" />
          <stop offset="50%" stopColor="rgba(255,150,50,0.2)" />
          <stop offset="100%" stopColor="rgba(255,120,30,0)" />
        </radialGradient>
      </defs>

      <g>
        <circle cx="200" cy="120" r="5" fill="#FFB040">
          <animate attributeName="cy" values="120;112;120" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="140" r="4" fill="#FFA030">
          <animate attributeName="cy" values="140;132;140" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.95;0.6" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="130" r="5" fill="#FFB040">
          <animate attributeName="cy" values="130;122;130" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.9s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="150" r="4" fill="#FFA030">
          <animate attributeName="cy" values="150;142;150" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
});
