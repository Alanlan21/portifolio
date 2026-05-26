"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useLanguage, type Locale } from "@/lib/i18n";

interface Skills {
  backend: string[];
  frontend: string[];
  devops: string[];
}

interface KittyTerminalProps {
  className?: string;
  skills: Skills;
}

type Line = { id: number; node: ReactNode };

const STACK: { key: keyof Skills; tone: string }[] = [
  { key: "backend", tone: "green" },
  { key: "frontend", tone: "blue" },
  { key: "devops", tone: "yellow" },
];

const CMD_NAMES = ["about", "stack", "projects", "contact", "cv", "help"];

const UI = {
  pt: {
    whoami:
      "alan · backend dev em fortaleza · trompetista nas horas vagas · disponível pra remoto",
    hint: "Digite um comando ou clique —",
    helpTitle: "comandos disponíveis",
    notFound: (c: string) => `comando não encontrado: ${c}`,
    notFoundTip: "digite 'help' para a lista de comandos",
    cvMsg: "iniciando download do currículo (PDF)…",
    projectsTip: "› veja os detalhes na seção Projetos",
    contactTitle: "// vamos conversar",
    sudoMsg: "voce nao esta no sudoers. esse incidente sera reportado.",
    rmMsg: "boa tentativa. esse terminal e bulletproof.",
    npmInstalling: "instalando 1.847.392 pacotes...",
    npmJoke: "brincadeira kkkkkkk",
    exitMsg: "sessão encerrada. até logo.",
    exitReopenHint: "clique para reabrir",
    themeChanged: (theme: string) => `tema alterado para ${theme}.`,
    langChanged: (l: string) => `idioma alterado para ${l}.`,
    historyEmpty: "nenhum comando no histórico ainda.",
    cmdDesc: {
      about: "quem sou eu e o que faço",
      stack: "tecnologias que uso no dia a dia",
      projects: "projetos selecionados",
      contact: "onde me encontrar",
      cv: "baixar meu currículo",
      clear: "limpar o terminal",
      help: "esta lista de comandos",
    } as Record<string, string>,
  },
  en: {
    whoami:
      "alan · backend dev in fortaleza, brazil · trumpet player off-hours · open to remote",
    hint: "Type a command or click —",
    helpTitle: "available commands",
    notFound: (c: string) => `command not found: ${c}`,
    notFoundTip: "type 'help' for the command list",
    cvMsg: "starting résumé download (PDF)…",
    projectsTip: "› see the details in the Projects section",
    contactTitle: "// let's talk",
    sudoMsg: "you are not in the sudoers file. this incident will be reported.",
    rmMsg: "nice try. this terminal is bulletproof.",
    npmInstalling: "installing 1,847,392 packages...",
    npmJoke: "just kidding lol",
    exitMsg: "session ended. goodbye.",
    exitReopenHint: "click to reopen",
    themeChanged: (theme: string) => `theme changed to ${theme}.`,
    langChanged: (l: string) => `language changed to ${l}.`,
    historyEmpty: "no commands in history yet.",
    cmdDesc: {
      about: "who i am and what i do",
      stack: "tech i use day to day",
      projects: "selected projects",
      contact: "where to find me",
      cv: "download my résumé",
      clear: "clear the terminal",
      help: "this command list",
    } as Record<string, string>,
  },
};

function PromptLabel() {
  return (
    <>
      <span className="kitty-cmd-user">alan</span>
      <span className="kitty-cmd-host">@portifolio</span>
      <span className="kitty-cmd-cwd">~</span>
      <span className="kitty-cmd-arrow">❯</span>
    </>
  );
}

export function KittyTerminal({ className, skills }: KittyTerminalProps) {
  const { t, lang, setLang } = useLanguage();
  const { setTheme } = useTheme();
  const ui = UI[lang];
  const reduce = !!useReducedMotion();

  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [bootTyped, setBootTyped] = useState("");
  const [closed, setClosed] = useState(false);

  const idRef = useRef(0);
  const historyRef = useRef<string[]>([]);
  const histIdxRef = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Always points to the latest boot-finish function so the boot
  // animation uses the correct language even if it fires after
  // localStorage has updated the lang (fixes the i18n bug).
  const bootFinishRef = useRef<() => void>(() => {});

  const cvHref = lang === "en" ? "/cv-alan-regis-en.pdf" : "/cv-alan-regis.pdf";

  const nextId = () => ++idRef.current;
  const push = (...nodes: ReactNode[]) =>
    setLines((prev) => [
      ...prev,
      ...nodes.map((n) => ({ id: nextId(), node: n })),
    ]);

  /* ─── Outputs ──────────────────────────────────────────────── */
  function echoLine(cmd: string): ReactNode {
    return (
      <div className="kitty-cmd">
        <PromptLabel />
        <span className="kitty-cmd-text">{cmd}</span>
      </div>
    );
  }

  function whoamiOutput(): ReactNode {
    return (
      <div className="kitty-out">
        <span className="kitty-who-tag">{ui.whoami}</span>
      </div>
    );
  }

  function aboutOutput(): ReactNode {
    return (
      <div className="kitty-out kitty-out--text">
        <p>{t.home.aboutDesc}</p>
        <p className="kitty-out-dim">{t.home.terminalNow}</p>
      </div>
    );
  }

  function stackOutput(): ReactNode {
    return (
      <div className="kitty-out">
        {STACK.map(({ key, tone }) => (
          <div key={key} className="kitty-row">
            <span className={cn("kitty-key", `kitty-key--${tone}`)}>{key}</span>
            <span className="kitty-val">{skills[key].join("  ")}</span>
          </div>
        ))}
      </div>
    );
  }

  function projectsOutput(): ReactNode {
    return (
      <div className="kitty-out">
        {t.projectsData.map((p) => (
          <div key={p.slug} className="kitty-row">
            <span className="kitty-proj">{p.slug}/</span>
            <span className="kitty-val">{p.tagline}</span>
          </div>
        ))}
        <a href="/#trabalho" className="kitty-out-link">
          {ui.projectsTip}
        </a>
      </div>
    );
  }

  function contactOutput(): ReactNode {
    return (
      <div className="kitty-out">
        <div className="kitty-out-dim">{ui.contactTitle}</div>
        <div className="kitty-row">
          <span className="kitty-key kitty-key--blue">github</span>
          <a
            className="kitty-link"
            href="https://github.com/Alanlan21"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Alanlan21
          </a>
        </div>
        <div className="kitty-row">
          <span className="kitty-key kitty-key--blue">linkedin</span>
          <a
            className="kitty-link"
            href="https://linkedin.com/in/alanregis"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/alanregis
          </a>
        </div>
        <div className="kitty-row">
          <span className="kitty-key kitty-key--blue">email</span>
          <a className="kitty-link" href="mailto:alanregisps@gmail.com">
            alanregisps@gmail.com
          </a>
        </div>
      </div>
    );
  }

  function cvOutput(): ReactNode {
    const a = document.createElement("a");
    a.href = cvHref;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
    return <div className="kitty-out kitty-out-dim">↓ {ui.cvMsg}</div>;
  }

  function helpOutput(): ReactNode {
    return (
      <div className="kitty-out">
        <div className="kitty-out-dim">{ui.helpTitle}:</div>
        {Object.entries(ui.cmdDesc).map(([name, desc]) => (
          <div key={name} className="kitty-row">
            <button
              type="button"
              className="kitty-cmd-link"
              onClick={() => runCommand(name)}
            >
              {name}
            </button>
            <span className="kitty-val kitty-out-dim">{desc}</span>
          </div>
        ))}
      </div>
    );
  }

  function pwdOutput(): ReactNode {
    return (
      <div className="kitty-out">
        <span className="kitty-val">/home/alan/fortaleza-CE/brazil</span>
      </div>
    );
  }

  function sudoOutput(): ReactNode {
    return (
      <div className="kitty-out">
        <div className="kitty-err">{ui.sudoMsg}</div>
      </div>
    );
  }

  function rmRfOutput(): ReactNode {
    return (
      <div className="kitty-out">
        <div className="kitty-err">{ui.rmMsg}</div>
      </div>
    );
  }

  function historyOutput(): ReactNode {
    const h = historyRef.current;
    if (h.length === 0) {
      return (
        <div className="kitty-out kitty-out-dim">{ui.historyEmpty}</div>
      );
    }
    return (
      <div className="kitty-out">
        {h.map((entry, i) => (
          <div key={i} className="kitty-row">
            <span className="kitty-out-dim kitty-history-n">{i + 1}</span>
            <span className="kitty-val">{entry}</span>
          </div>
        ))}
      </div>
    );
  }

  function notFoundOutput(cmd: string): ReactNode {
    return (
      <div className="kitty-out">
        <div className="kitty-err">{ui.notFound(cmd)}</div>
        <div className="kitty-out-dim">{ui.notFoundTip}</div>
      </div>
    );
  }

  function hintLine(): ReactNode {
    return (
      <div className="kitty-hint">
        <span className="kitty-out-dim">{ui.hint}</span>
        <span className="kitty-hint-cmds">
          {CMD_NAMES.map((name) => (
            <button
              key={name}
              type="button"
              className="kitty-cmd-link"
              onClick={() => runCommand(name)}
            >
              {name}
            </button>
          ))}
        </span>
      </div>
    );
  }

  // Update bootFinishRef every render so the boot animation always
  // fires with the current language (fixes the PT-in-EN-mode bug).
  bootFinishRef.current = () => {
    push(echoLine("whoami"), whoamiOutput(), hintLine());
    setBooted(true);
  };

  const COMMANDS: Record<string, () => ReactNode> = {
    whoami: whoamiOutput,
    about: aboutOutput,
    stack: stackOutput,
    projects: projectsOutput,
    contact: contactOutput,
    cv: cvOutput,
    help: helpOutput,
    pwd: pwdOutput,
    sudo: sudoOutput,
    history: historyOutput,
  };

  /* ─── Command runner ───────────────────────────────────────── */
  function runCommand(raw: string) {
    const trimmed = raw.trim();
    const cmd = trimmed.toLowerCase();

    if (cmd) {
      historyRef.current = [...historyRef.current, trimmed];
      histIdxRef.current = historyRef.current.length;
    }

    /* ── Special-cased commands ── */

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "exit") {
      push(
        echoLine(trimmed),
        <div className="kitty-out kitty-out-dim">{ui.exitMsg}</div>
      );
      setTimeout(() => setClosed(true), 900);
      return;
    }

    if (cmd === "npm install") {
      push(
        echoLine(trimmed),
        <div className="kitty-out kitty-out-dim">⠋ {ui.npmInstalling}</div>
      );
      setTimeout(() => {
        push(
          <div className="kitty-out">
            <span className="kitty-out-dim">...</span>{" "}
            <span className="kitty-err">{ui.npmJoke}</span>
          </div>
        );
      }, 2200);
      inputRef.current?.focus();
      return;
    }

    if (cmd === "rm -rf /" || cmd === "rm -rf *" || cmd === "rm -rf ~") {
      push(echoLine(trimmed), rmRfOutput());
      inputRef.current?.focus();
      return;
    }

    if (cmd === "theme dark" || cmd === "theme light") {
      const target = cmd === "theme dark" ? "dark" : "light";
      setTheme(target);
      push(
        echoLine(trimmed),
        <div className="kitty-out kitty-out-dim">{ui.themeChanged(target)}</div>
      );
      inputRef.current?.focus();
      return;
    }

    if (cmd === "lang en" || cmd === "lang pt") {
      const target = (cmd === "lang en" ? "en" : "pt") as Locale;
      setLang(target);
      push(
        echoLine(trimmed),
        <div className="kitty-out kitty-out-dim">{ui.langChanged(target)}</div>
      );
      inputRef.current?.focus();
      return;
    }

    /* ── Standard COMMANDS lookup ── */
    const out: ReactNode[] = [echoLine(trimmed)];
    if (cmd) {
      const fn = COMMANDS[cmd];
      out.push(fn ? fn() : notFoundOutput(trimmed));
    }
    push(...out);
    inputRef.current?.focus();
  }

  /* ─── Boot ─────────────────────────────────────────────────── */
  useEffect(() => {
    if (reduce) {
      setBootTyped("whoami");
      bootFinishRef.current();
      return;
    }

    let i = 0;
    let cancelled = false;
    const word = "whoami";
    const tick = () => {
      if (cancelled) return;
      i++;
      setBootTyped(word.slice(0, i));
      if (i >= word.length) {
        setTimeout(() => !cancelled && bootFinishRef.current(), 340);
      } else {
        setTimeout(tick, 70 + Math.random() * 60);
      }
    };
    const start = setTimeout(tick, 380);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─── Auto-scroll & focus ──────────────────────────────────── */
  useEffect(() => {
    const b = bodyRef.current;
    if (b) b.scrollTop = b.scrollHeight;
  }, [lines, booted]);

  useEffect(() => {
    if (booted) inputRef.current?.focus();
  }, [booted]);

  /* ─── Input handlers ───────────────────────────────────────── */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input;
      setInput("");
      runCommand(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const h = historyRef.current;
      if (h.length === 0) return;
      histIdxRef.current = Math.max(0, histIdxRef.current - 1);
      setInput(h[histIdxRef.current] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const h = historyRef.current;
      histIdxRef.current = Math.min(h.length, histIdxRef.current + 1);
      setInput(h[histIdxRef.current] ?? "");
    }
  };

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
        <span className="kitty-title-text">alan@portifolio</span>
      </div>

      {/* Body — closed state */}
      {closed ? (
        <div
          className="kitty-body kitty-body--closed"
          onClick={() => setClosed(false)}
        >
          <span className="kitty-out-dim">{ui.exitMsg}</span>
          <button type="button" className="kitty-reopen">
            {ui.exitReopenHint}
          </button>
        </div>
      ) : (
        /* Body — normal state */
        <div
          className="kitty-body"
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
        >
          {!booted && (
            <div className="kitty-cmd">
              <PromptLabel />
              <span className="kitty-cmd-text">{bootTyped}</span>
              <span className="kitty-cursor" aria-hidden />
            </div>
          )}

          {lines.map((l) => (
            <div key={l.id} className="kitty-line">
              {l.node}
            </div>
          ))}

          {booted && (
            <div className="kitty-cmd kitty-cmd--input">
              <PromptLabel />
              <span className="kitty-input-line">
                <span className="kitty-cmd-text">{input}</span>
                <span className="kitty-cursor" aria-hidden />
              </span>
              <input
                ref={inputRef}
                className="kitty-input-native"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="terminal input"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
