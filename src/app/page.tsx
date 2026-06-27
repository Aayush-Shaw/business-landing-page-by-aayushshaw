import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Catalog } from "@/components/sections/Catalog";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Catalog />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
