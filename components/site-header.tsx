"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount to ensure scrolling is restored
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Top Navigation Bar - Solid White, highest z-index so the menu slides *under* it */}
        <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between border-b border-neutral-200 bg-white px-6 py-4 lg:px-8">
          
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

        {/* Mobile Dropdown Panel */}
        <div 
          className={`absolute left-0 top-full z-40 w-full border-b border-neutral-200 bg-white px-6 py-6 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-y-0 opacity-100 visible shadow-[0_15px_40px_rgba(0,0,0,0.1)]" : "-translate-y-4 opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col text-sm font-bold uppercase tracking-widest text-neutral-900">
            <Link 
              href="/" 
              className="flex w-full justify-between border-b border-neutral-100 py-4 transition-colors hover:text-[#BC2229]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
              <span className="text-neutral-300">→</span>
            </Link>
            <Link 
              href="/about" 
              className="flex w-full justify-between border-b border-neutral-100 py-4 transition-colors hover:text-[#BC2229]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
              <span className="text-neutral-300">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="mt-6 flex w-full items-center justify-center rounded-full bg-neutral-950 py-4 text-xs text-white transition-all hover:bg-[#BC2229] hover:shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Darken Overlay (Click to close) */}
      <div 
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
