"use client";

import { memo } from "react";
import { LotusesMobile } from "./mobile";
import { LotusesDesktop } from "./desktop";

/**
 * All floating lotus flowers in the river
 * Renders separate mobile and desktop versions for proper positioning
 */
export const Lotuses = memo(function Lotuses() {
  return (
    <>
      <LotusesMobile />
      <LotusesDesktop />
    </>
  );
});
