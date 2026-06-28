"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { catalogData, PropertyType } from "@/lib/catalogData";
import { Button } from "@/components/ui/Button";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDVlMGU4Ii8+PC9zdmc+";

export default function CatalogPageContent() {
  const [filter, setFilter] = React.useState<PropertyType | "all">("all");

  const filteredData = React.useMemo(() => {
    if (filter === "all") return catalogData;
    return catalogData.filter((item) => item.type === filter);
  }, [filter]);

  const categories = [
    { id: "all", label: "All Properties" },
    { id: "office", label: "Offices" },
    { id: "warehouse", label: "Warehouses" },
    { id: "retail", label: "Retail Spaces" },
    { id: "land", label: "Land Plots" },
  ];

  return (
    <main className="min-h-screen bg-background pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header & Navigation */}
        <div className="mb-12">
          <Link href="/#catalog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Full Property Catalog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our complete portfolio of premium commercial real estate. Filter by category to find the perfect space for your business needs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-foreground text-background"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((prop, i) => (
            <div key={prop.id} className="group cursor-pointer flex flex-col">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden mb-5">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading={i < 3 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {prop.type}
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4 flex-1">
                  {prop.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Area</span>
                    <span className="font-medium text-foreground">{prop.area}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price</span>
                    <span className="font-semibold text-brand text-lg">{prop.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
          </div>
        )}

      </div>
    </main>
  );
}
