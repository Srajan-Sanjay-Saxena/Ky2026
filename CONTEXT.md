# Kashiyatra'26 Domain Glossary

This file records domain terms and architectural concepts used in this codebase.
Future contributors and AI agents should consult this before proposing changes.

---

## MotionZone

A container component (`components/motion/MotionZone.tsx`) that **pauses ambient animations** when:
- The zone scrolls off-screen (IntersectionObserver with 10% root margin)
- The user has `prefers-reduced-motion: reduce` enabled

**Gates three animation mechanisms:**
1. **SVG SMIL** (`<animate repeatCount="indefinite">`) — via `svg.pauseAnimations()` / `unpauseAnimations()`
2. **CSS @keyframes** (`animation: ... infinite`) — via `animation-play-state: paused`
3. **Framer-motion** (`repeat: Infinity`) — via React context (`useMotionZone()`)

**Usage:** Wrap decorative/ambient animation clusters (diyas, birds, floating particles, glowing lamps).

**Do NOT wrap:** Interactive controls (buttons, cards with hover/tap feedback). Per accessibility guidelines, reduced-motion should freeze ambient loops but preserve interaction feedback.

**Current placements (4 zones):**
- `Hero/River` — diyas, lotuses, boats, water ripples
- `Hero/main` Sky cluster — birds, moon, sun, clouds, kandeels
- `BanarasiVibes/LampPost`
- `Footer` decorative diyas

---

## Section Palettes

Each major section may define its own **local palette** with distinct colors:
- `constants/palette.ts` — the shared **Kashi theme** (gold, maroon, river blues)
- `FestivalVibes/palette.ts` (`JAZZ_COLORS`) — wine/magenta/neon for the jazz section
- `ProNites/constants.tsx` (`CONCERT_COLORS`) — cool neon purple/pink for concerts

These are **intentional design languages**, not duplication. Shared base values (e.g., `#FFD700`) should be imported from `constants/palette.ts` where appropriate, but section-specific colors stay local.

---

*Add new terms as the codebase evolves.*
