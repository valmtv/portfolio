"use client"

import type React from "react"

import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"

interface ThemeTextProps {
  children: React.ReactNode
  className?: string
  muted?: boolean
}

export function ThemeText({ children, className, muted = false }: ThemeTextProps) {
  const { classes } = useThemeClasses()

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