"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MandalaRing } from "@/components/sections/FestHighlights/MandlaRing";
import { Diya } from "@/components/sections/Hero/River/diya/Diya";
import {
  COLORS,
  GRADIENT_FOOTER,
  GRADIENT_BORDER_ROYAL,
  GRADIENT_FOOTER_GLOW,
  GRADIENT_FOOTER_AMBIENT,
  GLOW,
  TEXT_SHADOW,
} from "@/components/constants/palette";

const socialLinks = [
  { name: "Instagram", icon: "📸", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "YouTube", icon: "▶️", href: "#" },
];

const quickLinks = [
  { name: "Events", href: "#events" },
  { name: "Schedule", href: "#schedule" },
  { name: "Register", href: "#register" },
  { name: "Contact", href: "#contact" },
];

export function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-10 overflow-hidden"
      style={{ background: GRADIENT_FOOTER }}
    >
      {/* ═══ Animated Background Mandalas ═══ */}
      
      {/* Large outer mandala - slow clockwise */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[80vw] sm:h-[80vw] pointer-events-none footer-mandala-slow"
        style={{ opacity: 0.06 }}
      >
        <MandalaRing className="w-full h-full text-[#FFD700]" />
      </div>
      
      {/* Inner mandala - counter-clockwise */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] pointer-events-none footer-mandala-reverse"
        style={{ opacity: 0.08 }}
      >
        <MandalaRing className="w-full h-full text-[#FF6B00]" />
      </div>
      
      {/* Smallest mandala - faster rotation */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] sm:w-[25vw] sm:h-[25vw] pointer-events-none footer-mandala-fast"
        style={{ opacity: 0.04 }}
      >
        <MandalaRing className="w-full h-full text-[#FFD700]" />
      </div>

      {/* ═══ Top Royal Border ═══ */}
      <div
        className="absolute top-0 left-0 right-0 h-1 sm:h-1.5"
        style={{ background: GRADIENT_BORDER_ROYAL }}
      />
      
      {/* Secondary decorative line */}
      <div
        className="absolute top-2 sm:top-3 left-[10%] right-[10%] h-px"
        style={{ background: `linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.3) 50%, transparent 100%)` }}
      />

      {/* ═══ Gold Glow Overlay ═══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: GRADIENT_FOOTER_GLOW }}
      />

      {/* ═══ Corner Diyas ═══ */}
      <div className="absolute top-6 left-[5%] sm:left-[8%] w-8 h-10 sm:w-10 sm:h-12 opacity-70">
        <Diya className="w-full h-full" />
      </div>
      <div className="absolute top-8 right-[5%] sm:right-[8%] w-6 h-8 sm:w-8 sm:h-10 opacity-50">
        <Diya className="w-full h-full" />
      </div>
      <div className="hidden md:block absolute top-16 left-[20%] w-5 h-7 opacity-40">
        <Diya className="w-full h-full" />
      </div>
      <div className="hidden md:block absolute top-12 right-[22%] w-6 h-8 opacity-45">
        <Diya className="w-full h-full" />
      </div>

      {/* ═══ Main Content ═══ */}
      <div
        ref={contentRef}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Brand Section - Centered Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 tracking-wide"
            style={{
              color: COLORS.BRIGHT_GOLD,
              textShadow: TEXT_SHADOW.TITLE_DEPTH,
              fontFamily: "'Cinzel Decorative', serif",
            }}
          >
            काशी यात्रा
          </h3>
          <p 
            className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
            style={{ color: COLORS.SAFFRON, opacity: 0.9 }}
          >
            2026
          </p>
          <p 
            className="mt-4 text-sm sm:text-base max-w-md mx-auto"
            style={{ color: COLORS.CREAM, opacity: 0.7 }}
          >
            The annual cultural festival celebrating the eternal spirit of Kashi
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-16 mb-10 sm:mb-12">
          {/* Quick Links */}
          <div className="text-center">
            <h4 
              className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base uppercase tracking-widest"
              style={{ color: COLORS.BRIGHT_GOLD }}
            >
              Explore
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="inline-block transition-all duration-300 hover:tracking-wider text-sm sm:text-base"
                    style={{ color: COLORS.CREAM, opacity: 0.75 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = COLORS.BRIGHT_GOLD;
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.CREAM;
                      e.currentTarget.style.opacity = "0.75";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 
              className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base uppercase tracking-widest"
              style={{ color: COLORS.BRIGHT_GOLD }}
            >
              Connect
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base" style={{ color: COLORS.CREAM, opacity: 0.75 }}>
              <li className="flex items-center gap-2 justify-center">
                <span className="text-base">📧</span>
                <a
                  href="mailto:contact@kashiyatra.in"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  contact@kashiyatra.in
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="text-base">📍</span>
                <span>IIT BHU, Varanasi</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="text-base">📅</span>
                <span>March 15-17, 2026</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 
              className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base uppercase tracking-widest"
              style={{ color: COLORS.BRIGHT_GOLD }}
            >
              Follow
            </h4>
            <div className="flex gap-3 sm:gap-4 justify-center">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(139,21,56,0.25) 100%)`,
                    border: `1px solid rgba(255,215,0,0.4)`,
                    boxShadow: GLOW.GOLD_SOFT,
                  }}
                  title={link.name}
                >
                  <span className="text-lg sm:text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Divider */}
        <div
          className="h-px mb-6 sm:mb-8"
          style={{ background: `linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.3) 20%, rgba(255,215,0,0.5) 50%, rgba(255,215,0,0.3) 80%, transparent 100%)` }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p style={{ color: COLORS.CREAM, opacity: 0.5 }} className="text-xs sm:text-sm">
            © 2026 Kashi Yatra • IIT (BHU) Varanasi
          </p>
          <p style={{ color: COLORS.CREAM, opacity: 0.5 }} className="text-xs sm:text-sm flex items-center gap-1">
            Made with <span className="text-base">🪔</span> in the City of Light
          </p>
        </div>
      </div>

      {/* ═══ Bottom Ambient Glow ═══ */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] h-24 sm:h-40 pointer-events-none"
        style={{ background: GRADIENT_FOOTER_AMBIENT }}
      />
      
      {/* Side vignettes */}
      <div
        className="absolute top-0 left-0 w-1/4 h-full pointer-events-none"
        style={{ background: `linear-gradient(90deg, rgba(26,5,8,0.6) 0%, transparent 100%)` }}
      />
      <div
        className="absolute top-0 right-0 w-1/4 h-full pointer-events-none"
        style={{ background: `linear-gradient(-90deg, rgba(26,5,8,0.6) 0%, transparent 100%)` }}
      />
    </footer>
  );
}
