# 🏢 Space — Commercial Real Estate Landing Page

A modern, high-performance landing page for a commercial real estate business — built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Fully statically generated for blazing-fast load times and excellent SEO.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🧩 What Problem Does This Solve?

Finding commercial real estate — offices, warehouses, retail spaces, or land plots — is often a fragmented, frustrating experience. Businesses waste hours browsing outdated listings across multiple platforms, with no centralized way to evaluate properties, understand the leasing process, or read real client reviews.

**Space** solves this by providing a **single, polished digital storefront** for a commercial real estate agency that:

- **Showcases a full property catalog** with filtering by category (offices, warehouses, retail, land) — so businesses find what they need instantly
- **Explains the work process transparently** — from consultation to deal closure in 5 clear steps, building trust before the first call
- **Displays real client testimonials** — social proof from entrepreneurs, CEOs, and directors who've successfully worked with the agency
- **Captures leads with a contact form** — converting visitors into clients with a simple, low-friction inquiry flow
- **Loads instantly** — statically generated pages, lazy-loaded images, and modern image formats (AVIF/WebP) ensure sub-second load times even on slow connections

---

## ✨ Features

- 🖼️ **Hero Carousel** — Auto-rotating background images with smooth crossfade transitions
- 📊 **Stats Section** — Key metrics (10+ years, 1000+ deals, 95% satisfaction)
- 🏬 **Property Catalog** — 60+ listings with category filters and interactive slider
- 🔄 **Work Process** — 5-step visual workflow with icons
- 💬 **Testimonials Slider** — 15 client reviews with touch/swipe support
- 📬 **Contact Form** — Lead capture with name, phone, and email
- 📱 **Fully Responsive** — Mobile-first design with hamburger navigation
- 🚀 **100% Static** — All pages prerendered at build time (SSG)
- 🔍 **SEO Optimized** — Per-page metadata, 70+ keywords, OpenGraph, Twitter cards, robots config
- ⚡ **Image Performance** — Lazy loading, blur placeholders, AVIF/WebP, 31-day cache TTL
- 🎨 **Custom Typography** — Questrial (headings) + Gantari (body) via `next/font`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router & SSG |
| [React 19](https://react.dev/) | UI component library |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS |
| [TypeScript 5](https://typescriptlang.org/) | Type safety |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Icons](https://react-icons.github.io/) | Brand logos (partner marquee) |
| [CVA](https://cva.style/) | Component variant management |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, SEO, Navbar & Footer
│   ├── page.tsx            # Home page (Hero + About + Catalog + Process + Testimonials + Contact)
│   ├── about/page.tsx      # About page
│   ├── catalog/
│   │   ├── page.tsx        # Catalog page (server component with SEO metadata)
│   │   └── CatalogPageContent.tsx  # Catalog interactive UI (client component)
│   ├── contact/page.tsx    # Contact page
│   ├── process/page.tsx    # Work process page
│   ├── reviews/page.tsx    # Client reviews page
│   └── globals.css         # Global styles & Tailwind theme
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Responsive navbar with mobile menu
│   │   └── Footer.tsx      # Footer with links & contact info
│   ├── sections/
│   │   ├── Hero.tsx        # Hero carousel with CTA
│   │   ├── About.tsx       # About section with stats & partner marquee
│   │   ├── Catalog.tsx     # Property catalog slider
│   │   ├── Process.tsx     # Work process steps
│   │   ├── Testimonials.tsx # Client testimonials slider
│   │   └── Contact.tsx     # Contact form section
│   └── ui/
│       ├── Button.tsx      # Reusable button with CVA variants
│       ├── Badge.tsx       # Floating badge component
│       ├── Input.tsx       # Styled form input
│       └── SectionTitle.tsx # Section heading with optional subtitle
└── lib/
    ├── catalogData.ts      # Property listings data (60 items)
    ├── testimonialData.ts  # Testimonial data (15 reviews)
    └── utils.ts            # Utility functions (cn)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Aayush-Shaw/business-landing-page-by-aayushshaw.git
cd business-landing-page-by-aayushshaw

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

All pages are statically generated at build time — no server required for serving.

---

## 👤 About Me

**Aayush Shaw** — Developer passionate about building clean, performant, and visually polished web experiences.

- 🔗 GitHub: [@Aayush-Shaw](https://github.com/Aayush-Shaw)
- 📧 Email: aayushshaw240@gmail.com
- 🔗 Portfolio: [Aayush Shaw](https://aayushshaw.vercel.app/)


---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
