"use client"

const funnel = [
  {
    name: "Visitors",
    value: "28,400",
    width: "100%",
    conversion: "17% conversion",
  },
  {
    name: "Sign Up",
    value: "4,820",
    width: "70%",
    conversion: "75% conversion",
  },
  {
    name: "Onboarding",
    value: "3,614",
    width: "58%",
    conversion: "80% conversion",
  },
  {
    name: "Activated",
    value: "2,891",
    width: "47%",
    conversion: "35% conversion",
  },
  {
    name: "Paid",
    value: "1,012",
    width: "32%",
  },
]

export default function ConversionFunnel() {
  return (
    <div className="mt-6 flux-shadow text-card-foreground transition-shadow duration-200 col-span-full flux-shadow rounded-2xl border bg-card p-6 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Conversion Funnel</h2>
        <p className="mt-1 text-sm text-muted-foreground">Visitor-to-paid pipeline — step conversion rates shown between stages</p>
      </div>

      {/* Funnel */}
      <div className="mt-8 space-y-3">

        {funnel.map((step, index) => (
          <div key={step.name}>

            <div className="flex items-center gap-4">

              <span className="w-24 shrink-0 text-sm font-medium">{step.name}</span>

              <div className="h-9 flex-1 overflow-hidden rounded-md ">

                <div className="flex h-full items-center justify-end rounded-md bg-linear-to-r from-secondary to-primary px-3 transition-all duration-300" style={{ width: step.width }}>
                  <span className="text-xs font-semibold text-primary-foreground">{step.value}</span>
                </div>

              </div>
            </div>

            {step.conversion && (
              <div className="ml-28 py-2 text-[11px] font-medium text-muted-foreground">{step.conversion}</div>
            )}

          </div>
        ))}

      </div>

      {/* Overall */}
      <div className="mt-6 rounded-xl bg-muted/40 p-4">

        <p className="text-sm text-muted-foreground">Overall</p>

        <p className="mt-1 text-sm">
          End-to-end conversion: 
          <span className="font-semibold text-primary">3.6%</span>
          <span className="text-muted-foreground"> (28,400 visitors → 1,012 paid)</span>
        </p>

      </div>

    </div>
  )
}