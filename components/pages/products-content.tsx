"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/section-header";
import {
  FadeUp,
  HoverLift,
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";
import { products } from "@/lib/data";

export function ProductsContent() {
  return (
    <>
      <PageHeader
        title="Digital"
        highlight="Products"
        subtitle="Ready-to-use templates and resources to accelerate your creative projects."
      />

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Product Grid */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <StaggerItem key={product.title}>
                <HoverLift>
                  <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-xl font-bold text-primary">
                            {"$"}
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {"$"}
                            {product.originalPrice}
                          </span>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                        >
                          <ShoppingCart size={14} />
                          Buy Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3 lg:text-3xl">
                Need Something Custom?
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-6">
                {"Can't find what you're looking for? We create custom templates and designs tailored to your brand."}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Request Custom Design
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
