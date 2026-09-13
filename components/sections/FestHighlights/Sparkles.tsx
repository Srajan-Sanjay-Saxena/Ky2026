
// Confetti/Sparkle component for fest vibe
export const FestSparkles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 4 + Math.random() * 8,
          height: 4 + Math.random() * 8,
          background: [
            "#FF6B00",
            "#FFD700",
            "#FF4500",
            "#FFA500",
            "#FF1493",
            "#00CED1",
          ][Math.floor(Math.random() * 6)],
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          transform: `rotate(${Math.random() * 360}deg)`,
          animation: `sparkleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
          opacity: 0.6 + Math.random() * 0.4,
        }}
      />
    ))}
  </div>
);