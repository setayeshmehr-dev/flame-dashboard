"use client"

import { Area, AreaChart, Bar, BarChart,  CartesianGrid, XAxis, YAxis} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart"
import { useState } from "react"
import { Button } from "../ui/button"
import { ButtonGroup } from "../ui/button-group"


const chartData = {
  revenue: [
    { month: "Jan", value: 18600 },
    { month: "Feb", value: 22500 },
    { month: "Mar", value: 19800 },
    { month: "Apr", value: 27400 },
    { month: "May", value: 25100 },
    { month: "Jun", value: 36200 },
    { month: "Jul", value: 31800 },
    { month: "Aug", value: 48200 },
  ],

  profit: [
    { month: "Jan", value: 28200 },
    { month: "Feb", value: 10400 },
    { month: "Mar", value: 29100 },
    { month: "Apr", value: 22600 },
    { month: "May", value: 31800 },
    { month: "Jun", value: 25400 },
    { month: "Jul", value: 38200 },
    { month: "Aug", value: 46900 },
  ],

  orders: [
    { month: "Jan", value: 220 },
    { month: "Feb", value: 310 },
    { month: "Mar", value: 265 },
    { month: "Apr", value: 390 },
    { month: "May", value: 350 },
    { month: "Jun", value: 480 },
    { month: "Jul", value: 540 },
    { month: "Aug", value: 510 },
  ],
}

const chartConfig = {
  revenue: {label: "Revenue", color: "var(--primary)",},
  profit: {label: "Profit", color: "var(--secondary)",},
  orders: {label: "Orders", color: "var(--primary)",},
}

export default function OverviewChart() {

  const [activeChart, setActiveChart] = useState("revenue")

  const data = chartData[activeChart]

  return (
    <div className=" text-card-foreground shadow-sm transition-shadow duration-200 col-span-full xl:col-span-7 rounded-2xl border bg-card">

      {/* Header */}
      <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:justify-between px-6 pt-6">
        <div>
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-sm text-muted-foreground">Monthly performance</p>
        </div>
        <div>
          <ButtonGroup>
            <Button  variant={activeChart === "revenue" ? "default" : "outline"} onClick={() => setActiveChart("revenue")}> Revenue</Button>
            <Button  variant={activeChart === "orders" ? "default" : "outline"} onClick={() => setActiveChart("orders")} > Orders </Button>
            <Button  variant={activeChart === "profit" ? "default" : "outline"} onClick={() => setActiveChart("profit")} > Profit </Button>
          </ButtonGroup>
        </div>
      </div>

      {/* Chart */}
      <ChartContainer config={chartConfig} className=" pe-6 mb-6 w-full h-112.5" >

        {activeChart === "orders" ? (

          <BarChart accessibilityLayer data={data} >
            <CartesianGrid vertical={false} />

            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8}/>

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 800]}
              ticks={[0, 200, 400, 600, 800]}
              tickFormatter={(value) => `${value}`}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />}/>

            <Bar dataKey="value" fill="var(--color-orders)" radius={6}/>

          </BarChart>

        ) : (

          <AreaChart className="text-[9px] sm:text-[12px]" accessibilityLayer data={data} margin={{ left: 12, right: 12,}}>
            <defs>
              <linearGradient id={`${activeChart}Gradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={`var(--color-${activeChart})`} stopOpacity={0.55}/>
                <stop offset="100%" stopColor={`var(--color-${activeChart})`} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />

            <XAxis  dataKey="month" tickLine={false} axisLine={false} tickMargin={8}/>

            <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={[0, 60000]} ticks={[0, 15000, 30000, 45000, 60000]} tickFormatter={(value) => `${value / 1000}k`}/>

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area dataKey="value" type="natural" fill={`url(#${activeChart}Gradient)`} stroke={`var(--color-${activeChart})`} strokeWidth={2}/>
          </AreaChart>

        )}

      </ChartContainer>

    </div>
  )
}