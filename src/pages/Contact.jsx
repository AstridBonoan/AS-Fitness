import { useState } from "react";
import PageHero from "../components/PageHero.jsx";

const heroImg =
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a43?auto=format&fit=crop&w=2000&q=80";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's"
        highlight="go."
        subtitle="Book a tour, ask about memberships, or drop a training goal — we reply fast."
        image={heroImg}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white">Visit AS</h2>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-lime">Address</dt>
                <dd className="mt-2 text-white/70">428 Harbor Line, Downtown District</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-lime">Hours</dt>
                <dd className="mt-2 text-white/70">Daily 5:00am — 11:00pm</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-lime">Phone</dt>
                <dd className="mt-2 text-white/70">(555) 014-ASFX</dd>
              </div>
            </dl>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="aspect-video w-full object-cover"
                loading="lazy"
                width={1200}
                height={675}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-ink-card p-6 sm:p-8">
            {sent ? (
              <p className="text-lg text-white/80">
                Thanks — you&apos;re in. <span className="text-lime">We&apos;ll text you within the hour.</span>
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-lime">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none ring-lime/40 focus:border-lime/40 focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-lime">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none ring-lime/40 focus:border-lime/40 focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="goal" className="text-xs font-bold uppercase tracking-wider text-lime">
                    Goal
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none ring-lime/40 focus:border-lime/40 focus:ring-2"
                    placeholder="Tell us what you're chasing..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-lime py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-lime-glow"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
