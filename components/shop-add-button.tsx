"use client";

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

export default function ShopAddButton({ product }: Props) {
  const { addItem } = useCart();

  const outOfStock = product.quantity <= 0;

  return (
    <button
      type="button"
      disabled={outOfStock}
      onClick={() =>
        addItem({
          id: product.id,
          title: product.title,
          slug: product.slug,
          price: product.price,
          image: product.image,
          stock: product.quantity,
          quantity: 1,
        })
      }
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-[#BC2229]/35 hover:text-[#BC2229] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {outOfStock ? "Out of Stock" : "Add to Cart"}
    </button>
  );
}
