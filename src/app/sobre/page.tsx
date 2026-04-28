import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { TechStack } from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Sobre | Alan Regis",
  description:
    "Desenvolvedor com 2+ anos de experiência em sistemas de produção, focando em arquitetura backend, segurança e automação.",
};

const coreStack = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "Java",
  "MySQL",
  "PostgreSQL",
];

const extendedStack = [
  "React",
  "Next.js",
  "React Native",
  "Spring",
  "Docker",
  "AWS",
  "TypeORM",
  "Git",
  "GitHub Actions",
  "Tailwind",
];

const timeline = [
  {
    period: "2024 - 2026",
    title: "Desenvolvedor Web",
    organization: "Energia Pecém",
    description:
      "APIs REST críticas para manutenção e segurança de usina termelétrica (~50% da geração elétrica do CE). Auditoria, compliance ISO/LGPD, monitoramento Grafana.",
    logo: "/assets/logos/energia-pecem.png",
    type: "work",
  },
  {
    period: "2023 - 2024",
    title: "Desenvolvedor Java",
    organization: "Dataged",
    description:
      "Sistemas ECM/GED para instituições públicas. Manutenção de sistema interno Java/Spring, desenvolvimento de soluções do zero até entrega.",
    logo: "/assets/logos/dataged.png",
    type: "work",
  },
  {
    period: "2023 - 2025",
    title: "Análise e Desenvolvimento de Sistemas",
    organization: "Unifor",
    description:
      "Formação em ADS com foco em engenharia de software e arquitetura de sistemas.",
    logo: "/assets/logos/unifor.png",
    type: "education",
  },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />

        <main className="mx-auto max-w-4xl px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              /sobre
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Sobre mim</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              2+ anos construindo sistemas de produção com foco em{" "}
              <span className="text-foreground">rastreabilidade</span>,{" "}
              <span className="text-foreground">segurança</span> e{" "}
              <span className="text-foreground">automação</span>. Backend-first,
              com experiência prática em React.
            </p>
          </div>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 id="stack" className="text-2xl font-bold mb-8">
              Stack Técnica
            </h2>

            <div className="space-y-10">
              {/* Core - prominent grid */}
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/60">
                <h3 className="text-xs font-medium text-zinc-500 mb-5 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Core
                </h3>
                <TechStack technologies={coreStack} columns={6} size="lg" />
              </div>

              {/* Extended - flow layout */}
              <div>
                <h3 className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-widest">
                  Também trabalho com
                </h3>
                <TechStack technologies={extendedStack} variant="flow" />
              </div>
            </div>
          </section>

          {/* Progression Map - A journey visualization */}
          <section className="mb-16">
            <h2 id="jornada" className="text-2xl font-bold mb-12">
              Jornada
            </h2>

            {/* Stepped diagonal progression - bottom-left to top-right */}
            <div className="relative h-[520px] md:h-[480px]">
              {/* Diagonal gradient line (CSS-based) */}
              <div
                className="absolute w-[2px] bg-gradient-to-t from-zinc-800 via-zinc-600 to-emerald-500 opacity-40"
                style={{
                  left: "10px",
                  bottom: "20px",
                  height: "85%",
                  transform: "rotate(-15deg)",
                  transformOrigin: "bottom left",
                }}
              />

              {/* === ORIGIN: Bottom-left corner === */}
              <div className="absolute bottom-4 left-0">
                <div className="flex items-center gap-3">
                  {/* Origin marker - small hollow circle */}
                  <div className="w-4 h-4 rounded-full border-2 border-zinc-700 bg-background flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600">
                    2023
                  </span>
                </div>
              </div>

              {/* === MILESTONES: Stepping up and right === */}
              {timeline
                .slice()
                .reverse()
                .map((item, index) => {
                  const total = timeline.length;
                  const isNewest = index === total - 1;

                  // Positions create diagonal flow
                  const positions = [
                    { bottom: "78%", left: "2%" }, // Oldest - bottom-left area
                    { bottom: "52%", left: "18%" }, // Middle
                    { bottom: "28%", left: "38%" }, // Newest - moving toward top-right
                  ];
                  const pos = positions[index] || positions[0];

                  return (
                    <div key={index} className="absolute group" style={pos}>
                      {/* Node with connector */}
                      <div className="flex items-center">
                        {/* Checkpoint node */}
                        <div
                          className={`
                        shrink-0 rounded-full border-2 border-background transition-all
                        ${
                          isNewest
                            ? "w-5 h-5 bg-zinc-500 ring-2 ring-zinc-500/20"
                            : "w-4 h-4 bg-zinc-700 group-hover:bg-zinc-600"
                        }
                      `}
                        />

                        {/* Horizontal connector */}
                        <div
                          className={`w-4 h-px transition-colors ${isNewest ? "bg-zinc-500" : "bg-zinc-700"}`}
                        />

                        {/* Experience card */}
                        <div
                          className={`
                        w-64 md:w-72 p-3 rounded-lg border backdrop-blur-sm transition-all
                        ${
                          isNewest
                            ? "bg-zinc-900/90 border-zinc-700/70"
                            : "bg-zinc-900/70 border-zinc-800/60 group-hover:border-zinc-700/60"
                        }
                      `}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center overflow-hidden shrink-0">
                              <Image
                                src={item.logo}
                                alt={item.organization}
                                width={22}
                                height={22}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-zinc-200 leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-xs text-zinc-500 mt-0.5">
                                {item.organization}
                              </p>
                              <p className="text-[10px] font-mono text-zinc-600 mt-1">
                                {item.period}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* === DESTINATION: Top-right - current state === */}
              <div className="absolute top-2 right-4 md:right-8">
                <div className="flex items-center gap-4 flex-row-reverse">
                  {/* Destination node - large, prominent, glowing */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-3 rounded-full bg-emerald-500/15 blur-lg" />
                    <div className="absolute -inset-1.5 rounded-full bg-emerald-500/10 animate-pulse" />
                    <div className="relative w-7 h-7 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Current state card */}
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-zinc-900/95 backdrop-blur-sm shadow-xl shadow-emerald-500/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-semibold text-emerald-400">
                        Agora
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-white mb-1">
                      Desenvolvedor Backend
                    </h3>
                    <p className="text-xs text-zinc-500 max-w-[220px]">
                      APIs, arquitetura de sistemas, automação
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 rounded-xl border border-border bg-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  Vamos trabalhar juntos?
                </h2>
                <p className="text-muted-foreground">
                  Estou disponível para projetos freelance e oportunidades CLT.
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contato" className="gap-2">
                    Entrar em contato
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href="/cv-alan-regis.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
