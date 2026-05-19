"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

interface KittyTerminalProps {
  className?: string;
}

/* ─── Typewriter ─────────────────────────────────────────────── */
function Typewriter({
  text,
  speed = 42,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone: () => void;
}) {
  const [typed, setTyped] = useState("");
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        setTimeout(() => !cancelled && doneRef.current(), 220);
      } else {
        const jitter = speed + Math.random() * 28 - 14;
        setTimeout(tick, Math.max(20, jitter));
      }
    };
    setTimeout(tick, speed);
    return () => {
      cancelled = true;
    };
  }, [text, speed]);

  return <span className="kitty-pl-cmd">{typed}</span>;
}

/* ─── Prompt (powerlevel10k style) ───────────────────────────── */
function PowerlinePrompt({
  command,
  typing = false,
  onTypeDone,
  active = false,
}: {
  command?: string;
  typing?: boolean;
  onTypeDone?: () => void;
  active?: boolean;
}) {
  return (
    <div className="kitty-pl-block">
      <div className="kitty-pl-line">
        <span className="kitty-pl-corner">╭─</span>
        <span className="kitty-pl-seg kitty-pl-user">alan</span>
        <span className="kitty-pl-dim">@</span>
        <span className="kitty-pl-seg kitty-pl-host">portfolio</span>
        <span className="kitty-pl-sep">·</span>
        <span className="kitty-pl-seg kitty-pl-path">~/dev/portfolio</span>
        <span className="kitty-pl-sep">·</span>
        <span className="kitty-pl-seg kitty-pl-branch">⎇ main</span>
        <span className="kitty-pl-sep">·</span>
        <span className="kitty-pl-status">✓</span>
      </div>
      <div className="kitty-pl-line kitty-pl-input">
        <span className="kitty-pl-corner">╰─</span>
        <span className="kitty-pl-arrow">❯</span>
        {typing && command ? (
          <Typewriter text={command} onDone={onTypeDone ?? (() => {})} />
        ) : command ? (
          <span className="kitty-pl-cmd">{command}</span>
        ) : null}
        {(typing || active) && (
          <span className="kitty-cursor" aria-hidden />
        )}
      </div>
    </div>
  );
}

/* ─── Output components ──────────────────────────────────────── */
function WhoamiOutput() {
  return (
    <div className="kitty-output kitty-output--name">
      <div className="kitty-name">Alan Regis</div>
      <div className="kitty-name-sub">Software Developer · Backend-focused</div>
    </div>
  );
}

function StatusOutput({ status }: { status: string }) {
  return (
    <div className="kitty-output">
      <div className="kitty-status-line">
        <span className="kitty-pulse-dot" />
        <span className="kitty-status-text">{status}</span>
      </div>
    </div>
  );
}

const SKILLS_GROUPS: { label: string; items: string[] }[] = [
  { label: "backend",  items: ["Node.js", "NestJS", "TypeScript", "Java", "Spring"] },
  { label: "frontend", items: ["React", "Next.js", "React Native"] },
  { label: "devops",   items: ["Docker", "AWS", "GitHub Actions"] },
];

function SkillsOutput() {
  return (
    <div className="kitty-output kitty-skills">
      {SKILLS_GROUPS.map(({ label, items }) => (
        <div key={label} className="kitty-skill-row">
          <span className="kitty-skill-label">{label}</span>
          <span className="kitty-skill-list">
            {items.map((it, i) => (
              <span key={it}>
                <span className="kitty-skill-item">{it}</span>
                {i < items.length - 1 && (
                  <span className="kitty-skill-sep"> · </span>
                )}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

function NowOutput({ now }: { now: string }) {
  return (
    <div className="kitty-output">
      <div className="kitty-now-line">
        <span className="kitty-now-arrow">▸</span>
        <span className="kitty-now-text">{now}</span>
      </div>
    </div>
  );
}

function ProjectsOutput({ projects }: { projects: { name: string; desc: string }[] }) {
  return (
    <div className="kitty-output kitty-ls">
      {projects.map((p) => (
        <div key={p.name} className="kitty-ls-row">
          <span className="kitty-ls-name">{p.name}/</span>
          <span className="kitty-ls-desc">{p.desc}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Sequencer ─────────────────────────────────────────────── */
type Step =
  | { kind: "cmd"; text: string }
  | { kind: "out"; node: ReactNode }
  | { kind: "active" };

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function KittyTerminal({ className }: KittyTerminalProps) {
  const { t } = useLanguage();

  const steps: Step[] = [
    { kind: "cmd", text: "whoami" },
    { kind: "out", node: <WhoamiOutput /> },
    { kind: "cmd", text: "echo $STATUS" },
    { kind: "out", node: <StatusOutput status={t.home.terminalStatus} /> },
    { kind: "cmd", text: "cat skills.json" },
    { kind: "out", node: <SkillsOutput /> },
    { kind: "cmd", text: "cat ./now" },
    { kind: "out", node: <NowOutput now={t.home.terminalNow} /> },
    { kind: "cmd", text: "ls projects/" },
    { kind: "out", node: <ProjectsOutput projects={t.terminalProjects} /> },
    { kind: "active" },
  ];

  const [doneIdx, setDoneIdx] = useState(-1);
  const currentIdx = doneIdx + 1;

  useEffect(() => {
    const current = steps[currentIdx];
    if (!current) return;
    if (current.kind === "cmd") return; // wait for typewriter
    if (current.kind === "active") return; // terminal idle
    // out: auto-advance after pause so the user can read
    const t = setTimeout(() => setDoneIdx(currentIdx), 480);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx]);

  return (
    <div className={cn("kitty-terminal", className)}>
      {/* Title bar */}
      <div className="kitty-titlebar">
        <div className="kitty-traffic">
          <span className="kitty-light kitty-light--red" />
          <span className="kitty-light kitty-light--yellow" />
          <span className="kitty-light kitty-light--green" />
        </div>
        <div className="kitty-tabs">
          <div className="kitty-tab kitty-tab--active">
            <span className="kitty-tab-icon">λ</span>
            <span className="kitty-tab-label">zsh</span>
          </div>
        </div>
        <span className="kitty-title-text">alan@portfolio: ~/dev/portfolio</span>
      </div>

      {/* Body */}
      <div className="kitty-body">
        {steps.map((step, i) => {
          if (i > currentIdx) return null;
          const isCurrent = i === currentIdx;

          if (step.kind === "cmd") {
            return (
              <PowerlinePrompt
                key={i}
                command={step.text}
                typing={isCurrent}
                onTypeDone={isCurrent ? () => setDoneIdx(i) : undefined}
              />
            );
          }
          if (step.kind === "out") {
            return <Reveal key={i}>{step.node}</Reveal>;
          }
          return <PowerlinePrompt key={i} active />;
        })}
      </div>

    </div>
  );
}
