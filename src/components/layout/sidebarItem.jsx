"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function SidebarItem({ icon: Icon, title, collapsed , href}) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
      <Link href={href} className={` outline-none focus:outline-none flex items-center gap-3 px-3 py-2 ${isActive ? "text-primary bg-primary/10 focusn hover:text-primary!" : "text-muted-foreground hover:text-primary/70! hover:bg-primary/5!"} rounded-lg  ${collapsed ? "mx-4 my-2 py-3! aspect-square justify-center " : " justify-normal aspect-auto py-2! "} `} >

            <Icon className="size-4" />
            {!collapsed && (<span className='text-sm '>{title}</span>)}

      </Link>
  );
}

