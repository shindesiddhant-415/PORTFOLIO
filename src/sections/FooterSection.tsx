import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { profileData } from "../data/profile";
import { navItems } from "../data/navigation";
import { GithubIcon, LinkedinIcon, CodolioIcon, CodeChefIcon } from "../components/SocialIcons";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-cyber-cardBorder py-12 text-cyber-muted font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/5">
          {/* Left Brand */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-cyber-card border border-cyber-cardBorder flex items-center justify-center text-white font-bold text-xs">
                SS
              </div>
              <span className="font-heading font-bold text-white text-base tracking-tight">
                {profileData.name}
              </span>
              <span className="text-cyber-red text-xs">// DEV</span>
            </div>
            <p className="text-[11px] text-cyber-dim font-sans max-w-sm">
              Computer Science Engineering student at MIT Academy of Engineering, Pune.
              Building intelligent systems and practical software.
            </p>
          </div>

          {/* Center Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-2.5">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-black/60 border border-white/5 hover:border-cyber-red/50 hover:text-white transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-black/60 border border-white/5 hover:border-cyber-red/50 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {profileData.contact.codolio && (
              <a
                href={profileData.contact.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-black/60 border border-white/5 hover:border-cyber-red/50 hover:text-white transition-colors"
                aria-label="Codolio Profile"
                title="Codolio: Siddhant415"
              >
                <CodolioIcon className="w-4 h-4 text-emerald-400" />
              </a>
            )}

            {profileData.contact.codechef && (
              <a
                href={profileData.contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-black/60 border border-white/5 hover:border-cyber-red/50 hover:text-white transition-colors"
                aria-label="CodeChef Profile"
                title="CodeChef"
              >
                <CodeChefIcon className="w-4 h-4 text-amber-400" />
              </a>
            )}

            <a
              href={`mailto:${profileData.contact.email}`}
              className="p-2 rounded bg-black/60 border border-white/5 hover:border-cyber-red/50 hover:text-white transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-cyber-card border border-cyber-cardBorder hover:border-cyber-red hover:text-white transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyber-red" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-cyber-dim">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Siddhant Shinde. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>SYS_STATUS: NOMINAL</span>
            <span>•</span>
            <span>CLASS OF 2028</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
