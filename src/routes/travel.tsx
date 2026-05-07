import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Bed, UtensilsCrossed, Mountain, Car } from "lucide-react";

const TILES = [
  { icon: Bed, title: "Where to Stay", text: "Hotels, lodges, guesthouses and self-catering options near the fairgrounds." },
  { icon: UtensilsCrossed, title: "Eat & Drink", text: "Restaurants, cafés and traditional Owambo cuisine across Ongwediva." },
  { icon: Mountain, title: "See & Do", text: "Cultural landmarks, markets, and unforgettable northern Namibia experiences." },
  { icon: Car, title: "Getting Around", text: "Airport transfers, shuttle routes and getting to the fair grounds." },
];

export const Route = createFileRoute("/travel")({
  head: () => ({ meta: [{ title: "Travel & Stay — OATF 2026" }, { name: "description", content: "Plan your stay in Ongwediva — hotels, food, attractions and transport for OATF 2026." }] }),
  component: () => (
    <PageShell eyebrow="Travel & Stay" title={<>Welcome to <span className="text-gradient-ember">Ongwediva.</span></>} intro="Everything you need to make your trip to northern Namibia unforgettable.">
      <div className="grid md:grid-cols-2 gap-5">
        {TILES.map((t) => (
          <div key={t.title} className="glass rounded-2xl p-7 hover:-translate-y-0.5 transition-transform">
            <div className="h-12 w-12 rounded-xl bg-gradient-ember flex items-center justify-center shadow-elegant">
              <t.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold mt-5">{t.title}</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  ),
});
