import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ComingSoon } from "@/components/page-shell";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [{ title: "Schedule — OATF 2026" }, { name: "description", content: "Nine days of talks, launches and live activations at OATF 2026." }] }),
  component: () => (
    <PageShell eyebrow="Schedule" title={<>Nine days. <span className="text-gradient-ember">Endless moments.</span></>} intro="From keynotes to cultural showcases, build your personal OATF agenda.">
      <ComingSoon />
    </PageShell>
  ),
});
