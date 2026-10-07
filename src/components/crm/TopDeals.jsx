"use client"

import { Clock3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const deals = [
  {
    rank: 1,
    name: "Platform Enterprise License",
    company: "Nexora Corp",
    value: "$68,000",
    status: "Negotiation",
    date: "Mar 12",
  },
  {
    rank: 2,
    name: "Annual SaaS Bundle",
    company: "Stratus Health",
    value: "$52,500",
    status: "Proposal",
    date: "Mar 18",
  },
  {
    rank: 3,
    name: "API Integration Suite",
    company: "Orion Analytics",
    value: "$41,200",
    status: "Qualified",
    date: "Mar 25",
  },
  {
    rank: 4,
    name: "Team Seats x120",
    company: "Veridian Group",
    value: "$36,000",
    status: "Proposal",
    date: "Apr 2",
  },
  {
    rank: 5,
    name: "Data Module Expansion",
    company: "Cascade Systems",
    value: "$28,400",
    status: "Negotiation",
    date: "Apr 8",
  },
]

const statusStyles = {
  Negotiation: "bg-[#cc272e]/10 text-[#cc272e]",
  Proposal: "bg-[#fec31f]/10 text-[#fec31f]",
  Qualified: "bg-emerald-500/10 text-emerald-500",
}

export default function TopDeals() {
  return (
    <Card className="col-span-full xl:col-span-5 flux-shadow">

      <CardHeader>
        <CardTitle>Top Deals</CardTitle>
        <CardDescription className="mt-1">Highest-value opportunities in the pipeline</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">

          {deals.map((deal) => (
            <div key={deal.rank} className="flex items-center gap-3">

              {/* Rank Avatar */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                #{deal.rank}
              </div>

              {/* Deal Info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{deal.name}</p>
                <p className="mt-1 truncate text-xs text-muted-foreground">{deal.company}</p>
              </div>

              {/* Deal Details */}
              <div className="flex shrink-0 flex-col items-end gap-1.5">

                <span className="text-sm font-semibold">{deal.value}</span>

                <div className="flex items-center gap-2">

                  <Badge className={`rounded-md w-auto px-2 py-0.5 text-[10px] font-medium ${statusStyles[deal.status]}`}>
                    {deal.status}
                  </Badge>

                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="size-3" />
                    {deal.date}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>
      </CardContent>

    </Card>
  )
}