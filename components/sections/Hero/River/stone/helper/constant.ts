import type { CSSProperties } from "react";

interface AnimStyleParams {
  phase: number;
  href?: string;
  onClick?: () => void;
  mobileSize: number;
  desktopSize: number;
  zIndex?: number;
  style?: CSSProperties;
}

export const getAnimStyle = ({
  phase,
  href,
  onClick,
  mobileSize,
  desktopSize,
  zIndex,
  style,
}: AnimStyleParams): CSSProperties => ({
  animation: `stoneHarmonicBob 3.6s ease-in-out infinite`,
  animationDelay: `${phase}s`,
  display: "inline-block",
  cursor: href || onClick ? "pointer" : "default",
  position: "relative",
  zIndex: zIndex,
  // CSS custom properties for responsive sizing
  "--stone-size-mobile": `${mobileSize}px`,
  "--stone-size-desktop": `${desktopSize}px`,
  ...style,
} as CSSProperties);
