import { FadeUp } from "@/components/motion";

export function SectionHeader({
  title,
  highlight,
  subtitle,
  italic = true,
}: {
  title: string;
  highlight: string;
  subtitle: string;
  italic?: boolean;
}) {
  return (
    <FadeUp className="text-center mb-16">
      <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}{" "}
        <span className={`text-primary ${italic ? "italic" : ""}`}>
          {highlight}
        </span>
      </h2>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </FadeUp>
  );
}

export function PageHeader({
  title,
  highlight,
  subtitle,
}: {
  title: string;
  highlight: string;
  subtitle: string;
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative">
        <FadeUp>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
            {title}{" "}
            <span className="text-primary italic">{highlight}</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            {subtitle}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
