"use client";

import { memo } from "react";

// ═══════════════════════════════════════════════════════════════════
// FLOATING KANDEELS (SKY LANTERNS) — Desktop only, decorative
// ═══════════════════════════════════════════════════════════════════
export const Kandeels = memo(function Kandeels() {
  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden z-4">
      {/* Kandeels scattered across - left side origin */}
      <div
        className="absolute"
        style={{
          left: "5%",
          top: "80%",
          animation: "kandeelFloatLeft 35s linear infinite",
          animationDelay: "0s",
        }}
      >
        <svg
          width="20"
          height="28"
          viewBox="0 0 20 28"
          className="w-4 h-6 sm:w-5 sm:h-7"
        >
          <defs>
            <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="body1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5E0" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFD699" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <ellipse
            cx="10"
            cy="14"
            rx="12"
            ry="16"
            fill="url(#glow1)"
            opacity="0.5"
          />
          <path
            d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
            fill="url(#body1)"
            stroke="#E8C07D"
            strokeWidth="0.3"
          />
          <ellipse
            cx="10"
            cy="6"
            rx="6"
            ry="2"
            fill="#4A3728"
            opacity="0.6"
          />
          <ellipse cx="10" cy="14" rx="4" ry="6" fill="#FF8C00" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.5;0.7;0.5"
              dur="1s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="10" cy="13" rx="2" ry="3" fill="#FFD700" opacity="0.8">
            <animate
              attributeName="ry"
              values="3;4;3"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>

      <div
        className="absolute"
        style={{
          left: "15%",
          top: "65%",
          animation: "kandeelFloatLeft 40s linear infinite",
          animationDelay: "4s",
        }}
      >
        <svg
          width="16"
          height="22"
          viewBox="0 0 20 28"
          className="w-3 h-5 sm:w-4 sm:h-6"
        >
          <defs>
            <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="body2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF8EC" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFE8CC" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFDAB0" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <ellipse
            cx="10"
            cy="14"
            rx="11"
            ry="15"
            fill="url(#glow2)"
            opacity="0.4"
          />
          <path
            d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
            fill="url(#body2)"
            stroke="#D4A86A"
            strokeWidth="0.3"
          />
          <ellipse
            cx="10"
            cy="6"
            rx="6"
            ry="2"
            fill="#3D2E1F"
            opacity="0.5"
          />
          <ellipse
            cx="10"
            cy="14"
            rx="3.5"
            ry="5"
            fill="#FFA040"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.6;0.4"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="10"
            cy="13"
            rx="1.5"
            ry="2.5"
            fill="#FFD700"
            opacity="0.7"
          >
            <animate
              attributeName="ry"
              values="2.5;3.5;2.5"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>

      {/* Kandeels from right side origin */}
      <div
        className="absolute"
        style={{
          right: "8%",
          top: "75%",
          animation: "kandeelFloatRight 38s linear infinite",
          animationDelay: "2s",
        }}
      >
        <svg
          width="18"
          height="25"
          viewBox="0 0 20 28"
          className="w-3.5 h-5 sm:w-4 sm:h-6"
        >
          <defs>
            <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="body3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5E0" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFD699" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <ellipse
            cx="10"
            cy="14"
            rx="11"
            ry="15"
            fill="url(#glow3)"
            opacity="0.45"
          />
          <path
            d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
            fill="url(#body3)"
            stroke="#E8C07D"
            strokeWidth="0.3"
          />
          <ellipse
            cx="10"
            cy="6"
            rx="6"
            ry="2"
            fill="#4A3728"
            opacity="0.55"
          />
          <ellipse
            cx="10"
            cy="14"
            rx="4"
            ry="5.5"
            fill="#FF8C00"
            opacity="0.55"
          >
            <animate
              attributeName="opacity"
              values="0.45;0.65;0.45"
              dur="1.1s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="10"
            cy="13"
            rx="2"
            ry="2.8"
            fill="#FFD700"
            opacity="0.75"
          >
            <animate
              attributeName="ry"
              values="2.8;3.8;2.8"
              dur="0.85s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>

      <div
        className="absolute"
        style={{
          right: "20%",
          top: "85%",
          animation: "kandeelFloatRight 45s linear infinite",
          animationDelay: "8s",
        }}
      >
        <svg
          width="14"
          height="20"
          viewBox="0 0 20 28"
          className="w-2.5 h-4 sm:w-3 sm:h-5"
        >
          <defs>
            <radialGradient id="glow4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="body4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF8EC" stopOpacity="0.88" />
              <stop offset="50%" stopColor="#FFE8CC" stopOpacity="0.83" />
              <stop offset="100%" stopColor="#FFDAB0" stopOpacity="0.78" />
            </linearGradient>
          </defs>
          <ellipse
            cx="10"
            cy="14"
            rx="10"
            ry="14"
            fill="url(#glow4)"
            opacity="0.35"
          />
          <path
            d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
            fill="url(#body4)"
            stroke="#D4A86A"
            strokeWidth="0.3"
          />
          <ellipse
            cx="10"
            cy="6"
            rx="6"
            ry="2"
            fill="#3D2E1F"
            opacity="0.45"
          />
          <ellipse
            cx="10"
            cy="14"
            rx="3"
            ry="4.5"
            fill="#FFA040"
            opacity="0.45"
          >
            <animate
              attributeName="opacity"
              values="0.35;0.55;0.35"
              dur="1.3s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="10"
            cy="13"
            rx="1.2"
            ry="2"
            fill="#FFD700"
            opacity="0.65"
          >
            <animate
              attributeName="ry"
              values="2;3;2"
              dur="1s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>

      {/* One more from center-left */}
      <div
        className="absolute"
        style={{
          left: "25%",
          top: "70%",
          animation: "kandeelFloatLeft 42s linear infinite",
          animationDelay: "6s",
        }}
      >
        <svg
          width="15"
          height="21"
          viewBox="0 0 20 28"
          className="w-3 h-4 sm:w-3.5 sm:h-5"
        >
          <defs>
            <radialGradient id="glow5" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="body5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5E0" stopOpacity="0.88" />
              <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.83" />
              <stop offset="100%" stopColor="#FFD699" stopOpacity="0.78" />
            </linearGradient>
          </defs>
          <ellipse
            cx="10"
            cy="14"
            rx="10"
            ry="14"
            fill="url(#glow5)"
            opacity="0.4"
          />
          <path
            d="M4 6 Q2 14 4 22 Q10 24 16 22 Q18 14 16 6 Q10 4 4 6"
            fill="url(#body5)"
            stroke="#E8C07D"
            strokeWidth="0.3"
          />
          <ellipse
            cx="10"
            cy="6"
            rx="6"
            ry="2"
            fill="#4A3728"
            opacity="0.5"
          />
          <ellipse
            cx="10"
            cy="14"
            rx="3.5"
            ry="5"
            fill="#FF8C00"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.6;0.4"
              dur="1.15s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="10"
            cy="13"
            rx="1.5"
            ry="2.5"
            fill="#FFD700"
            opacity="0.7"
          >
            <animate
              attributeName="ry"
              values="2.5;3.5;2.5"
              dur="0.95s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>
    </div>
  );
});
