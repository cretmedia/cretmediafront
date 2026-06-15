import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/pages/service-detail";
import { mapHomeServices, mapServiceDetail } from "@/lib/mappers/services";
import {
  getAllServiceDetails,
  getHomeServices,
  getServiceDetailByDocumentId,
} from "@/lib/services/services";

export async function generateStaticParams() {
  const services = await getHomeServices();
  return services.map((service) => ({ slug: service.documentId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [homeServices, detail] = await Promise.all([
    getHomeServices(),
    getServiceDetailByDocumentId(slug),
  ]);

  const homeService = homeServices.find((item) => item.documentId === slug);

  if (!detail && !homeService) {
    return {};
  }

  const mapped = mapServiceDetail(detail, homeService);

  return {
    title: mapped.title,
    description: mapped.heroDescription || mapped.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [homeServices, detail] = await Promise.all([
    getHomeServices(),
    getServiceDetailByDocumentId(slug),
  ]);

  const homeService = homeServices.find((item) => item.documentId === slug);

  if (!detail && !homeService) {
    notFound();
  }

  const service = mapServiceDetail(detail, homeService);
  const relatedServices = mapHomeServices(homeServices).filter(
    (item) => item.documentId !== slug,
  );

  return <ServiceDetail service={service} relatedServices={relatedServices} />;
}
