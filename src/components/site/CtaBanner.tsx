import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

interface CtaBannerProps {
  image: string;
  alt: string;
  title?: string;
  text?: string;
}

export function CtaBanner({ image, alt, title, text }: CtaBannerProps) {
  return (
    <section className="relative isolate min-h-[30svh] overflow-hidden bg-ink text-primary-foreground">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1920}
        height={640}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="container-x relative flex min-h-[30svh] items-center py-12 md:py-14">
        <Reveal className="max-w-2xl">
          <h2 className="text-xl leading-tight font-extrabold sm:text-3xl lg:text-4xl">
            {title ?? "Let's Create the Next Chapter in Life Sciences"}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-primary-foreground/80">
            {text ?? "Connect with Filament Lifesciences for product and business enquiries."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink to="/products" variant="light">
              Explore Products
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
