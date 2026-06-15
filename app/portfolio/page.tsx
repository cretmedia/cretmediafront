// app/portfolio/page.tsx
import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/pages/portfolio-grid";
import { getAllPortfolioCategories, getAllServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of creative projects including social media campaigns, video production, print design, and packaging.",
};

export default async function PortfolioPage() {
  const projects = await getAllServices();
  const categories = await getAllPortfolioCategories();

  return <PortfolioGrid initialProjects={projects} categories={categories} />;
}
