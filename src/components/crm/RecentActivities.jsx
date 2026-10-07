"use client"

import { ArrowUpRight, BadgeCheck, CalendarCheck, Mail, Send, UserCheck, UserRound } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const activities = [
  {
    text: "Sarah moved Acme Corp to Proposal",
    time: "5m ago",
    icon: ArrowUpRight,
  },
  {
    text: "Deal #284 marked as Won ($42K)",
    time: "22m ago",
    icon: BadgeCheck,
  },
  {
    text: "Marcus completed discovery call with Orion",
    time: "1h ago",
    icon: CalendarCheck,
  },
  {
    text: "Proposal sent to Veridian Group",
    time: "2h ago",
    icon: Send,
  },
  {
    text: "Follow-up email sent to Cascade Systems",
    time: "3h ago",
    icon: Mail,
  },
  {
    text: "New lead qualified: Bloom Studios ($18K)",
    time: "4h ago",
    icon: UserCheck,
  },
]

export default function RecentActivities() {
  return (
    <Card className="col-span-full xl:col-span-6 flux-shadow">

      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription className="mt-1">Latest pipeline updates from your team</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-0">

          {activities.map((activity, index) => {
            const Icon = activity.icon
            const isLast = index === activities.length - 1

            return (
              <div key={activity.text} className="relative flex gap-4">

                {/* Timeline */}
                <div className="relative flex w-9 shrink-0 justify-center">

                  {!isLast && (
                    <div className="absolute top-9 bottom-0 w-px bg-border" />
                  )}

                  <div className="relative z-10 flex size-9 items-center justify-center rounded-full border bg-card text-primary">
                    <Icon className="size-4" />
                  </div>

                </div>

                {/* Activity */}
                <div className="flex min-w-0 flex-1 items-start justify-between gap-4 pb-6 pt-1">

                  <p className="min-w-0 text-sm font-medium">{activity.text}</p>

                  <span className="shrink-0 text-xs text-muted-foreground">{activity.time}</span>

                </div>

              </div>
            )
          })}

        </div>
      </CardContent>

    </Card>
  )
}