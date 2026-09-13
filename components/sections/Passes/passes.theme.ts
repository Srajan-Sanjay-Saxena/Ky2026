/**
 * Passes Section Theme Constants
 * 
 * Section-local theming that doesn't belong in the global palette.
 * Currently just z-index layering; add section-specific overrides here.
 */

/**
 * Z-index layering for Passes section internal elements.
 * These are relative to the section, not the page.
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
