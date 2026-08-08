import Image from "next/image";
import Link from "next/link";
import { Fredoka, Inter } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function SiteFooter() {
  return (
    <footer className={`${inter.className} mt-auto border-t border-white/10 bg-[#070A20] text-white`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.6fr_1fr]">
        {/* Brand + CTA */}
        <div className="max-w-lg">
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
          <p className={`${fredoka.className} mt-7 text-2xl font-semibold leading-snug sm:text-3xl`}>
            Download your sticker packs and give your chats some soul.
          </p>
          <Link
            href="/#packs"
            className="group mt-7 inline-block rounded-full bg-white p-[5px] shadow-[0_10px_24px_rgba(255,45,149,0.3)] transition-transform hover:scale-105 active:translate-y-[2px] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]"
          >
            <span
              className={`${fredoka.className} block rounded-full border-2 border-black bg-[linear-gradient(105deg,#FF2D95,#8B2FE0_55%,#2F9BFF)] px-7 py-3 text-base font-semibold text-white`}
            >
              Browse packs
            </span>
          </Link>
        </div>

        {/* Floor Plan */}
        <div className="md:justify-self-end">
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
