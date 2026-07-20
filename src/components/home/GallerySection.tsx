"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
    caption: "Tech Training Camp",
    location: "Bangalore",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    caption: "Corporate Workshops",
    location: "Mumbai",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600",
    caption: "Team Collaboration",
    location: "Pune",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    caption: "Student Engagement",
    location: "Delhi",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    caption: "Skill Assessment",
    location: "Hyderabad",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
    caption: "Practical Learning",
    location: "Chennai",
  },
];

export function GallerySection() {
  return (
    <section className="pt-12 pb-12 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 mb-16 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-primary/40" />
            <span className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.3em] text-primary">Our Gallery</span>
            <div className="w-12 h-[1px] bg-primary/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-extrabold text-[#050D1A] tracking-tight mb-4"
          >
            Moments of Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            A glimpse into our training centers, community outreach, and the people making a difference.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="relative w-full overflow-hidden group rounded-2xl">
          <div 
            className="flex w-max gap-6 hover:[animation-play-state:paused] transition-all"
            style={{ animation: "marquee 40s linear infinite" }}
          >
          {/* We duplicate the array to create a seamless loop */}
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              className="relative w-[220px] h-[260px] md:w-[260px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 group/card cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover/card:opacity-90" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2 opacity-90 group-hover/card:opacity-100 transition-opacity">
                  {img.caption}
                </h3>
                <div className="flex items-center gap-1.5 text-zinc-300 text-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100">
                  <MapPin size={14} className="text-orange-500" />
                  <span>{img.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
