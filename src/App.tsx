import React, { useEffect } from "react";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { InsightsSection } from "./components/sections/InsightsSection";
import { FinancialsSection } from "./components/sections/FinancialsSection";
import { VerdictSection } from "./components/sections/VerdictSection";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useDashboardStore } from "./store/dashboardStore";

function App() {
  const setActiveSection = useDashboardStore((state) => state.setActiveSection);
  const activeId = useScrollSpy(
    ["overview", "insights", "financials", "verdict"],
    100,
  );

  useEffect(() => {
    if (activeId) {
      setActiveSection(activeId);
    }
  }, [activeId, setActiveSection]);

  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary/30">
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <InsightsSection />
        <FinancialsSection />
        <VerdictSection />
      </main>

      <footer className="py-8 text-center border-t border-border-subtle bg-surface/50">
        <p className="text-text-muted font-mono text-xs">
          Interactive Dashboard generated from Tesla Q4 & FY 2025 Update.
        </p>
      </footer>
    </div>
  );
}

export default App;
