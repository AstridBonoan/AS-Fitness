import PageHero from "../components/PageHero.jsx";
import ClassSchedule from "../components/ClassSchedule.jsx";

const heroImg =
  "https://images.unsplash.com/photo-1518611012111-4962bdda62cd?auto=format&fit=crop&w=2000&q=80";

export default function Classes() {
  return (
    <>
      <PageHero
        eyebrow="Schedule"
        title="Stack your"
        highlight="week."
        subtitle="Book in the app, show up on time, leave everything on the floor. Updated live — peak slots go fast."
        image={heroImg}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-white md:text-4xl">Weekly grid</h2>
            <p className="mt-2 text-sm text-white/55">Swipe horizontally on mobile for full view.</p>
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-lime">Peak: 6–8pm weekdays</p>
        </div>
        <ClassSchedule />
      </section>
    </>
  );
}
