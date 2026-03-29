import Link from "next/link";
import { getProducts } from "@/lib/products";
import ShopAddButton from "@/components/shop-add-button";

export default function ShopPage() {
  const products = getProducts();

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              Stickerology Shop
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Shop Stickers
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              Browse our current collection of vehicle and bike sticker designs.
              Clean, durable, and ready for everyday use.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Available Products
              </p>
              <p className="mt-1 text-lg font-bold text-neutral-950">
                {products.length} items found
              </p>
            </div>

            <Link
              href="/cart"
              className="inline-flex w-fit items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229]"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {products.length === 0 ? (
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-10 text-center">
            <p className="text-lg font-semibold text-neutral-900">
              No products found
            </p>
            <p className="mt-2 text-neutral-600">
              Check your CSV filter or product data.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const outOfStock = product.quantity <= 0;

              return (
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

                      <span
                        className={`text-xs font-medium ${
                          outOfStock ? "text-red-500" : "text-neutral-400"
                        }`}
                      >
                        {outOfStock
                          ? "Out of stock"
                          : `Stock: ${product.quantity}`}
                      </span>
                    </div>

                    <h2 className="line-clamp-2 text-lg font-bold tracking-tight text-neutral-950">
                      {product.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      High-quality sticker design ready for vehicle or bike use.
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-base font-bold text-neutral-950">
                        £{product.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BC2229]"
                      >
                        View Product
                      </Link>

                      <ShopAddButton product={product} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
