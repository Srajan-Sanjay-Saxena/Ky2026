import { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Kashi Yatra 2026",
  description:
    "Reach out to the Kashi Yatra 2026 team — IIT (BHU) Varanasi's grandest cultural festival. Questions, sponsorships, or collaborations, we would love to hear from you.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
