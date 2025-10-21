"use client"

import type React from "react"

import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

interface ThemeTextProps {
  children: React.ReactNode
  className?: string
  muted?: boolean
}

export function ThemeText({ children, className, muted = false }: ThemeTextProps) {
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)

  return (
    <p
      className={cn(
        classes.body,
        "text-base md:text-lg leading-relaxed text-pretty",
        muted ? "text-theme-mutedForeground" : "text-theme-foreground",
        className
      )}
    >
      {children}
    </p>
  )
}