"use client";

import Image from "next/image";
import { memo } from "react";
import { IMAGES } from "@/lib/images";
import { COLORS, JAZZ_COLORS } from "@/components/constants/palette";
import { CornerOrnaments } from "./CornerOrnaments";

const infoCards = [
  {
    icon: "📧",
    label: "Email",
    value: "contact@kashiyatra.org.in",
    href: "mailto:contact@kashiyatra.org.in",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: "📍",
    label: "Find Us",
    value: "IIT (BHU) Varanasi, Uttar Pradesh 221005",
    href: "https://maps.google.com/?q=IIT+BHU+Varanasi",
  },
];

const socials = [
  { icon: "📷", label: "Instagram", href: "https://instagram.com/kashiyatra_iitbhu" },
  { icon: "📘", label: "Facebook", href: "https://facebook.com/kashiyatra" },
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/company/kashiyatra" },
  { icon: "▶️", label: "YouTube", href: "https://youtube.com/@kashiyatra" },
];

// ═══════════════════════════════════════════════════════════════════
// CONTACT INFO SECTION
// ═══════════════════════════════════════════════════════════════════
export const ContactInfo = memo(function ContactInfo() {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Royal letter scroll - Desktop only, top-right flourish */}
      <div className="hidden lg:block absolute -right-10 -top-4 w-72 h-72 opacity-70 pointer-events-none rotate-6 lg:animate-[floatOm_7s_ease-in-out_infinite]">
        <Image
          src={IMAGES.contact.envelopeScroll}
          alt=""
          fill
          className="object-contain"
          style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center"
          style={{
            fontFamily: "Georgia, serif",
            color: COLORS.BRIGHT_GOLD,
            textShadow: "0 2px 20px rgba(255,215,0,0.3)",
          }}
        >
          Reach The Yatra
        </h2>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {infoCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative p-6 sm:p-8 rounded-2xl text-center group transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(160deg, ${JAZZ_COLORS.BG_ROYAL} 0%, ${JAZZ_COLORS.BG_WINE}80 100%)`,
                border: `2px solid ${COLORS.BRIGHT_GOLD}25`,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              }}
            >
              <CornerOrnaments />
              <span className="text-4xl sm:text-5xl mb-4 block">{card.icon}</span>
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ color: COLORS.BRIGHT_GOLD, fontFamily: "Georgia, serif" }}
              >
                {card.label}
              </h3>
              <p className="text-sm leading-relaxed break-words" style={{ color: "rgba(255,255,255,0.75)" }}>
                {card.value}
              </p>
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(180deg, rgba(139,21,56,0.35) 0%, rgba(90,15,37,0.45) 100%)`,
                border: `2px solid ${COLORS.BRIGHT_GOLD}`,
                color: COLORS.BRIGHT_GOLD,
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              <span className="text-lg">{s.icon}</span>
              <span className="uppercase tracking-wider">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});
