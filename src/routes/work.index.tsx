import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand, PageHero, ProjectCard, Reveal } from "@/components/site/parts";
import { CATEGORIES, projects } from "@/lib/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Website Projects by Onjoko Tunde" },
      {
        name: "description",
        content:
          "Twelve website design and development projects across healthcare, consulting, education, services and more.",
      },
      { property: "og:title", content: "Selected Work — Onjoko Tunde" },
      {
        property: "og:description",
        content: "A portfolio of business, healthcare, education and specialist service websites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function Work() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All Projects");
  const list = filter === "All Projects" ? projects : projects.filter((p) => p.group === filter);
  // Only offer filters that hold at least two projects; single-project filters look thin.
  const filters = CATEGORIES.filter(
    (c) => c === "All Projects" || projects.filter((p) => p.group === c).length >= 2,
  );
  return (
    <>
      <PageHero
        eyebrow={`Portfolio — ${projects.length} Projects`}
        title={
          <>
            Selected <em className="text-bronze">work.</em>
          </>
        }
        intro="Websites for clinics, consultancies, service businesses and schools, designed and built since 2021."
      />
      <section className="container-x pb-28 md:pb-32">
        <div
          role="group"
          aria-label="Filter projects"
          className="flex flex-wrap gap-2 border-b border-border pb-6"
        >
          {filters.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-sm transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div key={filter} className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={p} />
              <p className="mt-3 text-sm text-muted-foreground">{p.category}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
