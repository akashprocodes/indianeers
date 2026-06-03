"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function VisionSection() {
  return (
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
  );
}
