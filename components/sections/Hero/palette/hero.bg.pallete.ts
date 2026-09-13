/**
 * Hero Section Sky Gradients - Time-based themes
 * 
 * Time periods:
 * - Dawn:      5:00 - 7:00   (soft pinks, oranges emerging)
 * - Morning:   7:00 - 11:00  (bright, clear blue sky)
 * - Afternoon: 11:00 - 16:00 (warm golden, bright blue)
 * - Evening:   16:00 - 19:00 (sunset oranges, pinks, purples)
 * - Dusk:      19:00 - 21:00 (deep purples, first stars)
 * - Night:     21:00 - 5:00  (deep blues, starry)
 */

export type TimeOfDay = 'dawn' | 'morning' | 'afternoon' | 'evening' | 'dusk' | 'night';

// Dawn - Early morning, sun just rising (5:00 - 7:00)
export const DawnGradient = `linear-gradient(180deg, 
  #1a1a2e 0%,
  #2d2040 8%,
  #4a3055 16%,
  #6d4070 24%,
  #8b5080 32%,
  #b06888 40%,
  #d4847a 50%,
  #e8a070 60%,
  #f5bc6a 72%,
  #fcd472 84%,
  #ffe580 100%
)`;

// Morning - Bright daylight (7:00 - 11:00)
export const MorningGradient = `linear-gradient(180deg,
  #87CEEB 0%,
  #98d4ee 10%,
  #a8daf0 20%,
  #b8e0f3 32%,
  #c8e6f5 44%,
  #d8ecf8 56%,
  #e8f2fa 68%,
  #f0f6fc 80%,
  #f8fafd 90%,
  #ffffff 100%
)`;

// Afternoon - Warm golden sun high (11:00 - 16:00)
export const AfternoonGradient = `linear-gradient(180deg,
  #4a90c2 0%,
  #5a9ac8 10%,
  #6aa4ce 20%,
  #7aaed4 32%,
  #8ab8da 44%,
  #9ac2e0 56%,
  #b0cce6 68%,
  #c6d6ec 80%,
  #dce0f2 90%,
  #f0e8e0 100%
)`;

// Evening - Sunset vibes (16:00 - 19:00)
export const EveningGradient = `linear-gradient(180deg,
  #1a1a2e 0%,
  #2d1f3d 10%,
  #4a2c4a 20%,
  #6b3a50 32%,
  #8b4a55 44%,
  #b86a5a 54%,
  #d4845a 64%,
  #e8a060 74%,
  #f0b86a 84%,
  #f5c87a 94%,
  #f8d888 100%
)`;

// Dusk - Twilight, first stars appearing (19:00 - 21:00)
export const DuskGradient = `linear-gradient(180deg,
  #0a0a15 0%,
  #0f0f20 10%,
  #151528 20%,
  #1a1a35 32%,
  #252545 44%,
  #303055 54%,
  #3a3a60 64%,
  #45456a 74%,
  #504f72 84%,
  #5a587a 94%,
  #656080 100%
)`;

// Night - Deep night sky with stars (21:00 - 5:00)
export const NightGradient = `linear-gradient(180deg, 
  #050510 0%, 
  #0a0a1a 10%,
  #0f1025 20%,
  #141430 32%,
  #1a1a40 44%,
  #1e1e4a 54%,
  #222255 64%,
  #1a1a45 74%,
  #141435 84%,
  #0f0f28 94%,
  #0a0a1a 100%
)`;

// Map time of day to gradient
export const TimeGradients: Record<TimeOfDay, string> = {
  dawn: DawnGradient,
  morning: MorningGradient,
  afternoon: AfternoonGradient,
  evening: EveningGradient,
  dusk: DuskGradient,
  night: NightGradient,
};

// Whether to show moon or sun for each time period
export const ShowMoon: Record<TimeOfDay, boolean> = {
  dawn: false,      // Sun rising
  morning: false,   // Sun
  afternoon: false, // Sun
  evening: false,   // Sun setting
  dusk: true,       // Moon appearing
  night: true,      // Moon
};

// Whether to show stars for each time period
export const ShowStars: Record<TimeOfDay, boolean> = {
  dawn: false,
  morning: false,
  afternoon: false,
  evening: false,
  dusk: true,       // Stars starting to appear
  night: true,
};

// Opacity for stars (for gradual appearance during dusk)
export const StarsOpacity: Record<TimeOfDay, number> = {
  dawn: 0,
  morning: 0,
  afternoon: 0,
  evening: 0,
  dusk: 0.5,
  night: 1,
};

// Get time of day from current hour
export function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 7) return 'dawn';
  if (hour >= 7 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 16) return 'afternoon';
  if (hour >= 16 && hour < 19) return 'evening';
  if (hour >= 19 && hour < 21) return 'dusk';
  return 'night'; // 21:00 - 5:00
}

// Default export for backwards compatibility
export const HeroBgColorGradient = NightGradient;
