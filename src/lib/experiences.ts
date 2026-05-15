import fs from "fs";
import path from "path";
import matter from "gray-matter";

const experiencesDirectory = path.join(
  process.cwd(),
  "src/content/experiences",
);

export interface ExperienceFrontmatter {
  title: string;
  organization: string;
  period: string;
  logo: string;
  type: "work" | "education" | "estagio";
  tags: string[];
  description: string;
  location?: string;
}

export interface Experience {
  slug: string;
  frontmatter: ExperienceFrontmatter;
  content: string;
}

export function getExperienceSlugs(): string[] {
  if (!fs.existsSync(experiencesDirectory)) {
    return [];
  }
  return fs
    .readdirSync(experiencesDirectory)
    .filter((file) => file.endsWith(".mdx") && !file.endsWith(".en.mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getExperienceBySlug(slug: string): Experience | null {
  const fullPath = path.join(experiencesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, frontmatter: data as ExperienceFrontmatter, content };
}

export function getAllExperiences(): Experience[] {
  const slugs = getExperienceSlugs();
  return slugs
    .map((slug) => getExperienceBySlug(slug))
    .filter((exp): exp is Experience => exp !== null);
}

export function getExperienceBySlugLocale(
  slug: string,
  locale: string,
): Experience | null {
  if (locale === "en") {
    const enPath = path.join(experiencesDirectory, `${slug}.en.mdx`);
    if (fs.existsSync(enPath)) {
      const fileContents = fs.readFileSync(enPath, "utf8");
      const { data, content } = matter(fileContents);
      return { slug, frontmatter: data as ExperienceFrontmatter, content };
    }
  }
  return getExperienceBySlug(slug);
}
