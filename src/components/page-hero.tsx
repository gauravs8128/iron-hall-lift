export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden pt-28">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0" />
      <div className="section-shell relative pb-14 md:pb-20">
        <div className="animate-lift-in max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-primary" />
            {eyebrow}
          </div>
          <h1 className="section-title">{title}</h1>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground md:text-lg">{copy}</p>
        </div>
      </div>
    </section>
  );
}
