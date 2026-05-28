"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronDown, ArrowRight, BookOpen, Users, Building, Laptop,
  Star, MapPin, Award, TrendingUp, Shield, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

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
function ProgramCard({ icon: Icon, title, desc, highlights }: {
  icon: React.ElementType; title: string; desc: string; highlights: string[];
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="group perspective-1000 h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-700 preserve-3d md:group-hover:rotate-y-180 ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <Icon className="text-primary" size={30} />
          </div>
          <h3 className="text-xl font-display font-bold text-secondary mb-2">{title}</h3>
          <p className="text-secondary/60 text-sm leading-relaxed">{desc}</p>
          <div className="mt-4 text-xs text-primary/60 font-mono uppercase tracking-widest md:hidden">Tap to explore</div>
          <div className="mt-4 text-xs text-primary/60 font-mono uppercase tracking-widest hidden md:block">Hover to explore</div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-secondary p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center">
          <h3 className="text-lg font-display font-bold text-primary mb-4">{title}</h3>
          <ul className="space-y-2.5 w-full flex-1">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                <ArrowRight className="text-accent shrink-0 mt-0.5" size={14} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Link href="/programs" className="mt-5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const PARTNERS = ["TATA", "Infosys", "HCL", "L&T", "Mahindra", "ICICI Foundation", "Reliance Foundation", "HDFC Bank"];
const TYPEWRITER_WORDS = ["Youth", "Rural Women", "School Dropouts", "Persons with Disabilities", "Tribal Communities"];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const orbY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-multiply opacity-50">
          <AshokaChakra
            className="text-black/[0.04] animate-[spin_180s_linear_infinite] will-change-transform transform-gpu"
            style={{ width: "min(1200px, 150vw)", height: "min(1200px, 150vw)" } as React.CSSProperties}
          />
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
          ABOUT SNAPSHOT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary font-mono font-bold text-xs rounded-full mb-6 border border-primary/20 uppercase tracking-widest">
                <Award size={14} /> Est. 2020
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-lg text-secondary/70 mb-6 leading-relaxed">
                Skillionaires, an initiative by <strong className="text-secondary">Indianeers Media Private Limited</strong>,
                bridges the skill gap in India by delivering placement-linked vocational training, government scheme
                implementation, and community-based empowerment programs.
              </p>
              <p className="text-base text-secondary/60 mb-8 leading-relaxed">
                We believe that empowering youth with practical, industry-relevant skills is the foundation of a
                resilient, self-reliant India — aligned with the national vision of Viksit Bharat 2047.
              </p>
              <div className="mb-8">
                <img src="/indianeers-logo.png" alt="Indianeers Media" className="h-10 object-contain" />
              </div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-secondary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              >
                Read Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center"
            >
              <img
                src="/indianeers-logo-full.png"
                alt="Indianeers Media Private Limited"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROGRAMS GRID (3D Flip Cards)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative" style={{ clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))" }}>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-14">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
              Our Programs
            </h2>
            <p className="text-secondary/60 max-w-xl mx-auto">
              Four pillars of skill development — hover each card to explore
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ProgramCard icon={Building} title="Government Programs"
              desc="End-to-end implementation of PMKVY, DDU-GKY, NULM and other central and state schemes."
              highlights={["PMKVY 3.0 Implementation", "DDU-GKY Rural Training", "NULM Urban Livelihoods", "PM Vishwakarma Yojana"]} />
            <ProgramCard icon={Users} title="CSR Projects"
              desc="Partnering with India's leading corporations for community-based skill development."
              highlights={["Women Digital Empowerment", "Tribal Community Skilling", "Disability Inclusion", "Rural Livelihoods"]} />
            <ProgramCard icon={Laptop} title="Industry Programs"
              desc="Employer-led training with committed placement — highest placement rates in the ecosystem."
              highlights={["Apprenticeship Programs", "Sector-Specific Training", "Campus-to-Corporate", "Upskilling & Reskilling"]} />
            <ProgramCard icon={BookOpen} title="Institutional Programs"
              desc="Embedding vocational skills within schools, colleges, and ITIs across India."
              highlights={["NSQF School Skill Labs", "College Skill Centers", "ITI Strengthening", "Polytechnic Integration"]} />
          </div>
          <div className="text-center mt-12">
            <Link href="/programs"
              className="inline-flex items-center gap-2 border border-secondary/20 text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all">
              View All Programs <ArrowRight size={16} />
            </Link>
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
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(rgba(255,107,0,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Where We Work</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">Pan-India Presence</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                With a robust network spanning 15 states and 45+ districts, Skillionaires brings quality
                vocational training to both urban centers and deep rural pockets of India.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: MapPin, value: "15", label: "Active States", color: "text-primary", bg: "bg-primary/10" },
                  { icon: Building, value: "120+", label: "Training Centers", color: "text-accent", bg: "bg-accent/10" },
                  { icon: Users, value: "45+", label: "Districts Covered", color: "text-gold", bg: "bg-gold/10" },
                  { icon: Award, value: "10K+", label: "Beneficiaries", color: "text-white", bg: "bg-white/10" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className={`flex items-center gap-4 ${item.bg} p-4 rounded-xl border border-white/10`}>
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <Icon className={item.color} size={20} />
                      </div>
                      <div>
                        <div className={`font-mono text-2xl font-bold ${item.color}`}>{item.value}</div>
                        <div className="text-white/50 text-xs">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link href="/coverage"
                className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                View Full Coverage Map <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Schematic map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10" />
                <div className="absolute inset-4 rounded-full border border-primary/20" />
                <div className="absolute inset-8 rounded-full border border-white/5" />
                {/* State dots */}
                {[
                  { top: "18%", left: "38%", size: 10, label: "Punjab" },
                  { top: "22%", left: "45%", size: 12, label: "Delhi" },
                  { top: "30%", left: "32%", size: 14, label: "Rajasthan" },
                  { top: "30%", left: "55%", size: 16, label: "UP" },
                  { top: "32%", left: "70%", size: 12, label: "Bihar" },
                  { top: "40%", left: "75%", size: 12, label: "W.Bengal" },
                  { top: "42%", left: "45%", size: 16, label: "MP" },
                  { top: "40%", left: "25%", size: 14, label: "Gujarat" },
                  { top: "52%", left: "40%", size: 18, label: "MH" },
                  { top: "52%", left: "68%", size: 12, label: "Odisha" },
                  { top: "63%", left: "48%", size: 14, label: "Telangana" },
                  { top: "68%", left: "42%", size: 14, label: "Karnataka" },
                  { top: "73%", left: "52%", size: 12, label: "TN" },
                ].map((dot, i) => (
                  <div
                    key={i}
                    className="absolute flex items-center justify-center group cursor-pointer"
                    style={{ top: dot.top, left: dot.left, transform: "translate(-50%, -50%)" }}
                  >
                    <div
                      className="rounded-full bg-primary animate-pulse group-hover:bg-accent transition-colors duration-300"
                      style={{ width: dot.size, height: dot.size, animationDelay: `${i * 0.2}s` }}
                    />
                    <div
                      className="absolute rounded-full bg-primary/20 group-hover:bg-accent/40 transition-colors duration-300"
                      style={{ width: dot.size * 2.5, height: dot.size * 2.5 }}
                    />
                    {/* Tooltip */}
                    <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary/90 text-white text-[10px] py-1 px-2 rounded pointer-events-none whitespace-nowrap border border-white/10 z-20">
                      {dot.label}
                    </div>
                  </div>
                ))}
                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-secondary/80 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <div className="font-mono text-3xl font-bold text-primary">15</div>
                    <div className="text-white/60 text-sm mt-0.5">Active States</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">Voices of Impact</h2>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden" ref={emblaRef}>
            <div className="flex">
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
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-border text-center">
                    <div className="flex justify-center gap-1 mb-6 text-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-xl md:text-2xl text-secondary/80 font-medium italic mb-8 leading-relaxed max-w-2xl mx-auto">
                      "{test.quote}"
                    </p>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="font-display font-bold text-primary text-lg">{test.name[0]}</span>
                    </div>
                    <h4 className="text-lg font-bold text-secondary">{test.name}</h4>
                    <p className="text-primary text-sm font-medium mt-0.5">{test.prog} · {test.state}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all ${activeSlide === i ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border"}`}
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
