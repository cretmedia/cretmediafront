// components/pages/portfolio-grid.tsx (updated section)
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Service,
  getCategoryLayout,
  getGridPlacementStyle,
  getImageUrl,
} from "@/lib/data";

interface PortfolioGridProps {
  initialProjects: Service[];
  categories: string[];
}

export function PortfolioGrid({ initialProjects, categories }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState<Service[]>(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState<Service[]>(initialProjects);
  const filterCategories = ["All", ...categories];

  const getLayoutCategoryName = (filterName: string) =>
    filterName === "All" ? "portfolio" : filterName;

  const getProjectPosition = (project: Service, filterName: string) => {
    const layoutName = getLayoutCategoryName(filterName);
    const layout = getCategoryLayout(project, layoutName) || getCategoryLayout(project, "portfolio");
    return layout?.postion_no ?? Number.MAX_SAFE_INTEGER;
  };

  useEffect(() => {
    let filtered = projects;
    if (activeFilter !== "All") {
      filtered = projects.filter((p) => p.service?.Name === activeFilter);
    }

    const layoutCategory = getLayoutCategoryName(activeFilter);

    // Sort filtered projects by position_no for consistent ordering
    const sortedFiltered = [...filtered].sort((a, b) => {
      return getProjectPosition(a, activeFilter) - getProjectPosition(b, activeFilter);
    });
    setFilteredProjects(sortedFiltered);
  }, [activeFilter, projects]);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Our <span className="italic text-primary">Portfolio</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. See how we've helped brands achieve their goals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px] lg:grid-flow-dense">
          {filteredProjects.map((project) => (
            <Link
              key={project.documentId}
              href={`/portfolio/${project.documentId}`}
              style={getGridPlacementStyle(
                getCategoryLayout(project, getLayoutCategoryName(activeFilter)) ||
                  getCategoryLayout(project, "portfolio"),
              )}
              className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={getImageUrl(project.image)}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
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
            </Link>
          ))}
        </div>

        {/* View All CTA - Only show if filtered */}
        {activeFilter !== "All" && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setActiveFilter("All")}
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:scale-105"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
