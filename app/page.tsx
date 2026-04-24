import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen selection:bg-[#BC2229] selection:text-white`}>
      {/* HERO SECTION */}
      <section className="bg-neutral-950 relative overflow-hidden border-b-4 border-[#BC2229]">
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
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-[#BC2229] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
              >
                <span className="absolute -inset-0.5 border border-[#BC2229] opacity-50 group-hover:border-white transition-all"></span>
                Initiate Order
              </Link>
            </div>

            {/* Micro-metrics */}
            <div className="mt-16 grid gap-[1px] sm:grid-cols-3 bg-white/10">
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Durability</p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">Weather & Scratch Resistant</p>
              </div>
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Precision</p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">True Spot Colours</p>
              </div>
              <div className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Safety</p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wide">100% Solvent-Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPETENCIES SECTION */}
      <section className="bg-white px-6 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-neutral-300 pb-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Core Competencies</p>
              <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-black md:text-5xl">What We Do</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="group relative flex flex-col border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0px_0px_#BC2229]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-black text-[#D4AF37]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-tight text-black">Safety & Compliance</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">Regulatory-standard warning signs, hazard indicators, and access control stickers. We produce unmistakable, high-contrast visual deterrents engineered to keep environments secure.</p>
            </article>

            <article className="group relative flex flex-col border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0px_0px_#BC2229]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-black text-[#D4AF37]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-tight text-black">Operational Utility</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">Frictionless instruction for complex environments. From refueling directives to machinery operation labels, our utility decals are designed for immediate cognitive recognition.</p>
            </article>

            <article className="group relative flex flex-col border border-black bg-black p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#D4AF37]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white text-black">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-tight text-white">Custom QR Integrations</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-400">Bridge the physical and digital. We generate and print scannable, custom QR code stickers perfect for inventory tracking, machinery logs, and interactive experiences.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS SECTION: The "Under the Hood" Black block */}
      <section className="bg-neutral-950 px-6 py-20 md:py-28 lg:px-8 border-y border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">The Standard</p>
              <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
                Engineered <br />For Extremes
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-400 font-light">
                We reject standard CMYK mixtures and cheap solvent printing. Our world-class facilities utilize professional-grade technology to deliver a product that survives where others fail. Quality you can absolutely depend on.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Resin-Based Superiority</h4>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">Highly immune to chemical reactions with excellent scratch resistance, vastly outperforming traditional solvent-printed stickers.</p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">True Spot Colours</h4>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">Achieving perfect brand matching and extreme vibrancy through true spot colour technology rather than diluted CMYK mixtures.</p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Weather Defiant</h4>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">Formulated for rigorous outdoor utility. Rain, UV exposure, and severe temperature fluctuations will not compromise the integrity of our decals.</p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">100% Child Friendly</h4>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">Manufactured using zero solvent inks. Entirely safe, non-toxic, and approved for use in educational and domestic environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE APPLICATIONS & PROCESS */}
      <section className="bg-neutral-50 px-6 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#BC2229]">Endless Scope</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-black md:text-5xl">
            Bespoke Event & Purpose
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 font-medium">
            Beyond industrial safety, we engineer custom runs for any event, brand activation, or specific operational requirement. If you can define the parameters, we can print it flawlessly.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border border-neutral-200 bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#000000]">
          <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-8 border-b border-neutral-200 pb-4">The Procurement Process</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <span className="text-[#D4AF37] font-black text-2xl">01 //</span>
              <h4 className="mt-2 text-sm font-bold uppercase tracking-wider text-black">Contact</h4>
              <p className="mt-2 text-sm text-neutral-600">Reach out with your specific dimensions, material requirements, and design concepts.</p>
            </div>
            <div>
              <span className="text-[#D4AF37] font-black text-2xl">02 //</span>
              <h4 className="mt-2 text-sm font-bold uppercase tracking-wider text-black">Consult</h4>
              <p className="mt-2 text-sm text-neutral-600">We advise on resin formulations and spot colour matching to ensure absolute perfection.</p>
            </div>
            <div>
              <span className="text-[#D4AF37] font-black text-2xl">03 //</span>
              <h4 className="mt-2 text-sm font-bold uppercase tracking-wider text-black">Deploy</h4>
              <p className="mt-2 text-sm text-neutral-600">Rapid manufacturing and dispatch of weather-resistant, highly durable final products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION: The Red Block */}
      <section className="bg-[#BC2229] px-6 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
            Ready to Commission?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/90 font-medium">
