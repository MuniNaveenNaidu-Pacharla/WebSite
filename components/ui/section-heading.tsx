import * as React from "react"
import { cn } from "@/lib/utils"
import { SectionHeadingProps } from "@/types"

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  badgeVariant = "blue",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <div className={cn("mb-4 inline-flex items-center", align === "center" ? "justify-center" : "justify-start")}>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wider uppercase",
              badgeVariant === "blue" || badgeVariant === "orange" || badgeVariant === "neutral"
                ? "bg-[#EFF6FF] text-[#0070E0] border border-[#BFDBFE]"
                : "bg-[#F8F8FA] text-[#59616D] border border-[#EAECEF]"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF] animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[#121816] sm:text-4xl lg:text-5xl lg:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[#4A5D55] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
