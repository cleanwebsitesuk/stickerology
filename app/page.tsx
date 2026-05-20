import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const capabilities = [
  {
    number: "01",
    title: "Safety & Compliance",
    text: "High-contrast warning signs, access labels and regulatory graphics designed for instant recognition in demanding environments.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0 3.75h.01M10.29 3.86 2.82 16.5A2 2 0 0 0 4.54 19.5h14.92a2 2 0 0 0 1.72-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
      />
    ),
  },
  {
    number: "02",
    title: "Operational Decals",
    text: "Durable, practical graphics for machinery, vehicles, controls, panels and equipment where clarity matters every day.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 2.75-8.25 11h6L10.5 21.25l8.75-12h-6L13 2.75Z"
      />
    ),
  },
  {
    number: "03",
    title: "QR & Digital Labels",
    text: "Scannable stickers for menus, Wi-Fi access, instructions, asset links and digital destinations built into physical spaces.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.75 4.75h4.5v4.5h-4.5v-4.5Zm10 0h4.5v4.5h-4.5v-4.5Zm-10 10h4.5v4.5h-4.5v-4.5Zm10 0h1.5m3 0h.5m-5 4.5h.5m3.5-3.5v3.5m-3.5-1.75h3.5M12 5.5v.01M12 9v.01M12 12.5v.01M15.5 12.5v.01M19 12.5v.01"
      />
    ),
  },
];

const proofPoints = [
  "Weather resistant",
  "Scratch resistant",
  "True spot colours",
  "Solvent-free options",
];

const process = [
  {
    number: "01",
    title: "Contact",
    text: "Send dimensions, use case, material needs and any existing artwork or design direction.",
  },
  {
    number: "02",
    title: "Review",
    text: "Your requirements are checked properly so the finish, durability and quote make sense before production.",
  },
  {
    number: "03",
    title: "Produce",
    text: "Approved graphics move into manufacturing with durable materials, clean finishing and careful dispatch.",
  },
];

export default function Home() {
  return (
    <main
      className={`${inter.className} min-h-screen overflow-hidden bg-white text-neutral-950 selection:bg-[#D4AF37] selection:text-black`}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center">
            <div className="rounded-xl border border-neutral-200 bg-white p-1.5 shadow-sm transition group-hover:border-neutral-300">
              <img
                src="/logo.png"
                alt="Stickerology"
                className="h-10 w-auto sm:h-11"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-950 transition hover:text-[#BC2229]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-950 transition hover:text-[#BC2229]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-neutral-950 px-7 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-sm transition hover:bg-[#BC2229]"
            >
              Order
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-[#BC2229] md:hidden"
          >
            Order
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate bg-neutral-950 px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Background system */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.14),transparent_34%),radial-gradient(circle_at_85%_55%,rgba(188,34,41,0.15),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05)_0.5px,transparent_0.5px)] bg-[length:auto,auto,34px_34px]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.85)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37] sm:text-[11px]">
                  The Absolute Standard
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Precision
                <span className="block text-[#D4AF37]">stickers</span>
                <span className="block">& graphics.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                High-visibility stickers, decals and signage engineered for
                clean presentation, practical use and long-term durability.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-black shadow-[0_18px_50px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#FCF6BA]"
                >
                  Start Your Order
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                >
                  View Capabilities
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="bg-neutral-950/80 px-4 py-4 text-center backdrop-blur-xl"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-200">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract specification panel, no sticker imagery */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D4AF37]">
                      Production Standard
                    </p>
                    <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.03em] text-white">
                      Built for visibility
                    </h2>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#BC2229]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          Finish
                        </p>
                        <p className="mt-2 text-lg font-black uppercase text-white">
                          Clean, sharp, durable
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Colour
                      </p>
                      <p className="mt-2 text-xl font-black text-[#D4AF37]">
                        Spot
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Use
                      </p>
                      <p className="mt-2 text-xl font-black text-white">
                        Indoor / Outdoor
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Durability profile
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                        Checked
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[92%] rounded-full bg-[#D4AF37]" />
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[86%] rounded-full bg-[#BC2229]" />
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[78%] rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#BC2229]/40 bg-[#BC2229]/10 px-5 py-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white">
                    Designed to be clear at a glance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="relative bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,10,10,0.035)_0.5px,transparent_0.5px)] bg-[length:34px_34px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Core Competencies
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Our Expertise
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#BC2229]" />
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Focused graphic production for businesses that need their labels,
              decals and signage to look sharp, read instantly and last.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-[0_20px_70px_rgba(10,10,10,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-[0_28px_90px_rgba(10,10,10,0.1)] sm:p-8"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#BC2229] via-[#D4AF37] to-transparent opacity-80" />

                <div className="mb-8 flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-[#D4AF37] shadow-lg shadow-neutral-950/10">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      {item.icon}
                    </svg>
                  </div>

                  <span className="text-5xl font-black leading-none tracking-[-0.08em] text-neutral-100 transition group-hover:text-[#D4AF37]/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARD / PROCESS */}
      <section className="relative isolate bg-neutral-950 px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_25%,rgba(188,34,41,0.2),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(212,175,55,0.1),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.045)_0.5px,transparent_0.5px)] bg-[length:auto,auto,36px_36px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D4AF37]">
                The Standard
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Engineered
                <span className="block">for extremes.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400">
                A sharper standard for graphics that need to stay legible,
                professional and dependable beyond the first impression.
              </p>

              <div className="mt-10 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                  <div className="flex gap-4">
                    <div className="mt-1 h-12 w-1 rounded-full bg-[#D4AF37]" />
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                        Resin-Based Superiority
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        Excellent resistance, cleaner presentation and a finish
                        designed to outperform ordinary low-grade decals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                  <div className="flex gap-4">
                    <div className="mt-1 h-12 w-1 rounded-full bg-[#BC2229]" />
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                        True Spot Colours
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        More controlled colour output for stronger brand
                        matching, visibility and professional consistency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D4AF37]">
                    Production Flow
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-3xl">
                    The Process
                  </h3>
                </div>
                <p className="max-w-xs text-sm leading-6 text-neutral-500">
                  Straightforward, controlled and built around getting the
                  details right before anything is made.
                </p>
              </div>

              <div className="mt-8 grid gap-5">
                {process.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative rounded-2xl border border-white/10 bg-neutral-950/70 p-5"
                  >
                    {index !== process.length - 1 && (
                      <div className="absolute left-[2.15rem] top-[4.6rem] hidden h-8 w-px bg-white/10 sm:block" />
                    )}

                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-sm font-black text-[#D4AF37]">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.16em] text-white">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-neutral-400">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#BC2229] px-6 py-12 text-center shadow-[0_30px_100px_rgba(188,34,41,0.24)] sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.2),transparent_36%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0.5px,transparent_0.5px)] bg-[length:32px_32px] opacity-40" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#FCF6BA]">
                Ready when you are
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
                Ready to order?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                Contact us directly to discuss your bespoke requirements,
                sizing, materials and pricing.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-xs font-black uppercase tracking-[0.22em] text-neutral-950 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-[#D4AF37] sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
