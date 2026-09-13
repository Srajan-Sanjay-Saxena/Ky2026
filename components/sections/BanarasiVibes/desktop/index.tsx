"use client";

import { TablaSitar } from "./TablaSitar";
import { Paan } from "./Paan";
import { Lassi } from "./Lassi";
import { Malaiyo } from "./Malaiyo";

/**
 * Desktop-only elements for BanarasiVibes section
 * Shows: Tabla/Sitar, Paan, Lassi, Malaiyo (food items with animations)
 * Hidden on mobile (< 640px)
 */
export function BanarasiVibesDesktop() {
  return (
    <>
      <TablaSitar />
      <Paan />
      <Lassi />
      <Malaiyo />
    </>
  );
}
