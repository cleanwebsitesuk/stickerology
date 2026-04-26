import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Contact() {
  return (
    <main className={`${inter.className} min-h-screen bg-neutral-50 selection:bg-[#BC2229] selection:text-white`}>
      
      {/* CINEMATIC HERO SECTION */}
      <section className="relative bg-neutral-950 px-6 pb-40 pt-20 md:pb-48 md:pt-32 lg:px-8 border-b-4 border-[#BC2229] overflow-hidden">
        {/* Ambient Gold/Red Lighting */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BC2229]/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Project Initiation
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            Start Your
            <span className="mt-2 block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
              Custom Order
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 font-light">
            Whether you need a massive industrial deployment or a short bespoke run, drop us the details below and our team will provide a precise quote.
          </p>
        </div>
      </section>

      {/* OVERLAPPING ARCHITECTURAL LAYOUT */}
      <section className="px-6 pb-24 lg:px-8 -mt-20 md:-mt-28 relative z-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">
            
            {/* LEFT: Premium Dark Contact Card */}
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 shadow-2xl md:p-10">
              <h2 className="text-xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-6 mb-8">
                Direct Line
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-5 items-start group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#D4AF37] transition-colors group-hover:bg-[#BC2229] group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</h3>
                    <a href="mailto:contact@stickerology.com" className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[#D4AF37]">
                      contact@stickerology.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#D4AF37] transition-colors group-hover:bg-[#BC2229] group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Manufacturing</h3>
                    <p className="mt-1 text-sm font-medium text-white">
                      Made in the UK
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#D4AF37] transition-colors group-hover:bg-[#BC2229] group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Response Time</h3>
                    <p className="mt-1 text-sm font-medium text-white">
                      Within 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Simple, High-End Form */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl shadow-black/[0.03] md:p-12">
              <form className="space-y-8">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-900">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full border-b-2 border-neutral-200 bg-transparent py-3 text-sm text-neutral-900 outline-none transition-all focus:border-[#BC2229]" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-900">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full border-b-2 border-neutral-200 bg-transparent py-3 text-sm text-neutral-900 outline-none transition-all focus:border-[#BC2229]" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-4 block text-xs font-bold uppercase tracking-widest text-neutral-900">Project Details</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm text-neutral-900 outline-none transition-all focus:border-[#BC2229] focus:bg-white focus:ring-1 focus:ring-[#BC2229] resize-none" 
                    placeholder="Briefly describe what you're looking for (e.g. 500x Safety Warning labels, weather-resistant)..."
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <p className="hidden sm:block text-xs text-neutral-400 font-medium">Secure & confidential brief submission.</p>
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto rounded-full bg-neutral-950 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#BC2229] hover:shadow-[0_0_20px_rgba(188,34,41,0.3)]"
                  >
                    Submit Details
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
