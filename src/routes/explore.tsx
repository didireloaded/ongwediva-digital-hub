import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ComingSoon } from "@/components/page-shell";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [{ title: "Explore the Fair — OATF 2026" }, { name: "description", content: "Tour the halls, exhibitors, products and stand layouts of OATF 2026." }] }),
  component: () => (
    <PageShell eyebrow="Explore Fair" title={<>Tour every <span className="text-gradient-ember">corner</span> of OATF.</>} intro="Halls, exhibitors, products and live activations — all in one immersive view.">
      <ComingSoon />
    </PageShell>
  ),
});
