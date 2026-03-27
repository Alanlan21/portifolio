"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = true,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string>("");

  useEffect(() => {
    // Importação dinâmica do shiki para evitar problemas de SSR
    const highlight = async () => {
      const { codeToHtml } = await import("shiki");
      const html = await codeToHtml(code, {
        lang: language,
        theme: "github-dark-default",
      });
      setHighlightedHtml(html);
    };
    highlight();
  }, [code, language]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "relative rounded-lg border border-border bg-zinc-950 overflow-hidden group",
        className,
      )}
    >
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-border">
          <span className="text-xs text-zinc-500 font-mono">{filename}</span>
          <span className="text-xs text-zinc-600 font-mono">{language}</span>
        </div>
      )}

      {/* Copy button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800/80 hover:bg-zinc-700"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 text-zinc-400" />
        )}
      </Button>

      {/* Code content */}
      <div className="overflow-x-auto">
        {highlightedHtml ? (
          <div
            className="p-4 text-sm [&_pre]:!bg-transparent [&_code]:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-zinc-100 font-mono">
                {showLineNumbers
                  ? lines.map((line, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex",
                          highlightLines.includes(i + 1) && "bg-emerald-500/10",
                        )}
                      >
                        <span className="select-none text-zinc-600 w-8 text-right pr-4">
                          {i + 1}
                        </span>
                        <span>{line}</span>
                      </div>
                    ))
                  : code}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente simples para código inline
interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "px-1.5 py-0.5 rounded bg-zinc-800 text-emerald-400 text-sm font-mono",
        className,
      )}
    >
      {children}
    </code>
  );
}
