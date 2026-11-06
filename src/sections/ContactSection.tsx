import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  Send,
  Terminal,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { TerminalSectionHeader } from "../components/TerminalSectionHeader";
import { profileData } from "../data/profile";
import type { ToastMessage } from "../components/Toast";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodolioIcon, CodeChefIcon } from "../components/SocialIcons";

interface ContactSectionProps {
  onAddToast: (toast: Omit<ToastMessage, "id">) => void;
}

// Configured Form Endpoint with real Formspree endpoint
export const CONTACT_FORM_ENDPOINT: string = "https://formspree.io/f/xqppozog";

export const ContactSection: React.FC<ContactSectionProps> = ({ onAddToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FF3B30", "#38BDF8", "#FFFFFF"],
      });
      onAddToast({
        type: "success",
        title: "Email Copied to Clipboard!",
        message: profileData.contact.email,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      onAddToast({
        type: "error",
        title: "Copy Failed",
        message: "Please manually copy the email address.",
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message content is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!validate()) {
      onAddToast({
        type: "error",
        title: "Validation Error",
        message: "Please fix the highlighted form errors.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // If user hasn't configured Formspree endpoint yet, provide clear simulation/fallback notice
      if (
        CONTACT_FORM_ENDPOINT.includes("placeholder_id") ||
        !CONTACT_FORM_ENDPOINT
      ) {
        // Fallback: simulate realistic transmission & give instructions
        await new Promise((res) => setTimeout(res, 1200));
        setSubmittedSuccessfully(true);
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF3B30", "#38BDF8", "#FFFFFF"],
        });
        onAddToast({
          type: "success",
          title: "Message Dispatched Successfully",
          message:
            "Note: Add your Formspree or Web3Forms endpoint in src/sections/ContactSection.tsx for live inbox delivery.",
        });
      } else {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmittedSuccessfully(true);
          confetti({
            particleCount: 60,
            spread: 75,
            origin: { y: 0.6 },
          });
          onAddToast({
            type: "success",
            title: "Transmission Received!",
            message: "Thank you for reaching out. I'll get back to you shortly.",
          });
        } else {
          const data = await response.json();
          throw new Error(data.error || "Failed to submit message");
        }
      }
    } catch (err: any) {
      setFormError(err.message || "Failed to deliver transmission. Please email directly.");
      onAddToast({
        type: "error",
        title: "Transmission Error",
        message: err.message || "Could not reach contact endpoint.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TerminalSectionHeader
          badge="DISPATCH COMMUNICATION"
          terminalCode="//06.00 SEC_CONTACT_DISP"
          title="Initiate Contact & Collaboration."
          highlightWord="Collaboration"
          description="Looking for internships, open-source projects, and engineering conversations. Feel free to reach out directly."
          align="center"
        />

        {/* Quick Email & Copy Section */}
        <div className="max-w-xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 p-1.5 pl-4 rounded-xl bg-cyber-card border border-cyber-cardBorder shadow-cyber-card max-w-full">
            <span className="font-mono text-xs sm:text-sm text-zinc-300 truncate select-all">
              {profileData.contact.email}
            </span>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyber-red text-white text-xs font-mono font-bold tracking-wider hover:bg-cyber-red/90 transition-all shadow-cyber-red shrink-0"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-card border border-white/10 text-xs font-mono text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-cyber-red" />
              <span>GITHUB</span>
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-card border border-white/10 text-xs font-mono text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-cyber-cyan" />
              <span>LINKEDIN</span>
            </a>

            {profileData.contact.leetcode && (
              <a
                href={profileData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-card border border-white/10 text-xs font-mono text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                <span>LEETCODE</span>
              </a>
            )}

            {profileData.contact.codolio && (
              <a
                href={profileData.contact.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-card border border-white/10 text-xs font-mono text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
              >
                <CodolioIcon className="w-4 h-4 text-emerald-400" />
                <span>CODOLIO</span>
              </a>
            )}

            {profileData.contact.codechef && (
              <a
                href={profileData.contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-card border border-white/10 text-xs font-mono text-cyber-muted hover:text-white hover:border-cyber-red/50 transition-colors"
              >
                <CodeChefIcon className="w-4 h-4 text-amber-400" />
                <span>CODECHEF</span>
              </a>
            )}
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cyber-card border border-cyber-cardBorder rounded-2xl p-6 sm:p-8 shadow-cyber-card"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Terminal className="w-4 h-4 text-cyber-red" />
                <span>DIRECT_TRANSMISSION_FORM</span>
              </div>
              <span className="text-cyber-muted text-[10px]">ENCRYPTED_TLS</span>
            </div>

            {submittedSuccessfully ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-white">
                  Transmission Dispatched Successfully!
                </h4>
                <p className="text-cyber-muted text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I will review your message and
                  respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmittedSuccessfully(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 px-5 py-2.5 rounded-lg bg-cyber-card border border-cyber-cardBorder text-xs font-mono text-white hover:border-cyber-red/60 transition-colors"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {formError && (
                  <div className="p-3 rounded-lg bg-red-950/80 border border-cyber-red/40 flex items-center gap-2 text-xs text-cyber-red font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-cyber-muted font-medium"
                    >
                      YOUR NAME <span className="text-cyber-red">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                        errors.name ? "border-cyber-red" : "border-white/10"
                      } text-white font-sans text-sm focus:outline-none focus:border-cyber-red transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-cyber-red font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-cyber-muted font-medium"
                    >
                      EMAIL ADDRESS <span className="text-cyber-red">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                        errors.email ? "border-cyber-red" : "border-white/10"
                      } text-white font-sans text-sm focus:outline-none focus:border-cyber-red transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-cyber-red font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs text-cyber-muted font-medium"
                  >
                    SUBJECT / INQUIRY SCOPE
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Summer Internship / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-cyber-red transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs text-cyber-muted font-medium"
                  >
                    MESSAGE DETAILS <span className="text-cyber-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-black/60 border ${
                      errors.message ? "border-cyber-red" : "border-white/10"
                    } text-white font-sans text-sm focus:outline-none focus:border-cyber-red transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-cyber-red font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-cyber-red text-white font-mono text-xs font-bold tracking-wider hover:bg-cyber-red/90 transition-all shadow-cyber-red flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>DISPATCHING TRANSMISSION...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>DISPATCH MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
