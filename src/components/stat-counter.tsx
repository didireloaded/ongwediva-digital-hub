import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-5xl md:text-7xl font-bold tabular-nums text-gradient-brand">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
