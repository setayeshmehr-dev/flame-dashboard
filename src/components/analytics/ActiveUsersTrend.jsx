"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const users = [
  {
    day: "Feb 12",
    users: 3840,
  },
  {
    day: "Feb 13",
    users: 3920,
  },
  {
    day: "Feb 14",
    users: 4100,
  },
  {
    day: "Feb 15",
    users: 3680,
  },
  {
    day: "Feb 16",
    users: 3540,
  },
  {
    day: "Feb 17",
    users: 3980,
  },
  {
    day: "Feb 18",
    users: 4220,
  },
  {
    day: "Feb 19",
    users: 4180,
  },
  {
    day: "Feb 20",
    users: 4350,
  },
  {
    day: "Feb 21",
    users: 4120,
  },
  {
    day: "Feb 22",
    users: 3890,
  },
  {
    day: "Feb 23",
    users: 4050,
  },
  {
    day: "Feb 24",
    users: 4210,
  },
  {
    day: "Feb 25",
    users: 4281,
  },
]

const chartConfig = {
  users: {
    label: "Active Users",
  },
}

export default function ActiveUsersTrend() {
  return (
    <div className="xl:col-span-6 flux-shadow text-card-foreground transition-shadow duration-200 col-span-full rounded-2xl border bg-card sm:p-6 shadow-sm">

      {/* Header */}
      <div className="sm:px-0 sm:pt-0 px-6 pt-6">
        <h2 className="text-lg font-semibold">Active Users Trend</h2>
        <p className="mt-1 text-sm text-muted-foreground">Daily active users over the last 14 days</p>
      </div>

      {/* Chart */}
      <div className="mt-7 sm:pb-0 pb-3 ">

        <ChartContainer config={chartConfig} className="h-100 w-full">
          <LineChart data={users} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>

            <CartesianGrid vertical={false} strokeDasharray="4 4" />

            <YAxis domain={[3300, 4500]} ticks={[3300, 3700, 4000, 4400, 4500]} tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`} axisLine={false} tickLine={false} tick={{ fontSize: 11 }}/>

            <XAxis dataKey="day" tickFormatter={(value) => value.replace("Feb ", "")} axisLine={false} tickLine={false} tick={{ fontSize: 11 }} tickMargin={10}/>

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-muted-foreground">DAU : {value.toLocaleString()}</span>
                    </div>
                  )}
                />
              }
            />

            <Line type="monotone" dataKey="users" stroke="var(--primary)" strokeWidth={2} dot={false} activeDot={{ r: 4 }}/>

          </LineChart>
        </ChartContainer>

      </div>

    </div>
  )
}