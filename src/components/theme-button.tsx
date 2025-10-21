"use client"

import type React from "react"

import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent"
}

export function ThemeButton({ children, className, variant = "primary", ...props }: ThemeButtonProps) {
  const { theme, themeConfig } = useTheme()
  const classes = getThemeClasses(theme)

  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          bg: themeConfig.colors.primary,
          fg: themeConfig.colors.primaryForeground,
        }
      case "secondary":
        return {
          bg: themeConfig.colors.secondary,
          fg: themeConfig.colors.secondaryForeground,
        }
      case "accent":
        return {
          bg: themeConfig.colors.accent,
          fg: themeConfig.colors.accentForeground,
        }
    }
  }

  const colors = getColors()

  return (
    <button
      className={cn(
        "px-6 py-3",
        classes.button,
        classes.transition,
        "hover:-translate-x-1 hover:-translate-y-1",
        className,
      )}
      style={{
        backgroundColor: colors.bg,
        color: colors.fg,
        borderColor: themeConfig.colors.border,
      }}
      {...props}
    >
      {children}
    </button>
  )
}

