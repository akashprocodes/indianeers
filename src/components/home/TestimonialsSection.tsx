"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="py-32 bg-[#0A162B] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-40 bottom-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Abstract Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold text-white tracking-tight">
              Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Impact</span>
            </h2>
          </div>
          
          {/* Custom Carousel Navigation */}
          <div className="flex gap-3 hidden md:flex">
            <button 
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="rotate-180" size={20} />
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4 py-8" ref={emblaRef}>
          <div className="flex gap-6">
            {[
              {
                name: "Rahul Sharma",
                state: "Maharashtra",
                prog: "PMKVY IT Training",
                quote: "The training I received changed my life completely. I went from being unemployed for 2 years to securing a job at a top tech firm within 3 months of graduation.",
              },
              {
                name: "Priya Mehta",
                state: "Gujarat",
                prog: "Women Digital Literacy",
                quote: "Skillionaires gave me the confidence and skills to start my own digital services business. Their trainers are patient, supportive, and deeply knowledgeable.",
              },
              {
                name: "Amit Kumar",
                state: "Rajasthan",
                prog: "Retail Management",
                quote: "Practical, hands-on training that actually matches what the industry needs. The placement support was excellent — I had 3 job offers before I even finished.",
              },
            ].map((test, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative bg-white/[0.03] backdrop-blur-md p-10 md:p-12 rounded-[32px] border border-white/10 group hover:-translate-y-2 hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-500 h-full flex flex-col justify-between"
                >
                  {/* Massive Background Quote Icon */}
                  <div className="absolute top-6 right-8 text-white/[0.04] font-serif text-[120px] leading-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                    "
                  </div>

                  <div>
                    <div className="flex gap-1 mb-8 text-amber-400 drop-shadow-sm">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    
                    <p className="text-xl md:text-[22px] text-zinc-300 font-medium leading-relaxed mb-10 relative z-10">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                      <span className="font-display font-bold text-white text-xl">{test.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-wide">{test.name}</h4>
                      <p className="text-zinc-400 text-sm font-medium mt-1">
                        <span className="text-primary">{test.prog}</span> • {test.state}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dot indicators */}
        <div className="flex justify-center gap-3 mt-8 md:hidden">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${activeSlide === i ? "w-8 h-2 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
