import { createFileRoute, Link } from "@tanstack/react-router";
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
import { CtaBand, ProjectCard, ProjectImage, Reveal, SectionHead } from "@/components/site/parts";
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
import { faqs } from "@/lib/faqs";
import { publishedPosts } from "@/lib/posts";
import { shareTags } from "@/lib/seo";

const TITLE = "Onjoko Tunde — Websites, CRM Automation & AI Tools";
const DESCRIPTION =
  "Websites, CRM automation and AI tools that help growing businesses win and keep more clients.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onjoko Tunde — Website Design, Shopify, CRM Automation & AI Tools" },
      {
        name: "description",
        content:
          "100+ websites since 2021. I build WordPress, Elementor, Shopify and Wix websites and connect them to CRM automations and AI tools for businesses in the US, UK, Canada and Australia.",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...shareTags("/", TITLE, DESCRIPTION),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const heroServices = [
  "WordPress websites",
  "Shopify stores",
  "Wix websites",
  "Website redesigns",
  "Landing pages",
  "CRM setup & pipelines",
  "Lead capture & follow-up",
  "Email & SMS automation",
  "Booking & reminders",
  "AI chat assistants",
  "AI workflow automation",
];

const serviceIcons = [LayoutTemplate, RefreshCcw, ShoppingBag, Target, Workflow, Bot];

const process = [
  {
    icon: MessagesSquare,
    title: "Discovery call",
    text: "We talk through your business, your customers and what the website must achieve. You get a clear scope and quote.",
  },
  {
    icon: PenTool,
    title: "Structure & design",
    text: "I plan the pages and content, then design the look so you can review it before anything is built.",
  },
  {
    icon: Code2,
    title: "Build & automate",
    text: "I build the site on the right platform, connect your CRM and automations, and test everything on every screen size.",
  },
  {
    icon: Rocket,
    title: "Launch & handover",
    text: "I launch, connect your domain, forms and CRM, and show you how to run it all yourself.",
  },
];

function Index() {
  const hero = (featuredProjects.find((p) => p.slug === "thrive-wm") ?? featuredProjects[0])!;
  const grid = featuredProjects.filter((p) => p.slug !== hero.slug).slice(0, 4);
  const latestPosts = publishedPosts().slice(0, 3);
  const stats: [string, string][] = [
    [siteStats.websites, "Websites delivered"],
    [siteStats.since, "Freelancing since"],
    [`${projects.length}`, "Featured case studies"],
    ["4", "Core markets: US, UK, CA, AU"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x relative pt-24 md:pt-28">
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Welcome to <span className="text-brand-ink">onjoko.os</span>
          </p>
          <div className="animate-rise mt-3" style={{ animationDelay: "60ms" }}>
            <PipelineConsole />
          </div>
        </div>
        <div className="container-x relative grid items-center gap-14 pb-12 pt-12 md:pt-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="animate-rise">
              <AvailabilityBadge>
                Available for new projects
                <span className="hidden sm:inline"> · Web, Shopify, CRM &amp; AI</span>
              </AvailabilityBadge>
            </div>
            <h1 className="display mt-7 text-5xl sm:text-6xl lg:text-7xl">
              <WordRise
                text="Websites and automations that turn visitors into"
                accent="clients."
                delay={120}
              />
            </h1>
            <p
              className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              I design and build WordPress, Shopify and Wix websites, then connect them to CRM
              automations and AI tools so every lead is captured, followed up and booked. For
              businesses in the US, UK, Canada and Australia.
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <BookCallButton label="Book a free call" />
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
                  aria-label={`Showreel of ${projects.length} featured client websites`}
                />
              </div>
              <Link
                to="/work"
                className="group absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-xl shadow-black/20 backdrop-blur md:left-auto md:right-6 md:w-80"
              >
                <div>
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-ink">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Showreel
                  </p>
                  <p className="mt-1 font-bold">{projects.length} featured websites</p>
                  <p className="text-sm text-muted-foreground">
                    From {siteStats.websites} built since 2021
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-ink transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative pb-10 pt-8">
          <ServiceMarquee items={heroServices} />
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
                  <span className="text-emerald-400">●</span> Onjoko Tunde · since 2021
                </p>
              </div>
            </Reveal>
          )}
          <Reveal
            className={portrait ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-10"}
            delay={80}
          >
            <p className="eyebrow">About</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              The web designer behind <em>the systems.</em>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Onjoko Tunde. Since 2021 I've designed and built more than 100 websites for
                clients from therapy practices and dental clinics to manufacturers and maritime
                consultancies.
              </p>
              <p>
                A good website brings in enquiries, but leads often get lost in inboxes. So I also
                set up CRMs, automated follow-up and booking, and practical AI tools, so the whole
                journey from first visit to paying client runs smoothly.
              </p>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              <li className="chip">
                <MapPin className="h-3.5 w-3.5" /> Lagos, Nigeria
              </li>
              <li className="chip">
                <Clock className="h-3.5 w-3.5" /> GMT+1
              </li>
              <li className="chip">
                <Globe2 className="h-3.5 w-3.5" /> Remote · US, UK, CA, AU
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
                Platforms I build on
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
            Websites, Shopify, CRM and AI for businesses in the{" "}
            <em>US, UK, Canada &amp; Australia.</em>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5">
            One partner for the whole journey: a website that wins trust, a CRM that captures every
            lead, automations that follow up for you and AI tools that save hours every week.
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="container-x scroll-mt-24 pb-24 md:pb-32">
        <SectionHead
          eyebrow="Services"
          title={
            <>
              Web, Shopify, CRM <em>and AI, done right.</em>
            </>
          }
          intro="Tap a service to see what's included."
        />
        <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
          {services.map((s, i) => {
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
                      <CalendarDays className="h-4 w-4" /> Book a call about this
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
            eyebrow="Speed to lead"
            title={
              <>
                Watch a lead get <em>booked in minutes.</em>
              </>
            }
            intro="An example of the automation I connect to your website: instant replies, CRM tracking, follow-up and an AI assistant that books the call."
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
            eyebrow="Featured work"
            title={
              <>
                Recent websites for <em>real businesses.</em>
              </>
            }
            intro={`${projects.length} highlights from ${siteStats.websites} websites I've built for clinics, consultancies, academies, manufacturers and service companies.`}
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
              See all work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live client sites */}
      <section
        aria-label="Live client websites"
        className="marquee overflow-hidden border-b border-border py-6"
      >
        <div className="marquee-track flex w-max gap-3">
          {[...projects, ...projects].map((p, i) => (
            <a
              key={`${p.slug}-${i}`}
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              tabIndex={i >= projects.length ? -1 : undefined}
              aria-hidden={i >= projects.length ? true : undefined}
              className="chip shrink-0 whitespace-nowrap bg-card transition-colors hover:border-brand-ink hover:text-brand-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
              {p.liveUrl?.replace(/^https?:\/\//, "")}
            </a>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Process */}
      <section id="process" className="container-x scroll-mt-24 py-24 md:py-32">
        <SectionHead
          eyebrow="How I work"
          title={
            <>
              Strategy. Build. <em>Launch.</em>
            </>
          }
          intro="I work remotely with clients across time zones, with clear updates at every step."
        />
        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[2.85rem] hidden h-px bg-gradient-to-r from-transparent via-brand-ink/40 to-transparent lg:block"
          />
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} className="h-full">
              <li className="spotlight relative h-full rounded-2xl border border-border bg-card p-7">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/50 bg-background font-mono text-sm text-brand-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon className="absolute right-7 top-9 h-5 w-5 text-muted-foreground" />
                <h3 className="mt-6 text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 border-y border-border bg-surface/60 py-24 md:py-32"
      >
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Questions, <em>answered.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Don't see yours? Ask me directly and I'll get back to you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <EmailButton label="Ask a question" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={80}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f) => (
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
            eyebrow="From the blog"
            title={
              <>
                Advice for <em>business owners.</em>
              </>
            }
            intro="A new article every day on websites, Shopify, CRM automation and AI tools."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/blog" className="group btn btn-outline">
              Read the blog
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
