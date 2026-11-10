import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Project } from "@/lib/projects";

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

/**
 * Shown where a project has no image yet. Visitors see a calm typographic card
 * (never file names or "placeholder" wording).
 */
export function ImagePlaceholder({
  label,
  className = "",
}: {
  id?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex h-full w-full items-end overflow-hidden bg-surface p-6 md:p-10 ${className}`}
    >
      <span
        aria-hidden
        className="display pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] leading-none text-foreground/[0.04] md:text-[14rem]"
      >
        {label.charAt(0)}
      </span>
      <p className="display relative text-3xl text-foreground/70 md:text-5xl">{label}</p>
    </div>
  );
}

export function ProjectImage({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return project.cover ? (
    <img
      src={project.cover}
      alt={`${project.title} website showcase`}
      loading="lazy"
      className={`h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] ${className}`}
    />
  ) : (
    <ImagePlaceholder label={project.title} />
  );
}

export function ProjectCard({
  project,
  aspect = "aspect-[16/10]",
}: {
  project: Project;
  aspect?: string;
}) {
  return (
    <Link to="/work/$slug" params={{ slug: project.slug }} className="group block">
      <div className={`${aspect} overflow-hidden bg-surface`}>
        <ProjectImage project={project} />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-4">
        <div>
          <p className="eyebrow">
            {project.number} — {project.industry}
          </p>
          <h3 className="display mt-2 text-3xl md:text-4xl">{project.title}</h3>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
      </div>
    </Link>
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
        <h2 className="display mt-5 text-5xl md:text-6xl">{title}</h2>
      </div>
      {intro && (
        <p className="max-w-md text-base leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function CtaBand({
  title = (
    <>
      Have a project in mind? <em className="text-bronze">Let's make it happen.</em>
    </>
  ),
  copy = "Whether you're starting from scratch or looking to improve an existing website, I'd love to hear what you're working on.",
  button = "Start a Project",
}: {
  title?: ReactNode;
  copy?: string;
  button?: string;
}) {
  return (
    <section className="bg-surface py-28 md:py-32">
      <div className="container-x">
        <Reveal>
          <h2 className="display max-w-5xl text-5xl md:text-6xl">{title}</h2>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{copy}</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-bronze"
            >
              {button}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="container-x pb-16 pt-36 md:pb-24 md:pt-48">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1
        className="display animate-rise mt-6 max-w-5xl text-6xl md:text-[7rem]"
        style={{ animationDelay: "80ms" }}
      >
        {title}
      </h1>
      {intro && (
        <p
          className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          {intro}
        </p>
      )}
    </section>
  );
}
