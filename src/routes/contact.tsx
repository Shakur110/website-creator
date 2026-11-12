import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/parts";
import { contactLinks, responseNote } from "@/lib/projects";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Website Project with Onjoko Tunde" },
      {
        name: "description",
        content: "Tell me about your business, your website goals, or a project you're planning.",
      },
      { property: "og:title", content: "Let's build something meaningful — Onjoko Tunde" },
      {
        property: "og:description",
        content: "Enquire about website design, redesign, ecommerce or landing page projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const types = [
  "Website Design",
  "Website Redesign",
  "Shopify Store",
  "Ecommerce Website",
  "Landing Page",
  "CRM Setup & Automation",
  "AI Tools & Automation",
  "Website + CRM + AI",
  "Other",
];
const budgets = [
  "Prefer not to say",
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
];

type Errors = Partial<Record<"name" | "email" | "type" | "details", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "unconfigured">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const type = String(f.get("type") ?? "");
    const details = String(f.get("details") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!type) next.type = "Please choose a project type.";
    if (details.length < 20)
      next.details = "Please share a few more details (at least 20 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;
    if (contactLinks.email) {
      // Open the visitor's email app with the enquiry addressed to Onjoko.
      const company = String(f.get("company") ?? "").trim();
      const budget = String(f.get("budget") ?? "");
      const subject = `Website enquiry: ${type}${company ? ` (${company})` : ""}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        company && `Company: ${company}`,
        `Project type: ${type}`,
        `Budget: ${budget}`,
        "",
        details,
      ]
        .filter((line) => line !== "")
        .join("\n");
      window.location.href = `mailto:${contactLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }
    // No email address set yet — never pretend the message was sent.
    setStatus("unconfigured");
  };

  const field =
    "w-full border-0 border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-brand";
  const links = (
    [
      ["Email", contactLinks.email, contactLinks.email ? `mailto:${contactLinks.email}` : ""],
      ["Book a call", "Schedule 20 minutes", contactLinks.calendly],
      ["WhatsApp", "Message me", contactLinks.whatsapp],
      ["LinkedIn", "View profile", contactLinks.linkedin],
      ["Fiverr", "View reviews", contactLinks.fiverr],
    ] as const
  ).filter(([, , href]) => Boolean(href));

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about <em>your website.</em>
          </>
        }
        intro="Tell me about your business and what you need. I'll reply with questions, ideas and a clear next step."
      />
      <section className="container-x pb-28 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4">
            {links.length > 0 && (
              <>
                <p className="eyebrow">Direct</p>
                <ul className="mb-8 mt-6 border-t border-border">
                  {links.map(([label, value, href]) => (
                    <li
                      key={label}
                      className="flex justify-between border-b border-border py-4 text-sm"
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline inline-flex items-center gap-1"
                      >
                        {value} <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="rounded-2xl bg-brand-soft p-6">
              <p className="eyebrow">What happens next</p>
              <p className="mt-3 leading-relaxed">{responseNote}</p>
            </div>
          </aside>

          <form
            noValidate
            onSubmit={onSubmit}
            className="grid gap-10 md:col-span-7 md:col-start-6 sm:grid-cols-2 rounded-[2rem] border border-border bg-white p-6 frame md:p-10"
          >
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
                <option value="" disabled>
                  Select…
                </option>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Estimated budget (optional)" className="sm:col-span-2">
              <select name="budget" defaultValue={budgets[0]} className={field}>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Project details *" error={errors.details} className="sm:col-span-2">
              <textarea name="details" rows={5} className={`${field} resize-none`} />
            </Field>
            <div className="sm:col-span-2">
              <button type="submit" className="group btn btn-primary">
                Send enquiry{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
              {status === "sent" && (
                <p role="status" className="mt-6 border border-border bg-surface p-5 text-sm">
                  Your email app should now open with your enquiry ready to send. If it doesn't,
                  email me directly at{" "}
                  <a href={`mailto:${contactLinks.email}`} className="underline">
                    {contactLinks.email}
                  </a>
                  .
                </p>
              )}
              {status === "unconfigured" && (
                <div
                  role="alert"
                  className="mt-6 flex gap-3 border border-brand/40 bg-accent p-5 text-sm"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-brand" />
                  <p>
                    Sorry, this form isn't accepting messages right now, so your enquiry was{" "}
                    <strong>not sent</strong>. Please try again later.
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

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-destructive">{error}</span>}
    </label>
  );
}
