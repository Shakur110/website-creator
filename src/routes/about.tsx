import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Reveal } from "@/components/site/parts";
import { portrait, toolGroups } from "@/lib/projects";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Onjoko Tunde, Web Designer & Automation Specialist" },
      {
        name: "description",
        content:
          "Freelance web designer and CRM and AI automation specialist. 100+ websites built since 2021 for businesses across many industries.",
      },
      { property: "og:title", content: "About Onjoko Tunde" },
      {
        property: "og:description",
        content: "Websites, CRM automation and AI tools for growing businesses.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const principles = [
  [
    "01",
    "Understanding the Business",
    "Every successful project begins with understanding the business, audience, and objectives behind the website.",
  ],
  [
    "02",
    "Designing with Purpose",
    "The visual direction should reflect the brand while making information easy to understand and navigate.",
  ],
  [
    "03",
    "Building for Functionality",
    "A website must work smoothly across devices and provide visitors with an intuitive experience.",
  ],
  [
    "04",
    "Delivering with Care",
    "Attention to detail, communication, and thoughtful execution are essential throughout the project.",
  ],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A little <em>about me.</em>
          </>
        }
      />
      <section className="container-x pb-28 md:pb-32">
        <div className="grid gap-14 md:grid-cols-12">
          {portrait && (
            <Reveal className="aspect-[4/5] overflow-hidden rounded-[1.75rem] frame md:col-span-5">
              <img src={portrait} alt="Onjoko Tunde" className="h-full w-full object-cover" />
            </Reveal>
          )}
          <Reveal
            className={`space-y-6 text-lg leading-relaxed text-muted-foreground ${portrait ? "md:col-span-6 md:col-start-7 md:pt-10" : "md:col-span-9 md:col-start-4"}`}
            delay={100}
          >
            <p className="display text-4xl text-foreground md:text-5xl">
              I'm Onjoko Tunde. I build websites, CRM automations and AI tools for growing
              businesses.
            </p>
            <p>
              Since 2021 I have designed and built more than 100 websites for independent clients
              across healthcare, professional services, education, consulting, manufacturing,
              construction and specialist trades.
            </p>
            <p>
              Along the way I saw the same problem again and again: a good website brings in
              enquiries, but leads get lost in inboxes and follow-up eats hours. So I now also set
              up CRMs, automated follow-ups and booking, and practical AI tools, so the whole
              journey from first visit to paying client runs smoothly.
            </p>
            <p>
              Every project starts with listening. I take time to understand what a client needs,
              who their audience is, and what the website must achieve — then I design and build
              responsive, user-friendly websites that look considered and work reliably on every
              device.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-28 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h2 className="display mt-5 max-w-3xl text-5xl md:text-6xl">
              How I approach every project.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {principles.map(([n, t, d], i) => (
              <Reveal
                key={n}
                delay={i * 60}
                className="group bg-surface p-8 transition-colors hover:bg-background md:p-12"
              >
                <span className="text-sm text-brand">{n}</span>
                <h3 className="display mt-6 text-4xl">{t}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-28 md:py-32">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Tools & Expertise</p>
          <div className="grid gap-12 sm:grid-cols-2 md:col-span-9">
            {toolGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold">{g.title}</h3>
                <ul className="mt-5 space-y-3">
                  {g.items.map((t) => (
                    <li key={t} className="display border-b border-border pb-3 text-2xl">
                      {t}
                    </li>
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
