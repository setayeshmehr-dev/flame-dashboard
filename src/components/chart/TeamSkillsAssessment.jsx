"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts"

const data = [
  {
    skill: "Frontend",
    current: 88,
    previous: 72,
  },
  {
    skill: "Backend",
    current: 75,
    previous: 68,
  },
  {
    skill: "Design",
    current: 82,
    previous: 78,
  },
  {
    skill: "DevOps",
    current: 65,
    previous: 52,
  },
  {
    skill: "Testing",
    current: 70,
    previous: 58,
  },
  {
    skill: "Security",
    current: 58,
    previous: 45,
  },
]

export default function TeamSkillsAssessment() {
  return (
    <div className=" text-card-foreground shadow-sm transition-shadow duration-200 rounded-xl border border-border bg-card p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Team Skills Assessment
        </h2>

        <p className="text-sm text-muted-foreground">
          Current vs previous quarter competencies
        </p>
      </div>

      <div className="h-100 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="68%"
          >
            <PolarGrid />

            <PolarAngleAxis
                dataKey="skill"
                tick={{
                    fill: "currentColor",
                    fontSize: 13,
                }}
                tickMargin={32}
            />

            <PolarRadiusAxis
              angle={25}
              domain={[0, 100]}
              tickCount={5}
              axisLine={false}
              tick={{
                fill: "currentColor",
                fontSize: 11,
              }}
            />
            <Tooltip
                content={({ active, payload }) => {
                    if (!active || !payload?.length) return null

                    return (
                    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
                        <p className="mb-2 text-sm font-semibold">
                        {payload[0]?.payload?.skill}
                        </p>

                        <div className="space-y-1 text-xs">
                        <div className="flex items-center justify-between gap-6">
                            <span className="text-muted-foreground">
                            Current
                            </span>

                            <span className="font-semibold text-primary">
                            {payload.find(
                                (item) => item.dataKey === "current"
                            )?.value}%
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-6">
                            <span className="text-muted-foreground">
                            Previous
                            </span>

                            <span className="font-semibold text-secondary">
                            {payload.find(
                                (item) => item.dataKey === "previous"
                            )?.value}%
                            </span>
                        </div>
                        </div>
                    </div>
                    )
                }}
                />

            <Radar
                name="Current"
                dataKey="current"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.18}
                strokeWidth={2.5}
                dot={{
                    r: 4,
                    fill: "var(--primary)",
                }}
            />

            <Radar
                name="Previous"
                dataKey="previous"
                stroke="var(--secondary)"
                fill="var(--secondary)"
                fillOpacity={0.06}
                strokeWidth={2}
                strokeDasharray="6 5"
                dot={{
                    r: 4,
                    fill: "var(--secondary)",
                }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="size-2.5 rounded-full bg-primary" />
          <span>Current</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="size-2.5 rounded-full bg-secondary" />
          <span>Previous</span>
        </div>
      </div>
    </div>
  )
}