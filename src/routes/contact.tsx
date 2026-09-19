import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { z } from "zod";
import ctaContact from "@/assets/cta-contact.webp";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { LocationCards } from "@/components/site/LocationCards";
import { PageBanner } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { company, mapsEmbedKey, mapsLink } from "@/lib/site";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact Us | Filament Lifesciences Pvt Ltd" },
      {
        name: "description",
        content:
          "Contact Filament Lifesciences Pvt Ltd — registered office in Nagpur, Maharashtra, factory at IIE Growth Centre Sigaddi, Kotdwar, Uttarakhand. Email info@filamentlifesciences.com or send an enquiry.",
      },
      { property: "og:title", content: "Contact Us | Filament Lifesciences Pvt Ltd" },
      {
        property: "og:description",
        content: "Send a product or business enquiry to Filament Lifesciences Pvt Ltd.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { product } = Route.useSearch();

  const mapQuery = company.factory.mapQuery;
  const embedSrc = mapsEmbedKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsEmbedKey}&q=${encodeURIComponent(mapQuery)}`
    : `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <>
      <PageBanner
        image="/images/contact-handshake-hero.png"

  alt="Filament Lifesciences team collaborating in a modern pharmaceutical laboratory"
        eyebrow="Contact"
        title="Let's Build Better Life-Science Solutions Together"
        intro="Send us a product or business enquiry — our team responds by email."
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              Connect With Us
            </p>
            <h2 className="mt-6 text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
              {company.name}
            </h2>

            <div className="mt-9 space-y-8 text-sm">
              {[company.registeredOffice, company.factory].map((place) => (
                <div key={place.label}>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase">
                    {place.label}
                  </h3>
                  <address className="mt-2 leading-relaxed text-ink not-italic">
                    {place.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={place.mapUrl ?? mapsLink(place.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-brand-teal hover:opacity-75"
                  >
                    Open in Google Maps
                  </a>
                </div>
              ))}

              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase">
                  Email
                </h3>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 inline-flex items-center gap-2 font-medium break-all text-ink hover:text-ink-muted"
                >
                  <Mail className="size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                  {company.email}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase">
                  Phone
                </h3>
                <a
                  href={`tel:+91${company.phone}`}
                  className="mt-2 inline-flex items-center gap-2 font-medium text-ink hover:text-ink-muted"
                >
                  <Phone className="size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                  +91 {company.phone}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase">
                  Founded
                </h3>
                <p className="mt-2 text-ink">{company.foundedYear}</p>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="sr-only">Enquiry form</h2>
            <EnquiryForm defaultProduct={product ?? ""} />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
            {embedSrc ? (
              <iframe
                title="Map showing the Filament Lifesciences factory location"
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-16/9 w-full border-0 md:aspect-21/9"
              />
            ) : (
              <div className="flex flex-col items-start gap-4 p-9 md:p-12">
                <p className="eyebrow">Location</p>
                <p className="max-w-xl text-base leading-relaxed text-ink-muted">
                  The interactive map appears here once a Google Maps key is configured. In the
                  meantime, open our factory location directly in Google Maps.
                </p>
                <a
                  href={company.factory.mapUrl ?? mapsLink(mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink-muted"
                >
                  Open in Google Maps
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
