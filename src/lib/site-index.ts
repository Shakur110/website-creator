// Machine-readable views of the site: sitemap.xml for search engines and llms.txt for
// AI assistants (ChatGPT, Claude, Perplexity, Gemini). Both are built on request, so new
// blog posts appear the day they publish.

import { homePath, LOCALE_META, LOCALES } from "@/i18n";
import { faqs } from "@/lib/faqs";
import { contactLinks, projects, services, siteStats, toolGroups } from "@/lib/projects";
import { publishedPosts } from "@/lib/posts";
import { absUrl } from "@/lib/seo";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const today = () => new Date().toISOString().slice(0, 10);

export function sitemapXml() {
  const homeAlternates = [
    ...LOCALES.map(
      (l) =>
        `<xhtml:link rel="alternate" hreflang="${LOCALE_META[l].hreflang}" href="${absUrl(homePath(l))}"/>`,
    ),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${absUrl("/")}"/>`,
  ].join("");
  const posts = publishedPosts();
  const latest = posts[0]?.date ?? today();

  const entries: { path: string; lastmod?: string; alt?: string; priority: string }[] = [
    ...LOCALES.map((l) => ({
      path: homePath(l),
      lastmod: latest,
      alt: homeAlternates,
      priority: l === "en" ? "1.0" : "0.9",
    })),
    { path: "/work", priority: "0.8" },
    ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: "0.6" })),
    { path: "/blog", lastmod: latest, priority: "0.8" },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date, priority: "0.7" })),
  ];

  const body = entries
    .map(
      (e) =>
        `<url><loc>${esc(absUrl(e.path))}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}<priority>${e.priority}</priority>${e.alt ?? ""}</url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

/** https://llmstxt.org — a plain summary of who Onjoko is, what he offers and where to read more. */
export function llmsTxt() {
  const posts = publishedPosts();
  const platforms = toolGroups[0]?.items.join(", ") ?? "";
  return `# Onjoko Tunde — Website Developer & AI Expert

> Onjoko Tunde is a freelance website developer and AI expert who has built ${siteStats.websites} websites since ${siteStats.since}. He builds WordPress, Elementor, Shopify and Wix websites and connects them to CRM automations and AI tools, so every lead is captured, followed up and booked. He works remotely from Lagos, Nigeria (GMT+1) with businesses in the United States, United Kingdom, Canada and Australia.

## Key facts

- Name: Onjoko Tunde
- Role: Website developer and AI expert (websites, Shopify, CRM automation, AI tools)
- Experience: ${siteStats.websites} websites delivered since ${siteStats.since}
- Platforms: ${platforms}
- Based in: Lagos, Nigeria; works remotely
- Clients in: United States, United Kingdom, Canada, Australia
- Website languages: English, French, Spanish, German, Portuguese
- Email: ${contactLinks.email}
- Phone / WhatsApp: ${contactLinks.phone}
- Book a call: ${contactLinks.calendly}

## Services

${services.map((s) => `- **${s.title}**: ${s.description} Includes: ${s.includes.join("; ")}.`).join("\n")}

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Pages

- [Home](${absUrl("/")}): services, about, process, FAQ and contact
- [Work](${absUrl("/work")}): featured website projects with live links
- [Blog](${absUrl("/blog")}): a new practical article every day
- Translated home pages: ${LOCALES.filter((l) => l !== "en")
    .map((l) => `[${LOCALE_META[l].native}](${absUrl(homePath(l))})`)
    .join(", ")}

## Featured projects

${projects.map((p) => `- [${p.title}](${absUrl(`/work/${p.slug}`)}): ${p.category}${p.liveUrl ? ` (live site: ${p.liveUrl})` : ""}`).join("\n")}

## Articles

${posts.map((p) => `- [${p.title}](${absUrl(`/blog/${p.slug}`)}) (${p.date}): ${p.excerpt}`).join("\n")}
`;
}
