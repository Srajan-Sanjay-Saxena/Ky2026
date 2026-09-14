import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export const NAV_ASPECT = 2928 / 209; // ≈ 14.01

export const primaryLinks = [
  { label: "HOME", href: "/" },
  { label: "EVENTS", href: "/events" },
  { label: "SCHEDULE", href: "/schedule" },
  { label: "PASSES", href: "/passes" },
  { label: "ABOUT", href: "/about" },
];

export const secondaryLinks: { label: string; href: string; icon: "om" | "lotus" }[] = [
  { label: "LOGIN", href: "/login", icon: "om" },
  { label: "CONTACT", href: "#contact", icon: "lotus" },
];

/**
 * Small golden four-point sparkle that shines beside each nav link.
 */
export function ShineIcon() {
  return (
    <span
      aria-hidden
      className="nav-shine relative inline-block shrink-0"
      style={{
        width: "clamp(9px, 0.85vw, 14px)",
        height: "clamp(9px, 0.85vw, 14px)",
      }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <radialGradient id="shineGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF6D5" />
            <stop offset="45%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#C8891F" />
          </radialGradient>
        </defs>
        <path
          d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
          fill="url(#shineGrad)"
        />
        <circle cx="12" cy="12" r="2.2" fill="#FFFBEA" />
      </svg>
    </span>
  );
}

/**
 * Small spiritual / ethereal glyph beside secondary links.
 */
export function SpiritualIcon({ kind }: { kind: "om" | "lotus" }) {
  return (
    <span
      aria-hidden
      className="spirit-icon relative inline-flex items-center justify-center shrink-0"
      style={{
        width: "clamp(15px, 1.3vw, 22px)",
        height: "clamp(15px, 1.3vw, 22px)",
      }}
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
          <path d="M12 3 C13.6 8 13.6 13 12 17 C10.4 13 10.4 8 12 3 Z" fill="url(#lotusGold)" />
          <path d="M12 17 C9 13 6.5 10.5 4 9.5 C5 13 8 16 12 17 Z" fill="url(#lotusGold)" opacity="0.92" />
          <path d="M12 17 C15 13 17.5 10.5 20 9.5 C19 13 16 16 12 17 Z" fill="url(#lotusGold)" opacity="0.92" />
          <path d="M12 17 C7 15 3.5 13.5 1.5 12.5 C3 16 7 18 12 18 Z" fill="url(#lotusGold)" opacity="0.8" />
          <path d="M12 17 C17 15 20.5 13.5 22.5 12.5 C21 16 17 18 12 18 Z" fill="url(#lotusGold)" opacity="0.8" />
          <path d="M3 19 Q12 21 21 19" stroke="#FFE9A8" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        </svg>
      )}
    </span>
  );
}

/**
 * IIT BHU Badge with glow
 */
export function NavBadge() {
  return (
    <Link
      href="/"
      aria-label="Kashi Yatra — Home"
      className="absolute left-[16%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-10
                 h-[116%] sm:h-[124%] aspect-square
                 transition-transform duration-300 hover:scale-105"
    >
      {/* Outer soft halo */}
      <span
        aria-hidden
        className="badge-aura-outer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "78%",
          height: "78%",
          background: "radial-gradient(circle, rgba(255,210,90,0.55) 0%, rgba(255,160,50,0.3) 45%, rgba(255,120,30,0) 72%)",
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
          background: "radial-gradient(circle, rgba(255,248,220,0.7) 0%, rgba(255,215,0,0.35) 50%, transparent 75%)",
          filter: "blur(8px)",
        }}
      />
      <Image
        src={IMAGES.navbar.badge}
        alt="IIT BHU"
        fill
        priority
        sizes="100px"
        className="relative object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      />
    </Link>
  );
}
