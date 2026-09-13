"use client";

import { StonesMobile } from "./mobile";
import { StonesDesktop } from "./desktop";

/**
 * All stepping stones in the river
 * Renders separate mobile and desktop versions for proper positioning
 */
export function Stones() {
  return (
    <>
      <StonesMobile />
      <StonesDesktop />
    </>
  );
}
