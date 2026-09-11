"use client";

export default function MandalaPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="mandalaPattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
            {/* Center circle */}
            <circle cx="200" cy="200" r="20" />
            <circle cx="200" cy="200" r="40" />
            <circle cx="200" cy="200" r="60" />
            <circle cx="200" cy="200" r="80" />
            <circle cx="200" cy="200" r="100" />
            <circle cx="200" cy="200" r="120" />
            <circle cx="200" cy="200" r="140" />
            <circle cx="200" cy="200" r="160" />
            <circle cx="200" cy="200" r="180" />
            
            {/* Petals layer 1 */}
            {[...Array(12)].map((_, i) => (
              <path
                key={`petal1-${i}`}
                d={`M200,200 Q${200 + 50 * Math.cos((i * 30 - 15) * Math.PI / 180)},${200 + 50 * Math.sin((i * 30 - 15) * Math.PI / 180)} ${200 + 60 * Math.cos(i * 30 * Math.PI / 180)},${200 + 60 * Math.sin(i * 30 * Math.PI / 180)} Q${200 + 50 * Math.cos((i * 30 + 15) * Math.PI / 180)},${200 + 50 * Math.sin((i * 30 + 15) * Math.PI / 180)} 200,200`}
              />
            ))}
            
            {/* Petals layer 2 */}
            {[...Array(16)].map((_, i) => (
              <path
                key={`petal2-${i}`}
                d={`M200,200 Q${200 + 90 * Math.cos((i * 22.5 - 11) * Math.PI / 180)},${200 + 90 * Math.sin((i * 22.5 - 11) * Math.PI / 180)} ${200 + 100 * Math.cos(i * 22.5 * Math.PI / 180)},${200 + 100 * Math.sin(i * 22.5 * Math.PI / 180)} Q${200 + 90 * Math.cos((i * 22.5 + 11) * Math.PI / 180)},${200 + 90 * Math.sin((i * 22.5 + 11) * Math.PI / 180)} 200,200`}
              />
            ))}
            
            {/* Lotus petals outer */}
            {[...Array(24)].map((_, i) => (
              <ellipse
                key={`lotus-${i}`}
                cx={200 + 150 * Math.cos(i * 15 * Math.PI / 180)}
                cy={200 + 150 * Math.sin(i * 15 * Math.PI / 180)}
                rx="15"
                ry="8"
                transform={`rotate(${i * 15 + 90} ${200 + 150 * Math.cos(i * 15 * Math.PI / 180)} ${200 + 150 * Math.sin(i * 15 * Math.PI / 180)})`}
              />
            ))}
            
            {/* Decorative dots */}
            {[...Array(8)].map((_, i) => (
              <circle
                key={`dot1-${i}`}
                cx={200 + 30 * Math.cos(i * 45 * Math.PI / 180)}
                cy={200 + 30 * Math.sin(i * 45 * Math.PI / 180)}
                r="3"
                fill="currentColor"
              />
            ))}
            
            {[...Array(12)].map((_, i) => (
              <circle
                key={`dot2-${i}`}
                cx={200 + 70 * Math.cos(i * 30 * Math.PI / 180)}
                cy={200 + 70 * Math.sin(i * 30 * Math.PI / 180)}
                r="2"
                fill="currentColor"
              />
            ))}
          </g>
        </pattern>
      </defs>
      
      <rect width="400" height="400" fill="url(#mandalaPattern)" />
    </svg>
  );
}
