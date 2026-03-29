import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BC2229] text-sm font-black text-white">
              S
            </div>
            <div>
              <h4 className="text-lg font-extrabold tracking-tight">
                Stickerology
              </h4>
              <p className="text-sm text-neutral-500">
                Premium sticker solutions
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-neutral-600">
            Vehicle and bike sticker products with a cleaner shop experience,
            faster buying flow, and a checkout ready for payment integration.
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
                View Cart
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
            Company
          </h4>
          <ul className="mt-4 space-y-3 text-neutral-600">
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
            Support
          </h4>
          <ul className="mt-4 space-y-3 text-neutral-600">
            <li>Secure checkout coming next</li>
            <li>Order confirmations</li>
            <li>Customer support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© Stickerology. All rights reserved.</p>
          <p>Professional vehicle & bike sticker solutions.</p>
        </div>
      </div>
    </footer>
  );
}
