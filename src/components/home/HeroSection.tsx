"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const orbY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const chakraRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
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
  );
}
