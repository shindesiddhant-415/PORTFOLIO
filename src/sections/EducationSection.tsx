import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { TerminalSectionHeader } from "../components/TerminalSectionHeader";
import { profileData } from "../data/profile";

export const EducationSection: React.FC = () => {
  const { education } = profileData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Formal Engineering Education & Foundation."
          highlightWord="Engineering Education"
          description="Pursuing a Bachelor of Technology in Computer Science Engineering with strong emphasis on algorithmic rigor and modern computer science systems."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cyber-card border border-cyber-cardBorder rounded-2xl overflow-hidden shadow-cyber-card"
          >
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-black/60 border-b border-cyber-cardBorder flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyber-red" />
                <span className="text-white font-bold tracking-wider">
                  SPPU ACCREDITED DEGREE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyber-cyan font-bold text-[11px] bg-cyber-cyan/10 border border-cyber-cyan/30 px-2.5 py-0.5 rounded">
                  CGPA: {education.cgpa}
                </span>
                <span className="text-emerald-400 font-semibold text-[11px] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded">
                  ENROLLED • MIT AOE PUNE
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    {education.degree}
                  </h3>
                  <div className="text-lg text-cyber-red font-medium mt-1">
                    {education.institution}
                  </div>
                  <div className="text-sm text-cyber-muted mt-0.5 font-sans">
                    Affiliated with {education.university}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 border border-white/5 text-cyber-muted">
                    <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>Graduation: {education.graduationYear}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 border border-white/5 text-cyber-dim">
                    <MapPin className="w-3.5 h-3.5 text-cyber-red" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Academic Focus & Highlights */}
              <div className="pt-6 border-t border-white/5 space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-cyber-dim flex items-center gap-1.5 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-cyber-cyan" />
                  ACADEMIC FOCUS
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {education.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300 font-sans leading-relaxed"
                    >
                      <div className="text-cyber-red font-mono font-bold text-xs mb-1">
                        0{idx + 1}.
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework Modules */}
              <div className="pt-4 border-t border-white/5">
                <div className="font-mono text-xs text-cyber-dim uppercase tracking-wider mb-2.5">
                  CORE SUBJECTS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming (C++)",
                    "Discrete Mathematics",
                    "Database Management Systems",
                    "Computer Architecture",
                    "Operating Systems & Linux",
                    "Machine Learning & Deep Learning",
                  ].map((sub) => (
                    <span
                      key={sub}
                      className="px-3 py-1 rounded-lg bg-cyber-card border border-cyber-cardBorder/60 text-cyber-text font-mono text-xs"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
