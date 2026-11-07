import React from "react";
import { motion } from "framer-motion";
import { Terminal, Lightbulb, Cpu, Network } from "lucide-react";
import { TerminalSectionHeader } from "../components/TerminalSectionHeader";
import { profileData } from "../data/profile";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSectionHeader
          badge="ABOUT ME"
          title="Engineering Practical Solutions Through Code."
          highlightWord="Practical Solutions"
          description="A Computer Science Engineering student focused on building real systems rather than just memorizing theoretical concepts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio Narrative & Philosophy Quote (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-card border border-cyber-cardBorder rounded-xl p-6 sm:p-8 space-y-4 shadow-cyber-card"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-cyber-red pb-2 border-b border-white/5">
                <Terminal className="w-4 h-4" />
                <span>BACKGROUND &amp; OVERVIEW</span>
              </div>

              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-sans">
                {profileData.bio}
              </p>

              <p className="text-cyber-muted text-sm sm:text-base leading-relaxed font-sans">
                My approach to software engineering is hands-on and curious: whether it's
                training a Convolutional Neural Network in PyTorch for crop diagnostics, writing
                multithreaded serial drivers for custom Arduino game controllers, or deploying
                cloud caching on AWS, I care about how components connect to solve real-world problems.
              </p>

              {/* Philosophy Block */}
              <div className="pt-4 mt-4 border-t border-white/5">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cyber-redMuted border-l-4 border-cyber-red">
                  <Lightbulb className="w-5 h-5 text-cyber-red shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyber-red font-semibold">
                      ENGINEERING PHILOSOPHY
                    </div>
                    <blockquote className="text-white font-medium text-sm sm:text-base mt-1 italic">
                      "{profileData.philosophy}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Practical Approach Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-cyber-card/70 border border-cyber-cardBorder/60 flex items-start gap-3">
                <div className="p-2 rounded bg-black/60 border border-cyber-cyan/30 text-cyber-cyan shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Hands-On System Prototyping</div>
                  <p className="text-cyber-muted text-[11px] leading-relaxed">
                    Prioritizing runnable, measurable code and clean architecture over superficial templates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyber-card/70 border border-cyber-cardBorder/60 flex items-start gap-3">
                <div className="p-2 rounded bg-black/60 border border-cyber-red/30 text-cyber-red shrink-0">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Systems & Cloud Mindset</div>
                  <p className="text-cyber-muted text-[11px] leading-relaxed">
                    Understanding the entire path: from Linux terminal commands to distributed cloud edge endpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Cyber Terminal Telemetry Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/80 border border-cyber-cardBorder rounded-xl overflow-hidden shadow-cyber-card font-mono text-xs"
            >
              {/* Terminal Title Bar */}
              <div className="px-4 py-2.5 bg-cyber-card border-b border-cyber-cardBorder flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-red" />
                  <span className="text-white font-bold tracking-wider text-[11px]">
                    STUDENT &amp; ACADEMIC PROFILE
                  </span>
                </div>
                <span className="text-cyber-dim text-[10px]">MIT AOE, PUNE</span>
              </div>

              {/* Terminal Properties */}
              <div className="p-5 space-y-3.5">
                <div>
                  <div className="text-cyber-dim text-[10px] uppercase">FULL NAME</div>
                  <div className="text-white font-semibold text-sm mt-0.5">{profileData.name}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div>
                    <div className="text-cyber-dim text-[10px] uppercase">INSTITUTION</div>
                    <div className="text-zinc-200 text-xs mt-0.5">MIT Academy of Engineering</div>
                  </div>
                  <div>
                    <div className="text-cyber-dim text-[10px] uppercase">AFFILIATION</div>
                    <div className="text-zinc-200 text-xs mt-0.5">SPPU, Pune</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div>
                    <div className="text-cyber-dim text-[10px] uppercase">DEGREE PROGRAM</div>
                    <div className="text-zinc-200 text-xs mt-0.5">B.Tech CSE (SPPU)</div>
                  </div>
                  <div>
                    <div className="text-cyber-dim text-[10px] uppercase">ACADEMIC CGPA</div>
                    <div className="text-cyber-cyan font-bold text-xs mt-0.5">8.34 / 10</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div>
                    <div className="text-cyber-dim text-[10px] uppercase">GRADUATION</div>
                    <div className="text-cyber-red font-bold text-xs mt-0.5">Class of 2028</div>
                  </div>
                  <div>
                    <div className="text-cyber-dim text-[10px] uppercase">DSA PROBLEMS</div>
                    <div className="text-emerald-400 font-bold text-xs mt-0.5">150+ Solved</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="text-cyber-dim text-[10px] uppercase mb-1.5">CORE INTERESTS</div>
                  <div className="flex flex-wrap gap-1.5">
                    {profileData.focusAreas.map((focus) => (
                      <span
                        key={focus}
                        className="px-2 py-0.5 rounded bg-cyber-card border border-white/10 text-white text-[10px]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="text-cyber-dim text-[10px] uppercase mb-1">DEVELOPER ENVIRONMENT</div>
                  <div className="text-emerald-400 text-[11px]">
                    Linux Ubuntu / Neovim & VSCode / Git CLI / Bash
                  </div>
                </div>
              </div>

              {/* Bottom status badge */}
              <div className="px-4 py-2.5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyber-muted">
                <span>STATUS: OPEN TO INTERNSHIPS</span>
                <span className="text-emerald-400">GOOD STANDING</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
