import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartWrapper } from "./ChartWrapper";

export function TrendLine({ data, title, xKey, yKeys, colors, sourceNote }) {
  return (
    <ChartWrapper title={title} sourceNote={sourceNote}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--color-border-subtle)"
          vertical={false}
        />
        <XAxis
          dataKey={xKey}
          stroke="var(--color-text-muted)"
          tick={{
            fill: "var(--color-text-muted)",
            fontSize: 12,
            fontFamily: "var(--font-mono)",
          }}
        />
        <YAxis
          stroke="var(--color-text-muted)"
          tick={{
            fill: "var(--color-text-muted)",
            fontSize: 12,
            fontFamily: "var(--font-mono)",
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border-subtle)",
            fontFamily: "var(--font-mono)",
          }}
          itemStyle={{ color: "var(--color-text-primary)" }}
        />
        <Legend
          wrapperStyle={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
        />
        {yKeys.map((key, i) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[i % colors.length]}
            strokeWidth={2}
            dot={{ r: 4, fill: "var(--color-bg-base)", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1000}
          />
        ))}
      </LineChart>
    </ChartWrapper>
  );
}
