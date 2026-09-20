import { memo } from "react";

/**
 * Large outer mandala with slow rotation
 * Mobile only - decorative background element
 */
export const OuterMandala = memo(function OuterMandala() {
  return (
    <div
      className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] opacity-[0.25] vibes-mandala-slow"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='1'%3E%3Ccircle cx='200' cy='200' r='195'/%3E%3Ccircle cx='200' cy='200' r='170'/%3E%3Ccircle cx='200' cy='200' r='145'/%3E%3Ccircle cx='200' cy='200' r='120'/%3E%3Ccircle cx='200' cy='200' r='95'/%3E%3Ccircle cx='200' cy='200' r='70'/%3E%3Ccircle cx='200' cy='200' r='45'/%3E%3Ccircle cx='200' cy='200' r='20'/%3E%3C!-- 8-point star petals --%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(45 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(90 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(135 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(180 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(225 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(270 200 200)'/%3E%3Cpath d='M200 5 L210 60 L200 45 L190 60 Z' fill='%23FFD700' opacity='0.3' transform='rotate(315 200 200)'/%3E%3C!-- Inner decorative arcs --%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none'/%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none' transform='rotate(90 200 200)'/%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none' transform='rotate(180 200 200)'/%3E%3Cpath d='M200 80 Q240 120 200 160 Q160 120 200 80' stroke='%23FFD700' fill='none' transform='rotate(270 200 200)'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
});
