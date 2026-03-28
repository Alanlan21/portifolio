import { Metadata } from "next";
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Terminal } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contato | Alan Regis",
  description:
    "Entre em contato para oportunidades, projetos ou apenas para trocar uma ideia.",
};

const contactMethods = [
  {
    name: "Email",
    value: "alanregisps@gmail.com",
    href: "mailto:alanregisps@gmail.com",
    icon: Mail,
    description: "Prefiro para discussões detalhadas sobre projetos",
  },
  {
    name: "GitHub",
    value: "@Alanlan21",
    href: "https://github.com/Alanlan21",
    icon: Github,
    description: "Confira meus repositórios e contribuições",
  },
  {
    name: "LinkedIn",
    value: "/in/alanregis",
    href: "https://linkedin.com/in/alanregis",
    icon: Linkedin,
    description: "Para networking e oportunidades profissionais",
  },
];

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />

        <main className="mx-auto max-w-4xl px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              /contato
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Contato</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tem um projeto interessante? Uma oportunidade? Ou só quer trocar
              uma ideia sobre arquitetura de sistemas?{" "}
              <span className="text-foreground">Vamos conversar.</span>
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Canais de contato</h2>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <Card
                    key={method.name}
                    className="group hover:border-emerald-500/50 transition-colors"
                  >
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-accent group-hover:bg-emerald-500/10 transition-colors">
                            <method.icon className="h-5 w-5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                          </div>
                          <div>
                            <CardTitle className="text-base">
                              {method.name}
                            </CardTitle>
                            <p className="text-sm text-emerald-500 font-mono">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </CardContent>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Availability */}
              <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-500">
                    Disponível para projetos
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atualmente aceitando projetos freelance e oportunidades CLT.
                  Tempo de resposta: ~24h.
                </p>
              </div>
            </div>

            {/* Terminal style contact */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Modo dev</h2>

              <Terminal title="~/contato" className="w-full">
                <div className="space-y-3">
                  <div>
                    <span className="text-zinc-400">
                      # Para uma conversa rápida:
                    </span>
                  </div>
                  <div>
                    <span className="text-emerald-400">$</span>{" "}
                    <span className="text-zinc-100">
                      echo alanregisps@gmail.com
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">
                      Melhor canal para projetos e oportunidades
                    </span>
                  </div>
                  <div className="pt-2 text-zinc-500">
                    <span className="text-emerald-400">→</span> Resposta em até
                    24h úteis
                  </div>
                </div>
              </Terminal>

              {/* Quick response info */}
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-emerald-500" />O que
                  esperar
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">→</span>
                    Resposta em até 24 horas úteis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">→</span>
                    Discussão técnica fundamentada
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">→</span>
                    Proposta clara para projetos freelance
                  </li>
                </ul>
              </div>

              {/* Direct CTA */}
              <Button asChild className="w-full gap-2" size="lg">
                <a href="mailto:alanregisps@gmail.com">
                  <Send className="h-4 w-4" />
                  Enviar email agora
                </a>
              </Button>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-xl font-bold mb-6">Perguntas frequentes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Trabalha remoto?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Trabalho 100% remoto, com disponibilidade para reuniões
                  em horário comercial (GMT-3).
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Qual o valor hora?</h3>
                <p className="text-sm text-muted-foreground">
                  Depende do escopo e complexidade. Prefiro discutir sobre o
                  projeto primeiro para dar uma estimativa justa.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Faz frontend também?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, especialmente com React e React Native. Mas meu forte é
                  backend e arquitetura de sistemas.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Disponibilidade atual?</h3>
                <p className="text-sm text-muted-foreground">
                  Disponível para projetos part-time ou full-time. Posso começar
                  em ~1 semana após alinhamento.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
