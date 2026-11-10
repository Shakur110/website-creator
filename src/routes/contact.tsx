import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/parts";
import { contactLinks } from "@/lib/projects";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Website Project with Onjoko Tunde" },
      { name: "description", content: "Tell me about your business, your website goals, or a project you're planning." },
      { property: "og:title", content: "Let's build something meaningful — Onjoko Tunde" },
      { property: "og:description", content: "Enquire about website design, redesign, ecommerce or landing page projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const types = ["Website Design", "Website Redesign", "Ecommerce Website", "Landing Page", "Other"];
const budgets = ["Prefer not to say", "Under $1,000", "$1,000 – $3,000", "$3,000 – $6,000", "$6,000+"];

type Errors = Partial<Record<"name" | "email" | "type" | "details", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "unconfigured">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const type = String(f.get("type") ?? "");
    const details = String(f.get("details") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!type) next.type = "Please choose a project type.";
    if (details.length < 20) next.details = "Please share a few more details (at least 20 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;
    // No email service is connected yet — never pretend the message was sent.
    setStatus("unconfigured");
  };

  const field = "w-full border-0 border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-foreground";
  const links = [
    ["Email", contactLinks.email, contactLinks.email ? `mailto:${contactLinks.email}` : ""],
    ["LinkedIn", contactLinks.linkedin, contactLinks.linkedin],
    ["Fiverr", contactLinks.fiverr, contactLinks.fiverr],
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <em className="text-bronze">meaningful.</em></>}
        intro="Tell me about your business, your website goals, or a project you're planning. I'd be happy to explore how I can help."
      />
      <section className="container-x pb-28 md:pb-40">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4">
            <p className="eyebrow">Direct</p>
            <ul className="mt-6 border-t border-foreground/80">
              {links.map(([label, value, href]) => (
                <li key={label} className="flex justify-between border-b border-border py-4 text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1">
                      {value} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground/70">To be added</span>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <form noValidate onSubmit={onSubmit} className="grid gap-10 md:col-span-7 md:col-start-6 sm:grid-cols-2">
            <Field label="Full name *" error={errors.name}>
              <input name="name" autoComplete="name" className={field} />
            </Field>
            <Field label="Email address *" error={errors.email}>
              <input name="email" type="email" autoComplete="email" className={field} />
            </Field>
            <Field label="Company or business (optional)">
              <input name="company" autoComplete="organization" className={field} />
            </Field>
            <Field label="Project type *" error={errors.type}>
              <select name="type" defaultValue="" className={field}>
                <option value="" disabled>Select…</option>
                {types.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Estimated budget (optional)" className="sm:col-span-2">
              <select name="budget" defaultValue={budgets[0]} className={field}>
                {budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
            </Field>
            <Field label="Project details *" error={errors.details} className="sm:col-span-2">
              <textarea name="details" rows={5} className={`${field} resize-none`} />
            </Field>
            <div className="sm:col-span-2">
              <button type="submit" className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-bronze">
                Send enquiry <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
              {status === "unconfigured" && (
                <div role="alert" className="mt-6 flex gap-3 border border-bronze/40 bg-accent p-5 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 text-bronze" />
                  <p>
                    Your details look good, but this form isn't connected to an email service yet, so the message was{" "}
                    <strong>not sent</strong>. Please reach out through one of the direct links once they're available.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, className = "", children }: { label: string; error?: string | undefined; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-destructive">{error}</span>}
    </label>
  );
}
