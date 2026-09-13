/**
 * Style constants for Passes section
 * Centralized for easy theming and adjustments
 */

import type { CSSProperties } from "react";

/**
 * Background styles
 */
export const SECTION_BG: CSSProperties = {
  background: `
    linear-gradient(180deg,
      #1A1A2E 0%,
      #16162a 20%,
      #121228 40%,
      #0f0f24 60%,
      #0c0c20 80%,
      #0a0a1a 100%
    )
  `,
};

/**
 * Decorative overlay pattern (subtle mandala/geometric)
 */
export const PATTERN_OVERLAY: CSSProperties = {
  backgroundImage: `
    radial-gradient(circle at 20% 80%, rgba(212, 168, 83, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 0, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(26, 95, 122, 0.02) 0%, transparent 70%)
  `,
};

/**
 * Card glass morphism base
 */
export const CARD_GLASS: CSSProperties = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

/**
 * Golden border gradient for cards
 */
export const GOLDEN_BORDER = `
  linear-gradient(135deg, 
    rgba(212, 168, 83, 0.4) 0%, 
    rgba(255, 215, 0, 0.6) 25%,
    rgba(212, 168, 83, 0.4) 50%,
    rgba(184, 134, 11, 0.5) 75%,
    rgba(212, 168, 83, 0.4) 100%
  )
`;

/**
 * Card shadow with golden tint
 */
export const CARD_SHADOW = "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 168, 83, 0.1)";
export const CARD_SHADOW_HOVER = "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 168, 83, 0.2)";

/**
 * Popular badge gradient
 */
export const POPULAR_BADGE_BG = `
  linear-gradient(135deg, 
    #D4A853 0%, 
    #FFD700 50%, 
    #D4A853 100%
  )
`;

/**
 * Button styles
 */
export const BUTTON_BASE: CSSProperties = {
  background: "linear-gradient(135deg, #D4A853 0%, #B8860B 100%)",
  border: "none",
  color: "#1A1A2E",
  fontWeight: 700,
  cursor: "pointer",
};

export const BUTTON_SHIMMER_GRADIENT = `
  linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  )
`;

/**
 * Price text gradient
 */
export const PRICE_GRADIENT: CSSProperties = {
  background: "linear-gradient(135deg, #FFD700, #D4A853)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Section heading styles
 */
export const HEADING_GRADIENT: CSSProperties = {
  background: "linear-gradient(135deg, #FFD700 0%, #D4A853 50%, #FFD700 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Benefit check icon color
 */
export const CHECK_ICON_COLOR = "#D4A853";
export const CHECK_ICON_HIGHLIGHT = "#FFD700";

/**
 * Responsive container max-widths
 */
export const CONTAINER_MAX_WIDTH = {
  sm: "100%",
  md: "960px",
  lg: "1200px",
  xl: "1400px",
} as const;

/**
 * Z-index layering
 */
export const Z_INDEX = {
  background: 0,
  pattern: 1,
  particles: 2,
  cards: 10,
  popularBadge: 15,
  heading: 20,
} as const;

/**
 * Drop shadow for pass images
 */
export const PASS_IMAGE_SHADOW = "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))";
export const PASS_IMAGE_SHADOW_HOVER = "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))";
