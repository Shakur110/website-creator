import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactLinks } from "@/lib/projects";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-5">
        <Link to="/" className="text-sm font-bold tracking-[0.2em]" onClick={() => setOpen(false)}>
          ONJOKO TUNDE<span className="text-bronze">.</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Let's Talk <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </nav>
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="container-x flex h-[calc(100dvh-4.5rem)] flex-col justify-between pb-10 pt-6 md:hidden">
          <ul className="space-y-2">
            {nav.map((n, i) => (
              <li key={n.to} className="animate-rise" style={{ animationDelay: `${i * 50}ms` }}>
                <Link to={n.to} onClick={() => setOpen(false)} className="display block text-6xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground"
          >
            Let's Talk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const socials = [
    { label: "Email", href: contactLinks.email ? `mailto:${contactLinks.email}` : "" },
    { label: "LinkedIn", href: contactLinks.linkedin },
    { label: "Fiverr", href: contactLinks.fiverr },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-bold tracking-[0.2em]">
            ONJOKO TUNDE<span className="text-bronze">.</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Independent website designer and digital solutions specialist, creating thoughtful, responsive websites for
            businesses since 2021.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-5 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
                    {s.label}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{s.label} — link to be added</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1 md:justify-self-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="container-x flex flex-col justify-between gap-2 border-t border-border py-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Onjoko Tunde. All rights reserved.</p>
        <p>Website Designer & Digital Solutions Specialist</p>
      </div>
    </footer>
  );
}
