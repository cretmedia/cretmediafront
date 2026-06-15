"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { FadeUp, motion } from "@/components/motion";
import RotatingText from "@/components/ui/RotatingText";

const tags = [
  "Social Media Designing",
  "Video Editing",
  "Reels & Shorts Ads",
  "Print Design",
  "Branding",
  "Packaging",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Subtle glow - adjusted opacity for better visibility on dark background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                We,{" "}
                <RotatingText />{" "}
                <span className="text-primary"></span>Creatively & Clearly
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
                  >
                    View Our Work
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary/90"
                  >
                    <Play size={14} className="fill-current" />
                    Watch Portfolio
                  </Link>
                </motion.div>
              </div>
            </FadeUp>

            {/* Tags */}
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-2 pt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card/70 backdrop-blur-sm px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right image */}
          <FadeUp delay={0.2} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-sm">
              <img
                src="/images/hero-portrait.jpg"
                alt="Creative designer portrait"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 from-background via-background/10 to-transparent" />
              {/* Floating stat cards */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                {[
                  { value: "200+", label: "Happy Clients" },
                  { value: "500+", label: "Projects Done" },
                  { value: "99%", label: "Satisfaction" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 rounded-xl border border-border bg-card/90 p-3 text-center backdrop-blur-md"
                  >
                    <p className="font-heading text-xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
