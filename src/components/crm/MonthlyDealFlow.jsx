"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const deals = [
  {
    month: "Sep",
    won: 8,
    lost: 4,
  },
  {
    month: "Oct",
    won: 10,
    lost: 6,
  },
  {
    month: "Nov",
    won: 7,
    lost: 3,
  },
  {
    month: "Dec",
    won: 11,
    lost: 5,
  },
  {
    month: "Jan",
    won: 9,
    lost: 4,
  },
  {
    month: "Feb",
    won: 12,
    lost: 6,
  },
]

const chartConfig = {
  won: {
    label: "Won",
    color: "var(--primary)",
  },
  lost: {
    label: "Lost",
    color: "var(--secondary)",
  },
}

export default function MonthlyDealFlow() {
  return (
    <Card className="col-span-full xl:col-span-7 flux-shadow">

      <CardHeader>
        <div className="flex items-start justify-between gap-4">

          <div>
            <CardTitle>Monthly Deal Flow</CardTitle>
            <CardDescription className="mt-1">Won vs Lost deals over the past 6 months</CardDescription>
          </div>

          <div className="flex shrink-0 items-center gap-4 pt-1">

            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Won</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-secondary" />
              <span className="text-xs text-muted-foreground">Lost</span>
            </div>

          </div>

        </div>
      </CardHeader>

      <CardContent>

        <ChartContainer config={chartConfig} className="h-90 w-full">
          <BarChart data={deals}  margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>

            <CartesianGrid vertical={false} strokeDasharray="4 4" />

            <YAxis
              domain={[0, 12]}
              ticks={[0, 3, 6, 9, 12]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              tickMargin={10}
            />

            <ChartTooltip
              cursor={{ fill: "hsl(var(--primary) / 0.05)" }}
              content={<ChartTooltipContent />}
            />

            <Bar
              dataKey="won"
              fill="var(--primary)"
              radius={[6, 6, 0, 0]}
              barSize={9}
            />

            <Bar
              dataKey="lost"
              fill="var(--secondary)"
              radius={[6, 6, 0, 0]}
              barSize={9}
            />

          </BarChart>
        </ChartContainer>

      </CardContent>

    </Card>
  )
}