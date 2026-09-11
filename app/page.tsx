import {
  HeroSection,
  DancerSection,
  EventsSection,
  AboutSection,
  TimelineSection,
  SponsorsSection,
  FooterSection,
  DurgaTempleSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 h-screen z-0">
        <HeroSection />
      </div>
      <div className="sticky top-0 z-10">
        <DancerSection />
      </div>
      <div className="sticky top-0 z-20">
        <DurgaTempleSection />
      </div>
      <div className="sticky top-0 z-30">
        <AboutSection />
      </div>
      <div className="sticky top-0 z-40">
        <EventsSection />
      </div>
      <div className="sticky top-0 z-50">
        <TimelineSection />
      </div>
      <div className="sticky top-0 z-60">
        <SponsorsSection />
      </div>
      <div className="relative z-70">
        <FooterSection />
      </div>
    </main>
  );
}
// see the iamge lord shiva animation is feeling like cartoonish not a god feel 