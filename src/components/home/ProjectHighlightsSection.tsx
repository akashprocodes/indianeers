"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "PMKVY",
    subtitle: "Pradhan Mantri Kaushal Vikas Yojana",
    location: "All India",
    beneficiaries: "1.2M+",
    color: "text-blue-600",
    bg: "bg-blue-50",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "FoSTaC",
    subtitle: "Food Safety Training & Certification",
    location: "All India",
    beneficiaries: "350K+",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "SDM",
    subtitle: "Skill Development Missions",
    location: "25+ States",
    beneficiaries: "800K+",
    color: "text-purple-600",
    bg: "bg-purple-50",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "NULM",
    subtitle: "National Urban Livelihood Mission",
    location: "All India",
    beneficiaries: "600K+",
    color: "text-orange-500",
    bg: "bg-orange-50",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "CSR",
    subtitle: "Corporate Social Responsibility",
    location: "All India",
    beneficiaries: "500K+",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "PMFME",
    subtitle: "PM Formalization of Micro Food Enterprises",
    location: "All India",
    beneficiaries: "200K+",
    color: "text-blue-600",
    bg: "bg-blue-50",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Border Area",
    subtitle: "Border Development Programs",
    location: "Border Areas",
    beneficiaries: "150K+",
    color: "text-purple-600",
    bg: "bg-purple-50",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Disaster Management",
    subtitle: "Disaster Management Programs",
    location: "All India",
    beneficiaries: "100K+",
    color: "text-red-500",
    bg: "bg-red-50",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop"
  }
];

export function ProjectHighlightsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px tolerance
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll by 80% of container width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      // Update state after animation
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-primary/40" />
            <span className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.3em] text-primary">Project Highlights</span>
            <div className="w-12 h-[1px] bg-primary/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-extrabold text-[#050D1A] tracking-tight mb-4"
          >
            Driving Impact Through Key Initiatives
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Discover our diverse portfolio of programs empowering communities across India through strategic skill development.
          </motion.p>
        </div>

        {/* Carousel Area */}
        <div className="relative group">

          {/* Scroll Buttons */}
          <div className={`absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-20 transition-all duration-300 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-[0_10px_40px_rgb(37,99,235,0.4)] cursor-pointer"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
          </div>

          <div className={`absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-20 transition-all duration-300 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-[0_10px_40px_rgb(37,99,235,0.4)] cursor-pointer"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-stretch gap-6 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory py-8 px-4 -mx-4"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-start shrink-0 w-[280px] md:w-[320px] min-h-[420px] bg-white rounded-2xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 flex flex-col p-3 md:p-4"
              >
                {/* Image */}
                <div className="h-48 w-full relative overflow-hidden bg-zinc-100 rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="pt-5 pb-2 px-2 flex flex-col flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${project.color}`}>
                    {project.title}
                  </h3>
                  <p className="text-zinc-900 font-semibold text-[15px] leading-snug mb-6 flex-grow">
                    {project.subtitle}
                  </p>

                  {/* Footer Stats */}
                  <div className="flex items-center gap-4 text-zinc-500 text-[13px] font-medium pt-4 border-t border-zinc-100 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className={project.color} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className={project.color} />
                      <span>{project.beneficiaries} Beneficiaries</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
