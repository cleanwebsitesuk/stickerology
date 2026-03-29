"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${
        active ? "text-[#BC2229]" : "text-neutral-600 hover:text-[#BC2229]"
      }`}
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const { totalItems, isHydrated } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BC2229] text-sm font-black text-white">
            S
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-neutral-950">
              Stickerology
            </p>
            <p className="text-xs text-neutral-500">
              Vehicle & bike stickers
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/cart">Cart</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229] md:inline-flex"
          >
            Browse Products
          </Link>

          <Link
            href="/cart"
            className="inline-flex items-center rounded-full bg-[#BC2229] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a61d24]"
          >
            Cart
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
              {isHydrated ? totalItems : 0}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
