"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`${montserrat.className} sticky top-0 z-[100] w-full border-b border-neutral-200 bg-white`}>
        {/* Full-width container (w-full) 
            Controlled padding (px-6 to px-16) prevents the "glued to the edge" look 
            Tightened vertical height (py-3) stops it from feeling enormous
        */}
        <div className="flex w-full items-center justify-between px-6 sm:px-10 lg:px-16 py-3 md:py-4">
          
          {/* Logo - Refined scale */}
          <Link href="/" className="relative z-[110] flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={180} 
              height={50}
              priority
              className="h-auto w-[120px] sm:w-[140px] md:w-[180px] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - High-end tracking and weight */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-black">
            <Link href="/" className="transition-colors hover:text-[#BC2229]">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#BC2229]">
              About
            </Link>
            <Link 
              href="/contact" 
              className="ml-2 rounded-full bg-neutral-950 px-7 py-2.5 text-white transition-all hover:bg-[#BC2229] hover:shadow-md"
            >
              Order
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="relative z-[110] flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-7"}`} />
            <span className={`block h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-5"}`} />
            <span className={`block h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-3"}`} />
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div 
          className={`absolute left-0 top-full z-[90] w-full border-b border-neutral-200 bg-white px-6 py-8 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-y-0 opacity-100 visible shadow-2xl" : "-translate-y-4 opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-6 text-center text-sm font-bold uppercase tracking-[0.2em] text-black">
            <Link href="/" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link 
              href="/contact" 
              className="mt-4 rounded-full bg-neutral-950 py-4 text-xs text-white"
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
