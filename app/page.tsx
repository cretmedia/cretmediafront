import { Hero } from "@/components/hero";
import { HomeAboutPreview } from "@/components/home/about-preview";
import { HomeServicesPreview } from "@/components/home/services-preview";
import { HomePortfolioPreview } from "@/components/home/portfolio-preview";
import { HomeCTA } from "@/components/home/cta-section";
import { DotPattern } from "@/components/ui/dot-pattern";
import { getAllServices } from "@/lib/data";
export default async function Page() {
    const projects = await getAllServices();
  return (
    <DotPattern
      dotSize={2}
      gap={28}
      proximity={150}
      glowIntensity={1.2}
      waveSpeed={0.3}
    >
      <main className="relative z-10">
        <Hero />
        <HomeAboutPreview />
        <HomeServicesPreview />
        <HomePortfolioPreview projects={projects} />
        <HomeCTA />
      </main>
    </DotPattern>
  );
}
