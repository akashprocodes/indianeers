"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Bookmark, TrendingUp, Settings, User, GraduationCap, Briefcase, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Digital Marketing Mastery",
    tag: "Digital Skills",
    duration: "8 Weeks",
    location: "Online",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop",
    colorTheme: "blue",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "Industrial Automation Technician",
    tag: "Industrial Training",
    duration: "12 Weeks",
    location: "Offline",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    colorTheme: "emerald",
    icon: Settings
  },
  {
    id: 3,
    title: "Spoken English & Personality Development",
    tag: "Soft Skills",
    duration: "6 Weeks",
    location: "Online",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    colorTheme: "purple",
    icon: User
  },
  {
    id: 4,
    title: "Financial Accounting & Tally",
    tag: "Finance",
    duration: "10 Weeks",
    location: "Hybrid",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    colorTheme: "blue",
    icon: BookOpen
  }
];

const jobs = [
  {
    id: 1,
    title: "HR Executive",
    company: "Tata Motors",
    location: "Pune, Maharashtra",
    salary: "₹ 4 - 6 LPA",
    type: "Full Time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg"
  },
  {
    id: 2,
    title: "Business Analyst",
    company: "Wipro Limited",
    location: "Bengaluru, Karnataka",
    salary: "₹ 6 - 9 LPA",
    type: "Full Time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
  },
  {
    id: 3,
    title: "Relationship Manager",
    company: "HDFC Bank",
    location: "Delhi NCR",
    salary: "₹ 5 - 8 LPA",
    type: "Full Time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg"
  }
];

const getColorClasses = (color: string) => {
  switch(color) {
    case 'blue': return 'bg-blue-50 text-blue-600';
    case 'emerald': return 'bg-emerald-50 text-emerald-600';
    case 'purple': return 'bg-purple-50 text-purple-600';
    default: return 'bg-blue-50 text-blue-600';
  }
};

export function CourseJobSection() {
  return (
    <section className="pt-24 pb-12 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Single Main Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-primary">Careers & Upskilling</span>
            <div className="w-8 h-[2px] bg-primary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-[42px] leading-tight font-extrabold text-[#050D1A] tracking-tight mb-4"
          >
            Find the Right Job. Build Your Future.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Discover industry-aligned courses and career opportunities with top organizations to take the next step towards success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Left Column: Courses Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] border border-zinc-200 p-6 sm:p-8"
          >
            {/* Minimal Column Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-[#050D1A]">Featured Courses</h3>
                  <p className="text-[15px] text-zinc-500 font-medium">Upgrade your skills. Advance your career.</p>
                </div>
              </div>
              <button className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors flex items-center gap-1">
                View All Courses &rarr;
              </button>
            </div>

            {/* Course Cards List */}
            <div className="flex flex-col gap-4">
              {courses.map((course, idx) => (
                <div 
                  key={course.id}
                  className="rounded-2xl border border-zinc-100 p-3 flex flex-col sm:flex-row gap-5 items-center hover:border-zinc-200 hover:bg-zinc-50/50 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="w-full sm:w-[140px] h-[140px] sm:h-[100px] shrink-0 rounded-xl overflow-hidden bg-zinc-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow w-full py-1 pr-2">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-[17px] text-[#050D1A] leading-snug mb-2 pr-4">{course.title}</h3>
                        <span className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full ${getColorClasses(course.colorTheme)}`}>
                          {course.tag}
                        </span>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getColorClasses(course.colorTheme)}`}>
                        <course.icon size={20} />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 text-[13px] text-zinc-500 font-semibold mt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-zinc-400" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-zinc-400" /> {course.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Jobs Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[32px] border border-zinc-200 p-6 sm:p-8"
          >
            {/* Minimal Column Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-[#050D1A]">Latest Job Opportunities</h3>
                  <p className="text-[15px] text-zinc-500 font-medium">Find the right opportunity for you.</p>
                </div>
              </div>
              <button className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors flex items-center gap-1">
                View All Jobs &rarr;
              </button>
            </div>

            {/* Job Cards List */}
            <div className="flex flex-col gap-4">
              {jobs.map((job, idx) => (
                <div 
                  key={job.id}
                  className="rounded-2xl border border-zinc-100 p-5 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all duration-300"
                >
                  <div className="flex gap-5">
                    {/* Company Logo */}
                    <div className="w-[60px] h-[60px] shrink-0 rounded-xl bg-white border border-zinc-100 flex items-center justify-center p-2 shadow-sm">
                      <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-[18px] text-[#050D1A] mb-1">{job.title}</h3>
                          <p className="text-[14px] text-zinc-500 font-medium">{job.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-[13px] text-zinc-500 font-semibold mb-4">
                        <MapPin size={16} className="text-zinc-400" /> {job.location}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-[16px] text-emerald-600 tracking-tight">{job.salary}</span>
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[11px] uppercase tracking-wider font-bold rounded-full">
                            {job.type}
                          </span>
                        </div>
                        <button className="bg-[#0D6EFD] text-white px-6 py-2.5 rounded-lg font-medium text-[14px] hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
