import { Link } from "@tanstack/react-router";
import { ArrowUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BookCallButton, EmailButton } from "@/components/site/contact-actions";
import { ThemeToggle } from "@/components/site/theme";
import { contactLinks } from "@/lib/projects";

/** Three pages (Home, Work, Blog); the rest are sections of the homepage. */
const nav: { label: string; to: "/" | "/work" | "/blog"; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/", hash: "process" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Blog", to: "/blog" },
];

const skills = [
  "Website design",
  "WordPress & Elementor",
  "Shopify stores",
  "Wix",
  "Landing pages",
  "CRM pipelines",
  "Lead follow-up automation",
  "Email & SMS flows",
  "Booking & reminders",
  "AI chat assistants",
  "AI workflow automation",
  "Speed & SEO basics",
];

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
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...(n.hash ? { hash: n.hash } : {})}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <EmailButton className="btn btn-outline !px-4 !py-2.5" label="Email" />
          <BookCallButton className="btn btn-primary !px-4 !py-2.5" />
        </div>
        <ThemeToggle className="ml-auto lg:hidden" />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="container-x flex h-[calc(100dvh-76px)] flex-col justify-between pb-10 pt-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                {...(n.hash ? { hash: n.hash } : {})}
                onClick={() => setOpen(false)}
                className="display block py-1.5 text-4xl"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-3" onClick={() => setOpen(false)}>
            <BookCallButton className="btn btn-primary w-full" />
            <EmailButton className="btn btn-outline w-full" />
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const links = [
    { label: "Email", href: contactLinks.email ? `mailto:${contactLinks.email}` : "" },
    { label: "WhatsApp", href: contactLinks.whatsapp },
    { label: "LinkedIn", href: contactLinks.linkedin },
    { label: "Fiverr", href: contactLinks.fiverr },
    { label: "+234 813 115 5547", href: contactLinks.phone ? `tel:${contactLinks.phone}` : "" },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-border bg-surface">
      <div
        className="marquee overflow-hidden border-b border-border py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        aria-label="Skills"
      >
        <ul className="marquee-track flex w-max gap-8 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {[...skills, ...skills].map((s, i) => (
            <li
              key={i}
              aria-hidden={i >= skills.length ? true : undefined}
              className="flex shrink-0 items-center gap-8"
            >
              {s}
              <span className="text-brand-ink">✦</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Websites, Shopify stores, CRM automation and AI tools for businesses in the US, UK,
            Canada and Australia. 100+ websites delivered since 2021.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookCallButton className="btn btn-primary !py-2.5" />
            <EmailButton className="btn btn-outline !py-2.5" />
          </div>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 text-sm">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  {...(n.hash ? { hash: n.hash } : {})}
                  className="inline-block py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <ul className="mt-3 text-sm">
            {links.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-block py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-wrap items-center justify-between gap-4 border-t border-border py-6 font-mono text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Onjoko Tunde · Web · Shopify · CRM · AI</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 uppercase tracking-[0.14em] transition-colors hover:text-foreground"
        >
          Scroll to top <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}

/** Phone-only bar with both actions that slides up once the visitor starts scrolling. */
export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 rounded-full border border-border bg-card/95 p-2 shadow-xl shadow-black/40 backdrop-blur">
        <EmailButton className="btn btn-outline !px-3 !py-2.5 text-sm" label="Email" />
        <BookCallButton className="btn btn-primary !px-3 !py-2.5 text-sm" />
      </div>
    </div>
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
