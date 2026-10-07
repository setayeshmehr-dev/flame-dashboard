"use client"

import { GitPullRequest, Rocket, CircleAlert, CheckCircle2 } from "lucide-react"

const activities = [
  {
    initials: "SC",
    name: "Sarah C.",
    action: "merged PR #284",
    time: "3m",
    icon: GitPullRequest,
  },
  {
    initials: "AM",
    name: "Alex M.",
    action: "deployed to production",
    time: "12m",
    icon: Rocket,
  },
  {
    initials: "PK",
    name: "Priya K.",
    action: "opened issue #92",
    time: "28m",
    icon: CircleAlert,
  },
  {
    initials: "ML",
    name: "Marcus L.",
    action: "reviewed PR #281",
    time: "45m",
    icon: GitPullRequest,
  },
  {
    initials: "JT",
    name: "Jen T.",
    action: "closed issue #88",
    time: "1h",
    icon: CheckCircle2,
  },
]

export default function TeamActivity() {
  return (
    <div className="text-card-foreground transition-shadow duration-200 flex-1 flux-shadow rounded-2xl border bg-card p-6 shadow-sm">

      {/* Header */}

        <div>
          <h2 className="text-lg font-semibold">Team Activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">Latest from your team</p>
        </div>

      {/* Activities */}
      <div className="mt-6 space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon

          return (
            <div key={`${activity.name}-${activity.action}`} className="flex items-center gap-3">

              {/* Avatar */}
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">{activity.initials}</div>

              {/* Content */}
              <div className="min-w-0 flex-1">

                <p className="truncate text-sm">
                  <span className="font-semibold"> {activity.name} </span>
                  <span className="text-muted-foreground"> {activity.action} </span>
                </p>

              </div>

              {/* Time */}
              <span className="shrink-0 text-xs text-muted-foreground">{activity.time}</span>

            </div>
          )
        })}

      </div>

    </div>
  )
}
