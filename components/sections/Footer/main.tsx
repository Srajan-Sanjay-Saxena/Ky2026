"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MandalaRing } from "@/components/sections/FestHighlights/MandlaRing";
import { DiyaSvg } from "@/components/sections/Hero/River/diya/DiyaSvg";
import {
  COLORS,
  GRADIENT_FOOTER,
  GRADIENT_BORDER_ROYAL,
  GRADIENT_FOOTER_GLOW,
  GRADIENT_FOOTER_AMBIENT,
} from "@/components/constants/palette";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    color: "#E4405F", // Instagram pink/red gradient
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    color: "#0A66C2", // LinkedIn blue
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    color: "#FF0000", // YouTube red
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
  },
];

const quickLinks = [
  {
    name: "Events",
    href: "#events",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Schedule",
    href: "#schedule",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle
          cx="12"
          cy="15"
          r="2"
          fill="currentColor"
          className="animate-ping"
          style={{ animationDuration: "2s" }}
        />
      </svg>
    ),
  },
  {
    name: "Register",
    href: "#register",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="14"
          className="animate-bounce"
          style={{ transformOrigin: "center", animationDuration: "1s" }}
        />
        <line x1="17" y1="11" x2="23" y2="11" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "#contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6">
          <animate
            attributeName="points"
            values="22,6 12,13 2,6; 22,6 12,11 2,6; 22,6 12,13 2,6"
            dur="2s"
            repeatCount="indefinite"
          />
        </polyline>
      </svg>
    ),
  },
];

export function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer to pause animations when off-screen
  useEffect(() => {
    const element = footerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "100px" }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

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
      id="footer"
      ref={footerRef}
      data-section="footer"
      data-inview={isInView}
      className="relative pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-10 overflow-hidden"
      style={{ background: GRADIENT_FOOTER }}
    >
      {/* ═══ Animated Background Mandalas ═══ */}

      {/* Large outer mandala - slow clockwise */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[80vw] sm:h-[80vw] pointer-events-none footer-mandala-slow"
        style={{ opacity: 0.15 }}
      >
        <MandalaRing className="w-full h-full text-[#FFD700]" />
      </div>

      {/* Inner mandala - counter-clockwise */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] pointer-events-none footer-mandala-reverse"
        style={{ opacity: 0.18 }}
      >
        <MandalaRing className="w-full h-full text-[#FF6B00]" />
      </div>

      {/* Smallest mandala - faster rotation */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] sm:w-[25vw] sm:h-[25vw] pointer-events-none footer-mandala-fast"
        style={{ opacity: 0.12 }}
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
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.3) 50%, transparent 100%)`,
        }}
      />

      {/* ═══ Gold Glow Overlay ═══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: GRADIENT_FOOTER_GLOW }}
      />

      {/* ═══ Corner Diyas ═══ */}
      <div className="absolute top-6 left-[5%] sm:left-[8%] w-8 h-10 sm:w-10 sm:h-12 opacity-70">
        <DiyaSvg className="w-full h-full" />
      </div>
      <div className="absolute top-8 right-[5%] sm:right-[8%] w-6 h-8 sm:w-8 sm:h-10 opacity-50">
        <DiyaSvg className="w-full h-full" />
      </div>
      <div className="hidden md:block absolute top-16 left-[20%] w-5 h-7 opacity-40">
        <DiyaSvg className="w-full h-full" />
      </div>
      <div className="hidden md:block absolute top-12 right-[22%] w-6 h-8 opacity-45">
        <DiyaSvg className="w-full h-full" />
      </div>

      {/* ═══ Main Content ═══ */}
      <div
        ref={contentRef}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Brand Section - Centered Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h3
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-5"
            style={{
              color: COLORS.BRIGHT_GOLD,
              textShadow:
                "0 0 30px rgba(255,215,0,0.5), 0 2px 4px rgba(0,0,0,0.4)",
              fontFamily: "'Cinzel Decorative', serif",
            }}
          >
            काशी यात्रा
          </h3>
          <p
            className="text-xl sm:text-2xl md:text-3xl tracking-[0.4em] uppercase"
            style={{
              color: COLORS.BRIGHT_GOLD,
              opacity: 0.85,
              fontFamily: "'Cinzel', serif",
              textShadow: "0 0 15px rgba(255,215,0,0.3)",
            }}
          >
            2026
          </p>
          <p
            className="mt-5 text-base sm:text-lg max-w-lg mx-auto"
            style={{
              color: COLORS.CREAM,
              opacity: 0.8,
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.05em",
            }}
          >
            The annual cultural festival celebrating the eternal spirit of Kashi
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-14">
          {/* Quick Links */}
          <div
            className="text-center relative p-6 sm:p-8 rounded-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,10,24,0.6) 0%, rgba(90,15,37,0.4) 50%, rgba(61,10,24,0.6) 100%)",
              border: "1px solid rgba(255,215,0,0.4)",
              boxShadow:
                "inset 0 0 50px rgba(255,215,0,0.08), 0 0 30px rgba(255,215,0,0.1), 0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* Rotating mandala watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] footer-card-mandala">
                <MandalaRing className="w-full h-full text-[#FFD700] opacity-[0.35]" />
              </div>
            </div>
            {/* Corner decorations */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />

            <h4
              className="mb-6 sm:mb-7 text-lg sm:text-xl relative z-10"
              style={{
                color: COLORS.BRIGHT_GOLD,
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.15em",
                textShadow: "0 0 20px rgba(255,215,0,0.5)",
              }}
            >
              ॥ Explore ॥
            </h4>
            <ul className="space-y-3 sm:space-y-4 relative z-10">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-all duration-300 text-base sm:text-lg hover:tracking-wider group"
                    style={{
                      color: COLORS.CREAM,
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = COLORS.BRIGHT_GOLD;
                      e.currentTarget.style.textShadow =
                        "0 0 15px rgba(255,215,0,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.CREAM;
                      e.currentTarget.style.textShadow = "none";
                    }}
                  >
                    <span className="text-[#FF6B00] group-hover:text-[#FFD700] transition-colors duration-300">
                      {link.icon}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="text-center relative p-6 sm:p-8 rounded-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,10,24,0.6) 0%, rgba(90,15,37,0.4) 50%, rgba(61,10,24,0.6) 100%)",
              border: "1px solid rgba(255,215,0,0.4)",
              boxShadow:
                "inset 0 0 50px rgba(255,215,0,0.08), 0 0 30px rgba(255,215,0,0.1), 0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* Rotating mandala watermark - reverse direction */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] footer-card-mandala-reverse">
                <MandalaRing className="w-full h-full text-[#FFD700] opacity-[0.35]" />
              </div>
            </div>
            {/* Corner decorations */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />

            <h4
              className="mb-6 sm:mb-7 text-lg sm:text-xl relative z-10"
              style={{
                color: COLORS.BRIGHT_GOLD,
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.15em",
                textShadow: "0 0 20px rgba(255,215,0,0.5)",
              }}
            >
              ॥ Connect ॥
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg relative z-10">
              <li className="flex items-center gap-3 justify-center">
                <span className="text-xl" style={{ color: COLORS.SAFFRON }}>
                  ✉
                </span>
                <a
                  href="mailto:contact@kashiyatra.in"
                  className="transition-all duration-300"
                  style={{
                    color: COLORS.CREAM,
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.BRIGHT_GOLD;
                    e.currentTarget.style.textShadow =
                      "0 0 15px rgba(255,215,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLORS.CREAM;
                    e.currentTarget.style.textShadow = "none";
                  }}
                >
                  contact@kashiyatra.in
                </a>
              </li>
              <li
                className="flex items-center gap-3 justify-center"
                style={{
                  color: COLORS.CREAM,
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.05em",
                }}
              >
                <span className="text-xl" style={{ color: COLORS.SAFFRON }}>
                  ⚐
                </span>
                <span>IIT BHU, Varanasi</span>
              </li>
              <li
                className="flex items-center gap-3 justify-center"
                style={{
                  color: COLORS.CREAM,
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.05em",
                }}
              >
                <span className="text-xl" style={{ color: COLORS.SAFFRON }}>
                  ✦
                </span>
                <span>March 15-17, 2026</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div
            className="text-center relative p-6 sm:p-8 rounded-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,10,24,0.6) 0%, rgba(90,15,37,0.4) 50%, rgba(61,10,24,0.6) 100%)",
              border: "1px solid rgba(255,215,0,0.4)",
              boxShadow:
                "inset 0 0 50px rgba(255,215,0,0.08), 0 0 30px rgba(255,215,0,0.1), 0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* Rotating mandala watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] footer-card-mandala">
                <MandalaRing className="w-full h-full text-[#FFD700] opacity-[0.35]" />
              </div>
            </div>
            {/* Corner decorations */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
              style={{ borderColor: COLORS.BRIGHT_GOLD, opacity: 0.7 }}
            />

            <h4
              className="mb-6 sm:mb-7 text-lg sm:text-xl relative z-10"
              style={{
                color: COLORS.BRIGHT_GOLD,
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.15em",
                textShadow: "0 0 20px rgba(255,215,0,0.5)",
              }}
            >
              ॥ Follow ॥
            </h4>
            <div className="flex gap-4 sm:gap-5 justify-center relative z-10">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: `rgba(0,0,0,0.3)`,
                    border: `2px solid ${link.color}`,
                    boxShadow: `0 0 15px ${link.color}40`,
                    color: link.color,
                  }}
                  title={link.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${link.color}80`;
                    e.currentTarget.style.background = `${link.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${link.color}40`;
                    e.currentTarget.style.background = `rgba(0,0,0,0.3)`;
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Divider */}
        <div
          className="h-px mb-8 sm:mb-10"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.4) 20%, rgba(255,215,0,0.6) 50%, rgba(255,215,0,0.4) 80%, transparent 100%)`,
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p
            className="text-sm sm:text-base"
            style={{
              color: COLORS.CREAM,
              opacity: 0.6,
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.05em",
            }}
          >
            © 2026 Kashi Yatra • IIT (BHU) Varanasi
          </p>
          <p
            className="text-sm sm:text-base flex items-center gap-2"
            style={{
              color: COLORS.CREAM,
              opacity: 0.6,
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.05em",
            }}
          >
            Made with{" "}
            <span className="text-lg" style={{ color: COLORS.SAFFRON }}>
              🪔
            </span>{" "}
            in the City of Light
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
        style={{
          background: `linear-gradient(90deg, rgba(26,5,8,0.6) 0%, transparent 100%)`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/4 h-full pointer-events-none"
        style={{
          background: `linear-gradient(-90deg, rgba(26,5,8,0.6) 0%, transparent 100%)`,
        }}
      />
    </footer>
  );
}
