import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand, ImagePlaceholder, Reveal } from "@/components/site/parts";
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
      <h1 className="display text-6xl">Project not found.</h1>
      <Link to="/work" className="link-underline mt-8 inline-block text-sm font-semibold">
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
    ["Category", p.category],
    ["Role", "Website Design & Development"],
    ...(p.technologies.length ? [["Platforms", p.technologies.join(", ")]] : []),
  ];
  const story = [
    ["The challenge", p.challenge],
    ["What I did", p.solution],
    ["The result", p.result],
  ].filter((s): s is [string, string] => Boolean(s[1]));
  const gallery = p.gallery.filter((img) => img.src);
  // Fill the last row of the 3-column highlights grid so no empty cell shows.
  const lastSpan = ["", "lg:col-span-3", "lg:col-span-2"][p.highlights.length % 3];
  return (
    <>
      <section className="container-x pt-32 md:pt-44">
        <Link
          to="/work"
          className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>
        <p className="eyebrow animate-rise mt-10">
          Project {p.number} — {p.industry}
        </p>
        <h1 className="display animate-rise mt-6 max-w-5xl text-6xl md:text-[7rem]">{p.title}</h1>
        <div
          className="frame animate-rise mt-14 aspect-[16/10] overflow-hidden bg-surface"
          style={{ animationDelay: "150ms" }}
        >
          {p.cover ? (
            <img
              src={p.cover}
              alt={`${p.title} website showcase`}
              className="h-full w-full object-cover"
            />
          ) : (
            <ImagePlaceholder label={p.title} />
          )}
        </div>
      </section>

      <section className="container-x py-24 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <dl className="border-t border-foreground/80">
              {facts.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-b border-border py-4 text-sm"
                >
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-bronze"
              >
                Visit live website{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            )}
          </Reveal>
          <Reveal className="space-y-14 md:col-span-7 md:col-start-6" delay={100}>
            <Block title="Project overview">
              <p>{p.overview}</p>
            </Block>
            {story.map(([title, text]) => (
              <Block key={title} title={title}>
                <p>{text}</p>
              </Block>
            ))}
            {p.testimonial && (
              <figure className="border-l-2 border-bronze pl-6">
                <blockquote className="display text-3xl leading-snug">
                  “{p.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  {p.testimonial.name}
                  {p.testimonial.role ? `, ${p.testimonial.role}` : ""}
                </figcaption>
              </figure>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Design & development highlights</p>
            <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {p.highlights.map((h, i) => (
                <li
                  key={h}
                  className={`bg-surface p-8 ${i === p.highlights.length - 1 ? lastSpan : ""}`}
                >
                  <span className="text-sm text-bronze-ink">{String(i + 1).padStart(2, "0")}</span>
                  <p className="display mt-4 text-3xl">{h}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="container-x py-24 md:py-28">
          <Reveal>
            <p className="eyebrow">Final website showcase</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            {gallery.map((img, i) => (
              <Reveal
                key={img.id}
                className={
                  img.kind === "mobile"
                    ? "aspect-[9/16] md:col-span-4"
                    : i === 0
                      ? "aspect-[16/10] md:col-span-12"
                      : "aspect-[4/3] md:col-span-8"
                }
              >
                <img
                  src={img.src}
                  alt={`${p.title} — ${img.label}`}
                  loading="lazy"
                  className="frame h-full w-full object-cover object-top"
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="container-x pb-24">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group block border-t border-foreground/80 pt-10"
        >
          <p className="eyebrow">Next project</p>
          <div className="mt-4 flex items-center justify-between gap-6">
            <h2 className="display text-5xl transition-transform duration-500 group-hover:translate-x-3 md:text-7xl">
              {next.title}
            </h2>
            <ArrowRight
              className="h-8 w-8 shrink-0 transition-transform group-hover:translate-x-2"
              strokeWidth={1.25}
            />
          </div>
        </Link>
      </section>
      <CtaBand />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="display text-4xl">{title}</h2>
      <div className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
