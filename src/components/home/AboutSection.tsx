"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Lightbulb, Eye, Target } from "lucide-react";

export function AboutSection() {
  const [aboutTab, setAboutTab] = useState<"story" | "mission" | "vision">("story");

  return (
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
  );
}
