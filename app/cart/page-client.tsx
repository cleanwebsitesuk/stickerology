"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function CartPageClient() {
  const { items, subtotal, updateQuantity, removeItem, clearCart, isHydrated } =
    useCart();

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
            Cart
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
            Shopping Cart
          </h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Review items, change quantities, and continue to checkout.
          </p>
        </div>

        {!isHydrated ? (
          <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-10 text-center">
            <p className="text-lg font-semibold text-neutral-900">Loading cart...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-10 text-center">
            <p className="text-lg font-semibold text-neutral-900">Your cart is empty</p>
            <p className="mt-2 text-neutral-600">
              Add products from the shop to continue.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-28 rounded-2xl border border-neutral-200 object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h2 className="text-lg font-bold text-neutral-950">
                            {item.title}
                          </h2>
                          <p className="mt-1 text-sm text-neutral-500">
                            £{item.price.toFixed(2)} each
                          </p>
                          <p className="mt-1 text-sm text-neutral-500">
                            Stock: {item.stock}
                          </p>
                        </div>

                        <p className="text-lg font-extrabold text-neutral-950">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex w-fit items-center overflow-hidden rounded-full border border-neutral-300">
                          <button
                            type="button"
                            onClick={() =>
                              item.quantity === 1
                                ? removeItem(item.id)
                                : updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-4 py-2 text-lg font-semibold text-neutral-700 transition hover:bg-neutral-50"
                          >
                            −
                          </button>

                          <span className="min-w-14 border-x border-neutral-300 px-4 py-2 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-4 py-2 text-lg font-semibold text-neutral-700 transition hover:bg-neutral-50"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-semibold text-neutral-500 transition hover:text-[#BC2229]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-neutral-500 transition hover:text-[#BC2229]"
              >
                Clear cart
              </button>
            </div>

            <aside className="h-fit rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-neutral-950">Order Summary</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-950">
                    £{subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-neutral-950">Calculated at checkout</span>
                </div>

                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-neutral-600">
                      Estimated total
                    </span>
                    <span className="text-2xl font-extrabold text-neutral-950">
                      £{subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]"
              >
                Checkout
              </Link>

              <Link
                href="/shop"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-800 transition hover:border-[#BC2229]/35 hover:text-[#BC2229]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
