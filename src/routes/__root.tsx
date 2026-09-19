import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-deep px-4 text-primary-foreground">
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
      <div
        className="absolute -bottom-24 left-1/2 size-[28rem] -translate-x-1/2 opacity-50"
        aria-hidden="true"
      />
      <div className="relative max-w-md text-center">
        <p className="eyebrow-light justify-center">Error 404</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-sm text-primary-foreground/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-background px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mint/70"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/25 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Filament Lifesciences Pvt Ltd | APIs & Life Sciences" },
      {
        name: "description",
        content:
          "Filament Lifesciences Pvt Ltd is an Indian life-sciences company supplying active pharmaceutical ingredients and intermediates, with a manufacturing base in Kotdwar, Uttarakhand.",
      },
      { property: "og:site_name", content: "Filament Lifesciences Pvt Ltd" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#00B8C8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-background">
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
      <Header />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
