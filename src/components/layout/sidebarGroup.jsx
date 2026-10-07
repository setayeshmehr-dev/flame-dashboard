import React from 'react'
import SidebarItem from './sidebarItem'

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function SidebarGroup({ group, items, collapsed }) {
    return (
        <>
            {collapsed ? (items.map((item) => (<SidebarItem key={item.title} href={item.href} icon={item.icon} title={item.title} collapsed={collapsed}/>))
            ) : (
                <AccordionItem value={group}>

                <AccordionTrigger className={`px-3 text-xs text-muted-foreground hover:text-foreground hover:no-underline ${collapsed ? "hidden ": "flex"}`}>
                    {group}
                </AccordionTrigger>


                <AccordionContent >

                <div className="flex flex-col gap-1">

                {items.map((item) => (
                    <SidebarItem key={item.title} icon={item.icon} collapsed={collapsed} href={item.href} title={item.title}/>
                ))}

                </div>

                </AccordionContent >

            </AccordionItem>)}
        </>
    );
}

