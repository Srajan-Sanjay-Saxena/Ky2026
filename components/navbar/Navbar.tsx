"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar/NavbarDesign";

/**
 * ScrollNavbar
 *
 * A single, page-level fixed navbar that:
 * 1. Is hidden while Hero, ProNites, and FestivalVibes sections are on screen
 * 2. Reveals once the user scrolls into the BanarasiVibes section
 * 3. Hides again when the footer comes into view
 */
export function ScrollNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      // Find the BanarasiVibes section
      const banarasiVibes = document.querySelector('[data-section="banarasi-vibes"]');
      const footer = document.querySelector('[data-section="footer"]');
      
      if (!banarasiVibes) {
        setVisible(false);
        return;
      }

      const banarasiRect = banarasiVibes.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Show navbar when BanarasiVibes section top reaches top of viewport (or above)
      const pastBanarasiStart = banarasiRect.top <= 0;
      
      // Hide when footer is significantly in view
      let inFooter = false;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        inFooter = footerRect.top < viewportHeight * 0.5;
      }

      setVisible(pastBanarasiStart && !inFooter);
    };

    // Initial check
    checkVisibility();

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

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
