import * as React from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  FaFigma,
  FaGithub,
  FaGitlab,
  FaSlack,
  FaTrello,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaTwitch,
  FaChrome,
  FaCodepen,
  FaLinkedin,
} from "react-icons/fa";

const stats = [
  { value: "10+", label: "years on the market" },
  { value: "1000+", label: "successful deals" },
  { value: "4000+", label: "objects in our database" },
  { value: "95%", label: "satisfied clients" },
];

const logos = [
  { icon: FaFigma, name: "Figma" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaGitlab, name: "GitLab" },
  { icon: FaSlack, name: "Slack" },
  { icon: FaTrello, name: "Trello" },
  { icon: FaTwitter, name: "Twitter" },
  { icon: FaYoutube, name: "YouTube" },
  { icon: FaDribbble, name: "Dribbble" },
  { icon: FaTwitch, name: "Twitch" },
  { icon: FaChrome, name: "Chrome" },
  { icon: FaCodepen, name: "CodePen" },
  { icon: FaLinkedin, name: "LinkedIn" },
];

export function About() {
  return (
    <section id="about" className="pt-6 md:pt-10 overflow-hidden">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-10">
          {/* Text Content */}
          <div className="lg:w-auto">
            <SectionTitle>About us</SectionTitle>
            <p className="text-muted-foreground text-lg leading-6 max-w-xl">
              We are an expert commercial real estate agency that helps businesses
              find suitable properties for rent or purchase. We specialize in
              working with offices, warehouses, and retail spaces. We provide a
              full range of services: from finding suitable properties to full
              legal support.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-auto flex lg:justify-end mt-3 lg:mt-0">
            <div className="grid grid-cols-2 gap-x-12 gap-y-12 w-full lg:w-auto">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Marquee */}
      <div className="relative">
        <div className="flex w-max animate-marquee">
          {/* We render the logos twice to create a seamless infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-foreground font-semibold text-xl mx-8 md:mx-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            >
              <logo.icon className="w-8 h-8 md:w-10 md:h-10" />
              {logo.name}
            </div>
          ))}
        </div>
        
        {/* Gradient fades for the edges of the marquee */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-background to-transparent pt-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-background to-transparent pt-12" />
      </div>
    </section>
  );
}
