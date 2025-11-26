"use client"

import type React from "react"

import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent"
}

export function ThemeButton({ 
  children, 
  className, 
  variant = "primary", 
  ...props 
}: ThemeButtonProps) {
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)

  const variantClasses = {
    primary: "bg-theme-primary text-theme-primaryForeground",
    secondary: "bg-theme-secondary text-theme-secondaryForeground",
    accent: "bg-theme-accent text-theme-accentForeground",
  } as const

  const isCyberpunk = theme === 'cyberpunk'

  return (
    <button
      className={cn(
        "px-6 py-3",
        classes.button,
        classes.transition,
        "hover:-translate-x-1 hover:-translate-y-1 border-theme-border",
        isCyberpunk 
          ? "cyberpunk-btn"
          : variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}