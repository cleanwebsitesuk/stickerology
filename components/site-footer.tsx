import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#FCFCFC] border-t border-black/[0.04] relative overflow-hidden">
      
      {/* Ambient Lighting / Texture (This stops the white from hurting the eyes) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/[0.03] blur-[120px] pointer-events-none rounded-full mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#BC2229]/[0.02] blur-[100px] pointer-events-none rounded-full mix-blend-multiply" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        
        {/* Brand Column */}
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center group">
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={180}
              height={56}
              className="h-auto w-[140px] md:w-[160px] object-contain opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <p className="mt-8 text-sm leading-relaxed text-neutral-500 font-light tracking-wide">
            Engineering uncompromising, high-visibility decals built for endurance. We set the standard for structural signage and bespoke custom printing.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            Directory
          </h4>
          <ul className="mt-8 space-y-5 text-sm font-bold uppercase tracking-wider text-neutral-500">
            <li>
              <Link href="/" className="transition-colors hover:text-[#D4AF37]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-[#D4AF37]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-[#D4AF37]">
                Order Form
              </Link>
            </li>
          </ul>
        </div>

        {/* Enquiries / Info Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            Information
          </h4>
          <ul className="mt-8 space-y-6 text-sm font-light tracking-wide text-neutral-500">
            <li>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Corporate & Bespoke</span>
              <Link href="/contact" className="transition-colors font-medium text-neutral-700 hover:text-[#D4AF37]">
                Contact us via order form
              </Link>
            </li>
            <li>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Manufacturing</span>
              <span className="font-medium text-neutral-700">Proudly made in the UK</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-black/[0.04] bg-white/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[11px] font-bold uppercase tracking-widest text-neutral-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Stickerology. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
            Precision Utility Labels
          </p>
        </div>
      </div>
    </footer>
  );
}
