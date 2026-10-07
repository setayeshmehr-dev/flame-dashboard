"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const actions = [
  {
    name: "Dashboard View",
    value: 3000,
  },
  {
    name: "API Call",
    value: 2300,
  },
  {
    name: "Create Project",
    value: 1800,
  },
  {
    name: "Invite Member",
    value: 1300,
  },
  {
    name: "Export Data",
    value: 750,
  },
  {
    name: "Settings Change",
    value: 500,
  },
]

const chartConfig = {
  value: {
    label: "Actions",
  },
}

export default function TopUserActions() {
  return (
    <div className="text-card-foreground transition-shadow duration-200 col-span-full xl:col-span-5 flux-shadow rounded-2xl border bg-card sm:p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between sm:px-0 sm:pt-0 px-6 pt-6 ">

        <div>
          <h2 className="text-lg font-semibold">Top User Actions</h2>
          <p className="mt-1 text-sm text-muted-foreground">Most frequent product interactions</p>
        </div>

      </div>

      {/* Chart */}
      <div className="mt-3">

        <ChartContainer config={chartConfig} className="w-full px-3 sm:px-0">
          <BarChart data={actions} layout="vertical" margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>

            <defs>
              <linearGradient id="actionsGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--secondary)" />
                <stop offset="100%" stopColor="var(--primary)" />
              </linearGradient>
            </defs>

            <CartesianGrid horizontal={false} strokeDasharray="4 4" />

            <XAxis type="number" domain={[0, 3000]} ticks={[0, 750, 1500, 2250, 3000]} tickFormatter={(value) => `${(value / 1000).toFixed(value >= 1000 ? 1 : 0)}k`} axisLine={false} tickLine={false} tick={{ fontSize: 11 }}/>

            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} width={115}/>

            <ChartTooltip
              cursor={{ fill: "hsl(var(--primary) / 0.06)" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-muted-foreground">{value.toLocaleString()}</span>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="value" fill="url(#actionsGradient)" radius={[0, 6, 6, 0]} barSize={20}/>

          </BarChart>
        </ChartContainer>

      </div>

    </div>
  )
}