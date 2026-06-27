"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "About us", href: "/about" },
  { name: "Catalog", href: "/catalog" },
  { name: "Work process", href: "/process" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contacts", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xs">
        <div className="w-full px-4 md:px-8 h-15 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50" onClick={closeMenu}>
            <div className="flex -space-x-1">
              <div className="w-4 h-8 bg-gray-300 rounded-sm"></div>
              <div className="w-4 h-10 bg-gray-400 rounded-sm"></div>
              <div className="w-4 h-6 bg-gray-300 rounded-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none">Space</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Commercial Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 relative z-50 lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-2xl font-heading font-semibold">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu}
              className="text-foreground hover:text-brand transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
