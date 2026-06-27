export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", // Female 1
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop", // Male 1
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop", // Female 2
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop", // Male 2
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop", // Female 3
];

const names = [
  "Ekaterina Ilyina",
  "Michael Chen",
  "Sarah Jenkins",
  "David Rodriguez",
  "Amina Patel",
  "James Wilson",
  "Elena Rostova",
  "Marcus Johnson",
  "Sofia Rossi",
  "Alexei Petrov",
  "Rachel Kim",
  "Thomas Wright",
  "Maria Garcia",
  "William Davies",
  "Nina Singh"
];

const roles = [
  "Entrepreneur",
  "CEO, TechFlow",
  "Director of Operations",
  "Founder, Urban Spaces",
  "Managing Partner",
  "Retail Director",
  "Investment Banker",
  "Head of Real Estate",
  "Co-founder, Studio 9",
  "Logistics Manager",
  "Regional Director",
  "VP of Expansion",
  "Commercial Director",
  "Startup Founder",
  "Chief Operating Officer"
];

const texts = [
  "The team left a pleasant impression with their professionalism, goodwill, and striving to help the client. We will definitely continue working with them in the future.",
  "Finding the right office space was a breeze thanks to their incredible market knowledge. They negotiated a fantastic rate for our startup.",
  "Their attention to detail and ability to understand our specific warehouse requirements saved us months of searching.",
  "Highly professional service from start to finish. They managed the entire acquisition process seamlessly.",
  "We've partnered with them for our last three retail expansions. Their insights into foot traffic and zoning are unmatched.",
  "A truly expert commercial real estate agency. They took the time to understand our business model before suggesting properties.",
  "Exceptional negotiation skills and deep market connections. They secured a prime location for us that wasn't even listed publicly.",
  "They handled our complex commercial lease with absolute precision. I wouldn't trust any other agency with our real estate needs.",
  "Responsive, transparent, and highly effective. Finding a 10,000 sq ft facility in this market seemed impossible until we hired them.",
  "Their legal support during the transaction was just as impressive as their property selection. A complete, end-to-end service.",
  "We needed to scale operations quickly, and they found us a fully-equipped logistics hub in record time.",
  "The consultation was incredibly valuable. They mapped out long-term real estate strategies that aligned perfectly with our growth.",
  "Professionalism at its finest. They consistently provided honest feedback about properties rather than just trying to close a deal.",
  "An absolute pleasure to work with. The entire process of finding and securing our new headquarters was smooth and stress-free.",
  "Their extensive database of properties meant we had plenty of high-quality options to choose from. Fantastic experience overall."
];

export const testimonialData: Testimonial[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `testimonial-${i}`,
  name: names[i],
  role: roles[i],
  text: texts[i],
  avatar: avatars[i % avatars.length],
}));
