import {
  HeroSection,
  BanarasiVibesSection,
  FooterSection,
  FestHighlightsSection,
} from "@/components/sections";
import { ScrollNavbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      {/* Page-level navbar: hidden over the Hero, revealed for every section
          below it. Sits above all section wrappers so nothing paints over it. */}
      <ScrollNavbar />

      <div className="sticky top-0 h-screen z-0">
        <HeroSection />
      </div>
      <div className="sticky top-0 z-10">
        <BanarasiVibesSection />
      </div>
      <div className="sticky top-0 z-20">
        <FestHighlightsSection />
      </div>
      <div className="relative z-70">
        <FooterSection />
      </div>
    </main>
  );
}
// see the iamge lord shiva animation is feeling like cartoonish not a god feel
