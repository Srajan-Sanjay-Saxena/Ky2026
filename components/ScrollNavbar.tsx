"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";

/**
 * ScrollNavbar
 *
 * A single, page-level fixed navbar that is hidden while the Hero section
 * (first full viewport) is on screen, and reveals once the user scrolls into
 * the BanarasiVibes section and everything below it.
 *
 * Because it lives at the top of the page tree (above the stacked
 * `sticky top-0` section wrappers) with a very high z-index, no section can
 * paint over it — it stays visible across every section below the Hero.
 */
export function ScrollNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal once we've scrolled roughly one viewport (past the Hero panel).
    const onScroll = () => {
      const threshold = window.innerHeight * 0.85;
      setVisible(window.scrollY > threshold);
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
      <Navbar position="relative" topOffset={30} />
    </div>
  );
}
