import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen selection:bg-[#BC2229] selection:text-white`}>
      {/* HERO SECTION: Deep Black, Gold Accents, High-Impact Typography */}
      <section className="bg-neutral-950 relative overflow-hidden border-b-4 border-[#BC2229]">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <span className="h-1.5 w-1.5 bg-[#D4AF37] animate-pulse" />
              The Science of Signage
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tighter text-white md:text-8xl uppercase">
              Precision Utility
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3]">
                & Warning Labels
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-400 font-light md:text-xl">
              Stickerology engineers uncompromising, high-visibility decals built for endurance. From industrial safety compliance to modern technological integrations, we set the standard for structural signage.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center bg-[#BC2229] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
              >
                <span className="absolute -inset-0.5 border border-[#BC2229] opacity-50 group-hover:border-white transition-all"></span>
                Explore Capabilities
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Micro-metrics / Core Values */}
            <div className="mt-20 grid gap-1 sm:grid-cols-3 bg-white/10 p-[1px]">
              <div className="bg-neutral-950 p-8 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Durability
                </p>
                <p className="mt-3 text-sm font-bold text-white uppercase tracking-wide">
                  Weather-Resistant Vinyl
                </p>
              </div>
              <div className="bg-neutral-950 p-8 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Precision
                </p>
                <p className="mt-3 text-sm font-bold text-white uppercase tracking-wide">
                  High-Contrast Printing
                </p>
              </div>
              <div className="bg-neutral-950 p-8 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Turnaround
                </p>
                <p className="mt-3 text-sm font-bold text-white uppercase tracking-wide">
                  Rapid Deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION: Blinding White, High Fashion Brutalism */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-2 border-black pb-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                Core Competencies
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-black md:text-6xl">
                What We Do
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Capability 1: Safety & Compliance */}
            <article className="group relative flex flex-col border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-[8px_8px_0px_0px_#BC2229]">
              <div className="flex flex-1 flex-col p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-black text-[#D4AF37]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-black">
                  Safety & <br /> Compliance
                </h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600">
                  Regulatory-standard warning signs, hazard indicators, and access control stickers. We produce unmistakable, high-contrast visual deterrents and instructional notices engineered to keep environments secure and compliant.
                </p>
              </div>
            </article>

            {/* Capability 2: Operational Utility */}
            <article className="group relative flex flex-col border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-[8px_8px_0px_0px_#BC2229]">
              <div className="flex flex-1 flex-col p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-black text-[#D4AF37]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-black">
                  Operational <br /> Utility
                </h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-600">
                  Frictionless instruction for complex environments. From refueling directives to machinery operation labels, our utility decals are designed for immediate cognitive recognition, reducing errors and streamlining workflows.
                </p>
              </div>
            </article>

            {/* Capability 3: Smart Labels & QR */}
            <article className="group relative flex flex-col border border-black bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#D4AF37]">
              <div className="flex flex-1 flex-col p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-white text-black">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-white">
                  Custom QR <br /> Integrations
                </h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-400">
                  Bridge the physical and digital. We generate and print scannable, custom QR code stickers perfect for inventory tracking, menu access, dynamic instructional videos, and interactive brand experiences. Flawless readability guaranteed.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION: The Red Block */}
      <section className="bg-[#BC2229] px-6 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
            Require Bespoke Signage?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/80 font-medium">
            From single-run custom orders to massive industrial deployments. We have the technology to print it perfectly.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-black hover:text-[#D4AF37]"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
