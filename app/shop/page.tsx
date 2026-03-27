import Link from "next/link";
import { getProducts } from "@/lib/products";

export default function ShopPage() {
  const products = getProducts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Shop</h1>
      <p>{products.length} products found</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
              {product.title}
            </h2>

            <p><strong>Price:</strong> £{product.price.toFixed(2)}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.quantity}</p>

            <div style={{ marginTop: "1rem" }}>
              <Link href={`/products/${product.slug}`}>View product</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
