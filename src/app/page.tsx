import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Terminal, TerminalLine } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills = {
  backend: ["NestJS", "TypeScript", "Python", "Docker", "PostgreSQL", "Redis"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
};

const projects = [
  {
    name: "nestjs-attack-defense-lab",
    desc: "Security lab • 7 defense layers",
  },
  { name: "unimenu", desc: "Food ordering • Full-stack cross-platform" },
  { name: "fala-pai", desc: "Assistive communication • PWA" },
  { name: "calote-bot", desc: "WhatsApp automation • Node.js" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-background to-background" />
        <div className="absolute inset-0 aurora" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        {/* Edge decorations - left */}
        <div className="absolute left-0 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent hidden lg:block" />
        <div className="absolute left-8 top-[20%] text-[10px] font-mono text-zinc-700 -rotate-90 origin-left hidden xl:block tracking-widest">
          SOFTWARE.DEV
        </div>

        {/* Top-right technical decoration - fills dead space */}
        <div className="absolute top-24 right-[20%] hidden lg:block text-right">
          <div className="text-[11px] font-mono text-zinc-700/60 leading-relaxed select-none">
            <div>{"// fullstack • security • architecture"}</div>
            <div className="text-zinc-800/50">
              {"// backend + frontend • scalable systems"}
            </div>
          </div>
        </div>

        {/* Connecting glow - bridges left content to terminal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] hidden lg:block pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.15_160_/_0.06)_0%,transparent_60%)]" />
        </div>

        {/* Floating code decoration - positioned higher */}
        <div className="absolute top-20 right-[12%] 2xl:right-[15%] hidden xl:block code-float opacity-20">
          <pre className="text-xs font-mono text-emerald-500/60 select-none">
            {`const App = () => (
  <Layout>
    <Hero />
    <Projects />
  </Layout>
);`}
          </pre>
        </div>

        {/* Decorative line - right edge */}
        <div className="absolute right-0 bottom-1/4 w-px h-48 bg-gradient-to-b from-transparent via-zinc-700/50 to-transparent hidden lg:block" />

        {/* Main content - wider container with balanced grid */}
        <div className="relative w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-8 lg:px-16 xl:px-24 py-20 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-16 xl:gap-24 items-start lg:items-center">
            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                >
                  <span className="mr-1.5 animate-pulse">●</span> Disponível
                  para projetos
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="text-gradient-hero">Alan Regis</span>
                  <br />
                  <span className="text-zinc-500 font-medium">
                    Software Developer
                  </span>
                </h1>

                <p className="max-w-xl text-lg lg:text-xl text-zinc-300 leading-relaxed">
                  Construo sistemas robustos do{" "}
                  <span className="text-white font-medium">
                    backend ao frontend
                  </span>
                  , com foco em{" "}
                  <span className="text-white font-medium">arquitetura</span>,{" "}
                  <span className="text-white font-medium">segurança</span> e{" "}
                  <span className="text-white font-medium">
                    experiência do usuário
                  </span>
                  .
                </p>

                {/* Quick value proposition */}
                <div className="flex items-center gap-3 text-sm text-zinc-500 pt-1">
                  <span className="w-8 h-px bg-zinc-700" />
                  <span>
                    APIs seguras + interfaces modernas em um único desenvolvedor
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10 skill-badge"
                  >
                    {skill}
                  </Badge>
                ))}
                {skills.frontend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-violet-400 border-violet-500/30 bg-violet-500/10 skill-badge"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 px-8 bg-emerald-600 hover:bg-emerald-500 text-white btn-glow"
                >
                  <Link href="/projetos">
                    Explorar projetos
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 px-6 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                >
                  <a href="/cv-alan-regis.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Mini stats + Social links - consolidated row */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white tabular-nums stat-number">
                      4+
                    </span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                      anos
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white tabular-nums stat-number">
                      15+
                    </span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                      projetos
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white tabular-nums stat-number">
                      7
                    </span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                      camadas
                    </span>
                  </div>
                </div>

                {/* Social links */}
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
            </div>

            {/* Terminal - repositioned: higher and closer to center */}
            <div className="lg:pl-0 lg:-mt-8">
              <div className="terminal-perspective lg:-mr-4 xl:-mr-8">
                <Terminal
                  title="~/alan.dev"
                  className="w-full max-w-xl lg:max-w-lg xl:max-w-xl mx-auto lg:ml-auto glow-emerald"
                >
                  <div className="space-y-4">
                    <TerminalLine
                      command="whoami"
                      output={
                        <span className="text-emerald-300 font-medium">
                          Alan Regis — Software Developer
                        </span>
                      }
                      animate={true}
                      delay={500}
                    />
                    <TerminalLine
                      command="cat skills.txt"
                      output={
                        <div className="space-y-0.5 text-zinc-400">
                          <div>
                            <span className="text-emerald-400">backend:</span>{" "}
                            NestJS, TypeScript, Python
                          </div>
                          <div>
                            <span className="text-violet-400">frontend:</span>{" "}
                            React, Next.js, Tailwind
                          </div>
                          <div>
                            <span className="text-amber-400">infra:</span>{" "}
                            Docker, PostgreSQL, Redis
                          </div>
                        </div>
                      }
                      animate={true}
                      delay={2000}
                    />
                    <TerminalLine
                      command="ls projects/"
                      output={
                        <div className="space-y-0.5">
                          {projects.map((project) => (
                            <div key={project.name} className="flex gap-3">
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
                      delay={4000}
                    />
                  </div>
                </Terminal>
              </div>
            </div>
          </div>
        </div>

        {/* Transição suave - gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 fade-bottom pointer-events-none" />
      </section>

      {/* Featured Project */}
      <section className="border-t border-border/50 bg-gradient-to-b from-transparent to-card/30">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-8 lg:px-16 xl:px-24 py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Projeto em destaque</h2>
              <p className="text-muted-foreground">
                Laboratório educacional de cibersegurança
              </p>
            </div>
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/projetos">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Link
            href="/projetos/nestjs-attack-defense-lab"
            className="group block rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-10 transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4 lg:max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-emerald-500 transition-colors">
                    NestJS Attack & Defense Lab
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-emerald-500 border-emerald-500/30"
                  >
                    Security
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Plataforma SOC educacional simulando cenários Red Team vs Blue
                  Team. Implementa 7 camadas de defesa, honeypots, threat
                  scoring com decay, e cobertura completa dos vetores OWASP Top
                  10.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="font-mono text-xs">
                    NestJS
                  </Badge>
                  <Badge variant="secondary" className="font-mono text-xs">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="font-mono text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="font-mono text-xs">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="font-mono text-xs">
                    Python
                  </Badge>
                </div>
              </div>
              <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-2 transition-all shrink-0 mt-2" />
            </div>
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
