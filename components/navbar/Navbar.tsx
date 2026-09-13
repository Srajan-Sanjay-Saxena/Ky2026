"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/navbar/NavbarDesign";

/**
 * ScrollNavbar
 *
 * A single, page-level fixed navbar that:
 * 1. Is hidden while the Hero section (first full viewport) is on screen
 * 2. Reveals once the user scrolls into the BanarasiVibes section
 * 3. Hides when footer is >50% visible in viewport (using IntersectionObserver)
 */
export function ScrollNavbar() {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Find footer element
    const footer = document.querySelector("footer") || 
                   document.querySelector("[data-section='footer']") ||
                   document.querySelector(".footer-section");

    // Set up IntersectionObserver for footer (threshold: 50%)
    if (footer) {
      footerObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Footer is >50% visible
            setFooterVisible(entry.intersectionRatio > 0.5);
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "0px",
        }
      );
      footerObserverRef.current.observe(footer);
    }

    // Scroll handler for hero section visibility
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show threshold: past the Hero section (85% of viewport)
      const showThreshold = viewportHeight * 0.85;

      // Visible if: past hero section
      const shouldShow = scrollY > showThreshold;
      setVisible(shouldShow);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (footerObserverRef.current) {
        footerObserverRef.current.disconnect();
      }
    };
  }, []);

  // Final visibility: show if past hero AND footer is not >50% visible
  const isNavbarVisible = visible && !footerVisible;

  return (
    <div
      className="fixed inset-x-0 top-0 z-[200] transition-all duration-500 ease-out"
      style={{
        transform: isNavbarVisible ? "translateY(0)" : "translateY(-120%)",
        opacity: isNavbarVisible ? 1 : 0,
        pointerEvents: isNavbarVisible ? "auto" : "none",
      }}
      aria-hidden={!isNavbarVisible}
    >
      <Navbar position="relative" topOffset={18} />
    </div>
  );
}
