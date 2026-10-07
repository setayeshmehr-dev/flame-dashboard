"use client"

import { BriefcaseBusiness, BadgeCheck, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Pipeline Value",
    value: "$842K",
    description: "12 open deals",
    icon: BriefcaseBusiness,
  },
  {
    title: "Won This Month",
    value: "$184K",
    description: "8 deals closed",
    icon: BadgeCheck,
  },
  {
    title: "Win Rate",
    value: "42.8%",
    description: "+3.2% vs last quarter",
    icon: TrendingUp,
  },
]

export default function CRMStats() {
  return (
    <div className="grid mt-6 grid-cols-1 gap-4 md:grid-cols-3">

      {stats.map((stat) => {
        const Icon = stat.icon

        return (
            <div key={stat.title} className="rounded-[18px] bg-linear-to-br from-primary via-secondary to-primary p-0.5">

                <div className="h-full rounded-2xl bg-card p-6">

                    <div className="flex items-start justify-between">

                    <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                    </div>

                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-4" />
                    </div>

                    </div>

                    <p className="mt-3 text-sm text-muted-foreground">{stat.description}</p>

                </div>

            </div>
        )
      })}

    </div>
  )
}