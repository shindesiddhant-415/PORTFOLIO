import React from "react";
import { motion } from "framer-motion";

interface TerminalSectionHeaderProps {
  badge: string;
  terminalCode: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: "left" | "center";
}

export const TerminalSectionHeader: React.FC<TerminalSectionHeaderProps> = ({
  badge,
  terminalCode,
  title,
  highlightWord,
  description,
  align = "left",
}) => {
  const isCentered = align === "center";

  // If highlightWord is given, split the title and emphasize that word in cyber-red
  let titleParts: { before: string; highlighted: string; after: string } | null = null;
  if (highlightWord && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    titleParts = {
      before: parts[0],
      highlighted: highlightWord,
      after: parts.slice(1).join(highlightWord),
    };
  }

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {/* Terminal Tag + Code Row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`flex flex-wrap items-center gap-3 font-mono text-xs mb-3 ${
          isCentered ? "justify-center" : "justify-start"
        }`}
      >
        {/* Tiny uppercase red mono tag with a dot */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyber-redMuted border border-cyber-red/30 text-cyber-red font-semibold uppercase tracking-widest text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-red animate-pulse" />
          {badge}
        </span>

        {/* Terminal Marker with blinking cursor */}
        <span className="text-cyber-muted text-[11px] tracking-wider flex items-center gap-1">
          <span>{terminalCode}</span>
          <span className="inline-block w-1.5 h-3 bg-cyber-red animate-cursor-blink" />
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
      >
        {titleParts ? (
          <>
            {titleParts.before}
            <span className="text-cyber-red inline-block relative">
              {titleParts.highlighted}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyber-red/40" />
            </span>
            {titleParts.after}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-cyber-muted text-base md:text-lg leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

