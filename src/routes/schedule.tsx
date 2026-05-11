import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { SCHEDULE, SCHEDULE_DAYS } from "@/lib/oatf-data";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — OATF 2026" },
      {
        name: "description",
        content: "Nine days of talks, launches and live activations at OATF 2026.",
      },
    ],
  }),
  component: SchedulePage,
});

const TYPE_COLORS: Record<string, string> = {
  Keynote: "bg-primary/20 text-primary border-primary/30",
  Panel: "bg-oatf-blue/20 text-oatf-blue border-oatf-blue/30",
  Launch: "bg-oatf-gold/20 text-oatf-gold border-oatf-gold/30",
  Cultural: "bg-primary/20 text-primary border-primary/30",
  Networking: "bg-oatf-blue/20 text-oatf-blue border-oatf-blue/30",
};

function SchedulePage() {
  const [day, setDay] = useState(SCHEDULE_DAYS[0].id);
  const events = SCHEDULE.filter((e) => e.day === day);

  return (
    <PageShell
      eyebrow="Schedule"
      title={
        <>
          Nine days. <span className="text-gradient-brand">Endless moments.</span>
        </>
      }
      intro="Build your personal OATF agenda — keynotes, launches, cultural showcases and networking events."
    >
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
        {SCHEDULE_DAYS.map((d) => (
          <button
            key={d.id}
            onClick={() => setDay(d.id)}
            className={`flex-shrink-0 px-5 py-3 rounded-2xl text-left transition-all ${
              day === d.id
                ? "bg-gradient-brand text-primary-foreground shadow-elegant"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="text-[10px] uppercase tracking-widest opacity-80">{d.label}</div>
            <div className="font-display font-bold">{d.date}</div>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {events.map((e) => (
          <div
            key={e.id}
            className="glass rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/[0.06] transition-colors"
          >
            <div className="md:w-24 flex-shrink-0">
              <div className="font-display text-2xl md:text-3xl font-bold tabular-nums text-gradient-brand">
                {e.time}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${TYPE_COLORS[e.type]}`}
                >
                  {e.type}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold">{e.title}</h3>
              <div className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {e.venue}
              </div>
            </div>
            <button className="flex-shrink-0 px-4 py-2 rounded-full glass text-sm font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" /> Save
            </button>
          </div>
        ))}
        {events.length === 0 && (
          <div className="glass rounded-2xl p-12 text-center text-muted-foreground">
            Schedule for this day is being finalised.
          </div>
        )}
      </div>
    </PageShell>
  );
}
