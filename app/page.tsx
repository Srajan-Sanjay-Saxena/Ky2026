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
      <HeroSection />
      <DancerSection />
      <DurgaTempleSection />
      <AboutSection />
      <EventsSection />
      <TimelineSection />
      <SponsorsSection />
      <FooterSection />
    </main>
  );
}
