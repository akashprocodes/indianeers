"use client";
import Link from "next/link";

export function ContactCtaSection() {
  return (
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
  );
}

