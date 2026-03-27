type Props = {
  searchParams: Promise<{
    title?: string;
    price?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const params = await searchParams;
  const title = params.title || "Sticker";
  const price = params.price || "0.00";

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
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Review your item below and continue to payment.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-6 border-b border-neutral-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Product
              </p>
              <h2 className="mt-2 text-2xl font-bold text-neutral-950">
                {title}
              </h2>
            </div>

            <div className="rounded-full bg-[#BC2229]/10 px-4 py-2 text-sm font-semibold text-[#BC2229]">
              Ready for payment
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-base font-medium text-neutral-600">Total</span>
            <span className="text-2xl font-extrabold text-neutral-950">
              £{Number(price).toFixed(2)}
            </span>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-sm font-medium text-neutral-500">
              PayPal button goes here next
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
