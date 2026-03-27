import { Metadata } from "next";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ProjectCard, ProjectCardProps } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projetos | Alan Regis",
  description:
    "Projetos de desenvolvimento backend: sistemas de segurança, APIs, automação e mais.",
};

const projects: ProjectCardProps[] = [
  {
    title: "NestJS Attack & Defense Lab",
    slug: "nestjs-attack-defense-lab",
    description:
      "Plataforma SOC educacional simulando cenários Red Team vs Blue Team. Implementa 7 camadas de defesa em profundidade, incluindo WAF, honeypots, rate limiting distribuído e threat scoring com decay temporal.",
    tags: [
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "React",
      "Docker",
      "Python",
      "Security",
    ],
    status: "finalizado",
    highlight: "136+ payloads de teste cobrindo OWASP Top 10",
    github: "https://github.com/alanregis/NestJS-Attack-and-Defense-Lab",
  },
  {
    title: "UniMenu",
    slug: "unimenu",
    description:
      "Sistema completo de pedidos de comida para cantinas e restaurantes da UNIFOR. Arquitetura full-stack cross-platform com backend robusto, app mobile nativo e painel administrativo web.",
    tags: [
      "NestJS",
      "React Native",
      "Expo",
      "React",
      "MySQL",
      "TypeScript",
      "Stripe",
      "JWT",
    ],
    status: "em desenvolvimento",
    highlight: "Integração de pagamento Stripe com fluxo completo",
    github: "https://github.com/alanregis/unimenu",
  },
  {
    title: "Fala-Pai",
    slug: "fala-pai",
    description:
      "Aplicativo de comunicação assistiva que converte texto em fala de alta qualidade. Desenvolvido para pessoas com dificuldades de comunicação verbal, utilizando síntese de voz avançada da ElevenLabs.",
    tags: ["React", "Vite", "Tailwind", "ElevenLabs API", "PWA", "TypeScript"],
    status: "estável",
    highlight: "PWA instalável com síntese de voz premium",
    github: "https://github.com/alanregis/fala-pai",
    demo: "https://fala-pai.vercel.app",
  },
  {
    title: "Calote-bot",
    slug: "calote-bot",
    description:
      "Bot de automação de cobrança via WhatsApp com templates dinâmicos, agendamento inteligente e CLI interativo. Automatiza o processo de cobrança com mensagens personalizadas e follow-ups programados.",
    tags: ["Node.js", "venom-bot", "dayjs", "inquirer", "node-schedule"],
    status: "estável",
    highlight: "Templates com variáveis dinâmicas e scheduling cron-like",
    github: "https://github.com/alanregis/calote-bot",
  },
];

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />

        <main className="mx-auto max-w-4xl px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              /projetos
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Projetos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Uma seleção de projetos que demonstram minha abordagem em{" "}
              <span className="text-foreground">arquitetura</span>,{" "}
              <span className="text-foreground">segurança</span> e{" "}
              <span className="text-foreground">desenvolvimento backend</span>.
            </p>
          </div>

          {/* Filters (opcional para o futuro) */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-emerald-500/20"
            >
              Todos
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              Security
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              Full-Stack
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              Automação
            </Badge>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          {/* More coming */}
          <div className="mt-12 p-6 rounded-lg border border-dashed border-border text-center">
            <p className="text-muted-foreground">
              <span className="text-emerald-500 font-mono">+</span> Mais
              projetos em breve
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
