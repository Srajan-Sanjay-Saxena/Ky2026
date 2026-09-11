export default function FloatingLotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Center petal */}
      <ellipse cx="30" cy="20" rx="6" ry="14" fill="url(#lotusPink)" />
      
      {/* Left petals */}
      <ellipse cx="22" cy="22" rx="5" ry="12" fill="url(#lotusPink)" transform="rotate(-25 22 22)" />
      <ellipse cx="16" cy="25" rx="4" ry="10" fill="url(#lotusLight)" transform="rotate(-45 16 25)" />
      
      {/* Right petals */}
      <ellipse cx="38" cy="22" rx="5" ry="12" fill="url(#lotusPink)" transform="rotate(25 38 22)" />
      <ellipse cx="44" cy="25" rx="4" ry="10" fill="url(#lotusLight)" transform="rotate(45 44 25)" />
      
      {/* Outer petals */}
      <ellipse cx="12" cy="28" rx="3" ry="8" fill="url(#lotusOuter)" transform="rotate(-60 12 28)" />
      <ellipse cx="48" cy="28" rx="3" ry="8" fill="url(#lotusOuter)" transform="rotate(60 48 28)" />
      
      {/* Center */}
      <circle cx="30" cy="24" r="4" fill="#FFD700" />
      <circle cx="30" cy="24" r="2" fill="#FFA500" />
      
      {/* Water reflection */}
      <ellipse cx="30" cy="38" rx="18" ry="3" fill="url(#lotusReflection)" opacity="0.3" />
      
      <defs>
        <linearGradient id="lotusPink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB7093" />
        </linearGradient>
        <linearGradient id="lotusLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC0CB" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
        <linearGradient id="lotusOuter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
        <radialGradient id="lotusReflection">
          <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF69B4" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
