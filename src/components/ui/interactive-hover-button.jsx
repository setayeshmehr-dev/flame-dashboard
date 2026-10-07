import { Plus } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  href,
  ...props
}) {
  return (
    <Link href={href}className={cn("group bg-background relative w-auto text-[16px] cursor-pointer overflow-hidden rounded-xl border p-2 px-6 text-center font-semibold",className)}{...props}>
      <div className="flex items-center justify-center gap-2">
        <div
          className="bg-linear-to-r from-primary from-35%  to-65% to-secondary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span
          className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <Plus className="size-4" />
      </div>
    </Link>
  );
}
