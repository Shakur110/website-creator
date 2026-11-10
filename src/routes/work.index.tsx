import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand, PageHero, ProjectCard, Reveal } from "@/components/site/parts";
import { CATEGORIES, projects, siteStats } from "@/lib/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Website Projects by Onjoko Tunde" },
      {
        name: "description",
        content:
          "Featured projects from 100+ websites built since 2021 across healthcare, consulting, education, manufacturing, services and more.",
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
        eyebrow={`Portfolio · ${projects.length} featured of ${siteStats.websites} websites`}
        title={
          <>
            Websites I've <em>designed & built.</em>
          </>
        }
        intro={`A selection from more than 100 websites I've designed and built since 2021. Want examples from your industry? Just ask.`}
      />
      <section className="container-x pb-28 md:pb-32">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "border-brand bg-brand text-white"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div key={filter} className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
