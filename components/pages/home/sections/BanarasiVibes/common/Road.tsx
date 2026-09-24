// Custom Road Component
import { memo } from "react";

export const Road = memo(function Road() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[140px] md:h-[160px]"
      style={{ zIndex: 25 }}
    >
      {/* Curb */}
      <div
        className="absolute top-0 left-0 right-0 h-[8px]"
        style={{
          background: "linear-gradient(180deg, #D4D4D4 0%, #9E9E9E 100%)",
        }}
      />
      {/* Main Road */}
      <div
        className="absolute top-[8px] left-0 right-0 bottom-0"
        style={{
          background:
            "linear-gradient(180deg, #2C2C2C 0%, #1A1A1A 30%, #252525 70%, #1F1F1F 100%)",
        }}
      >
        {/* Road texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Center line - dashed yellow */}
        <div
          className="absolute top-1/2 left-0 right-0 h-[4px] -translate-y-1/2"
          style={{
            background:
              "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 40px, transparent 40px, transparent 60px)",
          }}
        />
        {/* Side white lines */}
        <div
          className="absolute top-[10px] left-[5%] right-[5%] h-[3px]"
          style={{ background: "#FFFFFF", opacity: 0.7 }}
        />
        <div
          className="absolute bottom-[10px] left-[5%] right-[5%] h-[3px]"
          style={{ background: "#FFFFFF", opacity: 0.7 }}
        />
      </div>
    </div>
  );
});
