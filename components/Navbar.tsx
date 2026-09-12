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
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/about" },
];

const secondaryLinks = [
  { label: "LOGIN", href: "/login" },
  { label: "CONTACT", href: "#contact" },
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
                       h-[150%] sm:h-[162%] md:h-[172%] aspect-square
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
              sizes="120px"
              className="relative object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            />
          </Link>

          {/* ── PRIMARY NAV — centered on the bar midline (matches the golden
                 plate's vertical center). ── */}
          <nav
            className="absolute left-[19%] right-[26%] inset-y-0 hidden md:flex items-center justify-center gap-3 lg:gap-6 z-10"
            aria-label="Primary"
            style={{ transform: "translateY(11%)" }}
          >
            {primaryLinks.map((link) => (
              <div
                key={link.label}
                className="flex items-center gap-3 lg:gap-6"
              >
                <span className="flex items-center gap-1.5 lg:gap-2 group">
                  <ShineIcon />
                  <Link
                    href={link.href}
                    className="tracking-[0.12em] uppercase whitespace-nowrap
                               text-[#3a1505] group-hover:text-[#7a1f10]
                               transition-colors duration-200
                               drop-shadow-[0_1px_1px_rgba(255,245,215,0.7)]"
                    style={{
                      fontFamily: "var(--font-ethereal), serif",
                      fontWeight: 900,
                      fontSize: "clamp(13px, 1.15vw, 20px)",
                    }}
                  >
                    {link.label}
                  </Link>
                </span>
              </div>
            ))}
          </nav>

          {/* ── SECONDARY LINKS (LOGIN / CONTACT) — left of the golden plate ── */}
          <div
            className="absolute right-[13%] inset-y-0 hidden md:flex items-center gap-3 lg:gap-4 z-10"
            style={{ transform: "translateY(11%)" }}
          >
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="tracking-[0.1em] uppercase whitespace-nowrap
                           text-[#3a1505] hover:text-[#7a1f10] transition-colors duration-200
                           drop-shadow-[0_1px_1px_rgba(255,245,215,0.7)]"
                style={{ fontFamily: "var(--font-ethereal), serif", fontWeight: 700, fontSize: "clamp(12px, 1vw, 17px)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── CTA — positioned directly over the golden plate baked into
                 Nav.png. The plate sits lower than the bar midline (~58% down)
                 and around 93.5% across, so this is anchored independently of
                 the link rows. ── */}
          <Link
            href="/register"
            className="absolute right-[3.6%] top-[67%] -translate-y-1/2 z-10
                       hidden md:flex items-center justify-center whitespace-nowrap
                       uppercase tracking-[0.08em]
                       text-[#5a2d0a] hover:text-[#3d1e05]
                       transition-transform duration-200 hover:scale-[1.04]"
            style={{
              textShadow: "0 1px 0 rgba(255,240,200,0.6)",
              fontFamily: "var(--font-ethereal), serif",
              fontWeight: 900,
              fontSize: "clamp(12px, 1vw, 17px)",
            }}
          >
            APPLY NOW
          </Link>

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
        className="absolute right-[3%] top-1/2 -translate-y-1/2 z-20
                   flex h-8 w-8 flex-col items-center justify-center gap-1.5"
      >
        <span
          className="block h-0.5 w-5 rounded-full bg-[#4a2410] transition-transform duration-300"
          style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
        />
        <span
          className="block h-0.5 w-5 rounded-full bg-[#4a2410] transition-opacity duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="block h-0.5 w-5 rounded-full bg-[#4a2410] transition-transform duration-300"
          style={{
            transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-2 right-2 top-[calc(100%+6px)] z-10 origin-top overflow-hidden rounded-xl
                    transition-all duration-300 ${
                      open
                        ? "max-h-[420px] opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(196,160,110,0.97) 0%, rgba(150,110,70,0.97) 100%)",
          border: "1px solid rgba(255,215,0,0.4)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(6px)",
        }}
      >
        <nav
          className="flex flex-col p-3"
          aria-label="Mobile"
          style={{ fontFamily: "var(--font-ethereal), serif" }}
        >
          {[...primaryLinks, ...secondaryLinks].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-[0.1em]
                         text-[#3d1e0a] hover:bg-[rgba(255,215,0,0.2)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="mt-2 px-3 py-2.5 rounded-lg text-center text-sm font-bold uppercase tracking-[0.1em]
                       text-[#5a2d0a]"
            style={{
              background: "linear-gradient(135deg, #FFD700, #E8B820)",
              boxShadow: "0 3px 10px rgba(0,0,0,0.35)",
            }}
          >
            APPLY NOW
          </Link>
        </nav>
      </div>
    </div>
  );
}
