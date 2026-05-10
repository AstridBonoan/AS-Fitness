const trainers = [
  {
    name: "Jordan Vale",
    role: "Head of Strength",
    bio: "Former track athlete. Builds explosive power without sacrificing joints.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f8b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Maya Chen",
    role: "HIIT & Conditioning",
    bio: "Metabolic circuits that feel impossible — until you finish them.",
    image:
      "https://images.unsplash.com/photo-1548691905-f1a593531f68?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Eli Navarro",
    role: "Mobility + Recovery",
    bio: "Keeps athletes resilient: breathwork, loaded mobility, and intent.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Samira Okonkwo",
    role: "Performance Nutrition",
    bio: "Simple systems for fueling hard training and real life.",
    image:
      "https://images.unsplash.com/photo-1518611012111-4962bdda62cd?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TrainerGrid({ className = "" }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {trainers.map((t) => (
        <article
          key={t.name}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-ink-card transition hover:border-lime/30"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={t.image}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width={400}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">{t.role}</p>
              <h3 className="font-display text-3xl tracking-wide text-white">{t.name}</h3>
            </div>
          </div>
          <p className="p-5 text-sm leading-relaxed text-white/60">{t.bio}</p>
        </article>
      ))}
    </div>
  );
}
