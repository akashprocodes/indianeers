"use client";
import { motion } from "framer-motion";
import { MapPin, Users, TrendingUp, Calendar, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    project: "DDU-GKY — Maharashtra Batch 2022–23",
    tag: "Government Program",
    tagColor: "bg-primary/10 text-primary",
    state: "Maharashtra",
    sector: "IT-ITeS & BPO",
    trainees: 480,
    placement: "87%",
    duration: "6 months",
    partner: "Pune Municipal Corporation & SIRD Maharashtra",
    highlight: true,
    description:
      "End-to-end implementation of 8 training batches across Pune, Nashik, and Aurangabad under the DDU-GKY scheme. Trained 480 rural youth in Data Entry, Customer Support, and Basic IT — achieving an 87% placement rate against a 70% mandated target.",
    outcomes: [
      "418 of 480 trainees placed in formal employment",
      "Average starting salary: ₹12,400/month",
      "38% women beneficiaries across all batches",
      "100% SDMS compliance maintained throughout",
      "Zero grievance complaints in program duration",
    ],
  },
  {
    project: "Women Digital Literacy — ICICI Foundation CSR",
    tag: "CSR Project",
    tagColor: "bg-accent/10 text-accent",
    state: "Rajasthan & Gujarat",
    sector: "Digital Literacy",
    trainees: 320,
    placement: "76%",
    duration: "3 months",
    partner: "ICICI Foundation for Inclusive Growth",
    highlight: false,
    description:
      "Digital literacy and e-commerce entrepreneurship training for women from rural BPL households in Rajasthan and Gujarat. The program created 243 digital entrepreneurs selling handcraft products on online marketplaces.",
    outcomes: [
      "243 women trained in smartphone, internet, and e-commerce basics",
      "128 women registered sellers on Flipkart/Meesho within 3 months",
      "Average monthly income increase: ₹4,200",
      "92% participant satisfaction rate",
      "Program expanded to 2 additional states in 2024",
    ],
  },
  {
    project: "PMKVY 3.0 — UP Cluster (2022–23)",
    tag: "Government Program",
    tagColor: "bg-primary/10 text-primary",
    state: "Uttar Pradesh",
    sector: "Construction & Beauty",
    trainees: 650,
    placement: "79%",
    duration: "3 months",
    partner: "NSDC + State Skill Development Mission UP",
    highlight: false,
    description:
      "Multi-sector PMKVY implementation across 15 districts of Eastern UP — one of India's most underserved skill geographies. Batches in Construction Painter, Housekeeping Supervisor, and Beauty & Wellness job roles.",
    outcomes: [
      "514 of 650 trainees placed across 40+ employers",
      "12 Training Centers operationalized from ground up",
      "First-ever female construction workers batch in Gorakhpur",
      "Award for Best Batch Completion Rate by SSC",
      "98.3% biometric attendance record across all batches",
    ],
  },
  {
    project: "Tribal Skill Mission — Odisha",
    tag: "Special Project",
    tagColor: "bg-gold/10 text-gold",
    state: "Odisha",
    sector: "Traditional Crafts & Agri",
    trainees: 180,
    placement: "68%",
    duration: "4 months",
    partner: "Odisha Tribal Development Society",
    highlight: false,
    description:
      "A culturally adapted skilling program for Scheduled Tribe youth in remote tribal blocks of Odisha's Koraput district. Program integrated traditional bamboo craft skills with market linkages and e-commerce readiness.",
    outcomes: [
      "180 tribal youth trained in Bamboo Craft + Digital Market Linkage",
      "FPO created with 45 producers selling via Amazon Local Finds",
      "68% trainees earning above minimum wage within 6 months",
      "Program recognized by TRIFED as model for tribal skilling",
      "Replicated in 3 additional tribal districts in 2024",
    ],
  },
  {
    project: "Campus-to-Corporate — HCL Technologies Partnership",
    tag: "Industry Program",
    tagColor: "bg-secondary/10 text-secondary",
    state: "Tamil Nadu & Karnataka",
    sector: "IT & Software",
    trainees: 240,
    placement: "93%",
    duration: "45 days",
    partner: "HCL Technologies Limited",
    highlight: true,
    description:
      "A high-intensity pre-placement bootcamp for final-year engineering students in Chennai and Bengaluru, co-designed with HCL's HR and technical teams. 93% of graduates received placement offers at HCL or partner firms.",
    outcomes: [
      "224 of 240 students placed — 93% placement rate",
      "Average package offered: ₹4.2 LPA",
      "10 students selected for HCL's elite Freshers program",
      "Program now a permanent HCL CSR commitment",
      "Batch 2 initiated with 350 students in 2024",
    ],
  },
  {
    project: "Disability Inclusion Skill Training — Mumbai",
    tag: "Special Project",
    tagColor: "bg-gold/10 text-gold",
    state: "Maharashtra",
    sector: "BFSI & Data Entry",
    trainees: 90,
    placement: "72%",
    duration: "3 months",
    partner: "National Handicapped Finance & Development Corporation",
    highlight: false,
    description:
      "India's first urban disability-inclusive skill training program with fully accessible Training Centers, screen-reader equipped labs, and sign-language certified trainers. Partnered with 8 financial sector employers for placement.",
    outcomes: [
      "65 of 90 persons with disabilities placed in formal employment",
      "All Training Centers RPWD Act 2016 compliant",
      "Certified trainers for 4 types of disabilities",
      "72% placement rate vs. 35% national average for PWD skilling",
      "Featured in MSDE Annual Report 2023 as model program",
    ],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_20%,_#FF6B00_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-primary font-mono text-sm mb-3 uppercase tracking-widest">Case Studies</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Our Work
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Real programs, real outcomes. From tribal communities in Odisha to corporate campuses in Bengaluru —
            here is how we have delivered impact across India.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Highlight Projects */}
        <div className="mb-6">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Featured Projects</p>
          <h2 className="text-3xl font-display font-bold text-secondary">Flagship Initiatives</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {caseStudies
            .filter((cs) => cs.highlight)
            .map((cs, i) => (
              <motion.div
                key={cs.project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg transition-all"
                data-testid={`featured-case-${i}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cs.tagColor}`}>{cs.tag}</span>
                  <div className="flex items-center gap-1 text-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-mono font-bold">Featured</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-secondary mb-2">{cs.project}</h3>
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-secondary/60">
                  <span className="flex items-center gap-1"><MapPin size={11} /> {cs.state}</span>
                  <span className="flex items-center gap-1"><Users size={11} /> {cs.trainees} trainees</span>
                  <span className="flex items-center gap-1"><TrendingUp size={11} /> {cs.placement} placed</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {cs.duration}</span>
                </div>
                <p className="text-secondary/70 text-sm leading-relaxed mb-5">{cs.description}</p>
                <div className="space-y-2">
                  {cs.outcomes.slice(0, 3).map((o) => (
                    <div key={o} className="flex gap-2 text-xs text-secondary/70">
                      <ArrowRight className="text-accent shrink-0 mt-0.5" size={12} />
                      {o}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* All Projects */}
        <div className="mb-6">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">All Projects</p>
          <h2 className="text-3xl font-display font-bold text-secondary">Project Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies
            .filter((cs) => !cs.highlight)
            .map((cs, i) => (
              <motion.div
                key={cs.project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                data-testid={`case-card-${i}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cs.tagColor}`}>{cs.tag}</span>
                  <span className="font-mono text-sm font-bold text-accent">{cs.placement}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-secondary mb-2">{cs.project}</h3>
                <div className="flex flex-wrap gap-2 mb-3 text-xs text-secondary/50">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {cs.state}</span>
                  <span className="flex items-center gap-1"><Users size={10} /> {cs.trainees} trainees</span>
                  <span className="flex items-center gap-1"><Calendar size={10} /> {cs.duration}</span>
                </div>
                <p className="text-secondary/70 text-sm leading-relaxed mb-4">{cs.description}</p>
                <div className="space-y-1.5">
                  {cs.outcomes.slice(0, 2).map((o) => (
                    <div key={o} className="flex gap-2 text-xs text-secondary/60">
                      <ArrowRight className="text-primary shrink-0 mt-0.5" size={11} />
                      {o}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_#FF6B00_0%,_transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Create Impact Together?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Whether you are a government body, corporate, or institution — let us build something meaningful for
              India's workforce.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              data-testid="link-work-contact"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
