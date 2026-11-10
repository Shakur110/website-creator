import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, LayoutTemplate, RefreshCcw, ShoppingBag, Target } from "lucide-react";
import { CtaBand, PageHero, Reveal } from "@/components/site/parts";
import { services } from "@/lib/projects";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Website Design, Redesign, Ecommerce & Landing Pages" },
      { name: "description", content: "Website design, website redesign, ecommerce development and landing page design by Onjoko Tunde." },
      { property: "og:title", content: "Services — Onjoko Tunde" },
      { property: "og:description", content: "Modern, functional and responsive websites for businesses of every size." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const icons = [LayoutTemplate, RefreshCcw, ShoppingBag, Target];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>What I can help you <em className="text-bronze">build.</em></>}
        intro="From new website builds to complete redesigns, I create modern, functional, and responsive websites that help businesses communicate their value and connect with their audiences."
      />
      <section className="container-x pb-28 md:pb-40">
        {services.map((s, i) => {
          const Icon = icons[i] ?? LayoutTemplate;
          return (
            <Reveal key={s.n} className="group grid gap-10 border-t border-border py-16 md:grid-cols-12 md:py-24">
              <div className="md:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-bronze">Service {s.n}</span>
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-bronze" strokeWidth={1.25} />
                </div>
                <h2 className="display mt-6 text-5xl md:text-6xl">{s.title}</h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-lg leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                  {s.includes.map((x) => (
                    <li key={x} className="flex items-center gap-3 border-b border-border py-3 text-sm">
                      <span className="h-1 w-1 bg-bronze" /> {x}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Enquire about {s.title.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </section>
      <CtaBand />
    </>
  );
}
