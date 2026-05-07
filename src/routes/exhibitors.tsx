import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ComingSoon } from "@/components/page-shell";

export const Route = createFileRoute("/exhibitors")({
  head: () => ({ meta: [{ title: "Exhibitors — OATF 2026" }, { name: "description", content: "Browse 550+ exhibitors at OATF 2026 — by category, hall and product." }] }),
  component: () => (
    <PageShell eyebrow="Exhibitors" title={<>The <span className="text-gradient-ember">marketplace</span> of Namibian innovation.</>} intro="From global brands to local makers, browse every exhibitor showcasing at OATF 2026.">
      <ComingSoon note="Live exhibitor directory with categories, search, products and stand locations is being wired up." />
    </PageShell>
  ),
});
