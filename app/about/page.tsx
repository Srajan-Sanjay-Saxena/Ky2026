import { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Kashi Yatra 2027",
  description:
    "Discover the legacy, spirit, and vision of Kashi Yatra - IIT BHU's grandest cultural festival. Where tradition meets celebration in the heart of Varanasi.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
