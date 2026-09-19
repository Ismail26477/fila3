import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "ghost";
type LinkProps = ComponentProps<typeof Link>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-primary-foreground hover:bg-ink-muted shadow-soft hover:-translate-y-0.5",
  outline: "border border-ink/20 text-ink hover:border-ink/60 hover:bg-secondary",
  light: "bg-background text-ink hover:bg-mint/70 shadow-soft hover:-translate-y-0.5",
  ghost:
    "border border-primary-foreground/25 text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & LinkProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
