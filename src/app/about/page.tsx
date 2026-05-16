"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Target, Eye, Heart, Users, Map, Shield, Lightbulb, BookOpen } from "lucide-react";

const tabs = [
  { id: "summary", label: "Summary", icon: BookOpen },
  { id: "vision", label: "Vision", icon: Eye },
  { id: "mission", label: "Mission", icon: Target },
  { id: "objectives", label: "Objectives", icon: Lightbulb },
  { id: "principles", label: "Principles", icon: Shield },
  { id: "area", label: "Area of Concern", icon: Map },
  { id: "strategy", label: "Strategy", icon: ChevronRight },
  { id: "beneficiaries", label: "Target Beneficiaries", icon: Users },
];

const content: Record<string, { heading: string; body: React.ReactNode }> = {
  summary: {
    heading: "Who We Are",
    body: (
      <div className="space-y-6 text-secondary/80 leading-relaxed text-lg">
        <p>
          <strong className="text-secondary">Skillionaires</strong> is the flagship skill development initiative of{" "}
          <strong className="text-primary">Indianeers Media Private Limited</strong>, a company committed to building
          India's future workforce through quality vocational training, industry linkages, and community-based
          empowerment programs.
        </p>
        <p>
          Established with the mandate of "Skilling India's Future," Skillionaires operates at the intersection of
          government policy, corporate responsibility, and grassroots action — bridging the gap between aspiration and
          employability for millions of young Indians.
        </p>
        <p>
          Our approach combines rigorous training methodologies with sector-specific industry partnerships, ensuring
          that every beneficiary emerges not just trained, but truly employable — equipped with skills the market
          demands today and the adaptability to grow tomorrow.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-4">
          {[
            { label: "Founded", value: "2020" },
            { label: "States Active", value: "15+" },
            { label: "Beneficiaries", value: "10,000+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-light rounded-xl p-4 text-center border border-border">
              <div className="font-mono text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-secondary/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  vision: {
    heading: "Our Vision",
    body: (
      <div className="space-y-8">
        <div className="relative p-8 bg-secondary rounded-2xl text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <blockquote className="relative z-10 text-2xl md:text-3xl font-display font-bold leading-snug">
            "To be India's most trusted partner in creating a skilled, self-reliant, and globally competitive
            workforce — one community at a time."
          </blockquote>
        </div>
        <p className="text-lg text-secondary/80 leading-relaxed">
          We envision an India where no young person is held back by a lack of skills. Where rural youth have the
          same opportunities as urban counterparts. Where women enter the workforce with confidence. Where persons
          with disabilities are not excluded from economic participation. This is the India we are building toward —
          one training batch at a time.
        </p>
        <p className="text-lg text-secondary/80 leading-relaxed">
          Our vision is anchored in the national ambition of <strong className="text-secondary">Viksit Bharat 2047</strong> — a
          developed, inclusive India where skill is a universal currency and employment a universal right.
        </p>
      </div>
    ),
  },
  mission: {
    heading: "Our Mission",
    body: (
      <div className="space-y-6">
        <p className="text-lg text-secondary/80 leading-relaxed">
          To deliver quality, industry-aligned skill training programs that create meaningful employment pathways
          for underserved communities across India — with measurable impact, full compliance, and compassionate
          execution.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Provide demand-driven, sector-specific vocational training",
            "Ensure minimum 70% placement for every training batch",
            "Empower women, rural youth, and persons with disabilities",
            "Strengthen employer-trainee linkages across 15+ states",
            "Deliver government scheme implementation with full compliance",
            "Build a sustainable ecosystem for lifelong skill development",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-light rounded-xl border border-border">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <ChevronRight className="text-white" size={14} />
              </div>
              <p className="text-secondary/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  objectives: {
    heading: "Strategic Objectives",
    body: (
      <div className="space-y-4">
        {[
          {
            num: "01",
            title: "Scale Quality Training",
            desc: "Expand training capacity to 50,000 beneficiaries annually by 2027 through decentralized Training Center networks.",
          },
          {
            num: "02",
            title: "Deepen Industry Integration",
            desc: "Formalize 200+ employer partnerships for guaranteed placement pipelines across high-demand sectors.",
          },
          {
            num: "03",
            title: "Inclusive Outreach",
            desc: "Ensure 40% of all trainees are women, and actively enroll persons with disabilities in dedicated batches.",
          },
          {
            num: "04",
            title: "Technology-Enabled Delivery",
            desc: "Deploy blended learning models — combining classroom training with digital and simulation-based skill labs.",
          },
          {
            num: "05",
            title: "Compliance Excellence",
            desc: "Maintain NSQF alignment, third-party assessment, and full SDMS reporting discipline across all programs.",
          },
        ].map((obj) => (
          <div key={obj.num} className="flex gap-6 p-6 bg-white rounded-2xl border border-border shadow-sm">
            <div className="font-mono text-4xl font-bold text-primary/20 shrink-0">{obj.num}</div>
            <div>
              <h3 className="text-xl font-display font-bold text-secondary mb-2">{obj.title}</h3>
              <p className="text-secondary/70">{obj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  principles: {
    heading: "Our Core Principles",
    body: (
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: Heart,
            title: "Empathy First",
            desc: "Every program is designed around the needs of the beneficiary — not just the funders. We listen, adapt, and serve.",
          },
          {
            icon: Shield,
            title: "Integrity in Execution",
            desc: "Zero tolerance for misreporting. Our compliance standards exceed regulatory requirements across all government programs.",
          },
          {
            icon: Target,
            title: "Outcome Obsession",
            desc: "Training without placement is incomplete. Every batch is measured by employment outcomes, not just completion rates.",
          },
          {
            icon: Users,
            title: "Community Ownership",
            desc: "We co-design programs with local communities, ensuring cultural relevance and long-term sustainability.",
          },
          {
            icon: Lightbulb,
            title: "Continuous Innovation",
            desc: "Regularly updating curricula to stay ahead of industry trends, automation shifts, and emerging job roles.",
          },
          {
            icon: Map,
            title: "Inclusive Reach",
            desc: "Prioritizing Tier-3 towns, tribal districts, and underserved geographies where government schemes are underutilized.",
          },
        ].map((p, i) => (
          <div key={i} className="p-6 bg-light rounded-2xl border border-border group hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <p.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-secondary mb-2">{p.title}</h3>
            <p className="text-secondary/70 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  area: {
    heading: "Areas of Concern",
    body: (
      <div className="space-y-6">
        <p className="text-lg text-secondary/80 leading-relaxed">
          Skillionaires addresses the structural skill gaps that prevent India's most vulnerable citizens from
          accessing economic opportunity:
        </p>
        {[
          {
            title: "Youth Unemployment",
            desc: "India's youth unemployment rate remains high despite GDP growth. Skillionaires bridges the gap between education and employment with job-ready vocational training.",
            color: "border-primary",
          },
          {
            title: "Women's Workforce Exclusion",
            desc: "Social barriers and lack of domain-specific training leave millions of women outside the formal workforce. Our women-centric programs address this directly.",
            color: "border-accent",
          },
          {
            title: "Rural Skill Deficit",
            desc: "Quality training infrastructure is concentrated in cities. We build distributed Training Centers in semi-urban and rural geographies where the need is greatest.",
            color: "border-gold",
          },
          {
            title: "Disability Inclusion",
            desc: "Persons with disabilities are systematically excluded from skill programs. Our adapted curricula and accessible centers are designed to change that.",
            color: "border-primary",
          },
          {
            title: "School Dropout Recovery",
            desc: "A significant segment of India's youth drops out before Class 10. Our livelihood programs create second-chance pathways to economic dignity.",
            color: "border-accent",
          },
        ].map((area, i) => (
          <div key={i} className={`p-6 bg-white rounded-2xl border-l-4 ${area.color} shadow-sm`}>
            <h3 className="text-xl font-display font-bold text-secondary mb-2">{area.title}</h3>
            <p className="text-secondary/70">{area.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  strategy: {
    heading: "Our Approach & Strategy",
    body: (
      <div className="space-y-8">
        <p className="text-lg text-secondary/80 leading-relaxed">
          Skillionaires follows a proven 5-phase implementation model designed for scalability, compliance, and
          measurable impact:
        </p>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          {[
            { phase: "01", title: "Mobilization & Awareness", desc: "Community outreach, beneficiary identification, and counseling. Targeted campaigns in schools, panchayats, and self-help groups." },
            { phase: "02", title: "Enrollment & Profiling", desc: "Digital enrollment, eligibility verification, batch formation, and baseline assessment. Full SDMS integration from Day 1." },
            { phase: "03", title: "Training Delivery", desc: "NSQF-aligned curriculum, certified trainers, theory + practical ratio of 30:70. Biometric attendance, CCTV monitoring, and daily reporting." },
            { phase: "04", title: "Assessment & Certification", desc: "Third-party assessment by NSDC-empanelled bodies. Sector Skills Council certification. Evaluation of both technical and soft skills." },
            { phase: "05", title: "Placement & Post-Placement", desc: "Job fairs, employer liaison, interview preparation. 90-day post-placement tracking and support for employer retention." },
          ].map((step, i) => (
            <div key={i} className="relative flex gap-8 pl-16 pb-8 last:pb-0">
              <div className="absolute left-5 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-mono text-xs font-bold shrink-0">
                {i + 1}
              </div>
              <div className="bg-light rounded-2xl p-6 border border-border w-full">
                <div className="text-xs font-mono text-primary mb-1">PHASE {step.phase}</div>
                <h3 className="text-lg font-display font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  beneficiaries: {
    heading: "Target Beneficiaries",
    body: (
      <div className="space-y-6">
        <p className="text-lg text-secondary/80 leading-relaxed">
          Our programs are specifically designed for India's most underserved citizens — those who have the
          potential but lack the pathway:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { group: "Unemployed Youth (18-35)", details: "School passouts, graduates without employment, first-time job seekers from Tier-2/3 towns", share: "45%" },
            { group: "Rural Women", details: "Women from BPL households, self-help group members, homemakers seeking economic independence", share: "25%" },
            { group: "School Dropouts", details: "Youth who left education before Class 10, seeking livelihood skills through short-duration courses", share: "15%" },
            { group: "Persons with Disabilities", details: "Differently-abled youth seeking adapted, accessible vocational training and employment support", share: "8%" },
            { group: "Migrant Workers", details: "Returnee migrant workers seeking new skills or formalization of existing craft competencies", share: "7%" },
          ].map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-display font-bold text-secondary">{b.group}</h3>
                <div className="font-mono text-primary text-xl font-bold">{b.share}</div>
              </div>
              <p className="text-sm text-secondary/70 leading-relaxed">{b.details}</p>
              <div className="mt-4 h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: b.share }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_#FF6B00_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm mb-3 uppercase tracking-widest"
          >
            About Skillionaires
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
          >
            Who We Are &<br />Why We Exist
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <aside className="lg:w-64 shrink-0">
            <nav className="space-y-1 lg:sticky lg:top-24">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    data-testid={`tab-${tab.id}`}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-sm"
                        : "text-secondary/70 hover:bg-white hover:text-secondary"
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8">
                  {content[activeTab].heading}
                </h2>
                {content[activeTab].body}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
