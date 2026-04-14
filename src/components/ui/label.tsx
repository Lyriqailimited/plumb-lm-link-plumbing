"use client"
/**
 * @component Label
 * @category UI primitive
 * @description The shadcn/ui Label primitive wrapping Radix Label, sized for form fields with peer-disabled styling.
 * @usage Use to label any form input (Input, Checkbox, Switch, Textarea); pair with `htmlFor` matching the input id.
 * @props Standard Radix Label props plus className.
 */
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
