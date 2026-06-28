import type { Metadata } from "next";
import CatalogPageContent from "./CatalogPageContent";

export const metadata: Metadata = {
  title: "Property Catalog",
  description:
    "Browse our full catalog of premium commercial properties — offices, warehouses, retail spaces, and land plots. Filter by category, compare prices, and find the perfect space for your business.",
  keywords: [
    "commercial property catalog",
    "office space listings",
    "warehouse properties",
    "retail space for rent",
    "land plots for sale",
    "commercial real estate listings",
    "business property search",
    "property comparison",
    "affordable office space",
    "industrial warehouse rental",
  ],
  openGraph: {
    title: "Property Catalog | Space Commercial Real Estate",
    description:
      "Explore our complete portfolio of premium commercial real estate — offices, warehouses, retail spaces & land plots with competitive pricing.",
  },
};

export default function CatalogPage() {
  return <CatalogPageContent />;
}
