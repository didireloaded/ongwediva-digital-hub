import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ComingSoon } from "@/components/page-shell";

export const Route = createFileRoute("/visitors")({
  head: () => ({ meta: [{ title: "For Visitors — OATF 2026" }, { name: "description", content: "Plan your OATF 2026 visit. Tickets, schedule, QR rewards and your visitor dashboard." }] }),
  component: () => (
    <PageShell eyebrow="Visitors" title={<>Your fair, <span className="text-gradient-ember">your way.</span></>} intro="Buy your ticket, save exhibitors, build your schedule and earn rewards through QR engagement.">
      <ComingSoon />
    </PageShell>
  ),
});
