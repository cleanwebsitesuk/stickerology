import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
    <main className={`${inter.className} min-h-screen bg-white text-neutral-950`}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
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
            <button className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229] md:inline-flex">
              Browse
            </button>
            <button className="inline-flex rounded-full bg-[#BC2229] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a61d24]">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BC2229]/15 bg-[#BC2229]/[0.05] px-4 py-2 text-sm font-medium text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-[#BC2229]" />
              Trusted sticker solutions for business, vehicle, and site use
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-neutral-950 md:text-6xl">
              Professional Safety
              <span className="mt-1 block text-neutral-500">& Custom Stickers</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              High-quality vinyl stickers produced for practical performance and
              clean presentation. Built for durability, weather resistance, and
              everyday professional use.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]">
                Shop Now
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50">
                Browse Categories
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Material
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Premium vinyl
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Finish
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Clean, professional look
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Use
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Indoor & outdoor applications
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-100 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-4">
              <div className="rounded-[1.6rem] border border-neutral-200 bg-white p-4">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
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

                <div className="flex h-80 items-center justify-center rounded-[1.5rem] border border-dashed border-neutral-300 bg-neutral-50 md:h-[31rem]">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              Featured Collection
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
              Featured Stickers
            </h2>
            <p className="mt-4 text-neutral-600">
              A polished featured section ready for real product data. All
              placeholders remain intact so the content can be replaced cleanly
              later.
            </p>
          </div>

          <button className="inline-flex w-fit items-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229]">
            View All
          </button>
        </div>

        <div className="mt-12">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <article
                key={i}
                className="group min-w-[85%] snap-start overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:min-w-[48%] xl:min-w-[calc(25%-18px)]"
              >
                <div className="border-b border-neutral-200 bg-neutral-50 p-4">
                  <div className="flex h-56 items-center justify-center rounded-[1.25rem] border border-neutral-200 bg-white">
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

                  <h3 className="text-lg font-bold tracking-tight text-neutral-950">
                    Product Placeholder #{i + 1}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Product description placeholder
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-base font-bold text-neutral-950">
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

          <div className="mt-6 hidden items-center justify-center gap-2 xl:flex">
            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 rounded-full ${
                  i === 0 ? "w-8 bg-[#BC2229]" : "w-2.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
                Browse
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
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
                  className="group rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BC2229]/20 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#BC2229]/10 bg-white text-base font-extrabold text-[#BC2229]">
                    0{index + 1}
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950">{cat}</h3>
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
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
            Visual Showcase
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
            Gallery
          </h2>
          <p className="mt-4 text-neutral-600">
            A flexible gallery layout for product close-ups, installation
            examples, packaging, or finished custom work.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <div className="flex h-56 items-center justify-center overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:col-span-5 md:h-[420px] md:row-span-2">
            <span className="text-neutral-500">Preview</span>
          </div>

          <div className="flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:col-span-4 md:h-[202px]">
            <span className="text-neutral-500">Preview</span>
          </div>

          <div className="flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:col-span-3 md:h-[202px]">
            <span className="text-neutral-500">Preview</span>
          </div>

          <div className="flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:col-span-3 md:h-[202px]">
            <span className="text-neutral-500">Preview</span>
          </div>

          <div className="flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:col-span-4 md:h-[202px]">
            <span className="text-neutral-500">Preview</span>
          </div>

          <div className="flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:col-span-5 md:h-[202px]">
            <span className="text-neutral-500">Preview</span>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why-us"
        className="border-y border-neutral-800 bg-neutral-950 py-20 text-white md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0b6b9]">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                Built for reliability, presentation, and practical use
              </h2>
              <p className="mt-4 leading-7 text-neutral-400">
                A stronger trust section with more structure, better spacing, and
                a premium visual feel.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
                <h3 className="text-xl font-bold">Durable Materials</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  Waterproof, weather-resistant vinyl designed to maintain
                  performance and appearance over time.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
                <h3 className="text-xl font-bold">Fast Dispatch</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  Streamlined fulfilment focused on quick turnaround and reliable
                  delivery.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#BC2229]" />
                <h3 className="text-xl font-bold">Custom Orders</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  Flexible support for tailored sticker requirements across
                  business, vehicle, or project-based needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BC2229]">
              Custom Enquiries
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
              Need Custom Stickers?
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Get in touch for bulk orders, branded applications, or bespoke
              design requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex rounded-full bg-[#BC2229] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61d24]">
                Request a Quote
              </button>
              <button className="inline-flex rounded-full border border-neutral-300 px-6 py-3.5 font-semibold text-neutral-700 transition hover:border-[#BC2229]/35 hover:text-[#BC2229]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BC2229] text-sm font-black text-white">
                S
              </div>
              <div>
                <h4 className="text-lg font-extrabold tracking-tight">
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

        <div className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© Stickerology. All rights reserved.</p>
            <p>Professional safety & custom sticker solutions.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
