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
    ghats: `${IMAGEKIT_BASE}/hero/ghats.png?v=2`,
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
    background: `${IMAGEKIT_BASE}/vibes/vibes-bg.png`,
    roads: `${IMAGEKIT_BASE}/vibes/roads.png`,
    // Desktop-only decorative characters (local public folder)
    mandala: "/BanarasiVibes/banarasiVibesMandala.png",  // Rotating dancer mandala (360° spin)
    gangaAartiSaint: "/BanarasiVibes/GangaArtiSaint.png",  // Priest performing Ganga aarti (faces right)
    bharatnatyamDancer: "/BanarasiVibes/VIbeBharatnatiyamDancer.png",  // Classical dancer (faces right)
  },
  highlights: {
    durga: `${IMAGEKIT_BASE}/highlights/durga.svg`,
    durgaTemple: `${IMAGEKIT_BASE}/highlights/durga-temple.svg`,
  },
  misc: {
    lordShiva: `${IMAGEKIT_BASE}/misc/lord-shiva.png`,
    moonBg: `${IMAGEKIT_BASE}/misc/moon-bg.png`,
    dj: `${IMAGEKIT_BASE}/misc/dj.png?v=2`,
    concertCrowd: `${IMAGEKIT_BASE}/misc/concert-crowd.png`,
    sareeDrape: `${IMAGEKIT_BASE}/misc/saree-drape.png`,
    welcomeFlag: `${IMAGEKIT_BASE}/misc/welcome-flag.png`,
    kites: `${IMAGEKIT_BASE}/misc/kites.png`,
    rockstar: `${IMAGEKIT_BASE}/misc/rockstar.png?v=2`,
  },
  about: {
    mandalaOrnament: `${IMAGEKIT_BASE}/about/mandala-ornament.png`,
    peacock: `${IMAGEKIT_BASE}/about/peacock.png`,
    omLotus: `${IMAGEKIT_BASE}/about/om-lotus.png`,
    mysticDivider: `${IMAGEKIT_BASE}/about/mystic-divider.png`,
    diyaCluster: `${IMAGEKIT_BASE}/about/diya-cluster.png`,
    cornerOrnament: `${IMAGEKIT_BASE}/about/corner-ornament.png`,
    bhuGate: `${IMAGEKIT_BASE}/about/bhu-royal-gate.png`,
    ghatsSilhouette: `${IMAGEKIT_BASE}/about/ghats-silhouette.png`,
  },
  contact: {
    // Reused from the About page for visual consistency
    mandalaOrnament: "/about/mandlaOrnament.png",  // Gold mandala frame with hollow center
    peacock: "/about/peacock_nobg.png",  // Royal peacock motif
    omLotus: "/about/omLotus.png",  // Pink lotus with Om symbol
    mysticDivider: "/about/mysticDivider.png",  // Gold horizontal divider
    diyaCluster: "/about/diyaCluster.png",  // Cluster of brass diyas
    cornerOrnament: "/about/cornerOrnament.png",  // Gold corner ornament
    ghatsSilhouette: "/about/ghatSaloutte.png",  // Varanasi ghats panoramic
    // New decorative assets for the Contact page (files live in public/Contact/)
    envelopeScroll: "/Contact/envelopeScrolled.png",  // Ornate maroon & gold rolled letter with wax lotus seal
    conch: "/Contact/conch.png",  // Golden Shankha (conch) with paisley engraving
    lotusMandala: "/Contact/lotusMandla.png",  // Concentric gold lotus mandala for backdrops
    floatingDiya: "/Contact/floatingDiya.png",  // Single glowing brass diya with flame
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
