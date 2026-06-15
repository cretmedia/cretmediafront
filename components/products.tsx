"use client";

import { ShoppingCart, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Instagram Social Media Pack",
    description:
      "50+ ready-to-use Instagram post and story templates for businesses and influencers.",
    price: 299,
    originalPrice: 499,
    image: "/images/product-1.jpg",
    badge: "Best Seller",
  },
  {
    title: "Brand Identity Starter Kit",
    description:
      "Complete branding package with logo templates, business cards, letterheads and style guide.",
    price: 599,
    originalPrice: 999,
    image: "/images/product-2.jpg",
    badge: "Popular",
  },
  {
    title: "YouTube Thumbnail Pack",
    description:
      "40+ professional YouTube thumbnail templates optimized for clicks and engagement.",
    price: 199,
    originalPrice: 349,
    image: "/images/product-3.jpg",
    badge: "",
  },
  {
    title: "Social Media Calendar",
    description:
      "365-day content calendar with daily post ideas, hashtag sets, and caption templates.",
    price: 149,
    originalPrice: 299,
    image: "/images/product-4.jpg",
    badge: "New",
  },
  {
    title: "Story Templates Collection",
    description:
      "70+ Instagram & Facebook story templates for promotions, launches and engagement.",
    price: 199,
    originalPrice: 399,
    image: "/images/product-5.jpg",
    badge: "",
  },
  {
    title: "Business Card Templates",
    description:
      "25+ premium business card designs for professionals across multiple industries.",
    price: 99,
    originalPrice: 199,
    image: "/images/product-6.jpg",
    badge: "",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Digital <span className="text-primary">Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready-to-use templates and resources to accelerate your creative projects
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-2xl border border-border bg-background overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-1"
            >
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
              <div className="p-6">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-xl font-bold text-primary">
                      {"$"}{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {"$"}{product.originalPrice}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                  >
                    <ShoppingCart size={14} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Design CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-background p-8 lg:p-12 text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3 lg:text-3xl">
            Need Something Custom?
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-6">
            Can{"'"}t find what you{"'"}re looking for? We create custom templates and designs
            tailored to your brand.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
          >
            Request Custom Design
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
