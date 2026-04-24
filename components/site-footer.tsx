import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#D4AF37]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        
        {/* Brand Column */}
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center group">
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={180}
              height={56}
              className="h-auto w-[140px] md:w-[160px] object-contain invert transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-neutral-400 font-light">
            Engineering uncompromising, high-visibility decals built for endurance. We set the standard for structural signage and bespoke QR integrations.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Directory
          </h4>
          <ul className="mt-6 space-y-4 text-sm font-bold uppercase tracking-wider text-white">
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

        {/* Enquiries Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Enquiries
          </h4>
          <ul className="mt-6 space-y-4 text-sm font-light tracking-wide text-neutral-400">
            <li>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-1">Corporate & Bespoke</span>
              <a href="mailto:contact@stickerology.com" className="transition-colors hover:text-white">
                contact@stickerology.com
              </a>
            </li>
            <li>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-1">Global Standard</span>
              <span className="text-white">Manufactured in the UK</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-[11px] font-bold uppercase tracking-widest text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Stickerology. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#BC2229]"></span>
            Precision Utility Labels
          </p>
        </div>
      </div>
    </footer>
  );
}
