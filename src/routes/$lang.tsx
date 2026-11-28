import { createFileRoute, notFound } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";
import { OTHER_LOCALES } from "@/i18n";
import { homeHead } from "@/lib/seo";

/** Translated home pages: /fr, /es, /de, /pt. Any other single segment is a 404. */
export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!(OTHER_LOCALES as string[]).includes(params.lang)) throw notFound();
  },
  head: ({ params }) => homeHead(OTHER_LOCALES.find((l) => l === params.lang) ?? "en"),
  component: HomePage,
});
