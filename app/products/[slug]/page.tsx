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
    <main style={{ padding: "2rem" }}>
      <Link href="/shop">← Back to shop</Link>

      <div style={{ marginTop: "2rem" }}>
        <h1>{product.title}</h1>
        <p><strong>Price:</strong> £{product.price.toFixed(2)}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> {product.quantity}</p>

        <div style={{ marginTop: "2rem" }}>
          <Link
            href={`/checkout?title=${encodeURIComponent(product.title)}&price=${product.price}`}
          >
            Buy now
          </Link>
        </div>
      </div>
    </main>
  );
}
