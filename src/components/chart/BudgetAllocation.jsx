"use client"

import {
  ResponsiveContainer,
  Treemap,
  Tooltip,
} from "recharts"

const data = [
  {
    name: "Engineering",
    value: 320,
    fill: "color-mix(in oklch, var(--primary) 70%, black)",
  },
  {
    name: "Marketing",
    value: 300,
    fill: "color-mix(in oklch, var(--secondary) 70%, black)",
  },
  {
    name: "Sales",
    value: 290,
    fill: "color-mix(in oklch, var(--primary) 80%, black)",
  },
  {
    name: "Operations",
    value: 275,
    fill: "color-mix(in oklch, var(--secondary) 80%, black)",
  },
  {
    name: "Design",
    value: 260,
    fill: "color-mix(in oklch, var(--primary) 90%, black)",
  },
  {
    name: "Support",
    value: 245,
    fill: "color-mix(in oklch, var(--secondary) 90%, black)",
  },
  {
    name: "HR",
    value: 230,
    fill: "var(--primary)",
  },
  {
    name: "Legal",
    value: 220,
    fill: "var(--secondary)", 
  },
]

function CustomContent({
  x,
  y,
  width,
  height,
  fill,
  name,
  value,
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill={fill}
        stroke="var(--background)"
        strokeWidth={3}
      />

      {width > 45 && height > 45 && (
        <foreignObject
          x={x}
          y={y}
          width={width}
          height={height}
        >
          <div className="flex h-full w-full flex-col items-center justify-center text-white">
            <span className="text-[11px] sm:text-sm font-medium">
              {name}
            </span>

            <span className="text-[11px] text-white/70">
              ${value}k
            </span>
          </div>
        </foreignObject>
      )}
    </g>
  )
}

export default function BudgetAllocation() {
  return (
    <div className=" text-card-foreground shadow-sm transition-shadow duration-200 xl:col-span-5 rounded-xl border border-border bg-card sm:p-6">
      <div className="mb-4 sm:px-0 sm:pt-0 px-6 pt-6">
        <h2 className="text-lg font-semibold">
          Budget Allocation
        </h2>

        <p className="text-sm text-muted-foreground">
          Department spending distribution
        </p>
      </div>

      <div className="h-75 w-full p-2 sm:p-0">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data}
            dataKey="value"
            stroke="var(--background)"
            content={<CustomContent />}
          >
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) {
                  return null
                }

                const item = payload[0]?.payload

                return (
                  <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
                    <p className=" text-sm">
                      {item?.name}
                    </p>

                    <p className="font-semibold">
                      ${item?.value}k
                    </p>
                  </div>
                )
              }}
            />
          </Treemap>
        </ResponsiveContainer>
      </div>
    </div>
  )
}