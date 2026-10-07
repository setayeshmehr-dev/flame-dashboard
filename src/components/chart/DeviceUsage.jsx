"use client"

import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip
} from "recharts"

const data = [
  {
    name: "Mobile",
    value: 42,
    fill: "var(--primary)",
  },
  {
    name: "Desktop",
    value: 35,
    fill: "var(--secondary)",
  },
  {
    name: "Tablet",
    value: 15,
    fill: "color-mix(in oklch, var(--primary) 70%, black)",
  },
  {
    name: "Other",
    value: 8,
    fill: "color-mix(in oklch, var(--secondary) 70%, black)",
  },
]

export default function DeviceUsage() {
  return (
    <div className="text-card-foreground shadow-sm transition-shadow duration-200 rounded-xl border border-border bg-card p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Device Usage
        </h2>

        <p className="text-sm text-muted-foreground">
          Session distribution by device type
        </p>
      </div>

      <div className="relative mx-auto h-65 w-full max-w-75">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="28%"
            outerRadius="92%"
            barSize={12}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <Tooltip
                content={({ active, payload }) => {
                    if (!active || !payload?.length) return null

                    const item = payload[0]?.payload

                    return (
                    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
                        <div className="flex items-center gap-2">
                        <span
                            className="size-2.5 rounded-full"
                            style={{ backgroundColor: item.fill }}
                        />

                        <span className="text-sm font-medium">
                            {item.name}
                        </span>

                        <span className="text-sm font-semibold">
                            {item.value}%
                        </span>
                        </div>
                    </div>
                    )
                }}
                />
            <RadialBar
              dataKey="value"
              background={{
                fill: "var(--muted)",
              }}
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>

      </div>

      <div className="mt-4 space-y-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: item.fill }}
              />

              <span>{item.name}</span>
            </div>

            <span className="font-semibold">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}