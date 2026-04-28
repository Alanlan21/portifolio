import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Devicon CDN base URL
const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Map technology names to devicon paths (using versions with better contrast)
const techIcons: Record<string, { icon: string; invert?: boolean }> = {
  // Languages
  typescript: { icon: `${DEVICON_BASE}/typescript/typescript-original.svg` },
  javascript: { icon: `${DEVICON_BASE}/javascript/javascript-original.svg` },
  python: { icon: `${DEVICON_BASE}/python/python-original.svg` },

  // Backend
  "node.js": { icon: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
  nodejs: { icon: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
  nestjs: { icon: `${DEVICON_BASE}/nestjs/nestjs-original.svg` },
  java: { icon: `${DEVICON_BASE}/java/java-original.svg` },
  spring: { icon: `${DEVICON_BASE}/spring/spring-original.svg` },

  // Frontend
  react: { icon: `${DEVICON_BASE}/react/react-original.svg` },
  "react native": { icon: `${DEVICON_BASE}/react/react-original.svg` },
  nextjs: { icon: `${DEVICON_BASE}/nextjs/nextjs-original.svg`, invert: true },
  "next.js": {
    icon: `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
    invert: true,
  },
  tailwind: { icon: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg` },
  vite: { icon: `${DEVICON_BASE}/vitejs/vitejs-original.svg` },

  // Databases
  postgresql: { icon: `${DEVICON_BASE}/postgresql/postgresql-original.svg` },
  mysql: { icon: `${DEVICON_BASE}/mysql/mysql-original.svg` },
  mongodb: { icon: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
  redis: { icon: `${DEVICON_BASE}/redis/redis-original.svg` },

  // DevOps & Tools
  docker: { icon: `${DEVICON_BASE}/docker/docker-original.svg` },
  aws: {
    icon: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
    invert: true,
  },
  git: { icon: `${DEVICON_BASE}/git/git-original.svg` },
  "github actions": {
    icon: `${DEVICON_BASE}/githubactions/githubactions-original.svg`,
  },
  kubernetes: { icon: `${DEVICON_BASE}/kubernetes/kubernetes-original.svg` },

  // ORMs & Others
  typeorm: { icon: `${DEVICON_BASE}/typeorm/typeorm-original.svg` },
  prisma: { icon: `${DEVICON_BASE}/prisma/prisma-original.svg`, invert: true },
  grafana: { icon: `${DEVICON_BASE}/grafana/grafana-original.svg` },
};

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  variant?: "default" | "compact";
}

export function TechBadge({
  name,
  size = "md",
  showLabel = true,
  variant = "default",
}: TechBadgeProps) {
  const tech = techIcons[name.toLowerCase()];

  const sizeClasses = {
    sm: { container: "w-8 h-8", icon: 18 },
    md: { container: "w-11 h-11", icon: 26 },
    lg: { container: "w-14 h-14", icon: 32 },
  };

  const sizes = sizeClasses[size];

  if (variant === "compact") {
    return (
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/40 hover:border-zinc-600/60 hover:bg-zinc-800/80 transition-all cursor-default">
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              {tech ? (
                <Image
                  src={tech.icon}
                  alt={name}
                  width={18}
                  height={18}
                  className={cn("object-contain", tech.invert && "dark:invert")}
                  unoptimized
                />
              ) : (
                <span className="text-[10px] font-bold text-zinc-500">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <span className="text-sm text-zinc-300">{name}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex flex-col items-center gap-2 group cursor-default">
          <div
            className={cn(
              "flex items-center justify-center rounded-xl bg-zinc-800/70 border border-zinc-700/50 shrink-0 transition-all",
              "group-hover:border-zinc-600/70 group-hover:bg-zinc-800/90 group-hover:scale-105",
              sizes.container,
            )}
          >
            {tech ? (
              <Image
                src={tech.icon}
                alt={name}
                width={sizes.icon}
                height={sizes.icon}
                className={cn("object-contain", tech.invert && "dark:invert")}
                unoptimized
              />
            ) : (
              <span className="text-sm font-bold text-zinc-400">
                {name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          {showLabel && (
            <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors text-center">
              {name}
            </span>
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
  columns?: 2 | 3 | 4 | 6;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "grid" | "flow";
  className?: string;
}

export function TechStack({
  technologies,
  columns = 3,
  showLabels = true,
  size = "md",
  variant = "grid",
  className,
}: TechStackProps) {
  const gridCols = {
    2: "grid-cols-3 sm:grid-cols-2",
    3: "grid-cols-3 sm:grid-cols-4 md:grid-cols-6",
    4: "grid-cols-3 sm:grid-cols-4 md:grid-cols-6",
    6: "grid-cols-3 sm:grid-cols-4 md:grid-cols-6",
  };

  if (variant === "flow") {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {technologies.map((tech) => (
          <TechBadge
            key={tech}
            name={tech}
            size="sm"
            showLabel={true}
            variant="compact"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
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
