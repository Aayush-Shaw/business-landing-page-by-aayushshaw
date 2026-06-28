import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Catalog } from "@/components/sections/Catalog";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: {
    absolute: "Space | Commercial Real Estate for Business — Office, Warehouse & Retail",
  },
  description:
    "Space is your trusted commercial real estate partner. Explore premium office spaces, warehouses, retail storefronts, and land plots for rent or sale. 10+ years, 1000+ deals, 95% client satisfaction.",
  keywords: [
    "commercial real estate",
    "office space for rent",
    "warehouse for lease",
    "retail space rental",
    "commercial property listings",
    "business real estate solutions",
    "premium office rental",
    "commercial lease deals",
    "real estate agency",
    "property management services",
  ],
  openGraph: {
    title: "Space | Commercial Real Estate for Business — Office, Warehouse & Retail",
    description:
      "Find your ideal commercial property with Space. Premium offices, warehouses, retail spaces & land plots. 10+ years of expertise, 1000+ successful deals.",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Catalog />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
