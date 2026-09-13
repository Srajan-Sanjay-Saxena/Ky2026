"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Kashi Yatra ornate Navbar.
 *
 * Visual composition (matches the reference mock):
 *   - `Nav.png`      → the carved sandstone bar used as the background strip.
 *                      It already contains a scalloped badge frame on the far
 *                      left and a golden rounded button-plate on the far right.
 *   - `NavBadge.png` → the round IIT BHU bronze crest that overlaps the badge
 *                      frame on the left edge.
 *
 * The links are laid out on top of the bar: primary nav centered with ✦
 * separators, secondary text links (LOGIN / CONTACT) and a CTA that sits over
 * the golden plate on the right.
 *
 * Nav.png native size: 2928 x 209  (aspect ≈ 14.01 : 1)
 */

const NAV_ASPECT = 2928 / 209; // ≈ 14.01

const primaryLinks = [
  { label: "HOME", href: "#hero" },
  { label: "EVENTS", href: "/events" },
  { label: "SCHEDULE", href: "/schedule" },
  { label: "ABOUT", href: "/about" },
];

const secondaryLinks: { label: string; href: string; icon: "om" | "lotus" }[] = [
  { label: "LOGIN", href: "/login", icon: "om" },
  { label: "CONTACT", href: "#contact", icon: "lotus" },
];

/**
 * Small golden four-point sparkle that shines beside each nav link.
 * A rotating conic sheen + pulsing glow gives it a "shine" effect.
 */
function ShineIcon() {
  return (
    <span
      aria-hidden
      className="nav-shine relative inline-block shrink-0"
      style={{ width: "clamp(9px, 0.85vw, 14px)", height: "clamp(9px, 0.85vw, 14px)" }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <radialGradient id="shineGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF6D5" />
            <stop offset="45%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#C8891F" />
          </radialGradient>
        </defs>
        {/* four-point star / sparkle */}
        <path
          d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
          fill="url(#shineGrad)"
        />
        {/* bright center */}
        <circle cx="12" cy="12" r="2.2" fill="#FFFBEA" />
      </svg>
    </span>
  );
}

/**
 * Small spiritual / ethereal glyph that sits beside a secondary link.
 * - "om"    → sacred ॐ rendered in gold with a soft breathing glow.
 * - "lotus" → a lotus bloom (purity / awakening) drawn in gold.
 * Both share the ethereal gold gradient + a gentle pulsing halo.
 */
function SpiritualIcon({ kind }: { kind: "om" | "lotus" }) {
  return (
    <span
      aria-hidden
      className="spirit-icon relative inline-flex items-center justify-center shrink-0"
      style={{ width: "clamp(15px, 1.3vw, 22px)", height: "clamp(15px, 1.3vw, 22px)" }}
    >
      {kind === "om" ? (
        <span
          className="leading-none"
          style={{
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: "clamp(15px, 1.3vw, 22px)",
            background: "linear-gradient(135deg, #FFF3C4, #FFD700 45%, #C8891F)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          ॐ
        </span>
      ) : (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id="lotusGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF3C4" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#C8891F" />
            </linearGradient>
          </defs>
          {/* center petal + side petals + outer petals = lotus bloom */}
          <path d="M12 3 C13.6 8 13.6 13 12 17 C10.4 13 10.4 8 12 3 Z" fill="url(#lotusGold)" />
          <path d="M12 17 C9 13 6.5 10.5 4 9.5 C5 13 8 16 12 17 Z" fill="url(#lotusGold)" opacity="0.92" />
          <path d="M12 17 C15 13 17.5 10.5 20 9.5 C19 13 16 16 12 17 Z" fill="url(#lotusGold)" opacity="0.92" />
          <path d="M12 17 C7 15 3.5 13.5 1.5 12.5 C3 16 7 18 12 18 Z" fill="url(#lotusGold)" opacity="0.8" />
          <path d="M12 17 C17 15 20.5 13.5 22.5 12.5 C21 16 17 18 12 18 Z" fill="url(#lotusGold)" opacity="0.8" />
          {/* water line */}
          <path d="M3 19 Q12 21 21 19" stroke="#FFE9A8" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        </svg>
      )}
    </span>
  );
}

export function Navbar({
  className = "",
  position = "fixed",
  topOffset = 0,
}: {
  className?: string;
  /**
   * - "fixed"    → pins to the viewport (global overlay).
   * - "absolute" → pins to the nearest positioned ancestor.
   * - "sticky"   → flows at the top of its container and sticks to the viewport
   *                top while that container is scrolled through.
   * - "relative" → normal flow; use when a parent wrapper controls positioning
   *                (e.g. ScrollNavbar handles the fixed reveal).
   */
  position?: "fixed" | "absolute" | "sticky" | "relative";
  /** Push the bar down from the top by this many px (via top offset). */
  topOffset?: number;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll-driven shadow only makes sense when the bar is pinned to the
    // viewport. In absolute/sticky mode it scrolls with its container.
    if (position !== "fixed") return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [position]);

  // Only "fixed"/"absolute" should stretch edge-to-edge via left/right pins.
  const edgePinned = position === "fixed" || position === "absolute";

  return (
    <header
      className={`${position} ${edgePinned ? "left-0 right-0" : ""} z-[200] transition-all duration-500 ${className}`}
      style={{
        top: position === "relative" ? undefined : topOffset,
        marginTop: position === "relative" ? topOffset : undefined,
        filter: scrolled
          ? "drop-shadow(0 8px 24px rgba(0,0,0,0.55))"
          : "drop-shadow(0 4px 16px rgba(0,0,0,0.35))",
      }}
    >
      {/* Wrapper keeps the bar centered and constrained on large screens */}
      <div className="relative mx-auto w-full max-w-[1600px] px-2 sm:px-3 md:px-4 pt-2 md:pt-3">
        {/* The ornate bar — its height is driven by width to preserve aspect */}
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${NAV_ASPECT}`,
            // Clamp so the bar never gets absurdly short on huge screens or
            // uselessly thin on small ones.
            minHeight: 56,
            maxHeight: 120,
          }}
        >
          {/* Background carved bar */}
          <Image
            src="/Nav.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-fill pointer-events-none select-none"
          />

          {/* ── BADGE (IIT BHU crest) — sits centered on the scalloped frame
                 baked into Nav.png (frame center ≈ 16.5% from left, and a hair
                 below the bar's vertical middle) ── */}
          <Link
            href="#hero"
            aria-label="Kashi Yatra — Home"
            className="absolute left-[16.18%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-10
                       h-[116%] sm:h-[124%] md:h-[132%] aspect-square
                       transition-transform duration-300 hover:scale-105"
          >
            {/* ── Ethereal divine glow radiating from BEHIND the crest ──
                 Kept tight to the medallion so it reads as a back-glow rather
                 than bleeding onto the bar/background. All layers are centered
                 on the badge center and pulse gently. ── */}
            {/* Outer soft halo */}
            <span
              aria-hidden
              className="badge-aura-outer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "78%",
                height: "78%",
                background:
                  "radial-gradient(circle, rgba(255,210,90,0.55) 0%, rgba(255,160,50,0.3) 45%, rgba(255,120,30,0) 72%)",
                filter: "blur(14px)",
              }}
            />
            {/* Inner bright core glow */}
            <span
              aria-hidden
              className="badge-aura-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "58%",
                height: "58%",
                background:
                  "radial-gradient(circle, rgba(255,248,220,0.7) 0%, rgba(255,215,0,0.35) 50%, transparent 75%)",
                filter: "blur(8px)",
              }}
            />

            <Image
              src="/NavBadge.png"
              alt="IIT BHU"
              fill
              priority
              sizes="100px"
              className="relative object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            />
          </Link>

          {/* ── PRIMARY NAV — centered on the bar midline (matches the golden
                 plate's vertical center). ── */}
          <nav
            className="absolute left-[19%] right-[26%] inset-y-0 hidden md:flex items-center justify-center gap-4 lg:gap-8 z-10"
            aria-label="Primary"
            style={{ transform: "translateY(8%)" }}
          >
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-pill group flex items-center gap-1.5 lg:gap-2
                           px-3 lg:px-4 py-1 lg:py-1.5 rounded-full
                           tracking-[0.12em] uppercase whitespace-nowrap
                           text-[#3a1505] hover:text-[#5a1205]
                           transition-all duration-300 hover:scale-[1.05]"
                style={{
                  fontFamily: "var(--font-ethereal), serif",
                  fontWeight: 900,
                  fontSize: "clamp(12px, 1.05vw, 18px)",
                  background:
                    "linear-gradient(135deg, rgba(255,215,0,0.28) 0%, rgba(212,168,83,0.18) 50%, rgba(184,134,11,0.28) 100%)",
                  border: "1px solid rgba(255,215,0,0.55)",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,245,200,0.35)",
                  textShadow: "0 1px 1px rgba(255,245,215,0.7)",
                }}
              >
                <ShineIcon />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── SECONDARY LINKS (LOGIN / CONTACT) with spiritual icons ── */}
          <div
            className="absolute right-[2%] inset-y-0 hidden md:flex items-center gap-4 lg:gap-6 z-10"
            style={{ transform: "translateY(11%)" }}
          >
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 lg:gap-2 tracking-[0.1em] uppercase whitespace-nowrap
                           text-[#3a1505] hover:text-[#7a1f10] transition-colors duration-200
                           drop-shadow-[0_1px_1px_rgba(255,245,215,0.7)]"
                style={{ fontFamily: "var(--font-ethereal), serif", fontWeight: 900, fontSize: "clamp(12px, 1vw, 17px)" }}
              >
                <SpiritualIcon kind={link.icon} />
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── MOBILE menu button ── */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger sits on the right of the bar */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="absolute right-[2%] top-[58%] -translate-y-1/2 z-20
                   flex h-8 w-8 flex-col items-center justify-center gap-1.5"
      >
        <span
          className="hamburger-line block h-[3px] w-6 rounded-full transition-transform duration-300"
          style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
        />
        <span
          className="hamburger-line hamburger-line-2 block h-[3px] w-6 rounded-full transition-opacity duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="hamburger-line hamburger-line-3 block h-[3px] w-6 rounded-full transition-transform duration-300"
          style={{
            transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`naksha-panel absolute left-2 right-2 top-[calc(100%+8px)] z-10 origin-top overflow-hidden
                    transition-all duration-500 ${
                      open
                        ? "max-h-[560px] opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
        style={{
          borderRadius: "14px",
          // Aged golden parchment / naksha
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(245,222,164,0.98) 0%, rgba(214,176,110,0.98) 45%, rgba(168,124,64,0.98) 100%)",
          border: "2px solid rgba(255,215,0,0.55)",
          boxShadow:
            "0 14px 34px rgba(0,0,0,0.55), inset 0 0 24px rgba(120,72,20,0.4), inset 0 0 2px rgba(255,240,200,0.6)",
        }}
      >
        {/* Mottled parchment texture */}
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Faint mystical mandala watermark behind the links */}
        <span
          aria-hidden
          className="naksha-mandala absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "78%",
            aspectRatio: "1",
            opacity: 0.14,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%235a3410' stroke-width='1'%3E%3Ccircle cx='100' cy='100' r='96'/%3E%3Ccircle cx='100' cy='100' r='78'/%3E%3Ccircle cx='100' cy='100' r='54'/%3E%3Ccircle cx='100' cy='100' r='30'/%3E%3Cg%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(45 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(90 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(135 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(180 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(225 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(270 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(315 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Inner ornamental frame */}
        <span
          aria-hidden
          className="absolute inset-[6px] rounded-[10px] pointer-events-none"
          style={{ border: "1px solid rgba(122,61,16,0.5)" }}
        />
        {/* Decorative corner diamonds */}
        {[
          "top-[10px] left-[10px]",
          "top-[10px] right-[10px]",
          "bottom-[10px] left-[10px]",
          "bottom-[10px] right-[10px]",
        ].map((pos) => (
          <span
            key={pos}
            aria-hidden
            className={`absolute ${pos} w-2 h-2 rotate-45 pointer-events-none`}
            style={{
              background:
                "linear-gradient(135deg, #FFD700, #B8860B)",
              boxShadow: "0 0 6px rgba(255,215,0,0.7)",
            }}
          />
        ))}

        <nav
          className="relative flex flex-col px-5 pb-4 pt-3 gap-1"
          aria-label="Mobile"
          style={{ fontFamily: "var(--font-ethereal), serif" }}
        >
          {/* Mystical header — ॐ crowned title */}
          <div className="flex flex-col items-center pb-2">
            <span
              className="text-[18px] leading-none"
              style={{
                background: "linear-gradient(135deg, #FFF3C4, #FFD700 45%, #B8860B)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 4px rgba(255,215,0,0.6))",
              }}
            >
              ॐ
            </span>
            <span
              className="mt-1 text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "#6b3f14", fontWeight: 900 }}
            >
              नक्शा
            </span>
            <span
              aria-hidden
              className="mt-1.5 flex items-center justify-center gap-2 w-full text-[#8a5a1a] opacity-80"
            >
              <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }} />
              <span className="text-[9px]">✦</span>
              <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }} />
            </span>
          </div>

          {[...primaryLinks, ...secondaryLinks].map((link, i, arr) => (
            <div key={link.label} className="flex flex-col">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="naksha-link naksha-item flex items-center justify-center gap-2 px-3 py-2 rounded-md
                           text-[15px] uppercase tracking-[0.18em] text-center
                           text-[#3d1e0a] transition-all duration-300"
                style={{
                  fontWeight: 900,
                  textShadow: "0 1px 1px rgba(255,245,215,0.6)",
                  // staggered entrance when the panel opens
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(-8px)",
                  transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                }}
              >
                <span aria-hidden className="text-[#b8860b] text-[9px]">◆</span>
                {link.label}
                <span aria-hidden className="text-[#b8860b] text-[9px]">◆</span>
              </Link>
              {/* mystical divider between items */}
              {i < arr.length - 1 && (
                <span
                  aria-hidden
                  className="flex items-center justify-center gap-2 py-0.5 text-[#8a5a1a] opacity-60"
                >
                  <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }} />
                  <span className="text-[9px]">✦</span>
                  <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }} />
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
