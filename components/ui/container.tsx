import * as React from "react"
import { cn } from "@/lib/utils"
import { ContainerProps } from "@/types"

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  }[size]

  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses, className)}
      {...props}
    >
      {children}
    </div>
  )
}
