import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={180}
              height={56}
              className="h-auto w-[160px] object-contain"
            />
          </Link>

          <p className="mt-5 leading-7 text-neutral-600">
            High-quality sticker products for vehicle, bike, and custom
            applications with a cleaner storefront and simpler buying flow.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
            Shop
          </h4>
          <ul className="mt-4 space-y-3 text-neutral-600">
            <li>
              <Link href="/shop" className="transition hover:text-[#BC2229]">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="transition hover:text-[#BC2229]">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="transition hover:text-[#BC2229]">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
            Information
          </h4>
          <ul className="mt-4 space-y-3 text-neutral-600">
            <li>Delivery</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
            Orders
          </h4>
          <ul className="mt-4 space-y-3 text-neutral-600">
            <li>Secure payment</li>
            <li>Order confirmation</li>
            <li>Customer support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© Stickerology. All rights reserved.</p>
          <p>Vehicle, bike, and custom sticker products.</p>
        </div>
      </div>
    </footer>
  );
}
