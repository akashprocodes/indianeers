"use client";
import { motion } from "framer-motion";
import { Search, ClipboardList, BookOpen, Award, Briefcase, HeartHandshake, ArrowRight } from "lucide-react";

const phases = [
  {
    phase: "01",
    icon: Search,
    title: "Mobilization & Awareness",
    duration: "Weeks 1–2",
    color: "bg-primary",
    lightColor: "bg-primary/10",
    textColor: "text-primary",
    description:
      "Community-level outreach is the foundation of every successful batch. We partner with local stakeholders — panchayat heads, self-help groups, anganwadi workers, and community leaders — to identify potential beneficiaries and build trust.",
    activities: [
      "Village-level awareness campaigns in local language",
      "School and college outreach for youth mobilization",
      "Partnerships with women self-help groups and Mahila Mandals",
      "Disability certificate holders outreach via district NHM offices",
      "Digital outreach via WhatsApp groups and local FM radio",
    ],
    outcome: "Beneficiary pipeline 2× batch capacity to ensure quality selection",
  },
  {
    phase: "02",
    icon: ClipboardList,
    title: "Enrollment & Batch Formation",
    duration: "Week 3",
    color: "bg-secondary",
    lightColor: "bg-secondary/10",
    textColor: "text-secondary",
    description:
      "Rigorous eligibility verification ensures scheme compliance from Day 1. Every beneficiary is enrolled digitally with biometric KYC, bank account seeding, and SDMS profile creation before training commences.",
    activities: [
      "Document verification: Aadhar, bank account, education certificates",
      "SDMS registration and profile creation",
      "Baseline skill assessment and career counseling",
      "Batch allocation based on aptitude, sector preference, and domicile",
      "Guardian consent and training agreement signing",
    ],
    outcome: "Fully compliant batch ready for SDMS reporting from Day 1",
  },
  {
    phase: "03",
    icon: BookOpen,
    title: "Training Delivery",
    duration: "4–6 Months",
    color: "bg-accent",
    lightColor: "bg-accent/10",
    textColor: "text-accent",
    description:
      "Training delivery follows NSQF-aligned curricula developed with Sector Skills Councils. Our certified trainers bring both domain expertise and practical industry experience to the classroom.",
    activities: [
      "Theory:Practical ratio of 30:70 for hands-on competency",
      "Daily biometric attendance via SDMS-integrated devices",
      "CCTV monitoring at all Training Centers",
      "Guest sessions from industry professionals",
      "Soft skills: communication, workplace behavior, financial literacy",
      "Digital literacy as mandatory cross-cutting module",
    ],
    outcome: "90%+ attendance rate across all batches",
  },
  {
    phase: "04",
    icon: Award,
    title: "Assessment & Certification",
    duration: "Final Month",
    color: "bg-gold",
    lightColor: "bg-gold/10",
    textColor: "text-gold",
    description:
      "Third-party assessment ensures objective measurement of skill competency. All assessments are conducted by NSDC-empanelled Assessment Bodies with independent assessors.",
    activities: [
      "Pre-assessment mock tests and practice sessions",
      "Theory and practical assessment by independent assessors",
      "Sector Skills Council certification upon passing",
      "SDMS certification upload within 72 hours",
      "Failed candidates offered supplementary batch enrollment",
    ],
    outcome: "85%+ first-attempt pass rate maintained across all job roles",
  },
  {
    phase: "05",
    icon: Briefcase,
    title: "Placement & Employment",
    duration: "Post-Training Month",
    color: "bg-primary",
    lightColor: "bg-primary/10",
    textColor: "text-primary",
    description:
      "Placement is not a promise — it is a process. Skillionaires maintains dedicated employer relationships across 50+ industry partners to ensure ready employment pipelines for every batch.",
    activities: [
      "Job fair at Training Center with 5–8 employers per event",
      "Resume building and interview preparation workshops",
      "Employer-specific batch profiling and pre-screening",
      "Outstation placement counseling and travel facilitation",
      "Salary negotiation support and offer letter verification",
    ],
    outcome: "82% average placement rate — 17 points above national benchmark",
  },
  {
    phase: "06",
    icon: HeartHandshake,
    title: "Post-Placement Support",
    duration: "3–12 Months After Placement",
    color: "bg-secondary",
    lightColor: "bg-secondary/10",
    textColor: "text-secondary",
    description:
      "Placement is the beginning, not the end. Our post-placement support ensures candidates thrive in their new roles — benefiting both the trainee and the employer.",
    activities: [
      "30-day, 60-day, 90-day telephonic follow-ups with candidates",
      "Employer satisfaction surveys and grievance resolution",
      "SDMS post-placement status updates",
      "Employee retention counseling for candidates facing workplace challenges",
      "Re-placement support for candidates who separate within 3 months",
    ],
    outcome: "74% retention at 6 months (vs. 50% industry average)",
  },
];

export default function Strategy() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_100%,_#00C48C_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-accent font-mono text-sm mb-3 uppercase tracking-widest">How We Work</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Program Implementation
            <br />
            Strategy
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            A proven 6-phase methodology — from community mobilization to post-placement support — built for scale,
            compliance, and measurable outcomes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Strip */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {phases.map((phase) => (
            <div key={phase.phase} className={`p-4 rounded-xl text-center ${phase.lightColor}`}>
              <div className={`font-mono text-xs font-bold ${phase.textColor} mb-1`}>PHASE {phase.phase}</div>
              <div className="text-xs text-secondary/60 leading-tight">{phase.title}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-12`}
                data-testid={`phase-${phase.phase}`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className={`w-10 h-10 rounded-full ${phase.color} flex items-center justify-center shadow-md`}>
                    <Icon className="text-white" size={18} />
                  </div>
                </div>

                {/* Spacer for center alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`font-mono text-xs font-bold ${phase.textColor} uppercase tracking-widest`}>
                        Phase {phase.phase}
                      </span>
                      <span className="text-xs text-secondary/40 bg-light px-2 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary mb-3">{phase.title}</h3>
                    <p className="text-secondary/70 text-sm leading-relaxed mb-4">{phase.description}</p>

                    <ul className="space-y-2 mb-4">
                      {phase.activities.map((act) => (
                        <li key={act} className="flex gap-2 text-xs text-secondary/70">
                          <ArrowRight className={`${phase.textColor} shrink-0 mt-0.5`} size={12} />
                          {act}
                        </li>
                      ))}
                    </ul>

                    <div className={`p-3 rounded-xl ${phase.lightColor} border border-current/10`}>
                      <span className={`text-xs font-semibold ${phase.textColor}`}>Target: </span>
                      <span className="text-xs text-secondary/70">{phase.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
