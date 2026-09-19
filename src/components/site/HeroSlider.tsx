import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1-plant.webp";
import hero2 from "@/assets/hero-2-qc.webp";
import hero3 from "@/assets/hero-4-facility.webp";
import { ButtonLink } from "./Button";

const slides = [
  {
    image: hero1,
    eyebrow: "Life Sciences · India",
    title: "Advancing Life Sciences Through Precision & Innovation",
    highlight: "Precision & Innovation",
    text: "An Indian life-sciences company built around active pharmaceutical ingredients, intermediates and disciplined scientific practice.",
    alt: "Filament Lifesciences technicians in branded lab coats beside stainless steel API reactors",
  },
  {
    image: hero2,
    eyebrow: "Quality Culture",
    title: "Precision in Every Molecule",
    highlight: "Every Molecule",
    text: "Careful process control and analytical rigour guide how our products are developed and released.",
    alt: "Filament Lifesciences scientist in a branded lab coat inspecting a sample vial",
  },
  {
    image: hero3,
    eyebrow: "Scientific Approach",
    title: "Science That Builds Trust",
    highlight: "Builds Trust",
    text: "We work with our customers as technical partners, sharing data, documentation and clarity at every step.",
    alt: "Filament Lifesciences pharmaceutical manufacturing facility with stainless steel processing equipment",
  },
];

export function HeroSlider() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const slide = slides[index]!;
  const [before, after] = slide.title.split(slide.highlight);

  return (
    <section
      aria-label="Introduction"
      className="relative isolate h-[100svh] overflow-hidden bg-ink-deep text-primary-foreground"
    >
      {/* A continuous track keeps the next image beside the current one, so slides never fade through an empty frame. */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `${index * -100}%` }}
          transition={{ duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {slides.map((item, i) => (
            <div key={item.title} className="relative h-full min-w-full shrink-0">
              <img
                src={item.image}
                alt={i === index ? item.alt : ""}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
                width={1920}
                height={1080}
                className="size-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative flex h-full items-center">
        <div className="container-x w-full">
          <div className="max-w-2xl pt-24 pb-24 md:pt-20">
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              {slide.eyebrow}
            </p>
            <h1 className="mt-5 text-3xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
              {before}
              <span className="text-brand-teal">
                {slide.highlight}
              </span>
              {after}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-lg">
              {slide.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/products" variant="light">
                Explore Products
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost">
                Request an Enquiry
              </ButtonLink>
            </div>

            <ul className="mt-10 hidden flex-wrap gap-x-10 gap-y-4 border-t border-primary-foreground/15 pt-7 text-xs tracking-[0.18em] text-primary-foreground/65 uppercase sm:flex">
              {["Precision", "Quality", "Reliability", "Scientific Approach"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-0 w-full">
        <div className="container-x flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-brand-teal" : "w-4 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
