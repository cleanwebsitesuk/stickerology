import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <main className={`${inter.className} min-h-screen bg-white selection:bg-[#BC2229] selection:text-white`}>
      
      {/* HERO SECTION */}
      <section className="px-6 py-20 md:py-32 lg:px-8 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC2229]">
              About Stickerology
            </p>
            <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tight text-neutral-950 md:text-6xl">
              Purpose-Built <br /> Precision.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              We specialize in the engineering and manufacturing of high-endurance, resin-based decals. Operating out of the UK, we supply industries, businesses, and bespoke events with signage designed specifically to survive demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE (Editorial Layout) */}
      <section className="bg-neutral-50 px-6 py-20 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 md:text-4xl">
                The Manufacturing <br /> Standard
              </h2>
              <div className="mt-6 h-1 w-12 bg-[#BC2229]" />
            </div>

            {/* Right Column: Flowing Text & Specs */}
            <div className="space-y-12">
              <div>
                <p className="text-base leading-relaxed text-neutral-600">
                  The standard printing industry relies heavily on cheap solvent inks and diluted CMYK mixtures. While cost-effective, these methods produce stickers that fade under UV light, scratch easily, and degrade when exposed to harsh chemicals or weather. 
                  <br /><br />
                  Stickerology was built to solve this problem. We utilize professional-grade technology and resin-based printing to create a fundamentally different product—one focused entirely on longevity, clarity, and structural integrity.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 pt-8 border-t border-neutral-200">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-950">Resin-Based Durability</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Our decals are highly immune to chemical reactions and feature excellent scratch resistance, making them ideal for industrial machinery, outdoor utility, and high-friction surfaces.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-950">True Spot Colours</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    We achieve perfect brand matching and extreme vibrancy through true spot colour technology, ensuring your warning labels and logos are unmistakable at a glance.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-950">Weather Defiant</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Formulated for rigorous outdoor use. Heavy rain, direct UV exposure, and severe temperature fluctuations will not compromise the integrity of our adhesives or inks.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-950">100% Solvent-Free</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Manufactured using zero solvent inks. Our products are entirely safe, non-toxic, and fully approved for use in educational, domestic, and child-friendly environments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 md:text-4xl">
            Discuss Your Project
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-neutral-600">
            Whether you need a massive industrial deployment or a short custom run, we can manufacture it to your exact specifications.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#BC2229] hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
