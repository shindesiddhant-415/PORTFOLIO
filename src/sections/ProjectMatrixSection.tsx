import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { matrixProjects, type ProjectCategory } from "../data/projects";
import { GithubIcon } from "../components/SocialIcons";

const CATEGORIES: ProjectCategory[] = ["All", "AI-ML", "Web", "Cloud-Linux", "Hardware"];

export const ProjectMatrixSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects = matrixProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <section className="py-16 relative overflow-hidden bg-black/30 border-t border-b border-cyber-cardBorder/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-red mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-red animate-ping" />
              <span>PROJECT DIRECTORY</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              All Projects & Learning Labs
            </h3>
            <p className="text-cyber-muted text-sm mt-1">
              Explore the complete directory of projects, laboratories, and algorithms by domain.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-cyber-card/80 p-1.5 rounded-xl border border-cyber-cardBorder self-start md:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all relative ${
                    isActive
                      ? "text-white font-bold bg-cyber-red shadow-[0_0_12px_rgba(255,59,48,0.5)]"
                      : "text-cyber-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Matrix Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-cyber-card border border-cyber-cardBorder rounded-xl p-5 hover:border-cyber-red/50 hover:shadow-cyber-card transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top bar with Sys ID & Category Chip */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono text-xs">
                    <span className="text-cyber-red font-bold text-xs tracking-wider">
                      PROJ #{project.sysId}
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase border ${
                        project.status === "LEARNING LAB"
                          ? "bg-amber-950/60 text-amber-400 border-amber-500/30"
                          : "bg-black/60 text-cyber-cyan border-cyber-cyan/30"
                      }`}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-cyber-red transition-colors mb-2">
                    {project.title}
                  </h4>
                  <p className="text-cyber-muted text-xs leading-relaxed font-sans mb-4">
                    {project.description}
                  </p>

                  {/* Mini Features List */}
                  <div className="space-y-1.5 mb-5 font-mono text-[11px] text-zinc-300">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-cyber-red text-xs">›</span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech tags + Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-4">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-black/60 border border-white/5 text-[10px] font-mono text-cyber-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 font-mono text-xs">
                    <span className="text-[10px] text-cyber-dim">
                      STATUS: {project.status}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-black/60 border border-white/10 hover:border-cyber-red/50 text-cyber-muted hover:text-white transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-cyber-red/20 border border-cyber-red/50 text-cyber-red hover:bg-cyber-red hover:text-white transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
