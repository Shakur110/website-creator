import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Runs in <head> before the page paints: applies the saved theme (white by default)
 * and skips the boot intro for visitors who already saw it this session.
 */
export const earlyScript = `(function(){try{var d=document.documentElement;if(localStorage.getItem('theme')==='dark')d.classList.add('dark');if(sessionStorage.getItem('booted')||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('booted');}catch(e){}})();`;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still switches for this visit */
    }
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-10 items-center gap-2 rounded-full border border-border px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      {dark ? "Dark" : "Light"}
    </button>
  );
}
