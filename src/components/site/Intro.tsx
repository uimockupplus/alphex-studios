import type React from "react";
import { useEffect, useState } from "react";
import { WolfMark } from "./Logo";

const WORD = "Open up.";

/** Short brand intro on first visit per session; slides away on its own via CSS. */
export function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("alphex-intro") === "1";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("alphex-intro", "1");
    const t = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return (
    <div className="intro fixed inset-0 z-[90] grid place-items-center bg-background" aria-hidden>
      <div className="flex flex-col items-center gap-6">
        <WolfMark className="intro-logo size-16 text-foreground" />
        <p className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
          {WORD.split("").map((ch, i) => (
            <span key={i} className="intro-letter" style={{ "--i": i } as React.CSSProperties}>
              {ch === " " ? "\u00a0" : ch}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
