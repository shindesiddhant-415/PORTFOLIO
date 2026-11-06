import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, X } from "lucide-react";
import { navItems } from "../data/navigation";
import { profileData } from "../data/profile";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-cardBorder shadow-lg shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Block */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono group focus:outline-none focus:ring-1 focus:ring-cyber-red"
        >
          <div className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-cardBorder flex items-center justify-center group-hover:border-cyber-red transition-all shadow-cyber-glow">
            <span className="text-white font-bold text-sm tracking-wider group-hover:text-cyber-red transition-colors">
              SS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white tracking-widest flex items-center gap-1.5">
              <span>SIDDHANT</span>
              <span className="text-cyber-red">//</span>
              <span className="text-cyber-muted font-normal">DEV</span>
            </span>
            <span className="text-[9px] text-cyber-dim tracking-wider">CSE_SYS_2028</span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-cyber-card/70 border border-cyber-cardBorder/60 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1 text-xs font-mono transition-colors rounded-full focus:outline-none ${
                  isActive ? "text-white font-semibold" : "text-cyber-muted hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-cyber-red/20 border border-cyber-red/50 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Availability Status */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Status Dot */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/5 font-mono text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium">AVAILABLE</span>
          </div>

          {/* DISPATCH Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-cyber-red text-white text-xs font-mono font-semibold tracking-wider hover:bg-cyber-red/90 transition-all shadow-[0_0_15px_rgba(255,59,48,0.4)] hover:shadow-[0_0_22px_rgba(255,59,48,0.7)] group"
          >
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            <span>DISPATCH</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1 bg-cyber-red text-white text-[11px] font-mono font-semibold rounded"
          >
            DISPATCH
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-cyber-card border border-cyber-cardBorder text-cyber-muted hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-bg/95 border-b border-cyber-cardBorder backdrop-blur-xl px-4 py-5"
          >
            <div className="flex flex-col gap-2 font-mono text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded hover:bg-cyber-card/80 text-cyber-muted hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-cyber-red">{item.terminalCode.split(" ")[0]}</span>
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 mt-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {profileData.statusBadge}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
