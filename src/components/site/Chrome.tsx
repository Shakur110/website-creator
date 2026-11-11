import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactLinks } from "@/lib/projects";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
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
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-brand"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="group btn btn-primary !py-2.5">
            Let's talk{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
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
        <nav
          aria-label="Mobile"
          className="container-x flex h-[calc(100dvh-4.5rem)] flex-col justify-between pb-10 pt-6 md:hidden"
        >
          <ul className="space-y-2">
            {nav.map((n, i) => (
              <li key={n.to} className="animate-rise" style={{ animationDelay: `${i * 50}ms` }}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="display block text-5xl data-[status=active]:text-brand"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary">
            Let's talk <ArrowUpRight className="h-4 w-4" />
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
    { label: "WhatsApp", href: contactLinks.whatsapp },
  ].filter((s) => s.href);
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Websites, CRM automation and AI tools for businesses in the US, UK, Canada and
            Australia. 100+ websites delivered since 2021.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline inline-block py-2.5">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">{socials.length ? "Elsewhere" : "Get in touch"}</p>
          <ul className="mt-3 text-sm">
            {socials.length ? (
              socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-block py-2.5"
                  >
                    {s.label}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <Link to="/contact" className="link-underline inline-block py-2.5">
                  Start a project
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="md:col-span-1 md:justify-self-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="container-x flex flex-col justify-between gap-2 border-t border-border py-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Onjoko Tunde. All rights reserved.</p>
        <p>Web Design · CRM Automation · AI Tools</p>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white"
      >
        OT
      </span>
      <span className="text-[15px] font-bold tracking-tight">Onjoko Tunde</span>
    </span>
  );
}

/** Phone-only "Let's talk" bar that slides up once the visitor starts scrolling. */
export function MobileCta() {
  const [show, setShow] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (pathname.startsWith("/contact")) return null;
  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-white/95 py-2 pl-5 pr-2 shadow-xl shadow-navy/10 backdrop-blur">
        <span className="text-sm font-semibold">Have a project in mind?</span>
        <Link to="/contact" className="btn btn-primary !px-5 !py-2.5">
          Let's talk
        </Link>
      </div>
    </div>
  );
}
