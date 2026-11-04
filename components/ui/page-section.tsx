import * as React from "react"
import { cn } from "@/lib/utils"
import { PageSectionProps } from "@/types"

export function PageSection({
  background = "warm",
  borderBottom = false,
  borderTop = false,
  className,
  children,
  ...props
}: PageSectionProps) {
  const bgClasses = {
    warm: "bg-transparent",
    white: "bg-transparent",
    subtle: "bg-transparent",
  }[background]

  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24 text-[#121816]",
        bgClasses,
        borderBottom && "border-b border-[#E1E8E5]",
        borderTop && "border-t border-[#E1E8E5]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
