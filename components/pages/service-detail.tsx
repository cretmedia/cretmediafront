"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/section-header";
import {
  FadeUp,
  HoverLift,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import { getServiceIcon } from "@/lib/icon-map";
import type { ServiceCardData, TransformedServiceData } from "@/lib/types";

export function ServiceDetail({
  service,
  relatedServices,
}: {
  service: TransformedServiceData;
  relatedServices: ServiceCardData[];
}) {
  return (
    <>
      <PageHeader
        title=""
        highlight={service.title}
        subtitle={service.heroDescription}
      />

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeUp>
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 h-full">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  What We Did
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.items.length > 0 && (
                  <StaggerContainer className="flex flex-col gap-4">
                    {service.items.map((item, index) => (
                      <StaggerItem key={`${item}-${index}`}>
                        <div className="flex items-center gap-3 rounded-xl bg-background border border-border p-4 transition-colors hover:border-primary/30">
                          <div className="rounded-full bg-primary/10 p-1.5 text-primary flex-shrink-0">
                            <CheckCircle size={18} />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {item}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 h-full">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Key Results
                </h2>
                <StaggerContainer className="flex flex-col gap-4">
                  {service.benefits.map((benefit, index) => (
                    <StaggerItem key={`${benefit}-${index}`}>
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading text-sm font-bold">
                          {index + 1}
                        </span>
                        <p className="text-muted-foreground leading-relaxed pt-1">
                          {benefit}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Ready to Create Something <span className="text-primary italic">Amazing</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Let's discuss how we can help your brand achieve similar results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  View More Work
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl text-balance">
              Explore Other <span className="text-primary italic">Services</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-3">
            {relatedServices.map((relatedService) => {
              const Icon = getServiceIcon(
                relatedService.iconName,
                relatedService.iconImport,
                relatedService.title,
              );

              return (
                <StaggerItem key={relatedService.documentId}>
                  <HoverLift>
                    <Link
                      href={`/services/${relatedService.documentId}`}
                      className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 h-full"
                    >
                      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                        {relatedService.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {relatedService.description}
                      </p>
                    </Link>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
