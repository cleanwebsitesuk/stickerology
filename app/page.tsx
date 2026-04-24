import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen selection:bg-[#BC2229] selection:text-white`}>
      {/* HERO SECTION: Deep Black, Gold Accents, Refined Typography */}
      <section className="bg-neutral-950 relative overflow-hidden border-b-4 border-[#BC2229]">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <span className="h-1.5 w-1.5 bg-[#D4AF37] animate-pulse" />
              The Science of Signage
            </div>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl uppercase">
              Precision Utility
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">
                & Warning Labels
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 font-light md:text-lg">
              Stickerology engineers uncompromising, high-visibility decals built for endurance. From industrial safety compliance to modern technological integrations, we set the standard for structural signage.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center bg-[#BC2229] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
              >
                <span className="absolute -inset-0.5 border border-[#BC2229] opacity-50 group-hover:border-white transition-all"></span>
                Explore Capabilities
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/20 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Micro-metrics / Core Values */}
            <div className="mt-16 grid gap-[1px] sm:grid-cols-3 bg-white/10">
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Durability
                </p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">
                  Weather-Resistant Vinyl
                </p>
              </div>
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Precision
                </p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">
                  High-Contrast Printing
                </p>
              </div>
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Turnaround
                </p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">
                  Rapid Deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION: Blinding White, High Fashion Brutalism */}
      <section className="bg-white px-6 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-neutral-300 pb-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Core Competencies
              </p>
              <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-black md:text-5xl">
                What We Do
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Capability 1: Safety & Compliance */}
            <article className="group relative flex flex-col border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0px_0px_#BC2229]">
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-black text-[#D4AF37]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-tight text-black">
                  Safety & <br /> Compliance
                </h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600">
                  Regulatory-standard warning signs, hazard indicators, and access control stickers. We produce unmistakable, high-contrast visual deterrents engineered to keep environments secure.
                </p>
              </div>
            </article>

            {/* Capability 2: Operational Utility */}
            <article className="group relative flex flex-col border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0px_0px_#BC2229]">
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-black text-[#D4AF37]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-tight text-black">
                  Operational <br /> Utility
                </h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600">
                  Frictionless instruction for complex environments. From refueling directives to machinery operation labels, our utility decals are designed for immediate cognitive recognition.
                </p>
              </div>
            </article>

            {/* Capability 3: Smart Labels & QR */}
            <article className="group relative flex flex-col border border-black bg-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#D4AF37]">
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white text-black">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-tight text-white">
                  Custom QR <br /> Integrations
                </h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-400">
                  Bridge the physical and digital. We generate and print scannable, custom QR code stickers perfect for inventory tracking, menu access, and interactive brand experiences.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION: The Red Block */}
      <section className="bg-[#BC2229] px-6 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
            Require Bespoke Signage?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/90 font-medium">
            From single-run custom orders to massive industrial deployments. We have the technology to print it perfectly.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-black hover:text-[#D4AF37]"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
