"use client";

import { memo } from "react";
import { MobileDJ } from "./MobileDJ";

/**
 * Mobile-only elements for FestivalVibes section
 * Shows: Mobile DJ (static, lower z-index)
 * Hidden on desktop (>= 640px)
 */
export const FestivalVibesMobile = memo(function FestivalVibesMobile() {
  return (
    <>
      {/* DJ Character - static, no animation */}
      <MobileDJ />
    </>
  );
});

// Re-export for backward compatibility
export { MobileDJ } from "./MobileDJ";
