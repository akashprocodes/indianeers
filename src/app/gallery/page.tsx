"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Training", "Placement", "Events", "Community", "Awards"];

const items = [
  { id: 1, category: "Training", title: "IT Lab Training Session — Pune", aspect: "landscape" },
  { id: 2, category: "Placement", title: "Job Fair — Delhi 2023", aspect: "portrait" },
  { id: 3, category: "Community", title: "Women Empowerment Workshop", aspect: "landscape" },
  { id: 4, category: "Awards", title: "CSR Excellence Award Ceremony", aspect: "landscape" },
  { id: 5, category: "Training", title: "Construction Skills Practical — UP", aspect: "portrait" },
  { id: 6, category: "Events", title: "Skill India Day Celebration", aspect: "landscape" },
  { id: 7, category: "Training", title: "Beauty & Wellness Batch — Gujarat", aspect: "landscape" },
  { id: 8, category: "Community", title: "Tribal Craft Training — Odisha", aspect: "portrait" },
  { id: 9, category: "Placement", title: "TCS Campus Hiring Drive", aspect: "landscape" },
  { id: 10, category: "Training", title: "Digital Literacy Module — Rural Maharashtra", aspect: "landscape" },
  { id: 11, category: "Events", title: "NSDC Annual Partner Meet 2023", aspect: "portrait" },
  { id: 12, category: "Awards", title: "Best Training Partner — West Zone", aspect: "landscape" },
  { id: 13, category: "Community", title: "PMKVY Graduation Ceremony — Bihar", aspect: "landscape" },
  { id: 14, category: "Training", title: "Hospitality Training Batch — Bengaluru", aspect: "portrait" },
  { id: 15, category: "Placement", title: "Infosys BPO Hiring — Chennai", aspect: "landscape" },
];

// Placeholder colors themed to brand
const placeholderColors = [
  "from-primary/20 to-secondary/40",
  "from-accent/20 to-secondary/60",
  "from-gold/20 to-primary/30",
  "from-secondary/40 to-accent/20",
  "from-primary/30 to-gold/20",
  "from-accent/10 to-primary/20",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof items)[0] | null>(null);

  const filtered = activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top,_#F5A623_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-gold font-mono text-sm mb-3 uppercase tracking-widest">Photo Gallery</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">Our Gallery</h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            Glimpses from our training centers, placement drives, community events, and award ceremonies across India.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-testid={`gallery-filter-${cat.toLowerCase()}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-white text-secondary/60 border border-border hover:border-secondary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxItem(item)}
                data-testid={`gallery-item-${item.id}`}
              >
                <div
                  className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br ${
                    placeholderColors[i % placeholderColors.length]
                  } ${item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-video"}`}
                >
                  {/* Placeholder visual content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                      <ZoomIn className="text-white/60" size={20} />
                    </div>
                    <div className="text-white/40 text-xs text-center font-medium">{item.category}</div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <ZoomIn className="text-white mb-2" size={28} />
                    <p className="text-white text-sm font-medium text-center leading-tight">{item.title}</p>
                    <span className="mt-2 text-xs px-3 py-1 bg-primary/80 text-white rounded-full">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                data-testid="lightbox-close"
              >
                <X size={28} />
              </button>
              <div
                className={`w-full rounded-3xl bg-gradient-to-br ${
                  placeholderColors[lightboxItem.id % placeholderColors.length]
                } ${lightboxItem.aspect === "portrait" ? "aspect-[3/4]" : "aspect-video"} flex items-center justify-center`}
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <ZoomIn className="text-white/60" size={36} />
                  </div>
                  <p className="text-white/40 text-sm">Gallery Image</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-display font-bold text-lg">{lightboxItem.title}</h3>
                <span className="text-primary text-sm">{lightboxItem.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
