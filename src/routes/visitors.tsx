import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { EXHIBITORS } from "@/lib/oatf-data";
import { QrCode, Trophy, Ticket, Heart, Calendar, ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/visitors")({
  head: () => ({
    meta: [
      { title: "Visitor Dashboard — OATF 2026" },
      {
        name: "description",
        content:
          "Your OATF visitor dashboard — ticket, QR points, saved exhibitors and personal schedule.",
      },
    ],
  }),
  component: VisitorsPage,
});

const SAVED = EXHIBITORS.slice(0, 3);
const LEADERBOARD = [
  { name: "Selma N.", points: 1240 },
  { name: "Tangi M.", points: 980 },
  { name: "You", points: 720, you: true },
  { name: "Petrus K.", points: 650 },
  { name: "Maria H.", points: 520 },
];

function VisitorsPage() {
  return (
    <PageShell
      eyebrow="Visitor Dashboard"
      title={
        <>
          Your fair, <span className="text-gradient-brand">your way.</span>
        </>
      }
      intro="Demo dashboard — your real ticket, QR points and saved exhibitors will live here once you sign in."
    >
      {/* Top row: ticket + points */}
      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-dusk p-8 shadow-elegant">
          <div className="absolute inset-0 bg-glow opacity-70" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3 inline-flex items-center gap-2">
                <Ticket className="h-3.5 w-3.5" /> Digital Ticket
              </div>
              <div className="font-display text-3xl font-bold">OATF 2026 · 9-Day Pass</div>
              <div className="text-sm text-muted-foreground mt-2">#OATF-2026-A04F-7720</div>
              <div className="text-sm text-muted-foreground mt-1">Aug 28 – Sep 5, Ongwediva</div>
            </div>
            <div className="bg-white p-4 rounded-2xl flex-shrink-0">
              <div className="h-32 w-32 grid grid-cols-8 grid-rows-8 gap-px bg-white">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={(i * 7 + 3) % 3 === 0 ? "bg-black" : "bg-white"} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="glass rounded-3xl p-7">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Zap className="h-3.5 w-3.5" /> QR Points
          </div>
          <div className="font-display text-6xl font-bold tabular-nums text-gradient-brand mt-4">
            720
          </div>
          <div className="text-sm text-muted-foreground mt-2">Rank #3 of 12,480 visitors</div>
          <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[58%] bg-gradient-brand" />
          </div>
          <div className="text-xs text-muted-foreground mt-2">280 points to next reward</div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: QrCode, title: "Scan exhibitor", to: "/exhibitors" },
          { icon: Calendar, title: "My schedule", to: "/schedule" },
          { icon: Heart, title: "Saved", to: "/visitors" },
        ].map((a) => (
          <Link
            key={a.title}
            to={a.to}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-elegant">
              <a.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1 font-display font-semibold">{a.title}</div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Saved exhibitors */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" /> Saved exhibitors
          </h2>
          <div className="space-y-3">
            {SAVED.map((e) => (
              <Link
                key={e.id}
                to="/exhibitors/$id"
                params={{ id: e.id }}
                className="glass rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.06] transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center font-bold text-primary-foreground">
                  {e.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold">{e.name}</div>
                  <div className="text-xs text-muted-foreground">{e.stand}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" /> Leaderboard
          </h2>
          <div className="glass rounded-2xl p-2">
            {LEADERBOARD.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-center gap-4 p-3 rounded-xl ${p.you ? "bg-gradient-brand/10 border border-primary/30" : ""}`}
              >
                <div
                  className={`h-9 w-9 rounded-lg flex items-center justify-center font-bold ${i < 3 ? "bg-gradient-brand text-primary-foreground" : "glass text-muted-foreground"}`}
                >
                  {i + 1}
                </div>
                <div className={`flex-1 font-display font-semibold ${p.you ? "text-primary" : ""}`}>
                  {p.name}
                </div>
                <div className="font-mono tabular-nums text-sm">
                  {p.points.toLocaleString()} pts
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
