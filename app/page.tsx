import Link from "next/link";
import { Inter } from "next/font/google";
import { getProducts } from "@/lib/products";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const products = getProducts().slice(0, 4);
  const categories = ["Warning", "Prohibition", "Custom", "Business"];

  return (
    <main className={`${inter.className} min-h-screen bg-white text-neutral-950`}>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BC2229]/15 bg-[#BC2229]/[0.05] px-4 py-2 text-sm font-medium text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-[#BC2229]" />
              Trusted sticker solutions for business, vehicle, and site use
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-neutral-950 md:text-6xl">
              Professional Safety
              <span className="mt-1 block text-neutral-500">
                & Custom Stickers
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              High-quality vinyl stickers produced for practical performance and
              clean presentation. Built for durability, weather resistance, and
              everyday professional use.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]"
              >
                Shop Now
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Browse Categories
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
                  Clean, professional look
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Use
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Indoor & outdoor applications
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-100 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-4">
              <div className="rounded-[1.6rem] border border-neutral-200 bg-white p-4">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Storefront
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-700">
                      Browse products and order with ease
                    </p>
                  </div>
                  <span className="rounded-full bg-[#BC2229]/10 px-3 py-1 text-xs font-semibold text-[#BC2229]">
                    Live
                  </span>
                </div>

                <div className="flex h-80 items-center justify-center rounded-[1.5rem] border border-dashed border-neutral-300 bg-neutral-50 px-8 text-center md:h-[31rem]">
                  <span className="text-lg font-medium text-neutral-400">
                    Replace this area later with your own brand image, product
                    banner, or workshop photo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              Featured Collection
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
              Featured Stickers
            </h2>
            <p className="mt-4 text-neutral-600">
              A cleaner starting point for a real storefront using your current
              product data.
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
                    Stock: {product.quantity}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-neutral-950">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  High-quality sticker design ready for vehicle or bike use.
                </p>

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

      <section id="categories" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
                Browse
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                Shop by Category
              </h2>
              <p className="mt-4 text-neutral-600">
                This section can be wired to real filtering later.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((cat, index) => (
                <div
                  key={cat}
                  className="group rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BC2229]/20 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#BC2229]/10 bg-white text-base font-extrabold text-[#BC2229]">
                    0{index + 1}
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950">
                        {cat}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        Category section ready for real filters later
                      </p>
                    </div>
                    <span className="mt-1 text-neutral-300 transition group-hover:translate-x-1 group-hover:text-[#BC2229]">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="border-y border-neutral-800 bg-neutral-950 py-20 text-white md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0b6b9]">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                Built for reliability, presentation, and practical use
              </h2>
              <p className="mt-4 leading-7 text-neutral-400">
                A cleaner trust section to help make the site feel more like a
                real store instead of a mockup.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
                <h3 className="text-xl font-bold">Durable Materials</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  Waterproof, weather-resistant vinyl designed to maintain
                  performance and appearance over time.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
                <h3 className="text-xl font-bold">Fast Dispatch</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  Streamlined fulfilment focused on quick turnaround and reliable
                  delivery.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
                <h3 className="text-xl font-bold">Custom Orders</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  Flexible support for tailored sticker requirements across
                  business, vehicle, or project-based needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
