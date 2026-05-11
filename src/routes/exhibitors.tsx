import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { EXHIBITORS, CATEGORIES, HALLS } from "@/lib/oatf-data";
import { Search, MapPin, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/exhibitors")({
  head: () => ({
    meta: [
      { title: "Exhibitors — OATF 2026" },
      {
        name: "description",
        content: "Browse 450+ exhibitors at OATF 2026 — by category, hall and product.",
      },
    ],
  }),
  component: ExhibitorsPage,
});

function ExhibitorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const filtered = useMemo(() => {
    return EXHIBITORS.filter((e) => {
      const matchCat = cat === "All" || e.category === cat;
      const ql = q.toLowerCase();
      const matchQ =
        !ql || e.name.toLowerCase().includes(ql) || e.tagline.toLowerCase().includes(ql);
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <PageShell
      eyebrow="Exhibitors"
      title={
        <>
          The <span className="text-gradient-brand">marketplace</span> of Namibian innovation.
        </>
      }
      intro="Browse every exhibitor showcasing at OATF 2026 — search by name, filter by category, find them on the map."
    >
      <div className="glass rounded-2xl p-3 md:p-4 flex flex-col md:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search exhibitors, products, brands..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary outline-none"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              cat === c
                ? "bg-gradient-brand text-primary-foreground shadow-elegant"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="text-sm text-muted-foreground mb-6">
        Showing <span className="text-foreground font-semibold">{filtered.length}</span> of{" "}
        {EXHIBITORS.length} exhibitors
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((e) => {
          const hall = HALLS.find((h) => h.id === e.hall);
          return (
            <Link
              key={e.id}
              to="/exhibitors/$id"
              params={{ id: e.id }}
              className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-all hover:shadow-elegant"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center font-display text-xl font-bold text-primary-foreground shadow-elegant">
                  {e.name.charAt(0)}
                </div>
                {e.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary">
                    <Star className="h-3 w-3 fill-current" /> Featured
                  </span>
                )}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {e.category}
              </div>
              <h3 className="font-display text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                {e.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                {e.tagline}
              </p>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {hall?.name} · {e.stand}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="glass rounded-2xl p-12 text-center text-muted-foreground">
          No exhibitors match your search.
        </div>
      )}
    </PageShell>
  );
}
