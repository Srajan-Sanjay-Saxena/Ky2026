/**
 * Pass configuration for Kashiyatra'26
 * Central source of truth for pass data, pricing, and animation settings
 */

export interface PassBenefit {
  text: string;
  highlight?: boolean; // For premium benefits
}

export interface PassConfig {
  id: string;
  name: string;
  price: number;
  image: string;
  tagline: string;
  accentColor: string;
  glowColor: string;
  benefits: PassBenefit[];
  popular?: boolean; // For highlighting recommended pass
}

export const PASSES: PassConfig[] = [
  {
    id: "yatri",
    name: "Yatri Pass",
    price: 2399,
    image: "/yatri_pass_nobg.png",
    tagline: "Begin Your Journey",
    accentColor: "#1A5F7A", // Ganga blue
    glowColor: "rgba(26, 95, 122, 0.5)",
    benefits: [
      { text: "Event Entry Only" },
      { text: "All Cultural Events" },
      { text: "IIT BHU Campus Access" },
      { text: "Festival Merchandise (Basic)" },
    ],
  },
  {
    id: "darbar",
    name: "Darbar Pass",
    price: 2699,
    image: "/darbar_pass_nobg.png",
    tagline: "The Royal Experience",
    accentColor: "#D4A853", // Gold
    glowColor: "rgba(212, 168, 83, 0.5)",
    popular: true,
    benefits: [
      { text: "All Yatri Benefits", highlight: true },
      { text: "Pro-Night Shows Access" },
      { text: "Priority Seating" },
      { text: "Exclusive Workshops" },
      { text: "Festival Kit" },
    ],
  },
  {
    id: "swarnim",
    name: "Swarnim Pass",
    price: 2999,
    image: "/swarnim_pass_nobg.png",
    tagline: "The Divine Experience",
    accentColor: "#FFD700", // Bright gold
    glowColor: "rgba(255, 215, 0, 0.5)",
    benefits: [
      { text: "All Darbar Benefits", highlight: true },
      { text: "VIP Lounge Access" },
      { text: "Front Row Seating" },
      { text: "Meet & Greet with Artists" },
      { text: "Premium Merch Kit" },
      { text: "Complimentary Refreshments" },
    ],
  },
] as const;

/**
 * Animation configuration - tune these values to adjust feel
 */
export const ANIMATION = {
  // Card entry animation
  stagger: {
    delayChildren: 0.2,
    staggerChildren: 0.15,
  },

  // Card variants
  card: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }, // easeOut
    },
  },

  // Pass image floating
  float: {
    duration: 3,
    ease: [0.45, 0.05, 0.55, 0.95] as const, // easeInOut
    repeat: Infinity,
    repeatType: "reverse" as const,
  },

  // Hover effects
  hover: {
    scale: 1.03,
    y: -12,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }, // easeOut
  },

  // Image hover
  imageHover: {
    scale: 1.08,
    transition: { duration: 0.3 },
  },

  // Button shimmer
  shimmer: {
    duration: 2,
    repeat: Infinity,
    ease: "linear" as const,
  },
} as const;

/**
 * Responsive breakpoints for pass card sizing
 */
export const CARD_SIZES = {
  mobile: {
    width: "100%",
    imageHeight: 280,
  },
  tablet: {
    width: "300px",
    imageHeight: 320,
  },
  desktop: {
    width: "340px",
    imageHeight: 380,
  },
} as const;
