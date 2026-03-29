"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function CheckoutPageClient() {
  const { items, subtotal, isHydrated } = useCart();

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
            Checkout
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
            Review Your Order
          </h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            This is now connected to your cart. Next we will add customer
            details and full PayPal payment.
          </p>
        </div>

        {!isHydrated ? (
          <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-10 text-center">
            <p className="text-lg font-semibold text-neutral-900">
              Loading checkout...
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-10 text-center">
            <p className="text-lg font-semibold text-neutral-900">
              Your cart is empty
            </p>
            <p className="mt-2 text-neutral-600">
              Add products before continuing to checkout.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-bold text-neutral-950">
                Customer details
              </h2>
              <p className="mt-2 text-neutral-600">
                In the next batch, this section will become a full checkout form.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                  placeholder="Full name"
                  className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#BC2229]"
                />
                <input
                  placeholder="Email address"
                  className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#BC2229]"
                />
                <input
                  placeholder="Phone number"
                  className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#BC2229] sm:col-span-2"
                />
                <input
                  placeholder="Address line 1"
                  className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#BC2229] sm:col-span-2"
                />
                <input
                  placeholder="City"
                  className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#BC2229]"
                />
                <input
                  placeholder="Postcode"
                  className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#BC2229]"
                />
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
                <p className="text-sm font-medium text-neutral-500">
                  PayPal integration goes here in the next batch
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-neutral-950">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 rounded-xl border border-neutral-200 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-neutral-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-neutral-500">
                        Qty {item.quantity} × £{item.price.toFixed(2)}
                      </p>
                    </div>

                    <p className="font-bold text-neutral-950">
                      £{(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-950">
                    £{subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-neutral-950">
                    To be calculated
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-neutral-600">
                    Total
                  </span>
                  <span className="text-2xl font-extrabold text-neutral-950">
                    £{subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
