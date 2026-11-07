import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import { TerminalSectionHeader } from "../components/TerminalSectionHeader";
import { journeyBlocks } from "../data/journey";

export const JourneySection: React.FC = () => {
  // Only render blocks that have real data
  const validBlocks = journeyBlocks.filter(
    (b) => b.title && b.summary && b.keyPoints && b.keyPoints.length > 0
  );

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSectionHeader
          badge="LEARNING LOG"
          title="Continuous Growth & Technical Milestones."
          highlightWord="Continuous Growth"
          description="Documenting ongoing DSA problem solving, systems administration experiments, and practical machine learning engineering."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-cyber-cardBorder/80 space-y-12">
          {validBlocks.map((block, idx) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-cyber-red shadow-[0_0_10px_#FF3B30] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-red" />
              </div>

              {/* Card Container */}
              <div className="bg-cyber-card border border-cyber-cardBorder rounded-xl p-6 sm:p-7 hover:border-cyber-red/50 hover:shadow-cyber-card transition-all duration-300">
                {/* Header: Period & Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/5 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyber-redMuted text-cyber-red border border-cyber-red/30">
                      {block.badge}
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      {block.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-cyber-muted text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>{block.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans mb-4">
                  {block.summary}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-4">
                  {block.keyPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-cyber-muted font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyber-red shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-black/60 border border-white/5 font-mono text-[10px] text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
