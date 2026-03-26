import Image from "next/image";

export default function Home() {
  const categories = ["Warning", "Prohibition", "Custom", "Business"];
  const footerSections = [
    {
      title: "Shop",
      links: ["All Stickers", "Custom", "Best Sellers"],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Shipping"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* TOP BAR */}
      <div className="border-b border-gray-200 bg-gray-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-3 text-center text-sm tracking-wide">
          Professional safety signage and custom sticker solutions
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
<div className="relative h-11 w-11">
  <Image
    src="/logo.png" // put your logo in /public
    alt="Stickerology Logo"
    fill
    className="object-contain"
    priority
  />
</div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#featured" className="transition hover:text-black">
              Featured
            </a>
            <a href="#categories" className="transition hover:text-black">
              Categories
            </a>
            <a href="#gallery" className="transition hover:text-black">
              Gallery
            </a>
            <a href="#why-us" className="transition hover:text-black">
              Why Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 md:inline-flex">
              Browse
            </button>
            <button className="inline-flex rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-gray-200">
              Trusted sticker solutions for business, vehicle, and site use
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Professional Safety & Custom Stickers
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              High-quality vinyl stickers produced for practical performance and
              clean presentation. Built for durability, weather resistance, and
              everyday professional use.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-gray-200">
                Shop Now
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-black">
                Browse Categories
              </button>
            </div>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                  Material
                </p>
                <p className="mt-2 font-medium text-white">Premium vinyl</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                  Finish
                </p>
                <p className="mt-2 font-medium text-white">
                  Clean, professional look
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                  Use
                </p>
                <p className="mt-2 font-medium text-white">
                  Indoor & outdoor applications
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="flex h-80 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gray-800 md:h-[30rem]">
                <span className="text-lg text-gray-400">
                  Hero Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Featured Collection
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Featured Stickers
            </h2>
            <p className="mt-4 text-gray-600">
              A polished featured section ready for real product data. All
              placeholders remain intact so the content can be replaced cleanly
              later.
            </p>
          </div>

          <button className="inline-flex w-fit items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-900 hover:text-black">
            View All
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="border-b border-gray-100 bg-gray-50 p-4">
                <div className="flex h-52 items-center justify-center rounded-xl bg-gray-100">
                  <span className="text-gray-400">Image</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Featured
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    Placeholder
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                  Product Placeholder #{i + 1}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Product description placeholder
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900">
                    Price Placeholder
                  </span>
                  <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="bg-gray-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Browse
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-gray-600">
              Clear category entry points for fast navigation and a more refined
              storefront experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-20 items-center justify-center rounded-xl bg-gray-100">
                  <span className="text-gray-400">Icon</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {cat}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Category placeholder
                    </p>
                  </div>
                  <span className="text-gray-300 transition group-hover:text-gray-700">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Visual Showcase
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-gray-600">
            A flexible gallery layout for product close-ups, installation
            examples, packaging, or finished custom work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 transition hover:shadow-lg md:h-56"
            >
              <span className="text-gray-500">Preview</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="bg-gray-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Built for reliability, presentation, and practical use
            </h2>
            <p className="mt-4 text-gray-400">
              A stronger trust section with more structure, better spacing, and
              a premium visual feel.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Durable Materials</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Waterproof, weather-resistant vinyl designed to maintain
                performance and appearance over time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Fast Dispatch</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Streamlined fulfilment focused on quick turnaround and reliable
                delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Custom Orders</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Flexible support for tailored sticker requirements across
                business, vehicle, or project-based needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10 shadow-sm md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Custom Enquiries
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Need Custom Stickers?
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Get in touch for bulk orders, branded applications, or bespoke
              design requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex rounded-full bg-gray-900 px-6 py-3.5 font-semibold text-white transition hover:bg-black">
                Request a Quote
              </button>
              <button className="inline-flex rounded-full border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition hover:border-gray-900 hover:text-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
                S
              </div>
              <div>
                <h4 className="text-lg font-bold tracking-tight">
                  Stickerology
                </h4>
                <p className="text-sm text-gray-500">
                  Premium sticker solutions
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-gray-600">
              Premium sticker solutions for businesses and individuals, presented
              with a cleaner, more professional storefront structure.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3 text-gray-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© Stickerology. All rights reserved.</p>
            <p>Professional safety & custom sticker solutions.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
