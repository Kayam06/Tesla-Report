import React from "react";

export function Badge({ children, variant = "neutral" }) {
  const variants = {
    positive:
      "bg-semantic-positive/10 text-semantic-positive border-semantic-positive/20",
    negative:
      "bg-semantic-negative/10 text-semantic-negative border-semantic-negative/20",
    warning:
      "bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20",
    neutral:
      "bg-semantic-neutral/10 text-semantic-neutral border-semantic-neutral/20",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-mono border rounded-sm ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
