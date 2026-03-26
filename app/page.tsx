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
    <main className="min-h-screen bg-[#faf8f7] text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Stickerology Logo"
              width={180}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <a href="#featured" className="transition hover:text-[#BC2229]">
              Featured
            </a>
            <a href="#categories" className="transition hover:text-[#BC2229]">
              Categories
            </a>
            <a href="#gallery" className="transition hover:text-[#BC2229]">
              Gallery
            </a>
            <a href="#why-us" className="transition hover:text-[#BC2229]">
              Why Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-[#BC2229]/30 hover:text-[#BC2229] md:inline-flex">
              Browse
            </button>
            <button className="inline-flex rounded-full bg-[#BC2229] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(188,34,41,0.22)] transition hover:scale-[1.02] hover:bg-[#a11c23]">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,34,41,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(188,34,41,0.08),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,#111111_0%,#181818_55%,#faf8f7_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-neutral-200 shadow-lg backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#BC2229]" />
              Trusted sticker solutions for business, vehicle, and site use
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl">
              Professional Safety
              <span className="block text-[#f1c2c4]">& Custom Stickers</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              High-quality vinyl stickers produced for practical performance and
              clean presentation. Built for durability, weather resistance, and
              everyday professional use.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(188,34,41,0.28)] transition hover:bg-[#a11c23]">
                Shop Now
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-white/25 hover:bg-white/10">
                Browse Categories
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  Material
                </p>
                <p className="mt-2 font-semibold text-white">Premium vinyl</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  Finish
                </p>
                <p className="mt-2 font-semibold text-white">
                  Clean, professional look
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  Use
                </p>
                <p className="mt-2 font-semibold text-white">
                  Indoor & outdoor applications
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-[#BC2229]/20 blur-3xl md:block" />
            <div className="absolute -bottom-6 right-0 hidden h-36 w-36 rounded-full bg-[#BC2229]/15 blur-3xl md:block" />

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-black/5 bg-white p-4">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      Showcase
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-700">
                      Hero Image Placeholder
                    </p>
                  </div>
                  <span className="rounded-full bg-[#BC2229]/10 px-3 py-1 text-xs font-semibold text-[#BC2229]">
                    Preview
                  </span>
                </div>

                <div className="flex h-80 items-center justify-center rounded-[1.5rem] border border-dashed border-neutral-300 bg-[linear-gradient(135deg,#fafafa_0%,#f5f5f5_100%)] md:h-[31rem]">
                  <span className="text-lg font-medium text-neutral-400">
                    Hero Image Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section
        id="featured"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC2229]">
              Featured Collection
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Featured Stickers
            </h2>
            <p className="mt-4 text-neutral-600">
              A polished featured section ready for real product data. All
              placeholders remain intact so the content can be replaced cleanly
              later.
            </p>
          </div>

          <button className="inline-flex w-fit items-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-[#BC2229]/40 hover:text-[#BC2229]">
            View All
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]"
            >
              <div className="relative border-b border-neutral-100 bg-[linear-gradient(180deg,#fff_0%,#fbfbfb_100%)] p-4">
                <div className="absolute left-4 top-4 rounded-full bg-[#BC2229] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  New
                </div>
                <div className="flex h-56 items-center justify-center rounded-[1.25rem] border border-neutral-200 bg-neutral-100">
                  <span className="text-neutral-400">Image</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#BC2229]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#BC2229]">
                    Featured
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    Placeholder
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                  Product Placeholder #{i + 1}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Product description placeholder
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-base font-bold text-neutral-900">
                    Price Placeholder
                  </span>
                  <button className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BC2229]">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_60px_rgba(0,0,0,0.05)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC2229]">
                Browse
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Shop by Category
              </h2>
              <p className="mt-4 text-neutral-600">
                Clear category entry points for fast navigation and a more
                refined storefront experience.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((cat, index) => (
                <div
                  key={cat}
                  className="group rounded-[1.5rem] border border-neutral-200 bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfc_100%)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BC2229]/20 hover:shadow-[0_22px_50px_rgba(188,34,41,0.10)]"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#BC2229]/10 text-lg font-black text-[#BC2229]">
                    0{index + 1}
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {cat}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        Category placeholder
                      </p>
                    </div>
                    <span className="mt-1 text-neutral-300 transition group-hover:translate-x-1 group-hover:text-[#BC2229]">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC2229]">
              Visual Showcase
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Gallery
            </h2>
            <p className="mt-4 text-neutral-600">
              A flexible gallery layout for product close-ups, installation
              examples, packaging, or finished custom work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`group flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 transition hover:-translate-y-1 hover:border-[#BC2229]/20 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] ${
                  i % 5 === 0 || i % 5 === 3 ? "md:h-72" : "md:h-56"
                } h-40`}
              >
                <span className="text-neutral-500">Preview</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why-us"
        className="relative overflow-hidden bg-neutral-950 py-20 text-white md:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(188,34,41,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1b1b4]">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Built for reliability, presentation, and practical use
            </h2>
            <p className="mt-4 text-neutral-400">
              A stronger trust section with more structure, better spacing, and
              a premium visual feel.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
              <h3 className="text-xl font-bold">Durable Materials</h3>
              <p className="mt-3 leading-7 text-neutral-400">
                Waterproof, weather-resistant vinyl designed to maintain
                performance and appearance over time.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
              <h3 className="text-xl font-bold">Fast Dispatch</h3>
              <p className="mt-3 leading-7 text-neutral-400">
                Streamlined fulfilment focused on quick turnaround and reliable
                delivery.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
              <h3 className="text-xl font-bold">Custom Orders</h3>
              <p className="mt-3 leading-7 text-neutral-400">
                Flexible support for tailored sticker requirements across
                business, vehicle, or project-based needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-10 shadow-[0_24px_80px_rgba(0,0,0,0.06)] md:p-14">
          <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-[#BC2229]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/4 translate-y-1/4 rounded-full bg-[#BC2229]/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC2229]">
              Custom Enquiries
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Need Custom Stickers?
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Get in touch for bulk orders, branded applications, or bespoke
              design requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(188,34,41,0.22)] transition hover:bg-[#a11c23]">
                Request a Quote
              </button>
              <button className="inline-flex rounded-full border border-neutral-300 px-6 py-3.5 font-semibold text-neutral-700 transition hover:border-[#BC2229]/40 hover:text-[#BC2229]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BC2229] text-sm font-black text-white shadow-[0_10px_30px_rgba(188,34,41,0.22)]">
                S
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight">
                  Stickerology
                </h4>
                <p className="text-sm text-neutral-500">
                  Premium sticker solutions
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-neutral-600">
              Premium sticker solutions for businesses and individuals,
              presented with a cleaner, more professional storefront structure.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3 text-neutral-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-[#BC2229]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/5">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© Stickerology. All rights reserved.</p>
            <p>Professional safety & custom sticker solutions.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
