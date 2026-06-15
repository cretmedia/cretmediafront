import type { Metadata } from "next";
import { ServicesOverview } from "@/components/pages/services-overview";
import { mapHomeServices } from "@/lib/mappers/services";
import { getHomeServices } from "@/lib/services/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive creative services including social media design, video editing, print design, and packaging.",
};

export default async function ServicesPage() {
  const services = mapHomeServices(await getHomeServices());

  return <ServicesOverview services={services} />;
}
