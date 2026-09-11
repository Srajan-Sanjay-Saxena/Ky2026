"use client";

export default function Sun({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 250 250"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFEF5" />
          <stop offset="15%" stopColor="#FFF8DC" />
          <stop offset="35%" stopColor="#FFD700" />
          <stop offset="60%" stopColor="#FFA500" />
          <stop offset="85%" stopColor="#FF7F00" />
          <stop offset="100%" stopColor="#FF6000" />
        </radialGradient>
        
        <radialGradient id="sunGlowInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,220,120,0.9)" />
          <stop offset="35%" stopColor="rgba(255,180,80,0.6)" />
          <stop offset="60%" stopColor="rgba(255,140,50,0.3)" />
          <stop offset="100%" stopColor="rgba(255,100,30,0)" />
        </radialGradient>

        <radialGradient id="sunGlowOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,200,100,0.5)" />
          <stop offset="40%" stopColor="rgba(255,160,60,0.2)" />
          <stop offset="100%" stopColor="rgba(255,120,40,0)" />
        </radialGradient>
        
        <filter id="sunBlur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        <filter id="sunBlurOuter" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* Outermost glow */}
      <circle cx="125" cy="125" r="115" fill="url(#sunGlowOuter)" filter="url(#sunBlurOuter)">
        <animate attributeName="r" values="110;120;110" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Inner glow */}
      <circle cx="125" cy="125" r="80" fill="url(#sunGlowInner)" filter="url(#sunBlur)">
        <animate attributeName="r" values="75;85;75" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sun rays */}
      <g stroke="#FFD700" strokeWidth="2.5" opacity="0.6">
        {[...Array(16)].map((_, i) => (
          <line
            key={i}
            x1={125 + 45 * Math.cos(i * 22.5 * Math.PI / 180)}
            y1={125 + 45 * Math.sin(i * 22.5 * Math.PI / 180)}
            x2={125 + 85 * Math.cos(i * 22.5 * Math.PI / 180)}
            y2={125 + 85 * Math.sin(i * 22.5 * Math.PI / 180)}
          >
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              begin={`${i * 0.1}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </g>

      {/* Main sun disc */}
      <circle cx="125" cy="125" r="38" fill="url(#sunCore)">
        <animate attributeName="r" values="36;40;36" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Inner highlight */}
      <circle cx="115" cy="115" r="15" fill="rgba(255,255,255,0.4)" />
      <circle cx="118" cy="118" r="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}
