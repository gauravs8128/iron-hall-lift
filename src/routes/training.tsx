import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import trainingImage from "@/assets/gym-training.jpg";
import coachingImage from "@/assets/gym-coaching.jpg";
import conditioningImage from "@/assets/gym-conditioning.jpg";
import kettlebellImage from "@/assets/gym-kettlebell.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training | Ironvault Strength Club" },
      { name: "description", content: "Open strength, personal coaching, conditioning, and small-group classes — choose the way you want to train at Ironvault." },
      { property: "og:title", content: "Training | Ironvault Strength Club" },
      { property: "og:description", content: "Open strength, coaching, conditioning, and small-group sessions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});

const programs = [
  { image: trainingImage, number: "01", title: "Open Strength", copy: "Train your way with competition-grade racks, platforms, free weights, and full conditioning equipment." },
  { image: coachingImage, number: "02", title: "Personal Coaching", copy: "One-to-one programming, technical guidance, and accountability built around your exact goals." },
  { image: conditioningImage, number: "03", title: "Conditioning", copy: "Sleds, bikes, and interval work programmed to build engine without eating your strength." },
  { image: kettlebellImage, number: "04", title: "Small Group", copy: "Six-person sessions with a coach on every lift. Technical, demanding, and never crowded." },
];

const schedule = [
  ["05:30", "Strength Foundations", "Studio A"],
  ["07:00", "Conditioning Intervals", "Track"],
  ["12:15", "Lunch Lift", "Main Floor"],
  ["17:30", "Olympic Technique", "Platforms"],
  ["19:00", "Small Group Strength", "Studio B"],
];

function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="02 / Ways to train"
        title="Built around you."
        copy="A serious floor for every level. Pick your lane and we keep you moving forward with structure, not guesswork."
        image={conditioningImage}
      />

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((p) => (
            <article key={p.number} className="group relative min-h-[480px] overflow-hidden">
              <img src={p.image} width={1200} height={912} loading="lazy" alt={`${p.title} training at Ironvault`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="card-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <span className="text-xs font-bold text-primary">{p.number}</span>
                <h2 className="mt-2 font-display text-5xl uppercase">{p.title}</h2>
                <p className="mt-4 max-w-md leading-7 text-muted-foreground">{p.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-24 md:py-32">
        <div className="section-shell">
          <p className="eyebrow">Daily schedule</p>
          <h2 className="section-title mt-5">Every day, on the hour.</h2>
          <div className="mt-12 grid gap-px bg-border">
            {schedule.map(([time, name, place]) => (
              <div key={time} className="grid grid-cols-[auto_1fr] items-center gap-6 bg-surface px-5 py-6 transition-colors hover:bg-surface-strong md:grid-cols-[120px_1fr_auto] md:px-8">
                <span className="font-display text-3xl text-primary">{time}</span>
                <span className="text-lg font-semibold uppercase tracking-[0.06em]">{name}</span>
                <span className="col-span-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-1">{place}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band border-b border-foreground/10 py-16">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Ready to put in the work?</h2>
          <Button variant="gym" size="lg" asChild>
            <Link to="/membership">See membership <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
