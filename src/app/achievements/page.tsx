"use client";
import { motion } from "framer-motion";
import { Award, Star, Users, Building, TrendingUp, Shield, Globe } from "lucide-react";

const awards = [
  { title: "NSDC Empanelled Partner", year: "2021", category: "Government", icon: Shield },
  { title: "MSDE Certified Training Partner", year: "2021", category: "Government", icon: Shield },
  { title: "ISO 9001:2015 Certified", year: "2022", category: "Quality", icon: Star },
  { title: "CSR Excellence Award", year: "2023", category: "Industry", icon: Award },
  { title: "FICCI Skill Champion Award", year: "2023", category: "Industry", icon: Award },
  { title: "State Skill Mission Partner — Maharashtra", year: "2022", category: "Government", icon: Building },
  { title: "State Skill Mission Partner — Gujarat", year: "2022", category: "Government", icon: Building },
  { title: "Best Training Partner — DDU-GKY West Zone", year: "2023", category: "Government", icon: Award },
  { title: "Women Empowerment Initiative Award", year: "2023", category: "Social Impact", icon: Users },
  { title: "Digital India Skilling Partner", year: "2023", category: "Technology", icon: Globe },
  { title: "Skill India Mission Registered Partner", year: "2020", category: "Government", icon: Shield },
  { title: "PMKVY Training Partner — Multiple States", year: "2021", category: "Government", icon: Building },
];

const affiliations = [
  { name: "NSDC", full: "National Skill Development Corporation", logo: "N" },
  { name: "MSDE", full: "Ministry of Skill Development & Entrepreneurship", logo: "M" },
  { name: "FICCI", full: "Federation of Indian Chambers of Commerce & Industry", logo: "F" },
  { name: "CII", full: "Confederation of Indian Industry", logo: "C" },
  { name: "ASSOCHAM", full: "Associated Chambers of Commerce of India", logo: "A" },
  { name: "SSC NASSCOM", full: "National Association of Software & Services Companies", logo: "N" },
];

const impactStats = [
  { value: "10,247", label: "Beneficiaries Trained", change: "+34% YoY", icon: Users },
  { value: "82%", label: "Placement Rate", change: "Industry avg: 65%", icon: TrendingUp },
  { value: "15", label: "States Covered", change: "Expanding to 20+", icon: Globe },
  { value: "120+", label: "Training Centers", change: "Across Tier 2 & 3 cities", icon: Building },
  { value: "50+", label: "Industry Partners", change: "Committed hiring partners", icon: Building },
  { value: "40%", label: "Women Beneficiaries", change: "Above national average", icon: Users },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_80%,_#F5A623_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-gold font-mono text-sm mb-3 uppercase tracking-widest">Recognition & Impact</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Our Achievements
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Recognized by government bodies, industry associations, and communities we serve.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Impact Numbers */}
        <section>
          <div className="mb-10">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">By the Numbers</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Measured Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {impactStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white p-6 rounded-2xl border border-border shadow-sm"
                  data-testid={`stat-card-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="font-mono text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-secondary/80 mb-2">{stat.label}</div>
                  <div className="text-xs text-accent font-medium">{stat.change}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Awards Masonry Grid */}
        <section>
          <div className="mb-10">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Recognition</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Awards & Certifications</h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="break-inside-avoid bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-gold/30 transition-all"
                  data-testid={`award-card-${i}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">
                        {award.year} · {award.category}
                      </div>
                      <h3 className="text-base font-display font-bold text-secondary">{award.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Affiliations */}
        <section>
          <div className="mb-10">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Partners & Bodies</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Key Affiliations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {affiliations.map((aff, i) => (
              <motion.div
                key={aff.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm flex items-center gap-4 hover:border-primary/30 transition-colors"
                data-testid={`affiliation-card-${i}`}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary text-white flex items-center justify-center font-display font-bold text-2xl shrink-0">
                  {aff.logo}
                </div>
                <div>
                  <div className="font-display font-bold text-secondary text-lg">{aff.name}</div>
                  <div className="text-xs text-secondary/50 leading-tight mt-0.5">{aff.full}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sector Coverage Bar Chart */}
        <section>
          <div className="mb-10">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Sector Analysis</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Training by Sector</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
            <div className="space-y-5">
              {[
                { sector: "IT-ITeS & Electronics", percent: 28, count: "2,869 trainees" },
                { sector: "Construction & Infrastructure", percent: 22, count: "2,254 trainees" },
                { sector: "Retail & Hospitality", percent: 18, count: "1,844 trainees" },
                { sector: "Healthcare & Beauty", percent: 14, count: "1,435 trainees" },
                { sector: "BFSI & Accounts", percent: 10, count: "1,025 trainees" },
                { sector: "Agriculture & Allied", percent: 8, count: "820 trainees" },
              ].map((row, i) => (
                <div key={row.sector} data-testid={`sector-row-${i}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-secondary">{row.sector}</span>
                    <span className="text-xs font-mono text-primary">{row.count}</span>
                  </div>
                  <div className="h-3 bg-light rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
