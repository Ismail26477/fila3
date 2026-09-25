const product1 = "/images/isometamedium-chloride-hcl-clean.png";
const product2 = "/images/homidium-bromide-clean.png";
const product3 = "/images/homidium-chloride-clean.png";

export type ProductCategory = "APIs & Intermediates";

export interface Product {
  id: string;
  name: string;
  casNumber: string;
  application: string;
  category: ProductCategory;
  image: string;
  description?: string;
}

export const categories: ProductCategory[] = ["APIs & Intermediates"];

/**
 * Product data supplied by the company. Add new entries here — every product
 * surface (home preview, catalogue, detail page, sitemap) reads from this list.
 */
export const products: Product[] = [
  {
    id: "isometamedium-chloride-hcl",
    name: "Isometamedium Chloride hcl",
    casNumber: "6798-24-9",
    application: "Antitrypanosomal Agent",
    category: "APIs & Intermediates",
    image: product1,
    description:
      "Isometamidium chloride hydrochloride is a veterinary medication used to treat and prevent protozoal infections, specifically animal trypanosomiasis in livestock.",
  },
  {
    id: "homidium-bromide",
    name: "Homidium Bromide",
    casNumber: "1239-45-8",
    application: "Antiprotozoal (Trypanosoma)",
    category: "APIs & Intermediates",
    image: product2,
    description:
      "Homidium bromide, also known chemically and commonly as ethidium bromide, is an intercalating agent and veterinary medication used to treat protozoal infections like trypanosomiasis in livestock.",
  },
  {
    id: "homidium-chloride",
    name: "Homidium Chloride",
    casNumber: "602-52-8",
    application: "Antiprotozoal (Trypanosoma)",
    category: "APIs & Intermediates",
    image: product3,
    description:
      "Homidium chloride, also known as ethidium chloride, is the chloride salt of ethidium and functions as both a nucleic acid intercalating agent and a veterinary trypanocidal drug.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
