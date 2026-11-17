import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "./data";

/** Floating quick-action bar: shows after the hero, hides when the contact form is on screen. */
export function Dock() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const c = document.getElementById("contact")?.getBoundingClientRect();
      const inContact = !!c && c.top < innerHeight * 0.8 && c.bottom > 0;
      setShow(scrollY > innerHeight * 0.8 && !inContact);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-5 z-40 flex justify-center transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="flex items-center gap-1 rounded-full border bg-card/85 p-1.5 shadow-lift backdrop-blur-xl">
        <span className="hidden px-4 text-sm text-muted-foreground sm:block">Now booking founding clients</span>
        <a
          href={buildWhatsAppLink("Hi Alphex Studio! I'd like to discuss a website.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary"
        >
          <MessageCircle className="size-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-ink-foreground"
        >
          Free quote <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
