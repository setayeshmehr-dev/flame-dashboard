"use client"

const cohorts = [
  {
    cohort: "Feb 3",
    retention: ["100%", "68%", "52%", "44%", "38%"],
  },
  {
    cohort: "Feb 10",
    retention: ["100%", "72%", "58%", "48%", "41%"],
  },
  {
    cohort: "Feb 17",
    retention: ["100%", "65%", "50%", "42%", "—"],
  },
  {
    cohort: "Feb 24",
    retention: ["100%", "70%", "54%", "—", "—"],
  },
]

const weeks = ["Week 0", "Week 1", "Week 2", "Week 3", "Week 4"]

export default function UserRetentionCohort() {
  return (
    <div className="text-card-foreground transition-shadow duration-200 col-span-ful xl:col-span-7 flux-shadow rounded-2xl border bg-card p-6 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">User Retention Cohort</h2>
        <p className="mt-1 text-sm text-muted-foreground">Weekly retention rates by signup cohort</p>
      </div>

      {/* Table */}
      <div className="mt-7 overflow-x-auto">

        <table className="w-full min-w-150 border-collapse">

          <thead>
            <tr className="border-b border-border">

              <th className="px-4 pb-3 text-left text-xs font-medium text-muted-foreground">
                Cohort
              </th>

              {weeks.map((week) => (
                <th key={week} className="px-4 pb-3 text-center text-xs font-medium text-muted-foreground">
                  {week}
                </th>
              ))}

            </tr>
          </thead>

          <tbody>

            {cohorts.map((cohort) => (
              <tr key={cohort.cohort} className="border-b border-border last:border-0">

                <td className="px-4 py-4 text-sm font-medium">
                  {cohort.cohort}
                </td>

                {cohort.retention.map((value, index) => (
                  <td key={index} className="px-4 py-4 text-center">

                    {value === "—" ? (
                      <span className="text-sm text-muted-foreground">—</span>
                    ) : (
                      <span className="inline-flex min-w-14 items-center justify-center rounded-md bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary">
                        {value}
                      </span>
                    )}

                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}