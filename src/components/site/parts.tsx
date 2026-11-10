import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { contactLinks, type Project } from "@/lib/projects";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** "https://www.thrivewm.net/about" → "thrivewm.net" */
export const domainOf = (url?: string) =>
  url
    ? url
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .replace(/\/.*$/, "")
    : "";

/**
 * Shown where a project has no cover yet: a blue gradient card with the
 * project name. Visitors never see file names or "placeholder" wording.
 */
export function ImagePlaceholder({
  label,
  sub,
  className = "",
}: {
  label: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex h-full w-full flex-col justify-end overflow-hidden bg-gradient-to-br from-brand to-navy p-6 text-white md:p-10 ${className}`}
    >
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/20 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px]"
      />
      {sub && (
        <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-sky">{sub}</p>
      )}
      <p className="relative mt-2 text-3xl font-bold tracking-tight md:text-4xl">{label}</p>
    </div>
  );
}

/**
 * A screenshot shown inside a simple browser window, with the site's address in
 * the bar when a live link exists. Works with any screenshot size: the image is
 * cropped from the top so the hero of the site is always visible.
 */
export function BrowserFrame({
  src,
  alt,
  url,
  aspect = "aspect-[16/10]",
  eager = false,
  className = "",
  fallback,
}: {
  src?: string | undefined;
  alt: string;
  url?: string | undefined;
  aspect?: string;
  eager?: boolean;
  className?: string;
  fallback?: ReactNode;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-white frame ${className}`}>
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-full bg-white px-3 py-1 text-[11px] text-muted-foreground">
          <Globe className="h-3 w-3 shrink-0" />
          <span className="truncate">{domainOf(url) || " "}</span>
        </div>
      </div>
      <div className={`${aspect} overflow-hidden`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
          />
        ) : (
          fallback
        )}
      </div>
    </div>
  );
}

export function ProjectImage({
  project,
  eager = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  eager?: boolean;
  sizes?: string;
}) {
  if (project.cover && project.coverIsShowcase) {
    // A finished presentation board: show it as-is, no extra browser frame.
    return (
      <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface frame">
        <img
          src={project.cover}
          srcSet={
            project.coverLarge ? `${project.cover} 1200w, ${project.coverLarge} 2000w` : undefined
          }
          sizes={sizes}
          width={1200}
          height={750}
          alt={`${project.title} website design, shown on ${domainOf(project.liveUrl) || "desktop"}`}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  return (
    <BrowserFrame
      src={project.cover}
      alt={`${project.title} website`}
      url={project.liveUrl}
      eager={eager}
      fallback={<ImagePlaceholder label={project.title} sub={project.industry} />}
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block"
        aria-label={`${project.title} case study`}
      >
        <ProjectImage project={project} />
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {project.industry} · {project.category}
            </p>
            <h3 className="mt-1.5 text-2xl font-bold tracking-tight transition-colors group-hover:text-brand md:text-3xl">
              {project.title}
            </h3>
          </div>
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="chip mt-4 transition-colors hover:border-brand hover:text-brand"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
          Live · {domainOf(project.liveUrl)}
        </a>
      )}
    </article>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
      </div>
      {intro && (
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function CtaBand({
  title = (
    <>
      Have a project in mind? <em>Let's build it.</em>
    </>
  ),
  copy = "Tell me about your business and what your website needs to do. I'll reply with ideas, a timeline and a clear quote.",
  button = "Start a project",
}: {
  title?: ReactNode;
  copy?: string;
  button?: string;
}) {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-white md:px-16 md:py-24">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/60 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-sky/20 blur-3xl"
        />
        <div className="relative">
          <h2 className="display max-w-4xl text-4xl text-white md:text-6xl [&_em]:text-sky">
            {title}
          </h2>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-lg leading-relaxed text-white/75">{copy}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-light">
                {button}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {contactLinks.calendly && (
                <a
                  href={contactLinks.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn border border-white/30 text-white hover:border-white"
                >
                  Book a call
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-soft blur-3xl"
      />
      <div className="container-x relative pb-14 pt-36 md:pb-20 md:pt-44">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1
          className="display animate-rise mt-5 max-w-5xl text-5xl md:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
