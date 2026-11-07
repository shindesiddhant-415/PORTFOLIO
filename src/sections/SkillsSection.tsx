import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Terminal,
} from "lucide-react";
import { TerminalSectionHeader } from "../components/TerminalSectionHeader";
import { skillCategories } from "../data/skills";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-cyber-red" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-cyber-cyan" />;
      case "Server":
        return <Server className="w-5 h-5 text-amber-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-cyber-red" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-cyber-cyan" />;
      default:
        return <Terminal className="w-5 h-5 text-cyber-red" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSectionHeader
          badge="TECHNOLOGY STACK"
          title="Practical Skills & Engineering Toolkit."
          highlightWord="Engineering Toolkit"
          description="Real tools and frameworks applied across software projects, deep learning experiments, and cloud infrastructure. Grouped by technical domains."
        />

        {/* Grouped Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-cyber-card border border-cyber-cardBorder rounded-xl p-6 hover:border-cyber-red/50 hover:shadow-cyber-card transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-black/60 border border-white/5 group-hover:border-cyber-red/30 transition-colors">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyber-red transition-colors">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-[10px] text-cyber-dim tracking-wider">
                        {cat.sysCode}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-cyber-muted text-xs font-sans leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Technology Badges (NO fake percentage bars!) */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                        skill.isPrimary
                          ? "bg-cyber-redMuted text-white border border-cyber-red/40 hover:border-cyber-red font-medium shadow-[0_0_8px_rgba(255,59,48,0.2)]"
                          : "bg-black/50 text-zinc-300 border border-white/5 hover:border-white/20"
                      }`}
                    >
                      {skill.isPrimary && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-red shrink-0" />
                      )}
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[9px] text-cyber-dim ml-0.5">
                          • {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-cyber-dim">
                <span>PRACTICAL STACK</span>
                <span className="text-cyber-muted">VERIFIED SKILLS</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
