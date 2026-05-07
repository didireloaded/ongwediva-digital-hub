import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ComingSoon } from "@/components/page-shell";

export const Route = createFileRoute("/sponsors")({
  head: () => ({ meta: [{ title: "Sponsors & Partners — OATF 2026" }] }),
  component: () => (
    <PageShell eyebrow="Sponsors" title={<>Backed by <span className="text-gradient-ember">Namibia's best.</span></>} intro="Standard Bank, Nedbank, Bank Windhoek, MTC, Letshego and more — partners powering OATF.">
      <ComingSoon note="Full sponsor showcase and partnership tiers coming in Phase 2." />
    </PageShell>
  ),
});
