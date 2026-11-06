import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: string; // e.g. "02", "03", "2028"
  label: string;
  helper?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, helper }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<string>("00");

  useEffect(() => {
    if (!isInView) return;

    // Check if numeric
    const numericTarget = parseInt(value, 10);
    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200; // ms
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easedProgress * numericTarget);

      // Preserve leading zero for small numbers like 02, 03
      if (value.startsWith("0") && value.length === 2) {
        setDisplayValue(current < 10 ? `0${current}` : `${current}`);
      } else {
        setDisplayValue(`${current}`);
      }

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="p-4 md:p-5 rounded-lg bg-cyber-card/80 border border-cyber-cardBorder/60 hover:border-cyber-red/50 transition-all duration-300 relative group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-cyber-red/40 group-hover:bg-cyber-red transition-colors" />
      <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
        <span>{displayValue}</span>
        <span className="text-cyber-red text-xl">.</span>
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-cyber-muted mt-1.5 font-medium">
        {label}
      </div>
      {helper && <div className="text-[11px] text-cyber-dim mt-0.5">{helper}</div>}
    </div>
  );
};

