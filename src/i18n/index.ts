import { createContext, createElement, useContext, type ReactNode } from "react";
import { en, type Dict } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { de } from "./de";
import { pt } from "./pt";

export type { Dict };

/** English lives at "/", every other language at "/<code>". */
export const LOCALES = ["en", "fr", "es", "de", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const OTHER_LOCALES = LOCALES.filter((l) => l !== "en") as Exclude<Locale, "en">[];

export const LOCALE_META: Record<Locale, { native: string; hreflang: string; og: string }> = {
  en: { native: "English", hreflang: "en", og: "en_US" },
  fr: { native: "Français", hreflang: "fr", og: "fr_FR" },
  es: { native: "Español", hreflang: "es", og: "es_ES" },
  de: { native: "Deutsch", hreflang: "de", og: "de_DE" },
  pt: { native: "Português", hreflang: "pt", og: "pt_BR" },
};

export const dicts: Record<Locale, Dict> = { en, fr, es, de, pt };

export const isLocale = (v: string | undefined): v is Locale =>
  !!v && (LOCALES as readonly string[]).includes(v);

/** "/fr", "/fr/..." → "fr"; anything else → "en". */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return isLocale(first) ? first : "en";
}

export const homePath = (l: Locale) => (l === "en" ? "/" : `/${l}`);

/** Fills {name} placeholders. */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`));

const LocaleContext = createContext<Locale>("en");

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return createElement(LocaleContext.Provider, { value: locale }, children);
}

export const useLocale = () => useContext(LocaleContext);
export const useT = () => dicts[useLocale()];
