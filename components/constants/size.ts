/**
 * Size Constants for Kashi Yatra 2026
 * 
 * Responsive sizes organized by element type.
 * Format: { mobile, sm, md, lg } or { width, height } for each breakpoint
 */

// ═══════════════════════════════════════════════════════════════════
// HERO SECTION - RIVER ELEMENTS
// ═══════════════════════════════════════════════════════════════════

/** River container height */
export const SIZE_RIVER = {
  HEIGHT: {
    mobile: "32vh",
    sm: "30vh",
    md: "32vh",
  },
} as const;

/** Stepping stone sizes (width = height for square stones) */
export const SIZE_STONES = {
  SCHEDULE: { mobile: 70, desktop: 110 },
  EVENTS: { mobile: 100, desktop: 110 },
  REGISTER: { mobile: 85, desktop: 125 },
  GALLERY: { mobile: 70, desktop: 120 },
  ABOUT: { mobile: 65, desktop: 100 },
} as const;

/** Stepping stone label text sizes */
export const SIZE_STONE_TEXT = {
  mobile: "8px",
  desktop: "15px",
} as const;

/**
 * Lotus flower sizes
 * SVG viewBox: 60x50 → Aspect Ratio 6:5 (width:height)
 * To scale: multiply both width & height by same factor, OR use ratio 1.2:1
 * Example: height 2.5rem → width should be 3rem
 */
export const SIZE_LOTUS = {
  RATIO: 1.2, // width / height = 60/50 = 1.2
  LOTUS_1: {
    mobile: { width: "3rem", height: "2.5rem" },
    sm: { width: "3.6rem", height: "3rem" },
    md: { width: "4.2rem", height: "3.5rem" },
  },
  LOTUS_2: {
    mobile: { width: "2.4rem", height: "2rem" },
    sm: { width: "3rem", height: "2.5rem" },
    md: { width: "3.6rem", height: "3rem" },
  },
  LOTUS_3: {
    mobile: { width: "2.4rem", height: "2rem" },
    sm: { width: "3.3rem", height: "2.75rem" },
    md: { width: "3.9rem", height: "3.25rem" },
  },

  // Will not be seen on mobile
  LOTUS_4: {
    // Desktop only
    sm: { width: "2.7rem", height: "2.25rem" },
    md: { width: "3.3rem", height: "2.75rem" },
  },
} as const;

/**
 * Diya sizes
 * SVG viewBox: 60x85 → Aspect Ratio ~0.7:1 (width:height)
 * To scale: multiply both width & height by same factor, OR use ratio 0.7:1
 * Example: height 4rem → width should be ~2.8rem
 */
export const SIZE_DIYA = {
  // RATIO: 0.7, // width / height = 60/85 ≈ 0.7
  DIYA_1: {
    mobile: { width: "2.1rem", height: "3rem" },
    sm: { width: "2.1rem", height: "3rem" },
    md: { width: "2.8rem", height: "4rem" },
  },
  DIYA_2: {
    mobile: { width: "1rem", height: "1.4rem" },
    sm: { width: "1.68rem", height: "2.4rem" },
    md: { width: "2.24rem", height: "3.2rem" },
  },
  DIYA_3: {
    mobile: { width: "2.8rem", height: "4rem" },
    sm: { width: "2.1rem", height: "3rem" },
    md: { width: "2.8rem", height: "4rem" },
  },
  DIYA_4: {
    // Desktop only
    mobile: { width: "1.12rem", height: "1.6rem" },
    sm: { width: "1.4rem", height: "2rem" },
    md: { width: "2.1rem", height: "3rem" },
  },
  DIYA_5: {
    mobile: { width: "1.4rem", height: "2rem" },
    sm: { width: "2.1rem", height: "3rem" },
    md: { width: "2.8rem", height: "4rem" },
  },
  DIYA_6: {
    // Desktop only
    mobile: { width: "1.12rem", height: "1.6rem" },
    sm: { width: "1.68rem", height: "2.4rem" },
    md: { width: "2.24rem", height: "3.2rem" },
  },
} as const;

/** Boat sizes */
export const SIZE_BOATS = {
  PILGRIM: {
    mobile: { width: "8rem" },    // w-32
    sm: { width: "10rem" },       // w-40
    md: { width: "13rem" },       // w-52
    lg: { width: "15rem" },       // w-60
  },
  STEAMER: {
    mobile: { width: "9rem" },    // w-36
    sm: { width: "11rem" },       // w-44
    md: { width: "14rem" },       // w-56
    lg: { width: "16rem" },       // w-64
  },
  SIMPLE: {
    mobile: { width: "5rem" },    // w-20
    sm: { width: "6rem" },        // w-24
    md: { width: "7rem" },        // w-28
    lg: { width: "8rem" },        // w-32
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// BANARASI VIBES SECTION
// ═══════════════════════════════════════════════════════════════════

/** BHU Gate size */
export const SIZE_VIBES_GATE = {
  mobile: "85%",
  sm: "65%",
  md: "55%",
  lg: "48%",
} as const;

/** Mahamana statue size (relative to gate) */
export const SIZE_VIBES_MAHAMANA = {
  mobile: "58%",
  sm: "30%",
  md: "53%",
} as const;

/** Rickshaw size */
export const SIZE_VIBES_RICKSHAW = {
  mobile: { width: "180px", height: "120px" },
  sm: { width: "600px", height: "400px" },
} as const;

/** Lamppost size */
export const SIZE_VIBES_LAMPPOST = {
  mobile: { width: "2.5rem", height: "8rem" },   // w-10 h-32
  sm: { width: "5rem", height: "20rem" },        // w-20 h-80
  md: { width: "6rem", height: "24rem" },        // w-24 h-96
  lg: { width: "7rem", height: "420px" },        // w-28 h-[420px]
} as const;

/** Food items (desktop only) */
export const SIZE_VIBES_FOOD = {
  TABLA_SITAR: {
    sm: { width: "450px", height: "450px" },
    md: { width: "600px", height: "600px" },
    lg: { width: "800px", height: "800px" },
  },
  PAAN: {
    sm: { width: "24rem", height: "24rem" },     // w-96 h-96
    md: { width: "450px", height: "450px" },
    lg: { width: "550px", height: "550px" },
  },
  LASSI: {
    sm: { width: "18rem", height: "24rem" },     // w-72 h-96
    md: { width: "24rem", height: "500px" },     // w-96 h-[500px]
    lg: { width: "450px", height: "600px" },
  },
  MALAIYO: {
    sm: { width: "18rem", height: "18rem" },     // w-72 h-72
    md: { width: "24rem", height: "24rem" },     // w-96 h-96
    lg: { width: "450px", height: "450px" },
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// HELPER: Tailwind class generator
// ═══════════════════════════════════════════════════════════════════

/**
 * Generate Tailwind width classes from size constant
 * @example sizeToWidthClasses(SIZE_BOATS.PILGRIM) => "w-32 sm:w-40 md:w-52 lg:w-60"
 */
export function sizeToWidthClasses(size: Record<string, { width: string } | string>): string {
  const classes: string[] = [];
  if (typeof size.mobile === "object" && "width" in size.mobile) {
    classes.push(`w-[${size.mobile.width}]`);
  }
  if (typeof size.sm === "object" && "width" in size.sm) {
    classes.push(`sm:w-[${size.sm.width}]`);
  }
  if (typeof size.md === "object" && "width" in size.md) {
    classes.push(`md:w-[${size.md.width}]`);
  }
  if (typeof size.lg === "object" && "width" in size.lg) {
    classes.push(`lg:w-[${size.lg.width}]`);
  }
  return classes.join(" ");
}
