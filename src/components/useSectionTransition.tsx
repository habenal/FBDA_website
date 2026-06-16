import { useCallback, useEffect, useRef, useState } from "react";

const PHASE_MS = 380;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Plays a brand-colored cover/reveal transition whenever an in-page anchor
 * link (href starting with "#") is clicked, then jumps to the target section
 * while the screen is covered. Falls back to an instant scroll when the user
 * prefers reduced motion.
 */
export function useSectionTransition() {
  const [covered, setCovered] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "auto", block: "start" });
    if (typeof history !== "undefined" && history.replaceState) {
      history.replaceState(null, "", href);
    }
  };

  const handleAnchorClick = useCallback((e: React.MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    if (!document.querySelector(href)) return;

    e.preventDefault();

    if (prefersReducedMotion()) {
      scrollToSection(href);
      return;
    }

    timers.current.forEach(clearTimeout);
    timers.current = [];

    setCovered(true);
    timers.current.push(
      setTimeout(() => {
        scrollToSection(href);
        setCovered(false);
      }, PHASE_MS),
    );
  }, []);

  const overlay = (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] grid place-items-center bg-gradient-brand"
      style={{
        opacity: covered ? 1 : 0,
        pointerEvents: covered ? "auto" : "none",
        transition: `opacity ${PHASE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    >
      <div
        className="flex flex-col items-center gap-3"
        style={{
          opacity: covered ? 1 : 0,
          transform: covered ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
          transition: `opacity ${PHASE_MS}ms ease, transform ${PHASE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        <svg viewBox="0 0 64 40" className="h-12 w-20" aria-hidden="true">
          <path
            d="M2 34 C 22 6, 42 6, 62 22"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M8 36 C 26 16, 44 16, 60 28"
            fill="none"
            stroke="var(--brand-yellow)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary-foreground">
          Future Bridge
        </span>
      </div>
    </div>
  );

  return { overlay, handleAnchorClick };
}
