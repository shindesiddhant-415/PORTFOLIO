import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TerminalBootIntro } from "./components/TerminalBootIntro";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Navbar } from "./components/Navbar";
import { Toast, type ToastMessage } from "./components/Toast";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection";
import { ProjectMatrixSection } from "./sections/ProjectMatrixSection";
import { EducationSection } from "./sections/EducationSection";
import { JourneySection } from "./sections/JourneySection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";

export function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleAddToast = (toast: Omit<ToastMessage, "id">) => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const newToast: ToastMessage = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      handleDismissToast(id);
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-cyber-bg text-cyber-text cyber-grid-bg font-sans selection:bg-cyber-red selection:text-white">
      {/* Boot Screen Terminal Intro */}
      <AnimatePresence>
        {!bootComplete && (
          <TerminalBootIntro onComplete={() => setBootComplete(true)} />
        )}
      </AnimatePresence>

      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Global Cyber Scanline Atmosphere */}
      <div className="fixed inset-0 cyber-scanlines opacity-40 pointer-events-none z-30" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ProjectMatrixSection />
        <EducationSection />
        <JourneySection />
        <ContactSection onAddToast={handleAddToast} />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Global Notification Toasts */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}

export default App;
