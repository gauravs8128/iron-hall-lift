import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import heroImage from "@/assets/gym-hero.jpg";
import trainingImage from "@/assets/gym-training.jpg";
import coachingImage from "@/assets/gym-coaching.jpg";
import floorImage from "@/assets/gym-floor.jpg";
import kettlebellImage from "@/assets/gym-kettlebell.jpg";
import recoveryImage from "@/assets/gym-recovery.jpg";
import conditioningImage from "@/assets/gym-conditioning.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Ironvault Strength Club" },
      { name: "description", content: "Look inside Ironvault: the main floor, platforms, conditioning track, coaching sessions, and the recovery suite." },
      { property: "og:title", content: "Gallery | Ironvault Strength Club" },
      { property: "og:description", content: "Look inside the floor, the platforms, and the recovery suite." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: floorImage, title: "The main floor", tag: "Facility", span: "md:col-span-2 md:row-span-2" },
  { src: heroImage, title: "Squat platforms", tag: "Strength", span: "" },
  { src: trainingImage, title: "Deadlift station", tag: "Strength", span: "" },
  { src: conditioningImage, title: "Conditioning track", tag: "Conditioning", span: "md:col-span-2" },
  { src: coachingImage, title: "Coaching sessions", tag: "Coaching", span: "" },
  { src: kettlebellImage, title: "Kettlebell studio", tag: "Classes", span: "" },
  { src: recoveryImage, title: "Recovery suite", tag: "Recovery", span: "md:col-span-2" },
];

const filters = ["All", "Facility", "Strength", "Conditioning", "Coaching", "Classes", "Recovery"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const visible = items.filter((i) => filter === "All" || i.tag === filter);

  return (
    <>
      <PageHero
        eyebrow="04 / Gallery"
        title="Inside the vault."
        copy="Low light, heavy steel, and a floor that stays workable. This is what a session at Ironvault actually looks like."
        image={kettlebellImage}
      />

      <section className="section-shell py-20 md:py-28">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                filter === f ? "border-primary bg-primary text-primary-foreground" : "border-foreground/15 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {visible.map((item) => (
            <button
              key={item.title}
              onClick={() => setActive(items.indexOf(item))}
              className={`group relative overflow-hidden border border-foreground/10 text-left ${item.span}`}
            >
              <img src={item.src} loading="lazy" alt={`${item.title} at Ironvault`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="card-shade absolute inset-0 opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{item.tag}</span>
                <h2 className="mt-1 font-display text-2xl uppercase">{item.title}</h2>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-background/92 p-5 backdrop-blur-xl animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
          onClick={() => setActive(null)}
        >
          <button className="absolute right-6 top-6 text-muted-foreground transition-colors hover:text-foreground" aria-label="Close image" onClick={() => setActive(null)}>
            <X />
          </button>
          <figure className="max-h-[82svh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[active].src} alt={`${items[active].title} at Ironvault`} className="max-h-[72svh] w-full border border-foreground/10 object-cover" />
            <figcaption className="mt-4 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-primary">{items[active].tag}</span> {items[active].title}
            </figcaption>
          </figure>
        </div>
      )}

      <section className="cta-band border-y border-foreground/10 py-16">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Photos only go so far.</h2>
          <Button variant="gym" size="lg" asChild>
            <Link to="/contact">Book a tour <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
