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

  if (theme === 'cyberpunk') {
    return (
      <Link
        href={href}
        className="block group relative"
      >
        <div className={cn(
          "cyberpunk-card-wrapper transition-all duration-300 h-full",
          "group-hover:translate-x-1 group-hover:-translate-y-1"
        )}>
          <div className="bg-theme-card h-full w-full p-6 md:p-8 text-theme-cardForeground [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]">
            {icon && (
              <div className={cn("text-4xl mb-4 text-theme-accent", classes.heading)}>
                {icon}
              </div>
            )}
            <h3 className={cn(classes.heading, "text-2xl md:text-3xl mb-3 text-theme-foreground group-hover:text-theme-primary transition-colors")}>
              <span className="cyberpunk-text" data-text={title}>{title}</span>
            </h3>
            <p className={cn(classes.body, "text-base md:text-lg leading-relaxed text-theme-mutedForeground")}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    )
  }

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