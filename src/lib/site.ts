/**
 * Single source of truth for company information.
 * Only verified details supplied by the company are stored here.
 */

export const company = {
  name: "Filament Lifesciences Pvt Ltd",
  shortName: "Filament Lifesciences",
  cin: "U21000MH2025PTC452237",
  email: "info@filamentlifesciences.com",
  phone: "9096464815",
  foundedYear: "2025",
  registeredOffice: {
    label: "Registered Office",
    lines: [
      "166, Amrta Manor,",
      "2nd Bungalow, First Floor,",
      "Civil Lines, Nagpur,",
      "Maharashtra – 440001",
    ],
    mapQuery: "166 Amrta Manor, Civil Lines, Nagpur, Maharashtra 440001",
  },
  factory: {
    label: "Factory Address",
    lines: [
      "Sigaddi Growth Centre, Building No./Flat No.: A5B",
      "IIE Growth Center, SIDCUL, Kotadwara,",
      "Uttarakhand 246149",
    ],
    mapQuery: "Sigaddi Growth Centre, Building No./Flat No.: A5B, IIE Growth Center, SIDCUL, Kotadwara, Uttarakhand 246149",
    mapUrl: "https://maps.app.goo.gl/NU5AGEYMRn3xVsXd9?g_st=iwb",
  },
} as const;

/** Verified company number supplied by the company. */
export const whatsappNumber: string =
  (import.meta.env["VITE_WHATSAPP_NUMBER"] as string | undefined) ?? "919096464815";

export const mapsEmbedKey: string =
  (import.meta.env["VITE_GOOGLE_MAPS_API_KEY"] as string | undefined) ?? "";

export const mapsLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Contact Us", to: "/contact" },
] as const;
