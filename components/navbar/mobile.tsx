"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryLinks, secondaryLinks } from "./constants";

/**
 * Mobile Navbar - Hamburger menu with dropdown panel
 * Visible on mobile (md:hidden)
 */
export const NavbarMobile = memo(function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const allLinks = [...primaryLinks, ...secondaryLinks];

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

        {/* Faint mystical mandala watermark */}
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
              background: "linear-gradient(135deg, #FFD700, #B8860B)",
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
              <span
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }}
              />
              <span className="text-[9px]">✦</span>
              <span
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }}
              />
            </span>
          </div>

          {allLinks.map((link, i, arr) => {
            const active = isActive(link.href);
            return (
              <div key={link.label} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="naksha-link naksha-item flex items-center justify-center gap-2 px-3 py-2 rounded-md
                             text-[15px] uppercase tracking-[0.18em] text-center
                             transition-all duration-300"
                  style={{
                    fontWeight: 900,
                    color: active ? "#3a1505" : "#3d1e0a",
                    background: active
                      ? "linear-gradient(135deg, rgba(255,215,0,0.7) 0%, rgba(255,230,100,0.8) 50%, rgba(255,215,0,0.7) 100%)"
                      : "transparent",
                    boxShadow: active
                      ? "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,180,0,0.5), inset 0 0 15px rgba(255,255,200,0.6)"
                      : "none",
                    textShadow: active
                      ? "0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.8)"
                      : "0 1px 1px rgba(255,245,215,0.6)",
                    border: active ? "1px solid rgba(255,230,100,0.9)" : "1px solid transparent",
                    opacity: open ? 1 : 0,
                    transform: open ? (active ? "translateY(0) scale(1.02)" : "translateY(0)") : "translateY(-8px)",
                    transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                  }}
                >
                  <span 
                    aria-hidden 
                    className="text-[9px]"
                    style={{ 
                      color: active ? "#FFD700" : "#b8860b",
                      filter: active ? "drop-shadow(0 0 4px rgba(255,215,0,0.9))" : "none",
                    }}
                  >
                    {active ? "✦" : "◆"}
                  </span>
                  {link.label}
                  <span 
                    aria-hidden 
                    className="text-[9px]"
                    style={{ 
                      color: active ? "#FFD700" : "#b8860b",
                      filter: active ? "drop-shadow(0 0 4px rgba(255,215,0,0.9))" : "none",
                    }}
                  >
                    {active ? "✦" : "◆"}
                  </span>
                </Link>
                {/* mystical divider between items */}
                {i < arr.length - 1 && (
                  <span
                    aria-hidden
                    className="flex items-center justify-center gap-2 py-0.5 text-[#8a5a1a] opacity-60"
                  >
                    <span
                      className="h-px w-8"
                      style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }}
                    />
                    <span className="text-[9px]">✦</span>
                    <span
                      className="h-px w-8"
                      style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }}
                    />
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
});
