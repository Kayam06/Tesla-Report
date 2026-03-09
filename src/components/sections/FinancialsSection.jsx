import React from "react";
import { motion } from "framer-motion";
import { dashboardData } from "../../data/dashboardData";
import { SectionLabel } from "../ui/SectionLabel";
import { BarComparison } from "../charts/BarComparison";
import { AreaTrend } from "../charts/AreaTrend";
import { TrendLine } from "../charts/TrendLine";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FinancialsSection() {
  const { charts } = dashboardData;
  const revChart = charts.find((c) => c.id === "c1");
  const energyChart = charts.find((c) => c.id === "c2");
  const fsdChart = charts.find((c) => c.id === "c3");

  return (
    <section id="financials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel>Data & Trends</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <BarComparison {...revChart} />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <AreaTrend {...energyChart} />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TrendLine {...fsdChart} />
        </motion.div>
      </div>
    </section>
  );
}
