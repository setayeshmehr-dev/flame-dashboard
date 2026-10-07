"use client"

import {Circle, Clock3 } from "lucide-react"

export default function SprintProgress() {
  const completed = 14
  const inProgress = 5
  const todo = 2
  const total = completed + inProgress + todo

  const progress = Math.round((completed / total) * 100)

  return (
    <div className=" text-card-foreground transition-shadow duration-200 rounded-2xl border bg-card sm:p-6 p-3 shadow-sm">
        <div>
          <h2 className="text-lg font-semibold">Sprint 24</h2>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock3 className="size-3.5" />
            5 days remaining
          </p>
        </div>

        <div className="mt-6 flex h-2 w-full overflow-hidden rounded-full bg-muted">

            <div className="bg-primary" style={{ width: `${(completed / total) * 100}%` }}/>
            <div className="bg-secondary" style={{ width: `${(inProgress / total) * 100}%` }}/>
            <div className="bg-muted-foreground" style={{ width: `${(todo / total) * 100}%` }}/>

        </div>

        <div className="flex justify-between mt-6 ">

            <div className="flex items-center gap-1 ">
                <div className="flex items-center gap-1">
                    <Circle className="size-3 sm:size-4 stroke-4 text-primary" />
                    <span className=" text-[10px] sm:text-sm">Completed</span>
                </div>
                <span className=" text-[10px] sm:text-sm font-semibold">( {completed} )</span>
            </div>

            <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                    <Circle className="size-3 sm:size-4 stroke-4 text-secondary" />
                    <span className=" text-[10px] sm:text-sm">In Progress</span>
                </div>
                <span className=" text-[10px] sm:text-sm font-semibold">( {inProgress} )</span>
            </div>

            <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                    <Circle className="size-3 sm:size-4 stroke-4 text-muted-foreground" />
                    <span className=" text-[10px] sm:text-sm">To Do</span>
                </div>
                <span className=" text-[10px] sm:text-sm font-semibold">( {todo} )</span>
            </div>

        </div>

    </div>
  )
}