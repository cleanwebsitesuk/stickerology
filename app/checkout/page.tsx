import { getProducts } from "@/lib/products";

type Props = {
  searchParams: Promise<{
    id?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const params = await searchParams;

  const products = getProducts();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
            Checkout
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
            Complete Your Order
          </h1>
        </div>

        <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="flex gap-6 border-b border-neutral-200 pb-6">
            <img
              src={product.image}
              className="h-24 w-24 object-cover rounded-xl border"
            />

            <div>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-neutral-500">£{product.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-base font-medium text-neutral-600">Total</span>
            <span className="text-2xl font-extrabold text-neutral-950">
              £{product.price.toFixed(2)}
            </span>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-sm font-medium text-neutral-500">
              PayPal integration next
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
