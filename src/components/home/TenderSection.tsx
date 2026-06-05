"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Landmark } from "lucide-react";

const tenders = [
  {
    id: 1,
    title: "Skill Development Training Program for Youth",
    category: "Training",
    issueDate: "10 May 2025",
    deadline: "25 May 2025",
    status: "Open"
  },
  {
    id: 2,
    title: "Supply of IT Hardware Equipment",
    category: "IT & Hardware",
    issueDate: "12 May 2025",
    deadline: "28 May 2025",
    status: "Closing Soon"
  },
  {
    id: 3,
    title: "Implementation of CSR Health Initiative",
    category: "CSR",
    issueDate: "15 May 2025",
    deadline: "02 Jun 2025",
    status: "Open"
  },
  {
    id: 4,
    title: "Security Services for Government Offices",
    category: "Security",
    issueDate: "16 May 2025",
    deadline: "05 Jun 2025",
    status: "Closing Soon"
  },
  {
    id: 5,
    title: "Maintenance of Training Infrastructure",
    category: "Maintenance",
    issueDate: "18 May 2025",
    deadline: "10 Jun 2025",
    status: "Open"
  }
];

export function TenderSection() {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-zinc-50 relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <Landmark className="absolute bottom-0 left-0 text-orange-500/5 w-96 h-96 -mb-24 -ml-16 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col gap-10">
          
          {/* Top Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-4 mb-3">
                <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#F97316]">Tender Opportunities</span>
                <div className="w-12 h-[2px] bg-[#F97316] rounded-full" />
              </div>
              
              <h2 className="text-3xl md:text-4xl leading-[1.2] font-extrabold text-zinc-800 tracking-tight">
                Latest Tenders, RFPs & EOI<br className="hidden md:block" /> Opportunities
              </h2>
            </div>
            
            <div className="shrink-0 pb-1">
              <button className="inline-flex items-center gap-2 bg-[#EA580C] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#C2410C] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                View All Tenders <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Bottom Table Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto hide-scrollbar">
                <table className="w-full text-left min-w-[700px]">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-white">
                      <th className="py-5 px-6 font-semibold text-[14px] text-[#050D1A] w-[40%]">Title</th>
                      <th className="py-5 px-6 font-semibold text-[14px] text-[#050D1A] w-[15%]">Category</th>
                      <th className="py-5 px-6 font-semibold text-[14px] text-[#050D1A] w-[15%]">Issue Date</th>
                      <th className="py-5 px-6 font-semibold text-[14px] text-[#050D1A] w-[15%]">Deadline</th>
                      <th className="py-5 px-6 font-semibold text-[14px] text-[#050D1A] w-[15%]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenders.map((tender, index) => (
                      <tr 
                        key={tender.id} 
                        className={`hover:bg-zinc-50 transition-colors ${index !== tenders.length - 1 ? 'border-b border-zinc-100' : ''}`}
                      >
                        <td className="py-4 px-6">
                          <span className="font-semibold text-[#050D1A] text-[14px] leading-snug">
                            {tender.title}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-[14px] text-zinc-500 font-medium">
                          {tender.category}
                        </td>
                        <td className="py-4 px-6 text-[14px] text-zinc-500 font-medium">
                          {tender.issueDate}
                        </td>
                        <td className="py-4 px-6 text-[14px] text-zinc-500 font-medium">
                          {tender.deadline}
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold ${
                            tender.status === 'Open' 
                              ? 'bg-emerald-50 text-emerald-600' 
                              : 'bg-orange-50 text-orange-600'
                          }`}>
                            {tender.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
