import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { HALLS, EXHIBITORS } from "@/lib/oatf-data";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import exploreImg from "@/assets/explore-hall.jpg";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore the Fair — OATF 2026" },
      { name: "description", content: "Tour the halls, exhibitors and live activations of OATF 2026." },
    ],
  }),
  component: ExplorePage,
});

const FEATURED = EXHIBITORS.filter((e) => e.featured);

function ExplorePage() {
  return (
    <PageShell
      eyebrow="Explore Fair"
      title={<>Tour every <span className="text-gradient-ember">corner</span> of OATF.</>}
      intro="Six halls, six worlds. From finance to culture, from agribusiness to innovation — start your journey here."
    >
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-3xl shadow-elegant mb-12 min-h-[360px]">
        <img src={exploreImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1280} height={960} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative p-10 md:p-16 max-w-2xl">
          <Sparkles className="h-7 w-7 text-ember mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            550+ exhibitors. <span className="text-gradient-ember">One unforgettable journey.</span>
          </h2>
          <Link to="/maps" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-ember text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform">
            Open interactive map <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Halls */}
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The Halls</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {HALLS.map((h) => (
          <Link
            key={h.id}
            to="/maps"
            className="group glass rounded-2xl p-7 hover:-translate-y-1 transition-all hover:shadow-elegant"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-ember flex items-center justify-center font-display text-2xl font-bold text-primary-foreground shadow-elegant">
                {h.id}
              </div>
              <Building2 className="h-5 w-5 text-muted-foreground group-hover:text-ember transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-semibold">{h.name}</h3>
            <div className="text-sm text-muted-foreground mt-1">{h.count}+ exhibitors</div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ember">
              View hall <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Featured */}
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Featured exhibitors</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURED.map((e) => (
          <Link
            key={e.id}
            to="/exhibitors/$id"
            params={{ id: e.id }}
            className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-all"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-ember flex items-center justify-center font-display text-xl font-bold text-primary-foreground shadow-elegant">
              {e.name.charAt(0)}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-5">{e.category}</div>
            <h3 className="font-display text-lg font-semibold mt-1 group-hover:text-ember transition-colors">{e.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{e.tagline}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
