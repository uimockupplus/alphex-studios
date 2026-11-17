import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  lead,
  className,
  align = "left",
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  align?: "left" | "center";
  aside?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex flex-col gap-6 md:mb-20",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "flex flex-col items-center")}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display-lg mt-5">{title}</h2>
        {lead && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{lead}</p>}
      </div>
      {aside}
    </Reveal>
  );
}
