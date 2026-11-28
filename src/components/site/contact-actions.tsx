import { CalendarDays, Mail, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { contactLinks } from "@/lib/projects";

const ModalContext = createContext<{ open: () => void }>({ open: () => {} });

/** Opens the "Send an email" popup from anywhere on the site. */
export const useEmailModal = () => useContext(ModalContext);

export function EmailModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {isOpen && <EmailModal onClose={() => setOpen(false)} />}
    </ModalContext.Provider>
  );
}

/** Opens Onjoko's Calendly booking page in a new tab. */
export function BookCallButton({
  className = "btn btn-primary",
  label = "Book a call",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={contactLinks.calendly} target="_blank" rel="noreferrer" className={className}>
      <CalendarDays className="h-4 w-4" />
      {label}
    </a>
  );
}

export function EmailButton({
  className = "btn btn-outline",
  label = "Send an email",
}: {
  className?: string;
  label?: string;
}) {
  const { open } = useEmailModal();
  return (
    <button type="button" onClick={open} className={className}>
      <Mail className="h-4 w-4" />
      {label}
    </button>
  );
}

const types = [
  "Website development",
  "Website redesign",
  "Shopify store",
  "Landing page",
  "CRM setup & automation",
  "AI tools & automation",
  "Website + CRM + AI",
  "Something else",
];
const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];

function EmailModal({ onClose }: { onClose: () => void }) {
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "details", string>>>({});
  const [sent, setSent] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const first = panel.current?.querySelector<HTMLElement>("input,select,textarea");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const items = panel.current.querySelectorAll<HTMLElement>(
          "a[href],button,input,select,textarea",
        );
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus();
    };
  }, [onClose]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const details = get("details");
    const next: Partial<Record<"name" | "email" | "details", string>> = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (details.length < 10)
      next.details = "Tell me a little about your project (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;
    const company = get("company");
    const type = get("type");
    const subject = `Project enquiry: ${type}${company ? ` (${company})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      `Project type: ${type}`,
      `Budget: ${get("budget")}`,
      "",
      details,
    ]
      .filter((l) => l !== "")
      .join("\n");
    window.location.href = `mailto:${contactLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-ink";
  const label =
    "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground";
  const err = (k: "name" | "email" | "details") =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-modal-title"
        className="animate-rise max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-[1.75rem] border border-border bg-card p-6 shadow-2xl sm:rounded-[1.75rem] md:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow">Send an email</p>
            <h2 id="email-modal-title" className="display mt-3 text-3xl">
              Tell me about <em>your project.</em>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {sent ? (
          <div role="status" className="mt-8 space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              Your email app should now be open with your message ready. Press send and I'll reply
              within one business day.
            </p>
            <p className="text-sm text-muted-foreground">
              Didn't open? Email me directly at{" "}
              <a
                href={`mailto:${contactLinks.email}`}
                className="font-semibold text-brand-ink underline"
              >
                {contactLinks.email}
              </a>
              , or skip email and book a call.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookCallButton />
              <button type="button" onClick={onClose} className="btn btn-outline">
                Close
              </button>
            </div>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="m-name" className={label}>
                Name
              </label>
              <input
                id="m-name"
                name="name"
                autoComplete="name"
                className={field}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {err("name")}
            </div>
            <div>
              <label htmlFor="m-email" className={label}>
                Email
              </label>
              <input
                id="m-email"
                name="email"
                type="email"
                autoComplete="email"
                className={field}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {err("email")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="m-company" className={label}>
                Business / website (optional)
              </label>
              <input id="m-company" name="company" autoComplete="organization" className={field} />
            </div>
            <div>
              <label htmlFor="m-type" className={label}>
                What do you need?
              </label>
              <select id="m-type" name="type" className={field}>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="m-budget" className={label}>
                Budget (USD)
              </label>
              <select id="m-budget" name="budget" defaultValue="Not sure yet" className={field}>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="m-details" className={label}>
                Project details
              </label>
              <textarea
                id="m-details"
                name="details"
                rows={4}
                placeholder="Your goals, timeline, links to your current site…"
                className={`${field} resize-none`}
                aria-invalid={!!errors.details}
                aria-describedby={errors.details ? "details-error" : undefined}
              />
              {err("details")}
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
              <button type="submit" className="btn btn-primary">
                <Mail className="h-4 w-4" /> Send email
              </button>
              <span className="text-sm text-muted-foreground">
                or{" "}
                <a
                  href={contactLinks.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-ink underline-offset-4 hover:underline"
                >
                  book a 15-minute call
                </a>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
