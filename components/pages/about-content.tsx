"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Clock,
  Layers,
  Users,
  Target,
  Heart,
} from "lucide-react";
import { PageHeader } from "@/components/section-header";
import {
  FadeUp,
  HoverLift,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import { getAbout, getAboutValues } from "@/lib/services/about";
import { parseText } from "@/lib/strapi";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 20);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="font-heading text-3xl font-bold text-primary lg:text-4xl"
    >
      {count}
      {suffix}
    </span>
  );
}

const valueIcons = [Zap, Target, Heart, Clock, Users, Layers];

export function AboutContent() {
  const [about, setAbout] = useState<any>(null);
  const [aboutValues, setAboutValues] = useState<any>(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const [aboutData, aboutValuesData] = await Promise.all([
          getAbout(),
          getAboutValues(),
        ]);

        setAbout(aboutData);
        setAboutValues(aboutValuesData);
      } catch (error) {
        console.error("About fetch error:", error);
      }
    }

    loadAbout();
  }, []);

  if (!about || !aboutValues) {
    return null;
  }

  const descriptionParts = parseText(about.description).filter(
    (text: string) => text.trim() && text.trim().toLowerCase() !== "my story",
  );

  const aboutStats = [
    {
      value: Number(about.happy_Client || 0),
      suffix: "+",
      label: "Happy Clients",
    },
    {
      value: Number(about.project_done || 0),
      suffix: "+",
      label: "Projects Done",
    },
    {
      value: Number(about.satisfaction_Rate || 0),
      suffix: "%",
      label: "Satisfaction Rate",
    },
    {
      value: Number(about.years_Experience || 0),
      suffix: "+",
      label: "Years Experience",
    },
  ];

  const values = Array.from({ length: 6 }, (_, index) => {
    const itemNumber = index + 1;

    return {
      icon: valueIcons[index] ?? Layers,
      title: aboutValues[`title${itemNumber}`],
      description: aboutValues[`description${itemNumber}`],
    };
  }).filter((value) => value.title && value.description);

  return (
    <>
      <PageHeader
        title="About"
        highlight="Creative"
        subtitle={about.Title}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Agency Vision
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                {descriptionParts.map((paragraph: string, index: number) => (
                  <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {aboutStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <HoverLift>
                  <div className="rounded-2xl border border-border bg-background p-6 text-center transition-colors hover:border-primary/30">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </HoverLift>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Our <span className="text-primary italic">Values</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide every project we take on
            </p>
          </FadeUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <HoverLift>
                    <div className="rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/30 h-full">
                      <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
                        <Icon size={28} />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {"Let's Work"} <span className="text-primary italic">Together</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Ready to bring your brand to the next level? We would love to hear
              from you.
            </p>
            <div className="mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Get In Touch
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
