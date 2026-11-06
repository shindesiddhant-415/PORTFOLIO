import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Mail,
  ChevronRight,
  Code2,
} from "lucide-react";
import { profileData } from "../data/profile";
import { StatsCounter } from "../components/StatsCounter";
import { DuotoneAvatar } from "../components/DuotoneAvatar";
import { GithubIcon, LinkedinIcon, CodolioIcon, CodeChefIcon } from "../components/SocialIcons";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Giant Outlined Background "PORTFOLIO" word */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-heading text-[14vw] font-black tracking-tighter text-outline opacity-40 uppercase block leading-none">
          PORTFOLIO
        </span>
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyber-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, CTAs, Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Terminal Index Marker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 font-mono text-xs text-cyber-muted"
            >
              <span className="text-cyber-red font-bold">›</span>
              <span className="tracking-wider">//00.00 SYS_INIT // RUNTIME_ACTIVE</span>
              <span className="w-1.5 h-3 bg-cyber-red animate-cursor-blink" />
            </motion.div>

            {/* Handwritten "Hello, I'm" solid red block & Name */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2"
              >
                {/* Handwritten solid red block badge */}
                <span className="inline-block px-3 py-1 bg-cyber-red text-white font-handwritten text-xl font-bold rounded shadow-[0_0_15px_rgba(255,59,48,0.4)] tracking-wide transform -rotate-1">
                  Hello, I'm
                </span>
                <span className="text-cyber-muted font-mono text-xs hidden sm:inline">
                  CSE Student @ MIT AOE Pune
                </span>
              </motion.div>

              {/* Bold Geometric Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
              >
                {profileData.name}
                <span className="text-cyber-red">.</span>
              </motion.h1>

              {/* Title Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-card border border-cyber-cardBorder text-[11px] sm:text-xs font-mono font-medium text-cyber-text"
              >
                <Code2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                <span className="tracking-wider">{profileData.roleBadge}</span>
              </motion.div>
            </div>

            {/* Honest Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg text-cyber-muted font-sans max-w-xl leading-relaxed"
            >
              {profileData.tagline}
            </motion.p>

            {/* Buttons Row & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Glowing Button: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyber-red text-white font-mono text-xs font-bold tracking-wider hover:bg-cyber-red/90 transition-all shadow-cyber-red hover:shadow-cyber-red-lg group"
              >
                <span>VIEW PROJECTS</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Ghost Secondary Button: Download Resume */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyber-card/80 border border-cyber-cardBorder text-cyber-text font-mono text-xs font-semibold tracking-wider hover:border-cyber-red/60 hover:text-white transition-all shadow-cyber-card"
              >
                <FileText className="w-4 h-4 text-cyber-red" />
                <span>RESUME PDF</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-cyber-card border border-cyber-cardBorder/60 text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: shindesiddhant-415"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-cyber-card border border-cyber-cardBorder/60 text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {profileData.contact.codolio && (
                  <a
                    href={profileData.contact.codolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-cyber-card border border-cyber-cardBorder/60 text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
                    aria-label="Codolio Profile"
                    title="Codolio: Siddhant415"
                  >
                    <CodolioIcon className="w-4 h-4 text-emerald-400" />
                  </a>
                )}

                {profileData.contact.codechef && (
                  <a
                    href={profileData.contact.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-cyber-card border border-cyber-cardBorder/60 text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
                    aria-label="CodeChef Profile"
                    title="CodeChef: 150+ Solved"
                  >
                    <CodeChefIcon className="w-4 h-4 text-amber-400" />
                  </a>
                )}

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="p-3 rounded-lg bg-cyber-card border border-cyber-cardBorder/60 text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
                  aria-label="Email Siddhant"
                  title={`Email: ${profileData.contact.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Real Stats Row (3 items) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/5"
            >
              {profileData.stats.map((stat) => (
                <StatsCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  helper={stat.helper}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Column: Red-Tinted Portrait & Telemetry Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <DuotoneAvatar photoSrc={profileData.avatarUrl || "/profile.webp"} />
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Arrow Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyber-dim font-mono text-[10px] pointer-events-none">
        <span>SCROLL // EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-cyber-red animate-bounce" />
      </div>
    </section>
  );
};
