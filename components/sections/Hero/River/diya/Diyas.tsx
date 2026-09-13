"use client";

import { memo } from "react";
import { DiyasMobile } from "./mobile";
import { DiyasDesktop } from "./desktop";

/**
 * All floating diyas in the river
 * Renders separate mobile and desktop versions for proper positioning
 */
export const Diyas = memo(function Diyas() {
  return (
    <>
      <DiyasMobile />
      <DiyasDesktop />
    </>
  );
});
