import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229]"
        >
          ← Back to shop
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] border border-neutral-200 bg-white">
              <span className="text-lg font-medium text-neutral-400">
                Product image coming soon
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
              {product.title}
            </h1>

            <p className="mt-5 text-2xl font-bold text-neutral-950">
              £{product.price.toFixed(2)}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    Category
                  </p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900">
                    {product.category}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    Available Quantity
                  </p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900">
                    {product.quantity}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600">
              Premium vinyl sticker designed for a clean finish and everyday
              durability. Suitable for vehicle and bike applications.
            </p>

            <div className="mt-8">
              <Link
                href={`/checkout?title=${encodeURIComponent(product.title)}&price=${product.price}`}
                className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
