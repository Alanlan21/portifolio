"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { KittyTerminal } from "@/components/kitty-terminal";
import { TechStack } from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContributionGraph } from "@/components/contribution-graph";
import { TextScramble } from "@/components/text-scramble";
import { Magnetic } from "@/components/magnetic";
import { GlowCard } from "@/components/glow-card";
import { useLanguage } from "@/lib/i18n";

const skills = {
  backend: [
    "Node.js",
    "NestJS",
    "TypeScript",
    "Java",
    "Spring",
    "MySQL",
    "PostgreSQL",
  ],
  frontend: ["React", "Next.js", "React Native", "Tailwind CSS"],
  devops: ["Docker", "Git", "GitHub Actions", "AWS"],
};

export default function Home() {
  const { lang, t } = useLanguage();
  const projects = t.projectsData;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden min-h-[85vh] flex items-center"
      >
        {/* Layered backgrounds */}
        <div className="absolute inset-0 hero-gradient-overlay bg-linear-to-b from-zinc-950 via-background to-background" />
        <div className="absolute inset-0 aurora" />
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        {/* Connecting glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 pointer-events-none">
          <div className="absolute inset-0 hero-center-glow" />
        </div>

        {/* Hero — identity + terminal */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.75fr] gap-10 xl:gap-12 items-center">
            {/* Identity */}
            <div className="flex flex-col gap-7 lg:gap-8">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                <Image
                  src="/assets/foto-perfil.jpg"
                  alt="Alan Regis"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <TextScramble
                    text="Alan Regis"
                    className="text-gradient-hero"
                    delay={400}
                  />
                </h1>
                <p className="mt-2 text-2xl font-medium text-zinc-500 sm:text-3xl">
                  Software Developer
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Magnetic strength={0.2}>
                  <Button
                    asChild
                    size="lg"
                    className="gap-2 px-6 bg-emerald-600 hover:bg-emerald-500 text-white btn-glow"
                  >
                    <Link href="/#trabalho">
                      {t.home.exploreCta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2 px-5 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  >
                    <a
                      href={
                        lang === "en"
                          ? "/cv-alan-regis-en.pdf"
                          : "/cv-alan-regis.pdf"
                      }
                      download
                    >
                      <Download className="h-4 w-4" />
                      {t.home.cv}
                    </a>
                  </Button>
                </Magnetic>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Alanlan21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/alanregis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:alanregisps@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Terminal */}
            <GlowCard
              tilt={false}
              className="bento-card bento-terminal p-0 overflow-hidden"
            >
              <KittyTerminal skills={skills} />
            </GlowCard>
          </div>
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 fade-bottom pointer-events-none" />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Sobre Section */}
      <section id="sobre" className="relative section-glow-emerald">
        <div className="absolute inset-0 bg-grid-lines opacity-50" />
        <div className="relative max-w-350 2xl:max-w-400 mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          <ScrollReveal className="mb-10 lg:mb-14">
            <div className="w-8 h-0.5 bg-emerald-500/70 mb-3 rounded-full" />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              {t.home.aboutTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal
            delay={100}
            className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"
          >
            {/* Stack */}
            <div className="space-y-6">
              <div>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-6">
                  {t.home.aboutDesc}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  {t.home.stackMain}
                </p>
                <TechStack
                  technologies={[
                    "Node.js",
                    "NestJS",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "MySQL",
                  ]}
                  variant="flow"
                />
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  {t.home.stackAlso}
                </p>
                <TechStack
                  technologies={[
                    "Java",
                    "Spring",
                    "React Native",
                    "Docker",
                    "PostgreSQL",
                    "AWS",
                    "TypeORM",
                    "GitHub Actions",
                  ]}
                  variant="flow"
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-5">
                {t.home.careerTitle}
              </p>
              <div className="relative">
                {/* linha vertical */}
                <div className="absolute left-4.75 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

                <div className="space-y-0">
                  {t.timeline.map((item, i) => (
                    <div
                      key={item.slug}
                      className="relative flex gap-4 pl-10 pb-6 last:pb-0"
                    >
                      {/* dot */}
                      <div
                        className={`absolute left-3.5 top-3.5 -translate-x-1/2 z-10 flex items-center justify-center ${item.current ? "w-4 h-4" : "w-3 h-3"}`}
                      >
                        {item.current ? (
                          <>
                            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500/40 animate-ping" />
                            <span className="relative w-3 h-3 rounded-full bg-emerald-500" />
                          </>
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-300 dark:bg-zinc-950" />
                        )}
                      </div>

                      <Link
                        href={`/sobre/${item.slug}`}
                        className={`flex gap-3 flex-1 rounded-xl border p-4 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group ${
                          item.current
                            ? "border-emerald-500/20 bg-emerald-50/60 dark:bg-zinc-900/60"
                            : "border-zinc-200 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/20"
                        }`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-800/60 bg-white">
                          <Image
                            src={item.logo}
                            alt={item.org}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-0.5">
                            <span className="text-sm font-semibold text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {item.title}
                            </span>
                            <Badge
                              variant="outline"
                              className={`text-[10px] font-mono ${item.current ? "border-emerald-500/30 text-emerald-400" : ""}`}
                            >
                              {item.type === "work"
                                ? t.experienceType.work
                                : item.type === "estagio"
                                  ? t.experienceType.estagio
                                  : t.experienceType.education}
                            </Badge>
                          </div>
                          <p className="text-xs text-zinc-500">
                            {item.org} · {item.period}
                          </p>
                          <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-zinc-700 group-hover:text-zinc-500 shrink-0 self-center transition-colors" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* GitHub activity */}
          <ScrollReveal delay={200} className="mt-10">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/60">
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 text-zinc-500 dark:text-zinc-400 fill-current"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <a
                  href="https://github.com/Alanlan21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors font-mono"
                >
                  github.com/Alanlan21
                </a>
              </div>
              <div className="bg-white dark:bg-[#0d1117] px-5 py-5">
                <ContributionGraph username="Alanlan21" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Projects Section */}
      <section id="trabalho" className="relative section-glow-violet">
        <div className="absolute inset-0 bg-linear-to-b from-transparent dark:via-zinc-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-grid-lines opacity-50" />

        <div className="relative max-w-350 2xl:max-w-400 mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          {/* Section header */}
          <ScrollReveal className="flex items-end justify-between mb-10 lg:mb-14">
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-violet-500/70 mb-3 rounded-full" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                {t.home.projectsTitle}
              </h2>
              <p className="text-zinc-500 text-sm lg:text-base max-w-md">
                {t.home.projectsSubtitle}
              </p>
            </div>
            <Link
              href="/projetos"
              className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group"
            >
              <span>{t.home.viewAll}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

          {/* Projects list */}
          <ScrollReveal delay={100} className="space-y-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                className="group project-item block"
              >
                <div className="project-item-inner">
                  {/* Main row - always visible */}
                  <div className="project-main">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Project info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                            {project.name}
                          </h3>
                          <Badge
                            variant="outline"
                            className={`text-[10px] uppercase tracking-wider ${
                              project.categoryColor === "emerald"
                                ? "text-emerald-400/80 border-emerald-500/30"
                                : project.categoryColor === "violet"
                                  ? "text-violet-400/80 border-violet-500/30"
                                  : project.categoryColor === "amber"
                                    ? "text-amber-400/80 border-amber-500/30"
                                    : "text-cyan-400/80 border-cyan-500/30"
                            }`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm truncate">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Tech stack - visible on lg */}
                    <div className="hidden lg:flex items-center gap-2 shrink-0">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-200/80 dark:bg-zinc-800/50 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[11px] font-mono text-zinc-600">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </div>

                  {/* Expanded content - visible on hover */}
                  <div className="project-detail">
                    <div className="pt-3 pb-1">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.highlights[0]}
                        <span className="text-zinc-400 dark:text-zinc-600 mx-2">
                          ·
                        </span>
                        {project.decision}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollReveal>

          {/* CTA contato */}
          <div className="mt-10 flex items-center gap-2 text-sm text-zinc-500">
            <span>{t.home.ctaProjectQ}</span>
            <Link
              href="/#contato"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 group"
            >
              {t.home.ctaProjectLink}
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile: Ver todos link */}
          <Link
            href="/projetos"
            className="sm:hidden flex items-center justify-center gap-2 mt-6 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <span>{t.home.viewAllProjects}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Contato Section */}
      <section id="contato" className="relative section-glow-neutral">
        <div className="absolute inset-0 bg-grid-lines opacity-35" />
        <div className="relative max-w-350 2xl:max-w-400 mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          <ScrollReveal className="mb-10">
            <div className="w-8 h-0.5 bg-zinc-500/70 mb-3 rounded-full" />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              {t.home.contactTitle}
            </h2>
            <p className="text-zinc-500 text-sm lg:text-base max-w-md">
              {t.home.contactSubtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-1">
                {[
                  {
                    name: "Email",
                    value: "alanregisps@gmail.com",
                    href: "mailto:alanregisps@gmail.com",
                    Icon: Mail,
                  },
                  {
                    name: "GitHub",
                    value: "@Alanlan21",
                    href: "https://github.com/Alanlan21",
                    Icon: Github,
                  },
                  {
                    name: "LinkedIn",
                    value: "/in/alanregis",
                    href: "https://linkedin.com/in/alanregis",
                    Icon: Linkedin,
                  },
                ].map(({ name, value, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-5 py-4 hover:border-emerald-500/50 transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-white">
                        {name}
                      </p>
                      <p className="text-xs text-zinc-500 font-mono truncate">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/30 p-5">
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  {t.home.availabilityTitle}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm text-zinc-900 dark:text-white font-medium">
                    {t.status.available}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t.home.availabilityMsg}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/30 p-5">
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  {t.home.locationTitle}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t.home.locationMsg}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-350 2xl:max-w-400 mx-auto px-6 lg:px-12 xl:px-16 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              <span className="font-mono text-emerald-500">$</span> alan.dev ©{" "}
              {new Date().getFullYear()}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Alanlan21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alanregis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <Link
                href="/#contato"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.home.footerContact}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
