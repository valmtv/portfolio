"use client"

import type React from "react"

import { useThemeClasses } from "hooks/use-theme-classes"
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
  const { classes } = useThemeClasses()

  const variantClasses = {
    primary: "bg-theme-primary text-theme-primaryForeground",
    secondary: "bg-theme-secondary text-theme-secondaryForeground",
    accent: "bg-theme-accent text-theme-accentForeground",
  } as const

  return (
    <button
      className={cn(
        "px-6 py-3",
        classes.button,
        classes.transition,
        "hover:-translate-x-1 hover:-translate-y-1 border-theme-border",
        classes.buttonClass || variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}