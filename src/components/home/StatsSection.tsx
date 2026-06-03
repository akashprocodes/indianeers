"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building, Globe, TrendingUp } from "lucide-react";

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

export function StatsSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
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
            { to: 76000, suffix: "+", label: "Beneficiaries Trained", icon: Users },
            { to: 100, suffix: "+", label: "Industry Partners", icon: Building },
            { to: 25, suffix: "", label: "States Covered", icon: Globe },
            { to: 95, suffix: "%", label: "Placement Rate", icon: TrendingUp },
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
  );
}
