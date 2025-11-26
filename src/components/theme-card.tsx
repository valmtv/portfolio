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

  // Specific style override for cyberpunk theme
  // Remove the border because of using clip-path which cuts off borders
  // Instead might want a background color or a specific border illusion
  const cyberpunkStyles = theme === 'cyberpunk' 
    ? "border-l-4 border-theme-border [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]"
    : ""

  return (
    <div
      className={cn(
        "p-6",
        "bg-theme-card text-theme-cardForeground border-theme-border",
        classes.card,
        hover && classes.cardHover,
        cyberpunkStyles,
        className
      )}
    >
      {children}
    </div>
  )
}