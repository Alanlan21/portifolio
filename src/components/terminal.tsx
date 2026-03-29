"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TerminalProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export function Terminal({
  children,
  className,
  title = "terminal",
}: TerminalProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm overflow-hidden",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/60">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
        </div>
        <span className="ml-2 text-xs text-zinc-500 font-mono tracking-wide">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="p-5 font-mono text-sm text-zinc-100 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

interface TerminalLineProps {
  prompt?: string;
  command?: string;
  output?: React.ReactNode;
  delay?: number;
  animate?: boolean;
}

export function TerminalLine({
  prompt = "$",
  command,
  output,
  delay = 0,
  animate = true,
}: TerminalLineProps) {
  const [showCommand, setShowCommand] = useState(!animate);
  const [showOutput, setShowOutput] = useState(!animate);
  const [typedText, setTypedText] = useState(!animate ? command : "");

  useEffect(() => {
    if (!animate || !command) return;

    const showTimer = setTimeout(() => {
      setShowCommand(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < command.length) {
          setTypedText(command.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowOutput(true), 200);
        }
      }, 50);
    }, delay);

    return () => clearTimeout(showTimer);
  }, [animate, command, delay]);

  return (
    <div className="space-y-1">
      {showCommand && (
        <div className="flex items-center gap-2">
          <span className="terminal-prompt">{prompt}</span>
          <span className="text-zinc-50 font-medium">{typedText}</span>
          {animate && typedText !== command && (
            <motion.span
              className="inline-block w-2 h-4 bg-zinc-100"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
        </div>
      )}
      {showOutput && output && (
        <motion.div
          initial={animate ? { opacity: 0, y: 5 } : undefined}
          animate={{ opacity: 1, y: 0 }}
          className="text-zinc-300 pl-4 border-l border-zinc-800 ml-1"
        >
          {output}
        </motion.div>
      )}
    </div>
  );
}

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypingAnimation({
  text,
  className,
  delay = 0,
  speed = 50,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  );
}
