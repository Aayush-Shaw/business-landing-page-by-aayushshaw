import type { Metadata } from "next";
import { Questrial, Gantari } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Space Commercial Real Estate",
    default: "Space | Commercial Real Estate for Business",
  },
  description:
    "Space is a leading commercial real estate agency specializing in office spaces, warehouses, retail storefronts, and land plots for rent, sale, and lease. Find premium business properties with full legal support.",
  keywords: [
    "commercial real estate",
    "office space for rent",
    "warehouse for lease",
    "retail space",
    "commercial property",
    "business real estate",
    "office rental",
    "commercial lease",
    "warehouse rental",
    "land plots for sale",
    "premium office space",
    "commercial real estate agency",
    "property management",
    "real estate consulting",
    "business property solutions",
    "commercial property listings",
    "industrial real estate",
    "retail storefront rental",
    "coworking space",
    "real estate investment",
  ],
  applicationName: "Space Commercial Real Estate",
  authors: [{ name: "Space Real Estate Agency" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Space | Commercial Real Estate for Business",
    description:
      "Rent, sale and selection of premium commercial properties — from modern offices and warehouses to retail spaces and land plots. Start your cooperation with us today.",
    type: "website",
    siteName: "Space Commercial Real Estate",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space | Commercial Real Estate for Business",
    description:
      "Find premium commercial properties — offices, warehouses, retail spaces & land plots. Full-service real estate agency with 10+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${questrial.variable} ${gantari.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
