import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Clock3, Dumbbell, Instagram, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-hero.jpg";
import trainingImage from "@/assets/gym-training.jpg";
import coachingImage from "@/assets/gym-coaching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ironvault Gym | Built for Strength" },
      { name: "description", content: "Train stronger at Ironvault. Elite equipment, expert coaching, and a focused strength community." },
      { property: "og:title", content: "Ironvault Gym | Built for Strength" },
      { property: "og:description", content: "Elite equipment. Expert coaching. Serious results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="premium-grain overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Ironvault home">
            <span className="grid size-9 place-items-center bg-primary text-primary-foreground"><Dumbbell size={19} /></span>
            <span><span className="block font-display text-xl uppercase leading-none">Iron<span className="text-primary">vault</span></span><span className="mt-1 hidden text-[7px] font-semibold uppercase tracking-[0.28em] text-muted-foreground lg:block">Strength club</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#about">The club</a><a className="nav-link" href="#training">Training</a><a className="nav-link" href="#membership">Membership</a><a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="hidden md:block"><Button variant="gym" size="lg" asChild><a href="#membership">Join the club <ArrowRight /></a></Button></div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu /></Button>
        </div>
        {menuOpen && <nav className="grid border-t border-foreground/10 bg-background px-5 py-5 text-sm font-bold uppercase tracking-[0.14em] md:hidden"><a className="py-3" href="#about" onClick={() => setMenuOpen(false)}>The club</a><a className="py-3" href="#training" onClick={() => setMenuOpen(false)}>Training</a><a className="py-3" href="#membership" onClick={() => setMenuOpen(false)}>Membership</a><a className="py-3" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
      </header>

      <section id="top" className="relative flex min-h-[94svh] items-end pt-24">
        <img src={heroImage} width={1600} height={1200} alt="Athlete performing a barbell squat at Ironvault" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 lg:grid-cols-[1fr_300px] lg:px-8 lg:pb-20">
          <div className="animate-lift-in max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary"><span className="h-px w-10 bg-primary" />Est. 2018 &nbsp;·&nbsp; Built for the work</div>
            <h1 className="font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.77] uppercase">Earn your<br/><span className="text-stroke">strength.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">No shortcuts. No crowded floors. Just elite equipment, focused coaching, and a room built for measurable progress.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button variant="gym" size="lg" asChild><a href="#membership">Start training <ArrowRight /></a></Button><Button variant="glass" size="lg" asChild><a href="#about">Explore the club</a></Button></div>
          </div>
          <div className="hidden self-end border-l border-foreground/20 pl-6 lg:block"><p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Open today</p><p className="mt-2 font-display text-3xl">05:00—23:00</p><a href="#contact" className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">Get directions <ArrowRight size={14}/></a></div>
        </div>
        <a href="#about" aria-label="Scroll to club details" className="absolute bottom-7 right-6 hidden animate-bounce text-muted-foreground md:block"><ArrowDown /></a>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-5" aria-label="Club highlights"><div className="marquee-track flex min-w-max gap-12 font-display text-2xl uppercase text-muted-foreground"><span>Strength</span><b>◆</b><span>Conditioning</span><b>◆</b><span>Coaching</span><b>◆</b><span>Recovery</span><b>◆</b><span>Strength</span><b>◆</b><span>Conditioning</span><b>◆</b><span>Coaching</span><b>◆</b><span>Recovery</span></div></section>

      <section id="about" className="section-shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">01 / The standard</p><h2 className="section-title mt-5">A room that demands more.</h2></div><div className="pt-2"><p className="max-w-2xl text-xl leading-8 text-muted-foreground md:text-2xl">Ironvault is built around one belief: your environment should raise your standard. Every station, coach, and square foot is here to help you train with intent.</p><div className="mt-12 grid grid-cols-3 gap-px bg-border"><Stat value="24/7" label="Access"/><Stat value="18K" label="Sq. ft."/><Stat value="30+" label="Coaches"/></div></div></div>
      </section>

      <section id="training" className="border-y border-foreground/10 bg-surface py-24 md:py-32"><div className="section-shell"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">02 / Ways to train</p><h2 className="section-title mt-5">Built around you.</h2></div><p className="max-w-md text-muted-foreground">A serious floor for every level. Choose your lane and we’ll keep you moving forward.</p></div><div className="grid gap-5 md:grid-cols-2"><Program image={trainingImage} number="01" title="Open Strength" copy="Train your way with competition-grade racks, platforms, free weights, and conditioning equipment."/><Program image={coachingImage} number="02" title="Personal Coaching" copy="One-to-one programming, technical guidance, and accountability built around your exact goals."/></div></div></section>

      <section id="membership" className="section-shell py-24 md:py-32"><div className="max-w-2xl"><p className="eyebrow">03 / Membership</p><h2 className="section-title mt-5">Choose your commitment.</h2></div><div className="mt-14 grid gap-5 lg:grid-cols-3"><Plan name="Day pass" price="20" detail="One full day" features={["Full gym access","Locker facilities","No commitment"]}/><Plan featured name="Monthly" price="89" detail="Billed monthly" features={["Unlimited 24/7 access","All group sessions","Monthly coach check-in"]}/><Plan name="Annual" price="69" detail="Per month, annual" features={["Everything in Monthly","Two guest passes","Priority class booking"]}/></div></section>

      <section className="border-y border-foreground/10 bg-primary py-16 text-primary-foreground"><div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center"><h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Ready to put in the work?</h2><Button variant="glass" size="lg" className="border-primary-foreground/40 bg-background text-foreground" asChild><a href="#contact">Book a tour <ArrowRight/></a></Button></div></section>

      <section id="contact" className="section-shell py-24 md:py-32"><div className="grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">04 / Find us</p><h2 className="section-title mt-5">Walk the floor before you join.</h2><p className="mt-6 max-w-md text-muted-foreground">Come see the equipment, meet the coaches, and feel the room for yourself.</p></div><div className="glass-panel grid gap-8 p-7 md:grid-cols-2 md:p-10"><ContactItem icon={<MapPin/>} label="Location" value="Strength District, Downtown"/><ContactItem icon={<Clock3/>} label="Hours" value="Mon–Sun / 24 hours"/><div className="md:col-span-2"><Button variant="gym" size="lg" className="w-full" asChild><a href="mailto:hello@ironvault.club">Book your club tour <ArrowRight/></a></Button></div></div></div></section>

      <footer className="border-t border-foreground/10 bg-surface"><div className="section-shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between"><div className="font-display text-2xl uppercase">Iron<span className="text-primary">vault</span></div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">No ego. No excuses. Just work.</p><a href="#top" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">Instagram <Instagram size={16}/></a></div></footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="bg-background p-5 md:p-7"><strong className="font-display text-3xl text-primary md:text-5xl">{value}</strong><span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</span></div> }
function Program({ image, number, title, copy }: { image: string; number: string; title: string; copy: string }) { return <article className="group relative min-h-[520px] overflow-hidden"><img src={image} width={1200} height={912} loading="lazy" alt={`${title} training at Ironvault`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="card-shade absolute inset-0"/><div className="absolute inset-x-0 bottom-0 p-7 md:p-9"><span className="text-xs font-bold text-primary">{number}</span><h3 className="mt-2 font-display text-5xl uppercase">{title}</h3><p className="mt-4 max-w-md leading-7 text-muted-foreground">{copy}</p></div></article> }
function Plan({ name, price, detail, features, featured = false }: { name: string; price: string; detail: string; features: string[]; featured?: boolean }) { return <article className={`relative border p-7 md:p-9 ${featured ? "border-primary bg-surface-strong" : "border-foreground/10 bg-surface"}`}>{featured && <span className="absolute right-0 top-0 bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">Most popular</span>}<p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{name}</p><div className="mt-8 flex items-start"><span className="mt-2 text-xl">$</span><strong className="font-display text-7xl">{price}</strong></div><p className="text-sm text-muted-foreground">{detail}</p><ul className="my-9 space-y-4">{features.map(feature => <li key={feature} className="flex items-center gap-3 text-sm"><Check className="text-primary" size={17}/>{feature}</li>)}</ul><Button variant={featured ? "gym" : "glass"} size="lg" className="w-full" asChild><a href="#contact">Choose plan</a></Button></article> }
function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="flex gap-4"><span className="text-primary">{icon}</span><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</p><p className="mt-2 text-sm font-semibold">{value}</p></div></div> }
