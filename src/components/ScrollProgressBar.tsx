import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-black/40">
      <motion.div
        className="h-full bg-gradient-to-r from-cyber-red via-[#FF6358] to-cyber-cyan origin-left shadow-[0_0_12px_#FF3B30]"
        style={{ scaleX }}
      />
    </div>
  );
};

