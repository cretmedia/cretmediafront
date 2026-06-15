// app/portfolio/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  getServiceBySlug, 
  getAllServiceIds, 
  extractTextFromRichText, 
  getImageUrl,
  extractChallenge,
  extractSolution
} from "@/lib/data";
import { ProjectDetail } from "@/components/pages/project-detail";

export async function generateStaticParams() {
  const serviceIds = await getAllServiceIds();
  return serviceIds.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getServiceBySlug(slug);
  
  if (!project) return {};
  
  return {
    title: `${project.name} | Portfolio`,
    description: extractTextFromRichText(project.Title),
    openGraph: {
      title: project.name,
      description: extractTextFromRichText(project.Title),
      images: project.image ? [getImageUrl(project.image, 'large')] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getServiceBySlug(slug);
  
  if (!project) notFound();

  // Transform Strapi data to match ProjectDetail component expectations
  const transformedProject = {
    slug: project.documentId,
    title: project.name,
    category: project.service?.Name || "Uncategorized",
    image: getImageUrl(project.image, 'large'),
    client: project.client || "Not specified",
    year: project.Year ? project.Year.split("-")[0] : "2024",
    description: extractTextFromRichText(project.Title),
    challenge: extractChallenge(project.short_Description || ""),
    solution: extractSolution(project.long_Description || []),
    results: [], // You can add results field in Strapi if needed
    gallery: project.gallery || [], // Gallery is already sorted by position
  };

  return <ProjectDetail project={transformedProject} />;
}