import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductActions from "@/components/product-actions";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const outOfStock = product.quantity <= 0;

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
            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-bold text-neutral-950">
                £{product.price.toFixed(2)}
              </p>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  outOfStock
                    ? "bg-red-50 text-red-600"
                    : product.quantity <= 3
                    ? "bg-amber-50 text-amber-700"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {outOfStock
                  ? "Out of stock"
                  : product.quantity <= 3
                  ? `Only ${product.quantity} left`
                  : `${product.quantity} in stock`}
              </span>
            </div>

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
              High-quality vinyl sticker designed for a clean finish and durable
              everyday use on vehicles, bikes, and similar applications.
            </p>

            <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-neutral-200 bg-white p-5 text-sm text-neutral-600 sm:grid-cols-2">
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="font-semibold text-neutral-900">Material</p>
                <p className="mt-1">Durable vinyl</p>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="font-semibold text-neutral-900">Application</p>
                <p className="mt-1">Vehicle and bike use</p>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="font-semibold text-neutral-900">Finish</p>
                <p className="mt-1">Clean and professional</p>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="font-semibold text-neutral-900">Ordering</p>
                <p className="mt-1">Cart and checkout ready</p>
              </div>
            </div>

            <ProductActions product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}
