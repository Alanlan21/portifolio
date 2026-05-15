"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Locale = "pt" | "en";

// ── Translations ─────────────────────────────────────────────────────────────

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      collapse: "Recolher",
      expand: "Expandir",
    },
    status: {
      available: "Disponível para trabalho",
      finalizado: "finalizado",
      em_desenvolvimento: "em desenvolvimento",
      estavel: "estável",
      em_producao: "em produção",
      beta: "beta",
    },
    experienceType: {
      work: "trabalho",
      estagio: "estágio",
      education: "formação",
      workLabel: "Experiência",
      estagioLabel: "Estágio",
      educationLabel: "Formação",
    },
    home: {
      exploreCta: "Explorar projetos",
      cv: "CV",
      aboutTitle: "Sobre",
      aboutSubtitle: "NestJS · TypeScript · React — 2 anos em produção",
      stackMain: "Stack principal",
      stackAlso: "Também trabalho com",
      careerTitle: "Trajetória",
      terminalStatus: "Disponível para trabalho",
      terminalNow: "Pós-graduando em Engenharia de Software com Foco em Devops",
      projectsTitle: "Projetos",
      projectsSubtitle: "Trabalhos selecionados",
      viewAll: "Ver todos",
      ctaProjectQ: "Tem um projeto em mente?",
      ctaProjectLink: "Fala comigo",
      viewAllProjects: "Ver todos os projetos",
      contactTitle: "Contato",
      contactSubtitle: "Tem um projeto ou oportunidade? Vamos conversar.",
      availabilityTitle: "Disponibilidade",
      availabilityMsg:
        "Fico feliz em ouvir sobre projetos, oportunidades ou só bater um papo sobre tech. Respondo rápido.",
      locationTitle: "Localização",
      locationMsg: "Fortaleza, CE. Aberto a remoto ou híbrido.",
      footerContact: "Contato",
    },
    projectsPage: {
      title: "Projetos",
      descPre: "Uma seleção de projetos que demonstram minha abordagem em",
      descArch: "arquitetura",
      descSec: "segurança",
      descAnd: "e",
      descBackend: "desenvolvimento backend",
      filterAll: "Todos",
      filterSecurity: "Segurança",
      filterFullstack: "Full-Stack",
      filterAutomation: "Automação",
      moreComing: "+ Mais projetos em breve",
    },
    projectDetail: {
      back: "Voltar para projetos",
      backAll: "Todos os projetos",
      viewDetails: "Ver detalhes",
      viewCode: "Ver código",
      viewDemo: "Ver demo",
    },
    experienceDetail: {
      back: "Voltar para sobre",
      fullCareer: "Trajetória completa",
      letsChat: "Vamos conversar →",
    },
    contactPage: {
      title: "Contato",
      descPre:
        "Tem um projeto interessante? Uma oportunidade? Ou só quer trocar uma ideia sobre arquitetura de sistemas?",
      descHighlight: "Vamos conversar.",
      methodsTitle: "Canais de contato",
      emailDesc: "Prefiro para discussões detalhadas sobre projetos",
      githubDesc: "Confira meus repositórios e contribuições",
      linkedinDesc: "Para networking e oportunidades profissionais",
      availabilityStatus: "Disponível para trabalho",
      availabilityText:
        "Atualmente aceitando projetos freelance e oportunidades CLT.",
      devModeTitle: "Modo dev",
      terminalComment: "# Para uma conversa rápida:",
      terminalNote: "Melhor canal para projetos e oportunidades",
      terminalReply: "Resposta em até 24h úteis",
      whatToExpect: "O que esperar",
      expect1: "Resposta em até 24 horas úteis",
      expect2: "Discussão técnica fundamentada",
      expect3: "Proposta clara para projetos freelance",
      sendEmailBtn: "Enviar email agora",
      faqTitle: "Perguntas frequentes",
      faq: [
        {
          q: "Trabalha remoto?",
          a: "Sim! Trabalho 100% remoto, com disponibilidade para reuniões em horário comercial (GMT-3).",
        },
        {
          q: "Qual o valor hora?",
          a: "Depende do escopo e complexidade. Prefiro discutir sobre o projeto primeiro para dar uma estimativa justa.",
        },
        {
          q: "Faz frontend também?",
          a: "Sim, especialmente com React e React Native. Mas meu forte é backend e arquitetura de sistemas.",
        },
        {
          q: "Disponibilidade atual?",
          a: "Disponível para projetos part-time ou full-time. Posso começar em ~1 semana após alinhamento.",
        },
      ],
    },
    contributionGraph: {
      totalLabel: "contribuições no último ano",
      contributions: "contribuições",
      on: "em",
      less: "Menos",
      more: "Mais",
      locale: "pt-BR",
    },
    months: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    days: ["", "Seg", "", "Qua", "", "Sex", ""],
    timeline: [
      {
        period: "2026 – atual",
        title: "Pós em Eng. Software foco em DevOps",
        org: "Unifor",
        logo: "/assets/logos/logo-unifor.jpg",
        desc: "Pós-graduação com ênfase em práticas DevOps, CI/CD, observabilidade e arquitetura de sistemas distribuídos.",
        type: "education" as const,
        slug: "pos-devops",
        current: true,
      },
      {
        period: "2024 – 2026",
        title: "Desenvolvedor Web",
        org: "Energia Pecém",
        logo: "/assets/logos/logo-energia-pecem.jpg",
        desc: "APIs REST críticas para manutenção e segurança de usina termelétrica (~50% da geração elétrica do CE). Auditoria, compliance ISO/LGPD, monitoramento Grafana.",
        type: "work" as const,
        slug: "energia-pecem",
        current: false,
      },
      {
        period: "2023 – 2024",
        title: "Estagiário de Desenvolvimento",
        org: "Dataged",
        logo: "/assets/logos/logo-dataged.jpg",
        desc: "Desenvolvimento e manutenção de aplicações Java/Spring para ECM/GED em instituições públicas. Do levantamento de requisitos até a entrega.",
        type: "estagio" as const,
        slug: "dataged",
        current: false,
      },
      {
        period: "2023 – 2025",
        title: "Análise e Desenvolvimento de Sistemas",
        org: "Unifor",
        logo: "/assets/logos/logo-unifor.jpg",
        desc: "Formação em ADS com foco em engenharia de software e arquitetura de sistemas.",
        type: "education" as const,
        slug: "ADS",
        current: false,
      },
    ],
    projectsData: [
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
        status: "estavel",
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
        status: "estavel",
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
    ],
    terminalProjects: [
      {
        name: "attack-defense-lab",
        desc: "SOC Cybersec • Red Team vs Blue Team",
      },
      { name: "valvecraft", desc: "Jogo educativo • Trompete no navegador" },
      { name: "unimenu", desc: "Full-stack + Mobile • NestJS + React Native" },
      { name: "fala-pai", desc: "PWA em produção • ElevenLabs API" },
    ],
    projectsPageData: [
      {
        title: "Attack & Defense Lab",
        category: "security",
        slug: "attack-defense-lab",
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
        github: "https://github.com/Alanlan21/NestJS-Attack-and-Defense-Lab",
        demo: undefined as string | undefined,
      },
      {
        title: "Valvecraft",
        category: "frontend",
        slug: "valvecraft",
        description:
          "Jogo educativo para trompetistas. Treine dedilhado, leitura de partitura e senso de ritmo direto no navegador, com amostras de áudio reais e feedback visual em tempo real.",
        tags: [
          "React 19",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "VexFlow",
          "Tone.js",
        ],
        status: "beta",
        highlight:
          "Áudio real de trompete • Dois modos de jogo • Partituras com VexFlow",
        github: "https://github.com/Alanlan21/valvecraft",
        demo: "https://valvecraft.vercel.app",
      },
      {
        title: "UniMenu",
        category: "fullstack",
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
        status: "estavel",
        highlight: "Integração de pagamento Stripe com fluxo completo",
        github: "https://github.com/Alanlan21/unimenu",
        demo: undefined as string | undefined,
      },
      {
        title: "Fala-Pai",
        category: "frontend",
        slug: "fala-pai",
        description:
          "Aplicativo de comunicação assistiva que converte texto em fala de alta qualidade. Desenvolvido para pessoas com dificuldades de comunicação verbal, utilizando síntese de voz avançada da ElevenLabs.",
        tags: [
          "React",
          "Vite",
          "Tailwind",
          "ElevenLabs API",
          "PWA",
          "TypeScript",
        ],
        status: "estavel",
        highlight: "PWA instalável com síntese de voz premium",
        github: "https://github.com/Alanlan21/fala-pai",
        demo: "https://falapai.vercel.app",
      },
      {
        title: "Calote-bot",
        category: "automacao",
        slug: "calote-bot",
        description:
          "Bot de automação de cobrança via WhatsApp com templates dinâmicos, agendamento inteligente e CLI interativo. Automatiza o processo de cobrança com mensagens personalizadas e follow-ups programados.",
        tags: ["Node.js", "venom-bot", "dayjs", "inquirer", "node-schedule"],
        status: "estavel",
        highlight: "Templates com variáveis dinâmicas e scheduling cron-like",
        github: "https://github.com/Alanlan21/calote-bot",
        demo: undefined as string | undefined,
      },
    ],
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      collapse: "Collapse",
      expand: "Expand",
    },
    status: {
      available: "Available for work",
      finalizado: "finished",
      em_desenvolvimento: "in development",
      estavel: "stable",
      em_producao: "in production",
      beta: "beta",
    },
    experienceType: {
      work: "work",
      estagio: "internship",
      education: "education",
      workLabel: "Work Experience",
      estagioLabel: "Internship",
      educationLabel: "Education",
    },
    home: {
      exploreCta: "Explore projects",
      cv: "Resume",
      aboutTitle: "About",
      aboutSubtitle: "NestJS · TypeScript · React — 2 years in production",
      stackMain: "Main stack",
      stackAlso: "Also work with",
      careerTitle: "Career",
      terminalStatus: "Available for work",
      terminalNow:
        "Master's student in Software Engineering with focus on DevOps",
      projectsTitle: "Projects",
      projectsSubtitle: "Selected works",
      viewAll: "View all",
      ctaProjectQ: "Have a project in mind?",
      ctaProjectLink: "Let's talk",
      viewAllProjects: "View all projects",
      contactTitle: "Contact",
      contactSubtitle: "Have a project or opportunity? Let's talk.",
      availabilityTitle: "Availability",
      availabilityMsg:
        "Happy to hear about projects, opportunities, or just chat about tech. I respond quickly.",
      locationTitle: "Location",
      locationMsg: "Fortaleza, CE. Open to remote or hybrid.",
      footerContact: "Contact",
    },
    projectsPage: {
      title: "Projects",
      descPre: "A selection of projects showcasing my approach to",
      descArch: "architecture",
      descSec: "security",
      descAnd: "and",
      descBackend: "backend development",
      filterAll: "All",
      filterSecurity: "Security",
      filterFullstack: "Full-Stack",
      filterAutomation: "Automation",
      moreComing: "+ More projects coming soon",
    },
    projectDetail: {
      back: "Back to projects",
      backAll: "All projects",
      viewDetails: "View details",
      viewCode: "View code",
      viewDemo: "Live demo",
    },
    experienceDetail: {
      back: "Back to about",
      fullCareer: "Full career",
      letsChat: "Let's talk →",
    },
    contactPage: {
      title: "Contact",
      descPre:
        "Have an interesting project? An opportunity? Or just want to chat about system architecture?",
      descHighlight: "Let's talk.",
      methodsTitle: "Contact channels",
      emailDesc: "Preferred for detailed project discussions",
      githubDesc: "Check out my repositories and contributions",
      linkedinDesc: "For networking and professional opportunities",
      availabilityStatus: "Available for work",
      availabilityText:
        "Currently accepting freelance projects and full-time opportunities.",
      devModeTitle: "Dev mode",
      terminalComment: "# For a quick chat:",
      terminalNote: "Best channel for projects and opportunities",
      terminalReply: "Response within 24 business hours",
      whatToExpect: "What to expect",
      expect1: "Response within 24 business hours",
      expect2: "Technical discussion based on merit",
      expect3: "Clear proposal for freelance projects",
      sendEmailBtn: "Send email now",
      faqTitle: "FAQ",
      faq: [
        {
          q: "Do you work remotely?",
          a: "Yes! I work 100% remote, available for meetings during business hours (GMT-3).",
        },
        {
          q: "What's your hourly rate?",
          a: "Depends on scope and complexity. I prefer discussing the project first to give a fair estimate.",
        },
        {
          q: "Do you do frontend too?",
          a: "Yes, especially with React and React Native. But my strength is backend and systems architecture.",
        },
        {
          q: "Current availability?",
          a: "Available for part-time or full-time projects. I can start in ~1 week after alignment.",
        },
      ],
    },
    contributionGraph: {
      totalLabel: "contributions in the last year",
      contributions: "contributions",
      on: "on",
      less: "Less",
      more: "More",
      locale: "en-US",
    },
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    days: ["", "Mon", "", "Wed", "", "Fri", ""],
    timeline: [
      {
        period: "2026 – present",
        title: "M.Sc. Software Engineering, focus on DevOps",
        org: "Unifor",
        logo: "/assets/logos/logo-unifor.jpg",
        desc: "Graduate program focused on DevOps practices, CI/CD, observability and distributed systems architecture.",
        type: "education" as const,
        slug: "pos-devops",
        current: true,
      },
      {
        period: "2024 – 2026",
        title: "Web Developer",
        org: "Energia Pecém",
        logo: "/assets/logos/logo-energia-pecem.jpg",
        desc: "Critical REST APIs for maintenance and safety of a thermoelectric plant (~50% of CE power generation). Security auditing, ISO/LGPD compliance, Grafana monitoring.",
        type: "work" as const,
        slug: "energia-pecem",
        current: false,
      },
      {
        period: "2023 – 2024",
        title: "Development Intern",
        org: "Dataged",
        logo: "/assets/logos/logo-dataged.jpg",
        desc: "Development and maintenance of Java/Spring applications for ECM/DMS in public institutions. From requirements gathering to delivery.",
        type: "estagio" as const,
        slug: "dataged",
        current: false,
      },
      {
        period: "2023 – 2025",
        title: "Systems Analysis and Development",
        org: "Unifor",
        logo: "/assets/logos/logo-unifor.jpg",
        desc: "Undergraduate degree focused on software engineering and systems architecture.",
        type: "education" as const,
        slug: "ADS",
        current: false,
      },
    ],
    projectsData: [
      {
        slug: "attack-defense-lab",
        name: "Attack & Defense Lab",
        tagline: "Security simulation: Red Team vs Blue Team",
        category: "security",
        categoryColor: "emerald",
        status: "finished",
        tech: ["NestJS", "PostgreSQL", "React", "Python"],
        highlights: [
          "Defense-in-depth layers (WAF, rate limiting, honeypot)",
          "Payload suite to test your own defenses",
          "Learned a lot about offensive and defensive security",
        ],
        decision: "Study project focused on understanding security in practice",
      },
      {
        slug: "valvecraft",
        name: "Valvecraft",
        tagline: "Educational game for trumpet players in the browser",
        category: "frontend",
        categoryColor: "orange",
        status: "finished",
        tech: ["React 19", "TypeScript", "Vite", "VexFlow", "Tone.js"],
        highlights: [
          "Real trumpet audio samples per note",
          "Quiz mode with streaks and score multipliers",
          "Rhythm mode with playhead synced via Tone.Transport",
        ],
        decision:
          "VexFlow for sheet music rendering, Tone.js for precise audio timing",
      },
      {
        slug: "unimenu",
        name: "UniMenu",
        tagline: "Full-stack + Mobile, complete ordering system",
        category: "fullstack",
        categoryColor: "violet",
        status: "estavel",
        tech: ["NestJS", "React", "React Native", "MySQL", "Stripe"],
        highlights: [
          "Mobile app + web panel + unified API",
          "Stripe payment integration",
          "Multi-tenant JWT authentication",
        ],
        decision: "Decoupled NestJS modules for horizontal scalability",
      },
      {
        slug: "fala-pai",
        name: "FalaPai",
        tagline: "Assistive communication PWA with natural voice",
        category: "frontend",
        categoryColor: "cyan",
        status: "estavel",
        tech: ["React 19", "Vite", "ElevenLabs API", "PWA"],
        highlights: [
          "Human-indistinguishable voice synthesis",
          "Installable PWA with offline cache",
          "Quick phrases with local persistence",
        ],
        decision: "ElevenLabs chosen after benchmarking 4 TTS APIs",
      },
      {
        slug: "calote-bot",
        name: "CaloteBot",
        tagline: "WhatsApp debt collection bot with scheduling",
        category: "automation",
        categoryColor: "amber",
        status: "finished",
        tech: ["Node.js", "venom-bot", "dayjs", "inquirer"],
        highlights: [
          "Dynamic templates with variables (name, amount, days overdue)",
          "Per-contact message scheduling",
          "Image attachment and receipt support",
        ],
        decision:
          "Migrated from Python/Selenium to Node.js + venom-bot for better stability",
      },
    ],
    terminalProjects: [
      {
        name: "attack-defense-lab",
        desc: "SOC Cybersec • Red Team vs Blue Team",
      },
      { name: "valvecraft", desc: "Educational game • Trumpet in the browser" },
      { name: "unimenu", desc: "Full-stack + Mobile • NestJS + React Native" },
      { name: "fala-pai", desc: "PWA in production • ElevenLabs API" },
    ],
    projectsPageData: [
      {
        title: "Attack & Defense Lab",
        category: "security",
        slug: "attack-defense-lab",
        description:
          "Educational SOC platform simulating Red Team vs Blue Team scenarios. Implements 7 defense-in-depth layers, including WAF, honeypots, distributed rate limiting and threat scoring with temporal decay.",
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
        highlight: "136+ test payloads covering OWASP Top 10",
        github: "https://github.com/Alanlan21/NestJS-Attack-and-Defense-Lab",
        demo: undefined as string | undefined,
      },
      {
        title: "Valvecraft",
        category: "frontend",
        slug: "valvecraft",
        description:
          "Educational game for trumpet players. Practice fingering, sheet music reading and rhythm in the browser, with real audio samples and real-time visual feedback.",
        tags: [
          "React 19",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "VexFlow",
          "Tone.js",
        ],
        status: "beta",
        highlight: "Real trumpet audio • Two game modes • VexFlow sheet music",
        github: "https://github.com/Alanlan21/valvecraft",
        demo: "https://valvecraft.vercel.app",
      },
      {
        title: "UniMenu",
        category: "fullstack",
        slug: "unimenu",
        description:
          "Complete food ordering system for UNIFOR canteens and restaurants. Cross-platform full-stack architecture with robust backend, native mobile app and web admin panel.",
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
        status: "estavel",
        highlight: "Full Stripe payment integration with complete flow",
        github: "https://github.com/Alanlan21/unimenu",
        demo: undefined as string | undefined,
      },
      {
        title: "Fala-Pai",
        category: "frontend",
        slug: "fala-pai",
        description:
          "Assistive communication app that converts text to high-quality speech. Built for people with verbal communication difficulties, using ElevenLabs advanced voice synthesis.",
        tags: [
          "React",
          "Vite",
          "Tailwind",
          "ElevenLabs API",
          "PWA",
          "TypeScript",
        ],
        status: "estavel",
        highlight: "Installable PWA with premium voice synthesis",
        github: "https://github.com/Alanlan21/fala-pai",
        demo: "https://falapai.vercel.app",
      },
      {
        title: "Calote-bot",
        category: "automacao",
        slug: "calote-bot",
        description:
          "WhatsApp collection automation bot with dynamic templates, smart scheduling and interactive CLI. Automates the debt collection process with personalized messages and programmed follow-ups.",
        tags: ["Node.js", "venom-bot", "dayjs", "inquirer", "node-schedule"],
        status: "estavel",
        highlight: "Dynamic variable templates and cron-like scheduling",
        github: "https://github.com/Alanlan21/calote-bot",
        demo: undefined as string | undefined,
      },
    ],
  },
};

export type T = typeof translations.pt;

// ── Context ───────────────────────────────────────────────────────────────────

interface LanguageContextValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Locale | null;
    if (stored === "pt" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored === "en" ? "en" : "pt-BR";
    }
  }, []);

  function setLang(newLang: Locale) {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang === "en" ? "en" : "pt-BR";
  }

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as T }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
