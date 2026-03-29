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
        <article className="h-full w-full p-6 text-theme-cardForeground flex flex-col">
          {children}
        </article>
      </div>
    )
  }

  return (
    <article
      className={cn(
        "p-6",
        "bg-theme-card text-theme-cardForeground border-theme-border",
        classes.card,
        hover && classes.cardHover,
        className
      )}
    >
      {children}
    </article>
  )
}