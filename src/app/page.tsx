"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
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
  return (
    <div className="group perspective-1000 h-[280px]">
      <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <Icon className="text-primary" size={30} />
          </div>
          <h3 className="text-xl font-display font-bold text-secondary mb-2">{title}</h3>
          <p className="text-secondary/60 text-sm leading-relaxed">{desc}</p>
          <div className="mt-4 text-xs text-primary/60 font-mono uppercase tracking-widest">Hover to explore</div>
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => { emblaApi.off("select", onSelect); clearInterval(interval); };
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-full">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — CINEMATIC SPLIT LAYOUT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050D1A]">

        {/* ── Layer 1: Gradient orbs ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main saffron glow — bottom-left */}
          <div
            className="absolute w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)",
              bottom: "-200px",
              left: "-150px",
            }}
          />
          {/* Secondary accent — top right */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,196,140,0.08) 0%, transparent 70%)",
              top: "-100px",
              right: "-50px",
            }}
          />
          {/* Gold shimmer — center */}
          <div
            className="absolute w-[600px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(245,166,35,0.06) 0%, transparent 70%)",
              top: "30%",
              left: "30%",
            }}
          />
        </div>

        {/* ── Layer 2: Dot grid ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(rgba(255,107,0,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Layer 3: Ashoka Chakra (massive, behind everything) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <AshokaChakra
            className="text-white/[0.04] animate-[spin_90s_linear_infinite]"
            style={{ width: "min(900px, 110vw)", height: "min(900px, 110vw)" } as React.CSSProperties}
          />
        </div>


        {/* ── Layer 5: Horizontal rule decorators ── */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full container mx-auto px-4 md:px-6 py-32">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

            {/* LEFT — Text */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/70 text-sm font-mono tracking-widest uppercase">
                  Skilling India's Future
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.07] tracking-tight mb-6"
              >
                Empowering India,
                <br />
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(255,107,0,0.4)",
                    textShadow: "0 0 80px rgba(255,107,0,0.3)",
                  }}
                >
                  One Skill
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-primary">
                  at a Time
                </span>
              </motion.h1>

              {/* Typewriter line */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-xl md:text-2xl text-white/70 font-medium mb-3 flex items-center gap-2 flex-wrap"
              >
                <span>Transforming</span>
                <TypewriterText words={TYPEWRITER_WORDS} />
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-10"
              >
                An initiative by Indianeers Media Private Limited — delivering industry-aligned vocational training,
                government scheme implementation, and placement-linked programs across 15 Indian states.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link
                  href="/programs"
                  className="group relative inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-full font-semibold text-base overflow-hidden"
                  style={{ boxShadow: "0 0 40px rgba(255,107,0,0.35), 0 4px 16px rgba(255,107,0,0.25)" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Programs
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Link>
                <Link
                  href="/achievements"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-4 rounded-full font-semibold text-base backdrop-blur-sm transition-all hover:bg-white/5"
                >
                  Our Impact
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { color: "bg-accent", label: "10,000+ Trained" },
                  { color: "bg-gold", label: "50+ Partners" },
                  { color: "bg-primary", label: "15 States" },
                  { color: "bg-white/40", label: "NSDC Empanelled" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-sm font-mono"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${pill.color}`} />
                    {pill.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Floating Cards */}
            <div className="hidden lg:block relative h-[520px]">
              {/* Card 1 — Beneficiaries */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 right-0 w-56 bg-white/8 backdrop-blur-xl border border-white/12 rounded-2xl p-5 shadow-2xl"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Users className="text-primary" size={18} />
                  </div>
                  <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Trained</span>
                </div>
                <div className="font-mono text-3xl font-bold text-white mb-1">10,000+</div>
                <div className="text-accent text-xs font-semibold flex items-center gap-1">
                  <TrendingUp size={12} /> +34% this year
                </div>
              </motion.div>

              {/* Card 2 — Placement */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="absolute top-[140px] left-0 w-52 backdrop-blur-xl border border-white/12 rounded-2xl p-5 shadow-2xl"
                style={{ background: "rgba(0,196,140,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="text-accent" size={18} />
                  </div>
                  <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Placed</span>
                </div>
                <div className="font-mono text-3xl font-bold text-white mb-1">82%</div>
                <div className="text-white/50 text-xs">vs. 65% industry avg</div>
              </motion.div>

              {/* Card 3 — States */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-[260px] right-4 w-48 backdrop-blur-xl border border-white/12 rounded-2xl p-5 shadow-2xl"
                style={{ background: "rgba(245,166,35,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <span className="text-white/60 text-xs font-mono uppercase tracking-widest">States</span>
                </div>
                <div className="font-mono text-3xl font-bold text-white mb-1">15</div>
                <div className="text-white/50 text-xs">120+ training centers</div>
              </motion.div>

              {/* Card 4 — NSDC Badge */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="absolute bottom-16 left-6 right-6 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-gold shrink-0" size={20} />
                  <span className="text-white/80 text-sm font-medium">Government Certified</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["NSDC", "MSDE", "PMKVY", "DDU-GKY"].map((badge) => (
                    <span key={badge} className="text-xs px-2.5 py-1 bg-white/10 border border-white/10 rounded-full text-white/60 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Decorative lines connecting cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 420 520">
                <line x1="170" y1="80" x2="170" y2="180" stroke="rgba(255,107,0,0.5)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="200" y1="210" x2="300" y2="310" stroke="rgba(0,196,140,0.5)" strokeWidth="1" strokeDasharray="4 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IMPACT NUMBERS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary py-14 overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
            {[
              { to: 10000, suffix: "+", label: "Beneficiaries Trained", icon: Users },
              { to: 50, suffix: "+", label: "Industry Partners", icon: Building },
              { to: 15, suffix: "", label: "States Covered", icon: Globe },
              { to: 82, suffix: "%", label: "Placement Rate", icon: TrendingUp },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center px-4">
                  <div className="flex justify-center mb-2">
                    <Icon className="text-white/40" size={20} />
                  </div>
                  <h3 className="font-mono text-3xl md:text-5xl font-bold text-white mb-1">
                    <AnimCounter to={stat.to} suffix={stat.suffix} />
                  </h3>
                  <p className="text-white/70 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              );
            })}
          </div>
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
                    className="absolute flex items-center justify-center"
                    style={{ top: dot.top, left: dot.left, transform: "translate(-50%, -50%)" }}
                  >
                    <div
                      className="rounded-full bg-primary animate-pulse"
                      style={{ width: dot.size, height: dot.size, animationDelay: `${i * 0.2}s` }}
                    />
                    <div
                      className="absolute rounded-full bg-primary/20"
                      style={{ width: dot.size * 2.5, height: dot.size * 2.5 }}
                    />
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
      <style dangerouslySetInnerHTML={{__html: `
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
