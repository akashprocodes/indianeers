import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/indianeers-logo.png" 
                alt="Indianeers Logo" 
                className="h-12 object-contain mb-4 bg-white/10 p-2 rounded"
              />
              <div className="font-display font-bold text-xl">
                <span className="text-primary">Skillionaires</span>
              </div>
              <p className="text-sm text-white/60 mt-1">Skilling India's Future</p>
            </Link>
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              A civic-tech initiative dedicated to empowering India's youth through 
              vocational training, skill development, and employment opportunities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Achievements", href: "/achievements" },
                { label: "Strategy", href: "/strategy" },
                { label: "Our Work", href: "/work" },
                { label: "Gallery", href: "/gallery" },
                { label: "Vision 2047", href: "/way-forward" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="text-primary text-xs">▹</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 relative inline-block">
              Our Programs
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Government Programs", href: "/programs" },
                { label: "CSR Projects", href: "/programs" },
                { label: "Industry Programs", href: "/programs" },
                { label: "Institutional Programs", href: "/programs" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="text-primary text-xs">▹</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>123 Innovation Tower, Tech Park,<br />New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="text-primary shrink-0" size={18} />
                <span>partner@skillionaires.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Skillionaires. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Powered by <span className="text-white">Indianeers Media Pvt. Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
