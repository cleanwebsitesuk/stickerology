"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Eye, Hand, Sparkles, ArrowRight } from "lucide-react";
import { Fredoka, Inter } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"] });

/* ----------------------------------------------------------------
   Museum-label small caps
---------------------------------------------------------------- */
function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3FD8F0] ${className}`}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------
   The Sticker — die-cut border, black outline, gloss, peel corner.
   Draggable. Hover: straighten, scale, peel widens, shadow deepens.
---------------------------------------------------------------- */
function Sticker({
  children,
  size = 64,
  rotate = 0,
  float = false,
  delay = 0,
  drag = true,
  label,
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  rotate?: number;
  float?: boolean;
  delay?: number;
  drag?: boolean;
  label?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      drag={drag}
      dragMomentum={false}
      dragElastic={0.4}
      dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      whileHover={{ scale: 1.12, rotate: 0, zIndex: 40 }}
      whileDrag={{ scale: 1.18, rotate: 0, zIndex: 50 }}
      initial={false}
      animate={
        float && !reduce
          ? { rotate, y: [0, -9, 0] }
          : { rotate }
      }
      transition={
        float && !reduce
          ? { y: { duration: 5.5 + delay, repeat: Infinity, ease: "easeInOut", delay }, rotate: { duration: 0.3 } }
          : { type: "spring", stiffness: 300, damping: 20 }
      }
      className={`group/stk relative inline-block cursor-grab select-none active:cursor-grabbing ${className}`}
      style={{ width: size, height: size, touchAction: "none" }}
    >
      {/* die-cut white border */}
      <div className="relative h-full w-full rounded-full bg-white p-[6px] shadow-[0_10px_22px_rgba(0,0,0,0.4)] transition-shadow duration-200 group-hover/stk:shadow-[0_18px_36px_rgba(0,0,0,0.55)]">
        {/* chunky black outline + face */}
        <div
          className="flex h-full w-full items-center justify-center rounded-full border-[3px] border-black bg-gradient-to-br from-white via-[#f4f2ff] to-[#dcd8ee] leading-none"
          style={{ fontSize: size * 0.44 }}
        >
          <span className="translate-y-[1px]">{children}</span>
        </div>
        {/* glossy highlight */}
        <div className="pointer-events-none absolute left-[20%] top-[11%] h-[16%] w-[42%] rounded-full bg-white/70 blur-[1.5px]" />
        {/* peeling corner */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-[28%] w-[28%] origin-bottom-right transition-transform duration-200 group-hover/stk:scale-[1.35]">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
              background: "rgba(0,0,0,0.45)",
              filter: "blur(3px)",
              transform: "translate(-3px,-3px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
              background: "linear-gradient(135deg, #ffffff 10%, #e9e7f5 55%, #c9c5de 100%)",
            }}
          />
        </div>
      </div>
      {label && (
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap rounded-[3px] bg-white px-1.5 py-[3px] text-[8px] font-bold uppercase tracking-[0.18em] text-black shadow-md">
          {label}
        </span>
      )}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Chunky sticker-styled CTA button
---------------------------------------------------------------- */
function StickerButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.95, y: 3 }}
      className={`${fredoka.className} group/btn relative inline-block rounded-full bg-white p-[6px] shadow-[0_10px_24px_rgba(255,45,149,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]`}
    >
      <span className="relative flex items-center gap-2 rounded-full border-[3px] border-black bg-[linear-gradient(105deg,#FF2D95,#8B2FE0_55%,#2F9BFF)] px-8 py-3.5 text-lg font-semibold text-white">
        {children}
        {/* gloss */}
        <span className="pointer-events-none absolute left-6 top-1.5 h-2 w-1/3 rounded-full bg-white/40 blur-[1px]" />
      </span>
      {/* peel corner */}
      <span className="pointer-events-none absolute bottom-0.5 right-1 h-5 w-5 origin-bottom-right transition-transform duration-200 group-hover/btn:scale-125">
        <span
          className="absolute inset-0"
          style={{
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
            background: "linear-gradient(135deg, #ffffff 10%, #ddd9ec 100%)",
            filter: "drop-shadow(-2px -2px 2px rgba(0,0,0,0.35))",
          }}
        />
      </span>
    </motion.a>
  );
}

/* ----------------------------------------------------------------
   Scroll reveal
---------------------------------------------------------------- */
function Reveal({
  children,
  className = "",
  delay = 0,
  rotate = -1.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, rotate }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ type: "spring", stiffness: 110, damping: 17, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Data — the permanent collection
---------------------------------------------------------------- */
const TABS = [
  "Joy", "Rage", "Dread", "Awe", "Smug", "Cringe",
  "Longing", "Relief", "Spite", "Chaos", "Delulu", "Unbothered",
] as const;
type Tab = (typeof TABS)[number];

const WINGS: Record<Tab, { emoji: string; num: string; name: string; hot?: boolean }[]> = {
  Joy: [
    { emoji: "😆", num: "0007", name: "Laughing at Your Own Text Before Sending" },
    { emoji: "🕺", num: "0019", name: "Friday, 5:01 PM", hot: true },
    { emoji: "✨", num: "0033", name: "Main Character for One (1) Bus Ride" },
    { emoji: "🐕", num: "0051", name: "Saw a Dog Today" },
  ],
  Rage: [
    { emoji: "😤", num: "0102", name: "Composing the Reply You'll Never Send" },
    { emoji: "🌋", num: "0117", name: "Unearned Confidence (Theirs)" },
    { emoji: "🔥", num: "0121", name: "This Meeting Is an Email", hot: true },
    { emoji: "😡", num: "0138", name: "They Said 'Per My Last Email' First" },
  ],
  Dread: [
    { emoji: "😰", num: "0203", name: "'Can You Hop on a Quick Call'" },
    { emoji: "📉", num: "0214", name: "Sunday, 6:00 PM" },
    { emoji: "🫠", num: "0230", name: "Read at 2:14 PM. No Reply.", hot: true },
    { emoji: "👀", num: "0244", name: "The Exact Face When Someone Says 'We Need to Talk'" },
  ],
  Awe: [
    { emoji: "🤯", num: "0301", name: "Just Remembered How Big the Ocean Is" },
    { emoji: "😮", num: "0312", name: "Someone Actually Read the Docs" },
    { emoji: "🛐", num: "0324", name: "The Group Chat Agreed on a Restaurant", hot: true },
    { emoji: "🌠", num: "0336", name: "Their Playlist Was Genuinely Good" },
  ],
  Smug: [
    { emoji: "😏", num: "0402", name: "Told You So (Gracious Version)" },
    { emoji: "💅", num: "0411", name: "Called It Three Weeks Ago" },
    { emoji: "🧠", num: "0417", name: "Unearned Confidence", hot: true },
    { emoji: "🏆", num: "0428", name: "Woke Up Before the Alarm" },
  ],
  Cringe: [
    { emoji: "😬", num: "0502", name: "Said 'You Too' to the Waiter", hot: true },
    { emoji: "🫣", num: "0509", name: "Waved Back at Someone Waving Behind Me" },
    { emoji: "🤡", num: "0515", name: "Replaying That Conversation From 2019" },
    { emoji: "😅", num: "0523", name: "Voice Memo, Seven Minutes, Unlistened, Mine" },
  ],
  Longing: [
    { emoji: "🥺", num: "0601", name: "Checking if They Watched My Story" },
    { emoji: "🌙", num: "0610", name: "Missing Someone I Saw Yesterday", hot: true },
    { emoji: "📱", num: "0618", name: "Typing… Then Nothing" },
    { emoji: "🍂", num: "0626", name: "Homesick for a Group Chat That Died in 2021" },
  ],
  Relief: [
    { emoji: "😮‍💨", num: "0701", name: "Meeting Cancelled (They Cancelled)", hot: true },
    { emoji: "🙏", num: "0708", name: "The Screenshot Was Not About Me" },
    { emoji: "🛁", num: "0714", name: "Plans Fell Through, Blessedly" },
    { emoji: "✅", num: "0722", name: "It Was in My Other Pocket" },
  ],
  Spite: [
    { emoji: "🙂", num: "0801", name: "'No Worries' (There Are Worries)" },
    { emoji: "🧾", num: "0816", name: "Screenshotted for the Archive", hot: true },
    { emoji: "💪", num: "0824", name: "Doing It Out of Spite (It's Working)" },
    { emoji: "🌱", num: "0833", name: "Thriving, Specifically Where They Can See" },
  ],
  Chaos: [
    { emoji: "🤪", num: "0901", name: "Third Coffee, Zero Plan" },
    { emoji: "🎲", num: "0910", name: "'Let's Find Out'", hot: true },
    { emoji: "🧨", num: "0918", name: "One More Episode (It Is 3 AM)" },
    { emoji: "🌀", num: "0927", name: "Cart Has 47 Items. Buying None." },
  ],
  Delulu: [
    { emoji: "🥰", num: "1001", name: "They Viewed My Story, So Basically Dating", hot: true },
    { emoji: "👑", num: "1009", name: "I Can Fix Him" },
    { emoji: "🔮", num: "1017", name: "Manifesting Instead of Studying" },
    { emoji: "🦄", num: "1025", name: "This Time Will Be Different" },
  ],
  Unbothered: [
    { emoji: "😌", num: "1101", name: "Read Your Paragraph. Replied 'K.'" },
    { emoji: "🧘", num: "1108", name: "On Do Not Disturb Since Tuesday", hot: true },
    { emoji: "🍵", num: "1116", name: "Not My Circus. Not Even My Continent." },
    { emoji: "🕶️", num: "1124", name: "Left the Group Chat Quietly" },
  ],
};

const PACKS = [
  {
    name: "Feral Monday",
    count: 24,
    desc: "For when the week starts swinging before you've had coffee.",
    previews: ["😵‍💫", "☕", "🧟", "⚡"],
  },
  {
    name: "Soft Launch",
    count: 18,
    desc: "Hint at the relationship. Confirm absolutely nothing.",
    previews: ["🫶", "😇", "🌹", "👀"],
  },
  {
    name: "Group Chat Villain",
    count: 32,
    desc: "Someone has to say it. It's you. It's always been you.",
    previews: ["😈", "🍿", "🐍", "💣"],
  },
  {
    name: "Overthinking Deluxe",
    count: 28,
    desc: "Every possible outcome, pre-worried for your convenience.",
    previews: ["🤔", "🌀", "😰", "📝"],
  },
  {
    name: "Passive Aggressive Office",
    count: 26,
    desc: "Per my last sticker.",
    previews: ["🙂", "📎", "☕", "✅"],
  },
  {
    name: "3am Thoughts",
    count: 21,
    desc: "Why did I say that in 2017. Anyway. Are birds okay?",
    previews: ["🌙", "👁️", "🛸", "💭"],
  },
];

const MARQUEE = [
  { emoji: "😤", num: "0102" }, { emoji: "🫠", num: "0230" }, { emoji: "😏", num: "0402" },
  { emoji: "🥺", num: "0601" }, { emoji: "🤪", num: "0901" }, { emoji: "😬", num: "0502" },
  { emoji: "🕺", num: "0019" }, { emoji: "🧘", num: "1108" }, { emoji: "👑", num: "1009" },
  { emoji: "🔥", num: "0121" }, { emoji: "🙏", num: "0708" }, { emoji: "🐕", num: "0051" },
];

/* ----------------------------------------------------------------
   Chat demo script
---------------------------------------------------------------- */
type Msg =
  | { side: "left" | "right"; text: string; sticker?: undefined }
  | { side: "left" | "right"; sticker: string; num: string; text?: undefined };

const SCRIPT: Msg[] = [
  { side: "left", text: "did you eat my leftover pad thai" },
  { side: "right", text: "define “eat”" },
  { side: "left", sticker: "😤", num: "0102" },
  { side: "right", text: "it said “do not eat” which honestly felt like a dare" },
  { side: "left", text: "it had my NAME on it" },
  { side: "right", sticker: "🥺", num: "0601" },
  { side: "left", text: "you owe me pad thai" },
  { side: "right", sticker: "🫡", num: "0745" },
  { side: "left", sticker: "😌", num: "1101" },
];

function SparkleBurst() {
  const spots = [
    { x: -26, y: -20, d: 0 },
    { x: 30, y: -12, d: 0.08 },
    { x: -16, y: 26, d: 0.15 },
  ];
  return (
    <>
      {spots.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 text-[#FFC61A]"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0], x: s.x, y: s.y }}
          transition={{ duration: 0.7, delay: 0.12 + s.d, ease: "easeOut" }}
        >
          <Sparkles size={14} />
        </motion.span>
      ))}
    </>
  );
}

function ChatDemo() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  const CYCLE = SCRIPT.length + 3; // hold the full conversation for a beat, then restart

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setTick((c) => (c + 1) % CYCLE), 1250);
    return () => clearInterval(t);
  }, [reduce, CYCLE]);

  const shown = reduce ? SCRIPT.length : Math.min(tick, SCRIPT.length);

  return (
    <div className="relative mx-auto w-[262px] -rotate-2">
      <div className="rounded-[2.6rem] border-[10px] border-black bg-black shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        <div className="relative h-[500px] overflow-hidden rounded-[2rem] bg-[#0E1440]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          {/* header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#131A4A] px-4 pb-3 pt-9">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF2D95] to-[#8B2FE0] text-sm">
              🍜
            </div>
            <div>
              <div className={`${fredoka.className} text-sm font-semibold text-white`}>nat (roommate)</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#3FD8F0]">specimen in the wild</div>
            </div>
          </div>
          {/* thread */}
          <div className="flex h-[calc(100%-4.5rem)] flex-col justify-end gap-2.5 overflow-hidden px-3 pb-4">
            <AnimatePresence initial={false}>
              {SCRIPT.slice(0, shown).map((m, i) => (
                <motion.div
                  key={`${i}-${m.text ?? m.sticker}`}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={
                    m.sticker
                      ? { type: "spring", stiffness: 420, damping: 13 }
                      : { type: "spring", stiffness: 260, damping: 22 }
                  }
                  className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}
                >
                  {m.text ? (
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
                        m.side === "right"
                          ? "rounded-br-sm bg-[linear-gradient(120deg,#FF2D95,#8B2FE0)] text-white"
                          : "rounded-bl-sm bg-[#222A5E] text-white"
                      }`}
                    >
                      {m.text}
                    </div>
                  ) : (
                    <div className="relative px-2 py-1">
                      <Sticker size={62} rotate={m.side === "right" ? 5 : -5} drag={false} label={`SPEC. ${m.num}`} />
                      {!reduce && <SparkleBurst />}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Label className="text-white/50">Live exhibit · the pad thai incident · loops forever</Label>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Specimen card (emotion wing)
---------------------------------------------------------------- */
function SpecimenCard({
  spec,
  i,
}: {
  spec: { emoji: string; num: string; name: string; hot?: boolean };
  i: number;
}) {
  const reduce = useReducedMotion();
  const rot = [-3, 2.5, -2, 3.5][i % 4];
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, rotate: rot * 3, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, rotate: rot, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8, transition: { duration: 0.12 } }}
      transition={{ type: "spring", stiffness: 220, damping: 17, delay: i * 0.06 }}
      className="relative w-44 rounded-xl border border-white/10 bg-[#141B44] p-4 pb-5 pt-7 text-center shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
    >
      {/* mounting pin */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#FFE38A] to-[#D99E00] shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
      />
      {spec.hot && (
        <div className="absolute -right-3 -top-3 z-10 rotate-6 rounded-md border-2 border-black bg-[#FFC61A] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-black shadow-lg">
          <span className="flex items-center gap-1">
            <Eye size={10} aria-hidden="true" /> most viewed this week
          </span>
        </div>
      )}
      <div className="flex justify-center">
        <Sticker size={76} rotate={-rot}>{spec.emoji}</Sticker>
      </div>
      <div className="mt-4 text-[10px] font-semibold tracking-[0.28em] text-white/50">
        SPEC. {spec.num}
      </div>
      <div className={`${fredoka.className} mt-1 text-[13.5px] font-semibold leading-snug text-white`}>
        {spec.name}
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Pack card
---------------------------------------------------------------- */
function PackCard({ pack, i }: { pack: (typeof PACKS)[number]; i: number }) {
  const spread = [
    "absolute -top-6 left-5 transition-transform duration-300 group-hover:-translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-6",
    "absolute -top-8 left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-4",
    "absolute -top-6 right-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:rotate-6",
    "absolute -right-4 top-10 hidden transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-12 sm:block",
  ];
  return (
    <Reveal delay={(i % 3) * 0.08} rotate={i % 2 === 0 ? -1.5 : 1.5}>
      <div className="group relative mt-8 rounded-2xl border border-white/10 bg-[#111740] p-6 pt-14 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:rotate-[1.2deg] hover:shadow-[0_28px_60px_rgba(139,47,224,0.35)]">
        {pack.previews.map((p, j) => (
          <div key={j} className={spread[j]}>
            <Sticker size={j === 1 ? 58 : 48} rotate={[-7, 4, 8, -5][j]}>{p}</Sticker>
          </div>
        ))}
        <div className="text-[10px] font-semibold tracking-[0.28em] text-white/50">
          COLLECTION NO. {String(i + 1).padStart(2, "0")} · {pack.count} STICKERS
        </div>
        <h3 className={`${fredoka.className} mt-2 text-2xl font-semibold text-white`}>{pack.name}</h3>
        <p className="mt-2 min-h-[3rem] text-[15px] leading-relaxed text-white/70">{pack.desc}</p>
        <a
          href="#gift-shop"
          className={`${fredoka.className} mt-4 inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FF2D95] hover:bg-[#FF2D95]/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]`}
        >
          Browse pack <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

/* ----------------------------------------------------------------
   Page
---------------------------------------------------------------- */
export default function Page() {
  const [tab, setTab] = useState<Tab>("Joy");

  return (
    <div className={`${inter.className} min-h-screen overflow-x-clip bg-[#0B1030] text-white antialiased`}>
      <style>{`
        @keyframes stk-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .stk-marquee { animation: stk-marquee 42s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .stk-marquee { animation: none; } }
      `}</style>

      <main>
        {/* ============================================================
            1 · HERO — the entrance
        ============================================================ */}
        <section className="relative overflow-hidden" aria-label="Welcome to Stickerology">
          {/* two glows, that's the budget */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full opacity-25"
            style={{ background: "radial-gradient(closest-side, #8B2FE0, transparent)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[26rem] w-[26rem] rounded-full opacity-20"
            style={{ background: "radial-gradient(closest-side, #FF2D95, transparent)" }}
          />

          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-28 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
            {/* left */}
            <div>
              <Reveal>
                <Label>The Stickerology Collection · Est. 2026</Label>
              </Reveal>
              <Reveal delay={0.08}>
                <h1
                  className={`${fredoka.className} mt-5 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-[4.2rem]`}
                >
                  Every feeling you&rsquo;ve ever had.{" "}
                  <span className="bg-gradient-to-r from-[#FF2D95] via-[#c77dff] to-[#3FD8F0] bg-clip-text text-transparent [filter:drop-shadow(0_0_22px_rgba(255,45,149,0.45))]">
                    Catalogued.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
                  2,400 sticker specimens covering the entire human emotional range, sendable in
                  every app you already text in. Admission is free. The exit is through the gift shop.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <StickerButton href="#packs">Browse packs</StickerButton>
                  <a
                    href="#wing"
                    className={`${fredoka.className} rounded-full px-2 py-1 text-lg font-medium text-white/70 underline decoration-[#3FD8F0]/50 decoration-2 underline-offset-8 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0]`}
                  >
                    Take the tour
                  </a>
                </div>
              </Reveal>
            </div>

            {/* right — phone with peeling sticker + drifting specimens */}
            <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
              <div className="relative mx-auto w-[250px] rotate-3">
                <div className="rounded-[2.8rem] border-[10px] border-black bg-black shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
                  <div className="relative h-[480px] overflow-hidden rounded-[2.2rem] bg-[linear-gradient(170deg,#8B2FE0,#5748e8_45%,#2F9BFF)]">
                    <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                    {/* faint chat skeleton so the screen reads as a messenger */}
                    <div className="absolute inset-x-5 bottom-8 space-y-3">
                      <div className="h-7 w-2/3 rounded-2xl rounded-bl-sm bg-white/20" />
                      <div className="ml-auto h-7 w-1/2 rounded-2xl rounded-br-sm bg-white/30" />
                      <div className="h-7 w-3/5 rounded-2xl rounded-bl-sm bg-white/20" />
                    </div>
                  </div>
                </div>
                {/* the classic, mid-peel */}
                <div className="absolute -right-12 top-[26%]">
                  <Sticker size={124} rotate={-7} float delay={0.4} label="SPEC. 0001 · THE CLASSIC">
                    😊
                  </Sticker>
                </div>
              </div>

              {/* drifting specimens, deliberately placed */}
              <div className="absolute -left-2 top-4 sm:-left-8">
                <Sticker size={64} rotate={6} float label="SPEC. 0042">⚡</Sticker>
              </div>
              <div className="absolute right-2 -top-8 hidden sm:block">
                <Sticker size={56} rotate={-6} float delay={1.2}>💖</Sticker>
              </div>
              <div className="absolute -left-6 bottom-24 hidden sm:block">
                <Sticker size={60} rotate={4} float delay={2}>✌️</Sticker>
              </div>
              <div className="absolute -right-2 bottom-6 hidden lg:block">
                <Sticker size={52} rotate={-5} float delay={0.8} label="ACQUIRED 2026">🌟</Sticker>
              </div>
              <div className="absolute left-8 -bottom-10 hidden lg:block">
                <Sticker size={48} rotate={7} float delay={1.6}>🫠</Sticker>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            2 · THE EMOTION WING
        ============================================================ */}
        <section id="wing" className="relative py-28" aria-label="The emotion wing">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full opacity-15"
            style={{ background: "radial-gradient(closest-side, #2F9BFF, transparent)" }}
          />
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <Label>Wing II · Permanent Collection</Label>
              <h2 className={`${fredoka.className} mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl`}>
                The full emotional range. Not just the four your keyboard shipped with.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Happy, sad, heart, thumbs up — that&rsquo;s where most sticker apps stop. We kept going.
                Our researchers have catalogued feelings that don&rsquo;t have names yet, only timestamps.
              </p>
            </Reveal>

            {/* please touch plaque */}
            <Reveal delay={0.1}>
              <div className="mt-8 inline-flex -rotate-1 items-center gap-3 rounded-lg border border-[#FFC61A]/40 bg-[#FFC61A]/10 px-4 py-2.5">
                <Hand size={16} className="text-[#FFC61A]" aria-hidden="true" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FFC61A]">
                  Please touch the exhibits. Every sticker on this page is draggable. The curator has given up.
                </span>
              </div>
            </Reveal>

            {/* exhibit-room tabs */}
            <div className="mt-12 flex flex-wrap gap-2.5" role="tablist" aria-label="Emotion rooms">
              {TABS.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`${fredoka.className} rounded-t-xl rounded-b-md border-2 px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3FD8F0] ${
                    tab === t
                      ? "-translate-y-0.5 border-black bg-[linear-gradient(105deg,#FF2D95,#8B2FE0)] text-white shadow-[0_8px_18px_rgba(255,45,149,0.35)]"
                      : "border-white/15 bg-[#131A44] text-white/70 hover:border-white/35 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* specimen cluster */}
            <div className="mt-14 flex min-h-[19rem] flex-wrap items-start justify-center gap-x-8 gap-y-12 sm:justify-start sm:gap-x-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:justify-start sm:gap-x-10"
                  initial={false}
                  exit={{ opacity: 0 }}
                >
                  {WINGS[tab].map((spec, i) => (
                    <SpecimenCard key={spec.num} spec={spec} i={i} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-10 text-sm text-white/50">
              Room {String(TABS.indexOf(tab) + 1).padStart(2, "0")} of 12 · {tab} · four specimens
              currently on display, 196 in storage
            </p>
          </div>
        </section>

        {/* ============================================================
            MARQUEE — now on display
        ============================================================ */}
        <section aria-label="Now on display" className="relative border-y border-white/10 bg-[#0D1338] py-8">
          <div className="mb-5 text-center">
            <Label>Now on display · rotating exhibition</Label>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <div className="stk-marquee flex w-max items-center gap-12 px-6">
              {[...MARQUEE, ...MARQUEE].map((m, i) => (
                <div key={i} className="flex items-center gap-12">
                  <div className="pb-5">
                    <Sticker size={58} rotate={i % 2 === 0 ? -5 : 5} drag={false} label={`SPEC. ${m.num}`}>
                      {m.emoji}
                    </Sticker>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                    on loan from the group chat
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            3 · PACK GRID — special collections
        ============================================================ */}
        <section id="packs" className="relative py-28" aria-label="Sticker pack collections">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12%] top-1/4 h-[30rem] w-[30rem] rounded-full opacity-15"
            style={{ background: "radial-gradient(closest-side, #FF2D95, transparent)" }}
          />
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <Label>Wing III · Special Collections</Label>
              <h2 className={`${fredoka.className} mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl`}>
                Curated packs for very specific disasters.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Each collection is assembled by hand, labelled by mood, and guaranteed to say the
                thing you were going to type out badly anyway.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {PACKS.map((pack, i) => (
                <PackCard key={pack.name} pack={pack} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            4 · HOW IT WORKS + chat demo
        ============================================================ */}
        <section className="relative py-28" aria-label="How Stickerology works">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-10%] top-1/3 h-[26rem] w-[26rem] rounded-full opacity-15"
            style={{ background: "radial-gradient(closest-side, #3FD8F0, transparent)" }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <Label>Visitor Information</Label>
                <h2 className={`${fredoka.className} mt-4 max-w-lg text-4xl font-semibold leading-tight sm:text-5xl`}>
                  The tour takes about nine seconds.
                </h2>
              </Reveal>

              <div className="mt-14 space-y-12">
                {[
                  {
                    n: "01",
                    title: "Pick a pack",
                    body: "Wander the collections. Read the labels. Judge the specimens openly — they can take it. The museum is open forever, so browse like rent is free.",
                  },
                  {
                    n: "02",
                    title: "Tap to add",
                    body: "One tap moves the whole pack into your keyboard. No forms, no wizard, no “verify your email to continue feeling things.”",
                  },
                  {
                    n: "03",
                    title: "Send anywhere",
                    body: "iMessage, WhatsApp, Telegram, the work chat you should be more careful in. If it has a text field, it’s now an exhibition space.",
                  },
                ].map((s, i) => (
                  <Reveal key={s.n} delay={i * 0.1}>
                    <div className="flex gap-7">
                      <div
                        className={`${fredoka.className} bg-gradient-to-br from-[#FF2D95] to-[#2F9BFF] bg-clip-text text-6xl font-semibold leading-none text-transparent`}
                      >
                        {s.n}
                      </div>
                      <div>
                        <Label className="text-white/50">Stop {s.n} on the audio tour</Label>
                        <h3 className={`${fredoka.className} mt-1 text-2xl font-semibold text-white`}>{s.title}</h3>
                        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/70">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal rotate={2} className="justify-self-center">
              <ChatDemo />
            </Reveal>
          </div>
        </section>

        {/* ============================================================
            5 · GIFT SHOP — closing CTA
        ============================================================ */}
        <section
          id="gift-shop"
          aria-label="Get started"
          className="relative overflow-hidden bg-[linear-gradient(115deg,#FF2D95,#8B2FE0_50%,#2F9BFF)] py-28"
        >
          {/* dense sticker clusters — the one place density is allowed */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-56 lg:block">
            <div className="absolute left-6 top-10"><Sticker size={64} rotate={-7} float>😆</Sticker></div>
            <div className="absolute left-24 top-32"><Sticker size={52} rotate={5} float delay={0.7}>⚡</Sticker></div>
            <div className="absolute left-4 top-56"><Sticker size={58} rotate={4} float delay={1.4}>😈</Sticker></div>
            <div className="absolute left-28 bottom-32"><Sticker size={48} rotate={-6} float delay={0.4}>💖</Sticker></div>
            <div className="absolute left-8 bottom-10"><Sticker size={66} rotate={6} float delay={1.9}>🕺</Sticker></div>
            <div className="absolute left-32 top-6"><Sticker size={44} rotate={-4} float delay={1.1}>🌟</Sticker></div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-56 lg:block">
            <div className="absolute right-6 top-12"><Sticker size={60} rotate={6} float delay={0.5}>🫠</Sticker></div>
            <div className="absolute right-28 top-36"><Sticker size={48} rotate={-5} float delay={1.2}>✌️</Sticker></div>
            <div className="absolute right-4 top-60"><Sticker size={56} rotate={-7} float delay={0.2}>🥺</Sticker></div>
            <div className="absolute right-24 bottom-28"><Sticker size={64} rotate={5} float delay={1.6}>🤪</Sticker></div>
            <div className="absolute right-8 bottom-8"><Sticker size={50} rotate={-4} float delay={0.9}>😌</Sticker></div>
            <div className="absolute right-36 top-8"><Sticker size={44} rotate={7} float delay={2.1}>🔥</Sticker></div>
          </div>
          {/* mobile accent pair */}
          <div aria-hidden="true" className="pointer-events-none absolute left-4 top-6 lg:hidden">
            <Sticker size={52} rotate={-6} float>😆</Sticker>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute bottom-6 right-4 lg:hidden">
            <Sticker size={52} rotate={5} float delay={1}>🫠</Sticker>
          </div>

          <div className="relative mx-auto max-w-2xl px-6 text-center">
            <Reveal>
              <Label className="text-white/80">The gift shop · you were always going to end up here</Label>
              <h2 className={`${fredoka.className} mt-5 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl`}>
                Your group chat is under&#8209;decorated.
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/90">
                2,400 specimens. Zero cost of admission. One correct way to respond to
                &ldquo;we need to talk&rdquo; — and it&rsquo;s a sticker.
              </p>
              <div className="mt-10 flex justify-center">
                <StickerButton href="#packs">Browse packs</StickerButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="border-t border-white/10 bg-[#070A20] py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            {/* circular logo mark, rebuilt in CSS */}
            <div aria-hidden="true" className="relative h-14 w-14 rounded-full bg-white p-[4px] shadow-lg">
              <div
                className={`${fredoka.className} flex h-full w-full items-center justify-center rounded-full border-2 border-black bg-[linear-gradient(130deg,#FF2D95,#8B2FE0_55%,#2F9BFF)] text-2xl font-semibold text-white`}
              >
                S
              </div>
              <div
                className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5"
                style={{
                  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  background: "linear-gradient(135deg,#fff,#cfcbe2)",
                }}
              />
            </div>
            <div>
              <div className={`${fredoka.className} text-xl font-semibold`}>Stickerology</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Stick it. Share it. Express it.
              </div>
            </div>
          </div>

          <div className="max-w-sm space-y-2 text-[13px] leading-relaxed text-white/55">
            <p>No stickers were harmed in the mounting process. Several were emotionally validated.</p>
            <p>Open 24 hours. The internet does not observe public holidays.</p>
            <p>© 2026 Stickerology, a very serious institution. Est. whenever you first felt something.</p>
          </div>

          <nav aria-label="Footer" className={`${fredoka.className} flex flex-col gap-2 text-[15px] font-medium`}>
            <a href="#packs" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
              The Collections
            </a>
            <a href="#wing" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
              The Emotion Wing
            </a>
            <a href="#gift-shop" className="rounded text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD8F0]">
              Gift Shop (mandatory)
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
