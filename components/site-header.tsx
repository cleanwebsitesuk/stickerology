"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";

export default function SiteHeader() {
  const { items } = useCart();

  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Stickerology"
            width={160}
            height={50}
            className="h-auto w-[140px] object-contain"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-semibold text-neutral-700">
          <Link href="/shop" className="hover:text-[#BC2229] transition">
            Shop
          </Link>

          <Link href="/cart" className="relative hover:text-[#BC2229] transition">
            Cart
            {count > 0 && (
              <span className="ml-1 rounded-full bg-[#BC2229] px-2 py-0.5 text-xs text-white">
                {count}
              </span>
            )}
          </Link>

          <Link href="/checkout" className="hover:text-[#BC2229] transition">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
