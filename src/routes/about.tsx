import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import floorImage from "@/assets/gym-floor.jpg";
import recoveryImage from "@/assets/gym-recovery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Club | Ironvault Strength Club" },
      { name: "description", content: "Inside Ironvault: an 18,000 sq ft private strength club built around equipment, coaching, and recovery of the highest standard." },
      { property: "og:title", content: "The Club | Ironvault Strength Club" },
      { property: "og:description", content: "An 18,000 sq ft private strength club built around one standard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Equipment first", c: "Competition-grade racks, calibrated plates, and platforms maintained weekly. Nothing worn, nothing queued." },
  { n: "02", t: "Coaching as standard", c: "Every member gets a technical assessment and a plan. Coaches are on the floor, not behind a desk." },
  { n: "03", t: "Capped membership", c: "We cap numbers so the floor stays workable at every hour of the day." },
  { n: "04", t: "Recovery included", c: "Sauna, cold plunge, and mobility space are part of the membership, not an upsell." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="01 / The standard"
        title={"A room that\ndemands more."}
        copy="Ironvault was built around one belief: your environment should raise your standard. Every station, coach, and square foot serves that."
        image={floorImage}
      />

      <section className="running-block border-y border-foreground/10 bg-surface py-5" aria-label="Club values">
        <div className="marquee-track flex min-w-max gap-12 font-display text-2xl uppercase text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>Discipline</span><b>◆</b><span>Precision</span><b>◆</b><span>Recovery</span><b>◆</b><span>Community</span><b>◆</b>
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="reveal-block">
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-5">Since 2018.</h2>
          </div>
          <div className="reveal-block">
            <p className="max-w-2xl text-xl leading-8 text-muted-foreground md:text-2xl">
              We opened with eight racks and a single rule: the room never gets in the way of the work. Eight years on, that rule still decides every purchase, every hire, and every membership cap we set.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-px bg-border">
              {[["24/7", "Access"], ["18K", "Sq. ft."], ["30+", "Coaches"]].map(([v, l]) => (
                <div key={l} className="bg-background p-5 md:p-7">
                  <strong className="font-display text-3xl text-primary md:text-5xl">{v}</strong>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <img src={recoveryImage} width={1200} height={912} loading="lazy" alt="Recovery suite with sauna and cold plunge at Ironvault" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-4 border border-foreground/10" />
          </div>
          <div className="reveal-block">
            <p className="eyebrow">What we stand on</p>
            <h2 className="section-title mt-5">Four rules.</h2>
            <div className="mt-10 grid gap-px bg-border">
              {values.map((v) => (
                <div key={v.n} className="bg-surface p-6 md:p-8">
                  <span className="text-xs font-bold text-primary">{v.n}</span>
                  <h3 className="mt-2 font-display text-3xl uppercase">{v.t}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{v.c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band border-b border-foreground/10 py-16">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">See the floor for yourself.</h2>
          <Button variant="gym" size="lg" asChild>
            <Link to="/contact">Book a tour <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
