import { useEffect, useRef, useState } from "react";

/** Lets every `.spotlight` card glow where the cursor is. One listener for the whole site. */
export function SpotlightTracker() {
  useEffect(() => {
    const on = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", on, { passive: true });
    return () => window.removeEventListener("pointermove", on);
  }, []);
  return null;
}

/** Thin blue bar at the very top showing how far down the page you are. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        className="h-full origin-left bg-gradient-to-r from-brand to-sky"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

/** Splits a headline into words that rise in one after another. */
export function WordRise({
  text,
  accent,
  delay = 0,
}: {
  text: string;
  accent?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const accentWords = accent ? accent.split(" ") : [];
  return (
    <span className="word-rise" aria-label={accent ? `${text} ${accent}` : text}>
      {[...words, ...accentWords].map((w, i) => (
        <span
          key={i}
          aria-hidden
          className={i >= words.length ? "text-brand-ink" : undefined}
          style={{ animationDelay: `${delay + i * 70}ms` }}
        >
          {w}
          {" "}
        </span>
      ))}
    </span>
  );
}

/** Muted looping video that starts itself, pauses off-screen and respects reduced motion. */
export function AutoVideo(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) void v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} muted loop playsInline preload="metadata" {...props} />;
}
