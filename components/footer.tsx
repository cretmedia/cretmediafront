import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { getContactDetail } from "@/lib/services/contact";
import { mapHomeServices } from "@/lib/mappers/services";
import { getHomeServices } from "@/lib/services/services";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export async function Footer() {
  const [contactDetail, homeServices] = await Promise.all([
    getContactDetail().catch(() => null),
    getHomeServices().catch(() => []),
  ]);

  const footerServices = mapHomeServices(homeServices).slice(0, 4);

  const socialLinks = [
    {
      label: "Instagram",
      href: contactDetail?.instagram,
      icon: Instagram,
    },
    {
      label: "LinkedIn",
      href: contactDetail?.LinkedIn,
      icon: Linkedin,
    },
    {
      label: "YouTube",
      href: contactDetail?.Youtube,
      icon: Youtube,
    },
  ].filter((item): item is { label: string; href: string; icon: typeof Instagram } =>
    Boolean(item.href),
  );

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-lg font-bold text-foreground tracking-tight"
            >
              Cre<span className="text-primary">ative</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium creative agency helping brands stand out with stunning
              design, video and print solutions.
            </p>
            {/* <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              {contactDetail?.email && <p>{contactDetail.email}</p>}
              {contactDetail?.phone && <p>{contactDetail.phone}</p>}
              {contactDetail?.location && <p>{contactDetail.location}</p>}
            </div> */}
          </div>

          <div>
            <h4 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((service) => (
                <li key={service.documentId}>
                  <Link
                    href={`/services/${service.documentId}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Follow our latest creative work and updates on social platforms.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {"2025 Creative Studio. All rights reserved."}
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
