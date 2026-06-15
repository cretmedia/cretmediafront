"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FadeUp,
  HoverLift,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { getServiceIcon } from "@/lib/icon-map";
import { getHomeServices } from "@/lib/services/services";
import { mapHomeServices } from "@/lib/mappers/services";
import type { ServiceCardData } from "@/lib/types";

export function HomeServicesPreview() {
  const [services, setServices] = useState<ServiceCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getHomeServices();
        setServices(mapHomeServices(data).slice(0, 6));
      } catch (error) {
        console.error("Service fetch error:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center">
        <p className="text-muted-foreground">Loading services...</p>
      </section>
    );
  }

  return (
    <section className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Our"
          highlight="Services"
          subtitle="Comprehensive creative solutions to elevate your brand and drive results"
        />

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
                    className="group block rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/40 h-full"
                  >
                    <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary">
                      <Icon size={24} />
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="flex flex-col gap-1.5">
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
                  </Link>
                </HoverLift>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
