"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    color: "#FFD700",
    sponsors: [{ name: "Coming Soon", placeholder: true }],
  },
  {
    tier: "Gold Sponsors",
    color: "#DAA520",
    sponsors: [
      { name: "Sponsor 1", placeholder: true },
      { name: "Sponsor 2", placeholder: true },
    ],
  },
  {
    tier: "Silver Sponsors",
    color: "#C0C0C0",
    sponsors: [
      { name: "Sponsor 3", placeholder: true },
      { name: "Sponsor 4", placeholder: true },
      { name: "Sponsor 5", placeholder: true },
    ],
  },
];

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const tiers = tiersRef.current?.children;
      if (tiers) {
        gsap.fromTo(
          tiers,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: tiersRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[#FF6B00] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
            Our Partners
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              color: "#FFD700",
              textShadow: "0 0 20px rgba(255,215,0,0.3)",
            }}
          >
            Sponsors
          </h2>
        </div>

        <div ref={tiersRef} className="space-y-8 sm:space-y-10 md:space-y-12 max-w-4xl mx-auto">
          {sponsorTiers.map((tier, i) => (
            <div key={i} className="text-center">
              <h3
                className="text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-5 md:mb-6 tracking-wider"
                style={{ color: tier.color }}
              >
                {tier.tier}
              </h3>
              <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
                {tier.sponsors.map((sponsor, j) => (
                  <div
                    key={j}
                    className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 lg:w-48 lg:h-28 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      border: `1px solid ${tier.color}30`,
                    }}
                  >
                    {sponsor.placeholder ? (
                      <span className="text-[#FDF6E3] opacity-40 text-xs sm:text-sm">
                        {sponsor.name}
                      </span>
                    ) : (
                      <span className="text-[#FDF6E3] text-xs sm:text-sm">{sponsor.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <p className="text-[#FDF6E3] opacity-70 mb-3 sm:mb-4 text-sm sm:text-base">
            Interested in sponsoring Kashi Yatra 2026?
          </p>
          <button
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "#FFD700",
              border: "2px solid #FFD700",
            }}
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}
