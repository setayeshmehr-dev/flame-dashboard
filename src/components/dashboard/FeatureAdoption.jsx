"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const features = [
  {
    name: "Dashboard",
    value: 94,
  },
  {
    name: "API",
    value: 78,
  },
  {
    name: "Webhooks",
    value: 62,
  },
  {
    name: "Team-Mgmt",
    value: 55,
  },
  {
    name: "SSO",
    value: 41,
  },
  {
    name: "Audit Log",
    value: 28,
  },
]

const chartConfig = {
  value: {
    label: "Usage",
  },
}

export default function FeatureAdoption() {
  return (
    <div className="text-card-foreground transition-shadow duration-200 col-span-full xl:col-span-5 flux-shadow rounded-2xl border bg-card shadow-s sm:p-6">

      {/* Header */}
      <div className="flex items-start justify-between sm:px-0 sm:pt-0 px-6 pt-6">

        <div>
          <h2 className="text-lg font-semibold">Feature Adoption</h2>
          <p className="mt-1 text-sm text-muted-foreground">% of users using each feature</p>
        </div>

      </div>

      {/* Chart */}
      <div className="mt-7 sm:px-0 px-2">

        <ChartContainer config={chartConfig} className="h-90 w-full">
          <BarChart data={features} layout="vertical" margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>

            <defs>
              <linearGradient id="featureGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--secondary)" />
                <stop offset="100%" stopColor="var(--primary)" />
              </linearGradient>
            </defs>

            <CartesianGrid horizontal={false} strokeDasharray="4 4" />

            <XAxis type="number" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} tick={{ fontSize: 11 }}/>

            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} width={75}/>

            <ChartTooltip
              cursor={{ fill: "hsl(var(--primary) / 0.06)" }}
              content={
                <ChartTooltipContent
                  hideIndicator
                  formatter={(value) => (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-muted-foreground">{value}%</span>
                    </div>
                  )}
                />
              }
            />

            <Bar dataKey="value" fill="url(#featureGradient)" radius={[0, 6, 6, 0]} barSize={20}/>

          </BarChart>
        </ChartContainer>

      </div>

    </div>
  )
}