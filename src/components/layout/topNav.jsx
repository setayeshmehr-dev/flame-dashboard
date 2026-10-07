"use client"

import { useState } from "react"
import Link from "next/link"

import { ChevronDown } from "lucide-react"


import { sidebarGroups } from "@/data/sidebar"

export default function TopNav() {

  const [openGroup, setOpenGroup] = useState(null)

  return (
    <nav className="fixed top-16 w-full z-30 h-14 border-b bg-background/80 px-6 backdrop-blur-xl ps-6 pe-8 ">

        <div className="flex h-full items-center gap-6 [&>*:last-child]:ml-auto">

            {sidebarGroups.map((group) => (

                <div key={group.group} className="relative">

                    <button onClick={() => setOpenGroup(openGroup === group.group ? null  : group.group)} className={` flex items-center gap-1 text-xs  hover:text-primary! ${openGroup === group.group ? "text-primary!" : "text-muted-foreground!"} `}>
                        {group.group}
                        <ChevronDown className={`size-4 transition-transform ${openGroup === group.group ? "rotate-180" : ""}`}/>
                    </button>


                    {openGroup === group.group && (

                        <div className={` absolute top-8 min-w-48 rounded-lg border bg-background p-2 shadow-md ${group.group === "SYSTEM" ? "right-0" : "left-0"} `}>

                            {group.items.map((item) => {

                                const Icon = item.icon

                                return (

                                    <Link onClick={() => setOpenGroup(null)} key={item.title} href={item.href} className=" flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary/80">

                                        <Icon className="size-4" />

                                        {item.title}

                                    </Link>

                            )})}

                        </div>

                    )}

                </div>

            ))}

        </div>

    </nav>
  )
}