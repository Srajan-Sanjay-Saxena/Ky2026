import { Metadata } from "next";
import { SchedulePageContent } from "./SchedulePageContent";

export const metadata: Metadata = {
  title: "Schedule | Kashi Yatra 2027",
  description:
    "The full day-by-day schedule for Kashi Yatra 2027 — IIT (BHU) Varanasi's grandest cultural festival, 14th–17th January 2027. Detailed timings coming soon.",
};

export default function SchedulePage() {
  return <SchedulePageContent />;
}
