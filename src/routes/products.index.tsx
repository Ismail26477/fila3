import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import bannerProducts from "@/assets/banner-products.webp";
import ctaProducts from "@/assets/cta-products.webp";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageBanner } from "@/components/site/PageBanner";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { categories, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products | APIs & Intermediates | Filament Lifesciences" },
      {
        name: "description",
        content:
          "Product portfolio of Filament Lifesciences Pvt Ltd — APIs and intermediates including Isometamedium Chloride hcl (6798-24-9), Homidium Bromide (1239-45-8) and Homidium Chloride (602-52-8).",
      },
      { property: "og:title", content: "Our Products | Filament Lifesciences Pvt Ltd" },
      {
        property: "og:description",
        content: "Browse APIs and intermediates by name, CAS number and application.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.casNumber.toLowerCase().includes(q) ||
        p.application.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const filters = ["All", ...categories];

  return (
    <>
      <PageBanner
        image={bannerProducts}
        alt="Laboratory glassware, vials and crystalline chemical powder"
        eyebrow="Portfolio"
        title="Our Products"
        intro="Our current portfolio of APIs and intermediates. Every entry lists the product name, CAS number and application — pricing is shared on request."
      />

      <section className="section-y bg-background">
        <div className="container-x">
          <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="min-w-0">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
                Catalogue
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:w-auto">
              <div className="relative w-full sm:w-72">
                <label htmlFor="product-search" className="sr-only">
                  Search products
                </label>
                <Search
                  className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search name or CAS number"
                  className="w-full rounded-md border border-input bg-background py-3 pr-4 pl-10 text-sm text-ink focus:border-brand-teal focus:outline-none"
                />
              </div>

              <div
                role="group"
                aria-label="Filter by category"
                className="flex flex-wrap gap-2"
              >
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={cn(
                      "rounded-md border px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors",
                      category === item
                        ? "border-ink bg-ink text-primary-foreground"
                        : "border-input text-ink-muted hover:border-ink/40",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <Reveal key={product.id} delay={Math.min(i, 5) * 0.06}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-16 rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No products match your search. Try a different name or CAS number.
            </p>
          )}
        </div>
      </section>

      <CtaBanner
        image={ctaProducts}
        alt="Sealed drums of active pharmaceutical ingredients in a warehouse"
      />
    </>
  );
}
