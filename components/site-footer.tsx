import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        
        {/* Brand Column */}
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center group">
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={180}
              height={56}
              className="h-auto w-[140px] md:w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600">
            Delivering high-quality, durable decals for safety, utility, and bespoke applications. Proudly manufactured in the UK with a focus on precision and reliability.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
            Directory
          </h4>
          <ul className="mt-6 space-y-4 text-sm font-bold uppercase tracking-wider text-neutral-600">
            <li>
              <Link href="/" className="transition-colors hover:text-[#BC2229]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-[#BC2229]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-[#BC2229]">
                Order Form
              </Link>
            </li>
          </ul>
        </div>

        {/* Enquiries / Info Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
            Information
          </h4>
          <ul className="mt-6 space-y-4 text-sm tracking-wide text-neutral-600">
            <li>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Corporate & Bespoke</span>
              <Link href="/contact" className="transition-colors font-medium hover:text-[#BC2229]">
                Contact us via order form
              </Link>
            </li>
            <li>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Manufacturing</span>
              <span className="font-medium text-neutral-900">Made in the UK</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs font-semibold text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Stickerology. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BC2229]"></span>
            Precision Utility Labels
          </p>
        </div>
      </div>
    </footer>
  );
}
