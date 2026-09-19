import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Which products do you currently supply?",
    a: "Our published portfolio covers active pharmaceutical ingredients and intermediates, each listed with its name, CAS number and application. The catalogue is updated as new products are released.",
  },
  {
    q: "How do I request pricing?",
    a: "Pricing is quoted against your specific requirement. Send an enquiry from the product page or the contact page and our team will respond by email.",
  },
  {
    q: "What documentation can you share?",
    a: "Product identification and application details are published on the site. Further documentation is shared directly with enquiring organisations on request.",
  },
  {
    q: "Where are you located?",
    a: "Our registered office is in Civil Lines, Nagpur, Maharashtra, and our factory address is A5B, IIE Growth Centre Sigaddi, Sidcul, Kotdwar, Pauri Garhwal, Uttarakhand.",
  },
  {
    q: "Do you support technical discussions before an order?",
    a: "Yes. Our technical team is available for chemistry, handling and application discussion around any product we supply.",
  },
];

export function Faq() {
  return (
    <section className="section-y bg-background">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
            FAQs
          </p>
          <h2 className="mt-5 text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Answers to what customers ask most often before starting a technical discussion with us.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((item) => (
              <li key={item.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-bold text-ink">
                    <span className="min-w-0">{item.q}</span>
                    <span
                      className="mt-1 shrink-0 text-brand-teal transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-ink-muted">{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
