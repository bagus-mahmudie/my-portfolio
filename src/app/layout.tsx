import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteMetadata, structuredData } from "@/lib/seo";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <link rel="preload" href="/images/hero.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="/fonts/baloo-paaji.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/open-sans.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
