"use client";

import { LotusesMobile } from "./mobile";
import { LotusesDesktop } from "./desktop";

/**
 * All floating lotus flowers in the river
 * Renders separate mobile and desktop versions for proper positioning
 */
export function Lotuses() {
  return (
    <>
      <LotusesMobile />
      <LotusesDesktop />
    </>
  );
}
