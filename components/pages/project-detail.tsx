// components/pages/project-detail.tsx
"use client";

import { ArrowLeft, Calendar, User, Tag, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { getGalleryPlacementStyle, getImageUrl } from "@/lib/data";

interface GalleryImage {
  id: number;
  col_span: number;
  row_span: number;
  caption: string;
  postion: number;
  image: {
    url?: string;
    formats?: {
      thumbnail?: { url?: string };
      small?: { url?: string };
      medium?: { url?: string };
      large?: { url?: string };
    };
  };
}

interface ProjectDetailProps {
  project: {
    slug: string;
    title: string;
    category: string;
    image: string;
    client: string;
    year: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    gallery?: GalleryImage[];
    longDescription?: string;
    shortDescription?: string;
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  // Helper to get gallery image URL
  const getGalleryImageUrl = (galleryImage: GalleryImage, size: 'medium' = 'medium'): string => {
    return getImageUrl(galleryImage.image, size);
  };

  return (
    <article className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 from-background via-background/50 to-transparent" />
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="absolute top-8 left-8 z-10 flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-background hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back
        </motion.button>

        {/* Project Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                {project.category}
              </span>
              <h1 className="mt-4 text-4xl font-bold text-white lg:text-6xl text-balance">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User size={16} />
                <span>Client:</span>
                <span className="font-medium text-foreground">{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>Year:</span>
                <span className="font-medium text-foreground">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Tag size={16} />
                <span>Category:</span>
                <span className="font-medium text-foreground">{project.category}</span>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-primary hover:underline"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <StaggerContainer className="space-y-16">
          {/* Description */}
          <StaggerItem>
            <FadeUp>
              <h2 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </FadeUp>
          </StaggerItem>

          {/* Challenge & Solution */}
          <div className="grid gap-8 lg:grid-cols-2">
            <StaggerItem>
              <FadeUp>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  The Challenge
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </FadeUp>
            </StaggerItem>
            <StaggerItem>
              <FadeUp>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Our Solution
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </FadeUp>
            </StaggerItem>
          </div>

          {/* Results Section */}
          {project.results && project.results.length > 0 && (
            <StaggerItem>
              <FadeUp>
                <h2 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl">
                  Key Results
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="rounded-xl border border-border bg-secondary/50 p-6 text-center"
                    >
                      <p className="text-sm font-medium text-primary">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </StaggerItem>
          )}

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <StaggerItem>
              <FadeUp>
                <h2 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl flex items-center gap-2">
                  <ImageIcon size={24} />
                  Project Gallery
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px] lg:grid-flow-dense">
                  {project.gallery.map((galleryItem, index) => (
                    <motion.div
                      key={galleryItem.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={getGalleryPlacementStyle(galleryItem)}
                      className="group relative min-h-[220px] overflow-hidden rounded-xl border border-border bg-secondary/30"
                    >
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src={getGalleryImageUrl(galleryItem)}
                          alt={galleryItem.caption || `${project.title} - Image ${galleryItem.postion}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Overlay with caption */}
                        <div className="absolute inset-0 from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        {galleryItem.caption && (
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                            <p className="text-sm font-medium">{galleryItem.caption}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </StaggerItem>
          )}

          {/* CTA Section */}
          <StaggerItem>
            <FadeUp>
              <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center lg:p-12">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Ready to start your project?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Let&apos;s create something amazing together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                >
                  Contact Us Today
                </Link>
              </div>
            </FadeUp>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </article>
  );
}
