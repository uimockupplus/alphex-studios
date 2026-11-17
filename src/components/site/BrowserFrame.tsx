import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border bg-card shadow-float", className)}>
      <div className="flex items-center gap-3 border-b bg-paper px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <div className="mx-auto flex h-6 min-w-0 max-w-[60%] flex-1 items-center justify-center rounded-md bg-card px-3 font-mono text-[10px] text-muted-foreground">
          <span className="truncate">{url}</span>
        </div>
        <div className="w-[42px]" />
      </div>
      {children}
    </div>
  );
}
