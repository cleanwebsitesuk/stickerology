"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo (No invert) */}
        <Link href="/" className="relative z-50 flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Stickerology"
            width={160}
            height={50}
            className="h-auto w-[120px] md:w-[140px] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
          <Link href="/" className="hover:text-[#BC2229] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#BC2229] transition-colors">
            About
          </Link>
          <Link 
            href="/contact" 
            className="rounded-full bg-neutral-950 px-6 py-2.5 text-white transition-all hover:bg-[#D4AF37] hover:text-neutral-950 hover:shadow-lg"
          >
            Order
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="relative z-50 flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block h-[2px] bg-neutral-950 transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-8"}`} />
          <span className={`block h-[2px] bg-neutral-950 transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`block h-[2px] bg-neutral-950 transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-black uppercase tracking-widest text-neutral-950">
          <Link 
            href="/" 
            className="hover:text-[#BC2229] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-[#BC2229] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="mt-4 rounded-full bg-neutral-950 px-10 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-[#D4AF37] hover:text-neutral-950"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Initiate Order
          </Link>
        </nav>
      </div>
    </header>
  );
}
