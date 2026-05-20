import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const proofPoints = [
  "Weather resistant",
  "Scratch resistant",
  "True spot colours",
  "Solvent-free options",
];

const expertise = [
  {
    title: "Safety & Compliance",
    text: "Clear warning signs, hazard labels and access control stickers made for high-visibility environments.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0 3.75h.01M10.29 3.86 2.82 16.5A2 2 0 0 0 4.54 19.5h14.92a2 2 0 0 0 1.72-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
      />
    ),
  },
  {
    title: "Operational Utility",
    text: "Durable decals for machinery, equipment, vehicles, controls and everyday practical business use.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 2.75-8.25 11h6L10.5 21.25l8.75-12h-6L13 2.75Z"
      />
    ),
  },
  {
    title: "Custom QR Integrations",
    text: "Scannable stickers for menus, Wi-Fi access, instructions, asset links and digital destinations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.75 4.75h4.5v4.5h-4.5v-4.5Zm10 0h4.5v4.5h-4.5v-4.5Zm-10 10h4.5v4.5h-4.5v-4.5Zm10 0h1.5m3 0h.5m-5 4.5h.5m3.5-3.5v3.5m-3.5-1.75h3.5"
      />
    ),
  },
];

const process = [
  {
    title: "Contact",
    text: "Send your size, material, quantity and design requirements.",
  },
  {
    title: "Review",
    text: "Your job is checked properly so the quote, finish and production details are clear.",
  },
  {
    title: "Produce",
    text: "Approved work is manufactured, finished and prepared for dispatch.",
  },
];

export default function Home() {
  return (
    <main
      className={`${inter.className} min-h-screen overflow-hidden bg-white text-neutral-950 selection:bg-[#D4AF37] selection:text-black`}
    >
      {/* HERO */}
      <section className="relative bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(212,175,55,0.12),transparent_34%),radial-gradient(circle_at_85%_65%,rgba(188,34,41,0.12),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#BC2229]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37] sm:text-[11px]">
                The Absolute Standard
              </span>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              World-class
              <span className="block text-[#D4AF37]">
                stickers & graphics
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              High-visibility stickers, decals and signage made for clean
              presentation, practical use and long-term durability.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#FCF6BA]"
              >
                Start Your Order
              </Link>

              <Link
                href="#expertise"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                View Expertise
              </Link>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-neutral-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="bg-white px-6 py-18 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
              Core Competencies
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Our Expertise
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-[#BC2229]" />
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Focused production for businesses that need their labels, decals
              and signage to look sharp, read clearly and last properly.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 transition hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/60 sm:p-8"
              >
                <div className="mb-7 flex h-13 w-13 items-center justify-center rounded-2xl bg-neutral-950 text-[#D4AF37]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARD / PROCESS */}
      <section className="relative bg-neutral-950 px-6 py-18 text-white sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,rgba(188,34,41,0.13),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-900" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                The Standard
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-[1] tracking-[-0.045em] text-white sm:text-5xl">
                Engineered
                <span className="block">for extremes</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400">
                Built around durability, visibility and precise finishing, so
                every graphic feels professional from the first glance and keeps
                performing after installation.
              </p>

              <div className="mt-10 space-y-6">
                <div className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    Resin-Based Superiority
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400">
                    Strong resistance, clean presentation and a finish designed
                    to outperform ordinary low-grade stickers.
                  </p>
                </div>

                <div className="border-l-2 border-[#BC2229] pl-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    True Spot Colours
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400">
                    Controlled colour output for sharper brand matching, better
                    visibility and professional consistency.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-8">
              <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-white">
                The Process
              </h3>

              <div className="mt-8 space-y-7">
                {process.map((step, index) => (
                  <div key={step.title} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/35 text-sm font-black text-[#D4AF37]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-7 text-neutral-400">
                  Simple, controlled and focused on getting the details right
                  before anything is produced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#BC2229] px-6 py-16 text-center sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#FCF6BA]">
            Ready when you are
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
            Ready to order?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
            Contact us directly to discuss your bespoke requirements, sizing,
            materials and pricing.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-neutral-950 hover:text-[#D4AF37] sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
