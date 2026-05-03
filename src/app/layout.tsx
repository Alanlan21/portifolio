import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Regis | Backend Developer",
  description:
    "Portfolio de desenvolvimento backend com foco em arquitetura, seguranca e sistemas distribuidos. NestJS, TypeScript, Python e Docker.",
  keywords: [
    "backend",
    "developer",
    "nestjs",
    "typescript",
    "python",
    "docker",
    "portfolio",
  ],
  authors: [{ name: "Alan Regis" }],
  openGraph: {
    title: "Alan Regis | Backend Developer",
    description:
      "Portfolio de desenvolvimento backend com foco em arquitetura, seguranca e sistemas distribuidos.",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <Sidebar />
          <div className="lg:pl-64">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
