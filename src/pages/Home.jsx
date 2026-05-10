import { Link } from "react-router-dom";
import AnimatedStats from "../components/AnimatedStats.jsx";
import TransformationGallery from "../components/TransformationGallery.jsx";

const heroImg =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          fetchPriority="high"
          width={2000}
          height={1333}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-grid-fade bg-[length:48px_48px]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-lime">Train loud. Move clean.</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.92] tracking-wide text-white sm:text-7xl md:text-8xl">
            Built for <span className="text-lime text-glow">speed</span>
            <br />
            Designed for life
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            High-performance floor, elite coaching, and a crew that pushes you forward — without the chaos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-lime-glow"
            >
              Start free trial
            </Link>
            <Link
              to="/classes"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-lime/50 hover:text-lime"
            >
              View schedule
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            <span>HIIT</span>
            <span className="text-lime">Strength</span>
            <span>Mobility</span>
            <span>Cycle</span>
            <span>Recovery</span>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl">
                Sportswear energy. <span className="text-lime">Studio discipline.</span>
              </h2>
              <p className="mt-5 text-white/60">
                AS is a training brand — not a maze of machines. Expect sharp coaching, intentional programming,
                and a space that feels fast, dark, and electric.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/70">
                <li className="flex gap-3">
                  <span className="text-lime">01</span> Performance floor + dedicated lifting bays
                </li>
                <li className="flex gap-3">
                  <span className="text-lime">02</span> Heart-rate zones for cycle + HIIT studios
                </li>
                <li className="flex gap-3">
                  <span className="text-lime">03</span> Recovery lounge: sauna, cold, compression
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1518611012111-4962bdda62cd?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-lime/20" />
            </div>
          </div>
        </div>
      </section>

      <AnimatedStats className="py-20 md:py-24" />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="h-full w-full object-cover opacity-40"
            loading="lazy"
            width={2000}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl rounded-3xl border border-lime/25 bg-ink-card/90 p-8 backdrop-blur-md md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime">The standard</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
              We coach <span className="text-lime">intent</span>, not ego.
            </h2>
            <p className="mt-5 text-white/65">
              Programs rotate weekly. Coaches cue like athletes. You get stronger, leaner, and more resilient —
              with a community that actually wants you here.
            </p>
            <Link
              to="/trainers"
              className="mt-8 inline-flex rounded-full border border-lime/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-lime transition hover:bg-lime/10"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <TransformationGallery className="py-20 md:py-24" />

      <section className="border-t border-white/10 bg-gradient-to-b from-ink-muted to-ink py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl">Ready when you are.</h2>
            <p className="mt-2 text-white/55">Tour the floor. Try a class. Pick your plan.</p>
          </div>
          <Link
            to="/memberships"
            className="inline-flex rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink hover:bg-lime-glow"
          >
            See memberships
          </Link>
        </div>
      </section>
    </>
  );
}
