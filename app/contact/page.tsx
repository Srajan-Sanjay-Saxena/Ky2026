import { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Kashi Yatra 2027",
  description:
    "Reach out to the Kashi Yatra 2027 team — IIT (BHU) Varanasi's grandest cultural festival. Questions, sponsorships, or collaborations, we would love to hear from you.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
