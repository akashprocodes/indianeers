"use client";
import { motion } from "framer-motion";
import { Building, Users, Laptop, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

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

export function ProgramsSection() {
  return (
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
  );
}
