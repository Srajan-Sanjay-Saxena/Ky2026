"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MandalaPattern } from "../svg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Events" },
  { value: "10K+", label: "Participants" },
  { value: "₹10L+", label: "Prize Pool" },
  { value: "3", label: "Days" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mandalaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mandala rotation on scroll
      gsap.to(mandalaRef.current, {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
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
      className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #2D1810 50%, #1A1A2E 100%)",
      }}
    >
      {/* Rotating Mandala Background */}
      <div
        ref={mandalaRef}
        className="absolute top-1/2 right-[-30%] sm:right-[-25%] md:right-[-20%] -translate-y-1/2 w-[50vh] sm:w-[60vh] md:w-[70vh] lg:w-[80vh] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] opacity-10 pointer-events-none"
      >
        <MandalaPattern className="w-full h-full text-[#FFD700]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          {/* Left - Content */}
          <div ref={contentRef}>
            <span className="text-[#FF6B00] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
              About The Festival
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
              style={{
                color: "#FFD700",
                textShadow: "0 0 20px rgba(255,215,0,0.3)",
              }}
            >
              Where Tradition
              <br />
              Meets Innovation
            </h2>
            <p className="text-[#FDF6E3] opacity-90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Kashi Yatra is the annual cultural extravaganza that brings together 
              the ancient spirit of Varanasi with modern creativity. Named after 
              the sacred city of Kashi, our fest celebrates the confluence of 
              art, technology, music, and sports.
            </p>
            <p className="text-[#FDF6E3] opacity-70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Join thousands of students from across the nation in three days of 
              unforgettable experiences, fierce competitions, and memories that 
              last a lifetime.
            </p>

            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF6B00, #8B1538)",
                color: "#FDF6E3",
                boxShadow: "0 4px 20px rgba(255,107,0,0.4)",
              }}
            >
              Register Now →
            </button>
          </div>

          {/* Right - Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-item p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(139,21,56,0.1))",
                  border: "1px solid rgba(255,215,0,0.2)",
                }}
              >
                <span
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block mb-1 sm:mb-2"
                  style={{
                    color: "#FFD700",
                    textShadow: "0 0 15px rgba(255,215,0,0.5)",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[#FDF6E3] opacity-70 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative diya lights */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 flex justify-center gap-4 sm:gap-6 md:gap-8 opacity-60">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF6B00]"
            style={{
              boxShadow: "0 0 10px #FF6B00, 0 0 20px #FF6B00",
              animation: `diyaFlicker ${0.8 + i * 0.1}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes diyaFlicker {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
