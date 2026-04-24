import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden`}>
      
      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#BC2229]/10 blur-[150px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-4xl">
            {/* Glassmorphic Pill */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                The Absolute Standard
              </span>
            </div>

            {/* Cinematic Typography */}
            <h1 className="mt-10 text-5xl font-black leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl uppercase">
              <span className="block text-white drop-shadow-2xl">Precision Utility</span>
              <span className="mt-2 block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                & Warning Labels
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-400 font-light tracking-wide md:text-xl">
              Stickerology engineers uncompromising, high-visibility decals built for endurance. From industrial safety compliance to bespoke technological integrations, we define structural signage.
            </p>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                <span className="relative z-10">Initiate Order</span>
                <div className="absolute inset-0 h-full w-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </div>

            {/* Floating Micro-metrics */}
            <div className="mt-24 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all hover:border-[#D4AF37]/30 hover:bg-white/[0.04]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Durability</p>
                <p className="mt-3 text-sm font-bold text-white uppercase tracking-widest">Weather & Scratch Resistant</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all hover:border-[#D4AF37]/30 hover:bg-white/[0.04]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Precision</p>
                <p className="mt-3 text-sm font-bold text-white uppercase tracking-widest">True Spot Colours</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all hover:border-[#D4AF37]/30 hover:bg-white/[0.04]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Safety</p>
                <p className="mt-3 text-sm font-bold text-white uppercase tracking-widest">100% Solvent-Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPETENCIES SECTION */}
      <section className="relative z-10 px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">Core Competencies</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-widest text-white md:text-5xl">Our Expertise</h2>
            <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <article className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 text-[#D4AF37] shadow-inner">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase leading-tight tracking-widest text-white">Safety & Compliance</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">Regulatory-standard warning signs, hazard indicators, and access control stickers. We produce unmistakable, high-contrast visual signage engineered to keep environments secure.</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 text-[#D4AF37] shadow-inner">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase leading-tight tracking-widest text-white">Operational Utility</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">Instant clarity for demanding environments. From fuel caps to machinery controls, our utility decals are designed to be understood at a single glance.</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 text-[#D4AF37] shadow-inner">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase leading-tight tracking-widest text-white">Custom QR Integrations</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">Bridging the physical and digital. We generate scannable, bespoke QR stickers perfect for instant menu retrieval, Wi-Fi pairing, or any verified digital destination.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS & PROCESS */}
      <section className="relative z-10 px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 md:p-20 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC2229]/20 blur-[100px] pointer-events-none" />
          
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 relative z-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">The Standard</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-widest text-white md:text-5xl">
                Engineered <br />For Extremes
              </h2>
              <p className="mt-8 text-base leading-relaxed text-neutral-400 font-light">
                We reject standard CMYK mixtures and cheap solvent printing. Our world-class facilities utilize professional-grade technology to deliver a product that survives where others fail. Absolute perfection in every run.
              </p>

              <div className="mt-12 space-y-8">
                <div className="border-l-2 border-[#D4AF37] pl-6">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Resin-Based Superiority</h4>
                  <p className="mt-2 text-sm font-light text-neutral-400 leading-relaxed">Highly immune to chemical reactions with excellent scratch resistance, vastly outperforming traditional solvents.</p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-6">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">True Spot Colours</h4>
                  <p className="mt-2 text-sm font-light text-neutral-400 leading-relaxed">Achieving perfect brand matching and extreme vibrancy through true spot colour technology.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-black uppercase tracking-widest text-white mb-10 border-b border-white/10 pb-6">The Procurement Process</h3>
              <div className="grid gap-10">
                <div className="group flex gap-6 items-start">
                  <span className="text-[#D4AF37] font-black text-3xl tracking-tighter opacity-50 transition-opacity group-hover:opacity-100">01</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h4>
                    <p className="mt-2 text-sm font-light text-neutral-400">Reach out with your specific dimensions, material requirements, and design concepts.</p>
                  </div>
                </div>
                <div className="group flex gap-6 items-start">
                  <span className="text-[#D4AF37] font-black text-3xl tracking-tighter opacity-50 transition-opacity group-hover:opacity-100">02</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Consult</h4>
                    <p className="mt-2 text-sm font-light text-neutral-400">We advise on resin formulations and spot colour matching to ensure absolute perfection.</p>
                  </div>
                </div>
                <div className="group flex gap-6 items-start">
                  <span className="text-[#D4AF37] font-black text-3xl tracking-tighter opacity-50 transition-opacity group-hover:opacity-100">03</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Deploy</h4>
                    <p className="mt-2 text-sm font-light text-neutral-400">Rapid manufacturing and dispatch of weather-resistant, highly durable final products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative z-10 px-6 py-24 text-center lg:px-8 border-t border-white/5 bg-gradient-to-b from-black to-[#110505]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
             <span className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#BC2229] to-[#BC2229]" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-widest text-white md:text-5xl drop-shadow-[0_0_30px_rgba(188,34,41,0.5)]">
            Ready to Commission?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-neutral-400 font-light tracking-wide">
            Contact us directly to discuss your bespoke requirements, precise sizing, and elite pricing models.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/50 bg-black px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            >
              Contact To Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
