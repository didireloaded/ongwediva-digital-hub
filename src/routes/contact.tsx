import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Mail, Phone, MapPin } from "lucide-react";

const ITEMS = [
  { icon: Mail, label: "Email", value: "info@oatf.com.na" },
  { icon: Phone, label: "Phone", value: "+264 65 230 173" },
  { icon: MapPin, label: "Address", value: "Ongwediva Trade Fair Centre, Oshana Region, Namibia" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — OATF 2026" }, { name: "description", content: "Reach the OATF organising team." }] }),
  component: () => (
    <PageShell eyebrow="Contact" title={<>Let's <span className="text-gradient-ember">talk.</span></>} intro="Press, partnerships, exhibitors or general questions — our team is ready.">
      <div className="grid md:grid-cols-3 gap-5">
        {ITEMS.map((i) => (
          <div key={i.label} className="glass rounded-2xl p-7">
            <div className="h-11 w-11 rounded-xl bg-gradient-ember flex items-center justify-center shadow-elegant">
              <i.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-5">{i.label}</div>
            <div className="font-display text-lg font-semibold mt-1">{i.value}</div>
          </div>
        ))}
      </div>
    </PageShell>
  ),
});
