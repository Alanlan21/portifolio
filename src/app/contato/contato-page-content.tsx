"use client";

import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { Terminal } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function ContatoPageContent() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      name: "Email",
      value: "alanregisps@gmail.com",
      href: "mailto:alanregisps@gmail.com",
      icon: Mail,
      description: t.contactPage.emailDesc,
    },
    {
      name: "GitHub",
      value: "@Alanlan21",
      href: "https://github.com/Alanlan21",
      icon: Github,
      description: t.contactPage.githubDesc,
    },
    {
      name: "LinkedIn",
      value: "/in/alanregis",
      href: "https://linkedin.com/in/alanregis",
      icon: Linkedin,
      description: t.contactPage.linkedinDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            /contato
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{t.contactPage.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t.contactPage.descPre}{" "}
            <span className="text-foreground">
              {t.contactPage.descHighlight}
            </span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t.contactPage.methodsTitle}</h2>

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
                  {t.contactPage.availabilityStatus}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.contactPage.availabilityText}
              </p>
            </div>
          </div>

          {/* Terminal style contact */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t.contactPage.devModeTitle}</h2>

            <Terminal title="~/contato" className="w-full">
              <div className="space-y-3">
                <div>
                  <span className="text-zinc-400">
                    {t.contactPage.terminalComment}
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
                    {t.contactPage.terminalNote}
                  </span>
                </div>
                <div className="pt-2 text-zinc-500">
                  <span className="text-emerald-400">→</span>{" "}
                  {t.contactPage.terminalReply}
                </div>
              </div>
            </Terminal>

            {/* Quick response info */}
            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-emerald-500" />
                {t.contactPage.whatToExpect}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">→</span>
                  {t.contactPage.expect1}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">→</span>
                  {t.contactPage.expect2}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">→</span>
                  {t.contactPage.expect3}
                </li>
              </ul>
            </div>

            {/* Direct CTA */}
            <Button asChild className="w-full gap-2" size="lg">
              <a href="mailto:alanregisps@gmail.com">
                <Send className="h-4 w-4" />
                {t.contactPage.sendEmailBtn}
              </a>
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-6">{t.contactPage.faqTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {t.contactPage.faq.map((item, i) => (
              <div key={i} className="p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
