// ═══════════════════════════════════════════════════════════════════
// PRONITES CONSTANTS
// Colors, gradients, and artist data for the concert section
// ═══════════════════════════════════════════════════════════════════

export const CONCERT_COLORS = {
  // Neon accents
  NEON_PINK: "#FF1493",
  NEON_CYAN: "#00FFFF",
  NEON_PURPLE: "#9D4EDD",
  ELECTRIC_BLUE: "#7DF9FF",
  NEON_GOLD: "#FFD700",
  
  // Warm blends (ties to existing theme)
  WARM_PINK: "#FF6B9D",
  SUNSET_ORANGE: "#FF8C42",
  
  // Backgrounds - adjusted to match Hero transition
  STAGE_TOP: "#0d0a18",      // Matches Hero bottom - dark blue-purple
  STAGE_DARK: "#0a0612",
  STAGE_PURPLE: "#1a0a2e",
  STAGE_GLOW: "#2d1052",
  CARD_BG: "#120820",
} as const;

export const GRADIENT_STAGE = `linear-gradient(180deg, 
  ${CONCERT_COLORS.STAGE_TOP} 0%,
  ${CONCERT_COLORS.STAGE_DARK} 15%,
  ${CONCERT_COLORS.STAGE_PURPLE} 35%,
  ${CONCERT_COLORS.STAGE_GLOW} 60%,
  ${CONCERT_COLORS.STAGE_PURPLE} 80%,
  ${CONCERT_COLORS.STAGE_DARK} 100%
)`;

// ═══════════════════════════════════════════════════════════════════
// ARTIST DATA (placeholder - replace with real data)
// ═══════════════════════════════════════════════════════════════════
export interface Artist {
  id: string;
  name: string;
  genre: string;
  image?: string;
  isHeadliner?: boolean;
  isRevealed?: boolean;
  accentColor?: string;
}

export const ARTISTS: Artist[] = [
  { id: "1", name: "???", genre: "Headliner", isHeadliner: true, isRevealed: false, accentColor: "#FFD700" },
  { id: "2", name: "???", genre: "Bollywood", isHeadliner: true, isRevealed: false, accentColor: "#FF1493" },
  { id: "3", name: "Coming Soon", genre: "EDM", isRevealed: false, accentColor: "#00FFFF" },
  { id: "4", name: "Coming Soon", genre: "Indie", isRevealed: false, accentColor: "#FF6B9D" },
  { id: "5", name: "Coming Soon", genre: "Rock", isRevealed: false, accentColor: "#9D4EDD" },
  { id: "6", name: "Coming Soon", genre: "Hip-Hop", isRevealed: false, accentColor: "#FF8C42" },
];
