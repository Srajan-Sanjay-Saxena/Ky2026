"use client";

import { memo } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Hoodie/Merch Icon - Premium festival merchandise
 */
export const MerchIcon = memo(function MerchIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hoodie body */}
      <path
        d="M16 24v28a2 2 0 002 2h28a2 2 0 002-2V24"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Hood */}
      <path
        d="M16 24c0-8 6-14 16-14s16 6 16 14"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Hood opening */}
      <ellipse
        cx="32"
        cy="22"
        rx="8"
        ry="6"
        stroke="url(#merch-grad)"
        strokeWidth="2"
        fill="rgba(255,215,0,0.05)"
      />
      {/* Sleeves */}
      <path
        d="M16 24L8 32v8l8-4"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,215,0,0.1)"
      />
      <path
        d="M48 24l8 8v8l-8-4"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Pocket */}
      <path
        d="M24 40h16v8H24z"
        stroke="url(#merch-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.08)"
        rx="1"
      />
      {/* KY logo on chest */}
      <text
        x="32"
        y="35"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="url(#merch-grad)"
        fontFamily="serif"
      >
        KY
      </text>
      <defs>
        <linearGradient id="merch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});

/**
 * Food/Thali Icon - Banarasi cuisine
 */
export const FoodIcon = memo(function FoodIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Thali plate */}
      <ellipse
        cx="32"
        cy="36"
        rx="26"
        ry="12"
        stroke="url(#food-grad)"
        strokeWidth="2.5"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Inner ring */}
      <ellipse
        cx="32"
        cy="36"
        rx="20"
        ry="8"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Katori 1 - left */}
      <ellipse
        cx="20"
        cy="34"
        rx="6"
        ry="3"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="rgba(255,165,0,0.2)"
      />
      {/* Katori 2 - right */}
      <ellipse
        cx="44"
        cy="34"
        rx="6"
        ry="3"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="rgba(255,165,0,0.2)"
      />
      {/* Center - rice/roti */}
      <ellipse
        cx="32"
        cy="36"
        rx="7"
        ry="4"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.15)"
      />
      {/* Steam lines */}
      <path
        d="M28 26c0-3 2-5 2-8M32 24c0-3 2-5 2-8M36 26c0-3 2-5 2-8"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Decorative dots on plate edge */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <circle
          key={angle}
          cx={32 + 23 * Math.cos((angle * Math.PI) / 180)}
          cy={36 + 10 * Math.sin((angle * Math.PI) / 180)}
          r="1.5"
          fill="url(#food-grad)"
          opacity="0.5"
        />
      ))}
      <defs>
        <linearGradient id="food-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});

/**
 * Accommodation Icon - Traditional building/haveli
 */
export const AccommodationIcon = memo(function AccommodationIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main building */}
      <path
        d="M12 54V28l20-16 20 16v26"
        stroke="url(#accom-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,215,0,0.08)"
      />
      {/* Roof dome */}
      <path
        d="M24 28c0-6 8-10 8-10s8 4 8 10"
        stroke="url(#accom-grad)"
        strokeWidth="2"
        fill="none"
      />
      {/* Kalash on top */}
      <circle cx="32" cy="14" r="3" stroke="url(#accom-grad)" strokeWidth="1.5" fill="rgba(255,215,0,0.2)" />
      <path d="M32 11V8" stroke="url(#accom-grad)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Door */}
      <path
        d="M26 54V42a6 6 0 0112 0v12"
        stroke="url(#accom-grad)"
        strokeWidth="2"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Windows left */}
      <rect x="14" y="34" width="8" height="10" rx="4" stroke="url(#accom-grad)" strokeWidth="1.5" fill="rgba(255,215,0,0.1)" />
      {/* Windows right */}
      <rect x="42" y="34" width="8" height="10" rx="4" stroke="url(#accom-grad)" strokeWidth="1.5" fill="rgba(255,215,0,0.1)" />
      {/* Base/steps */}
      <path
        d="M8 54h48"
        stroke="url(#accom-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Decorative arches */}
      <path
        d="M16 28c0-4 4-6 4-6M44 28c0-4-4-6-4-6"
        stroke="url(#accom-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="accom-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});

/**
 * Cultural Access Icon - Ticket/Pass with classical dance motif
 */
export const CulturalAccessIcon = memo(function CulturalAccessIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ticket shape */}
      <path
        d="M8 18h48a2 2 0 012 2v6a4 4 0 000 8v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a4 4 0 000-8v-6a2 2 0 012-2z"
        stroke="url(#access-grad)"
        strokeWidth="2.5"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Perforated line */}
      <path
        d="M44 18v24"
        stroke="url(#access-grad)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      {/* Classical dancer silhouette */}
      <g transform="translate(16, 22)">
        {/* Head */}
        <circle cx="10" cy="2" r="3" stroke="url(#access-grad)" strokeWidth="1.5" fill="rgba(255,215,0,0.2)" />
        {/* Body */}
        <path
          d="M10 5v8M6 10l4 3 4-3M7 13l3 7M13 13l-3 7"
          stroke="url(#access-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Raised arm */}
        <path
          d="M10 8l-6-3M10 8l6-3"
          stroke="url(#access-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      {/* Star/VIP indicator */}
      <path
        d="M50 30l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z"
        stroke="url(#access-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.3)"
      />
      <defs>
        <linearGradient id="access-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});
