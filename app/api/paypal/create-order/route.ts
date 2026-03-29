import { NextResponse } from "next/server";
import { createOrder } from "@/lib/paypal";

export async function POST() {
  try {
    const order = await createOrder(10); // test amount

    return NextResponse.json({
      id: order.id,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
