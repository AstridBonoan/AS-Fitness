import PageHero from "../components/PageHero.jsx";
import PricingCards from "../components/PricingCards.jsx";

const heroImg =
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80";

export default function Memberships() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Choose your"
        highlight="intensity."
        subtitle="Flexible plans for every schedule. Upgrade anytime — your progress never resets."
        image={heroImg}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <PricingCards />
        <p className="mt-10 text-center text-sm text-white/45">
          Corporate teams & student pricing available — ask at the front desk.
        </p>
      </section>
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          {[
            { t: "No lock-in games", d: "Cancel with 14 days notice on month-to-month." },
            { t: "Freeze friendly", d: "Traveling? Pause up to 6 weeks per year." },
            { t: "Guest ready", d: "Bring a friend on select plans — motivation multiplies." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-ink-card p-6">
              <h3 className="font-display text-2xl tracking-wide text-lime">{x.t}</h3>
              <p className="mt-2 text-sm text-white/55">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
