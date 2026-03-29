"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

type Props = {
  product: {
    id: string;
    title: string;
    slug: string;
    price: number;
    image: string;
    quantity: number;
  };
};

export default function ProductActions({ product }: Props) {
  const router = useRouter();
  const { addItem, buyNow } = useCart();
  const [quantity, setQuantity] = useState(1);

  const outOfStock = product.quantity <= 0;

  const stockLabel = useMemo(() => {
    if (outOfStock) return "Out of stock";
    if (product.quantity <= 3) return `Only ${product.quantity} left`;
    return `${product.quantity} in stock`;
  }, [outOfStock, product.quantity]);

  const clampedQuantity = Math.max(1, Math.min(quantity, product.quantity || 1));

  const addPayload = {
    id: product.id,
    title: product.title,
    slug: product.slug,
    price: product.price,
    image: product.image,
    stock: product.quantity,
    quantity: clampedQuantity,
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Quantity
            </p>

            <div className="mt-3 flex w-fit items-center overflow-hidden rounded-full border border-neutral-300 bg-white">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="px-4 py-2 text-lg font-semibold text-neutral-700 transition hover:bg-neutral-50 disabled:opacity-40"
                disabled={clampedQuantity <= 1 || outOfStock}
              >
                −
              </button>

              <input
                type="number"
                min={1}
                max={product.quantity}
                value={clampedQuantity}
                onChange={(e) => {
                  const value = Number(e.target.value) || 1;
                  setQuantity(Math.max(1, Math.min(value, product.quantity || 1)));
                }}
                disabled={outOfStock}
                className="w-16 border-x border-neutral-300 bg-white px-3 py-2 text-center font-semibold outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.min(product.quantity, current + 1))
                }
                className="px-4 py-2 text-lg font-semibold text-neutral-700 transition hover:bg-neutral-50 disabled:opacity-40"
                disabled={clampedQuantity >= product.quantity || outOfStock}
              >
                +
              </button>
            </div>
          </div>

          <div className="text-sm font-semibold">
            <span
              className={
                outOfStock
                  ? "text-red-500"
                  : product.quantity <= 3
                  ? "text-amber-600"
                  : "text-emerald-600"
              }
            >
              {stockLabel}
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => addItem(addPayload)}
            disabled={outOfStock}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-800 transition hover:border-[#BC2229]/35 hover:text-[#BC2229] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add to Cart
          </button>

          <button
            type="button"
            onClick={() => {
              buyNow(addPayload);
              router.push("/checkout");
            }}
            disabled={outOfStock}
            className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
