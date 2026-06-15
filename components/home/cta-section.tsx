"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, motion } from "@/components/motion";

export function HomeCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
        <FadeUp>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to <span className="text-primary italic">Elevate</span> Your
            Brand?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            {"Let's collaborate to create something extraordinary. Whether you need social media designs, video content, print materials, or full brand identity — we're here to help."}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
