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
    <main style={{ padding: "2rem" }}>
      <h1>Checkout</h1>
      <p><strong>Product:</strong> {title}</p>
      <p><strong>Total:</strong> £{Number(price).toFixed(2)}</p>

      <p style={{ marginTop: "2rem" }}>PayPal button goes here next.</p>
    </main>
  );
}
