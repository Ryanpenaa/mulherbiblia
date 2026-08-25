import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Comp>
  );
}

export function CtaButton({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "navy" | "ghost-light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-display text-sm sm:text-base font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue";
  const variants = {
    gold: "bg-gold text-navy-deep shadow-soft hover:bg-gold-deep hover:-translate-y-0.5",
    navy: "bg-navy text-white shadow-soft hover:bg-brand-blue hover:-translate-y-0.5",
    outline:
      "border-2 border-navy/20 bg-white text-navy hover:border-navy/40 hover:-translate-y-0.5",
    "ghost-light":
      "border-2 border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5",
  } as const;
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`font-display text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-gold" : "text-brand-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-balance text-3xl font-bold uppercase leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function CheckItem({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
          light ? "bg-gold text-navy-deep" : "bg-sky text-brand-blue"
        }`}
      >
        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
      <span
        className={`min-w-0 text-sm leading-relaxed sm:text-[0.95rem] ${
          light ? "text-white/85" : "text-muted-foreground"
        }`}
      >
        {children}
      </span>
    </li>
  );
}

export function CrossItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
        <X className="size-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
      <span className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
        {children}
      </span>
    </li>
  );
}
