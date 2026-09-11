"use client";

export default function Birds({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bird 1 */}
      <g transform="translate(50, 50)">
        <path d="M0,10 Q10,0 20,10 M20,10 Q30,0 40,10" fill="none" stroke="#2D1810" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            values="M0,10 Q10,0 20,10 M20,10 Q30,0 40,10;M0,10 Q10,15 20,10 M20,10 Q30,15 40,10;M0,10 Q10,0 20,10 M20,10 Q30,0 40,10"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Bird 2 */}
      <g transform="translate(120, 30)">
        <path d="M0,8 Q8,0 16,8 M16,8 Q24,0 32,8" fill="none" stroke="#2D1810" strokeWidth="1.5" strokeLinecap="round">
          <animate
            attributeName="d"
            values="M0,8 Q8,0 16,8 M16,8 Q24,0 32,8;M0,8 Q8,12 16,8 M16,8 Q24,12 32,8;M0,8 Q8,0 16,8 M16,8 Q24,0 32,8"
            dur="0.4s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Bird 3 */}
      <g transform="translate(200, 60)">
        <path d="M0,10 Q10,0 20,10 M20,10 Q30,0 40,10" fill="none" stroke="#2D1810" strokeWidth="2" strokeLinecap="round">
          <animate
            attributeName="d"
            values="M0,10 Q10,0 20,10 M20,10 Q30,0 40,10;M0,10 Q10,15 20,10 M20,10 Q30,15 40,10;M0,10 Q10,0 20,10 M20,10 Q30,0 40,10"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Bird 4 - smaller, distant */}
      <g transform="translate(280, 40)">
        <path d="M0,6 Q6,0 12,6 M12,6 Q18,0 24,6" fill="none" stroke="#4A3728" strokeWidth="1" strokeLinecap="round">
          <animate
            attributeName="d"
            values="M0,6 Q6,0 12,6 M12,6 Q18,0 24,6;M0,6 Q6,9 12,6 M12,6 Q18,9 24,6;M0,6 Q6,0 12,6 M12,6 Q18,0 24,6"
            dur="0.35s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Bird 5 */}
      <g transform="translate(340, 70)">
        <path d="M0,8 Q8,0 16,8 M16,8 Q24,0 32,8" fill="none" stroke="#2D1810" strokeWidth="1.5" strokeLinecap="round">
          <animate
            attributeName="d"
            values="M0,8 Q8,0 16,8 M16,8 Q24,0 32,8;M0,8 Q8,12 16,8 M16,8 Q24,12 32,8;M0,8 Q8,0 16,8 M16,8 Q24,0 32,8"
            dur="0.45s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Bird 6 - far */}
      <g transform="translate(160, 100)">
        <path d="M0,5 Q5,0 10,5 M10,5 Q15,0 20,5" fill="none" stroke="#5A4738" strokeWidth="1" strokeLinecap="round">
          <animate
            attributeName="d"
            values="M0,5 Q5,0 10,5 M10,5 Q15,0 20,5;M0,5 Q5,7 10,5 M10,5 Q15,7 20,5;M0,5 Q5,0 10,5 M10,5 Q15,0 20,5"
            dur="0.55s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
