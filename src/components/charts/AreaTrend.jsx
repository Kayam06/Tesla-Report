import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartWrapper } from "./ChartWrapper";

export function AreaTrend({ data, title, xKey, yKeys, colors, sourceNote }) {
  return (
    <ChartWrapper title={title} sourceNote={sourceNote}>
      <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <defs>
          {yKeys.map((key, i) => (
            <linearGradient
              key={`color${key}`}
              id={`color${key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={colors[i % colors.length]}
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor={colors[i % colors.length]}
                stopOpacity={0}
              />
            </linearGradient>
          ))}
        </defs>
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
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[i % colors.length]}
            fillOpacity={1}
            fill={`url(#color${key})`}
            isAnimationActive={true}
            animationDuration={1000}
          />
        ))}
      </AreaChart>
    </ChartWrapper>
  );
}
