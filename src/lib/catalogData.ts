export type PropertyType = "office" | "warehouse" | "land" | "retail";

export interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  type: PropertyType;
  price: string;
  area: string;
}

const officeImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop",
];

const warehouseImages = [
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
];

const landImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629196914275-23c31b3eb364?q=80&w=1974&auto=format&fit=crop",
];

const retailImages = [
  "https://images.unsplash.com/photo-1441984904996-e0b6ed29ae27?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2075&auto=format&fit=crop",
];

export const catalogData: Property[] = Array.from({ length: 60 }).map((_, i) => {
  const typeIndex = i % 4;
  let type: PropertyType;
  let title = "";
  let image = "";
  let description = "";
  let area = "";
  let price = "";

  if (typeIndex === 0) {
    type = "office";
    title = `Premium Office Space ${i + 1}`;
    image = officeImages[i % officeImages.length];
    description = "Modern Class A office space in the business district.";
    area = `${Math.floor((i * 37) % 500 + 100)} sq m`;
    price = `$${Math.floor((i * 13) % 50 + 20)} / sq m`;
  } else if (typeIndex === 1) {
    type = "warehouse";
    title = `Logistics Hub ${i + 1}`;
    image = warehouseImages[i % warehouseImages.length];
    description = "High-ceiling warehouse with easy highway access.";
    area = `${Math.floor((i * 193) % 5000 + 1000)} sq m`;
    price = `$${Math.floor((i * 7) % 15 + 5)} / sq m`;
  } else if (typeIndex === 2) {
    type = "land";
    title = `Commercial Plot ${i + 1}`;
    image = landImages[i % landImages.length];
    description = "Prime land plot ready for commercial development.";
    area = `${Math.floor((i * 811) % 20000 + 5000)} sq m`;
    price = `$${Math.floor((i * 313) % 1000000 + 500000)} total`;
  } else {
    type = "retail";
    title = `Retail Storefront ${i + 1}`;
    image = retailImages[i % retailImages.length];
    description = "High foot-traffic retail space in a premium mall.";
    area = `${Math.floor((i * 47) % 300 + 50)} sq m`;
    price = `$${Math.floor((i * 29) % 100 + 40)} / sq m`;
  }

  return {
    id: `prop-${i}`,
    title,
    description,
    image,
    type,
    price,
    area,
  };
});
