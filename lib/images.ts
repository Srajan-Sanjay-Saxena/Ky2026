/**
 * Global Image Configuration
 * 
 * Centralized image URLs for the entire project.
 * All images served from ImageKit CDN.
 */

const IMAGEKIT_BASE = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

export const IMAGES = {
  passes: {
    yatri: `${IMAGEKIT_BASE}/passes/yatri-pass.png`,
    darbar: `${IMAGEKIT_BASE}/passes/darbar-pass.png`,
    swarnim: `${IMAGEKIT_BASE}/passes/swarnim-pass.png`,
  },
  hero: {
    logo: `${IMAGEKIT_BASE}/hero/kashiyatra-logo.png`,
    ghats: `${IMAGEKIT_BASE}/hero/ghats.png`,
    temple: `${IMAGEKIT_BASE}/hero/kashivishwanath-temple.png`,
    varanasiBack: `${IMAGEKIT_BASE}/hero/varanasi-back.png`,
    steppingStone: `${IMAGEKIT_BASE}/hero/stepping-stone.png`,
  },
  navbar: {
    background: `${IMAGEKIT_BASE}/navbar/nav-bg.png`,
    badge: `${IMAGEKIT_BASE}/navbar/nav-badge.png`,
  },
  vibes: {
    mahamana: `${IMAGEKIT_BASE}/vibes/mahamana.png`,
    bhuGate: `${IMAGEKIT_BASE}/vibes/bhu-gate.png`,
    rickshaw: `${IMAGEKIT_BASE}/vibes/rickshaw.png`,
    lassi: `${IMAGEKIT_BASE}/vibes/lassi.png`,
    malaiyo: `${IMAGEKIT_BASE}/vibes/malaiyo.png`,
    paan: `${IMAGEKIT_BASE}/vibes/paan.png`,
    tablaSitar: `${IMAGEKIT_BASE}/vibes/tabla-sitar.png`,
    background: `${IMAGEKIT_BASE}/vibes/vibes-bg.png`,
    roads: `${IMAGEKIT_BASE}/vibes/roads.png`,
  },
  highlights: {
    durga: `${IMAGEKIT_BASE}/highlights/durga.svg`,
    durgaTemple: `${IMAGEKIT_BASE}/highlights/durga-temple.svg`,
  },
  misc: {
    lordShiva: `${IMAGEKIT_BASE}/misc/lord-shiva.png`,
    moonBg: "/MoonBG.png",  // Local public folder - large decorative moon
    dj: "/Dj.png",  // Local public folder - DJ character for ProNites
    concertCrowd: "/silhoutte.png",  // Concert crowd silhouette for ProNites
    sareeDrape: "/SareeDrape.png",  // Banarasi saree drape for FestivalVibes
    welcomeFlag: "/welcomeFlag.png",  // Welcome flag for Hero section
    kites: "/kites.png",  // Kites for Hero section - morning/evening only
    rockstar: "/rockstar.png",  // Rockstar for ProNites section
  },
} as const;

/**
 * Helper to get ImageKit URL with transformations
 * @example getImageUrl(IMAGES.passes.yatri, "tr:w-300,q-80")
 */
export function getImageUrl(path: string, transformations?: string): string {
  if (!transformations) return path;
  
  // Insert transformations after base URL
  const imagePath = path.replace(IMAGEKIT_BASE as string, "");
  return `${IMAGEKIT_BASE}/${transformations}${imagePath}`;
}
