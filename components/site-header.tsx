"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FCFCFC]/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
      {/* Subtle Brushed Champagne Trim at the very top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 border-b border-black/[0.03]">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Stickerology"
            width={160}
            height={50}
            className="h-auto w-[120px] md:w-[140px] object-contain transition-transform duration-500 group-hover:scale-105 opacity-90"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-neutral-800">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
            About
          </Link>
          <Link 
            href="/contact" 
            className="rounded-full border border-neutral-200 bg-white px-7 py-3 text-neutral-900 shadow-sm transition-all hover:border-[#D4AF37]/50 hover:bg-[#FAFAFA] hover:text-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
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
          <span className={`block h-[2px] bg-neutral-800 transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-8"}`} />
          <span className={`block h-[2px] bg-neutral-800 transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`block h-[2px] bg-neutral-800 transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FCFCFC]/95 backdrop-blur-3xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-black uppercase tracking-widest text-neutral-900">
          <Link 
            href="/" 
            className="hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="mt-6 rounded-full bg-neutral-900 px-10 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-[#D4AF37] hover:text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Initiate Order
          </Link>
        </nav>
      </div>
    </header>
  );
}
