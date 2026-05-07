import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { HALLS, EXHIBITORS } from "@/lib/oatf-data";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/maps")({
  head: () => ({
    meta: [
      { title: "Hall Maps — OATF 2026" },
      { name: "description", content: "Interactive hall maps for OATF 2026. Find stands and exhibitors." },
    ],
  }),
  component: MapsPage,
});

// SVG hall layout positions
const HALL_LAYOUT = [
  { id: "A", x: 60, y: 60, w: 220, h: 140 },
  { id: "B", x: 300, y: 60, w: 180, h: 140 },
  { id: "C", x: 500, y: 60, w: 220, h: 140 },
  { id: "D", x: 60, y: 220, w: 280, h: 140 },
  { id: "E", x: 360, y: 220, w: 180, h: 140 },
  { id: "F", x: 560, y: 220, w: 160, h: 140 },
];

function MapsPage() {
  const [active, setActive] = useState<string | null>("A");
  const activeHall = HALLS.find((h) => h.id === active);
  const standsInHall = EXHIBITORS.filter((e) => e.hall === active);

  return (
    <PageShell
      eyebrow="Maps"
      title={<>Every stand, <span className="text-gradient-ember">one tap away.</span></>}
      intro="Tap a hall to explore exhibitors and stands. Built for mobile, designed for discovery."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 glass rounded-3xl p-4 md:p-6">
          <svg viewBox="0 0 780 420" className="w-full h-auto" role="img" aria-label="OATF hall map">
            <defs>
              <linearGradient id="emberGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.19 48)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="oklch(0.86 0.16 85)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* paths between halls */}
            <path d="M 280 130 L 300 130 M 480 130 L 500 130 M 170 200 L 170 220 M 410 200 L 410 220 M 610 200 L 610 220" stroke="oklch(1 0 0 / 0.15)" strokeWidth="2" strokeDasharray="4 4" />

            {HALL_LAYOUT.map((h) => {
              const isActive = active === h.id;
              const hall = HALLS.find((x) => x.id === h.id);
              return (
                <g key={h.id} onClick={() => setActive(h.id)} className="cursor-pointer" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setActive(h.id); }}>
                  <rect
                    x={h.x}
                    y={h.y}
                    width={h.w}
                    height={h.h}
                    rx="14"
                    fill={isActive ? "url(#emberGrad)" : "oklch(1 0 0 / 0.04)"}
                    stroke={isActive ? "oklch(0.72 0.19 48)" : "oklch(1 0 0 / 0.15)"}
                    strokeWidth={isActive ? 2 : 1}
                    className="transition-all"
                  />
                  <text
                    x={h.x + h.w / 2}
                    y={h.y + h.h / 2 - 8}
                    textAnchor="middle"
                    className="font-display"
                    fontSize="28"
                    fontWeight="700"
                    fill={isActive ? "oklch(0.15 0.02 250)" : "oklch(0.97 0.01 90)"}
                  >
                    {h.id}
                  </text>
                  <text
                    x={h.x + h.w / 2}
                    y={h.y + h.h / 2 + 18}
                    textAnchor="middle"
                    fontSize="11"
                    fill={isActive ? "oklch(0.15 0.02 250 / 0.8)" : "oklch(0.72 0.02 250)"}
                  >
                    {hall?.name}
                  </text>
                  <text
                    x={h.x + h.w / 2}
                    y={h.y + h.h / 2 + 34}
                    textAnchor="middle"
                    fontSize="10"
                    fill={isActive ? "oklch(0.15 0.02 250 / 0.7)" : "oklch(0.72 0.02 250 / 0.7)"}
                  >
                    {hall?.count}+ exhibitors
                  </text>
                </g>
              );
            })}

            {/* entrance marker */}
            <circle cx="390" cy="395" r="6" fill="oklch(0.62 0.13 165)" />
            <text x="390" y="412" textAnchor="middle" fontSize="10" fill="oklch(0.72 0.02 250)">Main Entrance</text>
          </svg>
        </div>

        {/* Side panel */}
        <div className="glass rounded-3xl p-6 h-fit lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-2">Hall {active}</div>
          <h2 className="font-display text-3xl font-bold">{activeHall?.name}</h2>
          <p className="text-sm text-muted-foreground mt-2">{activeHall?.count}+ exhibitors</p>

          <div className="mt-6 space-y-2 max-h-[400px] overflow-y-auto pr-1">
            {standsInHall.map((e) => (
              <Link
                key={e.id}
                to="/exhibitors/$id"
                params={{ id: e.id }}
                className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-gradient-ember flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0">
                    {e.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm truncate">{e.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {e.stand}
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-ember group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
            {standsInHall.length === 0 && (
              <div className="text-sm text-muted-foreground text-center py-8">
                Exhibitor list coming soon for this hall.
              </div>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
