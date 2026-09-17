import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import recoveryImage from "@/assets/gym-recovery.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit | Ironvault Strength Club" },
      { name: "description", content: "Visit Ironvault in the Strength District. Open 24 hours, tours daily — meet the coaches and walk the floor before you join." },
      { property: "og:title", content: "Contact & Visit | Ironvault Strength Club" },
      { property: "og:description", content: "Open 24 hours. Tours daily. Walk the floor before you join." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: <MapPin />, label: "Location", value: "Strength District, Downtown" },
  { icon: <Clock3 />, label: "Hours", value: "Mon–Sun / 24 hours" },
  { icon: <Phone />, label: "Phone", value: "+1 (555) 018-4420" },
  { icon: <Mail />, label: "Email", value: "hello@ironvault.club" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="05 / Find us"
        title="Walk the floor before you join."
        copy="Come see the equipment, meet the coaches, and feel the room. Tours run daily and take about twenty minutes."
        image={recoveryImage}
      />

      <section className="section-shell py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-px self-start bg-border">
            {details.map((d) => (
              <div key={d.label} className="flex gap-5 bg-surface p-6 md:p-8">
                <span className="text-primary">{d.icon}</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{d.label}</p>
                  <p className="mt-2 text-base font-semibold">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-7 md:p-10">
            <h2 className="font-display text-4xl uppercase">Book a tour</h2>
            <p className="mt-3 text-sm text-muted-foreground">Send us a note and we will confirm a time within the day.</p>
            <form className="mt-8 grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <Field label="Name" id="name" type="text" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@email.com" />
              <div className="grid gap-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                <textarea id="message" rows={4} placeholder="What are you training for?" className="border border-foreground/15 bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <Button variant="gym" size="lg" className="w-full" asChild>
                <a href="mailto:hello@ironvault.club">Send request <ArrowRight /></a>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type, placeholder }: { label: string; id: string; type: string; placeholder: string }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="border border-foreground/15 bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
    </div>
  );
}
