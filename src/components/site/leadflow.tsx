import { Bot, CalendarCheck, Database, FileInput, Mail, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BookCallButton } from "@/components/site/contact-actions";

const timeline = [
  {
    t: "00:00",
    icon: FileInput,
    title: "Form submitted",
    sub: "A visitor asks for a quote on the website",
  },
  {
    t: "00:05",
    icon: MessageSquare,
    title: "Instant text reply",
    sub: "Sent automatically, day or night",
  },
  {
    t: "00:06",
    icon: Database,
    title: "Added to the CRM",
    sub: "New lead · tagged “Website enquiry”",
  },
  { t: "00:30", icon: Mail, title: "Welcome email", sub: "First of a short follow-up sequence" },
  {
    t: "01:10",
    icon: Bot,
    title: "AI assistant replies",
    sub: "Answers questions, offers real time slots",
  },
  {
    t: "02:40",
    icon: CalendarCheck,
    title: "Appointment booked",
    sub: "On your calendar, reminder scheduled",
  },
];

type Msg = { from: "bot" | "lead"; text: ReactNode; at: number };
const chat: Msg[] = [
  {
    from: "bot",
    at: 1,
    text: "Hi Sarah, thanks for your enquiry! When would suit you for a quick consultation?",
  },
  { from: "lead", at: 4, text: "Thursday afternoon if possible" },
  { from: "bot", at: 4, text: "Great, I have Thu 3:00 PM or 4:30 PM. Which works for you?" },
  { from: "lead", at: 5, text: "3pm please" },
  {
    from: "bot",
    at: 5,
    text: (
      <>
        Booked for Thu 3:00 PM <span className="text-emerald-500">✓</span> You'll get a reminder the
        day before.
      </>
    ),
  },
];

const STEP_MS = 1500;

/**
 * Animated example of the automation Onjoko builds: a lead moves from form to booked
 * call while the conversation plays on a phone. Runs while on screen, then loops.
 */
export function LeadFlowDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(timeline.length - 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    let s = -1;
    const start = () => {
      if (timer) return;
      s = -1;
      setStep(-1);
      timer = setInterval(() => {
        s = s >= timeline.length + 2 ? -1 : s + 1; // hold on "booked" for a few beats, then loop
        setStep(Math.min(s, timeline.length - 1));
      }, STEP_MS);
    };
    const stop = () => {
      clearInterval(timer);
      timer = undefined;
    };
    const io = new IntersectionObserver(([e]) => (e?.isIntersecting ? start() : stop()), {
      threshold: 0.35,
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  const shown = chat.filter((m) => m.at <= step);
  // Show "typing…" just before the assistant's next message arrives.
  const typing = chat.some((m) => m.from === "bot" && m.at === step + 1);
  const booked = step >= timeline.length - 1;

  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-12 lg:items-center">
      {/* Timeline */}
      <ol className="space-y-3 lg:col-span-6">
        {timeline.map((s, i) => {
          const done = i <= step;
          const now = i === step;
          return (
            <li
              key={s.title}
              className={`spotlight flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500 ${
                now
                  ? "border-brand-ink/60 bg-card shadow-lg shadow-brand/10"
                  : done
                    ? "border-border bg-card"
                    : "border-border/60 bg-transparent opacity-45"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${
                  done
                    ? i === timeline.length - 1
                      ? "bg-emerald-500 text-white"
                      : "bg-brand text-white"
                    : "bg-brand-soft text-brand-ink"
                }`}
              >
                <s.icon className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{s.title}</span>
                <span className="block text-sm text-muted-foreground">{s.sub}</span>
              </span>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">{s.t}</span>
            </li>
          );
        })}
      </ol>

      {/* Phone */}
      <div className="lg:col-span-5 lg:col-start-8">
        <div className="mx-auto w-full max-w-[22rem] rounded-[2.6rem] border-[10px] border-navy bg-navy shadow-2xl shadow-navy/30">
          <div className="overflow-hidden rounded-[1.9rem] bg-background">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                <Bot className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Booking assistant</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> online 24/7
                </span>
              </span>
            </div>
            <div className="flex h-[22rem] flex-col justify-end gap-2.5 p-4">
              {shown.map((m, i) => (
                <p
                  key={i}
                  className={`animate-rise max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                    m.from === "bot"
                      ? "self-start rounded-bl-md bg-surface text-foreground"
                      : "self-end rounded-br-md bg-brand text-white"
                  }`}
                >
                  {m.text}
                </p>
              ))}
              {typing && (
                <span
                  className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-surface px-4 py-3"
                  aria-hidden
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: `${d * 120}ms` }}
                    />
                  ))}
                </span>
              )}
            </div>
            <div
              className={`flex items-center justify-between border-t border-border px-5 py-3 text-xs transition-colors duration-500 ${
                booked
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "text-muted-foreground"
              }`}
            >
              <span className="font-mono uppercase tracking-[0.12em]">CRM status</span>
              <span className="font-semibold">
                {booked ? "Booked ✓" : step >= 2 ? "New lead" : "Waiting…"}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Example conversation. Every business gets its own wording and booking rules.
        </p>
        <div className="mt-5 flex justify-center">
          <BookCallButton label="Get this for my business" />
        </div>
      </div>
    </div>
  );
}
