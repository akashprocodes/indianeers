"use client";
import { motion } from "framer-motion";
import { ArrowRight, Target, Leaf, Zap, Globe, Users, BookOpen } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Target,
    number: "01",
    title: "Skill at Scale",
    description:
      "Reach 1 million beneficiaries by 2030 through a federated network of community-based Training Centers across every district in India.",
    metric: "1M beneficiaries by 2030",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    number: "02",
    title: "Future-Ready Skills",
    description:
      "Anticipate Industry 4.0 disruptions — AI, green energy, biotechnology, advanced manufacturing — and prepare India's workforce for the jobs of 2035.",
    metric: "50+ emerging job roles by 2027",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Users,
    number: "03",
    title: "Inclusive Growth",
    description:
      "Ensure no community is left behind. Dedicated programs for tribal populations, persons with disabilities, and women-headed households.",
    metric: "50% women, 15% tribal beneficiaries",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Globe,
    number: "04",
    title: "Global Mobility",
    description:
      "Align skill certifications with international standards to enable global placement — positioning India as the world's leading supplier of skilled labor.",
    metric: "5,000+ international placements by 2028",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Leaf,
    number: "05",
    title: "Green Skills",
    description:
      "Lead India's transition to a green economy through training in renewable energy, sustainable agriculture, circular economy, and environmental management.",
    metric: "20% batches in green job roles by 2026",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: BookOpen,
    number: "06",
    title: "Lifelong Learning",
    description:
      "Build continuous upskilling infrastructure — credit frameworks, micro-credentials, and Recognition of Prior Learning — for workers across their career lifecycle.",
    metric: "RPL certification for 200,000 workers",
    color: "text-gold",
    bg: "bg-gold/10",
  },
];

const sdgs = [
  { num: "4", title: "Quality Education", desc: "NSQF-aligned, learner-centered skill training" },
  { num: "8", title: "Decent Work", desc: "Placement-linked training with dignified employment" },
  { num: "10", title: "Reduced Inequalities", desc: "Priority outreach to marginalized communities" },
  { num: "5", title: "Gender Equality", desc: "Women-centric programs and safe workplace advocacy" },
  { num: "17", title: "Partnerships", desc: "Government, industry, and civil society collaboration" },
  { num: "9", title: "Industry & Innovation", desc: "Industry 4.0 readiness in all curricula" },
];

const timeline = [
  { year: "2024", milestone: "Expand to 20 states; launch 500 new Training Centers" },
  { year: "2025", milestone: "Launch Green Skills vertical; reach 50,000 annual trainees" },
  { year: "2026", milestone: "International placement partnerships; global skill certification launch" },
  { year: "2027", milestone: "1,000 Training Centers operational; 200,000 cumulative beneficiaries" },
  { year: "2030", milestone: "1 million beneficiaries trained; India's premier skill development organization" },
  { year: "2047", milestone: "Cornerstone of Viksit Bharat — a fully skilled, globally mobile workforce" },
];

export default function WayForward() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero — Editorial Cinematic */}
      <div className="bg-secondary min-h-[70vh] pt-32 pb-20 relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          {/* Diagonal split overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"
            style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)" }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">Viksit Bharat 2047</p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
              >
                Our Contribution to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
                  A Developed India
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
              >
                By 2047, when India celebrates its centenary of independence, Skillionaires envisions a nation where
                every citizen has access to quality skills, dignified employment, and pathways to prosperity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <a href="#pillars" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Our 6 Pillars <ArrowRight size={16} />
                </a>
                <Link href="/contact" className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  Partner With Us
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "1M+", label: "Target Beneficiaries by 2030" },
                { value: "20+", label: "States by 2025" },
                { value: "2047", label: "Viksit Bharat Vision Year" },
                { value: "50+", label: "Future Job Roles" },
                { value: "5K+", label: "Global Placements" },
                { value: "200K", label: "RPL Certifications" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="bg-white/10 rounded-2xl p-4 text-center border border-white/10"
                >
                  <div className="font-mono text-xl font-bold text-primary">{s.value}</div>
                  <div className="text-white/50 text-xs mt-1 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* 6 Pillars */}
        <section id="pillars">
          <div className="mb-12 text-center">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Strategic Framework</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary">6 Pillars of Our Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                  data-testid={`pillar-card-${i}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center`}>
                      <Icon className={pillar.color} size={24} />
                    </div>
                    <span className={`font-mono text-4xl font-bold ${pillar.color} opacity-20`}>{pillar.number}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary mb-3">{pillar.title}</h3>
                  <p className="text-secondary/70 text-sm leading-relaxed mb-4">{pillar.description}</p>
                  <div className={`text-xs font-semibold ${pillar.color} ${pillar.bg} px-3 py-2 rounded-lg inline-block`}>
                    {pillar.metric}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 2047 Timeline */}
        <section>
          <div className="mb-12">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Journey to 2047</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-gold ml-4 md:ml-1/2" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 pl-12 md:pl-0 md:even:flex-row-reverse relative"
                  data-testid={`timeline-item-${item.year}`}
                >
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                      <div className="font-mono text-primary font-bold text-lg mb-1">{item.year}</div>
                      <p className="text-secondary/80 text-sm leading-relaxed">{item.milestone}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section>
          <div className="mb-12">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">UN Sustainable Development Goals</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">SDG Alignment</h2>
            <p className="text-secondary/60 mt-3 max-w-2xl">
              Skillionaires' work directly contributes to India's commitment to the UN Sustainable Development Goals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sdgs.map((sdg, i) => (
              <motion.div
                key={sdg.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all"
                data-testid={`sdg-card-${sdg.num}`}
              >
                <div className="font-mono text-5xl font-bold text-primary/20 mb-3">{sdg.num}</div>
                <h3 className="font-display font-bold text-secondary mb-2">{sdg.title}</h3>
                <p className="text-xs text-secondary/60 leading-relaxed">{sdg.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary blur-3xl" />
            </div>
            <div className="relative z-10">
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Join the Movement</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Be Part of India's<br />Skill Revolution
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                Whether you are a policymaker, corporate leader, educator, or changemaker — there is a role for you
                in building the skilled India of 2047.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="link-way-forward-contact"
                >
                  Partner With Us <ArrowRight size={18} />
                </Link>
                <Link
                  href="/programs"
                  className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                  data-testid="link-way-forward-programs"
                >
                  View Our Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
