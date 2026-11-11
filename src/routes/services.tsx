import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  LayoutTemplate,
  RefreshCcw,
  ShoppingBag,
  Target,
  Bot,
  Workflow,
  Plus,
} from "lucide-react";
import { CtaBand, PageHero, Reveal } from "@/components/site/parts";
import { services } from "@/lib/projects";
import { faqs } from "@/lib/faqs";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Website Design, CRM Automation & AI Tools | Onjoko Tunde" },
      {
        name: "description",
        content:
          "Website design and redesign, ecommerce, landing pages, CRM setup and automation, and AI tools for growing businesses, by Onjoko Tunde.",
      },
      { property: "og:title", content: "Services — Onjoko Tunde" },
      {
        property: "og:description",
        content: "Websites, CRM automation and AI tools for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Services,
});

const icons = [LayoutTemplate, RefreshCcw, ShoppingBag, Target, Workflow, Bot];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            What I can help you <em>build.</em>
          </>
        }
        intro="Websites that win trust, CRM automations that follow up for you, and AI tools that save hours every week. Pick one, or let me connect them all."
      />
      <section className="container-x pb-28 md:pb-32">
        {services.map((s, i) => {
          const Icon = icons[i] ?? LayoutTemplate;
          return (
            <Reveal
              key={s.n}
              className="group grid gap-10 border-t border-border py-16 md:grid-cols-12 md:py-24"
            >
              <div className="md:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-brand">Service {s.n}</span>
                  <Icon
                    className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand"
                    strokeWidth={1.25}
                  />
                </div>
                <h2 className="display mt-6 text-5xl md:text-6xl">{s.title}</h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-lg leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                  {s.includes.map((x) => (
                    <li
                      key={x}
                      className="flex items-center gap-3 border-b border-border py-3 text-sm"
                    >
                      <span className="h-1 w-1 bg-brand" /> {x}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Enquire about {s.title.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Questions clients <em>often ask.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Don't see yours? Ask me directly and I'll get back to you.
            </p>
            <Link to="/contact" className="btn btn-primary mt-7">
              Ask a question
            </Link>
          </Reveal>
          <Reveal className="md:col-span-8" delay={80}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5 md:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
