"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/NavbarDesign";

// Royal color palette
const ROYAL_COLORS = {
  BG_DEEP: "#0a0510",
  BG_ROYAL: "#120a18",
  BG_WINE: "#1a0c14",
  GOLD: "#FFD700",
  GOLD_LIGHT: "#FFE55C",
  GOLD_DARK: "#B8860B",
  CREAM: "#FDF6E3",
  HOT_PINK: "#FF1493",
  ROYAL_PURPLE: "#6B21A8",
  DEEP_MAGENTA: "#9D174D",
};

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Handle login/signup logic here
  };

  return (
    <>
      {/* Fixed navbar */}
      <div className="fixed inset-x-0 top-0 z-[200]">
        <Navbar position="relative" topOffset={18} />
      </div>

      <main
        className="min-h-screen pt-28 sm:pt-32 pb-12 px-4 flex items-center justify-center"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, ${ROYAL_COLORS.ROYAL_PURPLE}15 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, ${ROYAL_COLORS.DEEP_MAGENTA}12 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, ${ROYAL_COLORS.HOT_PINK}08 0%, transparent 60%),
            linear-gradient(180deg, ${ROYAL_COLORS.BG_DEEP} 0%, ${ROYAL_COLORS.BG_ROYAL} 30%, ${ROYAL_COLORS.BG_WINE} 70%, ${ROYAL_COLORS.BG_DEEP} 100%)
          `,
        }}
      >
        {/* Background decorative pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div
          className="fixed top-[20%] left-[10%] w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${ROYAL_COLORS.HOT_PINK}15 0%, transparent 60%)`,
            filter: "blur(60px)",
            animation: "pulseSlow 6s ease-in-out infinite",
          }}
        />
        <div
          className="fixed bottom-[20%] right-[10%] w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${ROYAL_COLORS.GOLD}10 0%, transparent 60%)`,
            filter: "blur(80px)",
            animation: "pulseSlow 8s ease-in-out infinite 2s",
          }}
        />

        {/* Login Card */}
        <div
          className="relative w-full max-w-md mx-auto"
          style={{
            animation: "fadeInUp 0.6s ease-out",
          }}
        >
          {/* Ornate frame corners */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: ROYAL_COLORS.GOLD }} />
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: ROYAL_COLORS.GOLD }} />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: ROYAL_COLORS.GOLD }} />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: ROYAL_COLORS.GOLD }} />

          {/* Card */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-10"
            style={{
              background: `linear-gradient(145deg, ${ROYAL_COLORS.BG_ROYAL}95 0%, ${ROYAL_COLORS.BG_WINE}90 50%, ${ROYAL_COLORS.BG_ROYAL}95 100%)`,
              border: `1px solid ${ROYAL_COLORS.GOLD}40`,
              boxShadow: `
                0 0 60px ${ROYAL_COLORS.GOLD}15,
                0 25px 50px rgba(0,0,0,0.5),
                inset 0 1px 0 ${ROYAL_COLORS.GOLD}20
              `,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${ROYAL_COLORS.GOLD}08 0%, transparent 50%)`,
              }}
            />

            {/* Header */}
            <div className="text-center mb-8 relative z-10">
              {/* Om symbol */}
              <div
                className="text-4xl mb-3"
                style={{
                  color: ROYAL_COLORS.GOLD,
                  textShadow: `0 0 20px ${ROYAL_COLORS.GOLD}60`,
                  filter: `drop-shadow(0 0 10px ${ROYAL_COLORS.GOLD}40)`,
                }}
              >
                ॐ
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{
                  fontFamily: "'Cinzel Decorative', Georgia, serif",
                  background: `linear-gradient(135deg, ${ROYAL_COLORS.GOLD_LIGHT} 0%, ${ROYAL_COLORS.GOLD} 50%, ${ROYAL_COLORS.GOLD_DARK} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: `0 0 30px ${ROYAL_COLORS.GOLD}30`,
                }}
              >
                {isLogin ? "स्वागतम्" : "नमस्ते"}
              </h1>

              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: `${ROYAL_COLORS.CREAM}70` }}
              >
                {isLogin ? "Welcome Back" : "Create Account"}
              </p>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <div
                  className="h-px w-12"
                  style={{ background: `linear-gradient(90deg, transparent, ${ROYAL_COLORS.GOLD})` }}
                />
                <div
                  className="w-2 h-2 rotate-45"
                  style={{ background: ROYAL_COLORS.GOLD, boxShadow: `0 0 10px ${ROYAL_COLORS.GOLD}` }}
                />
                <div
                  className="h-px w-12"
                  style={{ background: `linear-gradient(90deg, ${ROYAL_COLORS.GOLD}, transparent)` }}
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {/* Name field (only for signup) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium tracking-wide"
                    style={{ color: ROYAL_COLORS.CREAM }}
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required={!isLogin}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:scale-[1.02]"
                      style={{
                        background: `${ROYAL_COLORS.BG_DEEP}80`,
                        border: `1px solid ${ROYAL_COLORS.GOLD}30`,
                        color: ROYAL_COLORS.CREAM,
                        boxShadow: `inset 0 2px 4px rgba(0,0,0,0.3)`,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = `${ROYAL_COLORS.GOLD}80`;
                        e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.3), 0 0 20px ${ROYAL_COLORS.GOLD}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = `${ROYAL_COLORS.GOLD}30`;
                        e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.3)`;
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium tracking-wide"
                  style={{ color: ROYAL_COLORS.CREAM }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: `${ROYAL_COLORS.BG_DEEP}80`,
                      border: `1px solid ${ROYAL_COLORS.GOLD}30`,
                      color: ROYAL_COLORS.CREAM,
                      boxShadow: `inset 0 2px 4px rgba(0,0,0,0.3)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = `${ROYAL_COLORS.GOLD}80`;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.3), 0 0 20px ${ROYAL_COLORS.GOLD}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = `${ROYAL_COLORS.GOLD}30`;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.3)`;
                    }}
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium tracking-wide"
                  style={{ color: ROYAL_COLORS.CREAM }}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: `${ROYAL_COLORS.BG_DEEP}80`,
                      border: `1px solid ${ROYAL_COLORS.GOLD}30`,
                      color: ROYAL_COLORS.CREAM,
                      boxShadow: `inset 0 2px 4px rgba(0,0,0,0.3)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = `${ROYAL_COLORS.GOLD}80`;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.3), 0 0 20px ${ROYAL_COLORS.GOLD}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = `${ROYAL_COLORS.GOLD}30`;
                      e.target.style.boxShadow = `inset 0 2px 4px rgba(0,0,0,0.3)`;
                    }}
                  />
                </div>
              </div>

              {/* Forgot password link (only for login) */}
              {isLogin && (
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-sm transition-all duration-300 hover:tracking-wider"
                    style={{ color: `${ROYAL_COLORS.GOLD}90` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 15px ${ROYAL_COLORS.GOLD}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = "none";
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-lg font-semibold text-lg uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${ROYAL_COLORS.GOLD} 0%, ${ROYAL_COLORS.GOLD_DARK} 50%, ${ROYAL_COLORS.GOLD} 100%)`,
                  color: ROYAL_COLORS.BG_DEEP,
                  boxShadow: `0 0 30px ${ROYAL_COLORS.GOLD}40, 0 4px 15px rgba(0,0,0,0.3)`,
                  border: `1px solid ${ROYAL_COLORS.GOLD_LIGHT}`,
                }}
              >
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
                    animation: "shimmerSlide 2s ease-in-out infinite",
                  }}
                />
                <span className="relative z-10">
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    isLogin ? "Enter the Realm" : "Begin Journey"
                  )}
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6 relative z-10">
              <div className="flex-1 h-px" style={{ background: `${ROYAL_COLORS.GOLD}30` }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: `${ROYAL_COLORS.CREAM}50` }}>
                or
              </span>
              <div className="flex-1 h-px" style={{ background: `${ROYAL_COLORS.GOLD}30` }} />
            </div>

            {/* Social login buttons */}
            <div className="space-y-3 relative z-10">
              <button
                type="button"
                className="w-full py-3 rounded-lg font-medium flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `${ROYAL_COLORS.BG_DEEP}60`,
                  border: `1px solid ${ROYAL_COLORS.GOLD}25`,
                  color: ROYAL_COLORS.CREAM,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${ROYAL_COLORS.GOLD}50`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${ROYAL_COLORS.GOLD}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${ROYAL_COLORS.GOLD}25`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Toggle login/signup */}
            <p className="text-center mt-6 text-sm relative z-10" style={{ color: `${ROYAL_COLORS.CREAM}70` }}>
              {isLogin ? "New to Kashi Yatra?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold transition-all duration-300"
                style={{ color: ROYAL_COLORS.GOLD }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = `0 0 15px ${ROYAL_COLORS.GOLD}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {isLogin ? "Create Account" : "Sign In"}
              </button>
            </p>
          </div>
        </div>

        {/* Bottom decorative text */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: `${ROYAL_COLORS.GOLD}40` }}
          >
            ॥ IIT (BHU) Varanasi ॥
          </p>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
