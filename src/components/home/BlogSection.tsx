"use client";
import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    category: "Impact",
    title: "Empowering Rural Women through Digital Literacy",
    excerpt: "Discover how our recent initiative in Maharashtra has transformed the lives of over 500 women by providing them with essential digital skills and internet access.",
    author: "Neha Sharma",
    date: "Jul 15, 2026",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "Education",
    title: "The Future of Skill Development in India",
    excerpt: "An in-depth look at how industry-aligned training programs are bridging the gap between education and employment for millions of youth.",
    author: "Rahul Verma",
    date: "Jul 08, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "Community",
    title: "Community Centers: The New Hubs of Innovation",
    excerpt: "How local community learning centers are becoming the launchpads for rural startups and micro-enterprises across various states.",
    author: "Anita Desai",
    date: "Jun 25, 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  }
];

export function BlogSection() {
  return (
    <section className="pt-24 pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm uppercase tracking-widest">Latest Updates</span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold text-[#050D1A] tracking-tight mb-6">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Stories</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            Stay updated with our latest initiatives, success stories, and perspectives on skill development and empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-3 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="px-2 pt-4 pb-2 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-[#050D1A] mb-6 group-hover:text-primary transition-colors line-clamp-2 flex-grow">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3.5 bg-white border-2 border-zinc-200 text-[#050D1A] font-semibold rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-2 group">
            View All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
