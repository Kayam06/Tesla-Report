import React from "react";
import { motion } from "framer-motion";
import { useDashboardStore } from "../../store/dashboardStore";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "insights", label: "Insights" },
  { id: "financials", label: "Financials" },
  { id: "verdict", label: "Verdict" },
];

export function Navbar() {
  const activeSection = useDashboardStore((state) => state.activeSection);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-display text-2xl tracking-widest text-text-primary">
          TESLA<span className="text-accent-primary">.Q4</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-sm font-mono uppercase tracking-widest py-2"
            >
              <span
                className={
                  activeSection === item.id
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary transition-colors"
                }
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
