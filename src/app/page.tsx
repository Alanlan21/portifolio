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
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Links</span>
                <div className="flex gap-2">
                  <a href="https://github.com/Alanlan21" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="https://linkedin.com/in/alanregis" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:alanregisps@gmail.com" className="social-link" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Main intro card */}
              <div className="bento-card bento-highlight p-6 lg:p-8 flex-1">
                <div className="space-y-5">
                  <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                    <span className="mr-1.5 animate-pulse">●</span> Disponível para projetos
                  </Badge>

                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="text-gradient-hero">Alan Regis</span>
                    <br />
                    <span className="text-zinc-500 font-medium text-2xl sm:text-3xl lg:text-4xl">Software Developer</span>
                  </h1>

                  <p className="max-w-lg text-base lg:text-lg text-zinc-300 leading-relaxed">
                    Construo sistemas robustos do{" "}
                    <span className="text-white font-medium">backend ao frontend</span>, com foco em{" "}
                    <span className="text-white font-medium">arquitetura</span>,{" "}
                    <span className="text-white font-medium">segurança</span> e{" "}
                    <span className="text-white font-medium">experiência do usuário</span>.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button asChild size="lg" className="gap-2 px-6 bg-emerald-600 hover:bg-emerald-500 text-white btn-glow">
                      <Link href="/projetos">
                        Explorar projetos
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2 px-5 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50">
                      <a href="/cv-alan-regis.pdf" download>
                        <Download className="h-4 w-4" />
                        CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Skills row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bento-card p-4">
                  <div className="text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest mb-2">Backend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="outline" className="font-mono text-xs text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bento-card p-4">
                  <div className="text-[10px] font-mono text-violet-500/70 uppercase tracking-widest mb-2">Frontend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="outline" className="font-mono text-xs text-violet-400 border-violet-500/30 bg-violet-500/10">
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
                    <div className="text-2xl lg:text-3xl font-black text-white stat-number">4+</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">anos</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-black text-white stat-number">15+</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">projetos</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-black text-emerald-400 stat-number">7</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">camadas</div>
                  </div>
                </div>
              </div>

              {/* Terminal card */}
              <div className="bento-card p-0 overflow-hidden flex-1">
                <Terminal title="~/alan.dev" className="w-full h-full border-0 bg-transparent rounded-none">
                  <div className="space-y-3">
                    <TerminalLine
                      command="whoami"
                      output={<span className="text-emerald-300 font-medium">Alan Regis — Software Developer</span>}
                      animate={true}
                      delay={500}
                    />
                    <TerminalLine
                      command="cat skills.txt"
                      output={
                        <div className="space-y-0.5 text-zinc-400 text-sm">
                          <div><span className="text-emerald-400">backend:</span> NestJS, TypeScript, Python</div>
                          <div><span className="text-violet-400">frontend:</span> React, Next.js, Tailwind</div>
                          <div><span className="text-amber-400">infra:</span> Docker, PostgreSQL, Redis</div>
                        </div>
                      }
                      animate={true}
                      delay={2000}
                    />
                    <TerminalLine
                      command="ls projects/"
                      output={
                        <div className="space-y-0.5 text-sm">
                          {projects.map((project) => (
                            <div key={project.name} className="flex gap-2">
                              <span className="text-cyan-400">{project.name}/</span>
                              <span className="text-zinc-600 text-xs"># {project.desc}</span>
                            </div>
                          ))}
                        </div>
                      }
                      animate={true}
                      delay={3500}
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

      {/* Featured Project - compact */}
      <section className="border-t border-border/50">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-10">
          <Link
            href="/projetos/nestjs-attack-defense-lab"
            className="group block rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8 transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Destaque</span>
                  <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">Security</Badge>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold group-hover:text-emerald-500 transition-colors">
                  NestJS Attack & Defense Lab
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  Plataforma SOC educacional: Red Team vs Blue Team, 7 camadas de defesa, honeypots e OWASP Top 10.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="secondary" className="font-mono text-xs">NestJS</Badge>
                  <Badge variant="secondary" className="font-mono text-xs">PostgreSQL</Badge>
                  <Badge variant="secondary" className="font-mono text-xs">React</Badge>
                  <Badge variant="secondary" className="font-mono text-xs">Docker</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-emerald-500 transition-colors">
                <span>Ver projeto</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
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
