"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  // Hardcoded to 0 since context is deleted. This keeps the layout intact.
  const count = 0;

  return (
    <header className="border-b border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Stickerology"
            width={160}
            height={50}
            className="h-auto w-[140px] object-contain transition-transform group-hover:scale-105"
            // Note: If your logo is black, you can add 'invert' to the className above so it shows on the dark background
          />
        </Link>

        <nav className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white">
          <Link href="/shop" className="hover:text-[#D4AF37] transition-colors">
            Shop
          </Link>

          <Link href="/cart" className="relative flex items-center hover:text-[#D4AF37] transition-colors">
            Cart
            {count > 0 && (
              <span className="ml-2 bg-[#BC2229] px-2 py-0.5 text-[10px] text-white">
                {count}
              </span>
            )}
          </Link>

          <Link href="/checkout" className="hover:text-[#D4AF37] transition-colors">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
