// ═══════════════════════════════════════════════════════════════════
// ROYAL JAZZ PALETTE - Vintage meets neon, Mughal meets funk
// Different from ProNites - more wine/magenta vs ProNites' cool purple
// ═══════════════════════════════════════════════════════════════════

export const JAZZ_COLORS = {
  // Deep royal backgrounds - warmer wine tones (distinct from ProNites)
  BG_DEEP: "#0c0810",       // Warm dark (was #080510)
  BG_ROYAL: "#150a14",      // Wine-purple (was #0f0a1a)
  BG_WINE: "#1f0c18",       // Deeper wine (was #1a0a15)
  
  // Royal accents
  GOLD: "#FFD700",
  GOLD_DARK: "#B8860B",
  ROSE_GOLD: "#E8B4B8",
  ROYAL_PURPLE: "#6B21A8",
  DEEP_MAGENTA: "#9D174D",
  
  // Jazz neons
  ELECTRIC_BLUE: "#00D4FF",
  HOT_PINK: "#FF1493",
  LIME: "#ADFF2F",
  AMBER: "#FFBF00",
  
  // Text
  CREAM: "#FDF6E3",
  IVORY: "#FFFFF0",
} as const;

export type JazzColorKey = keyof typeof JAZZ_COLORS;
