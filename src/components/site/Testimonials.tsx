"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  [
    "Their team answered every technical question on the intermediate we were evaluating, with documentation shared the same week.",
    "Procurement Lead",
    "Formulation company, Gujarat",
  ],
  [
    "Consistent specifications batch after batch. The CAS-level clarity in their catalogue made our sourcing review straightforward.",
    "Quality Manager",
    "Veterinary products manufacturer",
  ],
  [
    "Clear communication on timelines and packaging. It is refreshing to work with a supplier that only commits to what it can deliver.",
    "Supply Chain Head",
    "Contract manufacturer, Maharashtra",
  ],
  [
    "Chemistry-led discussion rather than a sales pitch — that is what made us shortlist Filament Lifesciences.",
    "R&D Chemist",
    "Animal health research group",
  ],
  [
    "The purity data was clear, complete, and easy for our technical team to review.",
    "Technical Director",
    "Nutraceutical manufacturer",
  ],
  [
    "Filament helped us move from enquiry to qualified sample without unnecessary delays.",
    "Sourcing Manager",
    "Pharmaceutical distributor",
  ],
  [
    "Their documentation made our internal approval process much simpler.",
    "Quality Assurance Lead",
    "Specialty chemicals company",
  ],
  [
    "Reliable updates and carefully packed material from start to finish.",
    "Operations Head",
    "Research laboratory, Bengaluru",
  ],
  [
    "A responsive technical partner who understands the detail behind every request.",
    "Product Development Lead",
    "Animal nutrition company",
  ],
  [
    "The catalogue gave us confidence that we were comparing the right material.",
    "Purchase Manager",
    "Healthcare ingredients buyer",
  ],
  [
    "Every conversation was precise, practical, and focused on getting the right result.",
    "Senior Chemist",
    "Contract research organisation",
  ],
  [
    "They consistently delivered the specifications and timelines they committed to.",
    "Materials Planner",
    "Manufacturing group, Pune",
  ],
  [
    "The team made a complex sourcing requirement feel refreshingly straightforward.",
    "Category Manager",
    "Life sciences manufacturer",
  ],
  [
    "Strong technical knowledge, quick responses, and dependable follow-through.",
    "R&D Manager",
    "Veterinary health company",
  ],
  [
    "Filament is now one of the first suppliers we contact for specialised requirements.",
    "Procurement Head",
    "Formulation company, Hyderabad",
  ],
] as const;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = testimonials.length - 2;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSteps);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [totalSteps]);

  return (
    <section className="section-y bg-surface pb-8 md:pb-12 lg:pb-16">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
            Testimonials
          </p>
          <h2 className="mt-5 text-2xl leading-tight font-extrabold text-ink sm:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <div
          className="mt-10 overflow-hidden [--review-step:calc(100%+1.25rem)] lg:mt-14 lg:[--review-step:calc((100%+1.25rem)/3)]"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <ul
            className="flex gap-5 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(-${activeIndex} * var(--review-step)))` }}
          >
            {testimonials.map(([quote, name, role], i) => (
              <Reveal
                as="li"
                key={quote}
                delay={i * 0.03}
                className="min-w-full rounded-2xl border border-border bg-card p-7 shadow-soft sm:min-w-[calc(50%-0.625rem)] lg:min-w-[calc((100%-2.5rem)/3)]"
              >
                <Quote className="size-7 text-brand-teal" aria-hidden="true" />
                <div className="mt-4 flex gap-0.5" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-muted">{quote}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-sm font-bold text-ink">{name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{role}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
