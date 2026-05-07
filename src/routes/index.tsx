import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Sparkles, QrCode, Trophy, Users, Building2, Globe2, Play } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Countdown } from "@/components/countdown";
import { StatCounter } from "@/components/stat-counter";
import heroImg from "@/assets/hero-oatf.jpg";
import exploreImg from "@/assets/explore-hall.jpg";
import townImg from "@/assets/ongwediva-town.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OATF 2026 — Namibia's Largest Business & Culture Experience" },
      { name: "description", content: "Join 200,000+ visitors at the Ongwediva Annual Trade Fair 2026. Explore exhibitors, hall maps, schedule, travel and stay in northern Namibia." },
      { property: "og:title", content: "OATF 2026 — Namibia's Largest Trade & Innovation Fair" },
      { property: "og:description", content: "Aug 28 – Sep 5, 2026. Discover exhibitors, products and experiences." },
    ],
  }),
  component: HomePage,
});

const HALLS = [
  { name: "Innovation Hall", count: "120+ exhibitors", tone: "from-ember/30 to-transparent" },
  { name: "Agribusiness", count: "85+ exhibitors", tone: "from-savanna/30 to-transparent" },
  { name: "Finance & Tech", count: "60+ exhibitors", tone: "from-sun/30 to-transparent" },
  { name: "Culture & Craft", count: "140+ exhibitors", tone: "from-ember/30 to-transparent" },
];

const STEPS = [
  { icon: Users, title: "Register", text: "Create your free OATF profile in 60 seconds." },
  { icon: MapPin, title: "Explore", text: "Navigate halls, exhibitors and stands on the live map." },
  { icon: QrCode, title: "Scan", text: "Scan exhibitor QR codes to collect engagement points." },
  { icon: Trophy, title: "Win", text: "Climb the leaderboard and unlock exclusive rewards." },
];

const SPONSORS = ["Standard Bank", "Nedbank", "Bank Windhoek", "MTC", "Letshego", "Lucky Bet", "Energy 100 FM", "Ongwediva Town Council"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-glow" />
        </div>

        <div className="container-x relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-ember" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Edition XXVI · Ongwediva, Namibia
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Where Namibia
              <br />
              <span className="text-gradient-ember">does business.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Nine days. Hundreds of exhibitors. Two hundred thousand visitors. The Ongwediva
              Annual Trade Fair is the heartbeat of trade, innovation and culture in northern Africa.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/register" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-ember text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform">
                Register for free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/explore" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-colors">
                <Play className="h-4 w-4" />
                Explore the fair
              </Link>
            </div>

            <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                <Calendar className="h-3.5 w-3.5" />
                Opens 28 August 2026
              </div>
              <Countdown />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float-slow">
          <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
          <div className="h-10 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatCounter value={200000} suffix="+" label="Visitors" />
          <StatCounter value={550} suffix="+" label="Exhibitors" />
          <StatCounter value={26} label="Years Running" />
          <StatCounter value={18} label="Countries" />
        </div>
      </section>

      {/* EXPLORE FAIR */}
      <section className="relative py-24 md:py-32 bg-ink">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Explore the Fair</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl leading-[1.05]">
                Six halls. One unforgettable journey.
              </h2>
            </div>
            <Link to="/maps" className="group inline-flex items-center gap-2 text-sm font-semibold">
              Open interactive map
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden group shadow-elegant min-h-[420px]">
              <img src={exploreImg} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={960} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="relative p-10 h-full flex flex-col justify-end">
                <Building2 className="h-7 w-7 text-ember mb-4" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mt-2">Innovation Hall</h3>
                <p className="text-muted-foreground mt-3 max-w-md">
                  Tech startups, fintech, telecoms and the future of Namibian enterprise — all under one roof.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-6">
              {HALLS.map((h) => (
                <Link
                  to="/maps"
                  key={h.name}
                  className={`group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-0.5`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${h.tone} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div className="font-display text-xl font-semibold">{h.name}</div>
                      <div className="text-sm text-muted-foreground mt-1">{h.count}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-ember group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">How OATF Works</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Engage. Earn. <span className="text-gradient-ember">Win.</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Turn your fair experience into rewards through our QR-powered engagement system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.title} className="group relative glass rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="absolute top-5 right-5 text-xs font-mono text-muted-foreground/40">0{i + 1}</div>
              <div className="h-12 w-12 rounded-xl bg-gradient-ember flex items-center justify-center shadow-elegant">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mt-6">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE ONGWEDIVA */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={townImg} alt="Ongwediva town aerial view" className="w-full h-[520px] object-cover" loading="lazy" width={1280} height={960} />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full text-xs">
                <Globe2 className="inline h-3 w-3 mr-1.5 text-ember" />
                Ongwediva · Oshana Region
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Experience Ongwediva</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                More than a fair.
                <br />
                <span className="text-gradient-ember">A destination.</span>
              </h2>
              <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
                Plan your stay, discover restaurants and explore the cultural heart of northern Namibia.
                Lodging, transport and local experiences — curated for OATF visitors.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Where to Stay", to: "/travel" },
                  { label: "Eat & Drink", to: "/travel" },
                  { label: "See & Do", to: "/travel" },
                ].map((c) => (
                  <Link
                    key={c.label}
                    to={c.to}
                    className="text-center px-3 py-4 rounded-xl glass text-sm hover:bg-white/10 transition-colors"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
              <Link to="/travel" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group">
                Plan your visit
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="container-x py-24 md:py-32 border-t border-border">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Powered By</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Our partners & sponsors</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SPONSORS.map((s) => (
            <div
              key={s}
              className="glass rounded-xl px-6 py-8 flex items-center justify-center text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dusk p-10 md:p-16 shadow-elegant">
          <div className="absolute inset-0 bg-glow" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
                Be part of OATF <span className="text-gradient-ember">2026.</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-lg max-w-md">
                Free registration. Instant access. Personal QR. See you in Ongwediva.
              </p>
            </div>
            <div className="flex flex-wrap md:justify-end gap-3">
              <Link to="/register" className="px-7 py-4 rounded-full bg-gradient-ember text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform inline-flex items-center gap-2">
                Get your ticket <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/exhibitors" className="px-7 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-colors">
                Become an exhibitor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
