"use client"

import Link from "next/link"
import { useTheme } from "contexts/theme-context"
import { getThemeClasses } from "lib/themes"
import { cn } from "lib/utils"

interface SectionCardProps {
  title: string
  description: string
  href: string
  icon?: string
}

export function SectionCard({ title, description, href, icon }: SectionCardProps) {
  const { theme } = useTheme()
  const classes = getThemeClasses(theme)

  return (
    <Link
      href={href}
      className={cn(
        "block p-6 md:p-8",
        "bg-theme-card text-theme-cardForeground border-theme-border",
        classes.card,
        classes.cardHover,
        "hover:-translate-x-1 hover:-translate-y-1",
        "group"
      )}
    >
      {icon && (
        <div className={cn("text-4xl mb-4 text-theme-accent", classes.heading)}>
          {icon}
        </div>
      )}
      <h3 className={cn(classes.heading, "text-2xl md:text-3xl mb-3 text-theme-foreground")}>
        {title}
      </h3>
      <p className={cn(classes.body, "text-base md:text-lg leading-relaxed text-theme-mutedForeground")}>
        {description}
      </p>
    </Link>
  )
}