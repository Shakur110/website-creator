import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  CtaBand,
  ImagePlaceholder,
  ProjectCard,
  Reveal,
  SectionHead,
} from "@/components/site/parts";
import { featuredProjects, portrait, services, toolGroups } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onjoko Tunde — Freelance Website Designer (WordPress, Elementor & Wix)" },
      {
        name: "description",
        content:
          "Independent website designer helping businesses build a stronger online presence through strategic website design and development.",
      },
      {
        property: "og:title",
        content: "Onjoko Tunde — Website Designer & Digital Solutions Specialist",
      },
      {
        property: "og:description",
        content:
          "Strategic website design, redesign, ecommerce and landing pages for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const layout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-32",
  "md:col-span-5",
  "md:col-span-7 md:mt-24",
  "md:col-span-7 md:col-start-6",
  "md:col-span-5 md:mt-32",
];

function Index() {
  const hero = (featuredProjects.find((p) => p.slug === "thrive-wm") ?? featuredProjects[0])!;
  return (
    <>
      {/* Hero */}
      <section className="container-x pt-32 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9">
            <p className="eyebrow animate-rise">
              Independent Website Designer & Digital Solutions Specialist
            </p>
            <h1
              className="display animate-rise mt-8 text-[3.6rem] sm:text-7xl md:text-[7rem] lg:text-[8rem]"
              style={{ animationDelay: "80ms" }}
            >
              Thoughtful websites. <em className="text-bronze">Meaningful</em> digital experiences.
            </h1>
          </div>
          <div
            className="flex flex-col justify-end gap-8 md:col-span-3 animate-rise"
            style={{ animationDelay: "200ms" }}
          >
            <p className="leading-relaxed text-muted-foreground">
              I help businesses build a stronger online presence through strategic website design,
              thoughtful development, and digital experiences built around their goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-bronze"
              >
                Explore My Work{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/work/$slug"
          params={{ slug: hero.slug }}
          className="group mt-16 block animate-rise md:mt-24"
          style={{ animationDelay: "300ms" }}
        >
          <div className="frame aspect-[16/10] overflow-hidden bg-surface">
            {hero.cover ? (
              <img
                src={hero.cover}
                alt={`${hero.title} website showcase`}
                className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.02]"
              />
            ) : (
              <ImagePlaceholder label={hero.title} />
            )}
          </div>
          <div className="mt-4 flex justify-between text-xs text-muted-foreground">
            <span>Featured — {hero.title}</span>
            <span>{hero.industry}</span>
          </div>
        </Link>
      </section>

      {/* Intro */}
      <section className="container-x py-28 md:py-32">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Philosophy</p>
          <div className="md:col-span-9">
            <h2 className="display text-5xl md:text-6xl">
              Good design is more than how a website looks.{" "}
              <em className="text-bronze">It's how it works.</em>
            </h2>
            <div className="mt-12 grid gap-8 text-muted-foreground md:grid-cols-2">
              <p className="leading-relaxed">
                I believe an effective website should do more than create a good first impression.
                It should communicate a business's value, guide visitors naturally, and make it
                easier for people to take action.
              </p>
              <p className="leading-relaxed">
                My approach combines thoughtful visual design, usability, and practical development
                to create websites that serve real business needs.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured work */}
      <section className="container-x pb-28 md:pb-32">
        <SectionHead
          eyebrow="Selected Work"
          title={<>A selection of digital experiences.</>}
          intro="Every project presents a different challenge, audience, and opportunity to create something meaningful."
        />
        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12">
          {featuredProjects
            .filter((p) => p.slug !== hero.slug)
            .map((p, i) => (
              <Reveal key={p.slug} className={layout[i % layout.length] ?? ""}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
        </div>
        <div className="mt-20 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-28 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Services" title="What I can help you build." />
          <div className="mt-16 border-t border-foreground/80">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <Link
                  to="/services"
                  className="group grid items-baseline gap-4 border-b border-border py-10 transition-colors md:grid-cols-12"
                >
                  <span className="text-sm text-bronze-ink md:col-span-1">{s.n}</span>
                  <h3 className="display text-4xl transition-transform duration-500 group-hover:translate-x-3 md:col-span-5 md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground md:col-span-5">{s.short}</p>
                  <ArrowUpRight className="hidden h-5 w-5 justify-self-end text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-foreground md:col-span-1 md:block" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="container-x py-28 md:py-32">
        <div className="grid gap-14 md:grid-cols-12 md:items-center">
          {portrait && (
            <Reveal className="aspect-[4/5] md:col-span-5">
              <img
                src={portrait}
                alt="Onjoko Tunde"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
          )}
          <Reveal
            className={portrait ? "md:col-span-6 md:col-start-7" : "md:col-span-9 md:col-start-4"}
            delay={100}
          >
            <p className="eyebrow">About</p>
            <h2 className="display mt-5 text-5xl md:text-6xl">
              Designing with purpose. <em className="text-bronze">Building with intention.</em>
            </h2>
            <div className="mt-10 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                I am Onjoko Tunde, a freelance website designer and digital solutions professional
                with experience working on independent client projects since 2021.
              </p>
              <p>
                I work with businesses to transform ideas, existing websites, and business
                requirements into modern, functional digital experiences.
              </p>
              <p>
                My focus is on creating websites that combine visual quality, usability, and the
                practical needs of the businesses they represent.
              </p>
            </div>
            <Link
              to="/about"
              className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-semibold"
            >
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Tools */}
      <section className="container-x pb-28 md:pb-32">
        <Reveal className="grid gap-12 border-t border-border pt-16 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Tools & Expertise</p>
          <div className="grid gap-12 sm:grid-cols-2 md:col-span-9">
            {toolGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li
                      key={t}
                      className="border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
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
