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
  const { theme, themeConfig } = useTheme()
  const classes = getThemeClasses(theme)

  return (
    <Link
      href={href}
      className={cn(
        "block p-6 md:p-8",
        classes.card,
        classes.cardHover,
        "hover:-translate-x-1 hover:-translate-y-1",
        "group",
      )}
      style={{
        backgroundColor: themeConfig.colors.card,
        color: themeConfig.colors.cardForeground,
        borderColor: themeConfig.colors.border,
      }}
    >
      {icon && (
        <div className={cn("text-4xl mb-4", classes.heading)} style={{ color: themeConfig.colors.accent }}>
          {icon}
        </div>
      )}
      <h3 className={cn(classes.heading, "text-2xl md:text-3xl mb-3")} style={{ color: themeConfig.colors.foreground }}>
        {title}
      </h3>
      <p
        className={cn(classes.body, "text-base md:text-lg leading-relaxed")}
        style={{ color: themeConfig.colors.mutedForeground }}
      >
        {description}
      </p>
    </Link>
  )
}

