import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Space commercial real estate agency. Request a free consultation for office spaces, warehouses, retail properties, or land plots. We respond within 24 hours.",
  keywords: [
    "contact real estate agency",
    "commercial property consultation",
    "free real estate consultation",
    "office space inquiry",
    "warehouse leasing contact",
    "real estate support",
    "property rental inquiry",
    "business property consultation",
  ],
  openGraph: {
    title: "Contact Us | Space Commercial Real Estate",
    description:
      "Reach out to Space for expert commercial real estate guidance. Free consultations, fast responses, and personalized property solutions.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-muted pt-8 md:pt-12">
      <Contact />
    </main>
  );
}
