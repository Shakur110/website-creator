import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter } from "../components/site/Chrome";

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
      { title: "Onjoko Tunde — Website Designer" },
      {
        name: "description",
        content: "Independent website designer and digital solutions specialist.",
      },
      { name: "author", content: "Onjoko Tunde" },
      { property: "og:title", content: "Onjoko Tunde — Website Designer" },
      {
        property: "og:description",
        content: "Independent website designer and digital solutions specialist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Onjoko Tunde — Website Designer",
          description:
            "Freelance website design, redesign, ecommerce and landing pages on WordPress, Elementor and Wix for businesses in the US, UK, Canada and Australia.",
          founder: {
            "@type": "Person",
            name: "Onjoko Tunde",
            jobTitle: "Website Designer & Digital Solutions Specialist",
          },
          areaServed: ["US", "GB", "CA", "AU"],
          foundingDate: "2021",
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
