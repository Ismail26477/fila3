import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/site";

/**
 * Floating WhatsApp button. Renders only when VITE_WHATSAPP_NUMBER is set,
 * so no phone number is ever invented.
 */
export function WhatsAppButton() {
  if (!whatsappNumber) return null;

  const href = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 md:right-6 md:bottom-6"
    >
      <span className="pointer-events-none hidden rounded-md bg-ink px-3 py-2 text-xs font-medium text-primary-foreground opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
      <span className="relative grid size-13 place-items-center rounded-full bg-ink text-primary-foreground shadow-lift transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-teal/30" aria-hidden="true" />
        <MessageCircle className="relative size-6" aria-hidden="true" />
      </span>
    </a>
  );
}
