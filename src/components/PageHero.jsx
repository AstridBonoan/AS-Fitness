export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  imageAlt = "",
}) {
  return (
    <section className="relative isolate min-h-[52vh] overflow-hidden md:min-h-[60vh]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20 md:via-ink/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 md:min-h-[60vh] md:pb-20 md:pt-32">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl">
          {title}{" "}
          {highlight && <span className="text-lime text-glow">{highlight}</span>}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
