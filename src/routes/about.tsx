import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { StatCounter } from "@/components/stat-counter";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About OATF" }, { name: "description", content: "Since 1999, the Ongwediva Annual Trade Fair has powered Namibian business, innovation and culture." }] }),
  component: () => (
    <PageShell eyebrow="About" title={<>26 years of <span className="text-gradient-ember">Namibian momentum.</span></>} intro="Hosted by the Ongwediva Town Council, OATF has grown from a regional showcase into the largest trade and culture event in northern Namibia.">
      <div className="grid md:grid-cols-3 gap-12 mt-8 mb-20">
        <StatCounter value={1999} label="Founded" />
        <StatCounter value={200000} suffix="+" label="Annual Visitors" />
        <StatCounter value={550} suffix="+" label="Exhibitors Yearly" />
      </div>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The Ongwediva Annual Trade Fair (OATF) is the premier business, innovation and cultural
          gathering in northern Namibia. Hosted each year in Ongwediva, the fair brings together
          exhibitors from across the SADC region, government partners, sponsors and over two
          hundred thousand visitors over nine vibrant days.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          OATF 2026 marks our 26th edition — and our most ambitious yet. A fully digital experience,
          a paperless platform, and a celebration of everything that makes Namibian enterprise unique.
        </p>
      </div>
    </PageShell>
  ),
});
