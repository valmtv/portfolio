"use client"

import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"
import type React from "react"

interface ThemeHeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
  className?: string
}

export function ThemeHeading({ children, level = 1, className }: ThemeHeadingProps) {
  const { classes } = useThemeClasses()

  const sizeClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl tracking-tight",
    2: "text-3xl md:text-4xl lg:text-5xl tracking-tight",
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-xl md:text-2xl lg:text-3xl",
  } as const

  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4"
  const dataText = typeof children === "string" ? children : undefined

  return (
    <Tag
      className={cn(
        classes.heading,
        sizeClasses[level],
        "w-fit",
        "text-balance text-theme-foreground",
        classes.headingClass,
        className
      )}
      // Pass the text to the data attribute for the CSS ::before/::after glitch effect
      data-text={dataText}
    >
      {children}
    </Tag>
  )
}