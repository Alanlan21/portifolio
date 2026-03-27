import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  status?: "em desenvolvimento" | "finalizado" | "estável";
  highlight?: string;
  github?: string;
  demo?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  slug,
  tags,
  status = "finalizado",
  highlight,
  github,
  demo,
  className,
}: ProjectCardProps) {
  const statusColors = {
    "em desenvolvimento":
      "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    finalizado: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    estável: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5",
        className,
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold group-hover:text-emerald-500 transition-colors">
            {title}
          </CardTitle>
          <Badge
            variant="outline"
            className={cn("text-xs", statusColors[status])}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {highlight && (
          <div className="px-3 py-2 rounded-md bg-accent/50 border-l-2 border-emerald-500">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-emerald-500">→</span> {highlight}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-mono">
              {tag}
            </Badge>
          ))}
          {tags.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 5}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors"
              >
                <Github className="h-4 w-4 text-muted-foreground" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            )}
          </div>

          <Link
            href={`/projetos/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors"
          >
            Ver detalhes
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
