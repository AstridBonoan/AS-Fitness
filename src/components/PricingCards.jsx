import { Link } from "react-router-dom";

const plans = [
  {
    name: "Ignite",
    price: 49,
    blurb: "Perfect for getting consistent again.",
    perks: ["Open gym access", "1 guest pass / mo", "App check-ins"],
    featured: false,
  },
  {
    name: "Pulse",
    price: 89,
    blurb: "Our most popular — train harder, recover faster.",
    perks: ["Everything in Ignite", "Unlimited HIIT & cycle", "Sauna + cold plunge"],
    featured: true,
  },
  {
    name: "Prime",
    price: 149,
    blurb: "Elite coaching + priority booking.",
    perks: ["Everything in Pulse", "2 PT sessions / mo", "Nutrition consult"],
    featured: false,
  },
];

export default function PricingCards({ className = "" }) {
  return (
    <div className={className}>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-8 transition hover:-translate-y-0.5 hover:border-lime/40 ${
              p.featured
                ? "border-lime/50 bg-gradient-to-b from-lime/10 to-ink-card shadow-[0_0_60px_-12px_rgba(196,245,66,0.35)]"
                : "border-white/10 bg-ink-card"
            }`}
          >
            {p.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                Best value
              </span>
            )}
            <h3 className="font-display text-3xl tracking-wide text-white">{p.name}</h3>
            <p className="mt-2 text-sm text-white/55">{p.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl text-lime">${p.price}</span>
              <span className="text-white/45">/mo</span>
            </p>
            <ul className="mt-8 flex-1 space-y-3 text-sm text-white/75">
              {p.perks.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-0.5 text-lime">✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-10 inline-flex w-full items-center justify-center rounded-full py-3 text-center text-sm font-bold uppercase tracking-wider transition ${
                p.featured
                  ? "bg-lime text-ink hover:bg-lime-glow"
                  : "border border-lime/40 text-lime hover:bg-lime/10"
              }`}
            >
              Start {p.name}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
