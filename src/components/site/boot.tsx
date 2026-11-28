import {
  Bot,
  CalendarCheck,
  Database,
  FileInput,
  Mail,
  Volume2,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";

const steps: { label: string; icon: LucideIcon }[] = [
  { label: "Capture", icon: FileInput },
  { label: "CRM", icon: Database },
  { label: "Follow-up", icon: Mail },
  { label: "AI agent", icon: Bot },
  { label: "Booked", icon: CalendarCheck },
];

const DURATION = 2600; // ms for 0 → 100%

/** Tiny synth "blip" with the Web Audio API (no audio files to download). */
function blip(ctx: AudioContext | null, freq: number, len = 0.07) {
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + len);
  o.connect(g).connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + len + 0.02);
}

/**
 * Boot sequence shown once per visit before the site: "Welcome to", system boot line
 * with a timer, the pipeline lighting up, a 000% → 100% counter, then OPEN.
 * Hidden instantly (no flash) for returning visitors and reduced-motion users.
 */
export function BootIntro() {
  const [pct, setPct] = useState(0);
  const [ms, setMs] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const [sound, setSound] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  const lastStep = useRef(-1);

  const finish = () => {
    if (leaving) return;
    setLeaving(true);
    try {
      sessionStorage.setItem("booted", "1");
    } catch {
      /* ignore */
    }
    setTimeout(() => {
      setGone(true);
      document.documentElement.classList.add("booted");
      document.body.style.overflow = "";
    }, 700);
  };

  useEffect(() => {
    if (document.documentElement.classList.contains("booted")) {
      setGone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const run = (t: number) => {
      const el = t - start;
      setMs(el);
      const p = Math.min(100, Math.round((el / DURATION) * 100));
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = Math.min(steps.length - 1, Math.floor((pct / 100) * steps.length));
  const open = pct >= 100;

  useEffect(() => {
    if (active !== lastStep.current) {
      lastStep.current = active;
      if (sound) blip(audio.current, 440 + active * 110);
    }
  }, [active, sound]);

  useEffect(() => {
    if (!open) return;
    if (sound) {
      blip(audio.current, 880, 0.18);
      setTimeout(() => blip(audio.current, 1320, 0.25), 120);
    }
    const t = setTimeout(finish, 1400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (gone) return null;

  const s = Math.floor(ms / 1000);
  const time = `00:00:${String(s).padStart(2, "0")}:${String(Math.floor((ms % 1000) / 10)).padStart(2, "0")}`;

  return (
    <div
      className={`boot-intro fixed inset-0 z-[100] flex flex-col bg-navy text-white transition-all duration-700 ease-[cubic-bezier(.7,0,.3,1)] ${
        leaving ? "pointer-events-none -translate-y-full opacity-0" : ""
      }`}
      role="dialog"
      aria-label="Welcome"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand/50 blur-3xl"
      />
      <div className="relative flex items-center justify-between px-6 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 md:px-10">
        <button
          type="button"
          onClick={() => {
            if (!audio.current) {
              const Ctx =
                window.AudioContext ??
                (window as unknown as { webkitAudioContext: typeof AudioContext })
                  .webkitAudioContext;
              audio.current = Ctx ? new Ctx() : null;
            }
            setSound((v) => !v);
          }}
          className="flex items-center gap-2 transition-colors hover:text-white"
          aria-pressed={sound}
        >
          {sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          {sound ? "Sound on" : "Best with sound on"}
        </button>
        <button type="button" onClick={finish} className="transition-colors hover:text-white">
          Skip intro →
        </button>
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Welcome to</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl md:text-8xl">
          ONJOKO TUNDE
        </h1>
        <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-4 font-mono text-[12px] backdrop-blur md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-white/70">
            <span>
              <span className="text-sky">onjoko.os</span> <span className="text-white/40">//</span>{" "}
              system boot
            </span>
            <span className="flex items-center gap-4 tabular-nums">
              <span>{time}</span>
              <span className="text-white">{String(pct).padStart(3, "0")}%</span>
              <span
                className={`flex items-center gap-1.5 ${open ? "text-emerald-400" : "text-white/40"}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${open ? "animate-pulse bg-emerald-400" : "bg-white/30"}`}
                />
                {open ? "OPEN" : "BOOTING"}
              </span>
            </span>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-sky"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-1.5">
            {steps.map((st, i) => {
              const on = i <= active;
              const last = i === steps.length - 1;
              return (
                <Fragment key={st.label}>
                  {i > 0 && (
                    <span
                      aria-hidden
                      className={`hidden h-px flex-1 transition-colors duration-300 sm:block ${on ? "bg-sky" : "bg-white/15"}`}
                    />
                  )}
                  <span
                    className={`flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 transition-all duration-300 ${
                      on
                        ? last && open
                          ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                          : "border-sky bg-sky/15 text-white"
                        : "border-white/10 text-white/35"
                    }`}
                  >
                    <st.icon className="h-3.5 w-3.5" />
                    {st.label}
                  </span>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div
          className={`mt-8 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
        >
          <button type="button" onClick={finish} className="btn btn-light">
            Enter the site →
          </button>
        </div>
      </div>
      <p className="relative px-6 pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 md:px-10">
        Websites · Shopify · CRM · AI automation
      </p>
    </div>
  );
}
