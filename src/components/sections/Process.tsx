import * as React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import {
  MessageSquare,
  Search,
  Eye,
  FileCheck,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation and needs analysis",
    description: "At this stage, we determine what type of real estate you need",
  },
  {
    icon: Search,
    title: "Search and selection of objects",
    description:
      "We offer only verified objects that meet your budget and goals",
  },
  {
    icon: Eye,
    title: "Viewing and property evaluation",
    description:
      "We organize property viewings, providing full information about the real estate",
  },
  {
    icon: FileCheck,
    title: "Verification and document preparation",
    description: "We conduct a thorough check of all documents and ownership rights",
  },
  {
    icon: Briefcase,
    title: "Deal support",
    description:
      "We provide support in concluding the contract and accompany you at all stages",
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Title & Image */}
          <div className="lg:w-[45%] flex flex-col">
            <SectionTitle 
              subtitle="We made the work process with us as simple and transparent as possible"
              className="mb-8 md:mb-12"
            >
              How we work
            </SectionTitle>

            <div className="relative mt-auto">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl md:rounded-[2rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"
                  alt="Modern building facade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge exactly on the corner */}
              <Badge className="absolute top-0 right-0 -translate-y-1/4 md:translate-x-1/4 md:-translate-y-1/4 z-10">
                Free <br /> consultation
              </Badge>
            </div>
          </div>

          {/* Right Column: Steps List */}
          <div className="lg:w-[55%] flex flex-col pt-2 lg:pt-0">
            <div className="flex flex-col">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 md:gap-6 py-5 md:py-6 border-b border-gray-200 last:border-0 first:pt-0"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-sm">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
