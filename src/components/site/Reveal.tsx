import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}

export function Reveal({ children, delay = 0, y = 12, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20px" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
    >
      {children}
    </Comp>
  );
}
