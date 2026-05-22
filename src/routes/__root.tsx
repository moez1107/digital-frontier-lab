import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AIChatbot } from "@/components/ai/AIChatbot";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <p className="font-display text-7xl text-gradient-gold">404</p>
      <h1 className="mt-4 font-display text-2xl text-foreground">Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">The page you are looking for has moved or never existed.</p>
      <Link to="/" className="mt-8 inline-flex items-center rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold hover:opacity-95">
        Return Home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again, or return to the homepage.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ITnIS Consulting",
  description: "Premium ICT & Information Security consultancy firm specializing in Data Centers, Smart Buildings, ISO 27001, and Cybersecurity Audits.",
  url: "/",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office #1, 5th Floor, 44-A, Civic Center, Bahria Town",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-333-5626269",
    email: "info@itnis.com",
    contactType: "customer service",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ITnIS Consulting | Premium ICT & Information Security in Islamabad" },
      { name: "description", content: "Designing & Securing the Digital Future. Premium ICT Consultancy, Information Security, Data Center Design and Smart Building solutions in Pakistan." },
      { name: "author", content: "ITnIS Consulting" },
      { property: "og:title", content: "ITnIS Consulting | Premium ICT & Information Security" },
      { property: "og:description", content: "Designing & Securing the Digital Future — Premium ICT and Information Security consultancy firm." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ITnIS Consulting" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a1428" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
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
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    </QueryClientProvider>
  );
}
