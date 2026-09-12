"use client";

/**
 * GSAP Plugin Registration Component
 * 
 * This is a client component that registers GSAP plugins at module level.
 * Import and render this once in layout.tsx.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register at module level - runs once when this file is first imported on client
gsap.registerPlugin(ScrollTrigger);

export default function GsapRegistration() {
  return null;
}
