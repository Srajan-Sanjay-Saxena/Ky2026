"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { icon: "🎭", title: "Cultural", desc: "Dance, Drama & Folk Arts", color: "#FF6B00" },
  { icon: "🎵", title: "Music", desc: "Battle of Bands & Solo", color: "#8B1538" },
  { icon: "🎨", title: "Art", desc: "Painting, Sculpture & Design", color: "#1A5F7A" },
  { icon: "💻", title: "Tech", desc: "Hackathons & Robotics", color: "#2D5016" },
  { icon: "🏆", title: "Sports", desc: "Athletics & E-Sports", color: "#6B3FA0" },
  { icon: "📸", title: "Media", desc: "Film, Photography & Writing", color: "#B8860B" },
];

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
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

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
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
      className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #16213E 50%, #1A1A2E 100%)",
      }}
    >
      {/* Floating particles - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FFD700]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              animation: `floatParticle ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-2 sm:mb-4"
          style={{
            color: "#FFD700",
            textShadow: "0 0 30px rgba(255,215,0,0.4)",
          }}
        >
          Events & Competitions
        </h2>
        <p className="text-center text-[#FDF6E3] opacity-70 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg">
          50+ events across 6 categories
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {events.map((event, i) => (
            <div
              key={i}
              className="group relative p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${event.color}20, ${event.color}10)`,
                border: `1px solid ${event.color}40`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 30px ${event.color}50, inset 0 0 30px ${event.color}10`,
                }}
              />
              
              <div className="relative z-10 text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-2 sm:mb-3 md:mb-4">{event.icon}</span>
                <h3
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2"
                  style={{ color: event.color }}
                >
                  {event.title}
                </h3>
                <p className="text-[#FDF6E3] opacity-70 text-xs sm:text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
        }}
      />

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(10px); }
        }
      `}</style>
    </section>
  );
}
