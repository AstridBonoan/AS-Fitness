const items = [
  {
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    caption: "12 weeks · Strength + conditioning",
  },
  {
    before:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a43?auto=format&fit=crop&w=900&q=80",
    caption: "16 weeks · Fat loss focus",
  },
  {
    before:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1518611012111-4962bdda62cd?auto=format&fit=crop&w=900&q=80",
    caption: "20 weeks · Hybrid athlete",
  },
];

export default function TransformationGallery({ className = "" }) {
  return (
    <section className={className} aria-labelledby="transform-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="transform-heading" className="font-display text-4xl tracking-wide text-white md:text-5xl">
          Transformations
        </h2>
        <p className="mt-3 max-w-xl text-white/60">Consistency beats intensity — but we bring both.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <figure key={it.caption} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={it.before}
                    alt="Before"
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={450}
                    height={600}
                  />
                  <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-lime/30">
                  <img
                    src={it.after}
                    alt="After"
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={450}
                    height={600}
                  />
                  <span className="absolute left-2 top-2 rounded bg-lime px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                    After
                  </span>
                </div>
              </div>
              <figcaption className="text-sm text-white/55">{it.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
