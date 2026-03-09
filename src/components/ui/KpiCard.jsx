import React from "react";
import { motion } from "framer-motion";
import numeral from "numeral";
import { Info, TrendingUp, TrendingDown } from "lucide-react";
import { useCountUp } from "../../hooks/useCountUp";

export function KpiCard({ kpi }) {
  const displayValue = useCountUp(kpi.value);

  const formatValue = (val) => {
    if (kpi.unit === "currency")
      return numeral(val).format("$0.0a").toUpperCase();
    if (kpi.unit === "number") return numeral(val).format("0.0a").toUpperCase();
    return numeral(val).format("0.0");
  };

  const isPositive = kpi.deltaDirection === "up";

  return (
    <motion.div
      className="bg-surface border border-border-subtle p-6 flex flex-col relative overflow-hidden group"
      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-text-secondary font-mono text-sm uppercase tracking-widest">
          {kpi.label}
        </h3>
        <div className="text-text-muted cursor-help" title={kpi.tooltip}>
          <Info size={16} />
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-display text-4xl font-bold text-text-primary">
          {formatValue(displayValue)}
        </span>
        {kpi.unit !== "currency" && kpi.unit !== "number" && (
          <span className="text-text-secondary font-mono text-sm">
            {kpi.unit}
          </span>
        )}
      </div>

      <div
        className={`flex items-center gap-1 text-sm font-mono ${isPositive ? "text-semantic-positive" : "text-semantic-negative"}`}
      >
        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{Math.abs(kpi.delta)}% YoY</span>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 h-1 bg-accent-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
