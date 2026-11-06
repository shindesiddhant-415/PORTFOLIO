import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";

interface TerminalBootIntroProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "SYS_CORE // INITIALIZING HARDWARE INTERFACES...",
  "CONNECTING REPOSITORY NODES // SAVITRIBAI PHULE PUNE UNIV",
  "LOADING AI / COMPUTER VISION PIPELINES...",
  "VERIFYING INTEGRITY: SIDDHANT SHINDE // B.TECH CSE 2028",
  "INITIALIZING SYSTEMS ARCHITECT INTERFACE [READY]",
];

export const TerminalBootIntro: React.FC<TerminalBootIntroProps> = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setCurrentLineIndex((prev) => {
        if (prev < BOOT_LINES.length - 1) {
          return prev + 1;
        }
        clearInterval(lineTimer);
        return prev;
      });
    }, 240);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-bg p-4 overflow-hidden select-none"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 cyber-scanlines opacity-50" />

      {/* Cyber Boot Container */}
      <div className="relative w-full max-w-xl bg-cyber-card/90 border border-cyber-cardBorder shadow-cyber-red-lg rounded-xl p-6 md:p-8 backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyber-cardBorder pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-red animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan/80" />
            <span className="ml-2 font-mono text-xs uppercase tracking-widest text-cyber-muted flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyber-red" />
              BOOT_SYS // V2.8.0
            </span>
          </div>

          <button
            onClick={onComplete}
            className="text-[11px] font-mono text-cyber-muted hover:text-cyber-red border border-cyber-cardBorder px-2.5 py-1 rounded transition-colors"
          >
            SKIP [ESC]
          </button>
        </div>

        {/* Boot Logs */}
        <div className="font-mono text-xs space-y-2 mb-6 min-h-[140px]">
          {BOOT_LINES.slice(0, currentLineIndex + 1).map((line, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 ${
                idx === currentLineIndex ? "text-white font-medium" : "text-cyber-muted"
              }`}
            >
              <span className="text-cyber-red">›</span>
              <span>{line}</span>
              {idx === currentLineIndex && (
                <span className="inline-block w-2 h-3.5 bg-cyber-red animate-cursor-blink ml-1" />
              )}
            </div>
          ))}
        </div>

        {/* System Bar & Telemetry */}
        <div className="space-y-3 pt-3 border-t border-white/5">
          <div className="flex justify-between items-center text-[11px] font-mono">
            <span className="text-cyber-muted flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
              PORTFOLIO CORE MODULES
            </span>
            <span className="text-cyber-red font-bold">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-cyber-cardBorder/40">
            <div
              className="h-full bg-gradient-to-r from-cyber-red to-cyber-cyan transition-all duration-75 ease-out shadow-[0_0_8px_#FF3B30]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between text-[10px] font-mono text-cyber-dim">
            <span>SEC_ADDR: 0x7FFF98A2</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3 h-3" /> VERIFIED RUNTIME
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
