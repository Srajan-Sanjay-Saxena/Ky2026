// Diya/Lamp SVG Component
export const LampSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 50 60" className={className}>
    <ellipse cx="25" cy="50" rx="20" ry="8" fill="#B8860B" />
    <ellipse cx="25" cy="48" rx="15" ry="5" fill="#DAA520" />
    <path d="M25 48 Q20 35 25 20 Q30 35 25 48" fill="#FF6B00">
      <animate
        attributeName="d"
        values="M25 48 Q20 35 25 20 Q30 35 25 48;M25 48 Q18 32 25 18 Q32 32 25 48;M25 48 Q20 35 25 20 Q30 35 25 48"
        dur="0.5s"
        repeatCount="indefinite"
      />
    </path>
    <ellipse cx="25" cy="20" rx="4" ry="6" fill="#FFD700" opacity="0.8">
      <animate
        attributeName="ry"
        values="6;8;6"
        dur="0.3s"
        repeatCount="indefinite"
      />
    </ellipse>
  </svg>
);