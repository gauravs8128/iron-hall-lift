import { Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/about", label: "The club" },
  { to: "/training", label: "Training" },
  { to: "/gallery", label: "Gallery" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-foreground/10 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Ironvault home" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center border border-foreground/20 bg-foreground/5 backdrop-blur">
            <Dumbbell size={18} />
          </span>
          <span>
            <span className="block font-display text-xl uppercase leading-none">
              Iron<span className="text-primary">vault</span>
            </span>
            <span className="mt-1 hidden text-[7px] font-semibold uppercase tracking-[0.28em] text-muted-foreground lg:block">
              Private strength club
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="gym" size="lg" asChild>
            <Link to="/membership">
              Join the club <ArrowRight />
            </Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="grid border-t border-foreground/10 bg-background/95 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] backdrop-blur-xl lg:hidden">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="border-b border-foreground/5 py-4 last:border-0" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
