import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-primary-foreground/10 bg-ink-deep"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4 py-3 md:h-20">
        <Link to="/" className="flex min-w-0 items-center" aria-label={`${company.name} — home`}>
          <img
  src="/filament-logo-transparent.png"
  alt={`${company.name} logo`}
  width={740}
  height={270}
  className="h-12 w-auto md:h-16 lg:h-18"
/>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative px-4 py-2 text-sm font-medium text-primary-foreground/75 transition-colors hover:text-primary-foreground data-[status=active]:text-primary-foreground"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-brand-teal transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+91${company.phone}`}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary-foreground transition-colors hover:text-brand-teal lg:inline-flex"
            aria-label={`Call Filament Lifesciences at +91 ${company.phone}`}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>+91 {company.phone}</span>
          </a>
          <ButtonLink to="/contact" variant="light" className="hidden px-5 py-2.5 sm:inline-flex">
            Send Enquiry
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-primary-foreground/10 bg-ink-deep lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="border-b border-primary-foreground/8 py-4 text-base font-medium text-primary-foreground/80 data-[status=active]:text-primary-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink to="/contact" variant="light" className="mt-5 w-full">
                Send Enquiry
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
