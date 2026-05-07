import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EXHIBITORS, HALLS } from "@/lib/oatf-data";
import { ArrowLeft, MapPin, QrCode, Globe, Mail, Calendar } from "lucide-react";

export const Route = createFileRoute("/exhibitors/$id")({
  loader: ({ params }) => {
    const exhibitor = EXHIBITORS.find((e) => e.id === params.id);
    if (!exhibitor) throw notFound();
    return { exhibitor };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.exhibitor.name ?? "Exhibitor"} — OATF 2026` },
      { name: "description", content: loaderData?.exhibitor.tagline ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground bg-background">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Exhibitor not found</h1>
        <Link to="/exhibitors" className="text-ember mt-4 inline-block">← Back to directory</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="min-h-screen flex items-center justify-center text-foreground bg-background p-8">{error.message}</div>,
  component: ExhibitorPage,
});

function ExhibitorPage() {
  const { exhibitor } = Route.useLoaderData();
  const hall = HALLS.find((h) => h.id === exhibitor.hall);
  const related = EXHIBITORS.filter((e) => e.category === exhibitor.category && e.id !== exhibitor.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-glow" />
        <div className="container-x relative">
          <Link to="/exhibitors" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ember mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All exhibitors
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-5 mb-6">
                <div className="h-24 w-24 rounded-2xl bg-gradient-ember flex items-center justify-center font-display text-4xl font-bold text-primary-foreground shadow-elegant">
                  {exhibitor.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-ember">{exhibitor.category}</div>
                  <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 leading-[1.05]">{exhibitor.name}</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{exhibitor.tagline}</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Find them at</div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-ember" />
                <div>
                  <div className="font-display font-semibold">{hall?.name}</div>
                  <div className="text-sm text-muted-foreground">Stand {exhibitor.stand}</div>
                </div>
              </div>
              <Link to="/maps" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-ember text-primary-foreground font-semibold text-sm shadow-elegant hover:scale-[1.02] transition-transform">
                Show on map
              </Link>
              <button className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass font-semibold text-sm hover:bg-white/10 transition-colors">
                <QrCode className="h-4 w-4" /> Scan to earn points
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                {exhibitor.name} is part of the {exhibitor.category} showcase at OATF 2026. Visit their
                stand at {exhibitor.stand} in {hall?.name} to discover their products, services and
                upcoming launches. Stay tuned for live demonstrations and exclusive offers throughout the fair.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: "Live Demos", value: "Daily 11:00 & 15:00" },
                { icon: QrCode, label: "QR Reward", value: "+50 points on visit" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <s.icon className="h-5 w-5 text-ember" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{s.label}</div>
                  <div className="font-display font-semibold mt-1">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Contact</div>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-sm hover:text-ember transition-colors">
                  <Globe className="h-4 w-4 text-muted-foreground" /> Visit website
                </a>
                <a href="#" className="flex items-center gap-3 text-sm hover:text-ember transition-colors">
                  <Mail className="h-4 w-4 text-muted-foreground" /> Send message
                </a>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold mb-8">Related exhibitors</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((e) => (
                <Link key={e.id} to="/exhibitors/$id" params={{ id: e.id }} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="h-12 w-12 rounded-xl bg-gradient-ember flex items-center justify-center font-bold text-primary-foreground">
                    {e.name.charAt(0)}
                  </div>
                  <h3 className="font-display text-lg font-semibold mt-4">{e.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{e.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
