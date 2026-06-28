"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { catalogData } from "@/lib/catalogData";
import { Button } from "@/components/ui/Button";

export function Catalog() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // Show 3 cards on desktop, 1 on mobile.
  // For simplicity in this demo slider, we'll slide 1 card at a time.
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : catalogData.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < catalogData.length - 3 ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="catalog" className="pt-8">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Title Area */}
          <div className="lg:w-1/4 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start lg:justify-start">
            <SectionTitle subtitle="Wide selection of real estate for your business" className="md:mb-0 lg:mb-5">
              Property Catalog
            </SectionTitle>

            <div className="mt-4 md:mt-0 lg:mt-8 shrink-0">
              <Link href="/catalog">
                <Button
                  variant="whiteDarkText"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Explore full catalog
                </Button>
              </Link>
            </div>
          </div>

          {/* Cards Area */}
          <div className="lg:w-3/4 flex flex-col overflow-hidden relative">
            {/* Inner slider container */}
            <div
              className="overflow-hidden -mx-3"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEndEvent}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(-${currentIndex} * var(--slide-width)))`,
                }}
              >
                {catalogData.map((prop, i) => (
                  <div
                    key={prop.id}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                  >
                    <div className="group flex flex-col select-none border-2 rounded-2xl md:rounded-xl bg-white/30 border-white/10">
                      <div className="relative h-75 md:h-87.5 w-full rounded-2xl md:rounded-xl overflow-hidden">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={i === 0}
                          draggable={false}
                        />
                      </div>
                      <h3 className="font-heading font-semibold text-lg md:text-lg p-2 text-foreground mb-1 line-clamp-1">
                        {prop.title}
                      </h3>
                      <div className="flex items-center justify-between p-2 mt-1">
                        <p className="text-sm text-muted-foreground">
                          {prop.area}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {prop.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="hidden lg:flex justify-end gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground flex items-center justify-center text-foreground hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Previous properties"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors cursor-pointer"
                aria-label="Next properties"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
