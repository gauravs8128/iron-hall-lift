import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import floorImage from "@/assets/gym-floor.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership | Ironvault Strength Club" },
      { name: "description", content: "Day pass, monthly, or annual membership at Ironvault — 24/7 access, coaching check-ins, and full recovery facilities." },
      { property: "og:title", content: "Membership | Ironvault Strength Club" },
      { property: "og:description", content: "Choose your commitment: day pass, monthly, or annual." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MembershipPage,
});

const plans = [
  { name: "Day pass", price: "20", detail: "One full day", features: ["Full gym access", "Locker facilities", "No commitment"] },
  { name: "Monthly", price: "89", detail: "Billed monthly", featured: true, features: ["Unlimited 24/7 access", "All group sessions", "Monthly coach check-in", "Recovery suite included"] },
  { name: "Annual", price: "69", detail: "Per month, annual", features: ["Everything in Monthly", "Two guest passes", "Priority class booking"] },
];

const faqs = [
  ["Is there a joining fee?", "No. What you see is what you pay, and monthly members can pause once a year at no cost."],
  ["Can I try before joining?", "Yes. Book a tour and we will walk you through the floor and set up a trial session."],
  ["Do you cap membership?", "We do. Numbers are capped so equipment stays available even at peak hours."],
];

function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="03 / Membership"
        title="Choose your commitment."
        copy="Simple pricing, no joining fee, and no contract traps. Every tier gets the same floor and the same standard."
        image={floorImage}
      />

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative border p-7 transition-transform duration-500 hover:-translate-y-1 md:p-9 ${plan.featured ? "border-primary bg-surface-strong" : "border-foreground/10 bg-surface"}`}>
              {plan.featured && <span className="absolute right-0 top-0 bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">Most popular</span>}
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{plan.name}</p>
              <div className="mt-8 flex items-start"><span className="mt-2 text-xl">$</span><strong className="font-display text-7xl">{plan.price}</strong></div>
              <p className="text-sm text-muted-foreground">{plan.detail}</p>
              <ul className="my-9 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm"><Check className="text-primary" size={17} />{f}</li>
                ))}
              </ul>
              <Button variant={plan.featured ? "gym" : "glass"} size="lg" className="w-full" asChild>
                <Link to="/contact">Choose plan</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="section-title mt-5">Good to know.</h2>
          </div>
          <div className="grid gap-px bg-border">
            {faqs.map(([q, a]) => (
              <div key={q} className="bg-surface p-6 md:p-8">
                <h3 className="font-display text-3xl uppercase">{q}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band border-b border-foreground/10 py-16">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Start this week.</h2>
          <Button variant="gym" size="lg" asChild>
            <Link to="/contact">Book your tour <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
