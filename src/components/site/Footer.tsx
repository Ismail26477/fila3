import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 right-0 size-96 opacity-40" aria-hidden="true" />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_1.2fr]">
          <div className="max-w-sm">
           <img
  src="/filament-logo-transparent.png"
  alt={`${company.name} logo`}
  width={740}
  height={270}
  loading="lazy"
  decoding="async"
  className="h-14 w-auto"
/>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              {company.name} is an Indian life-sciences company focused on active pharmaceutical
              ingredients and intermediates, built around scientific precision and dependable
              quality practices.
            </p>
  <p className="mt-6 text-xs tracking-wide text-primary-foreground/50">
    Founded {company.foundedYear}
  </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow-light">Quick Links</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow-light">Contact</h2>
            <ul className="mt-6 space-y-6 text-sm text-primary-foreground/70">
              {[company.registeredOffice, company.factory].map((place) => (
                <li key={place.label} className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold tracking-widest text-primary-foreground/50 uppercase">
                      {place.label}
                    </span>
                    <span className="mt-1 block leading-relaxed">{place.lines.join(" ")}</span>
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                <a
                  href={`tel:+91${company.phone}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  +91 {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-primary-foreground"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-primary-foreground/45">
          © 2026 {company.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
