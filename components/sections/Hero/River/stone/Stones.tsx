"use client";

import { memo } from "react";
import { StonesMobile } from "./mobile";
import { StonesDesktop } from "./desktop";

/**
 * All stepping stones in the river
 * Renders separate mobile and desktop versions for proper positioning
 */
export const Stones = memo(function Stones() {
  return (
    <>
      <StonesMobile />
      <StonesDesktop />
    </>
  );
});
