import type { Metadata } from "next";
import { Process } from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Work Process",
  description:
    "Discover how Space commercial real estate works — from initial consultation and needs analysis to property search, viewings, document verification, and full deal support. Transparent, simple, and efficient.",
  keywords: [
    "real estate process",
    "how commercial leasing works",
    "property consultation process",
    "real estate deal support",
    "property document verification",
    "commercial property viewing",
    "real estate workflow",
    "business property acquisition",
  ],
  openGraph: {
    title: "Work Process | Space Commercial Real Estate",
    description:
      "See how we make commercial real estate simple — consultation, search, viewing, verification, and deal support in 5 clear steps.",
  },
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background pt-8 md:pt-12">
      <Process />
    </main>
  );
}
