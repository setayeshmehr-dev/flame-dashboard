"use client"

import {
  Pie,
  PieChart,
  Cell,
  Label,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  {
    status: "Pending",
    orders: 8,
    fill: "var(--color-pending)",
  },
  {
    status: "Completed",
    orders: 6,
    fill: "var(--color-completed)",
  },
  {
    status: "Cancelled",
    orders: 4,
    fill: "var(--color-cancelled)",
  },
  {
    status: "Processing",
    orders: 2,
    fill: "var(--color-processing)",
  },
]

const chartConfig = {
  orders: {
    label: "Orders",
  },

  pending: {
    label: "Pending",
    color: "var(--primary)",
  },

  completed: {
    label: "Completed",
    color: "var(--secondary)",
  },

  cancelled: {
    label: "Cancelled",
    color: "#ff5c5c",
  },

  processing: {
    label: "Processing",
    color: "#34d399",
  },
}

export default function OrdersStatus() {
  const totalOrders = chartData.reduce(
    (total, item) => total + item.orders,
    0
  )

  return (
    <div className="col-span-full xl:col-span-5 rounded-2xl border bg-card p-6 shadow-sm">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Orders by Status
        </h2>

        <p className="text-sm text-muted-foreground">
          Distribution of order statuses
        </p>
      </div>

      {/* Chart */}
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-70"
      >
        <PieChart>

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Pie
            data={chartData}
            dataKey="orders"
            nameKey="status"
            innerRadius={75}
            outerRadius={105}
            strokeWidth={4}
          >
            {chartData.map((item) => (
              <Cell
                key={item.status}
                fill={`var(--color-${item.status.toLowerCase()})`}
              />
            ))}

            <Label
              content={({ viewBox }) => {
                if (
                  viewBox &&
                  "cx" in viewBox &&
                  "cy" in viewBox
                ) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalOrders}
                      </tspan>

                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-xs"
                      >
                        Orders
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>

        </PieChart>
      </ChartContainer>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        {chartData.map((item) => (
          <div
            key={item.status}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="size-2.5 rounded-full"
                style={{
                  backgroundColor: `var(--color-${item.status.toLowerCase()})`,
                }}
              />

              <span className="text-sm text-muted-foreground">
                {item.status}
              </span>
            </div>

            <span className="text-sm font-semibold">
              {Math.round((item.orders / totalOrders) * 100)}%
            </span>
          </div>
        ))}

      </div>

    </div>
  )
}