const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const rows = [
  { time: "06:00", cells: ["HIIT", "Strength", "Cycle", "HIIT", "Athletic", "Bootcamp", "Open"] },
  { time: "08:00", cells: ["Yoga", "Open", "Yoga", "Open", "Yoga", "Open", "Open"] },
  { time: "12:00", cells: ["Express", "Express", "Express", "Express", "Express", "—", "—"] },
  { time: "17:30", cells: ["Cycle", "Box", "Cycle", "Box", "Cycle", "Team WOD", "—"] },
  { time: "19:00", cells: ["Metcon", "Lower", "Metcon", "Upper", "Metcon", "Mobility", "—"] },
];

export default function ClassSchedule({ className = "" }) {
  return (
    <div className={`overflow-x-auto rounded-3xl border border-white/10 bg-ink-card ${className}`}>
      <table className="min-w-[640px] w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="sticky left-0 z-10 bg-ink-card px-4 py-4 font-sans text-xs font-bold uppercase tracking-wider text-white/45">
              Time
            </th>
            {days.map((d) => (
              <th
                key={d}
                className="px-3 py-4 text-center font-display text-xl tracking-wide text-lime md:text-2xl"
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.time} className="border-b border-white/5 last:border-0">
              <th className="sticky left-0 z-10 bg-ink-card px-4 py-4 font-mono text-xs text-white/55">
                {row.time}
              </th>
              {row.cells.map((c, i) => (
                <td key={`${row.time}-${i}`} className="px-2 py-3 text-center">
                  <span
                    className={`inline-flex min-h-[2.5rem] w-full items-center justify-center rounded-xl border px-2 py-2 text-xs font-semibold uppercase tracking-wide ${
                      c === "—"
                        ? "border-transparent text-white/25"
                        : "border-white/10 bg-ink-muted text-white/80 hover:border-lime/30"
                    }`}
                  >
                    {c}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
