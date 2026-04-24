import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen selection:bg-[#D4AF37] selection:text-black overflow-hidden bg-white`}>
      
      {/* HERO SECTION: Deep Black */}
      <section className="relative bg-neutral-950 flex flex-col justify-center px-6 py-20 lg:px-8 border-b-4 border-[#BC2229]">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-3xl">
            {/* Elegant Pill */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                The Absolute Standard
              </span>
            </div>

            {/* Scaled-down Cinematic Typography */}
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl uppercase text-white">
              Precision Utility
              <span className="mt-2 block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                & Warning Labels
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 font-light tracking-wide md:text-lg">
              Stickerology engineers uncompromising, high-visibility decals built for endurance. From industrial safety compliance to custom technological integrations, we define structural signage.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <span className="relative z-10">Start Your Order</span>
                <div className="absolute inset-0 h-full w-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </div>

            {/* Micro-metrics */}
            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-all hover:border-[#D4AF37]/30">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Durability</p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">Weather & Scratch Resistant</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-all hover:border-[#D4AF37]/30">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Precision</p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">True Spot Colours</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md transition-all hover:border-[#D4AF37]/30">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Safety</p>
                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">100% Solvent-Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPETENCIES SECTION: Clean White */}
      <section className="bg-white px-6 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Core Competencies</p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-neutral-950 md:text-4xl">Our Expertise</h2>
            <div className="mt-6 h-[2px] w-16 bg-[#BC2229]" />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="group relative rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/50">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-950 text-[#D4AF37]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-neutral-950">Safety & Compliance</h3>
              <p className="text-sm leading-relaxed text-neutral-600">Regulatory-standard warning signs, hazard indicators, and access control stickers. We produce unmistakable, high-contrast visual signage engineered to keep environments secure.</p>
            </article>

            {/* Card 2 */}
            <article className="group relative rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/50">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-950 text-[#D4AF37]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-neutral-950">Operational Utility</h3>
              <p className="text-sm leading-relaxed text-neutral-600">Instant clarity for demanding environments. From fuel caps to machinery controls, our utility decals are designed to be understood at a single glance.</p>
            </article>

            {/* Card 3 */}
            <article className="group relative rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-950 text-[#D4AF37]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-neutral-950">Custom QR Integrations</h3>
              <p className="text-sm leading-relaxed text-neutral-600">Bridging the physical and digital. We generate scannable, bespoke QR stickers perfect for instant menu retrieval, Wi-Fi pairing, or any specific digital destination.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS & PROCESS: Deep Black */}
      <section className="bg-neutral-950 px-6 py-20 md:py-28 lg:px-8 border-y border-[#D4AF37]/20 relative overflow-hidden">
        {/* Subtle red glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BC2229]/10 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">The Standard</p>
              <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
                Engineered <br />For Extremes
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-400 font-light">
                Our world-class facilities utilize professional-grade technology to deliver a product that survives where others fail. By utilizing true spot colours and resin-based printing, we ensure absolute perfection in every run.
              </p>

              <div className="mt-10 space-y-6">
                <div className="border-l-2 border-[#D4AF37] pl-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Resin-Based Superiority</h4>
                  <p className="mt-2 text-sm font-light text-neutral-400 leading-relaxed">Highly immune to chemical reactions with excellent scratch resistance, vastly outperforming traditional solvents.</p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">True Spot Colours</h4>
                  <p className="mt-2 text-sm font-light text-neutral-400 leading-relaxed">Achieving perfect brand matching and extreme vibrancy through true spot colour technology rather than standard mixtures.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-8 border-b border-white/10 pb-4">The Process</h3>
              <div className="grid gap-8">
                <div className="flex gap-5 items-start">
                  <span className="text-[#D4AF37] font-bold text-xl tracking-tight">01</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
                    <p className="mt-1 text-sm font-light text-neutral-400">Reach out with your specific dimensions, material requirements, and design concepts.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <span className="text-[#D4AF37] font-bold text-xl tracking-tight">02</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Review</h4>
                    <p className="mt-1 text-sm font-light text-neutral-400">We review your requirements and provide a precise quote to ensure your stickers meet your exact specifications.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <span className="text-[#D4AF37] font-bold text-xl tracking-tight">03</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Deploy</h4>
                    <p className="mt-1 text-sm font-light text-neutral-400">Rapid manufacturing and dispatch of weather-resistant, highly durable final products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION: Velvet Red */}
      <section className="bg-[#BC2229] px-6 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
            Ready to Order?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/90 font-medium">
            Contact us directly to discuss your bespoke requirements, sizing, and pricing.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-neutral-950 transition-all hover:bg-black hover:text-[#D4AF37] hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
