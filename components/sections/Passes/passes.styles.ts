/**
 * Style constants for Passes section
 * Matching Kashiyatra'26 royal purple/maroon theme with Banarasi patterns
 */

import type { CSSProperties } from "react";

/**
 * Section background - deep purple to maroon gradient like reference
 */
export const SECTION_BG: CSSProperties = {
  background: `
    linear-gradient(180deg,
      #1a0a1a 0%,
      #2a1030 15%,
      #3d1545 35%,
      #4a1a55 50%,
      #3d1545 65%,
      #2a1030 85%,
      #1a0a1a 100%
    )
  `,
};

/**
 * Banarasi saree pattern overlay - golden paisley/floral motif
 */
export const BANARASI_PATTERN = `
  url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a853' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
`;

/**
 * Top border pattern - Banarasi zari style
 */
export const TOP_BORDER_PATTERN: CSSProperties = {
  height: "60px",
  background: `
    linear-gradient(180deg, 
      rgba(212, 168, 83, 0.15) 0%,
      transparent 100%
    )
  `,
  borderTop: "3px solid",
  borderImage: `linear-gradient(90deg, 
    transparent 0%,
    #8B6914 10%,
    #D4A853 25%, 
    #FFD700 50%,
    #D4A853 75%,
    #8B6914 90%,
    transparent 100%
  ) 1`,
};

/**
 * Card container - with royal ornate frame
 */
export const CARD_CONTAINER: CSSProperties = {
  background: `
    linear-gradient(180deg, 
      rgba(25, 12, 35, 0.97) 0%, 
      rgba(18, 8, 28, 0.98) 50%,
      rgba(12, 5, 20, 0.99) 100%
    )
  `,
  borderRadius: "12px",
};

/**
 * Royal ornate frame border - thick with inner/outer lines
 */
export const CARD_FRAME_OUTER = `
  linear-gradient(180deg, 
    #4a3510 0%,
    #8B6914 10%,
    #D4A853 25%, 
    #FFD700 50%,
    #D4A853 75%,
    #8B6914 90%,
    #4a3510 100%
  )
`;

export const CARD_FRAME_INNER = `
  linear-gradient(180deg, 
    #2a1a08 0%,
    #5a4012 20%,
    #8B6914 50%,
    #5a4012 80%,
    #2a1a08 100%
  )
`;

/**
 * Card shadow with purple glow
 */
export const CARD_SHADOW = "0 10px 40px rgba(74, 26, 85, 0.5), 0 0 0 1px rgba(212, 168, 83, 0.2)";
export const CARD_SHADOW_HOVER = "0 20px 60px rgba(74, 26, 85, 0.6), 0 0 30px rgba(212, 168, 83, 0.3)";

/**
 * Card back panel - slightly different shade
 */
export const CARD_BACK_BG: CSSProperties = {
  background: `
    linear-gradient(180deg, 
      rgba(35, 18, 42, 0.98) 0%, 
      rgba(25, 12, 32, 0.99) 50%,
      rgba(18, 8, 25, 1) 100%
    )
  `,
};

/**
 * Popular badge
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
  border: "2px solid #FFD700",
  color: "#1A0A1A",
  fontWeight: 700,
  cursor: "pointer",
  borderRadius: "8px",
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
 * Subheading color
 */
export const SUBHEADING_COLOR = "#9D8CD9";

/**
 * Benefit check icon colors
 */
export const CHECK_ICON_COLOR = "#D4A853";
export const CHECK_ICON_HIGHLIGHT = "#FFD700";

/**
 * Pass image shadow
 */
export const PASS_IMAGE_SHADOW = "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.6))";

/**
 * Z-index layering
 */
export const Z_INDEX = {
  background: 0,
  pattern: 1,
  mandala: 2,
  particles: 3,
  cards: 10,
  popularBadge: 15,
  heading: 20,
  topBorder: 25,
} as const;
