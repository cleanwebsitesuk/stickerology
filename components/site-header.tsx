"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl transition-all">
      {/* Top Bar - High z-index ensures it sits above the mobile menu overlay */}
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Stickerology"
            width={160}
            height={50}
            className="h-auto w-[110px] sm:w-[120px] md:w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-neutral-900">
          <Link href="/" className="transition-colors hover:text-[#BC2229]">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#BC2229]">
            About
          </Link>
          <Link 
            href="/contact" 
            className="rounded-full bg-neutral-950 px-6 py-2.5 text-white transition-all hover:bg-[#BC2229] hover:shadow-md"
          >
            Order
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-8"}`} />
          <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/98 backdrop-blur-3xl transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10 text-2xl font-bold uppercase tracking-widest text-neutral-900">
          <Link 
            href="/" 
            className="transition-colors hover:text-[#BC2229]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="transition-colors hover:text-[#BC2229]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="mt-6 rounded-full bg-neutral-950 px-12 py-5 text-sm font-bold text-white transition-all hover:bg-[#BC2229]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
