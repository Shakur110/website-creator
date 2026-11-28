import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { MobileCta, SiteHeader, SiteFooter } from "../components/site/Chrome";
import { EmailModalProvider } from "../components/site/contact-actions";
import { earlyScript } from "../components/site/theme";
import { BootIntro } from "../components/site/boot";
import { ScrollProgress, SpotlightTracker } from "../components/site/effects";
import { LocaleProvider, localeFromPath, LOCALE_META } from "../i18n";
import { siteGraphLd } from "../lib/seo";

function NotFoundComponent() {
  return (
    <section className="container-x pb-32 pt-40 md:pt-52">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl">
        This page has <em>moved on.</em>
      </h1>
      <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
        The page you're looking for doesn't exist or has been moved. Try the work, or get in touch.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/work" className="btn btn-primary">
          View my work
        </Link>
        <Link to="/" className="btn btn-outline">
          Back to home
        </Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <section className="container-x pb-32 pt-40 md:pt-52">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl">
        This page didn't <em>load.</em>
      </h1>
      <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
        Please try again, or head back to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn btn-primary"
        >
          Try again
        </button>
        <a href="/" className="btn btn-outline">
          Back to home
        </a>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Onjoko Tunde — Website Developer & AI Expert" },
      {
        name: "description",
        content:
          "Website developer and AI expert: websites, CRM automation and AI tools for growing businesses.",
      },
      { name: "author", content: "Onjoko Tunde" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#2351de" },
      { property: "og:title", content: "Onjoko Tunde — Website Developer & AI Expert" },
      {
        property: "og:description",
        content:
          "Website developer and AI expert: websites, CRM automation and AI tools for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { children: earlyScript },
      { type: "application/ld+json", children: JSON.stringify(siteGraphLd()) },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "alternate", type: "text/plain", title: "LLM summary", href: "/llms.txt" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const usePathLocale = () => localeFromPath(useRouterState({ select: (s) => s.location.pathname }));

function RootShell({ children }: { children: ReactNode }) {
  const locale = usePathLocale();
  return (
    <html lang={LOCALE_META[locale].hreflang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const locale = usePathLocale();

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider locale={locale}>
        <EmailModalProvider>
          <BootIntro />
          <ScrollProgress />
          <SpotlightTracker />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <SiteHeader />
          <main>
            <Outlet />
          </main>
          <SiteFooter />
          <MobileCta />
        </EmailModalProvider>
      </LocaleProvider>
    </QueryClientProvider>
  );
}
