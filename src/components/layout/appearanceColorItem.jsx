import React from "react";

export default function AppearanceColorItem({ active, onClick, color, label,}) {
    return (
        <div onClick={onClick} className={` w-[48%] h-20 cursor-pointer relative rounded-xl border-2 flex flex-col items-center justify-center transition ${active ? "border-primary bg-primary/10" : "border-border hover:border-primary/30"}`}>
            <div className={`absolute top-3 w-8 aspect-square rounded-full border-2 border-background  ${active ? "" : "opacity-0"}  `} style={{ backgroundColor: `${color}` }} />

            <div className="absolute top-4 w-6 aspect-square rounded-full border-2 border-background" style={{ backgroundColor: color }} />

            <span className={` absolute bottom-4 text-[13px] ${active ? "text-primary" : "text-muted-foreground"}`}> {label} </span>
        </div>
    );
}