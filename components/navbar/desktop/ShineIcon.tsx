/**
 * Small golden four-point sparkle that shines beside each nav link.
 */
export function ShineIcon() {
  return (
    <span
      aria-hidden
      className="nav-shine relative inline-block shrink-0"
      style={{
        width: "clamp(9px, 0.85vw, 14px)",
        height: "clamp(9px, 0.85vw, 14px)",
      }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <radialGradient id="shineGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF6D5" />
            <stop offset="45%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#C8891F" />
          </radialGradient>
        </defs>
        <path
          d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
          fill="url(#shineGrad)"
        />
        <circle cx="12" cy="12" r="2.2" fill="#FFFBEA" />
      </svg>
    </span>
  );
}
