import logo from "@/assets/alphex-wolf-logo.png.asset.json";
import { cn } from "@/lib/utils";

/** Wolf logo drawn as a mask so it takes the surrounding text colour (works on light and dark). */
export function WolfMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block bg-current", className)}
      style={{
        WebkitMaskImage: `url(${logo.url})`,
        maskImage: `url(${logo.url})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="Alphex Studio home">
      <WolfMark className="size-8 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105" />
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Alphex<span className="opacity-50"> Studio</span>
      </span>
    </a>
  );
}
