import React from "react";

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-accent-primary font-mono text-sm uppercase tracking-[0.2em]">
        {children}
      </h2>
      <div className="h-[1px] flex-1 bg-border-subtle" />
    </div>
  );
}
