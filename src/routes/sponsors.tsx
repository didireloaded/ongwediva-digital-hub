import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners | Ongwediva Annual Trade Fair" },
    ],
  }),
  component: SponsorsPage,
});

const SPONSORS = [
  { name: "Ongwediva Town Council", type: "Main Organizer" },
  { name: "MTC", type: "Sponsor" },
  { name: "Nedbank", type: "Sponsor" },
  { name: "Standard Bank", type: "Sponsor" },
  { name: "Lucky Bet", type: "Sponsor" },
  { name: "Bank Windhoek", type: "Sponsor" },
  { name: "Letshego", type: "Sponsor" },
  { name: "Energy 100 FM", type: "Media Partner" },
];

function SponsorsPage() {
  return (
    <PageShell
      eyebrow="Sponsors"
      title={
        <>
          Our Valued <span className="text-gradient-brand">Partners.</span>
        </>
      }
      intro="Our official sponsors and partners play a vital role in the success of OATF, and we proudly recognize and appreciate their invaluable support."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {SPONSORS.map((sponsor, i) => (
          <div key={i} className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square border border-primary/10 hover:border-primary/30 transition-colors">
            <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 shadow-elegant overflow-hidden p-2">
              <div className="font-bold text-lg text-primary">{sponsor.name.charAt(0)}</div>
            </div>
            <h3 className="font-display font-semibold text-lg">{sponsor.name}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">{sponsor.type}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-semibold mb-4">Become a Sponsor</h2>
        <p className="text-muted-foreground mb-8">
          If you would like to get involved by becoming a partner or a sponsor, we have various categories available for OATF 2026.
        </p>
        <div className="text-left max-w-md mx-auto glass p-6 rounded-2xl">
          <h4 className="font-semibold mb-3 border-b border-border pb-2">Sponsorship Enquiries</h4>
          <p className="text-sm text-foreground mb-1"><span className="font-medium text-muted-foreground">Contact:</span> Ms. Lonia Nghuulikwa</p>
          <p className="text-sm text-foreground mb-1"><span className="font-medium text-muted-foreground">Email:</span> lnghuulikwa@ongwediva.com.na</p>
          <p className="text-sm text-foreground"><span className="font-medium text-muted-foreground">Tel:</span> +264 65 233746</p>
        </div>
      </div>
    </PageShell>
  );
}
