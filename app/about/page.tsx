import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our journey from a personal creative passion to a full-service design and video agency helping brands shine.",
};

export default function AboutPage() {
  return <AboutContent />;
}
