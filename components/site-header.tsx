"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
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
        {/* Container is now w-full with horizontal padding instead of max-width */}
        <div className="flex w-full items-center justify-between px-6 py-6 lg:px-12">
          
          {/* Logo - Large & Authoritative */}
          <Link href="/" className="relative z-[110] flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={260} 
              height={80}
              priority
              className="h-auto w-[160px] sm:w-[200px] md:w-[240px] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-[14px] font-bold uppercase tracking-[0.25em] text-black">
            <Link href="/" className="transition-colors hover:text-[#BC2229]">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#BC2229]">
              About
            </Link>
            <Link 
              href="/contact" 
              className="ml-4 rounded-full bg-neutral-950 px-10 py-3.5 text-white transition-all hover:bg-[#BC2229] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
            >
              Order
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="relative z-[110] flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-7 translate-y-[8px] rotate-45" : "w-8"}`} />
            <span className={`block h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
            <span className={`block h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-7 -translate-y-[8px] -rotate-45" : "w-4"}`} />
          </button>
        </div>

        {/* Mobile Dropdown Drawer (Slides under the header) */}
        <div 
          className={`absolute left-0 top-full z-[90] w-full border-b border-neutral-200 bg-white px-6 py-8 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-y-0 opacity-100 visible shadow-2xl" : "-translate-y-4 opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-6 text-center text-lg font-bold uppercase tracking-widest text-black">
            <Link href="/" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link 
              href="/contact" 
              className="mt-4 rounded-full bg-neutral-950 py-4 text-sm text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Click-to-Close Dimmer Overlay */}
      <div 
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
