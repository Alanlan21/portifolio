import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Terminal, TerminalLine } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

const projects = [
  {
    slug: "soc-dashboard",
    name: "SOC Dashboard",
    tagline: "Red Team vs Blue Team — segurança em tempo real",
    category: "security",
    categoryColor: "emerald",
    status: "finalizado",
    tech: ["NestJS", "PostgreSQL", "React", "Python"],
    highlights: [
      "7 camadas de defesa em profundidade",
      "WAF com 18 padrões regex custom",
      "136 payloads automatizados de teste",
    ],
    decision: "Arquitetura de honeypots para detecção activa de intrusos",
  },
  {
    slug: "unimenu",
    name: "UniMenu",
    tagline: "Full-stack + Mobile — sistema completo de pedidos",
    category: "fullstack",
    categoryColor: "violet",
    status: "em desenvolvimento",
    tech: ["NestJS", "React", "React Native", "MySQL", "Stripe"],
    highlights: [
      "App mobile + painel web + API unificada",
      "Integração Stripe para pagamentos",
      "Autenticação JWT multi-tenant",
    ],
    decision: "Módulos NestJS desacoplados para escalabilidade horizontal",
  },
  {
    slug: "fala-pai",
    name: "FalaPai",
    tagline: "PWA de comunicação assistiva com voz natural",
    category: "frontend",
    categoryColor: "cyan",
    status: "em produção",
    tech: ["React 19", "Vite", "ElevenLabs API", "PWA"],
    highlights: [
      "Síntese de voz indistinguível de humana",
      "PWA instalável com cache offline",
      "Frases rápidas com persistência local",
    ],
    decision: "ElevenLabs escolhida após benchmark de 4 APIs de TTS",
  },
];

const terminalProjects = [
  { name: "soc-dashboard", desc: "SOC Cybersec • Red Team vs Blue Team" },
  { name: "unimenu", desc: "Full-stack + Mobile • NestJS + React Native" },
  { name: "fala-pai", desc: "PWA em produção • ElevenLabs API" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-background to-background" />
        <div className="absolute inset-0 aurora" />
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        {/* Connecting glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.15_160_/_0.08)_0%,transparent_50%)]" />
        </div>

        {/* Main content - Bento Grid */}
        <div className="relative w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left column: Social + Main intro */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Social links - top left */}
              <div className="bento-card p-4 flex items-center gap-4 w-fit">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  Links
                </span>
                <div className="flex gap-2">
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

              {/* Main intro card */}
              <div className="bento-card bento-highlight p-6 lg:p-8 flex-1">
                <div className="space-y-5">
                  <Badge
                    variant="outline"
                    className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                  >
                    <span className="mr-1.5 animate-pulse">●</span> Disponível
                    para projetos
                  </Badge>

                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="text-gradient-hero">Alan Regis</span>
                    <br />
                    <span className="text-zinc-500 font-medium text-2xl sm:text-3xl lg:text-4xl">
                      Software Developer
                    </span>
                  </h1>

                  <p className="max-w-lg text-base lg:text-lg text-zinc-300 leading-relaxed">
                    <span className="text-white font-medium">2+ anos</span> em
                    sistemas de produção críticos. Foco em{" "}
                    <span className="text-white font-medium">APIs REST</span> e{" "}
                    <span className="text-white font-medium">
                      arquitetura backend
                    </span>{" "}
                    com Node.js/NestJS. Experiência complementar em{" "}
                    <span className="text-white font-medium">React</span>.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="gap-2 px-6 bg-emerald-600 hover:bg-emerald-500 text-white btn-glow"
                    >
                      <Link href="/projetos">
                        Explorar projetos
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="gap-2 px-5 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                    >
                      <a href="/cv-alan-regis.pdf" download>
                        <Download className="h-4 w-4" />
                        CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Skills row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bento-card bento-backend p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></div>
                    <div className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest">
                      Backend
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skills.backend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="font-mono text-[10px] text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bento-card bento-frontend p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500/60"></div>
                    <div className="text-[10px] font-mono text-violet-400/80 uppercase tracking-widest">
                      Frontend
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skills.frontend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="font-mono text-[10px] text-violet-400 border-violet-500/30 bg-violet-500/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bento-card bento-devops p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60"></div>
                    <div className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
                      DevOps
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skills.devops.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="font-mono text-[10px] text-amber-400 border-amber-500/30 bg-amber-500/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Stats + Terminal */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Stats card */}
              <div className="bento-card p-5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-black text-white stat-number">
                      2+
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">
                      anos
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-black text-white stat-number">
                      3+
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">
                      projetos
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-black text-emerald-400 stat-number">
                      2
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">
                      empresas
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal card */}
              <div className="bento-card bento-terminal p-0 overflow-hidden flex-1">
                <Terminal
                  title="~/alan.dev"
                  className="w-full h-full border-0 bg-transparent rounded-none"
                >
                  <div className="space-y-3">
                    <TerminalLine
                      command="whoami"
                      output={
                        <span className="text-emerald-300 font-medium">
                          Alan Regis — Software Developer
                        </span>
                      }
                      animate={true}
                      delay={300}
                    />
                    <TerminalLine
                      command="echo $STATUS"
                      output={
                        <span className="text-emerald-400">
                          available for projects
                        </span>
                      }
                      animate={true}
                      delay={900}
                    />
                    <TerminalLine
                      command="cat skills.json | jq .main"
                      output={
                        <span className="text-zinc-400 text-sm">
                          <span className="text-emerald-400">node</span>
                          <span className="text-zinc-600"> · </span>
                          <span className="text-emerald-400">nestjs</span>
                          <span className="text-zinc-600"> · </span>
                          <span className="text-emerald-400">typescript</span>
                          <span className="text-zinc-600"> · </span>
                          <span className="text-violet-400">react</span>
                          <span className="text-zinc-600"> · </span>
                          <span className="text-amber-400">docker</span>
                          <span className="text-zinc-600"> · </span>
                          <span className="text-amber-400">aws</span>
                        </span>
                      }
                      animate={true}
                      delay={1500}
                    />
                    <TerminalLine
                      command="cat ./now"
                      output={
                        <div className="text-zinc-400 text-sm">
                          <span className="text-zinc-500">focus:</span> backend
                          architecture, cybersecurity, devops
                        </div>
                      }
                      animate={true}
                      delay={2100}
                    />
                    <TerminalLine
                      command="ls projects/"
                      output={
                        <div className="space-y-0.5 text-sm">
                          {terminalProjects.map((project) => (
                            <div key={project.name} className="flex gap-2">
                              <span className="text-cyan-400">
                                {project.name}/
                              </span>
                              <span className="text-zinc-600 text-xs">
                                # {project.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      }
                      animate={true}
                      delay={2700}
                    />
                  </div>
                </Terminal>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 fade-bottom pointer-events-none" />
      </section>

      {/* Projects Section */}
      <section className="relative border-t border-border/30">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-grid-lines opacity-50" />

        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10 lg:mb-14">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                Projetos
              </h2>
              <p className="text-zinc-500 text-sm lg:text-base max-w-md">
                Sistemas reais com decisões técnicas intencionais
              </p>
            </div>
            <Link
              href="/projetos"
              className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group"
            >
              <span>Ver todos</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Projects list */}
          <div className="space-y-3">
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
                                  : "text-cyan-400/80 border-cyan-500/30"
                            }`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-zinc-400 text-sm truncate">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Tech stack - visible on lg */}
                    <div className="hidden lg:flex items-center gap-2 shrink-0">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded"
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
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {project.highlights[0]}
                        <span className="text-zinc-600 mx-2">·</span>
                        {project.decision}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: Ver todos link */}
          <Link
            href="/projetos"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <span>Ver todos os projetos</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-8 lg:px-16 xl:px-24 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              <span className="font-mono text-emerald-500">$</span> alan.dev ©
              2026
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
                href="/contato"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
