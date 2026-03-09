import React from "react";
import { motion } from "framer-motion";
import { dashboardData } from "../../data/dashboardData";
import { SectionLabel } from "../ui/SectionLabel";
import { Badge } from "../ui/Badge";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function VerdictSection() {
  const { verdict, hiddenSignals, meta } = dashboardData;

  return (
    <section
      id="verdict"
      className="py-24 px-6 bg-surface/30 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel>Final Verdict</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-bg-base border border-border-subtle p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl font-display text-accent-primary">
                {meta.overallScore.value}
                <span className="text-3xl text-text-muted">/10</span>
              </div>
              <div>
                <Badge variant="positive">
                  {verdict.recommendation.toUpperCase()}
                </Badge>
                <div className="text-text-muted font-mono text-xs mt-2">
                  Overall Confidence Score
                </div>
              </div>
            </div>
            <p className="text-text-secondary font-mono text-base leading-relaxed mb-8">
              {verdict.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-text-primary font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-semantic-positive" />{" "}
                  Drivers
                </h4>
                <ul className="space-y-3">
                  {verdict.topReasons.map((reason, i) => (
                    <li
                      key={i}
                      className="text-text-secondary font-mono text-sm pl-4 border-l border-border-subtle"
                    >
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-text-primary font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-semantic-warning" />{" "}
                  Concerns
                </h4>
                <ul className="space-y-3">
                  {verdict.topConcerns.map((concern, i) => (
                    <li
                      key={i}
                      className="text-text-secondary font-mono text-sm pl-4 border-l border-border-subtle"
                    >
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-bg-base border border-border-subtle p-6">
              <h4 className="text-text-primary font-mono text-sm uppercase tracking-widest mb-4">
                Hidden Signals
              </h4>
              <div className="space-y-6">
                {hiddenSignals.map((signal) => (
                  <div key={signal.id}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-accent-primary font-mono text-xs uppercase">
                        {signal.type}
                      </span>
                      <Badge
                        variant={
                          signal.severity === "medium" ? "warning" : "neutral"
                        }
                      >
                        {signal.severity}
                      </Badge>
                    </div>
                    <h5 className="text-text-primary font-display text-lg mb-1">
                      {signal.title}
                    </h5>
                    <p className="text-text-muted font-mono text-xs leading-relaxed">
                      {signal.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
