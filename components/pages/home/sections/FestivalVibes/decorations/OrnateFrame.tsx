"use client";

import { memo } from "react";

// ═══════════════════════════════════════════════════════════════════
// ORNATE FRAME COMPONENT - Royal border decoration
// ═══════════════════════════════════════════════════════════════════

interface OrnateFrameProps {
  color: string;
  className?: string;
}

export const OrnateFrame = memo(function OrnateFrame({ 
  color, 
  className = "" 
}: OrnateFrameProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Corner flourishes */}
      <svg className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 48 48">
        <path 
          d="M4 44 L4 20 Q4 4 20 4 L44 4" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"
          opacity="0.6"
        />
        <circle cx="8" cy="8" r="3" fill={color} opacity="0.4"/>
      </svg>
      <svg className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 rotate-90" viewBox="0 0 48 48">
        <path 
          d="M4 44 L4 20 Q4 4 20 4 L44 4" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"
          opacity="0.6"
        />
        <circle cx="8" cy="8" r="3" fill={color} opacity="0.4"/>
      </svg>
      <svg className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 -rotate-90" viewBox="0 0 48 48">
        <path 
          d="M4 44 L4 20 Q4 4 20 4 L44 4" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"
          opacity="0.6"
        />
        <circle cx="8" cy="8" r="3" fill={color} opacity="0.4"/>
      </svg>
      <svg className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 rotate-180" viewBox="0 0 48 48">
        <path 
          d="M4 44 L4 20 Q4 4 20 4 L44 4" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"
          opacity="0.6"
        />
        <circle cx="8" cy="8" r="3" fill={color} opacity="0.4"/>
      </svg>
    </div>
  );
});
