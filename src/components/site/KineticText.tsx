import type React from "react";
import { createElement, type ElementType } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "./hooks";

/**
 * Splits text into words that slide up one after another when scrolled into view.
 * Use "\n" for line breaks; lines listed in `muted` render in the muted colour.
 */
export function KineticText({
  text,
  as = "h2",
  className,
  muted = [],
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  muted?: number[];
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  let i = 0;
  const lines = text.split("\n");
  return createElement(
    as,
    {
      ref,
      className: cn(className),
      "data-kinetic": inView ? "in" : "out",
      "aria-label": text.replace(/\n/g, " "),
      style: { "--base": `${delay}ms` } as React.CSSProperties,
    },
    lines.map((line, li) => (
      <span key={li} aria-hidden className={cn("block", muted.includes(li) && "text-muted-foreground")}>
        {line.split(" ").map((w, wi) => (
          <span key={wi}>
            <span className="kw">
              <span style={{ "--i": i++ } as React.CSSProperties}>{w}</span>
            </span>
            {wi < line.split(" ").length - 1 ? " " : null}
          </span>
        ))}
      </span>
    )),
  );
}
