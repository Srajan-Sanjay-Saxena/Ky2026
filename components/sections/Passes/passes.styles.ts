/**
 * Style constants for Passes section
 * Centralized for easy theming and adjustments
 */

import type { CSSProperties } from "react";

/**
 * Section background
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
 * Decorative overlay pattern
 */
export const PATTERN_OVERLAY: CSSProperties = {
  backgroundImage: `
    radial-gradient(circle at 20% 80%, rgba(212, 168, 83, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 0, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(26, 95, 122, 0.02) 0%, transparent 70%)
  `,
};

/**
 * Standardized container - textured dark background with gold border
 * This is the flip card container that holds the pass image
 */
export const CONTAINER_BASE: CSSProperties = {
  background: `
    linear-gradient(145deg, 
      rgba(30, 25, 40, 0.95) 0%, 
      rgba(20, 18, 30, 0.98) 50%,
      rgba(15, 12, 25, 0.99) 100%
    )
  `,
  borderRadius: "16px",
  border: "2px solid transparent",
  backgroundClip: "padding-box",
};

/**
 * Gold border gradient for container
 */
export const CONTAINER_BORDER_GRADIENT = `
  linear-gradient(135deg, 
    #8B6914 0%,
    #D4A853 20%, 
    #FFD700 40%,
    #E8B820 60%,
    #D4A853 80%,
    #8B6914 100%
  )
`;

/**
 * Container shadow
 */
export const CONTAINER_SHADOW = "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 168, 83, 0.15)";
export const CONTAINER_SHADOW_HOVER = "0 16px 48px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 168, 83, 0.25)";

/**
 * Textured background overlay for container (brushed metal effect)
 */
export const CONTAINER_TEXTURE = `
  repeating-linear-gradient(
    45deg,
    transparent,
    transparent 1px,
    rgba(255, 255, 255, 0.01) 1px,
    rgba(255, 255, 255, 0.01) 2px
  )
`;

/**
 * Card back panel styles
 */
export const CARD_BACK_BG: CSSProperties = {
  background: `
    linear-gradient(180deg, 
      rgba(26, 26, 46, 0.98) 0%, 
      rgba(18, 18, 35, 0.99) 50%,
      rgba(12, 12, 28, 1) 100%
    )
  `,
};

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
 * Benefit check icon colors
 */
export const CHECK_ICON_COLOR = "#D4A853";
export const CHECK_ICON_HIGHLIGHT = "#FFD700";

/**
 * Pass image shadow
 */
export const PASS_IMAGE_SHADOW = "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))";

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
 * Card dimensions
 */
export const CARD_DIMENSIONS = {
  mobile: {
    width: "300px",
    height: "480px",
  },
  desktop: {
    width: "320px",
    height: "520px",
  },
} as const;
