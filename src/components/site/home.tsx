import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarDays,
  Clock,
  Code2,
  Globe2,
  LayoutTemplate,
  MapPin,
  MessagesSquare,
  PenTool,
  Plus,
  RefreshCcw,
  Rocket,
  ShoppingBag,
  Target,
  Workflow,
} from "lucide-react";
import { CtaBand, ProjectCard, Reveal, SectionHead } from "@/components/site/parts";
import { PostCard } from "@/components/site/blog";
import { Testimonials } from "@/components/site/testimonials";
import {
  AvailabilityBadge,
  CountUp,
  PipelineConsole,
  ServiceMarquee,
} from "@/components/site/live";
import { NotesWall } from "@/components/site/notes";
import { LeadFlowDemo } from "@/components/site/leadflow";
import { AutoVideo, WordRise } from "@/components/site/effects";
import { BookCallButton, EmailButton } from "@/components/site/contact-actions";
import {
  contactLinks,
  featuredProjects,
  portrait,
  projects,
  services,
  siteStats,
  toolGroups,
} from "@/lib/projects";
import { publishedPosts } from "@/lib/posts";
import { fmt, useLocale, useT } from "@/i18n";

/** The one-page home, rendered at "/" (English) and "/fr", "/es", "/de", "/pt". */
const serviceIcons = [LayoutTemplate, RefreshCcw, ShoppingBag, Target, Workflow, Bot];

const processIcons = [MessagesSquare, PenTool, Code2, Rocket];

export function HomePage() {
  const t = useT();
  const h = t.home;
  const locale = useLocale();
  const hero = (featuredProjects.find((p) => p.slug === "thrive-wm") ?? featuredProjects[0])!;
  const grid = featuredProjects.filter((p) => p.slug !== hero.slug).slice(0, 4);
  const latestPosts = publishedPosts().slice(0, 3);
  const stats: [string, string][] = [
    [siteStats.websites, h.about.stats[0]!],
    [siteStats.since, h.about.stats[1]!],
    [`${projects.length}`, h.about.stats[2]!],
    ["4", h.about.stats[3]!],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x relative pt-24 md:pt-28">
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {h.welcome} <span className="text-brand-ink">onjoko.os</span>
          </p>
          <div className="animate-rise mt-3" style={{ animationDelay: "60ms" }}>
            <PipelineConsole />
          </div>
        </div>
        <div className="container-x relative grid items-center gap-14 pb-12 pt-12 md:pt-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="animate-rise">
              <AvailabilityBadge>
                {h.available}
                <span className="hidden sm:inline"> · {h.availableSub}</span>
              </AvailabilityBadge>
            </div>
            <p
              className="animate-rise mt-7 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink"
              style={{ animationDelay: "40ms" }}
            >
              {h.role} <span className="text-muted-foreground">{h.roleAnd}</span> {h.roleAi}
            </p>
            <h1 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
              <WordRise key={locale} text={h.h1} accent={h.h1Accent} delay={120} />
            </h1>
            <p
              className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              {h.heroCopy}
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <BookCallButton label={h.bookFree} />
              <EmailButton />
            </div>
          </div>
          <div className="animate-rise lg:col-span-6" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-navy frame">
                <AutoVideo
                  className="aspect-[16/10] w-full object-cover"
                  src="/showreel.mp4"
                  poster="/showreel-poster.jpg"
                  autoPlay
                  aria-label={fmt(h.showreelAria, { n: projects.length })}
                />
              </div>
              <Link
                to="/work"
                className="group absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-xl shadow-black/20 backdrop-blur md:left-auto md:right-6 md:w-80"
              >
                <div>
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-ink">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />{" "}
                    {h.showreel}
                  </p>
                  <p className="mt-1 font-bold">{fmt(h.featuredSites, { n: projects.length })}</p>
                  <p className="text-sm text-muted-foreground">
                    {fmt(h.fromBuilt, { n: siteStats.websites })}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-ink transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative pb-10 pt-8">
          <ServiceMarquee items={h.heroServices} />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-border bg-surface/60 py-24 md:py-32"
      >
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          {portrait && (
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border frame">
                  <img
                    src={portrait}
                    alt="Onjoko Tunde"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="absolute -bottom-4 left-5 rounded-full border border-border bg-card px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground shadow-lg">
                  <span className="text-emerald-400">●</span> Onjoko Tunde · {h.about.since}
                </p>
              </div>
            </Reveal>
          )}
          <Reveal
            className={portrait ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-10"}
            delay={80}
          >
            <p className="eyebrow">{h.about.eyebrow}</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              {h.about.title} <em>{h.about.titleEm}</em>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{h.about.p1}</p>
              <p>{h.about.p2}</p>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              <li className="chip">
                <MapPin className="h-3.5 w-3.5" /> {h.about.location}
              </li>
              <li className="chip">
                <Clock className="h-3.5 w-3.5" /> GMT+1
              </li>
              <li className="chip">
                <Globe2 className="h-3.5 w-3.5" /> {h.about.remote}
              </li>
            </ul>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {stats.map(([n, l]) => (
                <div key={l} className="bg-card p-5">
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-brand-ink">
                    {n === siteStats.since ? n : <CountUp value={n} />}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {h.about.platforms}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {(toolGroups[0]?.items ?? []).map((p) => (
                  <li key={p} className="chip bg-card">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro statement */}
      <section className="container-x py-24 md:py-28">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="display text-4xl md:col-span-7 md:text-5xl">
            {h.intro.title} <em>{h.intro.titleEm}</em>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5">
            {h.intro.copy}
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="container-x scroll-mt-24 pb-24 md:pb-32">
        <SectionHead
          eyebrow={h.services.eyebrow}
          title={
            <>
              {h.services.title} <em>{h.services.titleEm}</em>
            </>
          }
          intro={h.services.intro}
        />
        <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
          {services.map((base, i) => {
            const s = { ...base, ...h.services.items[i] };
            const Icon = serviceIcons[i] ?? LayoutTemplate;
            return (
              <Reveal key={s.n} delay={(i % 2) * 60}>
                <details className="spotlight group rounded-2xl border border-border bg-card transition-colors open:border-brand-ink/50 hover:border-brand-ink/40">
                  <summary className="flex cursor-pointer list-none items-start gap-5 p-6 md:p-7 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {s.n}
                      </span>
                      <span className="mt-1 block text-xl font-bold tracking-tight">{s.title}</span>
                      <span className="mt-2 block leading-relaxed text-muted-foreground">
                        {s.short}
                      </span>
                    </span>
                    <Plus className="mt-1 h-5 w-5 shrink-0 text-brand-ink transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <div className="border-t border-border px-6 pb-6 pt-5 md:px-7">
                    <p className="leading-relaxed text-muted-foreground">{s.description}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {s.includes.map((x) => (
                        <li key={x} className="flex gap-2.5 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink" />
                          {x}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={contactLinks.calendly}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:underline"
                    >
                      <CalendarDays className="h-4 w-4" /> {h.services.bookAbout}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Speed to lead demo */}
      <section className="border-y border-border bg-surface/60 py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow={h.lead.eyebrow}
            title={
              <>
                {h.lead.title} <em>{h.lead.titleEm}</em>
              </>
            }
            intro={h.lead.intro}
          />
          <div className="mt-14">
            <LeadFlowDemo />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow={h.work.eyebrow}
            title={
              <>
                {h.work.title} <em>{h.work.titleEm}</em>
              </>
            }
            intro={fmt(h.work.intro, { n: projects.length, total: siteStats.websites })}
          />
          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {grid.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link to="/work" className="group btn btn-outline">
              {h.work.seeAll}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Process */}
      <section id="process" className="container-x scroll-mt-24 py-24 md:py-32">
        <SectionHead
          eyebrow={h.process.eyebrow}
          title={
            <>
              {h.process.title} <em>{h.process.titleEm}</em>
            </>
          }
          intro={h.process.intro}
        />
        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[2.85rem] hidden h-px bg-gradient-to-r from-transparent via-brand-ink/40 to-transparent lg:block"
          />
          {h.process.steps.map((step, i) => {
            const StepIcon = processIcons[i] ?? Rocket;
            return (
              <Reveal key={step.title} delay={i * 60} className="h-full">
                <li className="spotlight relative h-full rounded-2xl border border-border bg-card p-7">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/50 bg-background font-mono text-sm text-brand-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <StepIcon className="absolute right-7 top-9 h-5 w-5 text-muted-foreground" />
                  <h3 className="mt-6 text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 border-y border-border bg-surface/60 py-24 md:py-32"
      >
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">{h.faq.eyebrow}</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              {h.faq.title} <em>{h.faq.titleEm}</em>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{h.faq.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <EmailButton label={h.faq.ask} />
            </div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={80}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {h.faq.items.map((f) => (
                <details key={f.q} className="group px-6 py-5 md:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand-ink transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog */}
      {latestPosts.length > 0 && (
        <section className="container-x py-24 md:py-32">
          <SectionHead
            eyebrow={h.blog.eyebrow}
            title={
              <>
                {h.blog.title} <em>{h.blog.titleEm}</em>
              </>
            }
            intro={h.blog.intro}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
          {h.blog.note && (
            <p className="mt-6 text-center text-sm text-muted-foreground">{h.blog.note}</p>
          )}
          <div className="mt-12 flex justify-center">
            <Link to="/blog" className="group btn btn-outline">
              {h.blog.read}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      )}

      <NotesWall />

      <CtaBand />
    </>
  );
}
