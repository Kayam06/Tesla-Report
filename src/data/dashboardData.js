export const dashboardData = {
  meta: {
    title: "Tesla Q4 & FY 2025 Update",
    documentType: "Financial & Operational Report",
    industry: "Automotive, Energy, AI & Robotics",
    audience: "Investors, Analysts, General Public",
    date: "January 2026",
    source: "Tesla, Inc.",
    overallScore: {
      value: 8.5,
      rationale:
        "Strong energy growth and AI advancements offset automotive revenue decline.",
    },
    sentiment: "confident",
    tldr: "Tesla is successfully transitioning from a hardware-centric automaker to a physical AI company. Record energy deployments and FSD advancements laid the foundation for 2026 volume production of Cybercab, Semi, and Optimus, despite a 10% YoY drop in automotive revenues.",
    keyQuote: {
      text: "2025 marked a critical year for Tesla as we further expanded our mission and continued our transition from a hardware-centric business to a physical AI company.",
      location: "Page 3, Summary",
    },
  },
  kpis: [
    {
      id: "rev",
      label: "FY 2025 Total Revenue",
      value: 94827000000,
      unit: "currency",
      delta: -3,
      deltaDirection: "down",
      trend: [53823, 81462, 96773, 97690, 94827],
      tooltip:
        "Total revenues for 2025, down 3% YoY primarily due to lower vehicle deliveries.",
    },
    {
      id: "fcf",
      label: "FY 2025 Free Cash Flow",
      value: 6220000000,
      unit: "currency",
      delta: 74,
      deltaDirection: "up",
      trend: [4983, 7561, 4357, 3581, 6220],
      tooltip: "Operating cash flow less capex. Increased 74% YoY.",
    },
    {
      id: "deliv",
      label: "FY 2025 Deliveries",
      value: 1636129,
      unit: "number",
      delta: -9,
      deltaDirection: "down",
      trend: [936222, 1313851, 1808581, 1789226, 1636129],
      tooltip: "Total vehicle deliveries in 2025.",
    },
    {
      id: "energy",
      label: "FY 2025 Energy Deployed",
      value: 46.7,
      unit: "GWh",
      delta: 49,
      deltaDirection: "up",
      trend: [4.0, 6.5, 14.7, 31.4, 46.7],
      tooltip:
        "Energy storage deployed in GWh. Record deployments driven by Megapack.",
    },
  ],
  insights: [
    {
      id: "i1",
      title: "Transition to Physical AI",
      body: "Tesla is pivoting from just building cars to developing autonomous systems and humanoid robots, leveraging their vertical integration in AI silicon, software, and manufacturing.",
      importance: "critical",
      confidence: "high",
      source: "Page 3",
    },
    {
      id: "i2",
      title: "Energy Storage Boom",
      body: "Energy generation and storage revenue grew 27% YoY to $12.77B, with deployments up 49% to 46.7 GWh, marking a significant shift in revenue mix.",
      importance: "high",
      confidence: "high",
      source: "Page 5",
    },
    {
      id: "i3",
      title: "Automotive Headwinds",
      body: "Total automotive revenues declined 10% YoY to $69.5B, and deliveries dropped 9% YoY to 1.63M units, reflecting challenging market conditions and product lifecycle transitions.",
      importance: "high",
      confidence: "high",
      source: "Page 5, 7",
    },
    {
      id: "i4",
      title: "xAI Investment",
      body: "Tesla agreed to invest $2B in xAI to enhance its ability to develop and deploy AI products into the physical world at scale.",
      importance: "medium",
      confidence: "high",
      source: "Page 12",
    },
  ],
  charts: [
    {
      id: "c1",
      type: "bar",
      title: "Quarterly Revenues ($M)",
      data: [
        { name: "Q4-24", Auto: 19798, Energy: 3061, Services: 2848 },
        { name: "Q1-25", Auto: 13967, Energy: 2730, Services: 2638 },
        { name: "Q2-25", Auto: 16661, Energy: 2789, Services: 3046 },
        { name: "Q3-25", Auto: 21205, Energy: 3415, Services: 3475 },
        { name: "Q4-25", Auto: 17693, Energy: 3837, Services: 3371 },
      ],
      xKey: "name",
      yKeys: ["Auto", "Energy", "Services"],
      colors: ["#47BFFF", "#10B981", "#A0AABF"],
      sourceNote: "Page 4",
    },
    {
      id: "c2",
      type: "line",
      title: "Energy Storage Deployed (GWh)",
      data: [
        { name: "2021", value: 4.0 },
        { name: "2022", value: 6.5 },
        { name: "2023", value: 14.7 },
        { name: "2024", value: 31.4 },
        { name: "2025", value: 46.7 },
      ],
      xKey: "name",
      yKeys: ["value"],
      colors: ["#10B981"],
      sourceNote: "Page 7",
    },
    {
      id: "c3",
      type: "area",
      title: "Cumulative FSD Miles (Billions)",
      data: [
        { name: "Sep-21", value: 0.1 },
        { name: "Dec-22", value: 0.5 },
        { name: "Dec-23", value: 1.5 },
        { name: "Dec-24", value: 4.0 },
        { name: "Dec-25", value: 8.0 },
      ],
      xKey: "name",
      yKeys: ["value"],
      colors: ["#EF4444"],
      sourceNote: "Page 10 (Estimated from chart)",
    },
  ],
  risks: [
    {
      id: "r1",
      label: "Automotive Demand",
      probability: "high",
      impact: "high",
      description:
        "Aggregate demand for products and supply chain readiness may impact deliveries.",
    },
    {
      id: "r2",
      label: "AI & Autonomy Execution",
      probability: "med",
      impact: "high",
      description:
        "Delays in FSD regulatory approval or Robotaxi/Optimus production ramps.",
    },
    {
      id: "r3",
      label: "Margin Pressure",
      probability: "med",
      impact: "med",
      description:
        "Higher average cost per vehicle due to lower fixed cost absorption and tariffs.",
    },
  ],
  hiddenSignals: [
    {
      id: "hs1",
      type: "contradiction",
      title: "Auto Decline vs Energy Growth",
      body: "While automotive revenues fell 10%, energy grew 27%, showing Tesla is becoming less reliant on car sales.",
      severity: "medium",
    },
    {
      id: "hs2",
      type: "language",
      title: "Physical AI Focus",
      body: "The document heavily emphasizes 'physical AI' and 'compute', signaling a narrative shift to investors to value Tesla as an AI company rather than an automaker.",
      severity: "low",
    },
  ],
  verdict: {
    recommendation: "positive",
    summary:
      "Tesla is navigating a challenging automotive market by successfully scaling its highly profitable energy business and laying the groundwork for its next phase of growth in AI, autonomy, and robotics.",
    topReasons: [
      "Record energy deployments and margins",
      "Strong free cash flow generation ($6.2B)",
      "Clear roadmap for Cybercab, Semi, and Optimus in 2026",
    ],
    topConcerns: [
      "Declining automotive deliveries and revenues",
      "Regulatory hurdles for unsupervised FSD",
      "Tariff and supply chain risks",
    ],
    conditions: [
      "Successful ramp of AI5 inference chips",
      "Regulatory approval for Robotaxi expansion",
    ],
  },
  glossary: [
    {
      term: "FSD (Supervised)",
      definition:
        "Full Self-Driving. Advanced driver assistance system requiring active driver supervision.",
      context: "Page 3",
    },
    {
      id: "g2",
      term: "Megapack",
      definition:
        "Large-scale rechargeable lithium-ion battery stationary energy storage product.",
      context: "Page 8",
    },
    {
      id: "g3",
      term: "Optimus",
      definition: "Tesla's general-purpose robotic humanoid under development.",
      context: "Page 8",
    },
    {
      id: "g4",
      term: "Cybercab",
      definition: "Tesla's upcoming dedicated robotaxi vehicle.",
      context: "Page 8",
    },
  ],
};
