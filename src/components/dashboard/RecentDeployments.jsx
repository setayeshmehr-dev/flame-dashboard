"use client"

import {GitBranch, CircleCheck, Clock, CircleAlert } from "lucide-react"

const deployments = [
  {
    title: "fix: auth token refresh",
    environment: "Production",
    branch: "main",
    time: "2 min ago",
  },
  {
    title: "feat: webhook retry logic",
    environment: "Staging",
    branch: "feat/webhooks-v2",
    time: "18 min ago",
  },
  {
    title: "chore: bump dependencies",
    environment: "Production",
    branch: "main",
    time: "1h ago",
  },
  {
    title: "feat: dark mode toggle",
    environment: "Preview",
    branch: "feat/dark-mode",
    time: "1h ago",
  },
  {
    title: "fix: websocket memory leak",
    environment: "Staging",
    branch: "fix/memory-leak",
    time: "3h ago",
  },
  {
    title: "feat: export CSV endpoint",
    environment: "Production",
    branch: "main",
    time: "5h ago",
  },
]

const environmentStyles = {
  Production: "bg-emerald-500/10 text-emerald-500",
  Staging: "bg-[#cc272e]/10 text-[#cc272e]",
  Preview: "bg-[#fec31f]/10 text-[#fec31f]",
}

export default function RecentDeployments() {
  return (
    <div className="text-card-foreground transition-shadow duration-200 col-span-full xl:col-span-7 flux-shadow rounded-2xl border bg-card p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-lg font-semibold">Recent Deployments</h2>
          <p className="mt-1 text-sm text-muted-foreground">Latest releases across environments</p>
        </div>

      </div>

      {/* Deployments */}
      <div className="mt-6 space-y-5">

        {deployments.map((deployment, index) => (
          <div key={`${deployment.title}-${deployment.time}`} className="flex items-center gap-3" >

            {/* Icon */}
            <div className={`flex size-5 sm:size-7 shrink-0 items-center justify-center rounded-full ${index === 3 ? "bg-yellow-500/10" : index === 4 ? "bg-red-500/10" : "bg-emerald-500/10"}`}>
              {index === 3 ? (
                <Clock className="size-2.5 sm:size-3.5 text-yellow-500" />) : index === 4 ? (<CircleAlert className="size-3.5 text-red-500" />) : (<CircleCheck className="size-3.5 text-emerald-500" />)}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">

              <p className="truncate text-[11px] sm:text-sm font-medium">{deployment.title}</p>

              <div className="mt-1 flex items-center gap-2">

                <span className={`rounded-md px-2 py-0.5 text-[9px] sm:text-[11px] font-medium ${environmentStyles[deployment.environment]}`}>{deployment.environment}</span>
                <span className="flex items-center gap-1 text-[9px] sm:text-xs text-muted-foreground">
                  <GitBranch className="size-3" />
                  {deployment.branch}
                </span>

              </div>

            </div>

            {/* Time */}
            <span className="shrink-0 text-xs text-muted-foreground">{deployment.time}</span>
            
          </div>
        ))}

      </div>

    </div>
  )
}