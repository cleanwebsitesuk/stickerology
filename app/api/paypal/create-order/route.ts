import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/paypal";
import { getProducts } from "@/lib/products";

function round(n: number) {
  return Number(n.toFixed(2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const cart = body.cart as { id: string; quantity: number }[];

    if (!cart || cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const products = getProducts();

    const items = cart
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return null;

        const quantity = Math.max(1, Math.min(item.quantity, product.quantity));

        return {
          name: product.title,
          quantity: String(quantity),
          unit_amount: {
            currency_code: "GBP",
            value: product.price.toFixed(2),
          },
          total: round(product.price * quantity),
        };
      })
      .filter(Boolean);

    if (!items.length) {
      return NextResponse.json(
        { error: "No valid items" },
        { status: 400 }
      );
    }

    const subtotal = round(
      items.reduce((sum, i: any) => sum + i.total, 0)
    );

    const shipping = 3.99;
    const total = round(subtotal + shipping);

    const order = await createOrder(total);

    return NextResponse.json({
      id: order.id,
      subtotal,
      shipping,
      total,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
