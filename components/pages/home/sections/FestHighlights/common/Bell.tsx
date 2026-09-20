import { memo } from "react";

// Bell SVG Component
export const BellSVG = memo(function BellSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className}>
      <path d="M20 5 L20 0" stroke="#B8860B" strokeWidth="2" />
      <circle cx="20" cy="8" r="3" fill="#DAA520" />
      <path d="M8 45 Q8 20 20 10 Q32 20 32 45 Z" fill="#B8860B" />
      <ellipse cx="20" cy="45" rx="14" ry="4" fill="#DAA520" />
      <circle cx="20" cy="52" r="4" fill="#8B7355" />
      <line x1="20" y1="45" x2="20" y2="52" stroke="#8B7355" strokeWidth="2" />
    </svg>
  );
});

