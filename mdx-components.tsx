import type { MDXComponents } from "mdx/types";
import { CodeBlock, InlineCode } from "@/components/code-block";
import { Terminal } from "@/components/terminal";
import { TechStack, TechBadge } from "@/components/tech-stack";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with anchor links
    h1: ({ children, ...props }) => (
      <h1
        className="scroll-m-20 text-4xl font-bold tracking-tight mb-6"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="scroll-m-20 text-2xl font-bold tracking-tight mt-12 mb-4 border-b border-border pb-2"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-3"
        {...props}
      >
        {children}
      </h3>
    ),

    // Paragraphs
    p: ({ children, ...props }) => (
      <p className="leading-7 mb-4 text-muted-foreground" {...props}>
        {children}
      </p>
    ),

    // Links
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-emerald-500 underline underline-offset-4 hover:text-emerald-400 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),

    // Lists
    ul: ({ children, ...props }) => (
      <ul className="mb-4 ml-6 list-disc [&>li]:mt-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="mb-4 ml-6 list-decimal [&>li]:mt-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-muted-foreground" {...props}>
        {children}
      </li>
    ),

    // Blockquote
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mt-6 mb-6 border-l-4 border-emerald-500 bg-accent/50 py-4 px-6 italic"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Code
    code: ({ children, className, ...props }) => {
      // Inline code
      if (!className) {
        return <InlineCode {...props}>{children}</InlineCode>;
      }

      // Code block (handled by pre)
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    pre: ({ children }) => {
      // Extract code content and language from children
      const codeElement = children as React.ReactElement<{
        className?: string;
        children?: string;
      }>;
      const className = codeElement?.props?.className || "";
      const language = className.replace(/language-/, "") || "typescript";
      const code = codeElement?.props?.children || "";

      return (
        <div className="mb-6">
          <CodeBlock code={String(code).trim()} language={language} />
        </div>
      );
    },

    // Tables
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="border-b border-border" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th className="py-2 px-4 text-left font-semibold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="py-2 px-4 border-b border-border" {...props}>
        {children}
      </td>
    ),

    // Horizontal rule
    hr: (props) => <hr className="my-8 border-border" {...props} />,

    // Strong and emphasis
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-foreground" {...props}>
        {children}
      </strong>
    ),

    // Custom components
    Terminal,
    TechStack,
    TechBadge,
    CodeBlock,

    ...components,
  };
}
