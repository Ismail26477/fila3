import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/site/Button";
import ctaProducts from "@/assets/cta-products.webp";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, products } from "@/data/products";
import { company } from "@/lib/site";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found | Filament Lifesciences" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const description = `${product.name} (CAS ${product.casNumber}) — ${product.application}. Supplied by Filament Lifesciences Pvt Ltd. Request pricing and documentation.`;
    return {
      meta: [
        { title: `${product.name} | CAS ${product.casNumber} | Filament Lifesciences` },
        { name: "description", content: description },
        { property: "og:title", content: `${product.name} | Filament Lifesciences` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink-deep pt-32 pb-16 text-primary-foreground md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-35" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 right-0 size-[26rem] opacity-50"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <ButtonLink
              to="/products"
              variant="ghost"
              className="mb-8 px-4 py-2 text-xs tracking-widest uppercase"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> All Products
            </ButtonLink>
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              {product.category}
            </p>
            <h1 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <dl className="mt-10 grid gap-6 border-t border-primary-foreground/12 pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-primary-foreground/55 uppercase">
                  CAS Number
                </dt>
                <dd className="mt-2 font-display text-xl font-bold">{product.casNumber}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-primary-foreground/55 uppercase">
                  Application
                </dt>
                <dd className="mt-2 font-display text-xl font-bold">{product.application}</dd>
              </div>
            </dl>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
              Detailed specifications and documentation are shared on request. Pricing for
              business-to-business supply is quoted against your requirement — send an enquiry and
              our team will respond by email.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/contact" search={{ product: product.name } as never} variant="light">
                Request Pricing
              </ButtonLink>
              <ButtonLink to="/contact" search={{ product: product.name } as never} variant="ghost">
                Request Enquiry
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-primary-foreground/12">
            <img
              src={product.image}
              alt={`${product.name} — active pharmaceutical ingredient visual`}
              width={1200}
              height={912}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              Product Information
            </p>
            <h2 className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">
              What we can share today
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              {product.name} is listed in our portfolio under {product.category}, identified by CAS
              number {product.casNumber} and used as {product.application.toLowerCase()}.
            </p>
            <p>
              Further technical details — specification sheets, packaging and lead-time information —
              are provided directly to enquiring organisations. For any question about this product,
              write to{" "}
              <a href={`mailto:${company.email}`} className="font-semibold break-all text-ink">
                {company.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-surface">
          <div className="container-x">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Other products</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.06}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        image={ctaProducts}
        alt="Sealed drums of active pharmaceutical ingredients in a warehouse"
      />
    </>
  );
}
