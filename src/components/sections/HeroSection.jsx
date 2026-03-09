import React from "react";
import { motion } from "framer-motion";
import { dashboardData } from "../../data/dashboardData";
import { KpiCard } from "../ui/KpiCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export function HeroSection() {
  const { meta, kpis } = dashboardData;

  return (
    <section
      id="overview"
      className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-accent-primary/5 blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-semantic-positive/5 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent-primary font-mono text-sm uppercase tracking-widest border border-accent-primary/30 px-3 py-1 bg-accent-primary/10">
              {meta.documentType}
            </span>
            <span className="text-text-muted font-mono text-sm">
              {meta.date}
            </span>
          </div>
          <h1 className="text-display text-6xl md:text-8xl font-bold leading-[0.85] mb-8">
            {meta.title.toUpperCase()}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-mono leading-relaxed max-w-2xl border-l-2 border-accent-primary pl-6">
            {meta.tldr}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {kpis.map((kpi) => (
            <motion.div key={kpi.id} variants={fadeUp}>
              <KpiCard kpi={kpi} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
