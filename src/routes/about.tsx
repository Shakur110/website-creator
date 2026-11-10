import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, ImagePlaceholder, PageHero, Reveal } from "@/components/site/parts";
import { toolGroups } from "@/lib/projects";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Onjoko Tunde, Website Designer" },
      { name: "description", content: "Freelance website designer working on independent client projects since 2021, across industries and platforms." },
      { property: "og:title", content: "About Onjoko Tunde" },
      { property: "og:description", content: "A freelance website designer focused on responsive, user-friendly and functional websites." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const principles = [
  ["01", "Understanding the Business", "Every successful project begins with understanding the business, audience, and objectives behind the website."],
  ["02", "Designing with Purpose", "The visual direction should reflect the brand while making information easy to understand and navigate."],
  ["03", "Building for Functionality", "A website must work smoothly across devices and provide visitors with an intuitive experience."],
  ["04", "Delivering with Care", "Attention to detail, communication, and thoughtful execution are essential throughout the project."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title={<>A little <em className="text-bronze">about me.</em></>} />
      <section className="container-x pb-28 md:pb-40">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="aspect-[4/5] md:col-span-5">
            <ImagePlaceholder id="profile/portrait-about" label="Portrait of Onjoko Tunde" />
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pt-10" delay={100}>
            <p className="display text-4xl text-foreground md:text-5xl">
              I'm Onjoko Tunde — a freelance website designer and digital solutions professional.
            </p>
            <p>
              Since 2021, I have worked on independent client projects, designing and developing websites for businesses
              across a range of industries — from healthcare and professional services to education, consulting, construction
              and specialist trades.
            </p>
            <p>
              Along the way I have worked with different website platforms, choosing the right tools for each project rather
              than forcing every business into the same template.
            </p>
            <p>
              Every project starts with listening. I take time to understand what a client needs, who their audience is, and
              what the website must achieve — then I design and build responsive, user-friendly websites that look considered
              and work reliably on every device.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-28 md:py-40">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h2 className="display mt-5 max-w-3xl text-5xl md:text-7xl">How I approach every project.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {principles.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 60} className="group bg-surface p-8 transition-colors hover:bg-background md:p-12">
                <span className="text-sm text-bronze">{n}</span>
                <h3 className="display mt-6 text-4xl">{t}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-28 md:py-40">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Tools & Expertise</p>
          <div className="grid gap-12 sm:grid-cols-2 md:col-span-9">
            {toolGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold">{g.title}</h3>
                <ul className="mt-5 space-y-3">
                  {g.items.map((t) => (
                    <li key={t} className="display border-b border-border pb-3 text-2xl">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
