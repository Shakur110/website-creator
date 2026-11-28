import { Link } from "@tanstack/react-router";
import { ArrowUp, Check, Globe, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BookCallButton, EmailButton } from "@/components/site/contact-actions";
import { ThemeToggle } from "@/components/site/theme";
import { contactLinks } from "@/lib/projects";
import { LOCALE_META, LOCALES, useLocale, useT, type Dict, type Locale } from "@/i18n";

/** Three pages (Home, Work, Blog); the rest are sections of the homepage. */
type NavKey = keyof Dict["nav"];
const nav: { key: NavKey; page?: "/work" | "/blog"; hash?: string }[] = [
  { key: "home" },
  { key: "about", hash: "about" },
  { key: "services", hash: "services" },
  { key: "work", page: "/work" },
  { key: "process", hash: "process" },
  { key: "faq", hash: "faq" },
  { key: "blog", page: "/blog" },
];

/**
 * Link to the home page in the current language ("/" or "/fr", "/es"…), optionally to a
 * section on it. Work and Blog are English-only pages.
 */
export function HomeLink({
  locale,
  hash,
  className,
  onClick,
  children,
}: {
  locale: Locale;
  hash?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const extra = { ...(hash ? { hash } : {}), ...(onClick ? { onClick } : {}), className };
  return locale === "en" ? (
    <Link to="/" {...extra}>
      {children}
    </Link>
  ) : (
    <Link to="/$lang" params={{ lang: locale }} {...extra}>
      {children}
    </Link>
  );
}

function NavItem({
  item,
  className,
  onClick,
}: {
  item: (typeof nav)[number];
  className: string;
  onClick?: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const label = t.nav[item.key];
  if (item.page)
    return (
      <Link to={item.page} className={className} {...(onClick ? { onClick } : {})}>
        {label}
      </Link>
    );
  return (
    <HomeLink
      locale={locale}
      className={className}
      {...(item.hash ? { hash: item.hash } : {})}
      {...(onClick ? { onClick } : {})}
    >
      {label}
    </HomeLink>
  );
}

/** Globe button with a menu of the five languages; each opens that language's home page. */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const t = useT();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t.header.language}: ${LOCALE_META[locale].native}`}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 items-center gap-1.5 rounded-full border border-border px-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-brand-ink hover:text-foreground"
      >
        <Globe className="h-4 w-4" />
        {locale}
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-xl shadow-black/15"
        >
          {LOCALES.map((l) => (
            <li key={l} role="none">
              <HomeLink
                locale={l}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-brand-soft ${
                  l === locale ? "font-semibold text-brand-ink" : "text-foreground"
                }`}
              >
                <span lang={LOCALE_META[l].hreflang}>{LOCALE_META[l].native}</span>
                {l === locale ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="font-mono text-[11px] uppercase text-muted-foreground">{l}</span>
                )}
              </HomeLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SiteHeader() {
  const t = useT();
  const locale = useLocale();
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
        <HomeLink
          locale={locale}
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </HomeLink>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <NavItem
              key={n.key}
              item={n}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            />
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <EmailButton className="btn btn-outline !px-4 !py-2.5" label={t.header.email} />
          <BookCallButton className="btn btn-primary !px-4 !py-2.5" />
        </div>
        <LanguageSwitcher className="ml-auto lg:hidden" />
        <ThemeToggle className="lg:hidden" />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
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
              <NavItem
                key={n.key}
                item={n}
                onClick={() => setOpen(false)}
                className="display block py-1.5 text-4xl"
              />
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
  const t = useT();
  const skills = t.footer.skills;
  const links = [
    { label: t.header.email, href: contactLinks.email ? `mailto:${contactLinks.email}` : "" },
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
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{t.footer.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookCallButton className="btn btn-primary !py-2.5" />
            <EmailButton className="btn btn-outline !py-2.5" />
          </div>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <p className="eyebrow">{t.footer.navigate}</p>
          <ul className="mt-3 text-sm">
            {nav.map((n) => (
              <li key={n.key}>
                <NavItem
                  item={n}
                  className="inline-block py-2 text-muted-foreground transition-colors hover:text-foreground"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">{t.footer.contact}</p>
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
        <p>
          © {new Date().getFullYear()} Onjoko Tunde · {t.footer.role}
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 uppercase tracking-[0.14em] transition-colors hover:text-foreground"
        >
          {t.footer.scrollTop} <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}

/** Phone-only bar with both actions that slides up once the visitor starts scrolling. */
export function MobileCta() {
  const t = useT();
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
        <EmailButton className="btn btn-outline !px-3 !py-2.5 text-sm" label={t.header.email} />
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
      <span className="whitespace-nowrap text-[15px] font-bold tracking-tight">Onjoko Tunde</span>
    </span>
  );
}
