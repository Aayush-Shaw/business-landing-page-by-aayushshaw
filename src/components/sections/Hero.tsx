"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=2040&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">  
      <div className="w-full px-3 md:px-6">
        <div className="relative rounded-xl overflow-hidden w-full min-h-110 md:min-h-150 flex items-start">
          
          {/* Background Images Carousel */}
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Commercial property ${index + 1}`}
              fill
              sizes="100vw"
              priority={true}
              className={`object-cover object-center transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent z-10" />

          {/* Text Content */}
          <div className="relative z-20 w-full md:w-[60%] lg:w-[60%] pl-6 pt-8 md:pl-10 md:pt-15 flex flex-col justify-start text-white pb-12">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-3 leading-[1.1]">
               Commercial Real<br className="block md:hidden" /> Estate<br className="hidden xl:block" /> for Business
            </h1>
            <p className="text-md md:text-xl text-white/90 mb-10 max-w-xl">
              Rent, sale and selection of properties — <br className="block" />
              from offices to warehouses
            </p>
            <div>
              <Button>
                Start cooperation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

