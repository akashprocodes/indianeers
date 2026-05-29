"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronDown, ArrowRight, BookOpen, Users, Building, Laptop,
  Star, MapPin, Award, TrendingUp, Shield, Globe, Check, Lightbulb, Eye, Target, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { InteractiveIndiaMap } from "@/components/InteractiveIndiaMap";

// ─── Ashoka Chakra (proper 24-spoke) ───────────────────────────────────────
function AshokaChakra({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = ((i * 360) / 24 - 90) * (Math.PI / 180);
    const inner = 9;
    const outer = 44;
    return {
      x1: 50 + inner * Math.cos(angle),
      y1: 50 + inner * Math.sin(angle),
      x2: 50 + outer * Math.cos(angle),
      y2: 50 + outer * Math.sin(angle),
    };
  });

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} style={style}>
      {/* Outer ring */}
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1.2" />
      {/* Inner ring */}
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
      {/* Hub ring */}
      <circle cx="50" cy="50" r="9" stroke="currentColor" strokeWidth="1" />
      {/* Hub dot */}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      {/* 24 Spokes */}
      {spokes.map((s, i) => (
        <line
          key={i}
          x1={s.x1} y1={s.y1}
          x2={s.x2} y2={s.y2}
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      ))}
      {/* Outer decorative dots at spoke ends */}
      {spokes.map((s, i) => (
        <circle key={`dot-${i}`} cx={s.x2} cy={s.y2} r="1.2" fill="currentColor" />
      ))}
    </svg>
  );
}


// ─── Character-by-character Typewriter ──────────────────────────────────────
function TypewriterText({ words }: { words: string[] }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    if (!deleting && charIdx === word.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setCharIdx((prev) => (deleting ? prev - 1 : prev + 1)),
      deleting ? 35 : 80
    );
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="text-primary">{words[wordIdx].slice(0, charIdx)}</span>
      <span
        className="inline-block w-[3px] h-[1em] bg-primary rounded-sm animate-[blink_1s_step-end_infinite]"
        style={{ verticalAlign: "text-bottom" }}
      />
    </span>
  );
}

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1800;
    const step = 16;
    const inc = to / (dur / step);
    const t = setInterval(() => {
      start += inc;
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(Math.floor(start));
    }, step);
    return () => clearInterval(t);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

// ─── 3D Flip Program Card ───────────────────────────────────────────────────
function ProgramCard({ icon: Icon, title, desc, highlights, index }: {
  icon: React.ElementType; title: string; desc: string; highlights: string[]; index?: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group perspective-1000 h-[320px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d md:group-hover:rotate-y-180 ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* FRONT FACE */}
        <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col items-start transition-all duration-500 overflow-hidden group-hover:border-orange-200/50 group-hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.12)]">

          {/* Interactive Mouse Spotlight */}
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,107,0,0.06), transparent 40%)`,
            }}
          />

          {/* Faint Watermark Icon */}
          <div className="absolute -bottom-8 -right-8 opacity-[0.03] text-zinc-900 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none z-0">
            <Icon size={180} strokeWidth={1} />
          </div>

          <div className="relative mb-6 z-10">
            {/* Glowing orb behind icon */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-orange-50 to-orange-100/50 flex items-center justify-center border border-orange-100/80 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
              <Icon className="text-primary" size={24} strokeWidth={2.5} />
            </div>
          </div>

          <h3 className="text-[22px] font-sans font-extrabold text-zinc-900 mb-3 tracking-tight relative z-10">{title}</h3>
          <p className="text-zinc-500 text-[15px] leading-relaxed line-clamp-3 relative z-10 font-medium">{desc}</p>

          <div className="mt-auto flex items-center gap-2 text-[13px] text-primary font-bold tracking-wide uppercase relative z-10">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary group-hover:after:w-full after:transition-all after:duration-300">Explore Program</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={3} />
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0a0f18] to-[#121b2b] p-8 rounded-3xl shadow-xl text-white flex flex-col border border-zinc-800 overflow-hidden">

          {/* Subtle tech grid background */}
          <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          {/* Ultra-premium noise/grain texture */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

          <h3 className="text-[20px] font-sans font-extrabold text-white mb-6 flex items-center gap-3 relative z-10 tracking-tight">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
              <Icon className="text-primary" size={16} strokeWidth={2.5} />
            </div>
            {title}
          </h3>

          <ul className="space-y-4 w-full flex-1 relative z-10">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3.5 text-[14.5px] text-zinc-300 font-medium">
                <div className="w-5 h-5 rounded-full bg-[#5cb85c]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="text-[#5cb85c]" size={12} strokeWidth={3} />
                </div>
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Modern Dark Program Card (Reference Design) ──────────────────────────────
function ProgramCardDark({ icon: Icon, title, desc, highlights, index }: {
  icon: React.ElementType; title: string; desc: string; highlights: string[]; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative bg-gradient-to-b from-[#060e1d] to-[#030811] rounded-3xl p-8 border border-white/5 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_30px_60px_-15px_rgba(255,107,0,0.2)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
    >
      {/* Decorative Glowing Orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-primary/20 opacity-40 group-hover:opacity-100" />

      {/* Watermark Icon */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.02] text-white pointer-events-none transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12 group-hover:opacity-[0.05]">
        <Icon size={180} strokeWidth={1} />
      </div>

      <div className="relative z-10">
        {/* Icon Box */}
        <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] group-hover:border-primary/30 group-hover:bg-primary/10">
          <Icon className="text-zinc-300 group-hover:text-primary transition-colors duration-300" size={24} strokeWidth={2} />
        </div>

        <h3 className="text-[22px] font-sans font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all duration-300">{title}</h3>

        {/* Expanding Separator Line */}
        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-transparent mb-5 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-700 ease-out" />

        <p className="text-zinc-400 text-[15px] leading-relaxed font-medium mb-8 group-hover:text-zinc-300 transition-colors duration-500">
          {desc}
        </p>

        <ul className="space-y-3">
          {highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-zinc-500 font-medium group-hover:text-zinc-400 transition-colors duration-500">
              <div className="mt-[3px] rounded-full bg-primary/10 p-[3px] group-hover:bg-primary/20 transition-colors duration-300">
                <ArrowRight className="text-primary shrink-0 opacity-80" size={10} strokeWidth={3} />
              </div>
              <span className="leading-snug">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const PARTNERS = ["TATA", "Infosys", "HCL", "L&T", "Mahindra", "ICICI Foundation", "Reliance Foundation", "HDFC Bank"];
const TYPEWRITER_WORDS = ["Youth", "Rural Women", "School Dropouts", "Persons with Disabilities", "Tribal Communities"];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [aboutTab, setAboutTab] = useState<"story" | "mission" | "vision">("story");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const orbY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const chakraRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col w-full">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — CINEMATIC SPLIT LAYOUT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white selection:bg-primary/20 pb-20 pt-48 md:pt-56">

        {/* ── Layer 1: Light Animated Aurora & Glow ── */}
        <motion.div style={{ y: orbY }} className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle light base glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.04)_0%,transparent_80%)]" />

          {/* Animated Mesh / Aurora Effect for Light Mode */}
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.08)_0%,transparent_70%)] will-change-transform"
          />
        </motion.div>

        {/* ── Layer 2: Ultra-fine Tech Grid (Animated via Transform for Performance) ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)"
          }}
        >
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 -top-[48px] bottom-0 will-change-transform"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "3rem 3rem",
            }}
          />
        </div>

        {/* ── Layer 3: Holographic Ashoka Chakra (Dark) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-multiply opacity-50">
          <motion.div
            style={{ rotate: chakraRotate }}
            className="will-change-transform flex items-center justify-center"
          >
            <AshokaChakra
              className="text-black/[0.04] transform-gpu"
              style={{ width: "min(1200px, 150vw)", height: "min(1200px, 150vw)" } as React.CSSProperties}
            />
          </motion.div>
        </div>

        {/* ── CONTENT ── */}
        <motion.div style={{ y: heroY }} className="relative z-10 w-full container mx-auto px-4 md:px-6 flex flex-col items-center text-center">

          {/* Minimal / Futuristic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-[4rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-sans font-extrabold text-zinc-900 leading-[1] tracking-tighter mb-8 max-w-5xl mx-auto flex flex-col items-center"
          >
            <span className="block mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600">
              India's Youth.
            </span>
            <span className="flex flex-col sm:flex-row justify-center items-center gap-x-5 sm:gap-x-6 gap-y-1 mt-2">
              <span className="text-zinc-400 font-medium cursor-default">United.</span>
              <span className="hidden sm:inline text-zinc-200 font-light text-5xl -mt-1">/</span>
              <span className="text-zinc-400 font-medium cursor-default">Skilled.</span>
              <span className="hidden sm:inline text-zinc-200 font-light text-5xl -mt-1">/</span>
              <span className="text-zinc-950 font-extrabold cursor-default">
                Ready.
              </span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-500 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A national interface delivering industry-aligned vocational training and next-generation placement networks.
          </motion.p>

          {/* Minimal Futuristic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mb-16"
          >
            <Link
              href="/programs"
              className="group relative inline-flex items-center gap-3 bg-[#050D1A] text-white px-8 py-3.5 rounded-sm font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-primary transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span>Explore Programs</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/achievements"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-sm font-semibold text-xs md:text-sm uppercase tracking-widest text-[#050D1A]/70 border border-[#050D1A]/20 hover:border-[#050D1A]/60 hover:text-[#050D1A] hover:bg-[#050D1A]/5 transition-all duration-300"
            >
              <span>Our Impact</span>
              <div className="w-1.5 h-1.5 rounded-full border border-[#050D1A]/50 group-hover:bg-[#050D1A] group-hover:scale-150 transition-all" />
            </Link>
          </motion.div>

          {/* Trust lines - Ultra Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-[#050D1A]/40 text-xs font-mono tracking-[0.15em] uppercase font-semibold mb-8"
          >
            <div className="flex items-center gap-3 hover:text-[#050D1A]/80 transition-colors cursor-default">
              <span className="text-primary/70">01</span> 10,000+ Trained
            </div>
            <div className="flex items-center gap-3 hover:text-[#050D1A]/80 transition-colors cursor-default">
              <span className="text-primary/70">02</span> 50+ Partners
            </div>
            <div className="flex items-center gap-3 hover:text-[#050D1A]/80 transition-colors cursor-default">
              <span className="text-primary/70">03</span> 15 States
            </div>
          </motion.div>

          {/* Scroll indicator - integrated into flow to prevent overlap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-3 pointer-events-none mt-4"
          >
            <span className="text-[#050D1A]/30 text-[0.65rem] font-mono uppercase tracking-[0.3em] font-semibold">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
          </motion.div>

        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IMPACT NUMBERS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-orange-50 py-14 border-y border-orange-100 overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #FF6B00 0, #FF6B00 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-orange-200/60"
          >
            {[
              { to: 10000, suffix: "+", label: "Beneficiaries Trained", icon: Users },
              { to: 50, suffix: "+", label: "Industry Partners", icon: Building },
              { to: 15, suffix: "", label: "States Covered", icon: Globe },
              { to: 82, suffix: "%", label: "Placement Rate", icon: TrendingUp },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div variants={staggerItem} key={i} className="text-center px-4 pt-6 md:pt-0">
                  <div className="flex justify-center mb-2">
                    <Icon className="text-primary/40" size={20} />
                  </div>
                  <h3 className="font-mono text-3xl md:text-5xl font-extrabold text-primary mb-1">
                    <AnimCounter to={stat.to} suffix={stat.suffix} />
                  </h3>
                  <p className="text-primary/70 font-semibold text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT SNAPSHOT (Redesigned)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-8">

            {/* Left Column: Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 xl:col-span-5 flex items-center justify-center lg:justify-end"
            >
              <img
                src="/indianeers-logo-full.png"
                alt="Indianeers Media Private Limited"
                className="w-full max-w-[320px] md:max-w-md object-contain"
              />
            </motion.div>

            {/* Right Column: Content & Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 xl:col-span-7 flex flex-col"
            >
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
                About Us
              </p>

              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-[#050D1A] mb-6 tracking-tight">
                Who We Are
              </h2>

              <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-3xl">
                <strong className="text-zinc-900 font-semibold">Indianeers Media Private Limited (IMPL)</strong> is a youth-centric skilling and development company committed to empowering individuals from all walks of life—especially those from underserved communities. Incorporated in 2013, Indianeers has grown into a trusted implementation partner for central and state government skill development initiatives across India.
              </p>

              {/* Tabs Container */}
              <div className="rounded-xl border border-zinc-100 p-2 md:p-3 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] max-w-4xl">

                {/* Tab Navigation */}
                <div className="grid grid-cols-3 bg-zinc-100/60 rounded-lg overflow-hidden">
                  {(["story", "mission", "vision"] as const).map((tab) => {
                    const icons = { story: Lightbulb, mission: Eye, vision: Target };
                    const Icon = icons[tab];
                    return (
                      <button
                        key={tab}
                        onClick={() => setAboutTab(tab)}
                        className={`flex items-center justify-center gap-2 py-3 px-3 text-sm font-medium transition-all duration-300 ${aboutTab === tab
                          ? "bg-[#4a4a4a] text-white shadow-sm"
                          : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/50"
                          }`}
                      >
                        <Icon size={16} />
                        <span className="capitalize">{tab}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <div className="px-5 py-6 min-h-[140px] flex items-center">
                  {aboutTab === "story" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-zinc-500 text-[15px] leading-relaxed space-y-4">
                      <p>Founded in 2012, Indianeers began with a vision to bridge skill gaps and empower youth. We have grown into a key partner for government and corporate skilling initiatives, transforming lives across India.</p>
                      <p>Today, we impact thousands through diverse programs like PMKVY, SANKALP, and international job readiness.</p>
                    </motion.div>
                  )}
                  {aboutTab === "mission" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-zinc-500 text-[15px] leading-relaxed space-y-4">
                      <p>To deliver quality, industry-aligned skill training programs that create meaningful employment pathways for underserved communities across India — with measurable impact, full compliance, and compassionate execution.</p>
                    </motion.div>
                  )}
                  {aboutTab === "vision" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-zinc-500 text-[15px] leading-relaxed space-y-4">
                      <p>"To be India's most trusted partner in creating a skilled, self-reliant, and globally competitive workforce — one community at a time."</p>
                    </motion.div>
                  )}
                </div>

              </div>
            </motion.div>

          </div>

          {/* Bottom Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-0 bg-white rounded-xl border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            {[
              { title: "Industry-Aligned Training", desc: "Our programs meet NSQF and industry standards, ensuring nationwide recognition." },
              { title: "Expert Trainers", desc: "Learn from professionals with deep expertise in diverse sectors." },
              { title: "Nationwide Reach", desc: "Training accessible across 23 states, impacting diverse communities." }
            ].map((feature, i) => (
              <div key={i} className={`flex gap-4 items-start p-6 md:p-8 ${i < 2 ? 'md:border-r border-zinc-100' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-[#5cb85c] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-black text-[16px] md:text-[17px] mb-2">{feature.title}</h4>
                  <p className="text-zinc-600 text-[13px] md:text-[14px] leading-relaxed pr-2 md:pr-4">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROGRAMS GRID (Masonry Staggered Layout)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Premium Top Border Glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent z-20" />
        <div className="absolute top-0 inset-x-0 h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[2px] z-20" />

        {/* Top Fade Gradient (Dim to Light) */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none z-10" />

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Bottom Fade Gradient (Light to Dim) */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none z-10" />

        {/* Premium Bottom Border */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent z-20" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50/80 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary mt-[1px]">What We Do</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-sans font-extrabold text-[#050D1A] mb-8 tracking-[-0.02em] leading-[1.05]">
                  Our Programs
                </h2>

                <div className="border-l-[4px] border-primary pl-6 mb-12 py-1">
                  <p className="text-[19px] text-zinc-600 leading-[1.7] font-medium max-w-[420px]">
                    Four pillars of skill development designed to empower youth, transform communities, and build a globally competitive workforce.
                  </p>
                </div>

                <Link href="/programs" className="group inline-flex items-center gap-4 bg-[#050D1A] border border-[#050D1A] text-white p-2 pr-8 rounded-full font-semibold hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl hover:shadow-primary/20">
                  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-95">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-[16px] tracking-wide">View All Programs</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Staggered Grid Column */}
            <div className="lg:col-span-7 relative">
              <div className="grid md:grid-cols-2 gap-6 items-start">

                {/* Column 1 */}
                <div className="flex flex-col gap-6 relative z-10">
                  <ProgramCardDark index={0} icon={Building} title="Government Programs"
                    desc="End-to-end implementation of PMKVY, DDU-GKY, NULM and other central and state schemes."
                    highlights={["PMKVY 3.0 Implementation", "DDU-GKY Rural Training", "NULM Urban Livelihoods", "PM Vishwakarma Yojana"]} />

                  <ProgramCardDark index={1} icon={Users} title="CSR Projects"
                    desc="Partnering with India's leading corporations for community-based skill development."
                    highlights={["Women Digital Empowerment", "Tribal Community Skilling", "Disability Inclusion", "Rural Livelihoods"]} />
                </div>

                {/* Column 2 (Staggered Down) */}
                <div className="flex flex-col gap-6 md:mt-20 relative z-10">
                  <ProgramCardDark index={2} icon={Laptop} title="Industry Programs"
                    desc="Employer-led training with committed placement — highest placement rates in the ecosystem."
                    highlights={["Apprenticeship Programs", "Sector-Specific Training", "Campus-to-Corporate", "Upskilling & Reskilling"]} />

                  <ProgramCardDark index={3} icon={BookOpen} title="Institutional Programs"
                    desc="Embedding vocational skills within schools, colleges, and ITIs across India."
                    highlights={["NSQF School Skill Labs", "College Skill Centers", "ITI Strengthening", "Polytechnic Integration"]} />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ACHIEVEMENTS TICKER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-secondary border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-base font-display font-bold text-white/30 uppercase tracking-widest">
              <span className="text-primary">✦</span>
              <span>NSDC Partner</span>
              <span className="text-primary">✦</span>
              <span>MSDE Certified</span>
              <span className="text-primary">✦</span>
              <span>ISO 9001:2015</span>
              <span className="text-primary">✦</span>
              <span>Skill India Mission</span>
              <span className="text-primary">✦</span>
              <span>CSR Excellence 2023</span>
              <span className="text-primary">✦</span>
              <span>FICCI Skill Champion</span>
              <span className="text-primary">✦</span>
              <span>State Skill Mission Partner</span>
              <span className="text-primary">✦</span>
              <span>Best DDU-GKY Partner</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GEOGRAPHICAL COVERAGE 
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-3">Where We Work</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-5 text-secondary">Pan-India Presence</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                With a robust network spanning 15 states and 45+ districts, Skillionaires brings quality
                vocational training to both urban centers and deep rural pockets of India.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: MapPin, value: "15", label: "Active States", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Building, value: "120+", label: "Training Centers", color: "text-teal-600", bg: "bg-teal-50" },
                  { icon: Users, value: "45+", label: "Districts Covered", color: "text-indigo-600", bg: "bg-indigo-50" },
                  { icon: Award, value: "10K+", label: "Beneficiaries", color: "text-rose-600", bg: "bg-rose-50" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className={`flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md`}>
                      <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={item.color} size={20} />
                      </div>
                      <div>
                        <div className={`font-mono text-2xl font-bold ${item.color}`}>{item.value}</div>
                        <div className="text-slate-500 text-xs font-medium">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link href="/coverage"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                View Full Coverage Map <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Interactive SVG India Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full flex justify-center"
            >
              <InteractiveIndiaMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A162B] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -right-40 bottom-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Abstract Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-primary font-mono text-sm uppercase tracking-widest">Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold text-white tracking-tight">
                Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Impact</span>
              </h2>
            </div>
            
            {/* Custom Carousel Navigation */}
            <div className="flex gap-3 hidden md:flex">
              <button 
                onClick={() => emblaApi?.scrollPrev()}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="rotate-180" size={20} />
              </button>
              <button 
                onClick={() => emblaApi?.scrollNext()}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden -mx-4 px-4 py-8" ref={emblaRef}>
            <div className="flex gap-6">
              {[
                {
                  name: "Rahul Sharma",
                  state: "Maharashtra",
                  prog: "PMKVY IT Training",
                  quote: "The training I received changed my life completely. I went from being unemployed for 2 years to securing a job at a top tech firm within 3 months of graduation.",
                },
                {
                  name: "Priya Mehta",
                  state: "Gujarat",
                  prog: "Women Digital Literacy",
                  quote: "Skillionaires gave me the confidence and skills to start my own digital services business. Their trainers are patient, supportive, and deeply knowledgeable.",
                },
                {
                  name: "Amit Kumar",
                  state: "Rajasthan",
                  prog: "Retail Management",
                  quote: "Practical, hands-on training that actually matches what the industry needs. The placement support was excellent — I had 3 job offers before I even finished.",
                },
              ].map((test, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative bg-white/[0.03] backdrop-blur-md p-10 md:p-12 rounded-[32px] border border-white/10 group hover:-translate-y-2 hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-500 h-full flex flex-col justify-between"
                  >
                    {/* Massive Background Quote Icon */}
                    <div className="absolute top-6 right-8 text-white/[0.04] font-serif text-[120px] leading-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                      "
                    </div>

                    <div>
                      <div className="flex gap-1 mb-8 text-amber-400 drop-shadow-sm">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      
                      <p className="text-xl md:text-[22px] text-zinc-300 font-medium leading-relaxed mb-10 relative z-10">
                        "{test.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                        <span className="font-display font-bold text-white text-xl">{test.name[0]}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-wide">{test.name}</h4>
                        <p className="text-zinc-400 text-sm font-medium mt-1">
                          <span className="text-primary">{test.prog}</span> • {test.state}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dot indicators */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${activeSlide === i ? "w-8 h-2 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VISION 2047 TEASER — DRAMATIC DIAGONAL
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[560px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#050D1A]" />
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[58%] bg-primary"
          style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        {/* Noise on the orange side */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[58%] opacity-10"
          style={{
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        />
        <div className="container relative z-10 px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-white/40 font-mono text-sm uppercase tracking-widest mb-4">The Vision</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
              Our Contribution to<br />
              <span className="text-gold">Viksit Bharat 2047</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-sm leading-relaxed">
              Aligning with India's centenary vision — building a robust, skilled workforce ready to lead the world.
            </p>
            <Link href="/way-forward"
              className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
              The Way Forward <ArrowRight size={16} />
            </Link>
          </div>
          <div className="md:pl-16 text-white">
            <ul className="space-y-6">
              {[
                { num: 1, label: "1 Million Skilled by 2030" },
                { num: 2, label: "Digital India Ready Workforce" },
                { num: 3, label: "Inclusive, Green Job Skills" },
              ].map((item) => (
                <li key={item.num} className="flex items-center gap-4 text-xl font-display font-bold">
                  <span className="w-12 h-12 rounded-full bg-[#0A1628]/20 border border-white/20 flex items-center justify-center font-mono text-lg">
                    {item.num}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PARTNERS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-mono font-bold text-secondary/30 tracking-widest uppercase mb-10">
            Trusted by India's Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {PARTNERS.map((partner, i) => (
              <motion.h3
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-xl md:text-2xl font-display font-bold text-secondary/30 hover:text-primary transition-colors cursor-default"
              >
                {partner}
              </motion.h3>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT CTA BAND
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FF6B00 0%, #FF8C33 40%, #FF6B00 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-white/60 font-mono text-sm uppercase tracking-widest mb-4">Ready to Partner?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Partner with Us for India's Skill Revolution
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Government agencies, corporates, and institutions — let's build something meaningful together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="bg-[#0A1628] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0A1628]/90 transition-colors">
              Get In Touch
            </Link>
            <a
              href="https://wa.me/919876543210"
              className="bg-white text-[#FF6B00] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CSS overrides for 3D cards + animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </div>
  );
}