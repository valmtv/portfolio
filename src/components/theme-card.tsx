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
  const { theme, themeConfig } = useTheme()
  const classes = getThemeClasses(theme)

  return (
    <div
      className={cn("p-6", classes.card, hover && classes.cardHover, className)}
      style={{
        backgroundColor: themeConfig.colors.card,
        color: themeConfig.colors.cardForeground,
        borderColor: themeConfig.colors.border,
      }}
    >
      {children}
    </div>
  )
}

