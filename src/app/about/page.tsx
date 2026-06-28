import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Space — a leading commercial real estate agency with 10+ years on the market, 1000+ successful deals, and 4000+ properties in our database. Expert office, warehouse, and retail space solutions.",
  keywords: [
    "about Space real estate",
    "commercial real estate agency",
    "real estate company history",
    "office space experts",
    "warehouse leasing agency",
    "trusted property agency",
    "real estate experience",
    "property consultation",
  ],
  openGraph: {
    title: "About Us | Space Commercial Real Estate",
    description:
      "Discover Space — your expert commercial real estate partner with 10+ years of experience, 1000+ deals, and 4000+ listed properties.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-8 md:pt-12">
      <About />
    </main>
  );
}
