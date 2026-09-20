import { memo } from "react";
import { COLORS } from "@/components/pages/home/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// BOTTOM BAR — copyright + made-with-diya row
// ═══════════════════════════════════════════════════════════════════
export const BottomBar = memo(function BottomBar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
      <p
        className="text-sm sm:text-base"
        style={{
          color: COLORS.CREAM,
          opacity: 0.6,
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.05em",
        }}
      >
        © 2027 Kashi Yatra • IIT (BHU) Varanasi
      </p>
      <p
        className="text-sm sm:text-base flex items-center gap-2"
        style={{
          color: COLORS.CREAM,
          opacity: 0.6,
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.05em",
        }}
      >
        Made with{" "}
        <span className="text-lg" style={{ color: COLORS.SAFFRON }}>
          🪔
        </span>{" "}
        in the City of Light
      </p>
    </div>
  );
});
