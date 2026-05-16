"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,_#FF6B00_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-primary font-mono text-sm mb-3 uppercase tracking-widest">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">Contact Us</h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">
            Whether you are a government agency, corporate CSR team, or educational institution — we would love to
            explore how we can work together.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">Send Us a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 rounded-2xl p-10 border border-accent/20 text-center"
                data-testid="form-success"
              >
                <CheckCircle className="text-accent mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-display font-bold text-secondary mb-2">Message Received!</h3>
                <p className="text-secondary/70">
                  Thank you for reaching out. Our team will get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", type: "", message: "" }); }}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-1.5">Organization</label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="Company / Ministry / Institution name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    data-testid="input-org"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-1.5">Partnership Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    data-testid="select-type"
                  >
                    <option value="">Select partnership type</option>
                    <option value="government">Government Program Implementation</option>
                    <option value="csr">CSR Partnership</option>
                    <option value="industry">Industry Training Partnership</option>
                    <option value="institution">Institutional Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-1.5">Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, geography, and target beneficiaries..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    data-testid="input-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="button-submit"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">Reach Us Directly</h2>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "partnerships@skillionaires.in",
                  href: "mailto:partnerships@skillionaires.in",
                  color: "bg-primary/10 text-primary",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210",
                  color: "bg-accent/10 text-accent",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+91 98765 43210",
                  href: "https://wa.me/919876543210",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Indianeers Media Pvt. Ltd., Plot No. 45, Sector 17, Gurugram, Haryana — 122001",
                  href: "https://maps.google.com",
                  color: "bg-gold/10 text-gold",
                },
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm hover:border-primary/20 hover:shadow-md transition-all"
                    data-testid={`contact-item-${contact.label.toLowerCase()}`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${contact.color} flex items-center justify-center shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-secondary/50 font-mono mb-0.5">{contact.label}</div>
                      <div className="text-secondary font-medium text-sm leading-snug">{contact.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-30">
                  {Array.from({ length: 20 }).map((_, i) =>
                    Array.from({ length: 15 }).map((_, j) => (
                      <div
                        key={`${i}-${j}`}
                        className="absolute border border-secondary/10"
                        style={{
                          left: `${j * 6.67}%`,
                          top: `${i * 5}%`,
                          width: "6.67%",
                          height: "5%",
                        }}
                      />
                    ))
                  )}
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <p className="text-secondary text-sm font-medium">Gurugram, Haryana</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-secondary/50 text-center">
                  Indianeers Media Private Limited, Gurugram, Haryana 122001
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-secondary rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday – Friday</span>
                  <span className="font-mono text-primary">9:30 AM – 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday</span>
                  <span className="font-mono text-primary">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white/40">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
