import Image from "next/image";
import { cn } from "@/lib/utils";
import { WindowControls } from "@/components/window-controls";

type ProjectScreenshotProps = {
  src: string;
  alt: string;
  variant?: "feature" | "card";
  className?: string;
  sizes?: string;
  /** CSS object-position to frame the meaningful part of each shot. */
  objectPosition?: string;
  /** Optional label shown in the fake browser chrome. */
  label?: string;
};

export function ProjectScreenshot({
  src,
  alt,
  variant = "feature",
  className,
  sizes,
  objectPosition = "center top",
  label,
}: ProjectScreenshotProps) {
  return (
    <div
      className={cn(
        "project-screenshot",
        variant === "card" && "project-screenshot-card",
        className,
      )}
    >
      <div className="project-screenshot-chrome" aria-hidden="true">
        {label ? (
          <span className="project-screenshot-tab">{label}</span>
        ) : (
          <span className="project-screenshot-url" />
        )}
        <WindowControls className="project-screenshot-winctl" />
      </div>
      <div className="project-screenshot-viewport">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            sizes ??
            "(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) 50vw, 680px"
          }
          className="project-screenshot-image"
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
