import { cn } from "@/lib/utils";

type WindowControlsProps = {
  className?: string;
  /** Quando fornecido, o botão de fechar vira um <button> funcional. */
  onClose?: () => void;
  closeLabel?: string;
};

/**
 * Controles de janela no estilo dos ambientes desktop Linux (GNOME/KDE):
 * minimizar, maximizar e fechar alinhados à direita — em vez dos faróis
 * coloridos à esquerda típicos do macOS.
 */
export function WindowControls({
  className,
  onClose,
  closeLabel = "fechar",
}: WindowControlsProps) {
  return (
    <div className={cn("win-controls", className)}>
      <span className="win-ctl" aria-hidden="true">
        &#x2013;
      </span>
      <span className="win-ctl" aria-hidden="true">
        &#x25A2;
      </span>
      {onClose ? (
        <button
          type="button"
          className="win-ctl win-ctl--close"
          aria-label={closeLabel}
          onClick={onClose}
        >
          &#x2715;
        </button>
      ) : (
        <span className="win-ctl win-ctl--close" aria-hidden="true">
          &#x2715;
        </span>
      )}
    </div>
  );
}
