import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ComingSoon } from "@/components/page-shell";

export const Route = createFileRoute("/maps")({
  head: () => ({ meta: [{ title: "Hall Maps — OATF 2026" }, { name: "description", content: "Interactive SVG hall maps for OATF 2026. Find stands, exhibitors and categories." }] }),
  component: () => (
    <PageShell eyebrow="Maps" title={<>Every stand, <span className="text-gradient-ember">one tap away.</span></>} intro="Navigate halls in real time with our interactive map system.">
      <ComingSoon note="Interactive SVG hall maps with stand highlighting and category filtering arrive in Phase 2." />
    </PageShell>
  ),
});
