"use client";

import { useState } from "react";
import { ProjectCard, type ProjectCardProps } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

type ProjectWithCategory = ProjectCardProps & { category?: string };

export function ProjetosPageContent() {
  const { t } = useLanguage();
  const projects = t.projectsPageData as ProjectWithCategory[];
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t.projectsPage.filterAll },
    { key: "security", label: t.projectsPage.filterSecurity },
    { key: "fullstack", label: t.projectsPage.filterFullstack },
    { key: "automacao", label: t.projectsPage.filterAutomation },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            /projetos
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{t.projectsPage.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t.projectsPage.descPre}{" "}
            <span className="text-foreground">{t.projectsPage.descArch}</span>,{" "}
            <span className="text-foreground">{t.projectsPage.descSec}</span>{" "}
            {t.projectsPage.descAnd}{" "}
            <span className="text-foreground">
              {t.projectsPage.descBackend}
            </span>
            .
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <Badge
              key={f.key}
              variant="outline"
              className={`cursor-pointer transition-colors ${
                activeFilter === f.key
                  ? "bg-emerald-500/15 border-emerald-500/60 text-emerald-400"
                  : "hover:bg-accent"
              }`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...(project as ProjectCardProps)}
            />
          ))}
        </div>

        {/* More coming */}
        <div className="mt-12 p-6 rounded-lg border border-dashed border-border text-center">
          <p className="text-muted-foreground">
            <span className="text-emerald-500 font-mono">+</span>{" "}
            {t.projectsPage.moreComing}
          </p>
        </div>
      </main>
    </div>
  );
}
