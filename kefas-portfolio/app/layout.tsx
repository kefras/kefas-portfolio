import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";
import { siteConfig } from "@/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — ${siteConfig.title}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["Cloud Engineer","DevOps","AWS","Docker","Kubernetes","CI/CD","Nigeria","Kefas Etiku Francis"],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website", locale: "en_US", url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description, siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description, creator: "@Kefras1",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Person",
          name: siteConfig.name, url: siteConfig.url, jobTitle: siteConfig.title,
          email: `mailto:${siteConfig.email}`, telephone: siteConfig.phone,
          address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Miva Open University" },
          sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin, siteConfig.socials.twitter],
          knowsAbout: ["AWS","Docker","Kubernetes","CI/CD","DevOps","Cloud Engineering","Linux","Terraform"],
        }) }} />
      </head>
      <body className="min-h-screen" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
