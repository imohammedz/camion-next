import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote" | "list" | "inline"
  as?: keyof JSX.IntrinsicElements
} 

const Typography = forwardRef<HTMLElement, TypographyProps>(({ className, variant = "p", as, ...props }, ref) => {
  const Component = as || variant

  const variantClassNames = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    h5: "scroll-m-20 text-lg font-semibold tracking-tight",
    h6: "scroll-m-20 text-base font-semibold tracking-tight",
    p: "leading-7",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    list: "my-6 ml-6 list-disc [&>li]:mt-2",
    inline: "inline",
  }

  return <Component className={cn(variantClassNames[variant], className)} ref={ref as any} {...props} />
})

Typography.displayName = "Typography"

export { Typography }
