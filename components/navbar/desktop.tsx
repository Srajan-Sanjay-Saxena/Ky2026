"use client";

import { memo } from "react";
import Link from "next/link";
import { primaryLinks, secondaryLinks, ShineIcon, SpiritualIcon } from "./constants";

/**
 * Desktop Navbar - Primary nav links and secondary links
 * Hidden on mobile (md:flex)
 */
export const NavbarDesktop = memo(function NavbarDesktop() {
  return (
    <>
      {/* PRIMARY NAV — centered on the bar midline */}
      <nav
        className="absolute left-[19%] right-[26%] inset-y-0 hidden sm:flex items-center justify-center gap-4 z-10"
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

      {/* SECONDARY LINKS (LOGIN / CONTACT) with spiritual icons */}
      <div
        className="absolute right-[2%] inset-y-0 hidden sm:flex items-center gap-4 z-10"
        style={{ transform: "translateY(11%)" }}
      >
        {secondaryLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group flex items-center gap-1.5 lg:gap-2 tracking-[0.1em] uppercase whitespace-nowrap
                       text-[#3a1505] hover:text-[#7a1f10] transition-colors duration-200
                       drop-shadow-[0_1px_1px_rgba(255,245,215,0.7)]"
            style={{
              fontFamily: "var(--font-ethereal), serif",
              fontWeight: 900,
              fontSize: "clamp(12px, 1vw, 17px)",
            }}
          >
            <SpiritualIcon kind={link.icon} />
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
});
