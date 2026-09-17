import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-surface">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl uppercase">
            Iron<span className="text-primary">vault</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            A private strength club built for focused training, precise coaching, and measurable progress.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
          <ul className="mt-5 space-y-3 text-sm font-semibold uppercase tracking-[0.1em]">
            <li><Link to="/about" className="nav-link">The club</Link></li>
            <li><Link to="/training" className="nav-link">Training</Link></li>
            <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link to="/membership" className="nav-link">Membership</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Visit</p>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin size={16} className="text-primary" /> Strength District, Downtown</li>
            <li className="flex gap-3"><Mail size={16} className="text-primary" /> hello@ironvault.club</li>
            <li className="flex gap-3"><Instagram size={16} className="text-primary" /> @ironvault.club</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ironvault Strength Club</span>
          <span>No ego. No excuses. Just work.</span>
        </div>
      </div>
    </footer>
  );
}
