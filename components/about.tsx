"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
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
    <span ref={ref} className="font-heading text-3xl font-bold text-primary lg:text-4xl">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            About <span className="text-primary">Creative</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From personal passion to professional agency — crafting visuals that tell your story
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16">
          {/* My Story */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              My Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a strong passion for visual storytelling and a background in
              creative design, I built a career creating impactful digital
              experiences. What started as a freelance journey quickly
              transformed into a full service creative agency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, my experience spans from social media content to full brand
              identity work, delivering professional-grade creative solutions
              that make brands unforgettable.
            </p>
          </div>

          {/* Agency Vision */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Agency Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My vision is to bridge the gap between creative excellence and
              business strategy. Every design, every video, every campaign we
              create serves a purpose — to elevate brands and drive measurable
              results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to established enterprises, our role is to bring
              professional and high-quality creative solutions that help
              businesses stand out in a crowded marketplace.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
          >
            Know More Together
          </a>
        </div>
      </div>
    </section>
  );
}
