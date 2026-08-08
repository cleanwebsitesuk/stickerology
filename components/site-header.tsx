"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fredoka, Inter } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#wing", label: "The Emotion Wing" },
  { href: "/#packs", label: "The Collections" },
];

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
      <header
        className={`${inter.className} sticky top-0 z-[100] w-full border-b border-white/10 bg-[#0B1030] shadow-[0_8px_24px_rgba(0,0,0,0.35)]`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-[110] flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-full object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
            <span className="flex flex-col leading-none">
              <span className={`${fredoka.className} text-xl font-semibold text-white`}>
                Stickerology
              </span>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.24em] text-[#3FD8F0] sm:block">
                Stick it. Share it. Express it.
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded transition-colors hover:text-[#3FD8F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#packs"
              className="ml-1 rounded-full bg-white p-[4px] transition-transform hover:scale-105 active:translate-y-[2px] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]"
            >
              <span
                className={`${fredoka.className} block rounded-full border-2 border-black bg-[linear-gradient(105deg,#FF2D95,#8B2FE0_55%,#2F9BFF)] px-5 py-2 text-sm font-semibold normal-case tracking-normal text-white`}
              >
                Browse packs
              </span>
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="relative z-[110] flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-7"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-5"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-4"}`} />
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div
          className={`absolute left-0 top-full z-[90] w-full border-b border-white/10 bg-[#0B1030] px-6 pb-6 pt-2 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "visible translate-y-0 opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "pointer-events-none invisible -translate-y-4 opacity-0"
          }`}
        >
          <nav className="flex flex-col text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 transition-colors hover:text-[#3FD8F0]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#packs"
              className="mt-6 rounded-full bg-white p-[4px] text-center active:translate-y-[2px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span
                className={`${fredoka.className} block rounded-full border-2 border-black bg-[linear-gradient(105deg,#FF2D95,#8B2FE0_55%,#2F9BFF)] py-3 text-sm font-semibold normal-case tracking-normal text-white`}
              >
                Browse packs
              </span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Dimmer Overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
