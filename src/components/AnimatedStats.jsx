import { useEffect, useRef, useState } from "react";

function useCountUp(end, durationMs, startWhenVisible) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startWhenVisible) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - (1 - t) ** 3;
            setValue(Math.round(end * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, durationMs, startWhenVisible]);

  return [value, ref];
}

function Stat({ label, end, suffix = "", prefix = "" }) {
  const [n, ref] = useCountUp(end, 1600, true);
  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-card p-6 md:p-8">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-lime/10 blur-2xl" />
      <p className="font-display text-5xl tracking-wide text-lime md:text-6xl text-glow">
        {prefix}
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/55">{label}</p>
    </div>
  );
}

export default function AnimatedStats({ className = "" }) {
  return (
    <section className={className} aria-labelledby="stats-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="stats-heading" className="font-display text-4xl tracking-wide text-white md:text-5xl">
          Proof in <span className="text-lime">motion</span>
        </h2>
        <p className="mt-3 max-w-xl text-white/60">
          Real numbers from a community that trains loud, recovers smart, and shows up daily.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Active members" end={1840} suffix="+" />
          <Stat label="Classes weekly" end={120} suffix="+" />
          <Stat label="Sq ft floor" end={22} suffix="k" />
          <Stat label="Avg. goal hit" end={94} suffix="%" />
        </div>
      </div>
    </section>
  );
}
