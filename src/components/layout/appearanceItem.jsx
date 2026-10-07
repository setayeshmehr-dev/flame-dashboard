import React from "react";

export default function AppearanceItem({ active, onClick, icon: Icon, label,}) {
    return (
        <div onClick={onClick} className={` w-full h-18 cursor-pointer border-2 rounded-xl flex flex-col gap-2 justify-center items-center text-[13px] transition ${active ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>
            <Icon className="size-5" />
            <span>{label}</span>
        </div>
    );
}