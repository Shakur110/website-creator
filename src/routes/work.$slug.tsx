import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { BrowserFrame, CtaBand, ProjectImage, Reveal, domainOf } from "@/components/site/parts";
import { getNextProject, getProject } from "@/lib/projects";

/** Trim to a length on a word boundary, for search-result descriptions. */
const summary = (text: string, max = 155) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p)
      return {
        meta: [
          { title: "Project not found — Onjoko Tunde" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${p.title} — Case Study by Onjoko Tunde` },
        { name: "description", content: summary(p.overview) },
        { property: "og:title", content: `${p.title} — ${p.category}` },
        { property: "og:description", content: summary(p.overview) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x pb-40 pt-48">
      <h1 className="display text-5xl">Project not found.</h1>
      <Link to="/work" className="btn btn-primary mt-8">
        Back to all work
      </Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p, next } = Route.useLoaderData();
  const facts = [
    ["Industry", p.industry],
    ["Website type", p.category],
    ["My role", "Design & development"],
    ...(p.technologies.length ? [["Platform", p.technologies.join(", ")]] : []),
  ];
  const story = [
    ["The challenge", p.challenge],
    ["What I did", p.solution],
    ["The result", p.result],
  ].filter((s): s is [string, string] => Boolean(s[1]));
  const desktop = p.gallery.filter((img) => img.src && img.kind !== "mobile");
  const mobile = p.gallery.filter((img) => img.src && img.kind === "mobile");

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-soft blur-3xl"
        />
        <div className="container-x relative pt-32 md:pt-40">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow animate-rise">{p.industry}</p>
              <h1 className="display animate-rise mt-4 text-5xl md:text-7xl">{p.title}</h1>
              <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {p.overview}
              </p>
            </div>
            <div className="animate-rise flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group btn btn-primary"
                >
                  Visit {domainOf(p.liveUrl)}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              )}
              <Link to="/contact" className="btn btn-outline">
                Start a similar project
              </Link>
            </div>
          </div>
          <div className="animate-rise mt-14" style={{ animationDelay: "150ms" }}>
            <ProjectImage project={p} eager sizes="(min-width: 1344px) 1264px, 100vw" />
          </div>
        </div>
      </section>

      {/* Facts + story */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <dl className="rounded-2xl border border-border bg-surface p-6">
              {facts.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-b border-border py-3.5 text-sm last:border-0"
                >
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-semibold">{v}</dd>
                </div>
              ))}
              {p.liveUrl && (
                <div className="flex justify-between gap-6 pt-3.5 text-sm">
                  <dt className="text-muted-foreground">Live site</dt>
                  <dd>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-brand underline-offset-4 hover:underline"
                    >
                      {domainOf(p.liveUrl)}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>
          <Reveal className="space-y-12 md:col-span-7 md:col-start-6" delay={100}>
            {story.map(([title, text]) => (
              <div key={title}>
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">What the website includes</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            {p.testimonial && (
              <figure className="rounded-2xl bg-brand-soft p-8">
                <blockquote className="text-xl font-medium leading-relaxed">
                  “{p.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{p.testimonial.name}</span>
                  {p.testimonial.role ? `, ${p.testimonial.role}` : ""}
                </figcaption>
              </figure>
            )}
          </Reveal>
        </div>
      </section>

      {/* Screenshots: only shown once you add them */}
      {(desktop.length > 0 || mobile.length > 0) && (
        <section className="bg-surface py-20 md:py-28">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">The finished website</p>
            </Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-12">
              {desktop.map((img) => (
                <Reveal key={img.id} className={mobile.length ? "md:col-span-8" : "md:col-span-12"}>
                  <BrowserFrame
                    src={img.src}
                    alt={`${p.title} — ${img.label}`}
                    url={p.liveUrl}
                    aspect="aspect-[16/10]"
                  />
                </Reveal>
              ))}
              {mobile.map((img) => (
                <Reveal key={img.id} className="md:col-span-4">
                  <div className="mx-auto max-w-[18rem] overflow-hidden rounded-[2.2rem] border-[10px] border-navy bg-navy frame">
                    <img
                      src={img.src}
                      alt={`${p.title} — ${img.label}`}
                      loading="lazy"
                      className="aspect-[9/19] w-full rounded-[1.5rem] object-cover object-top"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="container-x pt-20 md:pt-28">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group grid items-center gap-8 rounded-[2rem] border border-border p-6 transition-colors hover:border-brand md:grid-cols-12 md:p-10"
        >
          <div className="md:col-span-5">
            <p className="eyebrow">Next project</p>
            <h2 className="display mt-3 text-4xl transition-colors group-hover:text-brand md:text-5xl">
              {next.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{next.industry}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              View case study{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
          <div className="md:col-span-7">
            <ProjectImage project={next} />
          </div>
        </Link>
      </section>
      <CtaBand />
    </>
  );
}
