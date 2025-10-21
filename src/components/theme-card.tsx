"use client"

import type React from "react"

import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

interface ThemeCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function ThemeCard({ children, className, hover = true }: ThemeCardProps) {
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)

  return (
    <div
      className={cn(
        "p-6",
        "bg-theme-card text-theme-cardForeground border-theme-border",
        classes.card,
        hover && classes.cardHover,
        className
      )}
    >
      {children}
    </div>
  )
}