import React, { useState } from "react";
import { MapPin, Brain, Shield, Terminal, Activity } from "lucide-react";
import { profileData } from "../data/profile";

interface DuotoneAvatarProps {
  photoSrc?: string;
}

export const DuotoneAvatar: React.FC<DuotoneAvatarProps> = ({ photoSrc = "/profile.webp" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Glow aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyber-red/25 to-cyber-cyan/15 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Main Card Frame */}
      <div className="relative bg-cyber-card border border-cyber-cardBorder rounded-2xl overflow-hidden shadow-cyber-card">
        {/* Card Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-cyber-cardBorder text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-red" />
            <span className="text-cyber-muted tracking-wider text-[11px]">PORTRAIT_ID // SYS_ARCH</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE</span>
          </div>
        </div>

        {/* Image / Cyber Initials Visual Container with Red Duotone Blend */}
        <div className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-[#18181D] to-[#0D0D10] flex items-center justify-center overflow-hidden">
          {/* Background grid inside card */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30" />
          <div className="absolute inset-0 cyber-scanlines opacity-40 pointer-events-none" />

          {!imageError ? (
            <div className="relative w-full h-full red-duotone">
              <img
                src={photoSrc}
                alt={profileData.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-[50%_18%] contrast-110 brightness-95 transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-90" />
            </div>
          ) : (
            /* Cyber Initials & Circuit Visual */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Outer decorative ring */}
              <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-2 border-cyber-red/40 bg-black/60 shadow-[0_0_30px_rgba(255,59,48,0.25)]">
                <div className="absolute inset-1 rounded-full border border-dashed border-cyber-cyan/30 animate-[spin_30s_linear_infinite]" />
                <div className="font-heading text-5xl font-extrabold text-white tracking-widest text-outline-red">
                  SS
                </div>
                <div className="absolute -bottom-2 px-2.5 py-0.5 bg-cyber-red text-white text-[10px] font-mono uppercase tracking-widest rounded">
                  B.TECH CSE
                </div>
              </div>

              <div className="mt-6 font-mono text-xs text-cyber-muted space-y-1">
                <div className="text-white font-medium flex items-center justify-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyber-red" />
                  {profileData.name}
                </div>
                <div className="text-[11px] text-cyber-dim">MIT Academy of Engineering, Pune</div>
              </div>
            </div>
          )}

          {/* Floating Pill Status Tag */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="bg-black/85 backdrop-blur-md border border-cyber-cardBorder/80 px-3.5 py-2 rounded-lg flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold tracking-wider text-[11px]">
                  {profileData.statusBadge}
                </span>
              </div>
              <span className="text-cyber-muted text-[10px] hidden sm:inline">EXP: 2028</span>
            </div>
          </div>
        </div>

        {/* 2-3 Stacked Mini Info Cards */}
        <div className="p-3 bg-black/40 border-t border-cyber-cardBorder space-y-2">
          {/* Mini Card 1 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-cyber-card/90 border border-white/5 hover:border-cyber-red/30 transition-colors text-xs font-mono">
            <div className="flex items-center gap-2 text-cyber-muted">
              <MapPin className="w-3.5 h-3.5 text-cyber-red" />
              <span>ACADEMIC BASE</span>
            </div>
            <span className="text-white font-medium text-[11px]">MIT AOE // CGPA 8.34</span>
          </div>

          {/* Mini Card 2 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-cyber-card/90 border border-white/5 hover:border-cyber-red/30 transition-colors text-xs font-mono">
            <div className="flex items-center gap-2 text-cyber-muted">
              <Brain className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>PRIMARY FOCUS</span>
            </div>
            <span className="text-white font-medium text-[11px]">Local LLMs, RAG & Full-Stack</span>
          </div>

          {/* Mini Card 3 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-cyber-card/90 border border-white/5 hover:border-cyber-red/30 transition-colors text-xs font-mono">
            <div className="flex items-center gap-2 text-cyber-muted">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>ALGORITHMIC</span>
            </div>
            <span className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
              <Shield className="w-3 h-3" /> 150+ Solved • CodeChef &amp; LeetCode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
