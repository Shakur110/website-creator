// Social share previews (X, LinkedIn, WhatsApp, Facebook, Slack).
// Every page adds shareTags(...) to its head so links show the preview image.

export const SITE_URL = "https://onjokoshakur.vercel.app";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const shareTags = (path: string, title: string, description: string) => [
  { property: "og:url", content: `${SITE_URL}${path === "/" ? "" : path}` },
  { property: "og:site_name", content: "Onjoko Tunde" },
  { property: "og:image", content: OG_IMAGE },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:type", content: "image/png" },
  {
    property: "og:image:alt",
    content: "Onjoko Tunde: Websites & AI automations that turn visitors into clients.",
  },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: OG_IMAGE },
];
