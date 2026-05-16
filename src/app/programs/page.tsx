"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Heart, Briefcase, GraduationCap, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "government",
    icon: Building2,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    title: "Government Programs",
    subtitle: "Central & State Scheme Implementation",
    description:
      "Skillionaires is an empanelled Training Partner for India's flagship skill development schemes. We deliver end-to-end program implementation — from mobilization to post-placement tracking — with full SDMS compliance and third-party assessment.",
    schemes: [
      {
        name: "PMKVY (PM Kaushal Vikas Yojana)",
        desc: "Short-term skill training for youth across 20+ job roles in high-demand sectors. Batch sizes of 30, assessment & certification by Sector Skills Councils.",
        sectors: ["Construction", "Electronics", "Retail", "Healthcare", "IT-ITeS"],
      },
      {
        name: "DDU-GKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana)",
        desc: "Rural youth placement-linked skill training. 100% residential or day-scholar models. Guaranteed placement with 6-month post-placement support.",
        sectors: ["Apparel", "Food Processing", "Security", "Hospitality", "Banking"],
      },
      {
        name: "NULM (National Urban Livelihoods Mission)",
        desc: "Urban poverty alleviation through skill training and self-employment support for youth from urban slums and low-income households.",
        sectors: ["Beauty & Wellness", "BFSI", "Automotive", "Logistics", "Telecom"],
      },
      {
        name: "PM Vishwakarma Yojana",
        desc: "Skill upgradation for traditional artisans and craftspersons. Recognition of Prior Learning (RPL) + new skill training for 18 traditional trades.",
        sectors: ["Carpentry", "Blacksmithy", "Pottery", "Weaving", "Sculpture"],
      },
    ],
  },
  {
    id: "csr",
    icon: Heart,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    title: "CSR Projects",
    subtitle: "Corporate Social Responsibility Partnerships",
    description:
      "Partnering with India's leading corporations to design and deliver impactful skill development initiatives under their CSR mandate. We bring implementation expertise, compliance rigor, and reporting transparency to every corporate partnership.",
    schemes: [
      {
        name: "Women Empowerment Programs",
        desc: "Self-help group skill training, women-owned enterprise development, and financial literacy programs for women from BPL households.",
        sectors: ["Tailoring", "Food Processing", "Beauty & Wellness", "BFSI", "Handicrafts"],
      },
      {
        name: "Digital Literacy Initiatives",
        desc: "Basic digital skills, smartphone literacy, online payment platforms, and digital entrepreneurship for rural and semi-urban youth.",
        sectors: ["IT Basics", "E-commerce", "Digital Payments", "Social Media Marketing"],
      },
      {
        name: "Tribal Community Skilling",
        desc: "Culturally adapted skill programs for tribal communities. Leveraging traditional knowledge while adding modern employability dimensions.",
        sectors: ["Forest Products", "Weaving", "Pottery", "Eco-tourism", "Agriculture Tech"],
      },
      {
        name: "Disability Inclusion Programs",
        desc: "Adapted vocational training for persons with disabilities. Accessible training infrastructure, adapted assessments, and dedicated employer outreach.",
        sectors: ["Data Entry", "Accounting", "Tailoring", "Candle Making", "Jewelry Design"],
      },
    ],
  },
  {
    id: "industry",
    icon: Briefcase,
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
    title: "Industry Programs",
    subtitle: "Employer-Led Skill Development",
    description:
      "Direct industry-sponsored training programs where employers define the job roles, co-create the curriculum, and commit to hiring trained candidates. This model delivers the highest placement rates in the skilling ecosystem.",
    schemes: [
      {
        name: "Sector-Specific Training Programs",
        desc: "Customized training programs built around specific employer requirements. Industry trainers, factory visits, and assured placement on completion.",
        sectors: ["Manufacturing", "IT-ITeS", "BFSI", "Healthcare", "Retail"],
      },
      {
        name: "Apprenticeship Programs",
        desc: "National Apprenticeship Promotion Scheme (NAPS) implementation. 3-12 month apprenticeships with stipend, formal OJT, and certification.",
        sectors: ["Engineering", "Auto Components", "Textiles", "Food Processing"],
      },
      {
        name: "Upskilling & Reskilling",
        desc: "Workforce upskilling programs for existing employees. Industry 4.0 skills, supervisory skills, and leadership development for frontline workers.",
        sectors: ["All sectors — customized"],
      },
      {
        name: "Campus-to-Corporate Programs",
        desc: "Final-year student placement readiness: communication skills, aptitude training, domain knowledge, and employer-specific bootcamps.",
        sectors: ["ITI", "Polytechnic", "Degree College"],
      },
    ],
  },
  {
    id: "institutional",
    icon: GraduationCap,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    title: "Institutional Programs",
    subtitle: "School, College & Institution Partnerships",
    description:
      "Embedding vocational skills within India's education institutions. From NSQF-aligned school labs to college incubation centers, we integrate skill development into the mainstream education pipeline.",
    schemes: [
      {
        name: "School Skill Labs",
        desc: "Turn-key skill lab setup and curriculum delivery in government and private schools. NSQF Level 1-4 vocational subjects integrated with Class 9-12 timetable.",
        sectors: ["IT", "Beauty", "Agriculture", "Healthcare", "Retail"],
      },
      {
        name: "College Skill Development Centers",
        desc: "Standalone skill development centers on college campuses. Industry-linked courses, certification, and placement support for degree students.",
        sectors: ["All sectors"],
      },
      {
        name: "ITI Strengthening Programs",
        desc: "Curriculum upgrade, trainer development, and industry linkage programs for Industrial Training Institutes under PPP models.",
        sectors: ["Engineering Trades", "Non-Engineering Trades"],
      },
      {
        name: "Polytechnic Integration",
        desc: "Emerging technology skill programs integrated with polytechnic diplomas: robotics, IoT, renewable energy, and advanced manufacturing.",
        sectors: ["Electronics", "Mechanical", "Civil", "Computer Science"],
      },
    ],
  },
];

export default function Programs() {
  const [active, setActive] = useState("government");
  const program = programs.find((p) => p.id === active)!;
  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,_#FF6B00_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-primary font-mono text-sm mb-3 uppercase tracking-widest">What We Do</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Our Programs
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Four pillars of skill development — government schemes, corporate responsibility, industry partnerships,
            and institutional integration.
          </p>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="bg-white border-b border-border sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {programs.map((p) => {
              const PIcon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  data-testid={`program-tab-${p.id}`}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    active === p.id ? "bg-secondary text-white" : "text-secondary/60 hover:text-secondary hover:bg-light"
                  }`}
                >
                  <PIcon size={16} />
                  {p.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className={`p-8 rounded-3xl border ${program.border} ${program.bg} mb-10`}>
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl ${program.bg} border ${program.border} flex items-center justify-center shrink-0`}>
                  <Icon className={program.color} size={32} />
                </div>
                <div>
                  <p className={`font-mono text-xs uppercase tracking-widest ${program.color} mb-1`}>
                    {program.subtitle}
                  </p>
                  <h2 className="text-3xl font-display font-bold text-secondary mb-3">{program.title}</h2>
                  <p className="text-secondary/70 text-lg leading-relaxed max-w-3xl">{program.description}</p>
                </div>
              </div>
            </div>

            {/* Scheme Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {program.schemes.map((scheme, i) => (
                <motion.div
                  key={scheme.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                  data-testid={`scheme-card-${i}`}
                >
                  <h3 className="text-lg font-display font-bold text-secondary mb-3">{scheme.name}</h3>
                  <p className="text-secondary/70 text-sm leading-relaxed mb-4">{scheme.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {scheme.sectors.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 bg-light rounded-full text-secondary/60 border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-secondary rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-display font-bold text-xl mb-1">
                  Interested in partnering with us?
                </h3>
                <p className="text-white/60 text-sm">
                  Reach out to discuss how Skillionaires can support your program goals.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                data-testid="link-contact-cta"
              >
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
