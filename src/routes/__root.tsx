import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "André Rediss — Personal Trainer & Muay Thai Coach em Guaíba" },
      {
        name: "description",
        content:
          "Personal Trainer e Treinador de Muay Thai em Guaíba - RS. Mais de 27 anos de Artes Marciais.",
      },
      { name: "author", content: "André Rediss" },
      { property: "og:title", content: "André Rediss — Personal Trainer & Muay Thai Coach" },
      {
        property: "og:description",
        content:
          "Personal Trainer e Treinador de Muay Thai em Guaíba - RS. Mais de 27 anos de Artes Marciais.",
      },
      { property: "og:image", content: "https://andrerediss.com/logo.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "André Rediss — Personal Trainer & Muay Thai Coach" },
      {
        name: "twitter:description",
        content:
          "Personal Trainer e Treinador de Muay Thai em Guaíba - RS. Mais de 27 anos de Artes Marciais.",
      },
      { name: "twitter:image", content: "https://andrerediss.com/logo.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FCP9VR5LBD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FCP9VR5LBD');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "André Rediss",
              url: "https://andrerediss.com",
              image: "https://andrerediss.com/logo.png",
              jobTitle: "Personal Trainer & Muay Thai Coach",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Guaíba",
                addressRegion: "RS",
                addressCountry: "BR",
              },
              sameAs: ["https://instagram.com/andrerediss"],
              knowsAbout: [
                "Personal Trainer",
                "Muay Thai",
                "Musculação",
                "Artes Marciais",
                "Estética Corporal",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
