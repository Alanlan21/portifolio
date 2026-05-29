"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("#") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        target.getAttribute("download") !== null ||
        target.getAttribute("target") === "_blank"
      ) return;

      // Navegação de âncora dentro da mesma página (ex.: "/#sobre" estando em "/")
      // deve usar o comportamento nativo do navegador. Interceptar com router.push
      // dentro de um view transition quebra o scroll por hash e a restauração de
      // histórico, fazendo o botão "voltar" cair sempre no topo (início).
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname && url.hash) return;

      if (!document.startViewTransition) return;

      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href);
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return null;
}
