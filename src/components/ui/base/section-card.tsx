"use client"

import Link from "next/link"
import { useThemeClasses } from "hooks/use-theme-classes"
import { cn } from "lib/utils"

interface SectionCardProps {
  title: string
  description: string
  href: string
  icon?: string
}

export function SectionCard({ title, description, href, icon }: SectionCardProps) {
  const { classes } = useThemeClasses()

  // Cyberpunk: decorative wrapper + clipped background. Brutalism: plain article.
  // Both share the same DOM structure; the visual difference is driven by CSS on
  // .cyberpunk-card-wrapper and by the headingClass glitch effect.
  if (classes.cardWrapperClass) {
    return (
      <Link href={href} className="block group relative">
        <div
          className={cn(
            classes.cardWrapperClass,
            "transition-all duration-300 h-full",
            "group-hover:translate-x-1 group-hover:-translate-y-1"
          )}
        >
          <article className="h-full w-full p-6 md:p-8 text-theme-cardForeground flex flex-col">
            {icon && (
              <div className={cn("text-4xl mb-4 text-theme-accent", classes.heading)}>
                {icon}
              </div>
            )}
            <h3
              className={cn(
                classes.heading,
                "text-2xl md:text-3xl mb-3 text-theme-foreground group-hover:text-theme-primary transition-colors"
              )}
            >
              <span className={classes.headingClass} data-text={title}>
                {title}
              </span>
            </h3>
            <p className={cn(classes.body, "text-base md:text-lg leading-relaxed text-theme-mutedForeground")}>
              {description}
            </p>
          </article>
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