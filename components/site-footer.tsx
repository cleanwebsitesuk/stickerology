import Image from "next/image";
import Link from "next/link";
import { Fredoka, Inter } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function SiteFooter() {
  return (
    <footer className={`${inter.className} mt-auto border-t border-white/10 bg-[#070A20] text-white`}>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand Column */}
        <div className="max-w-md">
          <Link
            href="/"
            className="group inline-flex items-center gap-4 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]"
          >
            <Image
              src="/logo.png"
              alt="Stickerology"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
            />
            <span className="flex flex-col leading-none">
              <span className={`${fredoka.className} text-xl font-semibold`}>Stickerology</span>
              <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3FD8F0]">
                Stick it. Share it. Express it.
              </span>
            </span>
          </Link>
          <div className="mt-6 space-y-2 text-[13px] leading-relaxed text-white/55">
            <p>No stickers were harmed in the mounting process. Several were emotionally validated.</p>
            <p>Open 24 hours. The internet does not observe public holidays.</p>
          </div>
        </div>

        {/* Floor Plan Column */}
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3FD8F0]">
            The Floor Plan
          </h4>
          <ul className={`${fredoka.className} mt-6 space-y-3.5 text-[15px] font-medium`}>
            <li>
              <Link href="/" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
                The Entrance
              </Link>
            </li>
            <li>
              <Link href="/#wing" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
                The Emotion Wing
              </Link>
            </li>
            <li>
              <Link href="/#packs" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
                The Collections
              </Link>
            </li>
            <li>
              <Link href="/#gift-shop" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
                Gift Shop (mandatory)
              </Link>
            </li>
          </ul>
        </div>

        {/* Visitor Information Column */}
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3FD8F0]">
            Visitor Information
          </h4>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                The Institution
              </span>
              <Link href="/about" className="rounded font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
                About Stickerology
              </Link>
            </li>
            <li>
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Commissions &amp; Bespoke
              </span>
              <Link href="/contact" className="rounded font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
                Contact us via order form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs font-medium text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Stickerology, a very serious institution. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D95]" />
            Please touch the exhibits.
          </p>
        </div>
      </div>
    </footer>
  );
}
