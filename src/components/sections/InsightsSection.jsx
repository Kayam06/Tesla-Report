import React from "react";
import { motion } from "framer-motion";
import { dashboardData } from "../../data/dashboardData";
import { SectionLabel } from "../ui/SectionLabel";
import { Badge } from "../ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function InsightsSection() {
  const { insights } = dashboardData;

  return (
    <section
      id="insights"
      className="py-24 px-6 bg-surface/50 border-y border-border-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel>Core Insights</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-base border border-border-subtle p-8 hover:border-border-strong transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <Badge
                  variant={
                    insight.importance === "critical" ? "negative" : "neutral"
                  }
                >
                  {insight.importance.toUpperCase()} PRIORITY
                </Badge>
                <span className="text-text-muted font-mono text-xs">
                  Source: {insight.source}
                </span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-text-primary">
                {insight.title}
              </h3>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                {insight.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
