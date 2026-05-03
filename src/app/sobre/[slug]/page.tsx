import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import { getExperienceBySlug, getExperienceSlugs } from "@/lib/experiences";
import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return { title: "Experiência não encontrada" };
  }

  return {
    title: `${experience.frontmatter.title} | ${experience.frontmatter.organization} | Alan Regis`,
    description: experience.frontmatter.description,
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  const { frontmatter, content } = experience;

  const code = await compile(content, {
    outputFormat: "function-body",
    development: false,
    remarkPlugins: [remarkGfm],
  });

  const { default: MDXContent } = await run(String(code), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  const components = getMDXComponents({});

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para sobre
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl border border-zinc-700/50 overflow-hidden shrink-0 bg-white">
              <Image
                src={frontmatter.logo}
                alt={frontmatter.organization}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge
                  variant="outline"
                  className={
                    frontmatter.type === "work"
                      ? "border-emerald-500/30 text-emerald-400"
                      : frontmatter.type === "estagio"
                        ? "border-amber-500/30 text-amber-400"
                        : "border-blue-500/30 text-blue-400"
                  }
                >
                  {frontmatter.type === "work" ? (
                    <Briefcase className="h-3 w-3 mr-1" />
                  ) : (
                    <GraduationCap className="h-3 w-3 mr-1" />
                  )}
                  {frontmatter.type === "work"
                    ? "Experiência"
                    : frontmatter.type === "estagio"
                      ? "Estágio"
                      : "Formação"}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">
                {frontmatter.title}
              </h1>
              <p className="text-xl text-zinc-400">
                {frontmatter.organization}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-500 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {frontmatter.period}
            </span>
            {frontmatter.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {frontmatter.location}
              </span>
            )}
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            {frontmatter.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXContent components={components} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Trajetória completa
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              Vamos conversar →
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
