import { createFileRoute } from "@tanstack/react-router";
import bannerAbout from "@/assets/banner-about.webp";
import aboutTeam from "@/assets/about-team.webp";
import ctaAbout from "@/assets/cta-about.webp";
import { CtaBanner } from "@/components/site/CtaBanner";
import { LocationCards } from "@/components/site/LocationCards";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Filament Lifesciences Pvt Ltd" },
      {
        name: "description",
        content:
          "About Filament Lifesciences Pvt Ltd — an Indian life-sciences company registered in Nagpur, Maharashtra, with a manufacturing address at IIE Growth Centre Sigaddi, Kotdwar, Uttarakhand.",
      },
      { property: "og:title", content: "About Us | Filament Lifesciences Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Who we are, our mission and vision, and where Filament Lifesciences Pvt Ltd operates from in India.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageBanner
        image={bannerAbout}
        alt="Modern pharmaceutical manufacturing facility exterior at dusk"
        eyebrow="Company"
        title="About Filament Lifesciences"
        intro="An Indian life-sciences company focused on active pharmaceutical ingredients and intermediates."
      />

      {/* Who we are */}
      <section className="section-y bg-background">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
                Who We Are
              </p>
              <h2 className="mt-6 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
                A company defined by chemistry, discipline and clarity
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-muted">
                <p>
                  {company.name} operates in the active pharmaceutical ingredient and intermediate
                  segment. The company is registered at 166, Amrta Manor, Civil Lines, Nagpur,
                  Maharashtra, and its factory address is A5B, IIE Growth Centre Sigaddi, Sidcul,
                  Kotdwar, Pauri Garhwal, Uttarakhand.
                </p>
                <p>
                  Rather than publishing claims we cannot yet substantiate, we prefer to describe
                  how we work: precise specifications, controlled processes, documented decisions
                  and open technical dialogue with the organisations that evaluate our products.
                </p>
                <p>
                  Additional company information — capabilities, approvals and portfolio expansion —
                  will be published here as it becomes available.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-10">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={aboutTeam}
                alt="Two research scientists reviewing laboratory data on a monitor"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1504}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              Mission &amp; Vision
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="relative overflow-hidden rounded-3xl bg-ink p-9 text-primary-foreground md:p-14">
              <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
              <div className="relative">
                <p className="eyebrow-light">Our Vision</p>
                <h3 className="mt-6 font-display text-xl leading-snug font-extrabold sm:text-2xl">
                  To be a globally trusted pharmaceutical company, recognized for excellence in
                  Active Pharmaceutical Ingredients (APIs) and Contract Research &amp;
                  Manufacturing Services (CRAMS), while driving innovation, quality, and
                  sustainable growth to improve healthcare worldwide.
                </h3>
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-9 md:p-14"
            >
              <div className="relative">
                <p className="eyebrow">Our Mission</p>
                <p className="mt-6 text-base leading-relaxed text-ink">
                  To drive innovation through continuous investment in R&amp;D, process
                  development, and robust quality systems, ensuring excellence, regulatory
                  compliance, and consistent product quality.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  To expand our global presence by delivering reliable pharmaceutical solutions
                  and building long-term partnerships with clients worldwide through trust,
                  integrity, and excellence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="section-y relative overflow-hidden bg-ink-deep text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              Our Presence
            </p>
            <h2 className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl">
              Where we are located
            </h2>
          </Reveal>
          <div className="mt-12">
            <LocationCards variant="dark" />
          </div>
        </div>
      </section>

      <CtaBanner
        image={ctaAbout}
        alt="Pharmaceutical manufacturing facility exterior in warm evening light"
      />
    </>
  );
}
