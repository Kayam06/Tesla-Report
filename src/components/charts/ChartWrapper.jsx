import React from "react";
import { ResponsiveContainer } from "recharts";

export function ChartWrapper({ title, sourceNote, children, height = 300 }) {
  return (
    <div className="bg-surface border border-border-subtle p-6 flex flex-col">
      <h3 className="text-text-primary font-display text-xl mb-6">{title}</h3>
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
      {sourceNote && (
        <div className="mt-4 text-text-muted font-mono text-xs text-right">
          Source: {sourceNote}
        </div>
      )}
    </div>
  );
}
