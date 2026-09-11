"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  {
    day: "Day 1",
    date: "March 15",
    events: ["Opening Ceremony", "Cultural Prelims", "Tech Workshops", "Battle of Bands"],
    highlight: "🎭",
  },
  {
    day: "Day 2",
    date: "March 16",
    events: ["Hackathon Finals", "Dance Competition", "Art Exhibition", "Pro Night 1"],
    highlight: "💻",
  },
  {
    day: "Day 3",
    date: "March 17",
    events: ["Sports Finals", "Fashion Show", "Pro Night 2", "Closing Ceremony"],
    highlight: "🏆",
  },
];

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Target date: March 15, 2026
  const targetDate = new Date("2026-03-15T00:00:00");
  const timeLeft = useCountdown(targetDate);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Countdown animation
      gsap.fromTo(
        countdownRef.current,
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

      // Cards horizontal reveal
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { x: 100, opacity: 0, rotateY: 15 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
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
        background: "linear-gradient(180deg, #1A1A2E 0%, #0F3460 50%, #1A1A2E 100%)",
      }}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${20 + i * 15}%`,
              background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
              animation: `lineMove ${10 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Countdown */}
        <div ref={countdownRef} className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[#FF6B00] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
            Countdown to Kashi Yatra 2026
          </span>
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-16 sm:w-20 md:w-24 lg:w-28 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,107,0,0.1))",
                  border: "1px solid rgba(255,215,0,0.3)",
                }}
              >
                <span
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold block"
                  style={{
                    color: "#FFD700",
                    textShadow: "0 0 15px rgba(255,215,0,0.5)",
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[#FDF6E3] opacity-60 text-[10px] sm:text-xs uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12"
          style={{
            color: "#FFD700",
            textShadow: "0 0 20px rgba(255,215,0,0.3)",
          }}
        >
          Event Schedule
        </h2>

        {/* Schedule Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {schedule.map((day, i) => (
            <div
              key={i}
              className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl overflow-hidden group"
              style={{
                background: "linear-gradient(180deg, rgba(45,24,16,0.8), rgba(26,26,46,0.9))",
                border: "1px solid rgba(255,215,0,0.2)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,215,0,0.1), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <span className="text-3xl sm:text-4xl md:text-5xl block mb-2 sm:mb-3 md:mb-4">{day.highlight}</span>
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-1"
                  style={{ color: "#FFD700" }}
                >
                  {day.day}
                </h3>
                <span className="text-[#FF6B00] text-xs sm:text-sm mb-3 sm:mb-4 block">{day.date}, 2026</span>
                
                <ul className="space-y-1.5 sm:space-y-2">
                  {day.events.map((event, j) => (
                    <li
                      key={j}
                      className="text-[#FDF6E3] opacity-80 text-xs sm:text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#FF6B00] flex-shrink-0" />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day number watermark */}
              <span
                className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold opacity-5 pointer-events-none"
                style={{ color: "#FFD700" }}
              >
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes lineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
