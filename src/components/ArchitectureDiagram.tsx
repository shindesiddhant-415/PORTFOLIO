import React, { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Cpu, Database, CheckCircle2, ArrowRight } from "lucide-react";
import type { ArchitectureNode } from "../data/projects";

interface ArchitectureDiagramProps {
  nodes?: ArchitectureNode[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes = [
    { id: "fe", name: "React Frontend", tech: "UI / Image Upload", type: "client" },
    { id: "be", name: "Node.js Backend", tech: "API Gateway & Auth", type: "gateway" },
    { id: "ml", name: "Flask ML API", tech: "PyTorch CNN Inference", type: "ml-engine" },
    { id: "db", name: "MongoDB", tech: "Disease Metadata Store", type: "db" },
    { id: "out", name: "Prediction Results", tech: "Advisory & Severity", type: "output" },
  ],
}) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getIcon = (type: ArchitectureNode["type"]) => {
    switch (type) {
      case "client":
        return <Monitor className="w-4 h-4 text-cyber-cyan" />;
      case "gateway":
        return <Server className="w-4 h-4 text-amber-400" />;
      case "ml-engine":
        return <Cpu className="w-4 h-4 text-cyber-red" />;
      case "db":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "output":
        return <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />;
    }
  };

  return (
    <div className="w-full bg-black/70 border border-cyber-cardBorder/80 rounded-xl p-4 md:p-5 font-mono">
      {/* Header telemetry */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-ping" />
          <span className="text-white font-semibold tracking-wider text-[11px]">
            SYSTEM ARCHITECTURE PIPELINE
          </span>
        </div>
        <span className="text-cyber-muted text-[10px] hidden sm:inline">END-TO-END INFERENCE</span>
      </div>

      {/* Nodes Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 relative">
        {nodes.map((node, index) => {
          const isSelected = activeNode === node.id;
          return (
            <React.Fragment key={node.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveNode(node.id)}
                className={`cursor-pointer p-3 rounded-lg border transition-all duration-300 relative ${
                  isSelected
                    ? "bg-cyber-redMuted border-cyber-red shadow-cyber-glow"
                    : "bg-cyber-card/90 border-white/10 hover:border-cyber-red/50"
                }`}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-cyber-red">0{index + 1}</span>
                  {getIcon(node.type)}
                </div>

                <div className="text-xs font-semibold text-white tracking-wide truncate">
                  {node.name}
                </div>
                <div className="text-[10px] text-cyber-muted mt-1 leading-tight line-clamp-2">
                  {node.tech}
                </div>

                {/* Animated data pulse indicator */}
                <div className="mt-2.5 flex items-center gap-1.5 text-[9px] text-cyber-dim">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-red/80 animate-pulse" />
                  <span>SYNC OK</span>
                </div>
              </motion.div>

              {/* Connecting arrow for larger screens */}
              {index < nodes.length - 1 && (
                <div
                  className="hidden sm:flex absolute items-center justify-center pointer-events-none"
                  style={{
                    left: `calc(${(index + 1) * 20}% - 10px)`,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  <ArrowRight className="w-4 h-4 text-cyber-red/50" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cyber-muted">
        <span className="flex items-center gap-1.5">
          <span className="text-cyber-cyan">›</span>
          Click any architecture node to inspect telemetry
        </span>
        <span className="text-[10px] text-cyber-dim">PROTOCOL: HTTP/REST + JSON</span>
      </div>
    </div>
  );
};
