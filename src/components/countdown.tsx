import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-28T09:00:00+02:00").getTime();

function diff() {
  const d = TARGET - Date.now();
  if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);
  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t?.days },
    { label: "Hours", value: t?.hours },
    { label: "Minutes", value: t?.minutes },
    { label: "Seconds", value: t?.seconds },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {items.map((i) => (
        <div key={i.label} className="text-center">
          <div className="glass rounded-xl px-3 md:px-5 py-2.5 md:py-3 min-w-[60px] md:min-w-[80px]">
            <div className="font-display text-2xl md:text-4xl font-bold tabular-nums text-gradient-ember">
              {i.value === undefined ? "--" : String(i.value).padStart(2, "0")}
            </div>
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-2">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}
