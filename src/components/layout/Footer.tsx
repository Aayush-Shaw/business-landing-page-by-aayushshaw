import * as React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* Brand & Contact Info */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <Link href="/" className="flex items-center gap-2 mb-2">
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

            <div className="flex flex-col gap-2 text-sm text-foreground">
              <a href="tel:+79275348975" className="font-medium hover:text-brand transition-colors">+7 927 534-89-75</a>
              <span className="text-muted-foreground">Samara<br/>Novo-Sadovaya st., 10</span>
              <a href="mailto:prostranstvo@gmail.com" className="text-muted-foreground hover:text-brand transition-colors">prostranstvo@gmail.com</a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:w-1/3">
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-brand transition-colors">About us</Link>
              <Link href="#catalog" className="hover:text-brand transition-colors">Catalog</Link>
              <Link href="#process" className="hover:text-brand transition-colors">Work process</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <Link href="#reviews" className="hover:text-brand transition-colors">Reviews</Link>
              <Link href="#contact" className="hover:text-brand transition-colors">Contacts</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2024 Space. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
