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
  title: "Space | Commercial Real Estate for Business",
  description:
    "Rent, sale and selection of properties — from offices to warehouses. Start your cooperation with us today.",
  openGraph: {
    title: "Space | Commercial Real Estate for Business",
    description: "Rent, sale and selection of properties — from offices to warehouses.",
    type: "website",
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
