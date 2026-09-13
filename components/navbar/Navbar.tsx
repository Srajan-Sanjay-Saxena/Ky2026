"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar/NavbarDesign";

/**
 * ScrollNavbar
 *
 * A single, page-level fixed navbar that:
 * 1. Is hidden while the Hero section (first full viewport) is on screen
 * 2. Reveals once the user scrolls into the BanarasiVibes section
 * 3. Hides again when the footer comes into view
 */
export function ScrollNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show threshold: past the Hero section (85% of viewport)
      const showThreshold = viewportHeight * 0.85;
      
      // Hide threshold: when approaching footer (last ~50% of viewport from bottom)
      const hideThreshold = documentHeight - viewportHeight * 1.5;
      
      // Visible if: past hero AND not yet at footer
      const shouldShow = scrollY > showThreshold && scrollY < hideThreshold;
      
      setVisible(shouldShow);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[200] transition-all duration-500 ease-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-120%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <Navbar position="relative" topOffset={18} />
    </div>
  );
}
