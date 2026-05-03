import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Terminal, TerminalLine } from "@/components/terminal";
import { TechStack } from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContributionGraph } from "@/components/contribution-graph";

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
    slug: "attack-defense-lab",
    name: "Attack & Defense Lab",
    tagline: "Simulação de segurança: Red Team vs Blue Team",
    category: "security",
    categoryColor: "emerald",
    status: "finalizado",
    tech: ["NestJS", "PostgreSQL", "React", "Python"],
    highlights: [
      "Camadas de defesa em profundidade (WAF, rate limiting, honeypot)",
      "Suite de payloads para testar as próprias defesas",
      "Aprendi bastante sobre segurança ofensiva e defensiva",
    ],
    decision: "Projeto de estudo focado em entender segurança na prática",
  },
  {
    slug: "valvecraft",
    name: "Valvecraft",
    tagline: "Jogo educativo para trompetistas no navegador",
    category: "frontend",
    categoryColor: "orange",
    status: "finalizado",
    tech: ["React 19", "TypeScript", "Vite", "VexFlow", "Tone.js"],
    highlights: [
      "Amostras de áudio reais de trompete por nota",
      "Modo Quiz com streaks e multiplicadores de pontuação",
      "Modo Ritmo com playhead sincronizado via Tone.Transport",
    ],
    decision:
      "VexFlow para renderização de partituras, Tone.js para timing preciso de áudio",
  },
  {
    slug: "unimenu",
    name: "UniMenu",
    tagline: "Full-stack + Mobile, sistema completo de pedidos",
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
  {
    slug: "calote-bot",
    name: "CaloteBot",
    tagline: "Bot de cobrança via WhatsApp com agendamento",
    category: "automação",
    categoryColor: "amber",
    status: "finalizado",
    tech: ["Node.js", "venom-bot", "dayjs", "inquirer"],
    highlights: [
      "Templates dinâmicos com variáveis (nome, valor, dias de atraso)",
      "Agendamento de mensagens por contato",
      "Suporte a anexos de imagem e comprovantes",
    ],
    decision:
      "Migrado de Python/Selenium para Node.js + venom-bot para maior estabilidade",
  },
];

const terminalProjects = [
  { name: "attack-defense-lab", desc: "SOC Cybersec • Red Team vs Blue Team" },
  { name: "valvecraft", desc: "Jogo educativo • Trompete no navegador" },
  { name: "unimenu", desc: "Full-stack + Mobile • NestJS + React Native" },
  { name: "fala-pai", desc: "PWA em produção • ElevenLabs API" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden min-h-[85vh] flex items-center"
      >
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
                    para trabalho
                  </Badge>

                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="text-gradient-hero">Alan Regis</span>
                    <br />
                    <span className="text-zinc-500 font-medium text-2xl sm:text-3xl lg:text-4xl">
                      Software Developer
                    </span>
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="gap-2 px-6 bg-emerald-600 hover:bg-emerald-500 text-white btn-glow"
                    >
                      <Link href="/#trabalho">
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
                      trabalho
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
                          Alan Regis
                        </span>
                      }
                      animate={true}
                      delay={300}
                    />
                    <TerminalLine
                      command="echo $STATUS"
                      output={
                        <span className="text-emerald-400">
                          Disponível para trabalho
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
                          Pós-graduando em Engenharia de Software com Foco em
                          Devops
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

      {/* Divider */}
      <div className="section-divider" />

      {/* Sobre Section */}
      <section id="sobre" className="relative section-glow-emerald">
        <div className="absolute inset-0 bg-grid-lines opacity-50" />
        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          <ScrollReveal className="mb-10 lg:mb-14">
            <div className="w-8 h-0.5 bg-emerald-500/70 mb-3 rounded-full" />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              Sobre
            </h2>
            <p className="text-zinc-500 text-sm lg:text-base max-w-md">
              Backend como foco principal
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={100}
            className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"
          >
            {/* Stack */}
            <div className="space-y-6">
              <div>
                <p className="text-zinc-300 leading-relaxed max-w-2xl mb-6">
                  Foco em{" "}
                  <span className="text-white font-medium">APIs REST</span> com
                  Node.js e NestJS. Tenho 2 anos de experiência em projetos
                  reais, atuando em sistemas para uma usina termelétrica e para
                  instituições públicas. Tenho boa base em frontend com React e
                  sigo sempre aprendendo.
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  Stack principal
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
                  Também trabalho com
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
                Trajetória
              </p>
              <div className="relative">
                {/* linha vertical */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800" />

                <div className="space-y-0">
                  {[
                    {
                      period: "2025 – atual",
                      title: "Pós em Eng. Software foco em DevOps",
                      org: "Unifor",
                      logo: "/assets/logos/logo-unifor.jpg",
                      desc: "Pós-graduação com ênfase em práticas DevOps, CI/CD, observabilidade e arquitetura de sistemas distribuídos.",
                      type: "education",
                      slug: "unifor",
                      current: true,
                    },
                    {
                      period: "2024 – 2026",
                      title: "Desenvolvedor Web",
                      org: "Energia Pecém",
                      logo: "/assets/logos/logo-energia-pecem.jpg",
                      desc: "APIs REST críticas para manutenção e segurança de usina termelétrica (~50% da geração elétrica do CE). Auditoria, compliance ISO/LGPD, monitoramento Grafana.",
                      type: "work",
                      slug: "energia-pecem",
                      current: false,
                    },
                    {
                      period: "2023 – 2025",
                      title: "Análise e Desenvolvimento de Sistemas",
                      org: "Unifor",
                      logo: "/assets/logos/logo-unifor.jpg",
                      desc: "Formação em ADS com foco em engenharia de software e arquitetura de sistemas.",
                      type: "education",
                      slug: "unifor",
                      current: false,
                    },
                    {
                      period: "2023 – 2024",
                      title: "Estagiário de Desenvolvimento",
                      org: "Dataged",
                      logo: "/assets/logos/logo-dataged.jpg",
                      desc: "Desenvolvimento e manutenção de aplicações Java/Spring para ECM/GED em instituições públicas. Do levantamento de requisitos até a entrega.",
                      type: "estagio",
                      slug: "dataged",
                      current: false,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
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
                          <span className="w-2.5 h-2.5 rounded-full border-2 border-zinc-600 bg-zinc-950" />
                        )}
                      </div>

                      <Link
                        href={`/sobre/${item.slug}`}
                        className={`flex gap-3 flex-1 rounded-xl border p-4 hover:bg-zinc-900/50 transition-colors group ${
                          item.current
                            ? "border-emerald-500/20 bg-zinc-900/60"
                            : "border-zinc-800/60 bg-zinc-900/20"
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
                            <span className="text-sm font-semibold text-white">
                              {item.title}
                            </span>
                            <Badge
                              variant="outline"
                              className={`text-[10px] font-mono ${item.current ? "border-emerald-500/30 text-emerald-400" : ""}`}
                            >
                              {item.type === "work"
                                ? "trabalho"
                                : item.type === "estagio"
                                  ? "estágio"
                                  : "formação"}
                            </Badge>
                          </div>
                          <p className="text-xs text-zinc-500">
                            {item.org} · {item.period}
                          </p>
                          <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
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
            <div className="rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800/60">
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 text-zinc-400 fill-current"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <a
                  href="https://github.com/Alanlan21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-mono"
                >
                  github.com/Alanlan21
                </a>
              </div>
              <div className="bg-[#0d1117] px-5 py-5">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-grid-lines opacity-50" />

        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          {/* Section header */}
          <ScrollReveal className="flex items-end justify-between mb-10 lg:mb-14">
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-violet-500/70 mb-3 rounded-full" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                Projetos
              </h2>
              <p className="text-zinc-500 text-sm lg:text-base max-w-md">
                Projetos onde aprendi construindo
              </p>
            </div>
            <Link
              href="/projetos"
              className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group"
            >
              <span>Ver todos</span>
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
          </ScrollReveal>

          {/* Mobile: Ver todos link */}
          <Link
            href="/trabalho"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <span>Ver todos os trabalho</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Contato Section */}
      <section id="contato" className="relative section-glow-neutral">
        <div className="absolute inset-0 bg-grid-lines opacity-35" />
        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
          <ScrollReveal className="mb-10">
            <div className="w-8 h-0.5 bg-zinc-500/70 mb-3 rounded-full" />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              Contato
            </h2>
            <p className="text-zinc-500 text-sm lg:text-base max-w-md">
              Tem um projeto ou oportunidade? Vamos conversar.
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
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 hover:border-emerald-500/50 transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-zinc-400 group-hover:text-emerald-400 transition-colors shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{name}</p>
                      <p className="text-xs text-zinc-500 font-mono truncate">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  Disponibilidade
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm text-white font-medium">
                    Disponível para trabalho
                  </span>
                </div>
                <p className="text-sm text-zinc-400">
                  Fico feliz em ouvir sobre projetos, oportunidades ou só bater
                  um papo sobre tech. Respondo rápido.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
                <p className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-widest">
                  Localização
                </p>
                <p className="text-sm text-zinc-400">
                  Fortaleza, CE. Aberto a remoto ou híbrido.
                </p>
              </div>
            </div>
          </ScrollReveal>
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
                href="/#contato"
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
