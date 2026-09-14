"use client";

import Image from "next/image";
import { memo, useState, type FormEvent } from "react";
import { IMAGES } from "@/lib/images";
import { COLORS, JAZZ_COLORS } from "@/components/constants/palette";
import { CornerOrnaments } from "./CornerOrnaments";

type Status = "idle" | "sending" | "sent";

const fieldStyle = {
  background: "rgba(12,8,16,0.6)",
  border: `1px solid ${COLORS.BRIGHT_GOLD}30`,
  color: COLORS.CREAM,
} as const;

// ═══════════════════════════════════════════════════════════════════
// CONTACT FORM SECTION
// ═══════════════════════════════════════════════════════════════════
export const ContactForm = memo(function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    // Front-end only placeholder — wire to the backend endpoint when available.
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6">
      {/* Lotus mandala backdrop - Desktop only */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] opacity-[0.06] pointer-events-none">
        <Image
          src={IMAGES.contact.lotusMandala}
          alt=""
          fill
          className="object-contain animate-spin"
          style={{ animationDuration: "180s" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          className="relative p-6 sm:p-10 rounded-2xl"
          style={{
            background: `linear-gradient(160deg, ${JAZZ_COLORS.BG_ROYAL} 0%, ${JAZZ_COLORS.BG_WINE}cc 100%)`,
            border: `2px solid ${COLORS.BRIGHT_GOLD}25`,
            boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 60px rgba(255,215,0,0.06)",
          }}
        >
          <CornerOrnaments />

          <h2
            className="text-2xl sm:text-3xl font-bold mb-2 text-center"
            style={{
              fontFamily: "Georgia, serif",
              color: COLORS.BRIGHT_GOLD,
              textShadow: "0 2px 20px rgba(255,215,0,0.3)",
            }}
          >
            Send a Message
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Our team will respond within a couple of days.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs uppercase tracking-wider" style={{ color: COLORS.GOLD }}>
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400/70 transition-colors"
                  style={fieldStyle}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider" style={{ color: COLORS.GOLD }}>
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400/70 transition-colors"
                  style={fieldStyle}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs uppercase tracking-wider" style={{ color: COLORS.GOLD }}>
                Subject
              </span>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400/70 transition-colors"
                style={fieldStyle}
              />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-wider" style={{ color: COLORS.GOLD }}>
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message..."
                className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400/70 transition-colors resize-none"
                style={fieldStyle}
              />
            </label>

            {/* Submit - ornate gold button (matches About CTA) */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full sm:w-auto disabled:opacity-70"
              >
                <div
                  className="absolute -inset-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.BRIGHT_GOLD}50, ${COLORS.SAFFRON}30)`,
                    filter: "blur(10px)",
                  }}
                />
                <div
                  className="relative px-12 sm:px-16 py-4 text-center overflow-hidden"
                  style={{
                    background: `linear-gradient(180deg, #FFD700 0%, #E8B820 20%, #D4A853 50%, #B8860B 80%, #8B6914 100%)`,
                    border: `3px solid #8B6914`,
                    boxShadow:
                      "0 8px 32px rgba(255,215,0,0.4), 0 4px 16px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Shimmer - desktop only */}
                  <div
                    className="hidden lg:block absolute inset-0 opacity-30"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)",
                      animation: "shimmerSlide 3s infinite",
                    }}
                  />
                  <span
                    className="relative z-10 font-bold text-sm sm:text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                    style={{ color: "#1a0a14", textShadow: "0 1px 0 rgba(255,255,255,0.3)" }}
                  >
                    <span className="text-lg">✉️</span>
                    <span>{status === "sent" ? "Message Sent" : status === "sending" ? "Sending…" : "Send Message"}</span>
                    <span className="text-lg">✉️</span>
                  </span>
                </div>
              </button>
            </div>

            {status === "sent" && (
              <p className="text-center text-sm" style={{ color: JAZZ_COLORS.LIME }}>
                🙏 Thank you! Your message has reached us.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
});
