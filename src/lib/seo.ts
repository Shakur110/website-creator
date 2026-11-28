// Search, AI-search and social share metadata shared by every page.
// Every page adds shareTags(...) to its head so links show the preview image,
// and canonicalLink(...) so search engines index one URL per page.

import { dicts, homePath, LOCALE_META, LOCALES, type Locale } from "@/i18n";
import { contactLinks, portrait, services, siteStats, toolGroups } from "@/lib/projects";

export const SITE_URL = "https://www.onjokoshakur.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Absolute URL for a site path ("/" → "https://www.onjokoshakur.com/"). */
export const absUrl = (path: string) => `${SITE_URL}${path}`;

export const canonicalLink = (path: string) => ({ rel: "canonical", href: absUrl(path) });

export const shareTags = (path: string, title: string, description: string) => [
  { property: "og:url", content: absUrl(path) },
  { property: "og:site_name", content: "Onjoko Tunde" },
  { property: "og:image", content: OG_IMAGE },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:type", content: "image/png" },
  {
    property: "og:image:alt",
    content:
      "Onjoko Tunde, website developer and AI expert: websites & AI automations that turn visitors into clients.",
  },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: OG_IMAGE },
];

/** <head> for the home page in one language, with hreflang links to every other language. */
export function homeHead(locale: Locale) {
  const h = dicts[locale].home;
  const path = homePath(locale);
  const url = absUrl(path);
  return {
    meta: [
      { title: h.title },
      { name: "description", content: h.description },
      { property: "og:title", content: h.title },
      { property: "og:description", content: h.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: LOCALE_META[locale].og },
      ...LOCALES.filter((l) => l !== locale).map((l) => ({
        property: "og:locale:alternate",
        content: LOCALE_META[l].og,
      })),
      { name: "twitter:card", content: "summary_large_image" },
      ...shareTags(path, h.title, h.description),
    ],
    links: [
      canonicalLink(path),
      ...LOCALES.map((l) => ({
        rel: "alternate",
        hrefLang: LOCALE_META[l].hreflang,
        href: absUrl(homePath(l)),
      })),
      { rel: "alternate", hrefLang: "x-default", href: absUrl("/") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: h.title,
              description: h.description,
              inLanguage: LOCALE_META[locale].hreflang,
              isPartOf: { "@id": WEBSITE_ID },
              about: { "@id": PERSON_ID },
              primaryImageOfPage: OG_IMAGE,
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              inLanguage: LOCALE_META[locale].hreflang,
              mainEntity: h.faq.items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  };
}

/** Breadcrumb trail as JSON-LD, e.g. [["Blog", "/blog"], [post.title, "/blog/slug"]]. */
export const breadcrumbLd = (trail: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"] as [string, string], ...trail].map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absUrl(path),
  })),
});

/**
 * Who Onjoko is, what he offers and where: one connected graph (Person, ProfessionalService,
 * WebSite) on every page, so Google and AI answer engines describe him consistently.
 */
export const siteGraphLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Onjoko Tunde",
      alternateName: "Onjoko Shakur",
      jobTitle: "Website Developer & AI Expert",
      description: `Freelance website developer and AI expert. ${siteStats.websites} websites since ${siteStats.since}; WordPress, Shopify and Wix websites connected to CRM automation and AI tools.`,
      url: absUrl("/"),
      image: portrait ? absUrl(portrait) : OG_IMAGE,
      email: `mailto:${contactLinks.email}`,
      telephone: contactLinks.phone,
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      knowsAbout: [
        "Website development",
        "Web design",
        "WordPress",
        "Elementor",
        "Shopify",
        "WooCommerce",
        "Wix",
        "CRM automation",
        "Marketing automation",
        "Lead generation",
        "AI chatbots",
        "AI workflow automation",
        "Search engine optimization",
      ],
      knowsLanguage: ["en"],
      worksFor: { "@id": BUSINESS_ID },
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Onjoko Tunde — Website Developer & AI Expert",
      url: absUrl("/"),
      image: OG_IMAGE,
      logo: absUrl("/favicon.ico"),
      description:
        "Website development and redesign on WordPress, Elementor, Shopify and Wix, Shopify store help, CRM setup and automation, and AI tools for businesses in the US, UK, Canada and Australia.",
      founder: { "@id": PERSON_ID },
      foundingDate: siteStats.since,
      email: contactLinks.email,
      telephone: contactLinks.phone,
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
      ],
      availableLanguage: ["English", "French", "Spanish", "German", "Portuguese"],
      knowsAbout: toolGroups[0]?.items ?? [],
      sameAs: [contactLinks.calendly, contactLinks.linkedin, contactLinks.fiverr].filter(Boolean),
      potentialAction: {
        "@type": "ScheduleAction",
        name: "Book a free call",
        target: contactLinks.calendly,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            provider: { "@id": BUSINESS_ID },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: absUrl("/"),
      name: "Onjoko Tunde",
      description:
        "Website developer and AI expert: websites, Shopify, CRM automation and AI tools.",
      inLanguage: LOCALES.map((l) => LOCALE_META[l].hreflang),
      publisher: { "@id": PERSON_ID },
    },
  ],
});
