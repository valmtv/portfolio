"use client"

import type React from "react"

import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"

interface ThemeCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function ThemeCard({ children, className, hover = true }: ThemeCardProps) {
  const { classes } = useThemeClasses()

  // Cyberpunk uses a decorative wrapper div with a clipped background pattern.
  // When cardWrapperClass is set, we render that outer wrapper; otherwise we
  // render the article directly. Visual differences (clip-path, glow) live in CSS.
  if (classes.cardWrapperClass) {
    return (
      <div
        className={cn(
          classes.cardWrapperClass,
          "transition-all duration-300",
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