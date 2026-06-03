"use client";
import { motion } from "framer-motion";
import { MapPin, Building, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { InteractiveIndiaMap } from "@/components/InteractiveIndiaMap";

export function ImpactMapSection() {
  return (
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
              With a robust network spanning 25 states and 45+ districts, Skillionaires brings quality
              vocational training to both urban centers and deep rural pockets of India.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: MapPin, value: "25", label: "Active States", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Building, value: "120+", label: "Training Centers", color: "text-teal-600", bg: "bg-teal-50" },
                { icon: Users, value: "45+", label: "Districts Covered", color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: Award, value: "76K+", label: "Beneficiaries", color: "text-rose-600", bg: "bg-rose-50" },
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
  );
}
