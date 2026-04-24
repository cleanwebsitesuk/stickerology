import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Dummy data to replace the deleted getProducts() function
const dummyProducts = [
  { id: 1, slug: "phantom-black-decal", image: "https://via.placeholder.com/400x400/000000/D4AF37?text=PHANTOM", title: "Phantom Black Decal", price: 24.99, category: "Vinyl", quantity: 50 },
  { id: 2, slug: "gold-foil-crest", image: "https://via.placeholder.com/400x400/D4AF37/000000?text=CREST", title: "Gold Foil Crest", price: 34.50, category: "Premium", quantity: 12 },
  { id: 3, slug: "crimson-edge-stripe", image: "https://via.placeholder.com/400x400/BC2229/FFFFFF?text=STRIPE", title: "Crimson Edge Stripe", price: 18.00, category: "Detailing", quantity: 105 },
  { id: 4, slug: "matte-carbon-wrap", image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=CARBON", title: "Matte Carbon Wrap", price: 89.99, category: "Wrap", quantity: 0 },
];

export default function Home() {
  const products = dummyProducts.slice(0, 4);

  return (
    <main className={`${inter.className} min-h-screen selection:bg-[#BC2229] selection:text-white`}>
      {/* HERO SECTION: Deep Black, Gold Accents, Dramatic Vibe */}
      <section className="bg-neutral-950 relative overflow-hidden border-b-4 border-[#BC2229]">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <span className="h-1.5 w-1.5 bg-[#D4AF37] animate-pulse" />
              Premium Grade Vinyl
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.1] tracking-tighter text-white md:text-7xl uppercase">
              Vehicle, Bike
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">
                & Custom Decals
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400 font-light">
              Uncompromising durability meets flawless precision. Shop our collection of high-grade, structurally absolute sticker designs.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Link href="/shop" className="group relative inline-flex items-center justify-center bg-[#BC2229] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black">
                <span className="absolute -inset-0.5 border border-[#BC2229] opacity-50 group-hover:border-white transition-all"></span>
                Shop Collection
              </Link>
              <Link href="/cart" className="inline-flex items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]">
                View Cart
              </Link>
            </div>

            <div className="mt-16 grid gap-1 sm:grid-cols-3 bg-white/10 p-[1px]">
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Material</p>
                <p className="mt-3 text-sm font-medium text-white uppercase tracking-wide">Architectural Vinyl</p>
              </div>
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Finish</p>
                <p className="mt-3 text-sm font-medium text-white uppercase tracking-wide">Matte & Gloss</p>
              </div>
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Dispatch</p>
                <p className="mt-3 text-sm font-medium text-white uppercase tracking-wide">Priority Access</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-6 sm:grid-cols-2">
              {products.slice(0, 4).map((product, index) => (
                <Link key={product.id} href={`/products/${product.slug}`} className={`group relative overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] ${index % 2 === 1 ? "sm:mt-12" : ""}`}>
                  <div className="h-48 overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-110 drop-shadow-xl" />
                  </div>
                  <div className="border-t border-white/5 p-5">
                    <p className="line-clamp-1 text-sm font-bold uppercase tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">{product.title}</p>
                    <p className="mt-2 text-sm font-black text-[#BC2229]">£{product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOP SECTION: Blinding White, High Fashion Brutalism */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-2 border-black pb-8">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Featured Arsenal</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-black md:text-6xl">Popular Products</h2>
            </div>
            <Link href="/shop" className="inline-flex w-fit items-center border border-black bg-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-black hover:text-[#D4AF37]">
              View Full Index
            </Link>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="group relative flex flex-col border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[8px_8px_0px_0px_#BC2229]">
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-neutral-50 p-8 border-b border-neutral-200 group-hover:border-black transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{product.category}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{product.quantity > 0 ? `QTY: ${product.quantity}` : "UNAVAILABLE"}</span>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-black uppercase leading-tight tracking-tight text-black">{product.title}</h3>
                  <div className="mt-auto pt-8 flex items-center justify-between">
                    <span className="text-2xl font-black text-[#BC2229]">£{product.price.toFixed(2)}</span>
                  </div>
                </div>
                <Link href={`/products/${product.slug}`} className="w-full bg-neutral-100 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-black transition-all group-hover:bg-black group-hover:text-white">
                  Inspect Item
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
