"use client";

import * as React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialData } from "@/lib/testimonialData";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // We will show 3 testimonials on large screens, sliding 1 at a time.
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialData.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialData.length - 3 ? prev + 1 : 0));
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
    <section id="reviews" className="pt-8 overflow-hidden">
      <div className="w-full px-4 md:px-8">
        <SectionTitle>What clients say about us</SectionTitle>

        <div className="flex flex-col mt-8 relative">
          {/* Inner slider container */}
          <div 
            className="overflow-hidden mx-[-12px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndEvent}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex} * var(--slide-width)))` }}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
                  <div className="bg-muted rounded-3xl p-8 md:p-10 flex flex-col h-full select-none">
                    {/* Quote Icon */}
                    <div className="text-brand text-6xl font-serif leading-none mb-4">
                      “
                    </div>
                    
                    <p className="text-foreground text-sm md:text-base leading-relaxed mb-8 grow">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                          draggable={false}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground">
                          {testimonial.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Visible only on Desktop/Large screens) */}
          <div className="hidden lg:flex justify-end gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground flex items-center justify-center text-foreground hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
