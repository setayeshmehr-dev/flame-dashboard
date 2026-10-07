"use client"

import * as React from "react"
import { DayPicker, getDefaultClassNames } from "react-day-picker"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownIcon,
} from "@hugeicons/core-free-icons"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  buttonVariant = "ghost",
  fromYear = 2020,
  toYear = 2035,
  locale,
  formatters,
  components,
  onSelect,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()
  const [month, setMonth] = React.useState(new Date())
  const [monthOpen, setMonthOpen] = React.useState(false)
  const [yearOpen, setYearOpen] = React.useState(false)
  
  const years = Array.from(
    { length: toYear - fromYear + 1 },
    (_, index) => fromYear + index
  )

  const months = Array.from({ length: 12 }, (_, index) =>
    new Date(2000, index, 1)
  )

  return (
    <div className="w-fit">
      <DayPicker
        {...props}
        showOutsideDays={showOutsideDays}
        month={month}
        onMonthChange={(newMonth) => {
          setMonth(newMonth)
          setMonthOpen(false)
          setYearOpen(false)
        }}
        fromYear={fromYear}
        toYear={toYear}
        locale={locale}
        onSelect={onSelect}
        className={cn(
          "group/calendar bg-background p-3",
          "[--cell-radius:var(--radius-md)]",
          "[--cell-size:--spacing(9)]",
          "in-data-[slot=card-content]:bg-transparent",
          "in-data-[slot=popover-content]:bg-transparent",
          String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
          className
        )}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString(locale?.code, {
              month: "long",
            }),
          ...formatters,
        }}
        classNames={{
          root: cn("w-fit", defaultClassNames.root),

          months: cn(
            "relative flex flex-col gap-4 md:flex-row",
            defaultClassNames.months
          ),

          month: cn(
            "flex w-full flex-col gap-4",
            defaultClassNames.month
          ),

          nav: cn(
            "absolute inset-x-0 top-0 z-30 flex w-full items-center justify-between gap-1 pointer-events-none",
            defaultClassNames.nav
          ),

          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            "pointer-events-auto size-(--cell-size) rounded-md p-0 select-none",
            "aria-disabled:opacity-50",
            defaultClassNames.button_previous
          ),

          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            "pointer-events-auto size-(--cell-size) rounded-md p-0 select-none",
            "aria-disabled:opacity-50",
            defaultClassNames.button_next
          ),

          month_caption: cn(
            "relative z-10 flex h-(--cell-size) w-full items-center justify-center",
            defaultClassNames.month_caption
          ),

          dropdowns: cn(
            "flex h-(--cell-size) w-full items-center justify-center gap-2",
            "text-sm font-medium",
            defaultClassNames.dropdowns
          ),

          dropdown_root: cn(
            "relative rounded-md",
            defaultClassNames.dropdown_root
          ),

          dropdown: cn(
            "absolute inset-0 z-20 cursor-pointer bg-popover opacity-0",
            defaultClassNames.dropdown
          ),

          caption_label: cn(
            "font-medium select-none",
            "flex items-center gap-1 rounded-md text-sm",
            "[&>svg]:size-3.5",
            "[&>svg]:text-muted-foreground",
            defaultClassNames.caption_label
          ),

          month_grid: cn(
            "w-full border-collapse",
            defaultClassNames.month_grid
          ),

          weekdays: cn(
            "flex",
            defaultClassNames.weekdays
          ),

          weekday: cn(
            "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
            defaultClassNames.weekday
          ),

          week: cn(
            "mt-2 flex w-full",
            defaultClassNames.week
          ),

          week_number_header: cn(
            "w-(--cell-size) select-none",
            defaultClassNames.week_number_header
          ),

          week_number: cn(
            "text-[0.8rem] text-muted-foreground select-none",
            defaultClassNames.week_number
          ),

          day: cn(
            "group/day relative aspect-square h-full w-full",
            "p-0 text-center select-none rounded-md",
            defaultClassNames.day
          ),

          range_start: cn(
            "rounded-md bg-primary text-primary-foreground",
            defaultClassNames.range_start
          ),

          range_middle: cn(
            "rounded-md bg-muted text-foreground",
            defaultClassNames.range_middle
          ),

          range_end: cn(
            "rounded-md bg-primary text-primary-foreground",
            defaultClassNames.range_end
          ),

          today: cn(
            "rounded-md bg-muted text-foreground",
            "data-[selected=true]:bg-primary",
            "data-[selected=true]:text-primary-foreground",
            defaultClassNames.today
          ),

          outside: cn(
            "text-muted-foreground opacity-50",
            defaultClassNames.outside
          ),

          disabled: cn(
            "text-muted-foreground opacity-50",
            defaultClassNames.disabled
          ),

          hidden: cn(
            "invisible",
            defaultClassNames.hidden
          ),

          ...classNames,
        }}
        components={{
          MonthCaption: ({ calendarMonth }) => {
            const currentMonth = calendarMonth.date

            return (
              <div className="relative flex h-(--cell-size) w-full items-center justify-center gap-2">
                {/* Month */}
                <div className="relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="pointer-events-auto gap-1 font-medium"
                    onClick={() => {
                      setMonthOpen((prev) => !prev)
                      setYearOpen(false)
                    }}
                  >
                    {currentMonth.toLocaleString(locale?.code, {
                      month: "long",
                    })}
                    <ChevronDown className="size-4 opacity-60" />
                  </Button>

                  {monthOpen && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-36 overflow-hidden rounded-md border bg-popover p-1 shadow-md">
                      <div className="max-h-60 overflow-y-auto scrollbar-hide">
                        {months.map((item) => {
                          const monthIndex = item.getMonth()
                          const isSelected = monthIndex === currentMonth.getMonth()

                          return (
                            <button
                              key={monthIndex}
                              type="button"
                              className={cn(
                                "w-full rounded-md px-3 py-2 text-left text-sm",
                                "transition-colors hover:bg-muted",
                                isSelected &&
                                  "bg-primary text-primary-foreground hover:bg-primary"
                              )}
                              onClick={() => {
                                const newDate = new Date(currentMonth)
                                newDate.setMonth(monthIndex)

                                setMonth(newDate)
                                setMonthOpen(false)
                              }}
                            >
                              {item.toLocaleString(locale?.code, {
                                month: "long",
                              })}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Year */}
                <div className="relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="pointer-events-auto gap-1 font-medium"
                    onClick={() => {
                      setYearOpen((prev) => !prev)
                      setMonthOpen(false)
                    }}
                  >
                    {currentMonth.getFullYear()}
                    <ChevronDown className="size-4 opacity-60" />
                  </Button>

                  {yearOpen && (
                    <div className="absolute right-0 top-full z-50 mt-1 w-24 overflow-hidden rounded-md border bg-popover p-1 shadow-md">
                      <div className="max-h-60 overflow-y-auto scrollbar-hide">
                        {years.map((year) => {
                          const isSelected = year === currentMonth.getFullYear()

                          return (
                            <button
                              key={year}
                              type="button"
                              className={cn(
                                "w-full rounded-md px-3 py-2 text-center text-sm",
                                "transition-colors hover:bg-muted",
                                isSelected &&
                                  "bg-primary text-primary-foreground hover:bg-primary"
                              )}
                              onClick={() => {
                                const newDate = new Date(currentMonth)
                                newDate.setFullYear(year)

                                setMonth(newDate)
                                setYearOpen(false)
                              }}
                            >
                              {year}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          },
          Root: ({ className, rootRef, ...props }) => (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          ),

          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <HugeiconsIcon
                  icon={ArrowLeftIcon}
                  strokeWidth={2}
                  className={cn("size-4", className)}
                  {...props}
                />
              )
            }

            if (orientation === "right") {
              return (
                <HugeiconsIcon
                  icon={ArrowRightIcon}
                  strokeWidth={2}
                  className={cn("size-4", className)}
                  {...props}
                />
              )
            }

            return (
              <HugeiconsIcon
                icon={ArrowDownIcon}
                strokeWidth={2}
                className={cn("size-4", className)}
                {...props}
              />
            )
          },

          DayButton: ({ ...props }) => (
            <CalendarDayButton locale={locale} {...props} />
          ),

          WeekNumber: ({ children, ...props }) => (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          ),

          ...components,
        }}
      />

      <div className="flex items-center justify-between border-t px-3 py-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => onSelect?.(undefined)}
        >
          Clear
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => {
            const today = new Date()

            setMonth(today)
            onSelect?.(today)
          }}
        >
          Today
        </Button>
      </div>
    </div>
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus()
    }
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full",
        "min-w-(--cell-size) items-center justify-center",
        "rounded-md border-0 p-0",
        "leading-none font-normal transition-colors",

        "hover:bg-muted",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",

        "data-[selected-single=true]:bg-primary",
        "data-[selected-single=true]:text-primary-foreground",

        "data-[range-start=true]:rounded-md",
        "data-[range-start=true]:bg-primary",
        "data-[range-start=true]:text-primary-foreground",

        "data-[range-end=true]:rounded-md",
        "data-[range-end=true]:bg-primary",
        "data-[range-end=true]:text-primary-foreground",

        "data-[range-middle=true]:rounded-md",
        "data-[range-middle=true]:bg-muted",
        "data-[range-middle=true]:text-foreground",

        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }