"use client";

import { memo } from "react";
import { Kandeels } from "./Kandeels";
import { DriftingClouds } from "./DriftingClouds";
import { EmberField } from "./EmberField";

/**
 * Desktop-only elements for Hero section
 * Shows: Drifting Clouds, Kandeels (sky lanterns), Ember Field
 * Hidden on mobile (< 640px)
 */
export const HeroDesktop = memo(function HeroDesktop() {
  return (
    <>
      {/* Faint drifting clouds */}
      <DriftingClouds />

      {/* Floating Kandeels (Sky Lanterns) */}
      <Kandeels />
    </>
  );
});

// Re-export individual components for backward compatibility
export { Kandeels } from "./Kandeels";
export { DriftingClouds } from "./DriftingClouds";
export { EmberField } from "./EmberField";
