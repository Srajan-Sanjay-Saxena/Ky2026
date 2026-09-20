import type { CSSProperties } from "react";

interface AnimStyleParams {
  phase: number;
  href?: string;
  onClick?: () => void;
  size: number;
  zIndex?: number;
  style?: CSSProperties;
}

export const getAnimStyle = ({
  phase,
  href,
  onClick,
  size,
  zIndex,
  style,
}: AnimStyleParams): CSSProperties => ({
  animation: `stoneHarmonicBob 3.6s ease-in-out infinite`,
  animationDelay: `${phase}s`,
  display: "inline-block",
  cursor: href || onClick ? "pointer" : "default",
  position: "relative",
  zIndex: zIndex,
  "--stone-size": `${size}px`,
  ...style,
} as CSSProperties);
