"use client";

import { Navbar } from "@/components/navbar/NavbarDesign";
import { useScrollPosition } from "@/hooks";

/**
 * ScrollNavbar
 *
 * A single, page-level fixed navbar that:
 * 1. Is hidden while the Hero section (first full viewport) is on screen
 * 2. Reveals once the user scrolls into the BanarasiVibes section
 * 3. Hides again when the footer comes into view
 */
export function ScrollNavbar() {
  const { visible } = useScrollPosition({
    showAfterPercent: 0.85,      // Show after 85% of viewport (past Hero)
    hideBeforeBottomPercent: 1.5, // Hide when within 1.5 viewports from bottom
  });

  return (
    <div
      className="fixed inset-x-0 top-0 z-[200]"
      style={{
        transform: visible ? "translateY(0) translateZ(0)" : "translateY(-120%) translateZ(0)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        willChange: "transform, opacity",
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        backfaceVisibility: "hidden",
      }}
      aria-hidden={!visible}
    >
      <Navbar position="relative" topOffset={18} />
    </div>
  );
}
