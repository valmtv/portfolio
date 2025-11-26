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

  if (theme === 'cyberpunk') {
    return (
      <div 
        className={cn(
          "cyberpunk-card-wrapper transition-all duration-300", 
          className
        )}
      >
        <div className="bg-theme-card h-full w-full p-6 text-theme-cardForeground [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]">
          {children}
        </div>
      </div>
    )
  }

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