"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Landmark,
  User,
  Headset,
  Briefcase,
  Drone,
  Leaf,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

function ProgramCardDark({ icon: Icon, title, highlights, index }: {
  icon: React.ElementType; title: string; highlights: string[]; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative bg-white rounded-3xl p-8 border border-zinc-100 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-zinc-200 hover:shadow-[0_30px_60px_-15px_rgba(255,107,0,0.15)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
    >
      {/* Watermark Icon */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-black pointer-events-none transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12 group-hover:opacity-[0.06]">
        <Icon size={180} strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Box */}
        <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.15)] group-hover:border-primary/30 group-hover:bg-primary/10">
          <Icon className="text-zinc-500 group-hover:text-primary transition-colors duration-300" size={24} strokeWidth={2} />
        </div>

        <h3 className="text-[22px] font-sans font-bold text-zinc-900 mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-900 group-hover:to-zinc-500 transition-all duration-300">
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>

        {/* Expanding Separator Line */}
        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-transparent mb-5 opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-700 ease-out" />

        <ul className="space-y-3 mt-auto">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-zinc-600 font-medium group-hover:text-zinc-900 transition-colors duration-500">
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

const programsData = [
  {
    icon: Building2,
    title: "Programs for\nCorporates",
    highlights: ["Leadership Development", "Mindfulness Programs", "Workforce Upskilling"]
  },
  {
    icon: Factory,
    title: "Programs for\nIndustries",
    highlights: ["Custom Training Solutions", "Productivity Improvement", "Safety & Compliance Training"]
  },
  {
    icon: Landmark,
    title: "Programs for\nInstitutions",
    highlights: ["School & College Trainings", "Faculty Development", "Curriculum Support"]
  },
  {
    icon: User,
    title: "Programs for\nIndividuals",
    highlights: ["Skill Development Courses", "Soft Skills Training", "Career Guidance"]
  },
  {
    icon: Headset,
    title: "Programs for\nConsultancy",
    highlights: ["Project Advisory", "Strategy & Planning", "Implementation Support"]
  },
  {
    icon: Briefcase,
    title: "Placement\nSolutions",
    highlights: ["Job Opportunities", "Candidate Assessment", "Placement Support"]
  },
  {
    icon: Drone,
    title: "Drone\nTraining",
    highlights: ["Drone Pilot Training", "Industry Applications", "Certification Programs"]
  },
  {
    icon: Leaf,
    title: "CSR\nPrograms",
    highlights: ["CSR Implementation", "Community Development", "Sustainable Impact"]
  }
];

export function ProgramsSection() {
  return (
    <>
      {/* Overlapping Card Transition Style */}
      <section className="pt-24 pb-12 bg-[#FAFAFA] relative overflow-hidden -mt-12 rounded-t-[3rem] shadow-[0_-12px_40px_rgba(0,0,0,0.03)] z-20">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50/80 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary mt-[1px]">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-extrabold text-[#050D1A] mb-6 tracking-[-0.02em] leading-[1.05]"
          >
            Our Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-zinc-600 leading-[1.7] font-medium max-w-[600px]"
          >
            Four pillars of skill development designed to empower youth, transform communities, and build a globally competitive workforce.
          </motion.p>
        </div>

        {/* Grid - Add bottom padding so the staggered items don't overflow the grid container visually */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 pb-12">
          {programsData.map((program, index) => (
            <ProgramCardDark
              key={index}
              index={index}
              icon={program.icon}
              title={program.title}
              highlights={program.highlights}
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/programs" className="group inline-flex items-center gap-4 bg-[#050D1A] border border-[#050D1A] text-white p-2 pr-8 rounded-full font-semibold hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl hover:shadow-primary/20">
              <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-95">
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>
              <span className="text-[16px] tracking-wide">View All Programs</span>
            </Link>
          </motion.div>
        </div>
        </div>
      </section>
    </>
  );
}
