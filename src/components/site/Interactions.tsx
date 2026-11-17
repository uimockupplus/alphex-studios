import { useEffect, useRef } from "react";

/**
 * Site-wide pointer & scroll effects, mounted once:
 * - [data-magnetic]  buttons drift toward the pointer
 * - [data-tilt]      cards tilt in 3D toward the pointer (value = max degrees)
 * - [data-spotlight] soft light follows the pointer (--mx/--my)
 * - --sp on <html>   page scroll progress 0..1
 * - .marquee-track   speeds up with scroll velocity
 * - follower cursor ring on fine pointers
 */
export function Interactions() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    // Scroll progress
    const onScroll = () => {
      const sp = root.scrollTop / Math.max(1, root.scrollHeight - root.clientHeight);
      root.style.setProperty("--sp", sp.toFixed(4));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));

    if (!reduce) {
      // Marquee velocity
      let lastY = scrollY;
      let vel = 0;
      let rate = 1;
      let raf = 0;
      const mq = () => {
        const y = scrollY;
        vel = vel * 0.88 + (y - lastY) * 0.12;
        lastY = y;
        const target = 1 + Math.min(8, Math.abs(vel) / 5);
        rate += (target - rate) * 0.1;
        document.querySelectorAll<HTMLElement>(".marquee-track").forEach((el) => {
          const a = el.getAnimations()[0];
          if (a) a.playbackRate = rate;
        });
        raf = requestAnimationFrame(mq);
      };
      raf = requestAnimationFrame(mq);
      cleanups.push(() => cancelAnimationFrame(raf));
    }

    if (fine && !reduce) {
      const onMove = (e: PointerEvent) => {
        const t = e.target as Element | null;
        if (!t?.closest) return;

        const sp = t.closest<HTMLElement>("[data-spotlight]");
        if (sp) {
          const r = sp.getBoundingClientRect();
          sp.style.setProperty("--mx", `${e.clientX - r.left}px`);
          sp.style.setProperty("--my", `${e.clientY - r.top}px`);
        }

        const tl = t.closest<HTMLElement>("[data-tilt]");
        if (tl) {
          const max = Number(tl.dataset["tilt"]) || 6;
          const r = tl.getBoundingClientRect();
          tl.style.setProperty("--ry", `${(((e.clientX - r.left) / r.width - 0.5) * max).toFixed(2)}deg`);
          tl.style.setProperty("--rx", `${((0.5 - (e.clientY - r.top) / r.height) * max * 0.75).toFixed(2)}deg`);
        }

        const mg = t.closest<HTMLElement>("[data-magnetic]");
        if (mg) {
          const r = mg.getBoundingClientRect();
          mg.style.translate = `${((e.clientX - r.left - r.width / 2) * 0.2).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * 0.28).toFixed(1)}px`;
        }
      };
      const onOut = (e: PointerEvent) => {
        const t = e.target as Element | null;
        const rel = e.relatedTarget as Node | null;
        const tl = t?.closest?.<HTMLElement>("[data-tilt]");
        if (tl && !tl.contains(rel)) {
          tl.style.setProperty("--rx", "0deg");
          tl.style.setProperty("--ry", "0deg");
        }
        const mg = t?.closest?.<HTMLElement>("[data-magnetic]");
        if (mg && !mg.contains(rel)) mg.style.translate = "0 0";
      };
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onOut);
      cleanups.push(() => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerout", onOut);
      });

      // Follower cursor
      let tx = innerWidth / 2,
        ty = innerHeight / 2,
        cx = tx,
        cy = ty,
        run = false,
        raf2 = 0;
      const loop = () => {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        if (ring.current) ring.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf2 = requestAnimationFrame(loop);
        else run = false;
      };
      const onCursor = (e: PointerEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        const hot = !!(e.target as Element)?.closest?.("a,button,[role=tab],input,select,textarea,label,[data-tilt]");
        ring.current?.setAttribute("data-hot", String(hot));
        ring.current?.setAttribute("data-on", "true");
        dot.current?.setAttribute("data-on", "true");
        if (!run) {
          run = true;
          raf2 = requestAnimationFrame(loop);
        }
      };
      const onLeave = () => {
        ring.current?.setAttribute("data-on", "false");
        dot.current?.setAttribute("data-on", "false");
      };
      addEventListener("pointermove", onCursor, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        removeEventListener("pointermove", onCursor);
        document.documentElement.removeEventListener("mouseleave", onLeave);
        cancelAnimationFrame(raf2);
      });
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        data-on="false"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:block"
      >
        <div className="-ml-5 -mt-5 size-10 rounded-full border border-ink-foreground opacity-0 transition-[opacity,scale] duration-300 [[data-hot=true]>&]:scale-150 [[data-on=true]>&]:opacity-100" />
      </div>
      <div
        ref={dot}
        aria-hidden
        data-on="false"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:block"
      >
        <div className="-ml-[3px] -mt-[3px] size-1.5 rounded-full bg-ink-foreground opacity-0 transition-opacity [[data-on=true]>&]:opacity-100" />
      </div>
    </>
  );
}
