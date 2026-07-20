"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    state: "Maharashtra",
    prog: "PMKVY IT Training",
    quote: "The training I received changed my life completely. I went from being unemployed for 2 years to securing a job at a top tech firm within 3 months of graduation.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Priya Mehta",
    state: "Gujarat",
    prog: "Women Digital Literacy",
    quote: "Skillionaires gave me the confidence and skills to start my own digital services business. Their trainers are patient, supportive, and deeply knowledgeable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Amit Kumar",
    state: "Rajasthan",
    prog: "Retail Management",
    quote: "Practical, hands-on training that actually matches what the industry needs. The placement support was excellent — I had 3 job offers before I even finished.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Sneha Reddy",
    state: "Telangana",
    prog: "Healthcare Assistant",
    quote: "The practical labs and hospital visits during the training were incredible. I felt completely prepared on my first day of work at the clinic.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Vikram Singh",
    state: "Punjab",
    prog: "Solar Technician",
    quote: "Renewable energy is the future, and this course gave me the technical skills to start my own installation business. Truly empowering experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Ananya Patel",
    state: "Karnataka",
    prog: "Financial Literacy",
    quote: "Not only did I learn how to manage my small business finances, but I also learned how to access micro-loans. My business has doubled in revenue.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces"
  }
];

// Split testimonials into two rows
const topRow = testimonials.slice(0, 3);
const bottomRow = testimonials.slice(3, 6);

export function TestimonialsSection() {
  return (
    <section className="pt-12 pb-12 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
      {/* Background Accents with Animation */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-40 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-10 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Abstract Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm uppercase tracking-widest">Success Stories</span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold text-[#050D1A] tracking-tight">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Impact</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container with Left/Right Fade */}
      <div
        className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* Top Row - Moves Left to Right */}
        <div
          className="flex w-max gap-6 hover:[animation-play-state:paused] transition-all"
          style={{ animation: "marquee-reverse 35s linear infinite" }}
        >
          {[...topRow, ...topRow, ...topRow].map((test, idx) => (
            <TestimonialCard key={`top-${idx}`} test={test} />
          ))}
        </div>

        {/* Bottom Row - Moves Right to Left */}
        <div
          className="flex w-max gap-6 hover:[animation-play-state:paused] transition-all"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {[...bottomRow, ...bottomRow, ...bottomRow].map((test, idx) => (
            <TestimonialCard key={`bottom-${idx}`} test={test} />
          ))}
        </div>
      </div>

      {/* Inline styles for the reverse marquee animation since it might not be in tailwind config */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        `
      }} />
    </section>
  );
}

function TestimonialCard({ test }: { test: any }) {
  return (
    <div className="relative w-[280px] md:w-[320px] bg-white p-5 md:p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col shrink-0">
      {/* Background Quote Icon */}
      <div className="absolute top-4 right-5 text-zinc-100 font-serif text-[60px] leading-none pointer-events-none transition-colors duration-500">
        "
      </div>

      <div className="flex gap-1 mb-3 text-amber-400 drop-shadow-sm">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>

      <p className="text-sm md:text-base text-zinc-600 font-medium leading-relaxed mb-5 relative z-10 flex-grow line-clamp-4">
        "{test.quote}"
      </p>

      <div className="flex items-center gap-4 border-t border-zinc-100 pt-4 mt-auto">
        <img
          src={test.image}
          alt={test.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
        />
        <div>
          <h4 className="text-base font-bold text-[#050D1A] tracking-wide">{test.name}</h4>
          <p className="text-zinc-500 text-xs font-medium mt-0.5">
            <span className="text-primary">{test.prog}</span> • {test.state}
          </p>
        </div>
      </div>
    </div>
  );
}
