import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Ícones das tecnologias mais comuns
const techIcons: Record<string, { icon: string; color: string }> = {
  // Languages
  typescript: { icon: "TS", color: "bg-blue-500" },
  javascript: { icon: "JS", color: "bg-yellow-500" },
  python: { icon: "PY", color: "bg-blue-400" },
  rust: { icon: "RS", color: "bg-orange-600" },
  go: { icon: "GO", color: "bg-cyan-500" },

  // Frameworks
  nestjs: { icon: "N", color: "bg-red-500" },
  nextjs: {
    icon: "▲",
    color: "bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900",
  },
  react: { icon: "⚛", color: "bg-cyan-400" },
  "react native": { icon: "RN", color: "bg-cyan-500" },
  expo: { icon: "EX", color: "bg-zinc-800" },
  express: { icon: "EX", color: "bg-zinc-700" },
  fastify: { icon: "F", color: "bg-zinc-800" },
  vite: { icon: "⚡", color: "bg-purple-500" },

  // Databases
  postgresql: { icon: "PG", color: "bg-blue-600" },
  mysql: { icon: "MY", color: "bg-blue-700" },
  mongodb: { icon: "MG", color: "bg-green-600" },
  redis: { icon: "RD", color: "bg-red-600" },

  // Tools
  docker: { icon: "🐳", color: "bg-blue-500" },
  kubernetes: { icon: "K8", color: "bg-blue-600" },
  aws: { icon: "☁", color: "bg-orange-500" },
  vercel: {
    icon: "▲",
    color: "bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900",
  },

  // Other
  typeorm: { icon: "TO", color: "bg-orange-500" },
  prisma: { icon: "◮", color: "bg-zinc-800" },
  jwt: { icon: "🔐", color: "bg-purple-600" },
  stripe: { icon: "S", color: "bg-purple-500" },
  tailwind: { icon: "TW", color: "bg-cyan-500" },
  pwa: { icon: "📱", color: "bg-purple-500" },
  "elevenlabs api": { icon: "11", color: "bg-zinc-800" },
  "node.js": { icon: "N", color: "bg-green-600" },
  nodejs: { icon: "N", color: "bg-green-600" },
};

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function TechBadge({
  name,
  size = "md",
  showLabel = true,
}: TechBadgeProps) {
  const tech = techIcons[name.toLowerCase()] || {
    icon: name.slice(0, 2).toUpperCase(),
    color: "bg-zinc-600",
  };

  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-center justify-center rounded-md font-bold text-white shrink-0",
              tech.color,
              sizeClasses[size],
            )}
          >
            {tech.icon}
          </div>
          {showLabel && (
            <span className="text-sm text-muted-foreground">{name}</span>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

interface TechStackProps {
  technologies: string[];
  columns?: 2 | 3 | 4;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechStack({
  technologies,
  columns = 3,
  showLabels = true,
  size = "md",
  className,
}: TechStackProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-3", gridCols[columns], className)}>
      {technologies.map((tech) => (
        <TechBadge key={tech} name={tech} size={size} showLabel={showLabels} />
      ))}
    </div>
  );
}

// Versão compacta para usar em cards
interface TechStackInlineProps {
  technologies: string[];
  max?: number;
  className?: string;
}

export function TechStackInline({
  technologies,
  max = 6,
  className,
}: TechStackInlineProps) {
  const displayed = technologies.slice(0, max);
  const remaining = technologies.length - max;

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {displayed.map((tech) => (
        <TechBadge key={tech} name={tech} size="sm" showLabel={false} />
      ))}
      {remaining > 0 && (
        <span className="text-xs text-muted-foreground ml-1">+{remaining}</span>
      )}
    </div>
  );
}
