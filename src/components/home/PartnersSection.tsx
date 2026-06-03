"use client";
import { motion } from "framer-motion";

const PARTNERS = ["TATA", "Infosys", "HCL", "L&T", "Mahindra", "ICICI Foundation", "Reliance Foundation", "HDFC Bank"];

export function PartnersSection() {
  return (
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
  );
}
