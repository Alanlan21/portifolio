"use client";

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
} from "lucide-react";

const navigation = [
  { name: "Início", href: "/", icon: Home },
  { name: "Sobre", href: "/sobre", icon: User },
  {
    name: "Projetos",
    href: "/projetos",
    icon: FolderGit2,
    children: [
      {
        name: "NestJS Attack & Defense Lab",
        href: "/projetos/nestjs-attack-defense-lab",
        icon: Shield,
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
        name: "Calote-bot",
        href: "/projetos/calote-bot",
        icon: Bot,
      },
    ],
  },
  { name: "Contato", href: "/contato", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

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
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex gap-x-3 rounded-md px-3 py-2 text-sm font-medium leading-6 transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </Link>

                {/* Subitems */}
                {item.children && (
                  <ul className="mt-1 space-y-1 pl-8">
                    {item.children.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "group flex gap-x-3 rounded-md px-3 py-1.5 text-sm leading-6 transition-colors",
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
                )}
              </li>
            ))}
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
