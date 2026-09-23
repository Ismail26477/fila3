import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, FlaskConical, ShieldCheck, Target } from "lucide-react";
import ctaHome from "@/assets/cta-home.webp";
import homeAbout from "@/assets/home-about.webp";
import homeSupport from "@/assets/home-support.webp";
import { ButtonLink } from "@/components/site/Button";
import { CtaBanner } from "@/components/site/CtaBanner";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filament Lifesciences Pvt Ltd | APIs & Life Sciences" },
      {
        name: "description",
        content:
          "Filament Lifesciences Pvt Ltd — an Indian life-sciences company supplying active pharmaceutical ingredients and intermediates, including Homidium Bromide, Homidium Chloride and Isometamedium Chloride hcl.",
      },
      { property: "og:title", content: "Filament Lifesciences Pvt Ltd | APIs & Life Sciences" },
      {
        property: "og:description",
        content:
          "APIs and intermediates from an Indian life-sciences company built on precision, quality and a scientific approach.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Target,
    title: "Precision",
    text: "Defined processes and controlled parameters so every batch follows the same specification.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "Quality-focused operations built into manufacturing and release, not added at the end.",
  },
  {
    icon: Beaker,
    title: "Reliability",
    text: "Clear communication on documentation, timelines and supply for our business partners.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Approach",
    text: "Technical decisions grounded in analytical data and chemistry-led problem solving.",
  },
];

const services = [
  {
    no: "01",
    title: "API & Intermediate Solutions",
    text: "Supply of active pharmaceutical ingredients and intermediates from our product portfolio.",
  },
  {
    no: "02",
    title: "Product & Application Support",
    text: "Product information, CAS identification and application guidance for evaluation teams.",
  },
  {
    no: "03",
    title: "Quality-Focused Operations",
    text: "Process discipline and documentation practices that support consistent output.",
  },
  {
    no: "04",
    title: "Scientific & Technical Support",
    text: "Direct access to our technical team for chemistry and handling discussions.",
  },
];

function Home() {
  return (
    <>
      <HeroSlider />

      {/* Introduction */}
      <section className="section-y relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-70" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={homeAbout}
                alt="Filament Lifesciences scientist in a branded lab coat inside a modern laboratory"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1500}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
                About Filament Lifesciences
              </p>
              <h2 className="mt-6 text-3xl leading-tight font-extrabold text-ink sm:text-4xl lg:text-[2.75rem]">
                Advancing Animal Health Through Chemistry, Quality & Reliability
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-muted">
                <p>
                  Filament Lifesciences Pvt Ltd is an India-based manufacturer of active pharmaceutical ingredients
                  and pharmaceutical intermediates for veterinary applications. We serve the global
                  animal-health industry with a focus on consistent quality, reliability and flexible
                  manufacturing.
                </p>
                <p>
                  Our portfolio includes Homidium Chloride, Isometamidium Chloride Hydrochloride and Homidium
                  Bromide, supporting veterinary applications including antiprotozoal treatments. We
                  combine quality-driven manufacturing, controlled processes and dependable customer
                  support.
                </p>
                <p>
                  Our growing portfolio reflects a practical commitment to precision, consistency
                  and long-term partnerships. We share clear product information and stay close to
                  the details that matter at every stage of collaboration.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/about">
                  Discover Our Company
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink to="/products" variant="outline">
                  Explore Products
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Filament */}
      <section className="section-y relative overflow-hidden bg-ink text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute top-1/3 -left-32 size-[26rem] opacity-40"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal>
              <p className="eyebrow-light">
                <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
                Why Filament Lifesciences
              </p>
              <h2 className="mt-6 max-w-2xl text-3xl leading-tight font-extrabold sm:text-4xl">
                Four principles that shape how we work
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/65">
                We describe only what we practise. No certification or capacity claims are made
                until they can be independently verified.
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-primary-foreground/15 bg-ink-deep p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-teal/60"
              >
                <span
                  className="pointer-events-none absolute -top-16 -right-16 size-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <pillar.icon
                  className="relative size-7 text-brand-teal transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="relative mt-8 font-display text-lg font-bold">{pillar.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-primary-foreground/65">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Products preview */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
                Portfolio
              </p>
              <h2 className="mt-6 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
                Selected Products
              </h2>
              <p className="mt-4 max-w-lg text-base text-ink-muted">
                Explore our portfolio of APIs and intermediates.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ButtonLink to="/products" variant="outline">
                View Products
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-y bg-background">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
                What We Do
              </p>
              <h2 className="mt-6 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
                Support built around your evaluation process
              </h2>
            </Reveal>
            <ul className="mt-10 divide-y divide-border border-t border-border">
              {services.map((service, i) => (
                <Reveal as="li" key={service.no} delay={i * 0.06} className="group py-7">
                  <div className="flex gap-6">
                    <span className="font-display text-sm font-bold tracking-widest text-brand-teal">
                      {service.no}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-ink">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <ButtonLink to="/services" variant="outline" className="mt-10">
                Explore Services
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-16">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={homeSupport}
                alt="Technician in a branded apron inspecting stainless steel process equipment"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1500}
                className="aspect-4/5 w-full object-cover md:aspect-3/4"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <CtaBanner
        image={ctaHome}
        alt="Illuminated pharmaceutical manufacturing plant at night"
      />
    </>
  );
}
