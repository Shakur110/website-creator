import {
  Bot,
  CalendarCheck,
  Database,
  FileInput,
  Mail,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useT } from "@/i18n";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const steps: { label: string; icon: LucideIcon }[] = [
  { label: "Visitor", icon: MousePointerClick },
  { label: "Capture", icon: FileInput },
  { label: "CRM", icon: Database },
  { label: "Follow-up", icon: Mail },
  { label: "AI agent", icon: Bot },
  { label: "Booked", icon: CalendarCheck },
];

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Console-style strip at the top of the hero: a running timer and a lead moving
 * through the pipeline Onjoko builds (visitor → capture → CRM → follow-up → AI → booked).
 */
export function PipelineConsole() {
  const c = useT().console;
  const [active, setActive] = useState(steps.length - 1);
  const [seconds, setSeconds] = useState(0);
  const [pct, setPct] = useState(100);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setActive(0);
    let step = 0;
    const tick = setInterval(() => setSeconds((s) => s + 1), 1000);
    const flow = setInterval(() => {
      step = (step + 1) % (steps.length + 2); // two beats of rest on "Booked"
      setActive(Math.min(step, steps.length - 1));
    }, 900);
    return () => {
      clearInterval(tick);
      clearInterval(flow);
    };
  }, []);

  useEffect(() => {
    const target = Math.round(((active + 1) / steps.length) * 100);
    setPct(target);
  }, [active]);

  const time = `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor(seconds / 60) % 60)}:${pad(seconds % 60)}`;
  const booked = active === steps.length - 1;

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-navy font-mono text-[12px] text-white/80 shadow-xl shadow-navy/20"
      aria-label={c.aria}
      role="img"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-white/10 px-4 py-2.5">
        <span>
          <span className="text-sky">onjoko.os</span> <span className="text-white/40">//</span>{" "}
          {c.pipeline}
        </span>
        <span className="flex items-center gap-4">
          <span className="tabular-nums text-white/60">{time}</span>
          <span className="tabular-nums">{String(pct).padStart(3, "0")}%</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {c.open}
          </span>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3 sm:flex sm:items-center sm:gap-1.5">
        {steps.map((s, i) => {
          const on = i <= active;
          const current = i === active;
          return (
            <Fragment key={i}>
              {i > 0 && (
                <span
                  aria-hidden
                  className={`hidden h-px flex-1 transition-colors duration-500 sm:block ${on ? "bg-sky" : "bg-white/15"}`}
                />
              )}
              <span
                className={`flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1.5 transition-all duration-500 ${
                  current
                    ? booked
                      ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                      : "border-sky bg-sky/15 text-white"
                    : on
                      ? "border-sky/40 text-white/85"
                      : "border-white/10 text-white/35"
                }`}
              >
                <s.icon className="h-3.5 w-3.5" />
                {c.steps[i] ?? s.label}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

/** Pulsing "available" badge. */
export function AvailabilityBadge({ children }: { children: React.ReactNode }) {
  return (
    <p className="chip bg-card">
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {children}
    </p>
  );
}

/** Endless row of service pills. */
export function ServiceMarquee({ items }: { items: string[] }) {
  return (
    <div
      className="marquee relative overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      aria-label="Services"
    >
      <ul className="marquee-track marquee-reverse flex w-max gap-2.5">
        {[...items, ...items].map((s, i) => (
          <li
            key={`${s}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className="shrink-0 whitespace-nowrap rounded-full bg-brand-soft px-4 py-2 text-sm font-medium text-brand-ink"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Counts a number like "100+" up from 0 when it scrolls into view. */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || prefersReducedMotion() || !ref.current) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const run = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(run);
        };
        raf = requestAnimationFrame(run);
      },
      { threshold: 0.6 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}
