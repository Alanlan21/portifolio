import type { Metadata } from "next";
import {
  Geist,
  Hanken_Grotesk,
  Spline_Sans_Mono,
} from "next/font/google";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ViewTransitions } from "@/components/view-transitions";
import { Preloader } from "@/components/preloader";
import "./globals.css";

// Tipografia — Geist no display: grotesco limpo com identidade dev real.
// Hanken Grotesk no corpo (humanista legível), Spline Sans Mono no terminal.
const fontDisplay = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const fontSans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://alanregis.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alan Regis | Software Developer",
  description:
    "Portfolio de Alan Regis — desenvolvedor backend com foco em arquitetura, segurança e sistemas distribuídos. NestJS, TypeScript, Python e Docker.",
  keywords: [
    "backend developer",
    "nestjs",
    "typescript",
    "python",
    "docker",
    "portfolio",
    "Alan Regis",
    "software engineer",
    "fortaleza",
  ],
  authors: [{ name: "Alan Regis", url: siteUrl }],
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  openGraph: {
    title: "Alan Regis | Software Developer",
    description:
      "Desenvolvedor backend especializado em arquitetura de sistemas, segurança e APIs críticas em produção.",
    type: "website",
    url: siteUrl,
    locale: "pt_BR",
    siteName: "Alan Regis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Regis | Software Developer",
    description:
      "Desenvolvedor backend especializado em arquitetura de sistemas, segurança e APIs críticas em produção.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alan Regis",
  url: siteUrl,
  jobTitle: "Software Developer",
  description:
    "Desenvolvedor backend especializado em NestJS, TypeScript, Python e arquitetura de sistemas distribuídos.",
  sameAs: ["https://github.com/Alanlan21", "https://linkedin.com/in/alanregis"],
  knowsAbout: [
    "NestJS",
    "TypeScript",
    "Python",
    "Docker",
    "REST APIs",
    "PostgreSQL",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="scroll-progress" aria-hidden="true" />
        <Providers>
          <Preloader />
          <ViewTransitions />
          <Sidebar />
          <div className="lg:pl-64">
            <div className="lg:hidden">
              <Header />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
