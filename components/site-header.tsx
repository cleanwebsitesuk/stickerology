"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`${inter.className} sticky top-0 z-[100] w-full border-b border-neutral-200 bg-white`}>
        {/* max-w-7xl mx-auto puts the logo in the "normal" place, aligned with page content */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          
          {/* Logo */}
          <Link href="/" className="relative z-[110] flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={180} 
              height={50}
              priority
              className="h-auto w-[130px] md:w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-900">
            <Link href="/" className="transition-colors hover:text-[#BC2229]">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#BC2229]">
              About
            </Link>
            <Link 
              href="/contact" 
              className="ml-2 rounded-full bg-neutral-950 px-6 py-2.5 text-white transition-all hover:bg-[#BC2229] hover:shadow-md"
            >
              Order
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="relative z-[110] flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-7"}`} />
            <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-5"}`} />
            <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"}`} />
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div 
          className={`absolute left-0 top-full z-[90] w-full border-b border-neutral-200 bg-white px-6 pb-6 pt-2 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-y-0 opacity-100 visible shadow-[0_10px_20px_rgba(0,0,0,0.1)]" : "-translate-y-4 opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Clean, left-aligned stacked mobile layout */}
          <nav className="flex flex-col text-sm font-bold uppercase tracking-widest text-neutral-900">
            <Link 
              href="/" 
              className="border-b border-neutral-100 py-4 transition-colors hover:text-[#BC2229]" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="border-b border-neutral-100 py-4 transition-colors hover:text-[#BC2229]" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="mt-6 flex w-full items-center justify-center rounded-full bg-neutral-950 py-4 text-xs text-white transition-all hover:bg-[#BC2229] hover:shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Dimmer Overlay */}
      <div 
        className={`fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
