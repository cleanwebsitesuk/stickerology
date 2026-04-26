import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Contact() {
  return (
    <main className={`${inter.className} min-h-screen bg-white selection:bg-[#BC2229] selection:text-white`}>
      
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LEFT COLUMN: Clean, direct copy */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC2229]">
              Get In Touch
            </p>
            <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-neutral-950 md:text-5xl lg:text-6xl">
              Let's Talk <br /> Stickers.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600">
              Have a question, need a quote, or want to discuss a custom run? Drop us a message and our team will get back to you directly. 
            </p>

            <div className="mt-12 space-y-6 border-t border-neutral-100 pt-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Direct Email</h3>
                <a href="mailto:contact@stickerology.com" className="mt-1 block text-lg font-bold text-neutral-950 transition-colors hover:text-[#BC2229]">
                  contact@stickerology.com
                </a>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Manufacturing</h3>
                <p className="mt-1 text-base font-medium text-neutral-950">
                  Designed & Printed in the UK
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Ultra-simple form */}
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10">
              <form className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 transition-all outline-none focus:border-[#BC2229] focus:ring-1 focus:ring-[#BC2229]" 
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 transition-all outline-none focus:border-[#BC2229] focus:ring-1 focus:ring-[#BC2229]" 
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-700">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={6}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 transition-all outline-none focus:border-[#BC2229] focus:ring-1 focus:ring-[#BC2229] resize-none" 
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full rounded-full bg-neutral-950 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#BC2229] hover:shadow-lg"
                  >
                    Send Message
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
