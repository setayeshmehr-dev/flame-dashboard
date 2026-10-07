"use client"

const pipeline = [
  {
    name: "Lead",
    deals: 18,
    value: "$320K",
    width: "100%",
  },
  {
    name: "Qualified",
    deals: 12,
    value: "$280K",
    width: "67%",
  },
  {
    name: "Proposal",
    deals: 8,
    value: "$195K",
    width: "44%",
  },
  {
    name: "Negotiation",
    deals: 5,
    value: "$142K",
    width: "28%",
  },
  {
    name: "Closed Won",
    deals: 3,
    value: "$84K",
    width: "17%",
  },
]

export default function DealPipeline() {
  return (
    <div className="text-card-foreground mt-6 transition-shadow duration-200 col-span-full flux-shadow rounded-2xl border bg-card sm:p-6 shadow-sm">

      {/* Header */}
      <div className="sm:px-0 sm:pt-0 px-6 pt-6">
        <h2 className="text-lg font-semibold">Deal Pipeline</h2>
        <p className="mt-1 text-sm text-muted-foreground">Funnel progression from Lead to Closed Won</p>
      </div>

      {/* Pipeline */}
      <div className="mt-8 sm:p-0 p-2 space-y-4">

        {pipeline.map((stage) => (
          <div key={stage.name} className="flex items-center gap-4">

            <span className="w-24 shrink-0 text-sm font-medium">{stage.name}</span>
            <span className="text-xs font-semibold ">{stage.deals} deals</span>

            <div className="h-9 flex-1 overflow-hidden rounded-md">

              <div className="flex h-full items-center justify-end rounded-md bg-linear-to-r from-secondary min-w-15 to-primary px-3 transition-all duration-300" style={{ width: stage.width }}>
                <span className=" text-xs font-semibold text-primary-foreground">{stage.value}</span>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-5 p-3 sm:p-0 sm:pt-3">

        <div>
          <p className="text-xs text-muted-foreground">Total pipeline</p>
          <p className="mt-1 text-sm font-semibold">46 deals</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Avg. deal size</p>
          <p className="mt-1 text-sm font-semibold">$22.2K</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Lead-to-close</p>
          <p className="mt-1 text-sm font-semibold">16.7%</p>
        </div>

      </div>

    </div>
  )
}