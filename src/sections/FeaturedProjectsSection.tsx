import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Terminal,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { TerminalSectionHeader } from "../components/TerminalSectionHeader";
import { featuredProjects, type FeaturedProject } from "../data/projects";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import {
  CropAISimulator,
  JoystickSimulator,
  CloudLabsSimulator,
  SovereignAISimulator,
} from "../components/ProjectSimulators";
import { GithubIcon } from "../components/SocialIcons";

export const FeaturedProjectsSection: React.FC = () => {
  const renderPreview = (project: FeaturedProject) => {
    switch (project.previewType) {
      case "sovereign-ai":
        return <SovereignAISimulator />;
      case "crop-ai":
        return <CropAISimulator />;
      case "joystick-sim":
        return <JoystickSimulator />;
      case "cloud-labs":
        return <CloudLabsSimulator />;
      default:
        return <SovereignAISimulator />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSectionHeader
          badge="FEATURED PROJECTS"
          terminalCode="//03.00 SEC_PROJECTS_EXEC"
          title="Engineered Systems & Applied Software."
          highlightWord="Engineered Systems"
          description="Detailed deep-dives into core projects built end-to-end: spanning deep learning computer vision, embedded hardware serial control, and cloud systems."
        />

        {/* Featured Projects Stack */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cyber-card border border-cyber-cardBorder rounded-2xl overflow-hidden hover:border-cyber-red/60 hover:shadow-cyber-card transition-all duration-300 relative group"
            >
              {/* Card Top Bar */}
              <div className="px-6 py-3 bg-black/60 border-b border-cyber-cardBorder flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-3">
                  {/* Category Chip Top-Left */}
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase border ${
                      project.isLearningLab
                        ? "bg-amber-950/70 text-amber-400 border-amber-500/40"
                        : "bg-cyber-redMuted text-cyber-red border-cyber-red/40"
                    }`}
                  >
                    {project.category}
                  </span>

                  <span className="text-cyber-muted text-[11px] font-bold">
                    {project.sysId}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {project.datasetOrContext && (
                    <span className="text-cyber-dim text-[11px] hidden md:inline">
                      {project.datasetOrContext}
                    </span>
                  )}
                  {project.isLearningLab && (
                    <span className="text-amber-400 text-[10px] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      LEARNING LAB
                    </span>
                  )}
                </div>
              </div>

              {/* Main Card Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Title & Links Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyber-red transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cyber-muted text-sm sm:text-base font-sans">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions: GitHub & Live Demo (only if exists) */}
                  <div className="flex items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/70 border border-cyber-cardBorder text-cyber-text text-xs font-mono font-medium hover:border-cyber-red/60 hover:text-white transition-all"
                      >
                        <GithubIcon className="w-4 h-4 text-cyber-red" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-red text-white text-xs font-mono font-bold tracking-wider hover:bg-cyber-red/90 transition-all shadow-cyber-red"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Interactive Simulator / Preview Container */}
                <div className="rounded-xl overflow-hidden shadow-inner">
                  {renderPreview(project)}
                </div>

                {/* If Project 1: show animated Architecture Flow Diagram */}
                {project.architectureNodes && (
                  <div className="space-y-2 pt-2">
                    <ArchitectureDiagram nodes={project.architectureNodes} />
                  </div>
                )}

                {/* Features & Technical Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-white/5">
                  {/* Left: Key Features (7 cols) */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="font-mono text-xs text-cyber-dim uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-cyber-red" />
                      KEY ARCHITECTURAL FEATURES
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs sm:text-sm text-zinc-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyber-red shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Tech Stack Badges (5 cols) */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="font-mono text-xs text-cyber-dim uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <Layers className="w-3.5 h-3.5 text-cyber-cyan" />
                      SYSTEM TECHNOLOGY STACK
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-black/60 border border-cyber-cardBorder/80 text-cyber-text font-mono text-xs hover:border-cyber-red/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
