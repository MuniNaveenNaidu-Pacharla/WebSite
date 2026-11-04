import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        /* Lorvish Blue - Primary High-Intent CTA */
        default:
          "bg-[#0084FF] text-white hover:bg-[#006ED6] active:scale-[0.99] shadow-sm",
        /* Charcoal - Secondary Structural Actions */
        secondary:
          "bg-[#171717] text-white hover:bg-[#262626] active:scale-[0.99] shadow-xs",
        /* Light Charcoal Outline with Blue Accent Hover */
        outline:
          "border border-[#EAECEF] bg-white text-[#171717] hover:bg-[#EFF6FF] hover:border-[#0084FF] hover:text-[#0084FF] active:scale-[0.99]",
        ghost:
          "text-[#171717] hover:bg-[#EFF6FF] hover:text-[#0084FF] active:scale-[0.99]",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link:
          "text-[#0084FF] hover:text-[#006ED6] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-11 px-6 text-base rounded-lg font-semibold",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonPrimitive.Props,
  VariantProps<typeof buttonVariants> { }

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
