"use client"

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const q1Data = [
  { spend: 1500, revenue: 4200 },
  { spend: 1800, revenue: 5800 },
  { spend: 2400, revenue: 8200 },
  { spend: 2900, revenue: 9400 },
  { spend: 3200, revenue: 10500 },
  { spend: 3500, revenue: 11200 },
  { spend: 4200, revenue: 13800 },
  { spend: 4800, revenue: 14500 },
  { spend: 5100, revenue: 16800 },
  { spend: 5800, revenue: 18900 },
  { spend: 6200, revenue: 21000 },
  { spend: 7500, revenue: 24600 },
]

const q2Data = [
  { spend: 1600, revenue: 6200 },
  { spend: 2200, revenue: 7400 },
  { spend: 2800, revenue: 9800 },
  { spend: 3100, revenue: 10800 },
  { spend: 3600, revenue: 12200 },
  { spend: 3800, revenue: 12800 },
  { spend: 4500, revenue: 15200 },
  { spend: 4900, revenue: 16100 },
  { spend: 5200, revenue: 17200 },
  { spend: 5600, revenue: 19400 },
  { spend: 6800, revenue: 23500 },
  { spend: 7200, revenue: 24800 },
]

function CustomDot({ cx, cy, payload, fill }) {
  const minSize = 5
  const maxSize = 16
  const minValue = 4000
  const maxValue = 20000

  const size =
    minSize +
    ((payload.revenue - minValue) / (maxValue - minValue)) *
      (maxSize - minSize)

  const radius = Math.max(
    minSize,
    Math.min(maxSize, size)
  )

  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={fill}
      fillOpacity={0.5}
    />
  )
}

export default function MarketingSpendChart() {
  return (
    <div className=" text-card-foreground shadow-sm transition-shadow duration-200 xl:col-span-7 rounded-xl border border-border bg-card p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Marketing Spend vs Revenue
        </h2>

        <p className="text-sm text-muted-foreground">
          Campaign performance comparison by quarter
        </p>
      </div>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 10,
              right: 20,
              bottom: 10,
              left: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
            />

            <XAxis
              type="number"
              dataKey="spend"
              domain={[0, 8000]}
              tickFormatter={(value) => `$${value / 1000}k`}
              tick={{
                fill: "currentColor",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="number"
              dataKey="revenue"
              domain={[0, 26000]}
              tickFormatter={(value) => `$${value / 1000}k`}
              tick={{
                fill: "currentColor",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                stroke: "var(--border)",
                strokeDasharray: "4 4",
              }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null

                const point = payload[0]?.payload

                return (
                  <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">

                    <p className="text-xs text-muted-foreground">
                      Spend: ${point.spend.toLocaleString()}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Revenue: ${point.revenue.toLocaleString()}
                    </p>
                  </div>
                )
              }}
            />

            <Scatter
              name="Q1 Campaigns"
              data={q1Data}
              fill="var(--primary)"
              shape={<CustomDot />}
            />

            <Scatter
              name="Q2 Campaigns"
              data={q2Data}
              fill="var(--secondary)"
              shape={<CustomDot />}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="size-2.5 rounded-full bg-primary" />
          <span>Q1 Campaigns</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="size-2.5 rounded-full bg-secondary" />
          <span>Q2 Campaigns</span>
        </div>
      </div>
    </div>
  )
}