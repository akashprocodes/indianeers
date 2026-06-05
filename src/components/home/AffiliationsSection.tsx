"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  "amhssc.png", "asci-india.png", "asdc.png", "b&wssc.png", "bfsissc.png", 
  "csdci.png", "essci.png", "ffsc.png", "ficsi.png", "hssc.png", 
  "ipsc.png", "it-itesssc.png", "lsc.png", "lssc.png", "mesc.png", 
  "rasc.png", "rsdc.png", "sscgj.png", "thsc.png"
];

export function AffiliationsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth / 2;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-12 pb-24 bg-[#FAFAFA] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-primary/60" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.25em] text-primary">Our Affiliations</span>
            <div className="w-8 h-[1px] bg-primary/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-extrabold text-[#050D1A] mb-6 tracking-[-0.02em]"
          >
            Trusted Affiliations. Stronger Together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-zinc-600 leading-[1.7] font-medium max-w-[800px]"
          >
            We collaborate with premier government bodies and industry leaders to deliver quality programs and impactful outcomes.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-[1400px] mx-auto"
        >
          {/* Main White Pill Container */}
          <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-zinc-100 p-2 md:p-4 overflow-hidden relative">
            
            {/* Fade Edges for smoother appearance */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 rounded-l-2xl pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 rounded-r-2xl pointer-events-none" />

            <div 
              className="flex items-center w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center min-w-[180px] md:min-w-[240px] px-4 md:px-8 relative py-6 group"
                >
                  <div className="relative h-20 w-full flex items-center justify-center transition-all duration-300 opacity-70 group-hover:opacity-100 grayscale-0 group-hover:grayscale">
                    <Image 
                      src={`/company_logos/${logo}`}
                      alt={`Affiliation ${logo.replace('.png', '')}`}
                      width={140}
                      height={80}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  {/* Vertical Separator Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-zinc-100" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
