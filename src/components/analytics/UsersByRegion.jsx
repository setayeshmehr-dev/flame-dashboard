"use client"

const regions = [
  {
    name: "United States",
    flag: "🇺🇸",
    users: "1,284",
    percentage: 30,
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    users: "812",
    percentage: 19,
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    users: "641",
    percentage: 15,
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    users: "427",
    percentage: 10,
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    users: "384",
    percentage: 9,
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    users: "342",
    percentage: 8,
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    users: "291",
    percentage: 7,
  },
]

export default function UsersByRegion() {
  return (
    <div className="text-card-foreground transition-shadow duration-200 col-span-full xl:col-span-6 flux-shadow rounded-2xl border bg-card sm:p-6 shadow-sm">

      {/* Header */}
      <div className="sm:px-0 sm:pt-0 px-6 pt-6">
        <h2 className="text-lg font-semibold">Users by Region</h2>
        <p className="mt-1 text-sm text-muted-foreground">Geographic distribution of active users</p>
      </div>

      {/* Regions */}
      <div className="mt- sm:p-0 p-3 space-y-5">

        {regions.map((region) => (
          <div key={region.name} className="flex items-center mt-9 gap-3">

            <div className="flex w-36 shrink-0 items-center gap-2">
              <span className="text-base">{region.flag}</span>
              <span className="truncate text-sm font-medium">{region.name}</span>
            </div>

            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-linear-to-r from-secondary to-primary"
                style={{ width: `${region.percentage}%` }}
              />
            </div>

            <span className="w-12 shrink-0 text-right text-sm font-medium">{region.users}</span>

            <span className="w-9 shrink-0 text-right text-xs text-muted-foreground">{region.percentage}%</span>

          </div>
        ))}

      </div>

    </div>
  )
}