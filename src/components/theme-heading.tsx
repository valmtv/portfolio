"use client"

import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"
import type React from "react" // Import React to declare JSX

interface ThemeHeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
  className?: string
}

export function ThemeHeading({ children, level = 1, className }: ThemeHeadingProps) {
  const { theme, themeConfig } = useTheme()
  const classes = getThemeClasses(theme)

  const sizeClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl lg:text-5xl",
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-xl md:text-2xl lg:text-3xl",
  }

  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component
      className={cn(classes.heading, sizeClasses[level], "text-balance", className)}
      style={{ color: themeConfig.colors.foreground }}
    >
      {children}
    </Component>
  )
}

