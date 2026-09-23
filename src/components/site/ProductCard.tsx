import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-teal/60 hover:shadow-lift">
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        className="relative block aspect-[4/3] overflow-hidden bg-white"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} — active pharmaceutical ingredient visual`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={912}
          className={`size-full bg-white object-fill transition-transform duration-700 group-hover:scale-[1.03] ${
            product.id === "isometamedium-chloride-hcl" ? "-translate-y-5 scale-[1.03]" : ""
          }`}
        />
        <span className="absolute top-4 left-4 rounded-sm bg-ink-deep px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-primary-foreground/85 uppercase">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg leading-snug font-bold text-ink">{product.name}</h3>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 text-muted-foreground">CAS No.</dt>
            <dd className="font-medium text-ink">{product.casNumber}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 text-muted-foreground">Used In</dt>
            <dd className="min-w-0 text-ink-muted">{product.application}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5">
          <Link
            to="/products/$productId"
            params={{ productId: product.id }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-ink-muted"
          >
            View Details <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            search={{ product: product.name }}
            className="text-sm font-semibold text-brand-teal transition-opacity hover:opacity-75"
          >
            Request Enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
