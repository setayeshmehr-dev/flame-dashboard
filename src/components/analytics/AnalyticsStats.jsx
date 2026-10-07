"use client"

import {Sparkles, Clock , TrendingUp, UsersRound,  } from "lucide-react"

const stats = [
  {
    title: "Daily Active Users",
    value: "4,281",
    change: "+14.2%",
    icon: UsersRound,
  },
  {
    title: "Avg Session Duration",
    value: "8m 42s",
    change: "+6.8%",
    icon: Clock,
  },
  {
    title: "Feature Activation Rate",
    value: "72.4%",
    change: "+3.1%",
    icon: Sparkles,
  },
]

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6 sm:grid-cols-3">

      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <div key={stat.title} className="rounded-2xl border bg-card p-5 shadow-sm flux-shadow">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
              </div>

              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>

            </div>

            <div className="mt-3 flex items-center gap-1 text-sm">
              <TrendingUp className="size-3 text-emerald-500" />
              <span className="font-medium text-emerald-500">{stat.change}</span>
              <span className="text-muted-foreground">vs last period</span>
            </div>

          </div>
        )
      })}

    </div>
  )
}