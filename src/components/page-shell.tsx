import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 bg-glow opacity-60" />
        <div className="container-x relative">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>
          )}
        </div>
      </section>
      <main className="container-x pb-24">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function ComingSoon({ note }: { note?: string }) {
  return (
    <div className="glass rounded-3xl p-10 md:p-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-brand text-primary-foreground text-xs font-semibold mb-6">
        Phase 2 · Coming Soon
      </div>
      <p className="text-muted-foreground max-w-xl mx-auto">
        {note ??
          "This experience is being built. Data, layouts and interactions are coming online soon."}
      </p>
    </div>
  );
}
