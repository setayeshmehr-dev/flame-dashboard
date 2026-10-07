"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const team = [
  {
    initials: "SC",
    name: "Sarah Chen",
    deals: 14,
    value: "$94,200",
    percentage: 62,
  },
  {
    initials: "ML",
    name: "Marcus Lee",
    deals: 11,
    value: "$78,600",
    percentage: 55,
  },
  {
    initials: "PN",
    name: "Priya Nakamura",
    deals: 9,
    value: "$61,400",
    percentage: 48,
  },
  {
    initials: "AR",
    name: "Alex Rivera",
    deals: 8,
    value: "$52,800",
    percentage: 44,
  },
  {
    initials: "JM",
    name: "Jordan Mills",
    deals: 6,
    value: "$38,200",
    percentage: 38,
  },
]

export default function TeamPerformance() {
  return (
    <Card className="col-span-full xl:col-span-6 flux-shadow">

      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
        <CardDescription className="mt-1">Individual sales metrics this quarter</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">

          {team.map((member) => (
            <div key={member.name} className="flex items-center gap-3">

              {/* Avatar */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {member.initials}
              </div>

              {/* Member Info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{member.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{member.deals} deals won</p>
              </div>

              {/* Performance */}
              <div className="flex shrink-0 flex-col items-end gap-1.5">

                <span className="text-sm font-semibold">{member.value}</span>

                <div className="flex items-center gap-2">

                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-secondary to-primary"
                      style={{ width: `${member.percentage}%` }}
                    />
                  </div>

                  <span className="w-8 text-right text-xs text-muted-foreground">{member.percentage}%</span>

                </div>

              </div>

            </div>
          ))}

        </div>
      </CardContent>

    </Card>
  )
}