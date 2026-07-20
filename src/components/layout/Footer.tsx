import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white pt-24 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-8 group">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors overflow-hidden">
                  <img 
                    src="/indianeers-logo.png" 
                    alt="Indianeers Logo" 
                    className="w-10 h-10 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl tracking-tight text-white group-hover:text-primary transition-colors">
                    Skillionaires
                  </div>
                  <p className="text-xs text-white/50 tracking-wider uppercase font-medium mt-1">Skilling India's Future</p>
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm mb-8 max-w-sm leading-relaxed">
              A civic-tech initiative dedicated to empowering India's youth through 
              vocational training, skill development, and employment opportunities.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-11 h-11 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Achievements", href: "/achievements" },
                { label: "Strategy", href: "/strategy" },
                { label: "Our Work", href: "/work" },
                { label: "Gallery", href: "/gallery" },
                { label: "Vision 2047", href: "/way-forward" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-white/60 hover:text-white transition-colors text-sm w-fit font-medium">
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                      <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">{link.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Our Programs
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Government Programs", href: "/programs" },
                { label: "CSR Projects", href: "/programs" },
                { label: "Industry Programs", href: "/programs" },
                { label: "Institutional Programs", href: "/programs" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-white/60 hover:text-primary transition-colors text-sm w-fit font-medium">
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm text-white/60 group cursor-pointer">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <span className="mt-1 group-hover:text-white transition-colors font-medium">123 Innovation Tower, Tech Park,<br />New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 group cursor-pointer">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-white transition-colors font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 group cursor-pointer">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-white transition-colors font-medium">partner@skillionaires.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Massive Indianeers Text */}
        <div className="w-full flex justify-center items-center overflow-hidden pt-10 pb-4 select-none border-t border-white/5 relative group cursor-default">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
          <h1 className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black tracking-tighter leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-white/10 to-transparent transition-all duration-700 ease-out group-hover:from-white/30 group-hover:to-white/5 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:scale-[1.02] relative z-20">
            INDIANEERS
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Skillionaires. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-medium flex items-center gap-1.5">
            Designed & Engineered by <span className="text-white font-bold tracking-wide">Indianeers Media Pvt. Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
