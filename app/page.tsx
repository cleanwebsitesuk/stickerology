export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Safety & Custom Stickers
            </h1>
            <p className="mt-4 text-gray-300">
              High-quality vinyl stickers for businesses, vehicles, and personal use.
              Durable, weatherproof, and made to last.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-white text-black px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
                Shop Now
              </button>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Browse Categories
              </button>
            </div>
          </div>

          <div className="bg-gray-800 h-64 md:h-80 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Hero Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-8">Featured Stickers</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="bg-gray-100 h-40 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              <h3 className="font-medium">Safety Sticker #{i + 1}</h3>
              <p className="text-sm text-gray-500 mt-1">
                High-quality vinyl sticker
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-semibold">£4.99</span>
                <button className="text-sm bg-black text-white px-3 py-1 rounded">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Warning", "Prohibition", "Custom", "Business"].map((cat) => (
              <div
                key={cat}
                className="bg-white border rounded-xl p-6 text-center hover:shadow-md cursor-pointer"
              >
                <div className="h-20 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Icon</span>
                </div>
                <h3 className="font-medium">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-8">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-32 md:h-40 rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-500">Preview</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST / WHY US */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg">Durable Materials</h3>
            <p className="text-gray-400 mt-2">
              Waterproof, weather-resistant vinyl for long-term use.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Fast Dispatch</h3>
            <p className="text-gray-400 mt-2">
              Quick turnaround and reliable delivery.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Custom Orders</h3>
            <p className="text-gray-400 mt-2">
              Tailored designs for your business or project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Need Custom Stickers?
        </h2>
        <p className="text-gray-600 mt-4">
          Get in touch for bulk orders or custom designs.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Request a Quote
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Stickerology</h4>
            <p className="text-gray-500">
              Premium sticker solutions for businesses and individuals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <ul className="space-y-1 text-gray-500">
              <li>All Stickers</li>
              <li>Custom</li>
              <li>Best Sellers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Shipping</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-gray-500">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
