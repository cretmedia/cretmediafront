import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Creative Studio. Let's discuss your next project and bring your brand vision to life.",
};

export default function ContactPage() {
  return <ContactContent />;
}
