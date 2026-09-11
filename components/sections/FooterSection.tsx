"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Diya } from "../svg";

gsap.registerPlugin(ScrollTrigger);

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

export default function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #0a0a15 100%)",
      }}
    >
      {/* Top decorative border */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 sm:h-1"
        style={{
          background: "linear-gradient(90deg, #8B1538, #FFD700, #FF6B00, #FFD700, #8B1538)",
        }}
      />

      {/* Floating diyas - hidden on mobile */}
      <div className="hidden sm:block absolute top-8 left-[10%] w-6 sm:w-8 h-8 sm:h-10 opacity-60">
        <Diya className="w-full h-full" />
      </div>
      <div className="hidden sm:block absolute top-12 right-[15%] w-5 sm:w-6 h-6 sm:h-8 opacity-40">
        <Diya className="w-full h-full" />
      </div>

      <div ref={contentRef} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
              style={{
                color: "#FFD700",
                textShadow: "0 0 15px rgba(255,215,0,0.3)",
              }}
            >
              काशी यात्रा
            </h3>
            <p className="text-[#FDF6E3] opacity-70 mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0 text-sm sm:text-base">
              The annual cultural festival celebrating the spirit of Varanasi. 
              Three days of art, music, technology, and unforgettable memories.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(139,21,56,0.2))",
                    border: "1px solid rgba(255,215,0,0.3)",
                  }}
                  title={link.name}
                >
                  <span className="text-base sm:text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#FFD700] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-[#FDF6E3] opacity-70 hover:opacity-100 hover:text-[#FFD700] transition-all duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#FFD700] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[#FDF6E3] opacity-70 text-sm sm:text-base">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span>📧</span>
                <a href="mailto:contact@kashiyatra.in" className="hover:text-[#FFD700] transition-colors">
                  contact@kashiyatra.in
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span>📍</span>
                <span>IIT BHU, Varanasi</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span>📅</span>
                <span>March 15-17, 2026</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4"
          style={{ borderTop: "1px solid rgba(255,215,0,0.1)" }}
        >
          <p className="text-[#FDF6E3] opacity-50 text-xs sm:text-sm">
            © 2026 Kashi Yatra. All rights reserved.
          </p>
          <p className="text-[#FDF6E3] opacity-50 text-xs sm:text-sm">
            Made with 🪔 in Varanasi
          </p>
        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[60%] h-20 sm:h-32 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(255,107,0,0.1), transparent 70%)",
        }}
      />
    </footer>
  );
}
