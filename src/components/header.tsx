"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";

const navigation = [
  { name: "Início", href: "/#inicio" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Contato", href: "/#contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection();

  function isActive(href: string): boolean {
    if (pathname === "/" && href.startsWith("/#")) {
      return activeSection === href.slice(2);
    }
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 lg:px-6">
        {/* Logo (mobile) */}
        <Link href="/" className="flex items-center gap-2 lg:hidden">
          <span className="font-mono text-lg font-bold text-primary">
            <span className="text-emerald-500">$</span> alan.dev
          </span>
        </Link>

        {/* Empty space for desktop (logo in sidebar) */}
        <div className="hidden lg:block" />

        {/* Desktop Navigation (breadcrumb style) */}
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navigation.map((item, index) => (
            <span key={item.name} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-muted-foreground">/</span>
              )}
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground",
                  isActive(item.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            </span>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a
              href="https://github.com/Alanlan21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a
              href="https://linkedin.com/in/alanregis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <nav className="flex flex-col p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
