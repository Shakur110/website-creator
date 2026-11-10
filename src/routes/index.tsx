import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  LayoutTemplate,
  MessagesSquare,
  PenTool,
  RefreshCcw,
  Rocket,
  ShoppingBag,
  Target,
  Code2,
} from "lucide-react";
import { CtaBand, ProjectCard, ProjectImage, Reveal, SectionHead } from "@/components/site/parts";
import { PostCard } from "@/components/site/blog";
import { featuredProjects, portrait, projects, services, toolGroups } from "@/lib/projects";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onjoko Tunde — Freelance Website Designer (WordPress, Elementor & Wix)" },
      {
        name: "description",
        content:
          "Freelance website designer building WordPress, Elementor and Wix websites for service businesses, clinics and consultancies in the US, UK, Canada and Australia.",
      },
      { property: "og:title", content: "Onjoko Tunde — Freelance Website Designer" },
      {
        property: "og:description",
        content:
          "Website design, redesign, ecommerce and landing pages for growing businesses. Since 2021.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceIcons = [LayoutTemplate, RefreshCcw, ShoppingBag, Target];

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
    title: "Build & refine",
    text: "I build the site on the right platform, test it on phones, tablets and desktops, and refine it with your feedback.",
  },
  {
    icon: Rocket,
    title: "Launch & handover",
    text: "I launch the site, connect your domain and forms, and show you how to update it yourself.",
  },
];

function Index() {
  const hero = (featuredProjects.find((p) => p.slug === "thrive-wm") ?? featuredProjects[0])!;
  const grid = featuredProjects.filter((p) => p.slug !== hero.slug).slice(0, 4);
  const industries = new Set(projects.map((p) => p.group)).size;
  const platforms = toolGroups[0]?.items ?? [];
  const stats = [
    [`${projects.length}`, "Websites delivered"],
    ["2021", "Freelancing since"],
    [`${industries}`, "Industries served"],
    ["4", "Countries focused on"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[40rem] w-[40rem] rounded-full bg-brand-soft blur-3xl"
        />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-32 md:pt-40 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-6">
            <p className="chip animate-rise bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
              Freelance website designer · since 2021
            </p>
            <h1
              className="display animate-rise mt-7 text-5xl sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Websites that turn visitors into <em>clients.</em>
            </h1>
            <p
              className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              I design and build WordPress, Elementor and Wix websites for service businesses,
              clinics and consultancies in the US, UK, Canada and Australia.
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <Link to="/work" className="group btn btn-primary">
                See my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Start a project
              </Link>
            </div>
          </div>
          <div className="animate-rise lg:col-span-6" style={{ animationDelay: "300ms" }}>
            <Link
              to="/work/$slug"
              params={{ slug: hero.slug }}
              className="group relative block"
              aria-label={`${hero.title} case study`}
            >
              <ProjectImage project={hero} eager />
              <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-lg backdrop-blur md:left-auto md:right-6 md:w-80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    Featured project
                  </p>
                  <p className="mt-1 font-bold">{hero.title}</p>
                  <p className="text-sm text-muted-foreground">{hero.industry}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brand" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats + platforms */}
      <section className="border-y border-border bg-surface">
        <div className="container-x grid gap-10 py-12 md:grid-cols-12 md:items-center">
          <dl className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-4xl font-bold tracking-tight text-brand">{n}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
          <div className="md:col-span-5">
            <p className="text-sm font-semibold">Platforms I build on</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <li key={p} className="chip bg-white">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-x py-24 md:py-32">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Recent websites for <em>real businesses.</em>
            </>
          }
          intro="Clinics, consultancies, academies and service companies, each built around what their customers need to find and do."
        />
        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {grid.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link to="/work" className="group btn btn-outline">
            View all {projects.length} projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow="Services"
            title={
              <>
                What I can <em>build for you.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = serviceIcons[i] ?? LayoutTemplate;
              return (
                <Reveal key={s.n} delay={i * 60}>
                  <Link
                    to="/services"
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.short}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-24 md:py-32">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              A simple process, <em>wherever you are.</em>
            </>
          }
          intro="I work remotely with clients across time zones, with clear updates at every step."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} className="h-full">
              <li className="relative h-full rounded-2xl border border-border p-7">
                <span className="text-sm font-bold text-brand">Step {i + 1}</span>
                <step.icon className="absolute right-7 top-7 h-5 w-5 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* About preview */}
      <section className="container-x pb-24 md:pb-32">
        <Reveal className="grid gap-12 rounded-[2rem] bg-brand-soft p-8 md:grid-cols-12 md:items-center md:p-16">
          {portrait && (
            <div className="aspect-[4/5] overflow-hidden rounded-2xl md:col-span-4">
              <img
                src={portrait}
                alt="Onjoko Tunde"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className={portrait ? "md:col-span-7 md:col-start-6" : "md:col-span-10"}>
            <p className="eyebrow">About me</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Hi, I'm Onjoko. <em>I build websites that work.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I've been designing and building websites for independent clients since 2021, from
              therapy practices and dental clinics to maritime consultancies and beauty academies. I
              choose the right platform for each business and make sure the finished site is easy
              for you to run.
            </p>
            <Link to="/about" className="group btn btn-primary mt-8">
              More about me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="container-x pb-8">
          <SectionHead
            eyebrow="From the blog"
            title={
              <>
                Advice for <em>business owners.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 60} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
