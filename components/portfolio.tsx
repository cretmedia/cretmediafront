"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Social Media", "Video", "Print", "Packaging"];

const projects = [
  {
    title: "E-commerce Social Campaign",
    category: "Social Media",
    image: "/images/portfolio-1.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Tech Startup Explainer",
    category: "Video",
    image: "/images/portfolio-2.jpg",
    span: "",
  },
  {
    title: "Restaurant Brand Materials",
    category: "Print",
    image: "/images/portfolio-3.jpg",
    span: "",
  },
  {
    title: "Organic Food Packaging",
    category: "Packaging",
    image: "/images/portfolio-4.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Fitness App Promo Video",
    category: "Video",
    image: "/images/portfolio-5.jpg",
    span: "",
  },
  {
    title: "Luxury Watch Campaign",
    category: "Social Media",
    image: "/images/portfolio-6.jpg",
    span: "",
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Our <span className="italic text-primary">Portfolio</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. See how we{"'"}ve helped brands achieve their goals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] ${project.span}`}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 from-background via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-medium text-primary mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground lg:text-lg">
                    {project.title}
                  </h3>
                </div>
                <div className="rounded-full bg-primary p-2 text-primary-foreground opacity-0 transition-all group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
