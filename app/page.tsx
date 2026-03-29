import Link from "next/link";
import { Inter } from "next/font/google";
import { getProducts } from "@/lib/products";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const products = getProducts().slice(0, 4);

  return (
    <main className={`${inter.className} min-h-screen bg-white text-neutral-950`}>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BC2229]/15 bg-[#BC2229]/[0.05] px-4 py-2 text-sm font-medium text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-[#BC2229]" />
              Durable vinyl stickers for everyday use
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-neutral-950 md:text-6xl">
              Vehicle, Bike
              <span className="mt-1 block text-neutral-500">
                and Custom Stickers
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Shop durable sticker designs with a clean finish, clear product
              pages, and a straightforward order flow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]"
              >
                Shop Now
              </Link>
              <Link
                href="/cart"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                View Cart
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Material
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Premium vinyl
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Finish
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Clean professional look
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Dispatch
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Fast order processing
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-100 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-4">
              <div className="rounded-[1.6rem] border border-neutral-200 bg-white p-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {products.slice(0, 4).map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="group overflow-hidden rounded-[1.35rem] border border-neutral-200 bg-neutral-50 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    >
                      <div className="h-40 overflow-hidden border-b border-neutral-200 bg-white">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="line-clamp-2 text-sm font-bold text-neutral-950">
                          {product.title}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#BC2229]">
                          £{product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              Featured
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
              Popular products
            </h2>
            <p className="mt-4 text-neutral-600">
              Product pages with stock, pricing, and quick cart access.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex w-fit items-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229]"
          >
            View All
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="border-b border-neutral-200 bg-neutral-50 p-4">
                <div className="flex h-56 items-center justify-center overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-56 w-full object-cover transition group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#BC2229]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#BC2229]">
                    {product.category}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock"}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-lg font-bold tracking-tight text-neutral-950">
                  {product.title}
                </h3>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-base font-bold text-neutral-950">
                    £{product.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BC2229]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
