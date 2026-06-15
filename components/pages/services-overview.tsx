"use client";

import Link from "next/link";
import { ArrowRight, Zap, Clock, Layers } from "lucide-react";
import { PageHeader } from "@/components/section-header";
import {
  FadeUp,
  HoverLift,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import { getServiceIcon } from "@/lib/icon-map";
import type { ServiceCardData } from "@/lib/types";

const whyChoose = [
  {
    icon: Zap,
    title: "Strategic Approach",
    description:
      "Every design backed by strategy to deliver maximum impact and results.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Quick turnaround without compromising quality to meet your deadlines.",
  },
  {
    icon: Layers,
    title: "Complete Package",
    description: "End-to-end creative solutions from concept to final delivery.",
  },
];

export function ServicesOverview({ services }: { services: ServiceCardData[] }) {
  return (
    <>
      <PageHeader
        title="Our"
        highlight="Services"
        subtitle="Comprehensive creative solutions to elevate your brand and drive results."
      />

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = getServiceIcon(
                service.iconName,
                service.iconImport,
                service.title,
              );

              return (
                <StaggerItem key={service.documentId}>
                  <HoverLift>
                    <Link
                      href={`/services/${service.documentId}`}
                      className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 h-full"
                    >
                      <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-1.5 mb-4">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl text-balance">
              Why Choose Our Services?
            </h2>
          </FadeUp>

          <StaggerContainer className="grid gap-8 sm:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
                      <Icon size={28} />
                    </div>
                    <h4 className="font-heading text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeUp className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
