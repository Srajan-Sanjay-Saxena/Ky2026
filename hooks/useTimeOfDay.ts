"use client";

import { useState, useEffect } from "react";
import {
  type TimeOfDay,
  getTimeOfDay,
  TimeGradients,
  ShowMoon,
  ShowStars,
  StarsOpacity,
} from "@/components/sections/Hero/palette/hero.bg.pallete";

interface TimeOfDayState {
  timeOfDay: TimeOfDay;
  gradient: string;
  showMoon: boolean;
  showStars: boolean;
  starsOpacity: number;
  hour: number;
}

// ⚠️ DEV OVERRIDE: Set to a specific time period for testing, or null for real time
// Options: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'dusk' | 'night' | null
const DEV_TIME_OVERRIDE: TimeOfDay | null = null; // Change to null for production

/**
 * Hook that returns current time of day and associated sky configuration.
 * Updates every minute to check for time period changes.
 * 
 * Time periods:
 * - Dawn:      5:00 - 7:00
 * - Morning:   7:00 - 11:00
 * - Afternoon: 11:00 - 16:00
 * - Evening:   16:00 - 19:00
 * - Dusk:      19:00 - 21:00
 * - Night:     21:00 - 5:00
 */
export function useTimeOfDay(): TimeOfDayState {
  const [state, setState] = useState<TimeOfDayState>(() => {
    // Use override if set, otherwise default to night for SSR
    const defaultTime: TimeOfDay = DEV_TIME_OVERRIDE ?? 'night';
    return {
      timeOfDay: defaultTime,
      gradient: TimeGradients[defaultTime],
      showMoon: ShowMoon[defaultTime],
      showStars: ShowStars[defaultTime],
      starsOpacity: StarsOpacity[defaultTime],
      hour: 12,
    };
  });

  useEffect(() => {
    // If DEV override is set, don't update based on real time
    if (DEV_TIME_OVERRIDE) return;

    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const timeOfDay = getTimeOfDay(hour);

      setState({
        timeOfDay,
        gradient: TimeGradients[timeOfDay],
        showMoon: ShowMoon[timeOfDay],
        showStars: ShowStars[timeOfDay],
        starsOpacity: StarsOpacity[timeOfDay],
        hour,
      });
    };

    // Set initial value
    updateTime();

    // Update every minute to check for time period changes
    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return state;
}
