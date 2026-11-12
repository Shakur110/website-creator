import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Reveal, SectionHead } from "@/components/site/parts";
import { testimonials } from "@/lib/testimonials";

/** "What clients say" — renders nothing until testimonials.ts has entries. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  const cols =
    testimonials.length === 1
      ? "md:grid-cols-1 max-w-3xl"
      : testimonials.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Testimonials"
          title={
            <>
              What clients <em>say.</em>
            </>
          }
        />
        <div className={`mt-14 grid gap-6 ${cols}`}>
          {testimonials.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 60} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-8">
                <Quote className="h-8 w-8 text-brand" aria-hidden />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft font-bold text-brand"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-muted-foreground">
                      {[t.role, t.company, t.country].filter(Boolean).join(" · ")}
                    </span>
                    {t.project && (
                      <Link
                        to="/work/$slug"
                        params={{ slug: t.project }}
                        className="mt-1 block font-semibold text-brand hover:underline"
                      >
                        View the project
                      </Link>
                    )}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
