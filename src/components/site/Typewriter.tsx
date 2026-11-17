import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion, useInView } from "./hooks";

export function Typewriter({ phrases, className, startDelay = 400 }: { phrases: string[]; className?: string; startDelay?: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [text, setText] = useState(phrases[0] ?? "");

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) return;
    let i = 0;
    let c = 0;
    let del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const p = phrases[i] ?? "";
      if (!del) {
        c++;
        setText(p.slice(0, c));
        if (c >= p.length) {
          del = true;
          t = setTimeout(tick, 1900);
          return;
        }
        t = setTimeout(tick, 55);
        return;
      }
      c--;
      setText(p.slice(0, c));
      if (c <= 0) {
        del = false;
        i = (i + 1) % phrases.length;
        t = setTimeout(tick, 350);
        return;
      }
      t = setTimeout(tick, 22);
    };
    setText("");
    t = setTimeout(tick, startDelay);
    return () => clearTimeout(t);
  }, [inView, phrases, startDelay]);

  return (
    <span ref={ref} className={cn("caret", className)} aria-label={phrases.join(" ")}>
      <span aria-hidden>{text}</span>
    </span>
  );
}
