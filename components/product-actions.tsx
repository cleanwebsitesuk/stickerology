"use client";

import { useState } from "react";
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

  const handleAddToCart = () => {
    if (outOfStock) return;

    addItem({
      id: product.id,
      title: product.title,
      slug: product.slug,
      price: product.price,
      image: product.image,
      stock: product.quantity,
      quantity,
    });
  };

  const handleBuyNow = () => {
    if (outOfStock) return;

    buyNow({
      id: product.id,
      title: product.title,
      slug: product.slug,
      price: product.price,
      image: product.image,
      stock: product.quantity,
      quantity,
    });

    router.push("/checkout");
  };

  return (
    <div className="mt-8 space-y-5">
      <div>
        <label
          htmlFor="quantity"
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400"
        >
          Quantity
        </label>

        <div className="mt-3 flex w-fit items-center overflow-hidden rounded-full border border-neutral-300">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="px-4 py-2 text-lg font-semibold text-neutral-700 transition hover:bg-neutral-50 disabled:opacity-40"
            disabled={quantity <= 1}
          >
            −
          </button>

          <input
            id="quantity"
            type="number"
            min={1}
            max={product.quantity}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value) || 1;
              setQuantity(Math.max(1, Math.min(value, product.quantity)));
            }}
            className="w-16 border-x border-neutral-300 bg-white px-3 py-2 text-center font-semibold outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setQuantity((current) => Math.min(product.quantity, current + 1))
            }
            className="px-4 py-2 text-lg font-semibold text-neutral-700 transition hover:bg-neutral-50 disabled:opacity-40"
            disabled={quantity >= product.quantity}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={outOfStock}
          className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-800 transition hover:border-[#BC2229]/35 hover:text-[#BC2229] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          disabled={outOfStock}
          className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
