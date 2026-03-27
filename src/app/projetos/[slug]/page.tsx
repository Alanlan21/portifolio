import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Clock } from "lucide-react";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { useMDXComponents } from "../../../../mdx-components";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import readingTime from "reading-time";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: `${project.frontmatter.title} | Alan Regis`,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;
  const stats = readingTime(content);

  // Compile and run MDX
  const code = await compile(content, {
    outputFormat: "function-body",
    development: false,
  });

  const { default: MDXContent } = await run(String(code), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  const components = useMDXComponents({});

  const statusColors = {
    "em desenvolvimento":
      "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    finalizado: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    estável: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />

        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_200px] gap-12">
            {/* Main content */}
            <main className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link
                  href="/projetos"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para projetos
                </Link>
              </div>

              {/* Header */}
              <header className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className={statusColors[frontmatter.status]}
                  >
                    {frontmatter.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {stats.text}
                  </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {frontmatter.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-6">
                  {frontmatter.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {frontmatter.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {frontmatter.github && (
                    <Button asChild variant="outline" className="gap-2">
                      <a
                        href={frontmatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Ver código
                      </a>
                    </Button>
                  )}
                  {frontmatter.demo && (
                    <Button asChild className="gap-2">
                      <a
                        href={frontmatter.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver demo
                      </a>
                    </Button>
                  )}
                </div>
              </header>

              {/* Content */}
              <article className="prose prose-zinc dark:prose-invert max-w-none">
                <MDXContent components={components} />
              </article>

              {/* Footer navigation */}
              <footer className="mt-16 pt-8 border-t border-border">
                <div className="flex justify-between items-center">
                  <Link
                    href="/projetos"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Todos os projetos
                  </Link>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    Gostou? Vamos conversar
                  </Link>
                </div>
              </footer>
            </main>

            {/* TOC */}
            <aside className="hidden xl:block">
              <TableOfContents />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
