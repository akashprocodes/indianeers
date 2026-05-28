"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Info, BookOpen, Trophy, Globe, ImageIcon, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "HOME", icon: Home },
  { href: "/about", label: "ABOUT", icon: Info },
  { href: "/programs", label: "PROGRAMS", icon: BookOpen },
  { href: "/achievements", label: "ACHIEVEMENTS", icon: Trophy },
  { href: "/coverage", label: "COVERAGE", icon: Globe },
  { href: "/gallery", label: "GALLERY", icon: ImageIcon },
  { href: "/contact", label: "CONTACT", icon: Phone },
];

export default function Navbar() {
  const location = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
      <div className="bg-transparent transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between bg-[#102A4A] rounded-[8px] shadow-lg px-2 py-1">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md mx-1 hover:bg-white/5 transition-colors">
              <img
                src="/i-logo.png"
                alt="Indianeers Logo"
                className="h-8 md:h-10 object-contain"
              />
              <div className="hidden sm:block text-white font-display font-bold leading-tight">
                <span className="block text-primary text-xl">Indianeers</span>
                <span className="block text-[0.65rem] uppercase tracking-wider opacity-70">Skilling India's Future</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center justify-end overflow-x-auto no-scrollbar">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2.5 py-3 px-4 xl:px-5 text-xs lg:text-sm font-semibold tracking-wide transition-colors relative whitespace-nowrap rounded-md ${isActive ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <Icon size={16} className={isActive ? "text-primary" : "opacity-70"} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2 rounded-md hover:bg-white/10 mx-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[76px] bg-[#0A1628] z-40 overflow-y-auto">
          <div className="flex flex-col p-4">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 p-4 text-base font-medium border-b border-white/5 ${isActive ? "text-primary bg-white/5" : "text-white/80 hover:bg-white/5"
                    }`}
                >
                  <Icon size={20} className={isActive ? "text-primary" : "text-white/50"} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
