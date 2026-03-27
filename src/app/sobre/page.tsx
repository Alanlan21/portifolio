import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { TechStack } from "@/components/tech-stack";
import { Terminal } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Sobre | Alan Regis",
  description:
    "Desenvolvedor backend especializado em NestJS, TypeScript e arquitetura de sistemas.",
};

const coreStack = [
  "TypeScript",
  "NestJS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
];

const extendedStack = [
  "React",
  "React Native",
  "MySQL",
  "Redis",
  "MongoDB",
  "AWS",
  "Prisma",
  "TypeORM",
  "Jest",
  "CI/CD",
  "Git",
  "Linux",
];

const timeline = [
  {
    year: "2024",
    title: "Especialização em Segurança",
    description:
      "Desenvolvimento do NestJS Attack & Defense Lab, cobrindo OWASP Top 10 e arquitetura de defesa em profundidade.",
  },
  {
    year: "2023",
    title: "Full-Stack Cross-Platform",
    description:
      "UniMenu: sistema completo de pedidos com NestJS, React Native e integração Stripe.",
  },
  {
    year: "2022",
    title: "Projetos de Impacto Social",
    description:
      "Fala-Pai: aplicativo de comunicação assistiva usando síntese de voz avançada.",
  },
  {
    year: "2021",
    title: "Início da Jornada Backend",
    description: "Primeiros projetos profissionais com Node.js e APIs REST.",
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
              Desenvolvedor backend com foco em construir sistemas que{" "}
              <span className="text-foreground">funcionam</span>,{" "}
              <span className="text-foreground">escalam</span> e são{" "}
              <span className="text-foreground">mantidos</span> por anos.
            </p>
          </div>

          {/* Philosophy */}
          <section className="mb-16">
            <h2 id="filosofia" className="text-2xl font-bold mb-6">
              Filosofia
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="text-2xl mb-3">🏗️</div>
                <h3 className="font-semibold mb-2">Arquitetura First</h3>
                <p className="text-sm text-muted-foreground">
                  Código bem arquitetado é mais importante que código
                  &quot;esperto&quot;. Prefiro soluções simples e previsíveis.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">Security by Design</h3>
                <p className="text-sm text-muted-foreground">
                  Segurança não é um checkbox no final. É uma mentalidade
                  aplicada desde a primeira linha.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="text-2xl mb-3">📖</div>
                <h3 className="font-semibold mb-2">Documentação Real</h3>
                <p className="text-sm text-muted-foreground">
                  Código sem documentação é código com data de validade.
                  Documento para o dev de amanhã (inclusive eu).
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 id="stack" className="text-2xl font-bold mb-6">
              Stack Técnica
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Core
                </h3>
                <TechStack technologies={coreStack} columns={3} />
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Também trabalho com
                </h3>
                <TechStack technologies={extendedStack} columns={4} size="sm" />
              </div>
            </div>
          </section>

          {/* Terminal snippet */}
          <section className="mb-16">
            <Terminal title="~/alan.dev" className="max-w-2xl">
              <div className="space-y-2">
                <div className="text-zinc-400">
                  # Minha abordagem em resumo:
                </div>
                <div>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-zinc-100">echo $FOCUS</span>
                </div>
                <div className="text-zinc-400 pl-4">
                  &quot;Resolver problemas reais com código limpo&quot;
                </div>
                <div>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-zinc-100">cat principles.txt</span>
                </div>
                <div className="text-zinc-400 pl-4">
                  1. Entender antes de codar
                  <br />
                  2. Testar é parte do desenvolvimento
                  <br />
                  3. Revisar código é aprender em dobro
                </div>
              </div>
            </Terminal>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 id="jornada" className="text-2xl font-bold mb-6">
              Jornada
            </h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[7px]" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background" />
                    <div className="text-sm font-mono text-emerald-500 mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
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
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
