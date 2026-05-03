"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  FolderGit2,
  Mail,
  FileCode,
  Shield,
  Smartphone,
  Bot,
  Music,
  ChevronRight,
  Zap,
  Database,
  GraduationCap,
} from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";

const navigation = [
  { name: "Início", href: "/#inicio", icon: Home },
  {
    name: "Sobre",
    href: "/#sobre",
    icon: User,
    children: [
      {
        name: "Energia Pecém",
        href: "/sobre/energia-pecem",
        icon: Zap,
      },
      {
        name: "Dataged",
        href: "/sobre/dataged",
        icon: Database,
      },
      {
        name: "Unifor",
        href: "/sobre/unifor",
        icon: GraduationCap,
      },
    ],
  },
  {
    name: "Projetos",
    href: "/#trabalho",
    icon: FolderGit2,
    children: [
      {
        name: "Attack & Defense Lab",
        href: "/projetos/attack-defense-lab",
        icon: Shield,
      },
      {
        name: "Valvecraft",
        href: "/projetos/valvecraft",
        icon: Music,
      },
      {
        name: "UniMenu",
        href: "/projetos/unimenu",
        icon: FileCode,
      },
      {
        name: "Fala-Pai",
        href: "/projetos/fala-pai",
        icon: Smartphone,
      },
      {
        name: "CaloteBot",
        href: "/projetos/calote-bot",
        icon: Bot,
      },
    ],
  },
  { name: "Contato", href: "/#contato", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();
  const activeSection = useActiveSection();

  // Auto-expand sections that have an active child on first load
  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const set = new Set<string>();
    for (const item of navigation) {
      if (item.children?.some((c) => pathname.startsWith(c.href))) {
        set.add(item.name);
      }
    }
    return set;
  });

  function toggleSection(name: string) {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function isActive(href: string): boolean {
    if (pathname === "/" && href.startsWith("/#")) {
      return activeSection === href.slice(2);
    }
    return pathname === href;
  }

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4">
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold text-primary">
              <span className="text-emerald-500">$</span> alan.dev
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-1">
            {navigation.map((item) => {
              const isOpen = openSections.has(item.name);
              const hasActiveChild =
                (item.children?.some((c) => pathname === c.href) ?? false) ||
                (item.href === "/#sobre" && pathname.startsWith("/sobre")) ||
                (item.href === "/#trabalho" &&
                  pathname.startsWith("/projetos"));
              const itemIsActive = isActive(item.href);

              return (
                <li key={item.name}>
                  {item.children ? (
                    <>
                      {/* Row with link + chevron toggle */}
                      <div
                        className={cn(
                          "flex items-center rounded-md text-sm font-medium leading-6 transition-colors",
                          itemIsActive || hasActiveChild
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                        )}
                      >
                        <Link
                          href={item.href}
                          onClick={() => toggleSection(item.name)}
                          className="flex flex-1 items-center gap-x-3 px-3 py-2 min-w-0"
                        >
                          <item.icon className="h-5 w-5 shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Link>
                        <button
                          onClick={() => toggleSection(item.name)}
                          className="px-2 py-2 rounded-r-md hover:text-foreground transition-colors"
                          aria-label={isOpen ? "Recolher" : "Expandir"}
                        >
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isOpen && "rotate-90",
                            )}
                          />
                        </button>
                      </div>

                      {/* Animated subitems via grid-template-rows trick */}
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-200 ease-in-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <ul className="overflow-hidden space-y-1 pl-8 pt-1">
                          {item.children.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "flex gap-x-3 rounded-md px-3 py-1.5 text-sm leading-6 transition-colors",
                                  pathname === subItem.href
                                    ? "text-foreground font-medium"
                                    : "text-muted-foreground hover:text-foreground",
                                )}
                              >
                                <subItem.icon className="h-4 w-4 shrink-0" />
                                <span className="truncate">{subItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex gap-x-3 rounded-md px-3 py-2 text-sm font-medium leading-6 transition-colors",
                        isActive(item.href)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Version */}
          <div className="mt-auto pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-emerald-500">v</span>1.0.0
            </p>
          </div>
        </nav>
      </div>
    </aside>
  );
}
