// ═══════════════════════════════════════════════════════════════════
// PRONITES CONSTANTS
// Re-exports colors from main palette + artist data
// ═══════════════════════════════════════════════════════════════════

// Import from centralized palette
export { CONCERT_COLORS, GRADIENT_STAGE } from "@/components/constants/palette";

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
