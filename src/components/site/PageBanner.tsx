interface PageBannerProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageBanner({ image, alt, eyebrow, title, intro }: PageBannerProps) {
  return (
    <section className="relative isolate h-[55svh] min-h-100 overflow-hidden bg-ink-deep text-primary-foreground md:h-[58vh]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="container-x relative flex h-full items-end pt-28 pb-12 md:pb-16">
        <div className="max-w-2xl">
          <p className="eyebrow-light">
            <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-4 text-2xl leading-[1.1] font-extrabold sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
