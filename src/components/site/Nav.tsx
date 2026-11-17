import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NAV } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(scrollY > 12);
      let on: string | null = null;
      for (const n of NAV) {
        const r = document.querySelector(n.href)?.getBoundingClientRect();
        if (r && r.top < innerHeight * 0.4 && r.bottom > innerHeight * 0.4) on = n.href;
      }
      setActive(on);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div
        className={cn(
          "container-site relative flex h-14 items-center justify-between overflow-hidden rounded-full border px-3 pl-4 transition-all duration-500",
          scrolled ? "border-border bg-card/80 shadow-soft backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm transition-all duration-300",
                active === n.href
                  ? "bg-ink text-ink-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ink" size="md" className="hidden sm:inline-flex" data-magnetic>
            <a href="#contact">
              Free quote <ArrowUpRight />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="pill" size="icon" className="size-10 md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background p-8">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo />
              <nav className="mt-12 flex flex-col">
                {[...NAV, { label: "Contact", href: "#contact" }].map((n, i) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rise flex items-baseline justify-between border-b py-4 font-display text-3xl font-semibold tracking-tight"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {n.label}
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </a>
                ))}
              </nav>
              <Button asChild variant="ink" size="xl" className="mt-10 w-full">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Get a free quote <ArrowUpRight />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {/* scroll progress */}
        <span
          aria-hidden
          className={cn("absolute inset-x-6 bottom-0 h-px origin-left bg-foreground transition-opacity", scrolled ? "opacity-100" : "opacity-0")}
          style={{ transform: "scaleX(var(--sp, 0))" }}
        />
      </div>
    </header>
  );
}
