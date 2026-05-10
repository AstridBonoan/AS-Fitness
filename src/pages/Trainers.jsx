import PageHero from "../components/PageHero.jsx";
import TrainerGrid from "../components/TrainerGrid.jsx";

const heroImg =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80";

export default function Trainers() {
  return (
    <>
      <PageHero
        eyebrow="Coaches"
        title="Leaders who"
        highlight="lift."
        subtitle="Certified, competitive, and obsessed with your mechanics — not your mirror selfies."
        image={heroImg}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <TrainerGrid />
      </section>
      <section className="relative border-t border-white/10 py-16 md:py-24">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2cfe61?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
          width={2000}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink to-ink/80" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl">
            Personal training <span className="text-lime">on demand</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Book 30 or 60 minute sessions. Stack skills, fix weak links, or peak for an event — with programming
            that connects to your classes.
          </p>
        </div>
      </section>
    </>
  );
}
