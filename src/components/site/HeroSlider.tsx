import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1-plant.webp";
import hero2 from "@/assets/hero-2-qc.webp";
import hero3 from "@/assets/hero-3-laboratory.png";
import { ButtonLink } from "./Button";

const slides = [
  {
    image: hero1,
    eyebrow: "Life Sciences · India",
    title: "Advancing Life Sciences Through Precision & Innovation",
    highlight: "Precision & Innovation",
    text: "An Indian life-sciences company built around active pharmaceutical ingredients, intermediates and disciplined scientific practice.",
    alt: "Filament Lifesciences technicians in branded lab coats beside stainless steel API reactors",

    // Desktop position
    desktopPosition: "center center",

    // Mobile position
    mobilePosition: "58% center",
  },

  {
    image: hero2,
    eyebrow: "Quality Culture",
    title: "Precision in Every Molecule",
    highlight: "Every Molecule",
    text: "Careful process control and analytical rigour guide how our products are developed and released.",
    alt: "Filament Lifesciences scientist in a branded lab coat inspecting a sample vial",

    desktopPosition: "center center",
    mobilePosition: "62% center",
  },

  {
    image: hero3,
    eyebrow: "Scientific Approach",
    title: "Science That Builds Trust",
    highlight: "Builds Trust",
    text: "We work with our customers as technical partners, sharing data, documentation and clarity at every step.",
    alt: "Modern analytical laboratory with stainless steel pharmaceutical equipment",

    desktopPosition: "center center",
    mobilePosition: "50% center",
  },
];

export function HeroSlider() {
  const reduced = useReducedMotion();

  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  /*
   * AUTO SLIDER
   */
  useEffect(() => {
    if (reduced) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [reduced]);

  /*
   * MOBILE SWIPE
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - endX;
    const diffY = touchStartY.current - endY;

    // Allow normal vertical page scrolling
    if (Math.abs(diffY) > Math.abs(diffX)) {
      return;
    }

    // Ignore very small movements
    if (Math.abs(diffX) < 50) {
      return;
    }

    if (diffX > 0) {
      // Swipe left
      setIndex((current) => (current + 1) % slides.length);
    } else {
      // Swipe right
      setIndex(
        (current) => (current - 1 + slides.length) % slides.length
      );
    }
  };

  const slide = slides[index];

  const [before, after] = slide.title.split(slide.highlight);

  return (
    <section
      aria-label="Introduction"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="
        relative
        isolate
        h-[100dvh]
        min-h-[650px]
        w-full
        overflow-hidden
        bg-ink-deep
        text-primary-foreground
        [touch-action:pan-y]
      "
    >

      {/* =====================================================
          IMAGE SLIDER
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          className="flex h-full"
          animate={{
            x: `-${index * 100}vw`,
          }}
          transition={{
            duration: reduced ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            width: `${slides.length * 100}vw`,
          }}
        >

          {slides.map((item, i) => (
            <div
              key={item.title}
              className="
                relative
                h-full
                w-screen
                min-w-[100vw]
                shrink-0
                overflow-hidden
              "
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={i === index ? item.alt : ""}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
                width={1920}
                height={1080}
                draggable={false}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover

                  [object-position:var(--mobile-position)]

                  md:[object-position:var(--desktop-position)]
                "
                style={
                  {
                    "--mobile-position": item.mobilePosition,
                    "--desktop-position": item.desktopPosition,
                  } as React.CSSProperties
                }
              />

              {/* =================================================
                  MOBILE IMAGE DARKENING
                  Mostly bottom so image remains visible
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-b
                  from-black/10
                  via-black/10
                  to-black/20

                  md:bg-gradient-to-r
                  md:from-black/65
                  md:via-black/25
                  md:to-transparent
                "
              />

              {/* =================================================
                  MOBILE BOTTOM GRADIENT
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[62%]

                  bg-gradient-to-t
                  from-black/85
                  via-black/55
                  to-transparent

                  md:hidden
                "
              />

            </div>
          ))}

        </motion.div>
      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          items-end

          md:items-center
        "
      >

        <div className="container-x w-full">

          <div
            className="
              max-w-2xl

              pb-24

              sm:pb-28

              md:pt-20
              md:pb-20
            "
          >

            {/* EYEBROW */}

            <p
              className="
                eyebrow-light
                text-[9px]
                sm:text-xs
              "
            >
              <span
                className="
                  h-px
                  w-7
                  bg-brand-teal
                  sm:w-8
                "
                aria-hidden="true"
              />

              {slide.eyebrow}
            </p>


            {/* TITLE */}

            <h1
              className="
                mt-3
                max-w-[350px]

                text-[28px]
                leading-[1.08]
                font-extrabold

                sm:text-4xl

                md:mt-5
                md:max-w-[720px]
                md:text-5xl

                lg:text-6xl
              "
            >

              {before}

              <span className="text-brand-teal">
                {slide.highlight}
              </span>

              {after}

            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                mt-3
                max-w-[360px]

                text-[11px]
                leading-[1.5]
                text-primary-foreground/85

                sm:text-sm

                md:mt-5
                md:max-w-xl
                md:text-lg
              "
            >
              {slide.text}
            </p>


            {/* BUTTONS */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2

                sm:mt-6
                sm:gap-3

                md:mt-8
              "
            >

              <ButtonLink
                to="/products"
                variant="light"
              >
                Explore Products
              </ButtonLink>

              <ButtonLink
                to="/contact"
                variant="ghost"
              >
                Request an Enquiry
              </ButtonLink>

            </div>


            {/* DESKTOP FEATURES */}

            <ul
              className="
                mt-10
                hidden

                flex-wrap
                gap-x-10
                gap-y-4

                border-t
                border-primary-foreground/15

                pt-7

                text-xs
                tracking-[0.18em]
                text-primary-foreground/65
                uppercase

                sm:flex
              "
            >

              {[
                "Precision",
                "Quality",
                "Reliability",
                "Scientific Approach",
              ].map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>


      {/* =====================================================
          SLIDE INDICATORS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-0
          z-20
          w-full

          sm:bottom-7
        "
      >

        <div className="container-x flex gap-2">

          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  i === index
                    ? "w-10 bg-brand-teal"
                    : "w-4 bg-primary-foreground/40"
                }
              `}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
