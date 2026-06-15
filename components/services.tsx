"use client";

import {
  Palette,
  Video,
  Printer,
  Package,
  Megaphone,
  Film,
  Zap,
  Clock,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Social Media Design",
    description:
      "Eye-catching posts, stories, and ads designed for Instagram, Facebook, LinkedIn and more.",
    items: ["Instagram Posts", "Story Templates", "Ad Creatives", "Carousel Designs"],
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing for ads, explainer videos, promotional content and social media.",
    items: ["Promotional Videos", "Explainer Videos", "Testimonial Edits", "Motion Graphics"],
  },
  {
    icon: Printer,
    title: "Print Design",
    description:
      "Professional print materials including brochures, business cards, banners and more.",
    items: ["Brochures", "Business Cards", "Banners & Standees", "Flyers & Posters"],
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Stand-out packaging that brings your products to life on shelves and in ecommerce.",
    items: ["Product Packaging", "Label Design", "Box Design", "Eco-friendly Packaging"],
  },
  {
    icon: Megaphone,
    title: "Social Media Campaigns",
    description:
      "Creative concepts that drive engagement, build brand loyalty and reach new audiences.",
    items: ["Campaign Strategy", "Content Calendar", "Ad Campaigns", "Influencer Marketing"],
  },
  {
    icon: Film,
    title: "Reels & Shorts",
    description:
      "Short-form video content optimized for Instagram Reels, YouTube Shorts and TikTok.",
    items: ["Instagram Reels", "YouTube Shorts", "TikTok Content", "Vertical Video Ads"],
  },
];

const whyChoose = [
  {
    icon: Zap,
    title: "Strategic Approach",
    description: "Every design backed by strategy to deliver maximum impact and results.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality to meet your deadlines.",
  },
  {
    icon: Layers,
    title: "Complete Package",
    description: "End-to-end creative solutions from concept to final delivery.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Our <span className="italic text-primary">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive creative solutions to elevate your brand and drive results
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/40 hover:-translate-y-1"
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
              </div>
            );
          })}
        </div>

        {/* Why Choose */}
        <div className="mt-24">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-12 lg:text-3xl">
            Why Choose Our Services?
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
