"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, HoverLift, motion } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { stats } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { getHomeAbout } from "@/lib/services/home";
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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
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

export function HomeAboutPreview() {
  const [about, setAbout] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const data = await getHomeAbout();
      setAbout(data);
    }

    loadData();
  }, []);

  if (!about) return null;

  const header = parseText(about.header)[0];
  const title = parseText(about.title)[0];
  const description = parseText(about.description);

  const title2 = parseText(about.title2)[0];
  const description2 = parseText(about.description2);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="About"
          highlight="Creative"
          subtitle={header}
          italic={false}
        />

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeUp>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 h-full">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
               {title}
              </h3>
              {/* <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong passion for visual storytelling and a background in
                creative design, I built a career creating impactful digital
                experiences. What started as a freelance journey quickly
                transformed into a full service creative agency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, my experience spans from social media content to full
                brand identity work, delivering professional-grade creative
                solutions that make brands unforgettable.
              </p> */}
              {description.map((p: string, i: number) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
        ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 h-full">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {title2}
              </h3>
              {/* <p className="text-muted-foreground leading-relaxed mb-4">
                My vision is to bridge the gap between creative excellence and
                business strategy. Every design, every video, every campaign we
                create serves a purpose — to elevate brands and drive measurable
                results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From startups to established enterprises, our role is to bring
                professional and high-quality creative solutions that help
                businesses stand out in a crowded marketplace.
              </p> */}
              {description2.map((p: string, i: number) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
        ))}
            </div>
          </FadeUp>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <HoverLift>
                <div className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30">
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

        {/* CTA */}
        <FadeUp className="mt-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Learn More About Us
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
