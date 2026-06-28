import type { Metadata } from "next";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read what our clients say about Space commercial real estate agency. Real testimonials from entrepreneurs, CEOs, and business leaders who found their ideal office, warehouse, or retail space with us.",
  keywords: [
    "real estate client reviews",
    "commercial property testimonials",
    "Space agency reviews",
    "office space client feedback",
    "trusted real estate agency",
    "business property reviews",
    "real estate customer satisfaction",
    "commercial lease testimonials",
  ],
  openGraph: {
    title: "Client Reviews | Space Commercial Real Estate",
    description:
      "Hear from our satisfied clients — real testimonials from business leaders who found their ideal commercial property with Space.",
  },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background pt-8 md:pt-12">
      <Testimonials />
    </main>
  );
}
