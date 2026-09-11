"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const navItems = [
  { label: "EVENTS", href: "#events" },
  { label: "CAP", href: "#cap" },
  { label: "TEAM", href: "#team" },
  { label: "SPONSORS", href: "#sponsors" },
  { label: "SCHEDULE", href: "#schedule" },
  { label: "CONTACT", href: "#contact" },
  { label: "GALLERY", href: "#gallery" },
  { label: "REGISTER", href: "#register" },
];

export default function NavWheel({ className = "" }: { className?: string }) {
  const wheelRef = useRef<SVGSVGElement>(null);
  const innerRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // Continuous slow rotation
    gsap.to(wheelRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    // Inner wheel rotates opposite
    gsap.to(innerRef.current, {
      rotation: -360,
      duration: 45,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <svg
      ref={wheelRef}
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1A2E" />
          <stop offset="50%" stopColor="#2D2D44" />
          <stop offset="100%" stopColor="#1A1A2E" />
        </linearGradient>
        
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B1538" />
          <stop offset="100%" stopColor="#5C0F26" />
        </linearGradient>

        <filter id="wheelShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* Outer wheel */}
      <circle cx="200" cy="200" r="195" fill="url(#wheelGradient)" filter="url(#wheelShadow)" />
      
      {/* Decorative rings */}
      <circle cx="200" cy="200" r="185" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.3" />
      <circle cx="200" cy="200" r="175" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.2" />
      
      {/* Navigation text around the wheel */}
      {navItems.map((item, i) => {
        const angle = (i * 360) / navItems.length - 90;
        const radius = 160;
        const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 200 + radius * Math.sin((angle * Math.PI) / 180);
        
        return (
          <g key={item.label}>
            <text
              x={x}
              y={y}
              fill="#FDF6E3"
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${angle + 90} ${x} ${y})`}
              style={{ cursor: "pointer" }}
              className="hover:fill-[#FFD700] transition-colors"
            >
              {item.label}
            </text>
          </g>
        );
      })}

      {/* Middle ring */}
      <circle cx="200" cy="200" r="120" fill="#2D2D44" />
      <circle cx="200" cy="200" r="115" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.4" />

      {/* Inner wheel */}
      <g ref={innerRef}>
        <circle cx="200" cy="200" r="100" fill="url(#innerGradient)" />
        
        {/* Decorative pattern */}
        <circle cx="200" cy="200" r="90" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.3" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.2" />
        
        {/* Om symbol or center design */}
        <circle cx="200" cy="200" r="60" fill="#1A1A2E" />
        <circle cx="200" cy="200" r="55" fill="none" stroke="#FFD700" strokeWidth="2" />
        
        {/* Center text */}
        <text
          x="200"
          y="195"
          fill="#FFD700"
          fontSize="28"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="serif"
        >
          ॐ
        </text>
        <text
          x="200"
          y="220"
          fill="#FDF6E3"
          fontSize="10"
          textAnchor="middle"
          letterSpacing="2"
        >
          REGISTER
        </text>
      </g>

      {/* Decorative dots around */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360) / 24;
        const x = 200 + 140 * Math.cos((angle * Math.PI) / 180);
        const y = 200 + 140 * Math.sin((angle * Math.PI) / 180);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="#FFD700"
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}
