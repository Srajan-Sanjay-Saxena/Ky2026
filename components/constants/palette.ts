/**
 * Color Palette Constants for Kashi Yatra 2026
 * 
 * Centralized color definitions, gradients, and backgrounds.
 * Import from this file for consistent theming across components.
 */

// ═══════════════════════════════════════════════════════════════════
// BASE COLORS
// ═══════════════════════════════════════════════════════════════════

export const COLORS = {
  // Primary palette
  SAFFRON: "#FF6B00",
  GOLD: "#D4A853",
  BRIGHT_GOLD: "#FFD700",
  DARK_GOLD: "#8B6914",
  DARKER_GOLD: "#4a3510",
  GOLD_BROWN: "#B8860B",
  MAROON: "#8B1538",
  DARK_MAROON: "#5a0f25",
  ROYAL_MAROON: "#6B1328",
  DEEP_MAROON: "#3d0a18",
  
  // Neutrals
  CREAM: "#FDF6E3",
  STONE: "#D4B896",
  DARK_BROWN: "#2D1810",
  LAVENDER: "#9D8CD9",
  
  // Blues
  GANGA_BLUE: "#1A5F7A",
  DEEP_NIGHT: "#1A1A2E",
  MIDNIGHT: "#0a0a15",
  
  // River blues
  RIVER_SURFACE: "#1a4a6e",
  RIVER_MID: "#15405c",
  RIVER_DEEP: "#0c2030",
  
  // Card backgrounds
  CARD_DARK_PURPLE: "#1A0A1A",
  CARD_FRAME_DARK: "#1a0d10",
  CARD_FRAME_MID: "#2a1a18",
} as const;

// ═══════════════════════════════════════════════════════════════════
// SKY GRADIENTS
// ═══════════════════════════════════════════════════════════════════

/** Night theme - deep blues and purples */
export const GRADIENT_SKY_NIGHT = `linear-gradient(180deg, 
  #050510 0%, 
  #0a0a1a 10%,
  #0f1025 20%,
  #141430 32%,
  #1a1a40 44%,
  #1e1e4a 54%,
  #222255 64%,
  #1a1a45 74%,
  #141435 84%,
  #0f0f28 94%,
  #0a0a1a 100%
)`;

/** Evening theme - warm oranges, pinks, purples (sunset vibes) */
export const GRADIENT_SKY_EVENING = `linear-gradient(180deg,
  #1a1a2e 0%,
  #2d1f3d 10%,
  #4a2c4a 20%,
  #6b3a50 32%,
  #8b4a55 44%,
  #b86a5a 54%,
  #d4845a 64%,
  #e8a060 74%,
  #f0b86a 84%,
  #f5c87a 94%,
  #f8d888 100%
)`;

// ═══════════════════════════════════════════════════════════════════
// RIVER GRADIENTS
// ═══════════════════════════════════════════════════════════════════

/** River water gradient */
export const GRADIENT_RIVER = `linear-gradient(180deg, 
  #1a4a6e 0%, 
  #15405c 20%, 
  #12354d 40%, 
  #0f2a3e 60%, 
  #0c2030 80%, 
  #081520 100%
)`;

/** Moon reflection on water */
export const GRADIENT_MOON_REFLECTION = `radial-gradient(ellipse, rgba(200,220,255,0.12) 0%, transparent 70%)`;

// ═══════════════════════════════════════════════════════════════════
// FOOTER GRADIENTS (Royal Maroon & Gold Theme)
// ═══════════════════════════════════════════════════════════════════

/** Footer main background - royal maroon depth */
export const GRADIENT_FOOTER = `linear-gradient(180deg, 
  #3d0a18 0%, 
  #5a0f25 15%,
  #6B1328 35%,
  #8B1538 50%,
  #6B1328 65%,
  #5a0f25 85%,
  #3d0a18 100%
)`;

/** Footer alternative - darker, more dramatic */
export const GRADIENT_FOOTER_DARK = `linear-gradient(180deg, 
  #1a0508 0%, 
  #2d0a12 20%,
  #4a1020 40%,
  #5a0f25 60%,
  #3d0a18 80%,
  #1a0508 100%
)`;

/** Footer radial glow overlay */
export const GRADIENT_FOOTER_GLOW = `radial-gradient(ellipse at center 30%, rgba(255,215,0,0.08) 0%, transparent 50%)`;

/** Footer bottom ambient glow */
export const GRADIENT_FOOTER_AMBIENT = `radial-gradient(ellipse at bottom, rgba(255,107,0,0.15) 0%, transparent 60%)`;

// ═══════════════════════════════════════════════════════════════════
// DECORATIVE BORDERS & ACCENTS
// ═══════════════════════════════════════════════════════════════════

/** Gold border gradient - horizontal */
export const GRADIENT_BORDER_GOLD = `linear-gradient(90deg, 
  transparent 0%,
  ${COLORS.MAROON} 10%,
  ${COLORS.BRIGHT_GOLD} 30%, 
  ${COLORS.SAFFRON} 50%, 
  ${COLORS.BRIGHT_GOLD} 70%, 
  ${COLORS.MAROON} 90%,
  transparent 100%
)`;

/** Royal border with maroon accents */
export const GRADIENT_BORDER_ROYAL = `linear-gradient(90deg, 
  ${COLORS.DEEP_MAROON} 0%,
  ${COLORS.MAROON} 15%,
  ${COLORS.BRIGHT_GOLD} 35%, 
  ${COLORS.SAFFRON} 50%, 
  ${COLORS.BRIGHT_GOLD} 65%, 
  ${COLORS.MAROON} 85%,
  ${COLORS.DEEP_MAROON} 100%
)`;

/** Vertical gold divider */
export const GRADIENT_DIVIDER_GOLD = `linear-gradient(180deg, 
  transparent 0%, 
  ${COLORS.BRIGHT_GOLD} 20%, 
  ${COLORS.GOLD} 50%, 
  ${COLORS.BRIGHT_GOLD} 80%, 
  transparent 100%
)`;

// ═══════════════════════════════════════════════════════════════════
// BUTTON & INTERACTIVE GRADIENTS
// ═══════════════════════════════════════════════════════════════════

/** Gold button background */
export const GRADIENT_BUTTON_GOLD = `linear-gradient(135deg, 
  rgba(255,215,0,0.2) 0%, 
  rgba(139,21,56,0.2) 100%
)`;

/** Gold shimmer overlay */
export const GRADIENT_SHIMMER = `linear-gradient(90deg, 
  transparent 0%, 
  rgba(255,215,0,0.3) 50%, 
  transparent 100%
)`;

/** Title text shimmer */
export const GRADIENT_TEXT_SHIMMER = `linear-gradient(90deg, 
  transparent 0%, 
  rgba(255,255,255,0.1) 50%, 
  transparent 100%
)`;

// ═══════════════════════════════════════════════════════════════════
// GLOW EFFECTS
// ═══════════════════════════════════════════════════════════════════

export const GLOW = {
  GOLD_SOFT: "0 0 15px rgba(255,215,0,0.3)",
  GOLD_MEDIUM: "0 0 20px rgba(255,215,0,0.4)",
  GOLD_STRONG: "0 0 30px rgba(255,215,0,0.5)",
  SAFFRON_SOFT: "0 0 15px rgba(255,107,0,0.3)",
  SAFFRON_MEDIUM: "0 0 20px rgba(255,107,0,0.4)",
  MAROON_SOFT: "0 0 15px rgba(139,21,56,0.3)",
  BOAT_GLOW: "drop-shadow(0 0 8px rgba(255,200,100,0.3))",
} as const;

// ═══════════════════════════════════════════════════════════════════
// TEXT SHADOWS
// ═══════════════════════════════════════════════════════════════════

export const TEXT_SHADOW = {
  GOLD_GLOW: "0 0 15px rgba(255,215,0,0.3)",
  GOLD_STRONG: "0 0 20px rgba(255,215,0,0.5)",
  TITLE_DEPTH: "0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.4)",
} as const;

// ═══════════════════════════════════════════════════════════════════
// SECTION BACKGROUNDS (for consistency)
// ═══════════════════════════════════════════════════════════════════

export const BG_SECTIONS = {
  HERO: GRADIENT_SKY_EVENING,
  RIVER: GRADIENT_RIVER,
  VIBES: `linear-gradient(180deg, #1A1A2E 0%, #0a0a15 100%)`,
  HIGHLIGHTS: `linear-gradient(180deg, #0a0a15 0%, #1A1A2E 50%, #0a0a15 100%)`,
  FOOTER: GRADIENT_FOOTER,
} as const;

// ═══════════════════════════════════════════════════════════════════
// SHADOWS
// ═══════════════════════════════════════════════════════════════════

export const SHADOWS = {
  /** Royal card shadow with purple glow and gold border hint */
  CARD_ROYAL: "0 10px 40px rgba(74, 26, 85, 0.5), 0 0 0 1px rgba(212, 168, 83, 0.2)",
  CARD_ROYAL_HOVER: "0 20px 60px rgba(74, 26, 85, 0.6), 0 0 30px rgba(212, 168, 83, 0.3)",
  /** Badge shadow */
  BADGE_GOLD: "0 4px 20px rgba(212, 168, 83, 0.6)",
  /** Button shadow */
  BUTTON_GOLD: "0 4px 15px rgba(212, 168, 83, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
  /** QR frame shadow */
  QR_FRAME: "0 0 15px rgba(212, 168, 83, 0.2), inset 0 0 10px rgba(0,0,0,0.3)",
} as const;

// ═══════════════════════════════════════════════════════════════════
// TEXT GRADIENTS (for WebkitBackgroundClip text effects)
// ═══════════════════════════════════════════════════════════════════

/** Gold heading text gradient - use with WebkitBackgroundClip: "text" */
export const GRADIENT_TEXT_GOLD = {
  background: `linear-gradient(135deg, ${COLORS.BRIGHT_GOLD} 0%, ${COLORS.GOLD} 50%, ${COLORS.BRIGHT_GOLD} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

/** Gold price text gradient - vertical */
export const GRADIENT_TEXT_GOLD_VERTICAL = {
  background: `linear-gradient(180deg, ${COLORS.BRIGHT_GOLD} 0%, ${COLORS.GOLD} 50%, ${COLORS.BRIGHT_GOLD} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

// ═══════════════════════════════════════════════════════════════════
// BADGE & BUTTON GRADIENTS
// ═══════════════════════════════════════════════════════════════════

/** Popular badge gold gradient */
export const GRADIENT_BADGE_GOLD = `linear-gradient(135deg, ${COLORS.GOLD} 0%, ${COLORS.BRIGHT_GOLD} 50%, ${COLORS.GOLD} 100%)`;

/** Royal button gradient - vertical gold to brown */
export const GRADIENT_BUTTON_ROYAL = `linear-gradient(180deg, ${COLORS.GOLD} 0%, ${COLORS.GOLD_BROWN} 50%, ${COLORS.DARK_GOLD} 100%)`;

// ═══════════════════════════════════════════════════════════════════
// CARD FRAME GRADIENTS
// ═══════════════════════════════════════════════════════════════════

/** Outer gold frame gradient */
export const GRADIENT_FRAME_GOLD = `linear-gradient(180deg, ${COLORS.DARKER_GOLD} 0%, ${COLORS.DARK_GOLD} 10%, ${COLORS.GOLD} 25%, ${COLORS.BRIGHT_GOLD} 50%, ${COLORS.GOLD} 75%, ${COLORS.DARK_GOLD} 90%, ${COLORS.DARKER_GOLD} 100%)`;

/** Inner dark frame gradient */
export const GRADIENT_FRAME_DARK = `linear-gradient(180deg, ${COLORS.CARD_FRAME_DARK} 0%, ${COLORS.CARD_FRAME_MID} 50%, ${COLORS.CARD_FRAME_DARK} 100%)`;

// ═══════════════════════════════════════════════════════════════════
// DECORATIVE LINE GRADIENTS
// ═══════════════════════════════════════════════════════════════════

/** Horizontal decorative line - fade in from left */
export const GRADIENT_LINE_GOLD_LEFT = `linear-gradient(90deg, transparent, ${COLORS.GOLD})`;

/** Horizontal decorative line - fade out to right */
export const GRADIENT_LINE_GOLD_RIGHT = `linear-gradient(90deg, ${COLORS.GOLD}, transparent)`;

/** Border image gradient for ornate borders */
export const GRADIENT_BORDER_ORNATE = `linear-gradient(90deg, transparent 0%, ${COLORS.DARK_GOLD} 15%, ${COLORS.GOLD} 30%, ${COLORS.BRIGHT_GOLD} 50%, ${COLORS.GOLD} 70%, ${COLORS.DARK_GOLD} 85%, transparent 100%)`;
