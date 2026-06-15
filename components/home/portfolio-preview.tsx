// components/home/portfolio-preview.tsx (updated)
"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { Service, getCategoryLayout, getGridPlacementStyle, getImageUrl } from "@/lib/data";

interface HomePortfolioPreviewProps {
  projects: Service[];
}

export function HomePortfolioPreview({ projects }: HomePortfolioPreviewProps) {
  // Projects are already sorted by position from getAllServices
  const featured = projects.slice(0, 4);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Our"
          highlight="Portfolio"
          subtitle="Real projects, real results. See how we've helped brands achieve their goals."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px] lg:grid-flow-dense">
          {featured.map((project, index) => (
            <StaggerItem
              key={project.documentId}
              style={getGridPlacementStyle(getCategoryLayout(project, "home"))}
            >
              <Link href={`/portfolio/${project.documentId}`}>
                <div className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-border bg-card">
                  <img
                    src={getImageUrl(project.image)}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 from-background via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <span className="text-xs font-medium text-primary mb-1 block">
                        {project.service?.Name || "Uncategorized"}
                      </span>
                      <h3 className="font-heading text-base font-semibold text-foreground lg:text-lg line-clamp-2">
                        {project.name}
                      </h3>
                    </div>
                    <div className="rounded-full bg-primary p-2 text-primary-foreground opacity-0 transition-all group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
