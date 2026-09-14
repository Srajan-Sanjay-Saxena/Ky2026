"use client";

import { memo } from "react";
import { CONCERT_COLORS } from "./constants";

export const NotifyButton = memo(function NotifyButton() {
  return (
    <div className="text-center">
      <button
        className="relative px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold uppercase tracking-wider text-sm overflow-hidden group cursor-pointer"
        style={{
          background: `linear-gradient(135deg, 
            ${CONCERT_COLORS.NEON_PURPLE} 0%, 
            ${CONCERT_COLORS.NEON_PINK} 50%,
            ${CONCERT_COLORS.NEON_PURPLE} 100%
          )`,
          backgroundSize: "200% 200%",
          color: "#FFFFFF",
          boxShadow: `0 0 40px ${CONCERT_COLORS.NEON_PINK}40, 0 10px 30px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Shimmer - desktop only */}
        <span
          className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            animation: "shimmerSlide 1.5s ease-in-out infinite",
          }}
        />
        
        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Notify Me When Revealed
        </span>
      </button>
      
      <p className="mt-4 text-xs text-white/30">
        Be the first to know when artists are announced
      </p>
    </div>
  );
});
